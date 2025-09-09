function insertGrayscale() {

let alpha     = "1.00";

let result = null;
result = prompt('enter "see-through" value between 0.00 and 1.00: ', "1.00");
if (result!=null) {
alpha = result;
} else {
alpha = "1.00";
}
if (result!=null) {

hauptMode=0;
curFocus=1;
Cur.style.left   = "0px";
Cur.style.top    = "0px";
Cur.dataset.left = "0px";
Cur.dataset.top  = "0px";

function colourMaker(topStart,leftStart,squaresHeight,squaresWidth,squareSize,scaleName) {
let count255 = 0;
for (let i = 0; i < squaresHeight; i++) { for (let j = 0; j < squaresWidth; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "2px solid black";
       if (scaleName=="grayscale"||scaleName=="greyscale") { newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=`rgba(${count255}    ,${count255}   ,${count255}    ,${alpha})`;
} else if (scaleName=="redscale")     { newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=                     `rgba(${count255 * 4},             0,              0,${alpha})`;
} else if (scaleName=="bluescale")    { newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=                     `rgba(             0,${count255 * 4},              0,${alpha})`;
} else if (scaleName=="greenscale")   { newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=                     `rgba(             0,              0,${count255 * 4},${alpha})`;
} else if (scaleName=="cyanscale")    { newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=                     `rgba(             0,${count255 * 4},${count255 * 4},${alpha})`;
} else if (scaleName=="magentascale") { newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=                     `rgba(${count255 * 4},             0,${count255 * 4},${alpha})`;
} else if (scaleName=="yellowscale")  { newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=                     `rgba(${count255 * 4},${count255 * 4},             0,${alpha})`;
}

newCoin.dataset.jsName = `${scaleName + count255}`
newCoin.style.left     = leftStart + (j * squareSize) + "px";
newCoin.dataset.left   = leftStart + (j * squareSize) + "px";
newCoin.style.top      = topStart + (i * squareSize) + "px";
newCoin.dataset.top    = topStart + (i * squareSize) + "px";
newCoin.style.width    = squareSize + "px";
newCoin.dataset.width  = squareSize + "px";
newCoin.style.height   = squareSize + "px";
newCoin.dataset.height = squareSize + "px";
newCoin.dataset.dragPull="div.style.backgroundColor";
newCoin.dataset.coinTrip=Ts0;
count255++;
} }
}
colourMaker(  0,0,1,48,64,"redscale");
colourMaker( 64,0,1,48,64,"bluescale");
colourMaker(192,0,1,48,64,"greenscale");
colourMaker(128,0,1,48,64,"cyanscale");
colourMaker(256,0,1,48,64,"magentascale");
colourMaker(320,0,1,48,64,"yellowscale");
colourMaker(384,0,4,48,64,"grayscale");

recoverColouration();
readCoins();
}
}
