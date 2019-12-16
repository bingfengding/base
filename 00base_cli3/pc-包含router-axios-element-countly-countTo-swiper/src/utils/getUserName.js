/* eslint-disable no-useless-escape */
export const cropUrl = function (username) {
  username = username.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + username + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = "";
  results = regex.exec(window.location.href)
  if (results) {
    if (results[1]) {
      return decodeURIComponent(results[1]).replace(/\ /g, "+")
    }
    return
  }
}