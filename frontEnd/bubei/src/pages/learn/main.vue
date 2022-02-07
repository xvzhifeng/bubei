<template>
    <!-- 最外层 -->
  <view class="content" :style="{ height: app_height + 'rpx' }">
      <!-- 单词显示区域 -->
      <view class="wordView">

      </view>

<!-- 单词选项区域 -->
      <view class="wordOptions">

      </view>
<!-- 单词详细页面 -->
      <view class="wordDetail">

      </view>

      <view>
        <button
          :disabled="false"
          :loading="false"
          @click="next()"
        >
          <view :hidden="!nextText">
            <text>继续</text>
          </view>
          <view :hidden="nextText">
            <text>下一页</text>
          </view>
        </button>
      </view>

  <view></view>
    </view>
</template>

<script>
export default {
  data() {
    return {
      appHeight: 0,
      nextText:true,
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
    next(){
      this.nextText = !this.nextText;
    }
  },
};
</script>

<style>
</style>
