<template>
  <!-- 最外层 -->
  <view class="content" :style="{ height: appHeight + 'rpx' }">
    <view class="navigate">
      <uni-icons type="left" color="" @click="back()" size="50rpx" />
    </view>
    <!-- 单词选项页面 -->
    <view class="pageOptions" :hidden="pageShow[0]">
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
    <view class="pageDetail" :hidden="!pageShow[1]">
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
        <view class="grammar"> 相关语法，短语 </view>
      </view>
      <view>
        <button hover-class="button-hover" @click="next()">
          <text>下一词</text>
        </button>
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
      appHeight: 0,
      nextText: true,
      pageShow: [false, false, false],
      words: [
        {
          name: "hello",
          means: "你好",
          voice: "nihao",
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
      uni.navigateBack({ delta: 1 });
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
.content {
  /* background: linear-gradient(to top, rgba(65, 63, 63, 0), rgb(16, 17, 17)); */
  background: #1f1d3a;
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

.wordName {
  font-size: 56rpx;
  color: aliceblue;
}

.wordVoice {
  font-size: 32rpx;
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
</style>
