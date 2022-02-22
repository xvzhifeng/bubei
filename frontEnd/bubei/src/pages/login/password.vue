<template>
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <image class="image-bg" :src="bkurl" />
    <view>
      <view class="formView">
        <view class="xvhua" :style="{ top: appHeight * 0.3 + 'rpx' }"></view>
        <uni-forms ref="form" :modelValue="formData" :rules="rules">
          <uni-forms-item label="用户名" name="username" required>
            <uni-easyinput
              type="text"
              v-model="formData.username"
              placeholder="请输入用户名"
            />
          </uni-forms-item>
          <uni-forms-item label="密码" name="password" required>
            <uni-easyinput
              type="text"
              v-model="formData.password"
              placeholder="请输入密码"
            />
          </uni-forms-item>
        </uni-forms>
        <view class="buttonview">
          <button @click="submit" plain="true" style="border: 0px">登录</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      appHeight: 0,
      // 表单数据
      formData: {
        username: "username",
        password: "password",
      },
      rules: {
        // 对name字段进行必填验证
        username: {
          rules: [
            {
              required: true,
              errorMessage: "请输入用户名姓名",
            },
            {
              minLength: 5,
              maxLength: 25,
              errorMessage: "姓名长度在 {minLength} 到 {maxLength} 个字符",
            },
          ],
        },
        // 对email字段进行必填验证
        password: {
          rules: [
            {
              required: true,
              errorMessage: "请输入密码",
            },
            {
              minLength: 6,
              maxLength: 25,
              errorMessage: "密码长度在 {minLength} 到 {maxLength} 个字符",
            },
          ],
        },
      },
    };
  },
  onLoad(options) {
    this.bkurl = getApp().globalData.bkurl;
    uni.getSystemInfo({
      success: (res) => {
        console.log("手机可用高度:" + res.windowHeight * 2 + "rpx");
        this.appHeight = res.windowHeight * 2;
      },
    });
  },
  onReady() {
    // 需要在onReady中设置规则
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    submit() {
      this.$refs.form
        .validate()
        .then((res) => {
          console.log("表单数据信息：", res);
          console.log(getApp().globalData.api_passwordLogin);
          uni.request({
            url: getApp().globalData.api_passwordLogin,
            data: {
              username: res.username,
              password: res.password,
            },
            header: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
            success: ({ data, statusCode, header }) => {
              console.log(data);
              if (data.status == 200) {
                getApp().globalData.userID = data.response;
                uni.navigateTo({
                  url: "/pages/index/index",
                  successs: () => {
                    console.log("跳转到主页成功");
                  },
                  fail: () => {
                    console.log("跳转到主页失败");
                  },
                });
              } else if (data.status == 400) {
                uni.showToast({
                  title: "用户名密码错误，请重新输入",
                  icon: "none",
                  mask: true,
                });
                console.log("用户名密码错误，请重新登录");
              }
            },
            fail: (error) => {
                uni.showToast({
                  title: "登录失败，请重新登录",
                  icon: "none",
                  mask: true,
                });
              console.log("登录失败，请重新登录; " + error);
            },
          });
        })
        .catch((err) => {
          console.log("表单错误信息：", err);
        });
    },
  },
};
</script>

<style>
.image-bg {
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.content {
  /* background-color: rgb(58, 57, 57); */
  background-size: 100% 100%;
  width: 100%;
  height: 800px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* justify-items: center; */
  /* color: rgb(59, 58, 58); */
}

.formView {
  /* background-color: bisque; */
  width: 100%;
  margin: 10rpx;
}

.xvhua {
  position: absolute;
  z-index: -1;
  background-color: rgb(179, 178, 178);
  filter: blur(5px);
  opacity: 0.8;
  width: 96%;
  height: 35vh;
  left: 0rpx;
  margin: 2%;
  box-shadow: 2rpx;
}
</style>
