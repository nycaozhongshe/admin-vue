// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
//import '@/assets/css/'
import ElementUI from 'element-ui';
//引入element-ui的默认CSS样式
//import 'element-ui/lib/theme-default/index.css';
import '../theme/index.css'
//import './assets/css/theme/index.css';
import Bus from '@/status/bus.js'; 

Vue.use(ElementUI);
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  beforeCreate:function(){
    console.log('beforeCreated.....');
  }
})
