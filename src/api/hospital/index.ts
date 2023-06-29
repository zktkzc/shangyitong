import request from "@/utils/request.ts";
import type {HospitalDetail} from "@/api/hospital/type.ts";

// 枚举请求的地址
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
}

// 获取医院详情
export const reqHospitalDetail = (hoscode: number) => request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + hoscode);