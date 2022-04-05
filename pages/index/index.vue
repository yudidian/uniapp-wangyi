<template>
	<Header @changeSidebarType="changeSidebarType" />
	<Banner :banners="banners" />
	<Dragon />
  <MusicList title="推荐歌曲">
    <template v-slot:recommend>
      <view class="content">
        <view class="wrapper" v-for="item in recommend" :key="item.creativeId">
          <image :src="item.uiElement.image.imageUrl" class="wrapper-image"></image>
          <text class="wrapper-message">{{ item.uiElement.mainTitle.title }}</text>
          <text class="iconfont wrapper-icon icon-bofang1">{{playCount(item.resources[0].resourceExtInfo.playCount)}}</text>
        </view>
      </view>
    </template>
  </MusicList>
  <SonglistAlign title="你正在找的好听歌曲">
    <template v-slot:more>
      <view class="header-more">
        <button class="more-btn">更多</button>
        <text class="more-icon icon-right iconfont"></text>
      </view>
    </template>
    <template v-slot:align>
      <swiper
          class="swiper"
          :indicator-dots="false"
          :autoplay="false"
          next-margin="40px"
      >
        <swiper-item
            v-for="(item,index) in songlistAlign.creatives"
            :key="index"
        >
          <view class="swiper-item" v-for="(sp,index) in item.resources" :key="index">
            <image class="align-image" :src="sp.resourceExtInfo.song.al.picUrl"></image>
            <view class="song-info">
              <text class="info-name">{{ sp.resourceExtInfo.song.al.name }}</text>
              <text class="info-detail"></text>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </template>
  </SonglistAlign>
  <SonglistAlign title="热门话题">
    <template v-slot:hotTopic>
      <swiper
          class="swiper"
          :indicator-dots="false"
          :autoplay="false"
          next-margin="40px"
      >
        <swiper-item
            v-for="(item,index) in hotTopic.creatives"
            :key="index"
        >
          <view class="swiper-item" v-for="(sp,index) in item.resources" :key="index">
            <image :src="sp.uiElement.mainTitle.titleImgUrl" class="hotTopic-image"></image>
            <view class="song-info">
              <text class="info-name hotTopic-name">{{ sp.uiElement.mainTitle.title }}</text>
              <text class="info-detail hotTopic-detail">{{ sp.uiElement.subTitle.title }}</text>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </template>
  </SonglistAlign>
  <MusicList title="精选音乐视频">
    <template v-slot:recommend>
      <view class="content">
        <view class="wrapper" v-for="item in slidePlayableMlog" :key="item.id">
          <image :src="item.resource.mlogBaseData.coverUrl" class="wrapper-image"></image>
          <text class="wrapper-message">{{ item.resource.mlogBaseData.text}}</text>
        </view>
      </view>
    </template>
  </MusicList>
  <transition name="fade" v-if="sidebar">
    <Sidebar
        @changeSidebarType="changeSidebarType"
        :type="sidebar"
        class="sidebar"
    />
  </transition>
</template>

<script setup>
	import Header from './components/header.vue'
	import Banner from './components/banner.vue'
	import Dragon from './components/dragon.vue'
	import MusicList from './components/musicList.vue'
	import RankList from './components/rankList.vue'
	import Sidebar from './components/sidebar.vue'
  import SonglistAlign from './components/songlistAlign'
	import {
		ref,
    shallowRef
	} from 'vue'
	// import { onLoad } from "@dcloudio/uni-app";
	import {
		getBanner,
    homepage
	} from '@/server/api'

  const sidebar = ref(false)
	const banners = shallowRef([])
  const songlistAlign = shallowRef({})
  const hotTopic = shallowRef({})
  const slidePlayableMlog = shallowRef({})
  const recommend = shallowRef({})
	const initBannerList = async () => {
		const res = await getBanner()
    const list = await homepage()
		banners.value = res.banners
    recommend.value = list.data.blocks[1].creatives
    songlistAlign.value = list.data.blocks[2]
    hotTopic.value = list.data.blocks[4]
    slidePlayableMlog.value = list.data.blocks[6].extInfo
	}
	const changeSidebarType = (value) => {
    sidebar.value = value
  }
	initBannerList()

  const playCount = (count) => {
    return Math.floor(count/10000)+'万'
  }
</script>
<style scoped lang="scss">
@import "~@/static/style/mixin.scss";
@import "@/static/style/basic.scss";
.fade-enter-active,
.fade-leave-active {
  transition: width 1s ease;
}

.fade-enter-from{
  width: 0;
}
.fade-leave-to {
  width: 0;
}
.fade-leave-from {
  width: 100%;
}

.content{
  display: flex;
  height: 278rpx;
  overflow-x: auto;
  flex-direction: row;
  justify-content: space-between;
  @include clearScorp();
  .wrapper{
    width: 170rpx;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 20rpx;
    .wrapper-image{
      width: 170rpx;
      height: 170rpx;
      border-radius: 10rpx;
    }
    .wrapper-icon{
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(243, 243, 243, 0.2);
      font-size: 20rpx;
      color: #FFFFFF;
    }
    .wrapper-message{
      display: inline-block;
      width: 170rpx;
      height: 40rpx;
      font-size: 20rpx;
      &::v-deep span{
        display: inline-block;
        width: 85px;
        @include clamp(2)
      }
    }
  }
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

.swiper{
  .swiper-item{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    .align-image{
      width: 80rpx;
      height: 80rpx;
      border-radius: 10rpx;
      margin-left: 20rpx;
      overflow: hidden;
    }
    .hotTopic-image{
      width: 40rpx;
      height: 40rpx;
      border-radius: 10rpx;
      margin-left: 20rpx;
    }
    .song-info{
      margin-left: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .hotTopic-name{
        font-size: 34rpx;
        font-weight: 600;
      }
      .hotTopic-detail{
        font-size: 20rpx;
        color: #fa0303;
      }
    }
  }
}
</style>
