function acceptCookies(){
localStorage.setItem("cookies","yes");
document.getElementById("cookie-banner").style.display="none";
}

window.onload=function(){
if(localStorage.getItem("cookies")){
document.getElementById("cookie-banner").style.display="none";
}
}
