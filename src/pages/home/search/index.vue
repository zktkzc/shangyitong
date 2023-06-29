<script setup lang="ts">
// 引入element-plus-icon
import {Search} from '@element-plus/icons-vue'
import {ref} from "vue";
// 引入请求方法
import {reqHospitalInfo} from "@/api/home";
import type {HospitalInfo, Content} from "@/api/home/type.ts";
import {useRouter} from "vue-router";
// 收集搜索的关键字（医院的名字）
let hosname = ref<string>('');
// 创建路由器对象
let $router = useRouter();
// 顶部组件的回调
const fetchData = async (keyword: string, cb: any) => {
  // 当用户输入完关键字，此函数会执行一次，发送请求获取需要展示的数据
  let result: HospitalInfo = await reqHospitalInfo(keyword);
  // 整理数据
  let showData = result.data.map(item => {
    return {
      value: item.hosname,
      hoscode: item.hoscode
    }
  });
  cb(showData);
};

// 点击推荐项
const GoDetail = (item: any) => {
  // 跳转到医院详情页
  $router.push({
    path: '/hospital/register',
    query: {
      hoscode: item.hoscode
    }
  });
};
</script>

<script lang="ts">
export default {
  name: 'Search'
}
</script>

<template>
  <div class="search">
    <el-autocomplete
        clearable
        placeholder="请输入医院名称"
        :fetch-suggestions="fetchData"
        v-model="hosname"
        :trigger-on-focus="false"
        @select="GoDetail"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>