import request from "@/utils/request.ts";
import type {DepartmentResponseData, HospitalDetail} from "@/api/hospital/type.ts";

// 枚举请求的地址
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    // 获取医院科室数据
    HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/'

}

// 获取医院详情
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + hoscode);
// 获取医院科室数据
export const reqHospitalDepartment = (hoscode: string) => request.get<any, DepartmentResponseData>(API.HOSPITALDEPARTMENT_URL + hoscode);