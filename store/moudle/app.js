import {login} from '@/server/login'

export default {
    namespaced: true,
    state: {
        cookie: uni.getStorageSync('cookie') || '',
		songList:[],
		userInfo:uni.getStorageSync('userInfo') || {}
    },
    mutations: {
        setCookie(state, value) {
            state.cookie = value
        },
		serSongList(state,value) {
			state.songList = value
		},
		serUserInfo(state, value) {
			state.userInfo = value
		}
    },
    actions: {
        async login({commit}, data) {
            const res = await login({
                phone: data.phone * 1,
                password: data.password
            })
			console.log(res)
            if (res.code === 200){
                commit('setCookie',res.cookie)
				commit('serUserInfo',res.profile)
				uni.setStorageSync('cookie',res.cookie)
				uni.setStorageSync('userInfo',res.profile)
				uni.switchTab({
					url:'/pages/index/index'
				})
            }
        },
		allSongList({commit},data){
			commit('serSongList',data)
		}
    }
}
