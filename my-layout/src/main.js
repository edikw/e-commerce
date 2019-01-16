import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
