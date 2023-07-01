import {defineStore} from "pinia";
import {reqHospitalDepartment, reqHospitalDetail} from "@/api/hospital";
// 引入详情数据的ts类型
import {DepartmentResponseData, HospitalDetail} from "@/api/hospital/type";
import type {DetailState} from "@/store/module/interface/index";

const useDetailStore = defineStore('Detail', {
    state: (): DetailState => {
        return {
            // 医院详情的数据
            hospitalInfo: ({} as HospitalDetail),
            // 医院科室的数据
            departmentArr: []
        };
    },
    actions: {
        // 获取医院详情数据
        async getHospitalDetail(hoscode: string) {
            let result: HospitalDetail = await reqHospitalDetail(hoscode);
            if (result.code == 200) {
                this.hospitalInfo = result.data;
            }
        },
        // 清空医院科室数据
        async getDepartment(hoscode: string) {
            let result: DepartmentResponseData = await reqHospitalDepartment(hoscode);
            if (result.code == 200) {
                this.departmentArr = result.data;
            }
        }
    },
    getters: {}
});
// 对外暴露小仓库
export default useDetailStore;