import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from './utils/request.js';
import utils from "./utils/utils"
import storage from "./utils/storage"
import {apiUrl} from "./api/apiUrl"

import './assets/less/element.less'
import './assets/less/common.less'
//全局filters
import * as filters from "./filters";

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
Vue.prototype.$request = request;
Vue.prototype.$apiUrl = apiUrl;
Vue.prototype.$utils = utils;
Vue.prototype.$storage = storage;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
