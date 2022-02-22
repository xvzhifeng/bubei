<template>
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <view class="navigate">
      <uni-icons type="left" color="" @click="back()" size="50rpx" />
    </view>
    <view :style="{ height: appHeight * 0.1 + 'rpx' }"></view>
    <!-- 正在学习 -->
    <view class="studyBook">
      <uni-card title="正在学习" extra="词书" class="studyCard">
        <view>
          <text>{{ bookName }}</text>
        </view>
        <view class="progress-box">
          <progress
            :percent="(learnCount * 100.0) / count"
            show-info
            stroke-width="3"
            activeColor="rgb(248, 194, 16)"
          />
        </view>
        <view class="progressText">
          <view class="progressText1">
            <text>已学习：{{ learnCount }}</text>
          </view>
          <view class="progressText1">
            <text>总数：{{ count }}</text>
          </view>
        </view>
        <button plain="true" class="shiftButton" @click="optionBook()">
          <text>切换词书</text>
        </button>
      </uni-card>
    </view>
    <!-- 我的数据 -->
    <view> </view>

    <!-- 日历 -->
    <view> </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bookName: "新标日初级上",
      appHeight: 1000,
      learnCount: 1,
      count: 100,
      wordBookID: 0,
    };
  },
  onLoad(options) {
    // 获取用户详细信息
    uni.request({
      url: getApp().globalData.api_getUserInfo,
      data: {
        userID: getApp().globalData.userID,
      },
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      method: "GET",
      success: ({ data, statusCode, header }) => {
        console.log(data);
        this.wordbookID = data.response.wordBookID;
        if (this.wordbookID != 0) {
          uni.request({
            url: getApp().globalData.api_getWordBookInfo,
            data: {
              userID: getApp().globalData.userID,
              wordBookID: this.wordbookID,
            },
            header: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            method: "GET",
            success: ({ data, statusCode, header }) => {
              console.log(data);
              this.bookName = data.response.wordBookName;
              this.learnCount = data.response.learnCount;
              this.count = data.response.count;
            },
            fail: (error) => {
              console.log("获取词书详细信息失败");
            },
          });
        } else {
          console.log("用户当前没有选择词书");
          this.bookName = "暂未选择词书";
          this.learnCount = 0;
          this.count = 10000;
        }
      },
      fail: (error) => {
        console.log("获取用户详细信息失败");
        this.bookName = "暂未选择词书";
        this.learnCount = 0;
        this.count = 100;
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
    optionBook() {
      console.log("跳转到选择词书页面");
      uni.redirectTo({ url: "/pages/setting/wordbook" });
    },
	back() {
      uni.redirectTo({ url: "/pages/index/index" });
    },
  },
};
</script>

<style>
.content {
  /* background: #63639c; */
  position: fixed;
  /* z-index: 0; */
  background-size: cover;
  left: 0;
  right: 0;
  /* display: flex; */
  /* flex-direction: column;
  align-items: center;
  justify-content: center; */
  background-color: rgb(73, 73, 73);
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
  /* background-color: lightslategrey; */
}
.studyBook {
  margin: 2%;
  font-size: 36rpx;
  color: #000;
}
.shiftButton {
  width: 40vw;
}

text {
  color: rgb(0, 0, 0);
  font-size: 30rpx;
}

.studyCard {
  background-color: rgb(150, 150, 150);
  /* color: aliceblue; */
}

.progressText {
  display: flex;
  justify-content: space-between;
}

.progressText1 {
  display: inherit;
  font-size: 10rpx;
  /* float: left; */
}

.progressText1 text {
  display: inherit;
  font-size: 10rpx;
  color: antiquewhite;
  /* float: left; */
}

.navigate{
  margin: 20rpx;
  position: absolute;
  left: 0rpx;
  top:30rpx;
  z-index: 100;
}
</style>
