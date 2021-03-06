import Vue from 'vue'
import App from './App'
import {request} from './util/deliver.js'
import store from './store';

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
