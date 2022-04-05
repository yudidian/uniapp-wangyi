<template>
	<view class="personalCenter">
    <view class="header"></view>
    <div class="userInfo">
      <image :src="userInfo.avatarUrl"></image>
      <view class="name">{{ userInfo.nickname }}</view>
    </div>
  </view>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  const userInfo = store.getters.userInfo
</script>

<style scoped lang="scss">
  .personalCenter{
    position: relative;
    height: 100vh;
    background-color: #f6f6f6;
    .header{
      width: 100%;
      height: 500rpx;
      background-image: linear-gradient(rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248));
    }
    .userInfo{
      position: absolute;
      width: 90%;
      height: 400rpx;
      background-color: #FFFFFF;
      border-radius: 40rpx;
      top: 35%;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0px 0px 10px #dedede;
      image{
        width: 160rpx;
        height: 160rpx;
        border-radius: 80rpx;
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translateX(-50%);
      }
      .name{
        position: absolute;
        top: 20%;
        width: 100%;
        font-size: 48rpx;
        font-weight: 700;
        text-align: center;
      }
    }
  }
</style>
