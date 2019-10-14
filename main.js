import Vue from 'vue'
import App from './App'
// import VCharts from 'v-charts' //引入v-charts
import globalVariable from './globalVariable.js' //引入全局变量文件

// Vue.use(VCharts) //
Vue.prototype.$globalVariable = globalVariable; 

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
