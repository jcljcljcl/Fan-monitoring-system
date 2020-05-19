import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import {sync} from 'vuex-router-sync'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
sync(store, router)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,

}).$mount('#app')
