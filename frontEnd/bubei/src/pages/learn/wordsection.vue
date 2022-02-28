<template>
  <view>
    <button @click="showDrawer" type="primary">选择章节</button>
	<view :v-if="word.lengh > 0">
		<view v-for="(item, index) in word" :key="index" class="wordList">
      <uni-card :title="item.japaneseMeans">
        <text :@click="audio(item.voiceUrl)">{{ item.chineseMeans }}</text>
      </uni-card>
    </view>
	</view>
    <view :v-else-if="word.lengh <= 0">
		<uni-card title="info">
        <text >当前章节没有单词</text>
      </uni-card>
	</view>

    <uni-drawer ref="showLeft" mode="left" :mask-click="true">
      <scroll-view style="height: 100%" scroll-y="true">
        <!-- <button @click="closeDrawer" type="primary">关闭Drawer</button> -->
        <view :v-if="section.length > 0">
          <view
            v-for="item in section"
            :key="item.name"
            @click="choiceSection(item.name)"
            >{{ item.name }}</view
          >
        </view>
		<view :v-else-if="section.length <= 0" style="background:blue">
			当前词书没有章节
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
    audio(url) {
      uni.request({
        url: url,
        data: {
          url: this.words[this.wordIndex].voiceUrl,
          name: this.words[this.wordIndex].wordID,
        },
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
        success: ({ data, statusCode, header }) => {
          console.log(this.words[this.wordIndex]);
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
    showDrawer() {
      this.$refs.showLeft.open();
    },
    closeDrawer() {
      this.$refs.showLeft.close();
    },
  },
};
</script>

<style></style>
