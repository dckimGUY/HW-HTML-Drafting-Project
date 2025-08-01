function spaceViewOff() {
mouseIsDogged=false;
spaceView = false;
for (let j=0;j<utilityLayer0.children.length;j++) {
       if (utilityLayer0.children[j].dataset.coinTrip==Ts0) {
utilityLayer0.children[j].style.outlineColor = Cs0;
utilityLayer0.children[j].style.outlineWidth = Ws0;
utilityLayer0.children[j].style.outlineStyle = Ss0;
} else if (utilityLayer0.children[j].dataset.coinTrip==Ts1) {
utilityLayer0.children[j].style.outlineColor = Cs1;
utilityLayer0.children[j].style.outlineWidth = Ws1;
utilityLayer0.children[j].style.outlineStyle = Ss1;
} else if (utilityLayer0.children[j].dataset.coinTrip==Ts2) {
utilityLayer0.children[j].style.outlineColor = Cs2;
utilityLayer0.children[j].style.outlineWidth = Ws2;
utilityLayer0.children[j].style.outlineStyle = Ss2;
}
if (coinFocus!=null) { coinFocus.style.outline = fB; }

utilityLayer0.style.opacity = utilityOpacity;


if (utilityLayer0.children[j].lastElementChild) {
utilityLayer0.children[j].lastElementChild.style.display  = "block"; }
}

readCoins();

utilityLayer1.style.display  = "block";
gridLayer.style.display      = "block";
       if (hauptMode==1) {
document.documentElement.style.backgroundColor = window.L;
} else if (hauptMode==0) {
document.documentElement.style.backgroundColor = window.sL;
}

pulledText.style.display="none";

recoverColouration();
if (coinFocus!=null) {
coinFocus.style.outline = fB;
}

}
