function insertBoxShadowSelector() {

let colourGiven     = "rgba(0,0,0,0.25)";

let result = null;
result = prompt("enter box-shadow colour: ", "rgba(0,0,0,0.25)");
if (result!=null) {
colourGiven = result;
} else {
colourGiven="rgba(0,0,0,0.25)";
}

if (result!=null) {

hauptMode=0;
curFocus=1;
Cur.style.left   = "0px";
Cur.style.top    = "0px";
Cur.dataset.left = "0px";
Cur.dataset.top  = "0px";


let startRadius     = 48;
let radiusReduction =  3;
let tripleSet       = Ts0;
let diffusion       =   2;
let colourationChoice="rgba(255,255,255,0.5)";


for (let i = 0; i < 3; i++) {

for ( let j = 0; j < 8; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.boxShadow = `-${startRadius - (j * radiusReduction)}px -${startRadius - (j * radiusReduction)}px ${(startRadius - (j * radiusReduction))/diffusion}px ${colourGiven}`;
radiusLocation.style.outline      = "2px solid black";
radiusLocation.style.borderRadius = "16px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=colourationChoice;
newCoin.dataset.jsName = `main.style.borderTopLeftRadius="${startRadius - (j * radiusReduction) + 'px'}"`
newCoin.style.left     = (j * 32) + "px";
newCoin.dataset.left   = (j * 32) + "px";
newCoin.style.top      = (j * 32) + "px";
newCoin.dataset.top    = (j * 32) + "px";
newCoin.style.width    = 384 - (j * 32) + "px";
newCoin.dataset.width  = 384 - (j * 32) + "px";
newCoin.style.height   = 384 - (j * 32) + "px";
newCoin.dataset.height = 384 - (j * 32) + "px";
newCoin.dataset.dragPull="main.style.boxShadow";
newCoin.dataset.coinTrip=tripleSet;
}
for ( let j = 0; j < 8; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.boxShadow = `${startRadius - (j * radiusReduction)}px -${startRadius - (j * radiusReduction)}px ${(startRadius - (j * radiusReduction))/diffusion}px ${colourGiven}`;
radiusLocation.style.outline      = "2px solid black";
radiusLocation.style.borderRadius = "16px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=colourationChoice;
newCoin.dataset.jsName = `main.style.borderTopLeftRadius="${startRadius - (j * radiusReduction) + 'px'}"`
newCoin.style.left     = 384 + "px";
newCoin.dataset.left   = 384 + "px";
newCoin.style.top      = (j * 32) + "px";
newCoin.dataset.top    = (j * 32) + "px";
newCoin.style.width    = 384 - (j * 32) + "px";
newCoin.dataset.width  = 384 - (j * 32) + "px";
newCoin.style.height   = 384 - (j * 32) + "px";
newCoin.dataset.height = 384 - (j * 32) + "px";
newCoin.dataset.dragPull="main.style.boxShadow";
newCoin.dataset.coinTrip=tripleSet;
}
for ( let j = 0; j < 8; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.boxShadow = `-${startRadius - (j * radiusReduction)}px ${startRadius - (j * radiusReduction)}px ${(startRadius - (j * radiusReduction))/diffusion}px ${colourGiven}`;
radiusLocation.style.outline      = "2px solid black";
radiusLocation.style.borderRadius = "16px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=colourationChoice;
newCoin.dataset.jsName = `main.style.borderTopLeftRadius="${startRadius - (j * radiusReduction) + 'px'}"`
newCoin.style.left     = (j * 32) + "px";
newCoin.dataset.left   = (j * 32) + "px";
newCoin.style.top      = 384 + "px";
newCoin.dataset.top    = 384 + "px";
newCoin.style.width    = 384 - (j * 32) + "px";
newCoin.dataset.width  = 384 - (j * 32) + "px";
newCoin.style.height   = 384 - (j * 32) + "px";
newCoin.dataset.height = 384 - (j * 32) + "px";
newCoin.dataset.dragPull="main.style.boxShadow";
newCoin.dataset.coinTrip=tripleSet;
}
for ( let j = 0; j < 8; j++) {
insertNewCoin(["",78,110,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.boxShadow = `${startRadius - (j * radiusReduction)}px ${startRadius - (j * radiusReduction)}px ${(startRadius - (j * radiusReduction))/diffusion}px ${colourGiven}`;
radiusLocation.style.outline      = "2px solid black";
radiusLocation.style.borderRadius = "16px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor=colourationChoice;
newCoin.dataset.jsName = `main.style.borderTopLeftRadius="${startRadius - (j * radiusReduction) + 'px'}"`
newCoin.style.left     = 384 + "px";
newCoin.dataset.left   = 384 + "px";
newCoin.style.top      = 384 + "px";
newCoin.dataset.top    = 384 + "px";
newCoin.style.width    = 384 - (j * 32) + "px";
newCoin.dataset.width  = 384 - (j * 32) + "px";
newCoin.style.height   = 384 - (j * 32) + "px";
newCoin.dataset.height = 384 - (j * 32) + "px";
newCoin.dataset.dragPull="main.style.boxShadow";
newCoin.dataset.coinTrip=tripleSet;
}

     if (startRadius==48) { startRadius=24; radiusReduction=2; tripleSet=Ts1; }
else if (startRadius==24) { startRadius=8 ; radiusReduction=0.75 ; tripleSet=Ts2; }

}



recoverColouration();
readCoins();

}
}
