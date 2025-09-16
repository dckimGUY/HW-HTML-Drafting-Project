function toggleLocalView() {








if (topLayer.a_currentLayer!="localView") {
if (coinFocus!=null) {
localViewReturn = topLayer.a_currentLayer;
topLayer.localView.b_content.innerHTML = '';

insertNewDuplicate([event,68,100,,,]);

coinFocus1.lastElementChild.lastElementChild.previousElementSibling.innerHTML = "";

var localViewHighlightColour = "cyan";
var iSZ = "0px 0px " + edgeQ + "px " + localViewHighlightColour;
const iSZa = iSZ + ",";
coinFocus1.style.boxShadow = iSZa + iSZa + iSZa + iSZa + iSZa + iSZa + iSZa + iSZa + iSZ;

deleteCoin([event,88,88,,,]);

guideLayer([event,77,109,,,]);
if(rev==1){focusPrevious()}else{focusNext()}
makeTopLayer("localView");
pasteSingle([event,80,80,,,]);
if (coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML=="") {
deleteCoin([event,88,88,,,]);
singlePasteBuffer.value.pop();
} else {


unwrapPartsAlways();
}
}

} else if (topLayer.a_currentLayer=="localView") {
utilityLayer1.innerHTML = "";

for (j=0;j<utilityLayer0.children.length;j++) {
if (utilityLayer0.children[j].style) {
utilityLayer0.children[j].style.outline = utilityLayer0.children[j].dataset.finishedOutline;
}
if (utilityLayer0.children[j].firstElementChild) {
utilityLayer0.children[j].firstElementChild.style.backgroundColor = "transparent";
utilityLayer0.children[j].firstElementChild.innerText             =            "";
}
if (utilityLayer0.children[j].lastElementChild) {
utilityLayer0.children[j].lastElementChild.style.display  = "block";
}
}

localViewString = utilityLayer0.innerHTML.toString();
makeTopLayer(localViewReturn);
localViewReturn = null;
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = localViewString;

coinFocus.style.boxShadow = "";

for (let j = 0; j < coinFocus.lastElementChild.lastElementChild.previousElementSibling.children.length; j++) {
let part = coinFocus.lastElementChild.lastElementChild.previousElementSibling.children[j];
part.style.left   = parseInt(part.style.left)   - parseInt(coinFocus.style.left)   + "px";
part.style.top    = parseInt(part.style.top)    - parseInt(coinFocus.style.top)    + "px";
part.dataset.left   = part.style.left  ;
part.dataset.top    = part.style.top   ;
}
}




















}