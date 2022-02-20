<template>
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <!-- // backgrount -->
    <image class="image-bg" :src="backgroundUrl" />
    <view class="userIconView">
      <cover-image
        src="/static/logo.png"
        class="userIcon"
        @click="gotoUserPage()"
      ></cover-image>
    </view>
    <view class="perWord">
      <text> Hyacinth </text>
    </view>

    <view class="buttonView">
      <view classs="subButtonView1">
        <view class="xvhua"></view>
        <button
          :disabled="false"
          :loading="false"
          @click="study()"
          plain="true"
          class="button"
        >
          <view class="subButtonView1_1">
            <text class="BurronText">Learn</text>
            <text class="BurronTextCount">{{ learnCount }}</text>
          </view>
        </button>
      </view>

      <view classs="subButtonView2">
        <view class="xvhua"></view>
        <view class="reviewButtton">
          <button
            :disabled="false"
            :loading="false"
            @click="review()"
            plain="true"
            class="button"
          >
            <view class="subButtonView1_1">
              <text class="BurronText">Review</text>
              <text class="BurronTextCount">{{ reviewCount }}</text>
            </view>
          </button>
        </view>
      </view>
    </view>
    <!-- bottom icon -->
    <view class="buttonIcon">
      <uni-icons type="map" size="30" @click="home()" />
      <uni-icons type="star" size="30" @click="collecte()" />
      <uni-icons type="headphones" size="30" @click="listen()" />
      <uni-icons type="paperplane" size="30" @click="statistics()" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      learnCount: 1000,
      reviewCount: 20,
      appHeight: 0,
      backgroundUrl: "/static/temp/index.jpg",
      // backgroundUrl:"/static/logo.png",
    };
  },
  onLoad(options) {
    this.backgroundUrl = getApp().globalData.bkurl;
    console.log(this.backgroundUrl);
    // 获取需要学习的单词数量
    uni.request({
      url: "http://127.0.0.1:10111/words/getNotStudyRecordCount",
      data: {
        userID: getApp().globalData.userID,
        email: getApp().globalData.userEmail,
      },
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      success: ({ data, statusCode, header }) => {
        console.log(data);
        console.log(getApp().globalData.userID);
        this.learnCount = data.response;
      },
      fail: (error) => {
        console.log("获取需要学习的单词数量失败");
      },
    });

    // 获取需要复习的单词数量
    uni.request({
      url: "http://127.0.0.1:10111/words/getStudyRecordCount",
      data: {
        userID: getApp().globalData.userID,
        email: getApp().globalData.userEmail,
      },
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      success: ({ data, statusCode, header }) => {
        console.log(data);
        this.reviewCount = data.response;
      },
      fail: (error) => {
        console.log("获取需要复习的单词数量失败");
      },
    });

    uni.getSystemInfo({
      success: (res) => {
        console.log("手机可用高度:" + res.windowHeight * 2 + "rpx");
        this.appHeight = res.windowHeight * 2;
      },
    });
  },

  methods: {
    gotoUserPage() {
      uni.showToast({
        title: "跳转用户页面",
        icon: "success",
        mask: true,
      });
      uni.navigateTo({
        url: "/pages/index/user",
        success: () => {
          console.log("success goto user page");
        },
      });
    },
    study() {
      if (this.learnCount == 0) {
        uni.showToast({
          title: "当前没有需要学习的单词",
          icon: "success",
          mask: true,
        });
      } else {
        // pages/learn/main
        uni.navigateTo({
          url: "/pages/learn/main?study=1",
          success: () => {
            console.log("success goto learn page");
          },
        });
      }
    },
    review() {
      if (this.learnCount == 0) {
        uni.showToast({
          title: "当前没有需要复习的单词",
          icon: "success",
          mask: true,
        });
      } else {
        // pages/learn/main
        uni.navigateTo({
          url: "/pages/learn/main?study=2",
          success: () => {
            console.log("success goto review page");
          },
        });
      }
    },
    home() {
      //todo
      uni.showToast({
        title: "home",
        icon: "success",
        mask: true,
      });
    },
    collecte() {
      //todo
      uni.showToast({
        title: "collecte",
        icon: "success",
        mask: true,
      });
    },
    listen() {
      //todo
      uni.showToast({
        title: "listen",
        icon: "success",
        mask: true,
      });
    },
    statistics() {
      //todo
      uni.showToast({
        title: "statistics",
        icon: "success",
        mask: true,
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
  /* background: #63639c; */
  position: relative;
  z-index: 0;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.userIconView {
  /* display: flex;
	align-items: left;
	justify-content: left; */
  position: absolute;
  margin: 20rpx;
  left: 2rpx;
  top: 30rpx;
}

.userIcon {
  width: 120rpx;
  height: 120rpx;
  border-radius: 100px;
}
.buttonView {
  display: flex;
  justify-content: space-around;
  width: 750rpx;
  /* flex-basis: 5upx;
  margin: 0 auto; */
  position: absolute;
  bottom: 240rpx;
}
.button {
  padding: 0rpx;
  border: 0rpx;
  /* filter: blur(1px); */
}
.subButtonView1 {
  width: 280rpx;
  height: 120rpx;
  border-radius: 50%;
  display: inline-block;
  /* border: 2px solid #4caf50; */
  filter: blur(10px);
}

.subButtonView1_1 {
  width: 250rpx;
  display: flex;
  flex-direction: column;
  /* background: rgba(10, 10, 10, 0.4); */
  /* border: 2px solid #4caf50; */
  /* z-index: -1;
  opacity: 0.5; */
}

.subButtonView2 {
  border-radius: 100px;
  width: 280rpx;
  /* border: 2px solid #4caf50; */
  /* opacity: 0.3;
  filter: blur(20px); */
  display: inline-block;
}
.perWord {
  font-size: 60rpx;
  display: flex;
  flex-basis: 500upx;
}
.BurronText {
  font-size: 28rpx;
  color: rgba(14, 13, 13);
  width: 120rpx;
  display: block;
}
.BurronTextCount {
  font-size: 28rpx;
  color: rgb(233, 197, 37);
  width: 120rpx;
  line-height: 110%;
}

.buttonIcon {
  display: flex;
  justify-content: space-around;
  width: 750rpx;
  position: absolute;
  bottom: 75rpx;
  color: rgb(255, 251, 246);
}
.xvhua {
  position: absolute;
  z-index: -1;
  background-color: rgb(179, 178, 178);
  filter: blur(2px);
  height: 100%;
  width: 250rpx;
  opacity: 0.8;
}
.reviewButtton {
  z-index: 1;
  /* position: absolute; */
  /* filter: blur(10px); */
  /* float: left; */
}
</style>
