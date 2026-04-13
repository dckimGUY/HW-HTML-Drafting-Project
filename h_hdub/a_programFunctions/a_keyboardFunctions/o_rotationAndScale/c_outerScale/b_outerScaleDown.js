function outerScaleDown() {

if (coinFocus!=null) {

if (Cur.style.display == "block") {
coinFocus.lastElementChild.style.transformOrigin  = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
coinFocus.firstElementChild.style.transformOrigin = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
} else if (Cur.style.display == "none") {
coinFocus.lastElementChild.style.transformOrigin  = "center";
coinFocus.firstElementChild.style.transformOrigin = "center";
}

let newScale = 1;
let scaleFactor = T / 512;

let currentScale = parseFloat(coinFocus.lastElementChild.dataset.scale);

if ((currentScale*10000)%(scaleFactor*10000)==0) {
newScale = Math.round((currentScale - scaleFactor) * 10000) / 10000;
} else {
newScale = Math.round(((currentScale - scaleFactor) * 10000) - (currentScale*10000)%(scaleFactor*10000)) / 10000;
}



if (newScale > 0) {
coinFocus.lastElementChild.style.scale    = newScale;
coinFocus.lastElementChild.dataset.scale  = newScale;

coinFocus.firstElementChild.style.scale   = newScale;
coinFocus.firstElementChild.dataset.scale = newScale;
}
}

}
