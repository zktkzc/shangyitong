<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from './carousel/index.vue'
// 引入首页搜索组件
import Search from './search/index.vue'
</script>

<template>
  <div>
    <!--  首页轮播图结构-->
    <Carousel></Carousel>
    <!--    首页搜索医院的表单区域-->
    <Search></Search>
  </div>
</template>

<style scoped lang="scss">

</style>