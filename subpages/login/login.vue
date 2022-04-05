<template>
	<view class="login">
    <view class="login-form">
      <view class="form-title">手机号登陆</view>
      <input type="number" v-model="phone" placeholder="请输入手机号" class="form-phone">
      <input type="password" v-model="password" placeholder="请输入密码" class="password">
      <view class="form-btn" @click="login">登陆</view>
    </view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const phone = ref('15181551844')
const password = ref('1008611deng')
const store = useStore()
const login = async () => {
  if (phone.value.length === 11 && password.value !== ''){
    await store.dispatch('app/login',{phone: phone.value, password: password.value})
  }
}
</script>

<style scoped lang="scss">
  .login{
    width: 100%;
    height: 100vh;
    background: url("@/static/wangyi.png") no-repeat;
    background-size: 100vw 100vh;
    position: relative;
    .login-form{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 600rpx;
      height: 420rpx;
      border-radius: 40rpx;
      background-color: rgba(233, 119, 119, 0.4);
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%,-50%);
      .form-btn{
        width: 240rpx;
        height: 60rpx;
        margin-top: 40rpx;
        background-color: #DC2C1F;
        text-align: center;
        line-height: 60rpx;
        border-radius: 40rpx;
        color: #ffffff;
        font-weight: 600;
        border: #fc9595 2rpx solid;
      }
      .form-title{
        font-size: 40rpx;
        text-align: center;
        color: #FFFFFF;
        margin-top: 20rpx;
      }
      .form-phone{
        width: 420rpx;
        height: 60rpx;
        margin-top: 40rpx;
        border-radius: 30rpx;
        text-indent: 1em;
        color: #3e3e3e;
        background-color: #FFFFFF;
      }
      .password{
        width: 420rpx;
        height: 60rpx;
        margin-top: 40rpx;
        border-radius: 30rpx;
        text-indent: 1em;
        background-color: #FFFFFF;
        color: #3e3e3e;
      }
    }
  }
</style>
