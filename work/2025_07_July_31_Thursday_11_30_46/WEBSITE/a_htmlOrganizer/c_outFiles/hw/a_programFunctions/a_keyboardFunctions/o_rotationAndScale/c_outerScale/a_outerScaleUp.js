function outerScaleUp(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (coinFocus!=null) {
let newScale = 1;
let scaleFactor = T / 512;
let currentScale = parseFloat(coinFocus.dataset.scale);

newScale = Math.round((parseFloat(coinFocus.dataset.scale) + scaleFactor) * 10000) / 10000;

if ((currentScale*10000)%(scaleFactor*10000)==0) {
newScale = Math.round((currentScale + scaleFactor) * 10000) / 10000;
} else {
newScale = Math.round(((currentScale + scaleFactor) * 10000) + (scaleFactor*10000 - (currentScale*10000)%(scaleFactor*10000) )) / 10000;
}

coinFocus.style.transform = `scale(${newScale})`;
coinFocus.dataset.scale = newScale;
coinFocus.dataset.lockE = "true";

}

}
