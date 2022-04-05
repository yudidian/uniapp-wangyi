<template>
  <view class="header">
    <text class="iconfont icon-hanbaobao hamburger" @click="showSidebar"></text>
    <view class="search">
      <input type="text" value="" placeholder="新人必听" class="search-input"/>
      <text class="iconfont icon-sousuo search-icon"></text>
    </view>
    <text class="iconfont icon-maikefeng-xue maikefeng"></text>
  </view>
</template>

<script setup>
const emits = defineEmits(['changeSidebarType'])
const showSidebar = () => {
  emits('changeSidebarType',true)
}
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  height: 120rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2rpx solid #dbdbdb;
  background-color: #FFFFFF;
  padding-top: 40rpx;
  .hamburger {
    font-size: 48rpx;
  }

  .maikefeng {
    font-size: 48rpx;
  }

  .search {
    width: 560rpx;
    height: 60rpx;
    position: relative;

    .search-input {
      width: 560rpx;
      height: 60rpx;
      font-size: 30rpx;
      line-height: 60rpx;
      text-indent: 2em;
      background-color: #f6f6f6;
      border-radius: 30rpx;
    }

    .search-icon {
      position: absolute;
      top: 50%;
      left: 20rpx;
      transform: translateY(-50%);
    }
  }
}
</style>
