// window.onload = function(){
//   /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
//     为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
//   getRem(1080,100)
// };
// window.onresize = function(){
//   getRem(1080,100)
// };
// function getRem(pwidth,prem){
//   var html = document.getElementsByTagName("html")[0];
//   var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//   html.style.fontSize = oWidth/pwidth*prem + "px";
// }
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      // if (clientWidth > 750) {
      //   clientWidth = 750;
      // }
      if (!clientWidth) return;
      docEl.style.fontSize = clientWidth *100 / 750 + "px";
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
