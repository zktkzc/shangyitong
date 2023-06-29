<script setup lang="ts">
// 引入组合式API函数
import {onMounted, ref} from 'vue'
import {reqHospital} from "@/api/home";
// 引入首页轮播图组件
import Carousel from './carousel/index.vue'
// 引入首页搜索组件
import Search from './search/index.vue'
// 引入首页等级组件
import Level from './level/index.vue'
// 引入首页地区选择的组件
import Region from './region/index.vue'
// 引入首页展示医院信息的卡片组件
import Card from './card/index.vue'
import type {Content, HospitalResponseData} from "@/api/home/type.ts";
// 引入右侧组件
import Tip from "@/pages/home/tip/index.vue";
// 分页器页码
let pageNo = ref<number>(1)
// 翻页器一页展示几条数据
let pageSize = ref<number>(10)
// 存储已有的医院的数据
let hasHospitalArr = ref<Content>([]);
// 存储医院总个数
let total = ref<number>(0);
// 存储医院的等级响应数据
let hostype = ref<string>('');
// 存储医院的地区响应数据
let districtCode = ref<string>('');
// 在组件挂载完成后，发送请求获取数据
onMounted(() => {
  getHospitalInfo();
});
// 获取已有的医院的数据
const getHospitalInfo = async () => {
  // 获取医院的数据
  let result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value);
  if (result.code == 200) {
    // 存储已有的医院数据
    hasHospitalArr.value = result.data.content;
    // 存储医院总个数
    total.value = result.data.totalElements;
  }
};

// 翻页器页码改变时触发的函数
const currentChange = () => {
  getHospitalInfo();
};

// 分页器下拉菜单发生变化时会触发
const sizeChange = () => {
  getHospitalInfo();
};

// 获取等级组件传递过来的数据
const GetLevel = (level: string) => {
  hostype.value = level;
  getHospitalInfo();
};

// 获取地区组件传递过来的数据
const GetRegion = (region: string) => {
  districtCode.value = region;
  getHospitalInfo();
};
</script>

<script lang="ts">
export default {
  name: 'Home'
}
</script>

<template>
  <div>
    <!--首页轮播图结构-->
    <Carousel></Carousel>
    <!--首页搜索医院的表单区域-->
    <Search></Search>
    <!--底部展示医院的结构-->
    <el-row gutter="20">
      <el-col :span="20">
        <!--等级组件-->
        <Level @getLevel="GetLevel"/>
        <!--地区-->
        <Region @getRegion="GetRegion"/>
        <!--展示医院的结构-->
        <div class="hospital" v-if="hasHospitalArr.length>0">
          <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item"/>
        </div>
        <el-empty v-else description="暂无数据"/>
        <!-- 分页器 -->
        <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :background="true"
            layout="prev, pager, next, jumper, ->, sizes, total"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
        />
      </el-col>
      <el-col :span="4">
        <!--右侧结构-->
        <Tip/>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0;
  }
}
</style>