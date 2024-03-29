import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugin/element.js';
import i18n from './i18n/index.js';
import '@/directives/index.js';
import './style/main.scss';
import "swiper/css/swiper.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
