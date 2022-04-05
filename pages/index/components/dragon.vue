<template>
<view class="dragon">
 <view class="dragon-wrapper" v-for="item in dragonList" :key="item.id" @click="goToDetail(item.id)">
   <view class="dragon-top" >
     <image :src="item.iconUrl"></image>
   </view>
   <text class="title">{{item.name}}</text>
 </view>
</view>
</template>

<script setup>
import { getDragon } from '@/server/api'
import { ref } from 'vue'

const dragonList = ref([])
const initDragon =async () => {
  const res = await getDragon()
  dragonList.value = res.data
}
initDragon()
const goToDetail = (id) => {
	if(id === -1) {
		uni.navigateTo({
			url:'/subpages/recommendSongs/recommendSongs'
		})
	}
}
</script>

<style scoped lang="scss">
.dragon{
  overflow-x: auto;
  display: flex;
  height: 200rpx;
  margin-top: 10rpx;
  &::-webkit-scrollbar{
    width: 0;
  }
  .dragon-wrapper{
    width: 2400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dragon-top{
      width: 120rpx;
      text-align: center;
      image{
        width: 80rpx;
        height: 80rpx;
        background-color: red;
        border-radius: 40rpx;
      }
    }
    .title{
      width: 120rpx;
      font-size: 20rpx;
      text-align: center;
    }
  }

}
</style>
