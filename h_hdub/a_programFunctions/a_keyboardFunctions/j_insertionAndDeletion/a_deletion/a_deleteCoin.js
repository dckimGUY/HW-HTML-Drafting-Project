function deleteCoin(keyInfo) {

if (curFocus==0) {
const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];
	function removeFromCoinTrip(elementToBeRemoved) {
	let eT = elementToBeRemoved;
	eT.remove();
	swap0 = new Array(),      swap1 = new Array(),      swap2 = new Array();
	for (let j = 0; j < coinTrip.sel0.length; j++) { if (eT != coinTrip.sel0[j]) { swap0[swap0.length] = coinTrip.sel0[j]; } }
	for (let j = 0; j < coinTrip.sel1.length; j++) { if (eT != coinTrip.sel1[j]) { swap1[swap1.length] = coinTrip.sel1[j]; } }
	for (let j = 0; j < coinTrip.sel2.length; j++) { if (eT != coinTrip.sel2[j]) { swap2[swap2.length] = coinTrip.sel2[j]; } }
	coinTrip.sel0 = swap0; coinTrip.sel1 = swap1; coinTrip.sel2 = swap2;
	}


/*    X    */ if (kC ==  88 && cC ==  88) {
if (coinFocus != null) {

singlePasteBuffer.value.push(coinFocus);
       if (focusPrevious(true)) {
removeFromCoinTrip(coinFocus.nextElementSibling);
         if (coinFocus.previousElementSibling) {
coinFocus1 = coinFocus.previousElementSibling;
} else {
coinFocus1 = null;
}

} else if (focusNext(true)) {
removeFromCoinTrip(coinFocus.previousElementSibling);
         if (coinFocus.nextElementSibling) {
coinFocus1 = coinFocus.nextElementSibling;
} else {
coinFocus1 = null;
}

} else {

removeFromCoinTrip(coinFocus);
coinFocus1 = null;
coinFocus = null;
curFocus=1;
modeRouter(e,1);

} 
} 

}



/*    x    */ if (kC ==  88 && cC == 120) {
if (coinFocus != null) {

/* Stop us from entering in an empty thing... This way we've always something. */
       if (coinFocus.dataset.coinTrip==Ts0) {
if (coinTrip.sel0.length==0) return;
} else if (coinFocus.dataset.coinTrip==Ts1) {
if (coinTrip.sel1.length==0) return;
} else if (coinFocus.dataset.coinTrip==Ts2) {
if (coinTrip.sel2.length==0) return;
}

let buffer = {};
buffer.value=[];
multiplePasteBuffer.value = [];
                  for (j=0;j<coinTrip.sel0.length;j++) {
                             buffer.value[buffer.value.length] = coinTrip.sel0[j].cloneNode(true);
                             coinTrip.sel0[j].remove();
}
                  for (j=0;j<coinTrip.sel1.length;j++) {
                             buffer.value[buffer.value.length] = coinTrip.sel1[j].cloneNode(true);
                             coinTrip.sel1[j].remove();
}
                  for (j=0;j<coinTrip.sel2.length;j++) {
                             buffer.value[buffer.value.length] = coinTrip.sel2[j].cloneNode(true);
                             coinTrip.sel2[j].remove();
}

readCoins();
multiplePasteBuffer.value = buffer.value;
//spreadReference(buffer.value,multiplePasteBuffer);
if (utilityLayer0.children.length!=0) {
coinFocus=utilityLayer0.lastElementChild;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
curFocus=0;
} else {
curFocus=1;
modeRouter(e,1);
}
}
}
}

}
