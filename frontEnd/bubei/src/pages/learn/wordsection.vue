<template>
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <view class="navigate">
      <uni-icons type="left" color="" @click="back()" size="50rpx" />
    </view>
    <!-- <view :style="{ height: 100+ 'rpx' }"></view> -->
    <button @click="showDrawer" plain="true" class="choiceButton">
      选择章节
    </button>
    <scroll-view
      :scroll-top="scrollTop"
      scroll-y="true"
      class="scroll-Y"
      show-scrollbar="false"
      style="height: 80%"
    >
      <view v-if="wordLength > 0">
        <view v-for="(item, index) in word" :key="index">
          <view>
            <uni-card
              :title="item.japaneseMeans"
              :extra="item.falseName"
              @click="audio(item.voiceUrl, item.wordID)"
            >
              <text>{{ item.chineseMeans }}</text>
            </uni-card>
          </view>
        </view>
      </view>
      <view v-else>
        <uni-card title="info">
          <text>当前章节没有单词</text>
        </uni-card>
      </view>
    </scroll-view>

    <uni-drawer ref="showLeft" mode="left" :mask-click="true">
      <scroll-view style="height: 100%" scroll-y="true" class="sectionList">
        <!-- <button @click="closeDrawer" type="primary">关闭Drawer</button> -->
        <view v-if="sectionLength > 0" class="infoSection">
          <view
            v-for="item in section"
            :key="item.name"
            @click="choiceSection(item.name)"
            class="infoSectionSub"
          >
            <text class="sectionButoon">{{ item.name }}--{{item.count}}</text>
          </view>
        </view>
        <view v-else>
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
        this.sectionLength = this.section.length;
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
            this.wordLength = this.word.length;
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
    audio(url, name) {
      console.log(url);
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
          this.$refs.showLeft.close();
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
  background-color: rgb(131, 130, 130);
}

.navigate {
  margin: 20rpx;
  display: flex;
  justify-content: flex-start;
  left: 0rpx;
  top: 30rpx;
  z-index: 100;
}

.choiceButton {
  margin: 20rpx;
  color: rgb(245, 244, 243);
}
text {
  font-size: 36rpx;
}
.wordList {
  background-color: rgb(131, 130, 130);
}

.sectionList {
  background-color: rgb(131, 130, 130);
  margin: 10rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.infoSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.sectionButoon {
  /* background-color: antiquewhite; */
  width: 100%;
  margin: 10rpx;
}
.infoSectionSub {
  display: flex;
  margin: 10rpx;
  border-style: solid;
  border-width: 0px 0px 10rpx 0rpx;
  border-color: rgb(47, 68, 68);
  width: 100%;
  text-align: center;
}
</style>
