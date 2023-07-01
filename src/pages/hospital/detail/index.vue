<script setup lang="ts">
// 引入医院详情仓库的数据
import useDetailStore from "@/store/module/hospitalDetail.ts";

let hospitalStore = useDetailStore();
</script>

<script lang="ts">
export default {
  name: 'Detail'
}
</script>

<template>
  <div class="detail">
    <div class="top">
      <div class="name">{{ hospitalStore.hospitalInfo.hospital?.hosname }}</div>
      <div class="level">
        <svg t="1688201521179" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2320" data-darkreader-inline-fill="" width="16" height="16">
          <path
              d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
              p-id="2321" fill="#1296db" data-darkreader-inline-fill=""
              style="--darkreader-inline-fill: #37afef;"></path>
        </svg>
        <span>{{ hospitalStore.hospitalInfo.hospital?.param.hostypeString }}</span>
      </div>
    </div>
    <div class="logo">
      <div class="left">
        <img :src="`data:image/jpeg;base64,` + hospitalStore.hospitalInfo.hospital?.logoData" alt="">
      </div>
      <div class="right">
        <div class="address">
          <svg t="1688204297652" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="2394" data-darkreader-inline-fill="" width="16" height="16">
            <path
                d="M927.282215 479.83544l-83.4629 0c-15.068184-158.75777-141.389194-285.078781-300.146964-300.146964L543.67235 95.835695c0-17.622356-14.285355-31.907711-31.907711-31.907711-17.622356 0-31.907711 14.285355-31.907711 31.907711l0 83.85278c-158.75777 15.068184-285.078781 141.389194-300.146964 300.146964l-83.826174 0c-17.622356 0-31.907711 14.285355-31.907711 31.907711 0 17.622356 14.285355 31.907711 31.907711 31.907711l83.826174 0c15.068184 158.75777 141.389194 285.078781 300.146964 300.146964l0 83.946924c0 17.622356 14.285355 31.907711 31.907711 31.907711 17.622356 0 31.907711-14.285355 31.907711-31.907711l0-83.946924c158.75777-15.068184 285.078781-141.389194 300.146964-300.146964l83.4629 0c17.622356 0 31.907711-14.285355 31.907711-31.907711C959.189925 494.120794 944.904571 479.83544 927.282215 479.83544zM511.76464 793.112446c-155.396209 0-281.369296-125.973086-281.369296-281.369296s125.973086-281.369296 281.369296-281.369296 281.369296 125.973086 281.369296 281.369296S667.159826 793.112446 511.76464 793.112446z"
                fill="#1296db" p-id="2395" data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: #37afef;"></path>
            <path
                d="M511.76464 511.74315m-69.616544 0a68.031 68.031 0 1 0 139.233088 0 68.031 68.031 0 1 0-139.233088 0Z"
                fill="#1296db" p-id="2396" data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: #37afef;"></path>
          </svg>
          <span>具体位置: {{ hospitalStore.hospitalInfo.hospital?.param.fullAddress }}</span>
        </div>
        <div class="route">
          规划路线: {{ hospitalStore.hospitalInfo.hospital?.route }}
        </div>
      </div>
    </div>
    <div class="footer">
      <h1>医院介绍</h1>
      <p>{{ hospitalStore.hospitalInfo.hospital?.intro }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail {
  .top {
    display: flex;
    align-items: center;

    .name {
      font-size: 30px;
      font-weight: 900;
    }

    .level {
      color: #7f7f7f;
      margin-left: 10px;
      height: 40px;
      text-align: center;
      line-height: 40px;

      span {
        margin-left: 5px;
      }
    }
  }

  .logo {
    display: flex;
    margin: 10px 0;

    .left {
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }

    .right {
      color: #7f7f7f;
      margin-left: 10px;

      .address {
        display: flex;
        align-items: center;
      }

      .route {
        margin: 10px 0;
        line-height: 30px;
      }
    }
  }

  .footer {
    color: #7f7f7f;

    p {
      margin-top: 10px;
      line-height: 30px;
    }
  }
}
</style>