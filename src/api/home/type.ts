// 定义首页模块的TS数据类型
export interface ReponseData {
    code: number;
    message: string,
    ok: boolean
}

// 代表已有的医院的数据类型
export interface HospitalData {
    id: string,
    createTime: string,
    updateTime: string,
    isDeleted: number,
    param: {
        hostypeString: string,
        fullAddress: string
    },
    hoscode: string,
    hosname: string,
    hostype: string,
    provinceCode: string,
    cityCode: string,
    districtCode: string,
    address: string,
    logoData: string,
    intro: string,
    route: string,
    status: number,
    bookingRule: {
        cycle: number,
        releaseTime: string,
        stopTime: string,
        quitRule: number,
        quitTime: string,
        rule: string[]
    }
}

// 存储全部已有医院的数组类型
export type Content = HospitalData[];

// 获取已有医院接口返回的数据的类型
export interface HospitalResponseData extends ReponseData {
    data: {
        content: Content,
        pageable: {
            sort: {
                sorted: boolean,
                unsorted: boolean,
                empty: boolean
            },
            pageNumber: number,
            pageSize: number,
            offset: number,
            paged: boolean,
            unpaged: boolean
        },
        totalPages: number,
        totalElements: number,
        last: boolean,
        first: boolean,
        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean
        },
        numberOfElements: number,
        size: number,
        number: number,
        empty: boolean
    }
}

export interface HospitalLevelAndRegion extends ReponseData {
    id: number,
    createTime: string,
    updateTime: string,
    isDeleted: number,
    param: {},
    parentId: number,
    name: string,
    value: string,
    dictCode: string,
    hasChildren: boolean
}

export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];

export interface HospitalLevelAndRegionResponseData extends ReponseData {
    data: HospitalLevelAndRegionArr
}

export interface HospitalInfo extends ReponseData {
    data: Content
}