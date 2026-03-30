function resetScale() {

//if (lastKey!="e") {
if (coinFocus!=null) {
const newScale = 1;
coinFocus.lastElementChild.style.scale   = newScale;
coinFocus.lastElementChild.dataset.scale = newScale;
/*
if (coinFocus.lastElementChild.lastElementChild.src!=""&&coinFocus.lastElementChild.lastElementChild.naturalWidth&&coinFocus.lastElementChild.lastElementChild.naturalHeight) {
coinFocus.style.width  = parseInt(coinFocus.lastElementChild.lastElementChild.naturalWidth) + "px";
coinFocus.style.height = parseInt(coinFocus.lastElementChild.lastElementChild.naturalHeight) + "px";
}
*/
}

//} else if (lastKey=="e") {
//}

}
