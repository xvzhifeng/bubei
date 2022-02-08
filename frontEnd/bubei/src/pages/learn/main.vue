<template>
  <!-- 最外层 -->
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <image class="image-bg" :src="backgroundUrl" />
    <view class="navigate">
      <uni-icons type="left" color="" @click="back()" size="50rpx" />
    </view>
    <!-- 单词选项页面 -->
    <view class="pageOptions" :hidden="!pageShow[0]">
      <!-- 单词显示区域 -->
      <view class="wordView">
        <view class="wordName">
          <text class="wordName">
            {{ words[0].name }}
          </text>
        </view>
        <view class="wordVoice">
          <text>
            {{ words[0].voice }}
          </text>
        </view>
      </view>
      <!-- 单词选项区域 -->
      <view class="wordOptions">
        <view class="wordOption">
          <button @click="options(words[0].name)">
            {{ words[0].name }}
          </button>
        </view>
        <view class="wordOption">
          <button @click="options(words[0].name)">
            {{ words[0].name }}
          </button>
        </view>
        <view class="wordOption">
          <button @click="options(words[0].name)">
            {{ words[0].name }}
          </button>
        </view>
        <view class="wordOption">
          <button @click="options(words[0].name)">
            {{ words[0].name }}
          </button>
        </view>
      </view>
      <view class="lookAnster">
        <view @click="next()" class="lookAnsterText">
          <view :hidden="!nextText">
            <text>看答案</text>
          </view>
          <view :hidden="nextText">
            <text>下一页</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 单词详细信息 -->
    <view class="pageDetail" :hidden="pageShow[1]">
      <!-- 单词显示区域 -->
      <!-- 单词显示区域 -->
      <view class="wordView">
        <view class="wordName">
          <text class="wordName">
            {{ words[0].name }}
          </text>
        </view>
        <view class="wordVoice">
          <text>
            {{ words[0].voice }}
          </text>
        </view>
        <view class="wordMeans">
          <text>
            {{ words[0].means }}
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
          :style="{ height: appHeight * 0.18 + 'rpx' }"></view>
        <view class="sentence" :style="{ height: appHeight * 0.18 + 'rpx' }">
          <view class="sentenceName">
            <text> hello, kangkang. </text>
          </view>
          <view class="sentenceMean"> <text> 你好，kangkang。</text> </view>
        </view>
        <view
          class="grammarXvhua"
          :style="{ height: appHeight * 0.38 + 'rpx' }"
        ></view>
        <view class="grammar" :style="{ height: appHeight * 0.38 + 'rpx' }">
          <view class="grammarList" v-for="(item,index) in words[0].grammer">
            {{item.name}}  {{item.means}}
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
    <view class="pagePart" :hidden="!pageShow[2]">
      <!-- 单词显示区域 -->
      <view class="wordView">
        <text>
          {{ words[0].name }}
        </text>
        <br />
        <text>
          {{ words[0].voice }}
        </text>
        <br />
        <text>
          {{ words[0].means }}
        </text>
      </view>
      <!-- 单词详细页面 -->
      <view class="wordDetail">
        <view class="sentence"> 例句</view>
      </view>
      <view>
        <button hover-class="button-hover" @click="showSentenceMeans()">
          查看例句译文
        </button>
      </view>
      <view>
        <view>
          <button hover-class="button-hover" @click="next()">
            <text>认识</text>
          </button>
        </view>
        <view>
          <button hover-class="button-hover" @click="next()">
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
      words: [
        {
          name: "hello",
          means: "你好",
          voice: "nihao",
          grammer:[
            {
              name:"hello world",
              means:"你好，世界",
            },
            {
              name:"hi",
              means:"你好",
            },
            {
              name:"hello,bye",
              means:"你好，再见"
            }    
          ],
        },
      ],
    };
  },
  onLoad(options) {
    uni.getSystemInfo({
      success: (result) => {
        this.appHeight = result.windowHeight * 2;
      },
      fail: (error) => {
        console.log(`user: ${error}`);
      },
    });
  },
  methods: {
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

.wordOptions {
  width: 600rpx;
  /* align-self: flex-start; */
  /* position: absolute; */
  /* bottom: 75rpx; */
  position: absolute;
  left: 75rpx;
  bottom: 200rpx;
  border-radius: 10rpx;
}

.wordOption {
  margin: 20rpx;
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
</style>
