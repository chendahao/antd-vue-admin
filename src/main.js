import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import router from './router'
import store from './store'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios
Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
