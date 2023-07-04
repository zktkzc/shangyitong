<script setup lang="ts">
// 获取user仓库的数据
import useUserStore from '@/store/module/user.ts';

let userStore = useUserStore();
</script>

<script lang="ts">
export default {
  name: 'Login'
}
</script>

<template>
  <div class="login_container">
    <el-dialog v-model="userStore.visiable" title="用户登录">

    </el-dialog>
  </div>
</template>

<style scoped lang="scss">

</style>