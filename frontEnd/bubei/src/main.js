import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.global_userID = 1
Vue.prototype.global_userEmail = "test@sumu.com"

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
