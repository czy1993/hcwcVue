// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.min.css";
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式

// 引入vuex
import store from './store/index'
Vue.use(Vuex)
Vue.use(iView);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
