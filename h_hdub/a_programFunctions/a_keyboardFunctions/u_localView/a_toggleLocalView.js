const coinIdArray = [];



var localFirst = "";


function toggleLocalView() {


const originalFocus = coinFocus;
groupPaste("0");
groupPaste("1");
groupPaste("2");
if (multiplePasteBuffer.value != '' && coinFocus != null) {
deleteCoin(['',88,120]);
pasteMultiple();
pasteSingle();
}
coinFocus = originalFocus;



if (topLayer.a_currentLayer != "localView") {

if (coinFocus!=null) {

localFirst = coinFocus.id;


let colourInput = "";
switch (coinFocus.dataset.coinTrip) {
case "0": colourInput = window.coinColour0;
case "1": colourInput = window.coinColour1;
case "2": colourInput = window.coinColour2;
}

const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(1,"TAB",96,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);

coinIdArray.push(coinFocus.id);
localViewReturn = topLayer.a_currentLayer;	
topLayer.localView.b_content.innerHTML = '';
insertNewDuplicate([event,68,68,,,]);
coinFocus1.lastElementChild.firstElementChild.innerHTML = "";



let iSZ = "0px 0px " + edgeQ + "px " + colourInput;
const iSZa = iSZ + ",";
coinFocus1.style.boxShadow = iSZa + iSZa + iSZa + iSZa + iSZa + iSZa + iSZa + iSZa + iSZ;
deleteCoin(["",88,120,,,]);
guideLayer(["",77,77,,,]);
if(rev==1){focusPrevious()}else{focusNext()}
makeTopLayer("localView");
pasteSingle([event,80,112,,,]);
if (coinFocus.lastElementChild.firstElementChild.innerHTML=="") {
deleteCoin([event,88,120,,,]);
singlePasteBuffer.value.pop();
} else {
unwrapPartsAlways();
}
}

} else if (topLayer.a_currentLayer == "localView") {


utilityLayer1.innerHTML = "";
for (j = 0; j < utilityLayer0.children.length;j ++) {
if (utilityLayer0.children[j].style) {
utilityLayer0.children[j].style.outline = utilityLayer0.children[j].dataset.finishedOutline; }
if (utilityLayer0.children[j].firstElementChild) {
utilityLayer0.children[j].firstElementChild.style.backgroundColor = "transparent";
utilityLayer0.children[j].firstElementChild.innerText             =            ""; }
if (utilityLayer0.children[j].lastElementChild) {
utilityLayer0.children[j].lastElementChild.style.display  = "block"; }
}
/* IN-SHALLAH THIS LITTLE TRICK MAKES THIS FUNCTIONAL */

mouseIsDogged=true;
spaceView = true;
edgeDetect.style.display= "none";
document.documentElement.style.cursor = document.body.style.cursor = "auto";
for (j=0;j<utilityLayer0.children.length;j++) {
if (utilityLayer0.children[j].style) {
utilityLayer0.children[j].style.outline = utilityLayer0.children[j].dataset.finishedOutline;
utilityLayer0.children[j].style.cursor = "auto";
}
if (utilityLayer0.children[j].firstElementChild) {
utilityLayer0.children[j].firstElementChild.style.backgroundColor = "transparent";
utilityLayer0.children[j].firstElementChild.innerText             =            "";
}
if (utilityLayer0.children[j].lastElementChild) {
utilityLayer0.children[j].lastElementChild.style.display  = "block";
}
}

removePointerEventsNone();
localViewString = utilityLayer0.innerHTML.toString();
setTimeout(() => {
spaceViewOff([,32,32,,,]);
restorePointerEventsNone();
}, 1);
makeTopLayer(localViewReturn);
localViewReturn = null;
coinFocus.lastElementChild.firstElementChild.innerHTML = localViewString;
coinFocus.style.boxShadow = "";
for (let j = 0; j < coinFocus.lastElementChild.firstElementChild.children.length; j++) {
let part = coinFocus.lastElementChild.firstElementChild.children[j];
part.style.left   = parseInt(part.style.left) - parseInt(coinFocus.style.left) + "px";
part.style.top    = parseInt(part.style.top)  - parseInt(coinFocus.style.top)  + "px";
part.dataset.left = part.style.left;
part.dataset.top  = part.style.top ;
}
coinFocus.id = coinIdArray.pop();
if (coinFocus.lastElementChild.firstElementChild.firstElementChild && coinFocus.id == coinFocus.lastElementChild.firstElementChild.firstElementChild.id) {
coinFocus.id = "wrapper_" + coinFocus.id;
}

if (coinFocus != null) {
const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(1,"TAB",96,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);
}


setTimeout(() => { focusSet(document.getElementById(localFirst)); }, 0);

}

       if (lastFlow == "global") {
reflowGlobal(rev,0)
} else if (lastFlow == "colour") {
reflowPerTrip();
}

redraw();

}
