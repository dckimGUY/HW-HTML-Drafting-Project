function insertFontSizeAndPadding() {

hauptMode=0;
curFocus=1;
Cur.style.left   = "0px";
Cur.style.top    = "0px";
Cur.dataset.left = "0px";
Cur.dataset.top  = "0px";


/* padding arrays, four columns */

let padFactor = 2;

for ( let j = 0; j < 24; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px ridge blue";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft=`${j * padFactor}px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`24px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`left`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; paddingLeft ${j * padFactor}px; `;
newCoin.dataset.jsName = `paddingLeft${j * padFactor}`;
newCoin.style.left     = 0 + "px";
newCoin.dataset.left   = 0 + "px";
newCoin.style.top      = (j * 160) + "px";
newCoin.dataset.top    = (j * 160) + "px";
newCoin.style.width    = 160 + "px";
newCoin.dataset.width  = 160 + "px";
newCoin.style.height   = 160 + "px";
newCoin.dataset.height = 160 + "px";
newCoin.dataset.dragPull="div.style.paddingLeft";
newCoin.dataset.coinTrip=Ts0;
}

for ( let j = 0; j < 24; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px ridge blue";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingBottom=`${j * padFactor}px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`24px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`right`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.writingMode =`vertical-rl`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; paddingBottom ${j * padFactor}px; `;
newCoin.dataset.jsName = `paddingBottom${j * padFactor}`;
newCoin.style.left     = 160 + "px";
newCoin.dataset.left   = 160 + "px";
newCoin.style.top      = (j * 160) + "px";
newCoin.dataset.top    = (j * 160) + "px";
newCoin.style.width    = 160 + "px";
newCoin.dataset.width  = 160 + "px";
newCoin.style.height   = 160 + "px";
newCoin.dataset.height = 160 + "px";
newCoin.dataset.dragPull="div.style.paddingBottom";
newCoin.dataset.coinTrip=Ts0;
}

for ( let j = 0; j < 24; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px ridge blue";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingTop=`${j * padFactor}px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`24px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`center`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; paddingTop ${j * padFactor}px; `;
newCoin.dataset.jsName = `paddingTop${j * padFactor}`;
newCoin.style.left     = 320 + "px";
newCoin.dataset.left   = 320 + "px";
newCoin.style.top      = (j * 160) + "px";
newCoin.dataset.top    = (j * 160) + "px";
newCoin.style.width    = 160 + "px";
newCoin.dataset.width  = 160 + "px";
newCoin.style.height   = 160 + "px";
newCoin.dataset.height = 160 + "px";
newCoin.dataset.dragPull="div.style.paddingTop";
newCoin.dataset.coinTrip=Ts0;
}

for ( let j = 0; j < 24; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px ridge blue";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingRight=`${j * padFactor}px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`24px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`right`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; paddingRight ${j * padFactor}px; `;
newCoin.dataset.jsName = `paddingRight${j * padFactor}`;
newCoin.style.left     = 480 + "px";
newCoin.dataset.left   = 480 + "px";
newCoin.style.top      = (j * 160) + "px";
newCoin.dataset.top    = (j * 160) + "px";
newCoin.style.width    = 160 + "px";
newCoin.dataset.width  = 160 + "px";
newCoin.style.height   = 160 + "px";
newCoin.dataset.height = 160 + "px";
newCoin.dataset.dragPull="div.style.paddingRight";
newCoin.dataset.coinTrip=Ts0;
}




/* font size array */

startingPoint = 4.00;

for ( let i = 0; i < 18; i++) {

for ( let j = 0; j < 20; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "8px ridge grey";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingTop=`0px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`${startingPoint + (j/4)}px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`left`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight =`1.05`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; fontSize ${startingPoint + (j/4)}px; `;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText += newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText += newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText;

newCoin.dataset.jsName = `fontSize${startingPoint + (j/4)}`;
newCoin.style.left     = 640 + (384 * i) + "px";
newCoin.dataset.left   = 640 + (384 * i) + "px";
newCoin.style.top      = (j * 192) + "px";
newCoin.dataset.top    = (j * 192) + "px";
newCoin.style.width    = 384 + "px";
newCoin.dataset.width  = 384 + "px";
newCoin.style.height   = 192 + "px";
newCoin.dataset.height = 192 + "px";
newCoin.dataset.dragPull="div.style.fontSize";
newCoin.dataset.coinTrip=Ts0;
}

startingPoint += 5;

}





recoverColouration();
readCoins();

}
