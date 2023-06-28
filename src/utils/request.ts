// 对于axios函数进行二次封装
/**
 * 目的：1.利用axios请求、响应拦截器对请求进行统一处理
 *      2.请求拦截器，一般可以在请求中携带公共的参数：token
 *      3.响应拦截器，可以简化服务器返回的数据, 处理http的网路错误
 */
import axios from 'axios';
import {ElMessage} from "element-plus";

// 创建一个axios实例
const request = axios.create({
    baseURL: '/api', // 基础路径
    timeout: 5000 // 超时的时间的设置，超出5秒，请求就是失败
});

// 请求拦截器
request.interceptors.request.use(
    config => {
        // config是请求的配置信息,配置对象的有headers属性，可以通过请求头携带公共参数token
        return config;
    }
);

// 响应拦截器
request.interceptors.response.use(
    response => {
        // 响应拦截器成功的回调，一般会进行简化数据
        return response.data;
    },
    error => {
        // 响应拦截器失败的回调，一般会处理http的错误
        let status = error.response.status
        switch (status) {
            case 404:
                ElMessage({
                    type: error,
                    message: error.message
                });
                break;
            case 500 | 501 | 502 | 503 | 504 | 505:
                ElMessage({
                    type: error,
                    message: error.message
                });
                break;
        }
        return Promise.reject(new Error(error.message));
    }
);

// 务必对外暴露axios实例
export default request;