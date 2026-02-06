              function toggleSidebar6() {

if (!event.shiftKey) {
if (document.getElementById("sidebar6").style.left == "-42px") {
    document.getElementById("sidebar6").style.left = "-24px";
       localStorage.setItem("sidebar6", "-24px"); } else {
    document.getElementById("sidebar6").style.left = "-42px";
       localStorage.setItem("sidebar6", "-42px");}


} else if (event.shiftKey) {

       if (topLayer.buoyHide == "false") {
topLayer.buoyHide = "true";
} else if (topLayer.buoyHide == "true") {
topLayer.buoyHide = "false";
}
}
}







   if (localStorage.getItem("sidebar6")) {
    document.getElementById("sidebar6").style.left = 
       localStorage.getItem("sidebar6");} else {
    document.getElementById("sidebar6").style.left = "-24px";
}