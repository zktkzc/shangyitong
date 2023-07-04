// 定义用户相关的仓库
import {defineStore} from "pinia";

const useUserStore = defineStore('User', {
    state: () => {
        return {
            visiable: false, // 用于控制登录组件窗口的显示和隐藏
        }
    },
    actions: {},
    getters: {}
});

export default useUserStore;