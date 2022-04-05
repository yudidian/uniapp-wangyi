<template>
  <view class="header">
    <text class="header-title">推荐歌单</text>
    <view class="header-more">
      <button class="more-btn">更多</button>
      <text class="more-icon icon-right iconfont"></text>
    </view>
  </view>
</template>

<script>

</script>

<style scoped lang="scss">
.header{
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  .header-title{
    font-size: 38rpx;
    font-weight: 530;
    text-indent: 20rpx;
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
</style>
