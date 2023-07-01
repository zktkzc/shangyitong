import {HospitalDetail} from "@/api/hospital/type.ts";

// 定义仓库内部存储数据state的ts类型
export interface DetailState {
    hospitalInfo: HospitalDetail;
}