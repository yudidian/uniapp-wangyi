<template>
<view class="swiper">
  <swiper
      class="swiper-wrapper"
      :indicator-dots="true"
      indicator-active-color="#fff"
      :autoplay="true"
      :interval="5000"
      :duration="500"
      :circular="true"
  >
    <swiper-item class="wrapper-item" v-for="item in props.banners" :key="item.bannerId">
      <image :src="item.pic"></image>
      <text :class="item.titleColor === 'blue' ? 'message title-color2' : 'message title-color1'">{{item.typeTitle}}</text>
    </swiper-item>
  </swiper>
</view>
</template>

<script setup>
import {watch} from 'vue'
const props = defineProps({
  banners: {
    required: true,
    type: Array
  }
})
watch(() => props.banners,(value)=>{})
</script>

<style scoped lang="scss">
  .swiper{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 180rpx;
    .swiper-wrapper{
      width: 95%;
      border-radius: 14rpx;
      overflow: hidden;
      .wrapper-item{
        width: 100%;
        border-radius: 14rpx;
        image{
          width: 100%;
          height: 160px;
        }
        .message{
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 20rpx;
          color: #FFFFFF;
          padding: 6rpx 14rpx;
          border-radius: 18rpx 0 10rpx 0;
          &.title-color1{
            background-color: red;
          }
          &.title-color2{
            background-color: #409EFF;
          }
        }
      }
    }
  }
</style>
