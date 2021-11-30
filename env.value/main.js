import Vue from "vue";
import App from "./App";
import store from "./store";
import http from "./http/httpService";

//import env
import ".env.js";

import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;

Vue.prototype.$http = http;
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
  store,
});

app.$mount();
