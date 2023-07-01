import {defineStore} from "pinia";
import {reqHospitalDetail} from "@/api/hospital";
// 引入详情数据的ts类型
import {HospitalDetail} from "@/api/hospital/type";
import type {DetailState} from "@/store/module/interface/index";

const useDetailStore = defineStore('Detail', {
    state: (): DetailState => {
        return {
            // 医院详情的数据
            hospitalInfo: ({} as HospitalDetail)
        };
    },
    actions: {
        // 获取医院详情数据
        async getHospitalDetail(hoscode: string) {
            let result: HospitalDetail = await reqHospitalDetail(hoscode);
            if (result.code == 200) {
                this.hospitalInfo = result.data;
            }
        }
    },
    getters: {}
});
// 对外暴露小仓库
export default useDetailStore;