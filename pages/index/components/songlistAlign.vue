<template>
  <view class="header">
    <text class="header-title">{{ props.title }}</text>
    <slot name="more"></slot>
  </view>
  <slot name="align"></slot>
  <slot name="hotTopic"></slot>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import "@/static/style/basic.scss";
.header {
  width: 100%;
  height: 80 rpx;
  display: flex;
  align-items: center;
  padding: 20rpx 0;
  .header-title {
    @include title();
  }
}
</style>
