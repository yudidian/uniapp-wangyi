<template>
	<view class="recommendSongs">
		<view class="recommendSongs-header">
			<view class="title">
				<text class="left  icon-leftarrow iconfont" @click="goBack"></text>
				<text class="message">每日推荐</text>
				<text class="right iconfont icon-diandian"></text>
			</view>
			<view class="time">
				<text class="time-months">{{ months }}</text>
				<text class="time-day">/{{day}}</text>
				<view class="time-like">查看今日运势></view>
			</view>
		</view>
		<view class="recommendSongs-wrapper">
			<view class="header">
				<text class="iconfont icon-next paly"></text>
				<text class="message">播放全部</text>
				<text class="iconfont icon-right1 change"></text>
			</view>
			<view class="list">
				<view class="list-item" :data-id="song.al.id" v-for="(song,index) in songList" :key="song.al.id"
					@click="toDetail(song.id,index)">
					<image :src="song.al.picUrl"></image>
					<view class="message">
						<text class="songName">{{song.name}}</text>
						<view class="songMessages">
							<text class="songMessage" v-for="a in song.ar" :key="a.id">{{a.name+' '}}</text>
						</view>
					</view>
					<text class="play iconfont icon-Play"></text>
					<text class="more iconfont icon-diandian"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		getSongs
	} from '@/server/api'
	import {
		ref,
		computed
	} from 'vue'
	import {
		useStore
	} from 'vuex'

	const store = useStore()
	const songList = ref([])
	const months = computed(() => {
		const count = new Date().getMonth() + 1
		if (count < 10) {
			return '0' + count
		}
		return count
	})
	const day = computed(() => {
		const count = new Date().getDate()
		if (count < 10) {
			return '0' + count
		}
		return count
	})
	const initSongList = async () => {
		const res = await getSongs({
			cookie: store.getters.cookie
		})
		if (res.code === 200) {
			songList.value = res.data.dailySongs
      let songIdList = []
      res.data.dailySongs.forEach(item => {
        songIdList.push(item.id)
      })
      store.dispatch('app/allSongList',songIdList)
		}

	}
	initSongList()
	const goBack = () => {
		uni.navigateBack({
			delta: 2
		})
	}
	const toDetail = (id,index) => {
		uni.navigateTo({
			url: `/subpages/songDetail/songDetail?id=${id}&index=${index}`
		})
	}
</script>

<style scoped lang="scss">
	.recommendSongs {
		.recommendSongs-header {
			width: 100%;
			height: 380rpx;
			background-image: linear-gradient(rgb(254, 202, 202), rgb(220, 38, 38));

			.title {
				width: 100%;
				height: 140rpx;
				display: flex;
				align-items: flex-end;
				padding-left: 20rpx;

				.left {
					color: #FFFFFF;
					font-size: 68rpx;
				}

				.message {
					color: #FFFFFF;
					margin-left: 20rpx;
					font-size: 32rpx;
					font-weight: 600;
					line-height: 60rpx;
				}

				.right {
					margin-left: auto;
					color: #FFFFFF;
					font-size: 54rpx;
					margin-right: 20rpx;
					line-height: 70rpx;
				}
			}

			.time {
				margin-top: 110rpx;
				color: #FFFFFF;
				margin-left: 20rpx;
				overflow: hidden;

				.time-months {
					font-size: 60rpx;
					font-weight: 600;
				}

				.time-day {
					font-size: 30rpx;
				}

				.time-like {
					font-size: 20rpx;
				}
			}
		}

		.recommendSongs-wrapper {
			.header {
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 100%;
				height: 60rpx;

				.paly {
					width: 80rpx;
					color: red;
					font-size: 38rpx;
					margin-left: 20rpx;
				}

				.message {
					width: 700rpx;
					font-size: 30rpx;
					font-weight: 600;
				}

				.change {
					width: 60rpx;
				}
			}

			.list {
				.list-item {
					display: flex;
					align-items: center;
					margin-left: 20rpx;
					margin-top: 20rpx;

					image {
						width: 80rpx;
						height: 80rpx;
						background-color: red;
						border-radius: 10rpx;
					}

					.message {
						width: 500rpx;
						margin-left: 20rpx;
						display: flex;
						flex-direction: column;
						justify-content: flex-start;

						.songName {
							font-size: 28rpx;
						}

						.songMessages {
							font-size: 20rpx;
						}
					}

					.play {
						font-size: 38rpx;
						margin-right: 40rpx;
					}

					.more {
						font-size: 38rpx;
						color: #8f8f94;
					}
				}
			}
		}
	}
</style>
