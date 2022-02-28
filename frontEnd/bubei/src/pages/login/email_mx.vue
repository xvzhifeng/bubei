
<template>
  <view class="login">
    <image class="image-bg" :src="backgroundUrl" />
    <view class="top_item">
      <text style="color: pink; font-size: 22px; font-weight: bold"
        >邮箱登录</text
      >
    </view>
    <view class="input-item" style="margin-top: 80rpx">
      <uni-icons type="email-filled" color="#FF7272" size="30" />
      <input class="input" placeholder="邮箱" style="margin-left: 40rpx" />
      <button type="primary" @click="getVerificationCode" :disabled="disabled">
        {{ btntxt }}
      </button>
    </view>
    <view class="input-item">
      <uni-icons type="locked" color="#FF7272" size="30" />
      <input
        class="input"
        placeholder="请输入验证码"
        style="margin-left: 40rpx"
      />
    </view>
    <view class="buttons" @click="login">登录</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      btntxt: "发送验证码",
      seconds: 60,
      disabled: false,
      backgroundUrl: "/static/temp/backimage.png",
      title: "邮箱登录",
      formData: {
        email: "sumu@email.com",
      },
      rules: {
        email: {
          // email 字段的校验
          rules: [
            // email 字段不能非空
            {
              required: true,
              message: "请输入邮箱",
            },
            {
              // 对邮箱的格式进行验证
              format: "email",
              errorMessage: "请输入正确的邮箱地址",
            },
          ],
        },
      },
    };
  },
   onLoad(options) {
      console.log(options.email);
      if(options.email != undefined){
          this.formData.email = options.email;
      }
  },
  methods: {
    getVerificationCode() {
      const timer = setInterval(() => {
        this.btntxt = this.seconds + "秒再试";
        this.seconds--;
        this.disabled = true;
        if (this.seconds === 0) {
          clearInterval(timer);
          this.btntxt = "发送验证码";
          this.seconds = 60;
          this.disabled = false;
        }
      }, 1000);
    },
    login() {
      uni.navigateTo({
        url: "/pages/index/index",
        success: () => {
          console.log("success goto index/index page");
        },
      });
    },
    /**
     * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
     * @param {String} name 字段名称
     * @param {String} value 表单域的值
     */
    // binddata(name,value){
    // 通过 input 事件设置表单指定 name 的值
    //   this.$refs.form.setValue(name, value)
    // },
    // 触发提交表单
    submit() {
      this.$refs.form
        .validate()
        .then((res) => {
          console.log("表单数据信息：", res);
        // 调用发送验证码的接口，返回验证码的内容
          uni.request({
              url:"http://127.0.0.1:1011/login/email/text",
              data:{
                  email:res.email
              },
              success:(res) => {
                  console.log(res.data);
                  uni.navigateTo({ url: `/pages/login/verificationCode?code=${res.data.code}`,success:()=>{
                      console.log("跳转到输入验证码的页面");
                  } })
              }
          })
        // console.log(res.email);
        // uni.navigateTo({
        //     url: `/pages/login/verificationCode?code=123456&email=${res.email}`,
        //     success: () => {
        //       console.log("跳转到输入验证码的页面");
        //     },
        //   });
        })
        .catch((err) => {
          console.log("表单错误信息：", err);
        });
    },
  },
};
</script>

<style>
.top_item {
  display: flex;
  margin-top: 140rpx;
  margin-left: 32rpx;
  margin-right: 32rpx;
  justify-content: space-between;
}

.input-item {
  display: flex;
  margin-left: 32rpx;
  margin-right: 32rpx;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid #efeff4;
  margin-bottom: 20rpx;
}
.title-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title {
  font-size: 18px;
}
.input {
  flex: 1;
}
.buttons {
  height: 50px;
  line-height: 50px;
  margin-top: 60rpx;
  margin-left: 32rpx;
  margin-right: 32rpx;
  border-radius: 50rpx;
  font-size: 20px;
  background-color: pink;
  color: #ffffff;
  text-align: center;
}
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
</style>