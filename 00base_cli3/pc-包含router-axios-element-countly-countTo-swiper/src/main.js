import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style/reset.css";
import "swiper/dist/css/swiper.css"
import './plugins/element.js'
import Countly from "countly-sdk-web";
import VueCountly from "vue-countly";
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)
if (process.env.NODE_ENV == "production") {
  Vue.use(VueCountly, Countly, {
    app_key: 'ec2e7b3044203b50d78d0a944837c1a590e3c158',
    url: "https://atp.count.ly"
    // debug:true,
  })
}
new Vue({
  router,
  store,
  created() {
    if (process.env.NODE_ENV == "production") {
      this.$Countly.q.push(["track_sessions"]);
      this.$Countly.q.push(['track_pageview']);
      this.$Countly.q.push(["track_pageview"]);
      this.$Countly.q.push(["track_clicks"]);
      this.$Countly.q.push(["track_scrolls"]);
      this.$Countly.q.push(["track_errors"]);
      this.$Countly.q.push(["track_links"]);
      this.$Countly.q.push(["track_forms"]);
      this.$Countly.q.push(["collect_from_forms"]);
    }

  },
  render: h => h(App)
}).$mount('#app')
