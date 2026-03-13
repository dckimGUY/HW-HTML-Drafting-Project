function toggleSidebar5() {
if (document.getElementById("sidebar5").style.left == "-92px") {
document.getElementById("sidebar5").style.left = "0px";
localStorage.setItem("sidebar5", "0px");
} else {
document.getElementById("sidebar5").style.left = "-92px";
localStorage.setItem("sidebar5", "-92px");
}
}


if (localStorage.getItem("sidebar5")) {
document.getElementById("sidebar5").style.left = localStorage.getItem("sidebar5");
} else {
document.getElementById("sidebar5").style.left = "0px";
}