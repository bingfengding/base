// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/style/reset.css"
import "@/utils/rem";
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
//import MintUI from "mint-ui";
import VideoPlayer from 'vue-video-player'
import VueAwesomeSwiper from "vue-awesome-swiper"
import Vuex from 'vuex'
import store from "./store";
// import { Group, Cell } from 'vux'
import 'animate.css'
import VueFullPage from 'vue-fullpage.js'
const FastClick = require('fastclick')
FastClick.attach(document.body)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')


Vue.config.productionTip = false
//Vue.use(MintUI)

Vue.use(VueAwesomeSwiper)
Vue.use(VideoPlayer)
// Vue.use(Vuex)
Vue.use(VueFullPage)


// Vue.component(Cell.name, Cell);
// Vue.component(Group.name, Group);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
