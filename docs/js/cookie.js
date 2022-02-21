
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "0504") {
    window.location="wrong-pass.html"
  } else {
     user = prompt("Please enter password:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  
    user = prompt("Please enter password:","");
    if (user == "0504") {
       setCookie("username", user, 30);
     } else {
       window.location="wrong-pass.html"
     }
  }
}
function hasCookie(){
let userr = getCookie("username");
if(userr){
checkCookie()
} else {
 window.location="wrong-pass.html"       
}
}
