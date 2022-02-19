<template>
  <!-- 最外层 -->
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <image class="image-bg" :src="backgroundUrl" />
    <view class="navigate">
      <uni-icons type="left" color="" @click="back()" size="50rpx" />
    </view>
    <!-- 单词选项页面 -->
    <view class="pageOptions" v-show="pageShow[0]">
      <!-- 单词显示区域 -->
      <view class="wordView">
        <view class="wordName">
          <text class="wordName">
            {{ words[wordIndex].name }}
          </text>
          <uni-badge
            v-bind:text="currentCount"
            type="warning"
            :inverted="true"
          ></uni-badge>
        </view>
        <view class="wordVoice">
          <text>
            {{ words[wordIndex].voice }}
          </text>
        </view>
      </view>
      <!-- 单词选项区域 -->
      <view class="wordOptions">
        <view
          class="wordOption"
          v-for="(item, index) in words[wordIndex].options"
          :key="index"
        >
          <view class="optionXvhua"></view>
          <button
            @click="choice(item.name)"
            plain="true"
            class="buttonNoBorder"
          >
            {{ item.name }}
          </button>
        </view>
        <!-- <view class="wordOption">
          <button @click="options(words[wordIndex].name)">
            {{ words[wordIndex].name }}
          </button>
        </view>
        <view class="wordOption">
          <button @click="options(words[wordIndex].name)">
            {{ words[wordIndex].name }}
          </button>
        </view>
        <view class="wordOption">
          <button @click="options(words[wordIndex].name)">
            {{ words[wordIndex].name }}
          </button>
        </view> -->
      </view>
      <view class="lookAnster">
        <view @click="lookAnster()" class="lookAnsterText">
          <view>
            <text>看答案</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 单词详细信息 -->
    <view class="pageDetail" v-show="pageShow[1]">
      <!-- 单词显示区域 -->
      <!-- 单词显示区域 -->
      <view class="wordView">
        <view class="wordName">
          <text class="wordName">
            {{ words[wordIndex].name }}
          </text>
          <uni-badge
            v-bind:text="currentCount"
            type="warning"
            :inverted="true"
          ></uni-badge>
        </view>
        <view class="wordVoice">
          <text>
            {{ words[wordIndex].voice }}
          </text>
        </view>
        <view class="wordMeans">
          <text>
            {{ words[wordIndex].means }}
          </text>
        </view>
      </view>
      <view
        class="wordViewSize"
        :style="{ height: appHeight * 0.18 + 'rpx' }"
      ></view>
      <!-- 单词详细页面 -->
      <view class="wordDetail" :style="{ height: appHeight * 0.6 + 'rpx' }">
        <view
          class="sentenceXvhua"
          :style="{ height: appHeight * 0.18 + 'rpx' }"
        ></view>
        <view class="sentence" :style="{ height: appHeight * 0.18 + 'rpx' }">
          <view class="sentenceName">
            <text v-if="words[wordIndex].sentence[0]">
              {{ words[wordIndex].sentence[0].name }}</text
            >
          </view>
          <view class="sentenceMean">
            <text v-if="words[wordIndex].sentence[0]">
              {{ words[wordIndex].sentence[0].means }}</text
            >
          </view>
        </view>
        <view
          class="grammarXvhua"
          :style="{ height: appHeight * 0.38 + 'rpx' }"
        ></view>
        <view class="grammar" :style="{ height: appHeight * 0.38 + 'rpx' }">
          <view
            class="grammarList"
            v-for="(item, index) in words[wordIndex].grammer"
            :key="index"
          >
            {{ item.name }} {{ item.means }}
          </view>
        </view>
      </view>
      <view>
        <view class="lookAnster">
          <view @click="nextWord()" class="lookAnsterText">
            <view>
              <text>下一词</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 单词显示例句，猜单词页面 -->
    <view class="pagePart" v-show="pageShow[2]">
      <!-- 单词显示区域 -->
      <view class="wordView">
        <view class="wordName">
          <text class="wordName">
            {{ words[wordIndex].name }}
          </text>
          <uni-badge
            v-bind:text="currentCount"
            type="warning"
            :inverted="true"
          ></uni-badge>
        </view>
        <view class="wordVoice">
          <text>
            {{ words[wordIndex].voice }}
          </text>
        </view>
        <view class="wordMeans">
          <text>
            {{ words[wordIndex].means }}
          </text>
        </view>
      </view>

      <!-- 单词详细页面 -->
      <view class="wordDetail">
        <!-- <view class="sentence"> 例句</view> -->
        <view
          class="wordViewSize"
          :style="{ height: appHeight * 0.18 + 'rpx' }"
        ></view>
        <view
          class="sentenceXvhua"
          :style="{ height: appHeight * 0.18 + 'rpx' }"
        ></view>
        <view class="sentence" :style="{ height: appHeight * 0.18 + 'rpx' }">
          <view class="sentenceName">
            <text>{{ words[wordIndex].sentence[0].name }}</text>
          </view>
          <view class="sentenceMean" :hidden="showSentenceMeansFlag">
            <text> {{ words[wordIndex].sentence[0].means }}</text>
          </view>
        </view>

        <view :style="{ height: appHeight * 0.2 + 'rpx' }"></view>
      </view>
      <view class="lookSentenceMeans">
        <uni-icons
          type="star"
          size="40"
          @click="showSentenceMeans()"
        ></uni-icons>
        <view>
          <text>查看例句译文</text>
        </view>
      </view>
      <view class="bottomView">
        <view class="knowButton">
          <button
            open-type=""
            hover-class="button-hover"
            @click="know()"
            plain="true"
            class="buttonNoBorder"
          >
            <text>认识</text>
          </button>
        </view>
        <view class="knowButton">
          <button
            open-type=""
            hover-class="button-hover"
            @click="unknow()"
            plain="true"
            class="buttonNoBorder"
          >
            <text>不认识</text>
          </button>
        </view>
      </view>
    </view>

    <view></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      backgroundUrl: "/static/temp/index.jpg",
      appHeight: 0,
      nextText: true,
      pageShow: [false, false, false],
      showSentenceMeansFlag: true,
      wordIndex: 0,
      wordLength: 0,
      currentCount: 1,
      study: false,
      reviwe: [],
      words: [
        {
          name: "hello1",
          means: "你好",
          voice: "nihao",
          count: 0,
          options: [
            {
              name: "word1",
            },
            {
              name: "word1",
            },
            {
              name: "word1",
            },
            {
              name: "hello1",
            },
          ],
          sentence: [
            {
              name: "hello world",
              means: "你好，世界",
            },
          ],
          grammer: [
            {
              name: "hello world",
              means: "你好，世界",
            },
            {
              name: "hi",
              means: "你好",
            },
            {
              name: "hello,bye",
              means: "你好，再见",
            },
          ],
        },
        {
          name: "hello2",
          means: "你好",
          voice: "nihao",
          count: 0,
          options: [
            {
              name: "word1",
            },
            {
              name: "word1",
            },
            {
              name: "word1",
            },
            {
              name: "hello2",
            },
          ],
          sentence: [
            {
              name: "hello world",
              means: "你好，世界",
            },
          ],
          grammer: [
            {
              name: "hello world",
              means: "你好，世界",
            },
            {
              name: "hi",
              means: "你好",
            },
            {
              name: "hello,bye",
              means: "你好，再见",
            },
          ],
        },
        {
          name: "hello3",
          means: "你好",
          voice: "nihao",
          count: 0,
          options: [
            {
              name: "word1",
            },
            {
              name: "word1",
            },
            {
              name: "word1",
            },
            {
              name: "hello3",
            },
          ],
          sentence: [
            {
              name: "hello world",
              means: "你好，世界",
            },
          ],
          grammer: [
            {
              name: "hello world",
              means: "你好，世界",
            },
            {
              name: "hi",
              means: "你好",
            },
            {
              name: "hello,bye",
              means: "你好，再见",
            },
          ],
        },
      ],
    };
  },
  onLoad(options) {
    console.log(getApp().globalData.userID);
    console.log(getApp().globalData.userEmail);
    if (options.study == 1) {
      this.study = true;
      uni.request({
        url: "http://api.sumu.today:10111/words/getNotStudyWords",
        data: {
          userID: getApp().globalData.userID,
          email: getApp().globalData.userEmail,
          size: 10,
          current: 1,
        },
        method: "GET",
        header: {
          "content-type": "application/json",
        },
        success: ({ data, statusCode, header }) => {
          console.log(this.words);
          console.log(data);
          this.words = data.response;
          this.wordLength = this.words.length;
          this.reviwe = new Array(this.wordLength);
          this.reviwe.fill(false);
          console.log(this.words);
        },
        fail: (error) => {
          alert(error.message);
        },
      });
    } else if (options.study == 2) {
      this.study = false;
      uni.request({
        url: "http://api.sumu.today:10111/words/getStudyWords",
        data: {
          userID: getApp().globalData.userID,
          email: getApp().globalData.userEmail,
          size: 10,
          current: 1,
        },
        method: "GET",
        header: {
          "content-type": "application/json",
        },
        success: ({ data, statusCode, header }) => {
          console.log(this.words);
          console.log(data);
          this.words = data.response;
          this.wordLength = this.words.length;
          this.reviwe = new Array(this.wordLength);
          this.reviwe.fill(true);
          console.log(this.words);
        },
        fail: (error) => {
          alert(error.message);
        },
      });
    }
    uni.getSystemInfo({
      success: (result) => {
        this.appHeight = result.windowHeight * 2;
      },
      fail: (error) => {
        console.log(`user: ${error}`);
      },
    });

    this.changeShow();
  },
  methods: {
    changeShow(showDetail = false) {
      this.currentCount = this.words[this.wordIndex].count;
      console.log("changeShow :" + this.wordIndex);
      this.pageShow.fill(false);
      if (showDetail) {
        this.$set(this.pageShow, 1, true);
      } else {
        if (this.words[this.wordIndex].count == 0) {
          this.$set(this.pageShow, 0, true);
        } else {
          this.$set(this.pageShow, 2, true);
        }
      }

      console.log(this.pageShow);
    },
    back() {
      uni.navigateTo({
        url: "/pages/index/index",
        success: () => {
          console.log("success goto index/index page");
        },
      });
    },
    next() {
      this.nextText = !this.nextText;
    },
    options(event) {
      console.log(event);
    },
    showSentenceMeans() {
      this.showSentenceMeansFlag = !this.showSentenceMeansFlag;
    },
    lookAnster() {
      this.words[this.wordIndex].count = 0;
      console.log(this.pageShow);
      this.changeShow(true);
    },
    add(api_url) {
      uni.request({
        url: api_url,
        data: {
          userID: getApp().globalData.userID,
          wordID: this.words[this.wordIndex].wordID,
          isStudy: this.words[this.wordIndex].count,
        },
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          console.log(data.message);
        },
        fail: (error) => {
          console.log("学习记录添加失败");
        },
      });
    },
    nextWord() {
      if (
        (this.currentCount >= 3 && study) ||
        (!study && this.currentCount >= 1 && reviwe[this.wordIndex]) ||
        (!study && this.currentCount >= 3 && !reviwe[this.wordIndex])
      ) {
        if (study || !reviwe[this.wordIndex]) {
          add(getApp().globalData.api_addStudyRecord);
        } else {
          add(getApp().globalData.api_updateStudyRecord);
        }
        this.words.splice(this.wordIndex, 1);
        this.reviwe.splice(this.wordIndex, 1);
      }
      if (this.words.length == 0) {
        uni.showToast({
          title: "当前单词学习完了",
          icon: "success",
          mask: true,
        });
        uni.redirectTo({
          url: "/pages/index/index",
          success: () => {
            console.log("success goto index/index page");
          },
        });
        return;
      }
      console.log(this.words);
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      console.log(this.wordIndex);
      this.changeShow();
    },
    know() {
      this.words[this.wordIndex].count += 1;
      this.changeShow(true);
    },
    unknow() {
      this.words[this.wordIndex].count = 0;
      this.changeShow(true);
    },
    choice(word) {
      if (word == this.words[this.wordIndex].name) {
        this.words[this.wordIndex].count++;
      } else {
        this.words[this.wordIndex].count = 0;
        this.reviwe[this.wordIndex] = false;
        uni.showToast({
          title: "单词选择错误",
          icon: "faild",
          mask: true,
        });
      }
      this.changeShow(true);
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
  /* opacity: 0.3; */
  filter: blur(10px);
}
.content {
  /* background: linear-gradient(to top, rgba(65, 63, 63, 0), rgb(16, 17, 17)); */

  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
}

