import Vue, { VNode } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: (h): VNode => h(App),
});

