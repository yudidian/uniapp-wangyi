<template>
	<view class="sidebar" data-id="0" @tap.stop="closeSidebar">
		<view class="sidebar-left" data-id="1">
			<view class="left-header">
				<image :src="userInfo.avatarUrl"></image>
				<text class="userName" @tap="loginOrMine">{{userInfo.nickname ? userInfo.nickname : '请登录'}} ></text>
			</view>
      <view class="left-floor">
        <view class="floor-item">
          <text class="iconfont left icon-xin" ></text>
          <text class="message">我的消息</text>
          <text class="iconfont right icon-right"></text>
        </view>
        <view class="floor-item">
          <text class="iconfont left icon-vynil" ></text>
          <text class="message">云贝中心</text>
          <text class="iconfont right icon-right"></text>
        </view>
        <view class="floor-item">
          <text class="iconfont left icon-dengpao" ></text>
          <text class="message">创造者中心</text>
          <text class="iconfont right icon-right"></text>
        </view>
      </view>
      <view class="left-floor">
        <view class="floor-item">
          <text class="iconfont left icon-tianmaohuopiaotongxing" ></text>
          <text class="message">云村有票</text>
          <text class="iconfont right icon-right"></text>
        </view>
        <view class="floor-item">
          <text class="iconfont left icon-shangcheng" ></text>
          <text class="message">商城</text>
          <text class="iconfont right icon-right"></text>
        </view>
        <view class="floor-item">
          <text class="iconfont left icon-jiaoyi" ></text>
          <text class="message">Beat交易平台</text>
          <text class="iconfont right icon-right"></text>
        </view>
        <view class="floor-item">
          <text class="iconfont left icon-youxi" ></text>
          <text class="message">游戏专区</text>
          <text class="iconfont right icon-right"></text>
        </view>
        <view class="floor-item">
          <text class="iconfont left icon-lingsheng" ></text>
          <text class="message">口袋彩铃</text>
          <text class="iconfont right icon-right"></text>
        </view>
      </view>
      <view class="left-floor">
        <view class="floor-item">
          <text class="iconfont left icon-shezhi" ></text>
          <text class="message">设置</text>
          <text class="iconfont right icon-right"></text>
        </view>
        <view class="floor-item">
          <text class="iconfont left icon-moonyueliang" ></text>
          <text class="message">夜间模式</text>
          <text class="iconfont right icon-right"></text>
        </view>
        <view class="floor-item">
          <text class="iconfont left icon-dingshi" ></text>
          <text class="message">定时关闭</text>
          <text class="iconfont right icon-right"></text>
        </view>
      </view>
		</view>
	</view>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()
const userInfo = store.getters.userInfo
const props = defineProps({
  type: {
    type: Boolean,
    default: () => false,
    required: true
  }
})
const emits = defineEmits(['changeSidebarType'])
const closeSidebar = (event) => {
  if(event.target.dataset.id === '1') {
    return
  }else{
    emits('changeSidebarType',!props.type)
  }
}
const loginOrMine = ()=> {
  if (! userInfo.nickname){
    uni.navigateTo({
      url: '/subpages/login/login'
    })
  }else{
    uni.navigateTo({
      url: '/subpages/personalCenter/personalCenter'
    })
  }
}
</script>

<style scoped lang="scss">
	.sidebar{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,0.3);
		.sidebar-left{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 80%;
			height: 100vh;
			background-color: #F5F5F5;
			.left-header{
				display: flex;
				align-items: center;
				justify-content: flex-start;
        margin-top: 80rpx;
				width: 80%;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 40rpx;
					background-color: red;
				}
        .userName{
          font-size: 38rpx;
          padding-left: 20rpx;
          font-weight: 500;
        }
			}
      .left-floor{
        width: 80%;
        display: flex;
        flex-direction: column;
        margin-top: 20rpx;
        background-color: #FFFFFF;
        border-radius: 20rpx;
        .floor-item{
          height: 120rpx;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .left{
            font-size: 48rpx;
            margin-left: 20rpx;
          }
          .message{
            width: 300rpx;
            margin-left: 20rpx;
          }
          .right{
            font-size: 48rpx;
            margin-left: 20rpx;
            color: #8f8f94;
          }
        }
      }
		}
	}
</style>
