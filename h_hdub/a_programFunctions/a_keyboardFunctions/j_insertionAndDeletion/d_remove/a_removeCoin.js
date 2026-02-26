function removeCoin() {
if (curFocus==0) {
	function removeFromCoinTrip(elementToBeRemoved) {
	let eT = elementToBeRemoved;
	eT.remove();
	swap0 = new Array(),      swap1 = new Array(),      swap2 = new Array();
	for (let j = 0; j < coinTrip.sel0.length; j++) { if (eT != coinTrip.sel0[j]) { swap0[swap0.length] = coinTrip.sel0[j]; } }
	for (let j = 0; j < coinTrip.sel1.length; j++) { if (eT != coinTrip.sel1[j]) { swap1[swap1.length] = coinTrip.sel1[j]; } }
	for (let j = 0; j < coinTrip.sel2.length; j++) { if (eT != coinTrip.sel2[j]) { swap2[swap2.length] = coinTrip.sel2[j]; } }
	coinTrip.sel0 = swap0; coinTrip.sel1 = swap1; coinTrip.sel2 = swap2;
	}
if (coinFocus != null) {
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
modeRouter("",1);
} 
} 
}
}