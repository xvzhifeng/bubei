<template>
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <view class="navigate">
      <uni-icons type="left" color="" @click="back()" size="50rpx" />
    </view>
    <view :style="{ height: appHeight * 0.1 + 'rpx' }"></view>
    <button @click="showDrawer" type="primary" plain="true">选择章节</button>
    <scroll-view
              :scroll-top="scrollTop"
              scroll-y="true"
              class="scroll-Y"
              show-scrollbar="false"
              style="height: 80%"
              >

    <view :v-if="wordLength > 0">
      <view v-for="(item, index) in word" :key="index">
        <view >
          <uni-card :title="item.japaneseMeans" @click="audio(item.voiceUrl,item.wordID)">
          <text >{{ item.chineseMeans }}</text>
        </uni-card>
        </view>
      </view>
    </view>
    </scroll-view>
    <view :v-else-if="wordLength <= 0">
      <uni-card title="info">
        <text>当前章节没有单词</text>
      </uni-card>
    </view>

    <uni-drawer ref="showLeft" mode="left" :mask-click="true">
      <scroll-view style="height: 100%" scroll-y="true" class="sectionList">
        <!-- <button @click="closeDrawer" type="primary">关闭Drawer</button> -->
        <view :v-if="sectionLength > 0">
          <view
            v-for="item in section"
            :key="item.name"
            @click="choiceSection(item.name)"
            class="infoSectionSub"
            >{{ item.name }}</view
          >
        </view>
        <view :v-else-if="sectionLength <= 0">
          <view class="infoSection">
            <view class="infoSectionSub">
              <text>当前词书没有章节</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </uni-drawer>
  </view>
</template>

<script>
export default {
  data() {
    return {
      wordBookID: 0,
      section: [],
      word: [],
      wordLength: 0,
      sectionLength: 0,
    };
  },
  onLoad(options) {
    console.log("当前选择的词书id： " + options.id);
    this.wordBookID = options.id;
    uni.request({
      url: getApp().globalData.api_getWordBookSectionList,
      data: {
        wordBookID: this.wordBookID,
      },
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      method: "GET",
      sslVerify: true,
      success: ({ data, statusCode, header }) => {
        console.log(data);
        this.section = data.response;
        uni.request({
          url: getApp().globalData.api_getWordBookSectionWordList,
          data: {
            wordBookID: this.wordBookID,
            wordSection: this.section[0].name,
          },
          header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          method: "GET",
          sslVerify: true,
          success: ({ data, statusCode, header }) => {
            console.log(data);
            this.word = data.response;
          },
          fail: (error) => {},
        });
      },
      fail: (error) => {},
    });
    uni.getSystemInfo({
      success: (res) => {
        console.log("手机可用高度:" + res.windowHeight * 2 + "rpx");
        this.appHeight = res.windowHeight * 2;
      },
    });
  },
  methods: {
    audio(url,name) {
      console.log(url)
      uni.request({
        url: getApp().globalData.api_getMp3,
        data: {
          url: url,
          name: name,
        },
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
        success: ({ data, statusCode, header }) => {
          console.log("开始播放" + data);
          const innerAudioContext = uni.createInnerAudioContext();
          innerAudioContext.autoplay = true;
          innerAudioContext.src = data;
          innerAudioContext.play();
          innerAudioContext.onPlay(() => {
            console.log("开始播放");
          });
          innerAudioContext.onError((res) => {
            console.log(res);
            console.log(res.errMsg);
            console.log(res.errCode);
          });
        },
        fail: (error) => {},
      });
    },
    choiceSection(sectionName) {
      uni.request({
        url: getApp().globalData.api_getWordBookSectionWordList,
        data: {
          wordBookID: this.wordBookID,
          wordSection: sectionName,
        },
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          console.log(data);
          this.word = data.response;
        },
        fail: (error) => {},
      });
    },
    back() {
      uni.redirectTo({ url: "/pages/learn/wordbook" });
    },
    showDrawer() {
      this.$refs.showLeft.open();
    },
    closeDrawer() {
      this.$refs.showLeft.close();
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
  position: absolute;
  left: 0rpx;
  top: 30rpx;
  z-index: 100;
}
text {
  font-size: 36rpx;
}
.wordList {
  background-color: aliceblue;
}

.sectionList {
  background-color: aliceblue;
  margin: 10rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.infoSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.infoSectionSub {
  display: flex;
  margin: 10rpx;
}
</style>
