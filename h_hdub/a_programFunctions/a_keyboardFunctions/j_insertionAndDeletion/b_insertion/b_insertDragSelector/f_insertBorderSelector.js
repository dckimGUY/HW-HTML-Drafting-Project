function insertBorderSelector() {

hauptMode=0;
curFocus=1;
Cur.style.left   = "0px";
Cur.style.top    = "0px";
Cur.dataset.left = "0px";
Cur.dataset.top  = "0px";


let startRadius     = 384;
let radiusReduction =  32;
let tripleSet       = Ts0;
let colourationChoice="rgba(255,255,255,0.5)";


for (let i = 0; i < 3; i++) {

for ( let j = 0; j < 8; j++) {
insertNewCoin(["",78,78,false,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.borderTopLeftRadius = startRadius - (j * radiusReduction) + "px";
radiusLocation.style.outline      = "2px solid black";
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
newCoin.dataset.dragPull="main.style.borderTopLeftRadius";
newCoin.dataset.coinTrip=tripleSet;
}
for ( let j = 0; j < 8; j++) {
insertNewCoin(["",78,78,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.borderTopRightRadius = startRadius - (j * radiusReduction) + "px";
radiusLocation.style.outline      = "2px solid black";
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
newCoin.dataset.dragPull="main.style.borderTopRightRadius";
newCoin.dataset.coinTrip=tripleSet;
}
for ( let j = 0; j < 8; j++) {
insertNewCoin(["",78,78,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.borderBottomLeftRadius = startRadius - (j * radiusReduction) + "px";
radiusLocation.style.outline      = "2px solid black";
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
newCoin.dataset.dragPull="main.style.borderBottomLeftRadius";
newCoin.dataset.coinTrip=tripleSet;
}
for ( let j = 0; j < 8; j++) {
insertNewCoin(["",78,78,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.borderBottomRightRadius = startRadius - (j * radiusReduction) + "px";
radiusLocation.style.outline      = "2px solid black";
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
newCoin.dataset.dragPull="main.style.borderBottomRightRadius";
newCoin.dataset.coinTrip=tripleSet;
}

     if (startRadius==384) { startRadius=128; radiusReduction=12; tripleSet=Ts1; }
else if (startRadius==128) { startRadius=28 ; radiusReduction=4 ; tripleSet=Ts2; }

}





{
insertNewCoin(["",78,78,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.borderBottomRightRadius = 0 + "px";
radiusLocation.style.borderTopRightRadius    = 0 + "px";
radiusLocation.style.borderBottomLeftRadius  = 0 + "px";
radiusLocation.style.borderTopLeftRadius     = 0 + "px";
radiusLocation.style.outline      = "4px solid lime";
newCoin.dataset.jsName = `borderRadiusTemplate`
newCoin.style.left     = 192 + "px";
newCoin.dataset.left   = 192 + "px";
newCoin.style.top      = 192 + "px";
newCoin.dataset.top    = 192 + "px";
newCoin.style.width    = 384 + "px";
newCoin.dataset.width  = 384 + "px";
newCoin.style.height   = 384 + "px";
newCoin.dataset.height = 384 + "px";
newCoin.dataset.dragPull="main.style.borderRadius";
newCoin.dataset.coinTrip=Ts2;
newCoin.lastElementChild.firstElementChild.style.backgroundColor="green";
newCoin.lastElementChild.firstElementChild.style.fontSize       ="32px";
newCoin.lastElementChild.firstElementChild.style.color          ="white";
newCoin.lastElementChild.firstElementChild.style.display        ="block";
newCoin.lastElementChild.firstElementChild.innerHTML            ="<u>dragPull-template:</u><br>main.style.borderRadius";
}







recoverColouration();
readCoins();

}
