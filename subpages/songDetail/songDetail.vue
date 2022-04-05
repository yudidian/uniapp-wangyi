<template>
	<view class="detail-head">
		<text class="head-message">{{ songList.name }}</text>
	</view>
	<!-- 磁盘指针部分 -->
	<view class="needle">
		<text class="needle-round"></text>
		<image :class="playType ? 'needle-iamge needle-iamge-play' : 'needle-iamge' "
			src="/static/images/song/needle.png" />
	</view>
	<!-- 磁盘部分 -->
	<view class="disc">
		<image class="disc-image" src="/static/images/song/disc.png" />
		<image :class="playType ? 'disc-cover disc-cover-play' : 'disc-cover'" :src="songList.picUrl" />
	</view>

	<!-- 进度条部分  progress bar-->
	<view class="progress-bar">
		<text class="start-time">{{ startTime }}</text>
		<view class="progress">
			<view class="current-progress">
				<view class="circle"></view>
			</view>
		</view>
		<text class="end-time">{{songTime}}</text>
	</view>

	<!-- 底部 -->
	<view class="detail-bottom">
		<text class="iconfont icon-shunxu"> </text>
		<text class="iconfont icon-prev" bindtap="changeMusic" id="prev" @click="songPrev"></text>
		<text :class="playType ? 'play iconfont icon-zanting' : 'play iconfont icon-bofang'" @click="playSong"></text>
		<text class="iconfont icon-next" bindtap="changeMusic" id="next" @click="songNext"></text>
		<text class="iconfont icon-24gf-playlistHeart3"> </text>
	</view>
</template>

<script setup>
	import {
		ref,
		onBeforeUnmount
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	import {
		getSongsDetail,
		getSongsPlay
	} from '@/server/api'
	import {
		onLoad
	} from "@dcloudio/uni-app";

	const id = ref('');
	const index = ref(0)
	const store = useStore()
	const songList = ref({})
	const songsUrl = ref('')
	const playType = ref(false)
	const currentTime = ref(0)
	const songTime = ref(0)
	const playTime = ref('0rpx')
	const startTime = ref('00:00')
	const timer = ref({})
	const innerAudioContext = uni.createInnerAudioContext();
	const initDetail = async (id) => {
		const res = await getSongsDetail(id)
		const url = await getSongsPlay(id)
		songList.value = res.songs[0].al
		songTime.value = (res.songs[0].dt / 1000 / 60).toFixed(2)
		songsUrl.value = url.data[0].url
		innerAudioContext.src = songsUrl.value;
		if (timer.value) {
			clearInterval(timer.value)
		}
		playSong()
	}
	onLoad((e) => {
		id.value = e.id
		index.value = e.index
		initDetail(id.value * 1)
	})

	const playSong = () => {
		playType.value = innerAudioContext.paused
		if (!innerAudioContext.paused) {
			innerAudioContext.pause()
			clearInterval(timer.value)
		} else {
			innerAudioContext.play()
			timer.value = setInterval(() => {
				startTime.value = innerAudioContext.currentTime.toFixed(2)
				playTime.value = (224 / (songTime.value * 60) * innerAudioContext.currentTime) + 'px'
			}, 1000)
		}
	}
	const songPrev = () => {
		innerAudioContext.destroy()
		const songIds = store.getters.songList
		if (index.value === 0) {
			initDetail(songIds[songIds.length - 1])
			index.value = songIds.length - 1
		} else {
			initDetail(songIds[index.value * 1 - 1])
			index.value -= 1
		}
	}
	const songNext = () => {
		playType.value = false
		innerAudioContext.destroy()
		const songIds = store.getters.songList
		if (index.value === songIds[songIds.length - 1]) {
			initDetail(songIds[0] * 1)
			innerAudioContext.play()
			index.value = 0
		} else {
			initDetail(songIds[index.value * 1 + 1])
			innerAudioContext.play()
			index.value += 1
		}
	}
	onBeforeUnmount(() => {
		clearInterval(timer.value)
	})
	innerAudioContext.onEnded(() => {
		songNext()
	})
	innerAudioContext.onPause(() => {
		currentTime.value = innerAudioContext.currentTime
	})
	innerAudioContext.onPlay(() => {
		innerAudioContext.seek(currentTime.value)
	})
</script>

<style scoped lang="css">
	page {
		width: 100vw;
		height: 100vh;
		background-image: linear-gradient(rgb(56, 189, 248), rgb(251, 113, 133), rgb(163, 230, 53));
	}

	.detail-head {
		width: 200rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		padding-top: 100rpx;
		white-space: nowrap;
		color: #FFFFFF;
		margin: 0 auto;
		overflow: hidden;
	}

	.detail-head .head-message {
		display: block;
		width: 200rpx;
		white-space: nowrap;
		animation: wordsLoop 10s linear infinite normal;
	}

	.needle {
		position: relative;
		width: 100%;
		height: 300rpx;
	}

	.needle .needle-round {
		position: absolute;
		left: 50%;
		top: -20rpx;
		transform: translateX(-45%);
		z-index: 999;
		width: 60rpx;
		height: 60rpx;
		border-radius: 60rpx;
		background-color: #fff;
	}

	.needle .needle-iamge {
		position: absolute;
		left: 51%;
		transform: translateX(-20%);
		width: 197rpx;
		height: 300rpx;
		z-index: 998;
		transform: rotate(-30deg);
		transform-origin: 20rpx 86rpx;
		transition: all 1s ease;
	}

	.needle .needle-iamge-play {
		left: 45%;
		transform: rotate(0deg);
	}

	.disc {
		position: relative;
		width: 550rpx;
		height: 550rpx;
	}

	.disc-play {
		animation-delay: 1000;
		animation: paly 4s infinite linear;
	}

	.disc .disc-image {
		position: absolute;
		left: 50%;
		top: -28%;
		transform: translateX(-31%);
		width: 550rpx;
		height: 550rpx;
		border-radius: 550rpx;
	}

	.disc .disc-cover {
		position: absolute;
		left: 39%;
		top: -8%;
		width: 334rpx;
		height: 334rpx;
		border-radius: 334rpx;
	}

	.disc-cover-play {
		animation-delay: 1000;
		animation: cover-paly 4s infinite linear;
	}

	.detail-bottom {
		width: 100%;
		height: 180rpx;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.detail-bottom text {
		font-size: 56rpx;
		color: #fff;
	}

	.detail-bottom .play {
		font-size: 88rpx;
	}

	/* 进度条部分 */
	.progress-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 40rpx;
		margin-top: 100rpx;
	}

	.progress-bar .start-time {
		width: 15%;
		text-align: center;
		color: #fff;
	}

	.progress-bar .end-time {
		width: 15%;
		text-align: center;
		color: #fff;
	}

	.progress-bar .progress {
		position: relative;
		width: 448rpx;
		height: 4rpx;
		background-color: #E4E1E2;
	}

	.progress .current-progress {
		position: absolute;
		width: v-bind(playTime);
		height: 4rpx;
		background-color: #f14e4e;
	}

	.current-progress .circle {
		position: absolute;
		top: -4rpx;
		right: -6rpx;
		width: 12rpx;
		height: 12rpx;
		border-radius: 50%;
		background-color: #fff;
	}

	@keyframes paly {
		from {
			transform: rotate(0deg);
			left: 19%;
		}

		to {
			transform: rotate(360deg);
			left: 19%;
		}
	}

	@keyframes cover-paly {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes wordsLoop {
		0% {
			transform: translateX(100rpx);
		}

		100% {
			transform: translateX(-200rpx);
		}
	}
</style>
