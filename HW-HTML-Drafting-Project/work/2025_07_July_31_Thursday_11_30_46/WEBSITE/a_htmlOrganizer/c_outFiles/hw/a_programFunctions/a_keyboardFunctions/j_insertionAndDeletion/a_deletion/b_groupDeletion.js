function groupDeletion(group) {

let buffer = {};
buffer.value=[];

       if (group==Ts0) {
if (coinTrip.sel0.length==0) return;
sel0PasteBuffer.value = [];
for (let j=0;j<coinTrip.sel0.length;j++) {
sel0PasteBuffer.value[sel0PasteBuffer.value.length] = coinTrip.sel0[j].cloneNode(true);
coinTrip.sel0[j].remove();
}
//spreadReference(buffer.value,sel0PasteBuffer);
} else if (group==Ts1) {
if (coinTrip.sel1.length==0) return;
sel1PasteBuffer.value = [];
for (let j=0;j<coinTrip.sel1.length;j++) {
sel1PasteBuffer.value[sel1PasteBuffer.value.length] = coinTrip.sel1[j].cloneNode(true);
coinTrip.sel1[j].remove();
}
//spreadReference(buffer.value,sel1PasteBuffer);
} else if (group==Ts2) {
if (coinTrip.sel2.length==0) return;
sel2PasteBuffer.value = [];
for (let j=0;j<coinTrip.sel2.length;j++) {
sel2PasteBuffer.value[sel2PasteBuffer.value.length] = coinTrip.sel2[j].cloneNode(true);
coinTrip.sel2[j].remove();
}
//spreadReference(buffer.value,sel2PasteBuffer);
}

readCoins();

if (utilityLayer0.children.length!=0) {
coinFocus=utilityLayer0.lastElementChild;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
curFocus=0;
} else {
curFocus=1;
modeRouter('',1);
}

}
