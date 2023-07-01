<script setup lang="ts">
// 左侧菜单需要的图标
import {Document, Menu as IconMenu, Setting, InfoFilled, Search, HomeFilled} from '@element-plus/icons-vue';
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";
import useDetailStore from "@/store/module/hospitalDetail.ts";

// 创建路由实例对象
let $router = useRouter();
// 获取当前路由的信息
let $route = useRoute();
// 获取仓库对象
let detailStore = useDetailStore();
// 左侧菜单点击事件回调
const ChangeActive = (path: string) => {
  $router.push({path, query: {hoscode: $route.query.hoscode}});
};
// 组件挂载完毕，通知pinia发送请求获取医院详情的数据，存储到仓库中
onMounted(() => {
  detailStore.getHospitalDetail($route.query.hoscode as string);
});
</script>

<script lang="ts">
export default {
  name: 'Hospital'
}
</script>

<template>
  <div class="hospital">
    <!-- 左侧导航区域 -->
    <div class="menu">
      <div class="top">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <span> / 医院信息</span>
      </div>
      <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospital/register" @click="ChangeActive('/hospital/register')">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="ChangeActive('/hospital/detail')">
          <el-icon>
            <document/>
          </el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="ChangeActive('/hospital/notice')">
          <el-icon>
            <setting/>
          </el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="ChangeActive('/hospital/close')">
          <el-icon>
            <InfoFilled/>
          </el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="ChangeActive('/hospital/search')">
          <el-icon>
            <Search/>
          </el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 展示内容 -->
    <div class="content">
      <!-- 子组件展示结构 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hospital {
  display: flex;

  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
      color: #7f7f7f;
    }
  }

  .content {
    flex: 8;
  }
}
</style>