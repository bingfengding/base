
export default {
  state: {
    tabName : 1
   
  },
  getters:{
    doneTabId: state=>{
      return state.tabName
    },

  },
  mutations: {
    setTabNames(state,{
      tabName
    }){
      if(tabName ==="赛程安排"){
        state.tabName = 2
      }else if (tabName === "参赛国家") {
        state.tabName = 3
      } else{
        state.tabName = 1
      } 
   
    },
 

  },
  actions: {
    // userLogin(context, {
    //   user_name,
    //   user_pass
    // }) {
    //   login(user_name, user_pass).then((result) => {

    //     if (result.data.code == 200) {
    //       let token = result.data.data.token;
    //       if (token != "") {
    //         context.commit("setUser", {
    //           "user_name": user_name,
    //           "user_token": token
    //         })
    //       }

    //       // this.$router.push({
    //       //   path: "/"
    //       // }); //登录成功之后重定向到首页

    //     } else {
    //       return Promise.reject(result)
    //     }

    //   })
    // }
  }
}
