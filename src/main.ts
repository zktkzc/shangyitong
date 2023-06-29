// vue3框架提供的方法createApp方法，可以用来创建应用实例方法
import {createApp} from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from '@/App.vue'
// 引入全局组件——顶部、底部
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
// 引入pinia大仓库
import pinia from '@/store';
// 引入vue-router核心组件并安装
import router from '@/router'
// 引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化文件
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.js'
// 利用createApp方法创建应用实例对象，且将应用实例挂载到挂载点#app上
const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
// 安装vue-router
app.use(router)
// 安装element-plus插件
app.use(ElementPlus, {locale: zhCn});
// 安装pinia大仓库
app.use(pinia);
// 挂载
app.mount('#app')