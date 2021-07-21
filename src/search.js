import Vue from 'vue';
import InstantSearch from 'vue-instantsearch';
import vuetify from './plugins/vuetify';
import App from './Search.vue';

Vue.use(InstantSearch);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
