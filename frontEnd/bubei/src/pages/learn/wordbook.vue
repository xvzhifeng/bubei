<template>
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <view class="navigate">
      <uni-icons type="left" color="" @click="back()" size="50rpx"/>
    </view>
    <view v-if="len == 0">
      <view>
        <uni-card title="词书" @click="uploadBook()">
          <text>当前暂无词书</text>
        </uni-card></view
      >
    </view>
    <view v-else class="wordBookList" >
      <view v-for="(item, index) in booklist" :key="index">
        <uni-card title="词书" :extra="item.wordBookID"  @click="choice(item.wordBookID)" class="studyCard">
          <text>{{ item.wordBookName }}</text>
        </uni-card>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      booklist: [],
      len: 0,
    };
  },
  onLoad(options) {
    // 获取用户详细信息
    uni.request({
      url: getApp().globalData.api_getAllWordBook,
      data: {},
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      method: "GET",
      success: ({ data, statusCode, header }) => {
        this.booklist = data.response;
        this.len = this.booklist.length;
      },
      fail: (error) => {
        console.log("获取词书信息失败");
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
    choice(wordBookID) {
      console.log("用户选择词书id " + wordBookID);
      uni.navigateTo({ url: '/pages/learn/wordsection?id='+ wordBookID })
    },
    uploadBook() {
      console.log("创建词书");
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

.navigate {
  margin: 20rpx;
  display: flex;
  justify-content: flex-start;
  left: 0rpx;
  top: 30rpx;
  z-index: 100;
}

.wordBookList {
    margin: 1%;
}

.studyCard {
  background-color: rgb(150, 150, 150);
  /* color: aliceblue; */
}

text {
    color: #000;
}
</style>
