<template>
  <div class="container">
    <!--顶部全局组件-->
    <HospitalTop></HospitalTop>
    <!--路由组件-->
    <div class="content">
      <!--展示路由组件-->
      <router-view></router-view>
    </div>
    <!--底部全局组件-->
    <HospitalBottom></HospitalBottom>
    <!-- 登录组件 -->
    <Login/>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import {onMounted} from "vue"
import Login from "@/components/login/index.vue";

onMounted(() => {
  request.get('/hosp/hospital/1/10').then(res => {
  });
});
</script>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>