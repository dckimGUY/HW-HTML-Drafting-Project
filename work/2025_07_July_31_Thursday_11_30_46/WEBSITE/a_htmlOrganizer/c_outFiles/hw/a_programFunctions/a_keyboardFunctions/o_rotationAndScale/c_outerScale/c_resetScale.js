function resetScale() {

if (lastKey!="e") {
if (coinFocus!=null) {
const newScale = 1;
coinFocus.style.transform = `scale(${newScale})`;
coinFocus.dataset.scale = newScale;
if (coinFocus.lastElementChild.lastElementChild.src!=""&&coinFocus.lastElementChild.lastElementChild.naturalWidth&&coinFocus.lastElementChild.lastElementChild.naturalHeight) {
coinFocus.style.width  = parseInt(coinFocus.lastElementChild.lastElementChild.naturalWidth) + "px";
coinFocus.style.height = parseInt(coinFocus.lastElementChild.lastElementChild.naturalHeight) + "px";
}
coinFocus.dataset.lockE = "false";
}
} else if (lastKey=="e") {
coinFocus.dataset.lockE = "true";
}

}
