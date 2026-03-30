function outerScaleDown() {

/*
const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];
*/

if (coinFocus!=null) {

let newScale = 1;
let scaleFactor = T / 512;

let currentScale = parseFloat(coinFocus.lastElementChild.dataset.scale);

if ((currentScale*10000)%(scaleFactor*10000)==0) {
newScale = Math.round((currentScale - scaleFactor) * 10000) / 10000;
} else {
newScale = Math.round(((currentScale - scaleFactor) * 10000) - (currentScale*10000)%(scaleFactor*10000)) / 10000;
}



if (newScale > 0) {
coinFocus.lastElementChild.style.scale   = newScale;
coinFocus.lastElementChild.dataset.scale = newScale;


}
}

}