.navigate {
  margin: 20rpx;
  position: absolute;
  left: 0rpx;
  top: 30rpx;
}

.wordView {
  position: absolute;
  margin: 20rpx;
  left: 60rpx;
  top: 120rpx;
}

.wordViewSize {
  height: 200rpx;
  width: 750rpx;
}

.wordName {
  font-size: 56rpx;
  color: aliceblue;
}

.wordVoice {
  font-size: 30rpx;
  color: aliceblue;
  margin: 10rpx;
}

.wordMeans {
  font-size: 36rpx;
  color: aliceblue;
  margin: 10rpx;
}

.optionXvhua {
  position: absolute;
  background-color: rgba(143, 143, 143, 0.651);
  width: 560rpx;
  height: 100rpx;
  border-radius: 20rpx;
  box-shadow: 2px 2px 2px #b3aeae;
}

.wordOptions {
  width: 600rpx;

  position: absolute;
  left: 75rpx;
  bottom: 200rpx;
  border-radius: 10rpx;
}

.wordOption {
  margin: 20rpx;
  border-radius: 20rpx;
}

.lookAnster {
  color: rgb(211, 177, 28);
  position: absolute;
  bottom: 50rpx;
  left: 300rpx;
}

.lookAnsterText {
  width: 150rpx;
  text-align: center;
  font-size: 36rpx;
}

