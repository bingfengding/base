let baseUrl = "";   //这里是一个默认的url，可以没有
if (process.env.NODE_ENV === 'production') {

  if (process.env.VUE_APP_TITLE === 'test') {

    baseUrl = "https://piaoxuan.bookidervizi.com/"

  } else if (process.env.VUE_APP_TITLE === 'prod') {

    baseUrl = "https://piaoxuan.cgjtwc.com"

  } else {
    baseUrl = "https://piaoxuan.cgjtwc.com"
  }

}
export default baseUrl;