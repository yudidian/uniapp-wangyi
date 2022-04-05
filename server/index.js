import axios from 'axios'
import axiosAdapterUniapp from 'axios-adapter-uniapp'

const server = axios.create({
    baseURL: 'http://124.223.193.250:3000',
    timeout: 5000,
    withCredentials: true,
    adapter: axiosAdapterUniapp
})

// Add a request interceptor
server.interceptors.request.use(function (config) {
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
server.interceptors.response.use(function (response) {
    if (response.status === 200){
        return response.data
    }else if(response.data.code === 301){
		uni.navigateTo({
			url:'/subpages/login/login'
		})
	}
}, function (error) {
    return Promise.reject(error)
})
export default server
