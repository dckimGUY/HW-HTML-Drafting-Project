function resetScale() {

if (coinFocus!=null) {

if (Cur.style.display == "block") {
coinFocus.lastElementChild.style.transformOrigin  = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
coinFocus.firstElementChild.style.transformOrigin = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
} else if (Cur.style.display == "none") {
coinFocus.lastElementChild.style.transformOrigin  = "center";
coinFocus.firstElementChild.style.transformOrigin = "center";
}

const newScale = 1;

coinFocus.lastElementChild.style.scale    = newScale;
coinFocus.lastElementChild.dataset.scale  = newScale;

coinFocus.firstElementChild.style.scale   = newScale;
coinFocus.firstElementChild.dataset.scale = newScale;

}

}