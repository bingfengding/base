import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index'

Vue.use(Router)

export const RouterMap = [
  {
    path: '/',
    name: 'home',
    component: home
  }
]
const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: RouterMap
})

router.beforeEach((to, from, next) => {
  function IsIphone (){
    var userAgentInfo = navigator.userAgent;
    var Agents = ["iPhone", "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v <
      Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  if(!IsIphone()) {

    document.querySelector("body").style.width = document.documentElement.clientWidth + "px"
  }

  next()


})

export default router
