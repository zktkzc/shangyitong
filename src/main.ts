// vue3框架提供的方法createApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from '@/App.vue'
// 引入全局组件——顶部、底部
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
// 引入vue-router核心组件并安装
import router from '@/router'
// 利用createApp方法创建应用实例对象，且将应用实例挂载到挂载点#app上
const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
// 安装vue-router
app.use(router)
// 挂载
app.mount('#app')