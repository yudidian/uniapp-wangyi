<template>
<view class="list">
  <view class="header">
    <text class="header-title">{{ props.title }}</text>
    <view class="header-more">
      <button class="more-btn">更多</button>
      <text class="more-icon icon-right iconfont"></text>
    </view>
  </view>
  <slot name="recommend"></slot>
</view>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import "@/static/style/basic.scss";

.list{
  border-top: 2rpx solid #f1f1f1;
  .header{
    width: 100%;
    height: 80rpx;
    display: flex;
    align-items: center;
    .header-title{
      @include title();
    }
    .header-more{
      position: relative;
      height: 40rpx;
      margin-left: auto;
      margin-right: 8rpx;
      .more-btn{
        width: 100rpx;
        height: 40rpx;
        font-size: 20rpx;
        line-height: 40rpx;
        padding: 0;
        border-radius: 20rpx;
        text-indent: -1em;
      }
      .more-icon{
        position: absolute;
        right: 0;
        top: 50%;
        font-size: 48rpx;
        transform: translateY(-50%);
      }
    }
  }

}
</style>