.wordDetail {
  width: 750rpx;
}

.sentence {
  /* background-color: rgb(211, 177, 28); */
  height: 200rpx;
  margin: 20rpx;
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* opacity: 0.8; */
}

.sentenceXvhua {
  background-color: rgba(143, 143, 143, 0.651);
  /* height: 160rpx; */
  margin: 20rpx;
  border-radius: 20rpx;
  position: absolute;
  z-index: -1;
  width: 710rpx;
  /* filter: blur(2px); */
  opacity: 0.7;
}

.sentenceName {
  /* position: absolute; */
  margin: 40rpx 60rpx 0rpx;
}

.sentenceMean {
  /* position: absolute; */
  /* top: 20rpx; */
  margin: 20rpx 60rpx 0rpx;
}

.grammarXvhua {
  background-color: rgba(143, 143, 143, 0.651);
  /* height: 160rpx; */
  margin: 20rpx;
  border-radius: 20rpx;
  position: absolute;
  z-index: -1;
  width: 710rpx;
  /* filter: blur(2px); */
  opacity: 0.7;
}

.grammar {
  /* background-color: rgb(211, 177, 28); */
  height: 550rpx;
  margin: 20rpx;
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
}

.grammarList {
  margin: 20rpx 60rpx 0rpx;
}

.bottomView {
  display: flex;
  position: absolute;
  bottom: 20rpx;
  /* left: 20rpx; */
}

.knowButton {
  width: 320rpx;
  text-align: center;
  height: 100rpx;
  margin: 20rpx;
  border: 0rpx;
}

.buttonNoBorder {
  border: 0rpx;
}

.button-hover {
  background-color: rgba(143, 143, 143, 0.651);
}

.lookSentenceMeans {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
