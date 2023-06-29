<script setup lang="ts">
import {reqHospitalLevelAndRegion} from "@/api/home";
import {onMounted, ReactiveFlags, ref} from "vue";
import {HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr} from "@/api/home/type.ts";

let levelArr = ref<HospitalLevelAndRegionArr>([]);

// 控制医院等级高亮的响应式数据
let activeFlag = ref<string>('');

onMounted(() => {
  GetLevel();
});

const GetLevel = async () => {
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion("HosType");
  if (result.code === 200) {
    levelArr.value = result.data;
  }
};

// 点击医院等级
const ChangeLevel = (level: string) => {
  activeFlag.value = level;
  // 触发自定义事件，将医院等级参数回传给父组件
  $emit('getLevel', level);
};

let $emit = defineEmits(['getLevel']);
</script>

<script lang="ts">
export default {
  name: 'Level'
}
</script>

<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li :class="{active:activeFlag == ''}" @click="ChangeLevel('')">全部</li>
        <li v-for="level in levelArr" :key="level.value" :class="{active:activeFlag == level.value}"
            @click="ChangeLevel(level.value)">
          {{ level.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.level {
  color: #7f7f7f;

  h1 {
    font-weight: 900;
    margin: 10px 0;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;

      li {
        margin-right: 10px;

        &.active {
          color: #55a6fe;
        }
      }

      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>