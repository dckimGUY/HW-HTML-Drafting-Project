function flowVis() {
if (utilityLayer0.children.length != 0) {
setTimeout(() => {
let text = "V";
if (lastFlow == "global") { text = "v"; }
let delay = 0;
for (let j = 0; j < utilityLayer0.children.length; j++) {
setTimeout(() => {
const textColour = window["coinColour" + utilityLayer0.children[j].dataset.coinTrip];
let fontWidth;
if (parseInt(utilityLayer0.children[j].style.width) < parseInt(utilityLayer0.children[j].style.height)) {
fontWidth = parseInt(utilityLayer0.children[j].style.width );} else {
fontWidth = parseInt(utilityLayer0.children[j].style.height);}
const coinCentre = [
parseInt(utilityLayer0.children[j].style.left) + parseInt(utilityLayer0.children[j].style.width ) / 2,
parseInt(utilityLayer0.children[j].style.top ) + parseInt(utilityLayer0.children[j].style.height) / 2
];
buzzWord(1,text,fontWidth,textColour,20,20,10,"center",coinCentre[0],coinCentre[1],null,true);
}, delay * 60);
delay++;
}
}, 20);
}
}
