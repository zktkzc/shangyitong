<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData} from "@/api/home/type.ts";
import {reqHospitalLevelAndRegion} from "@/api/home";

let regionArr = ref<HospitalLevelAndRegionArr>([]);

let regionFlag = ref<string>('');

onMounted(() => {
  GetRegion();
});

const GetRegion = async () => {
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion("Beijin");
  if (result.code === 200) {
    regionArr.value = result.data;
  }
}

const ChangeRegion = (region: string) => {
  regionFlag.value = region;
  $emit('getRegion', region);
}

let $emit = defineEmits(['getRegion']);
</script>

<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{active:regionFlag == ''}" @click="ChangeRegion('')">全部</li>
        <li v-for="region in regionArr" :key="region.value" :class="{active:regionFlag == region.value}"
            @click="ChangeRegion(region.value)">
          {{ region.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 10px;

  .content {
    display: flex;

    .left {
      margin-right: 10px;
      width: 50px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 10px;
        margin-bottom: 10px;

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