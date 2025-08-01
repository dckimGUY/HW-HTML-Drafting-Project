function goFullscreen() {
if (document.fullscreenElement) {
try{document.exitFullscreen();}catch{};
} else {
try{document.documentElement.requestFullscreen();}catch{};
}
}
