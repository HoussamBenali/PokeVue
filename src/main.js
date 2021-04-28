import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './config/router'
import './config/axios'
import store from './config/vuex'
import Vuelidate from 'vuelidate'
import VuejsDialog from 'vuejs-dialog';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.use(Vuelidate);
Vue.use(VuejsDialog);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router:router,
}).$mount('#app')
