<script setup lang="ts">
import {useRouter} from "vue-router";
import useUserStore from "@/store/module/user.ts";

let $router = useRouter();
let userStore = useUserStore();
const GoHome = () => {
  $router.push({
    path: '/'
  });
};
const Login = () => {
  userStore.visiable = true;
};
</script>

<script lang="ts">
export default {
  name: 'HospitalTop'
}
</script>

<template>
  <div class="top">
    <div class="content">
      <!--左侧-->
      <div class="left" @click="GoHome">
        <img src="../../assets/images/logo.png" alt="">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <!--右侧-->
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login" @click="Login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 100%;
    background: white;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #bbb;

      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>