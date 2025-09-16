function groupPaste(group) {

       if (group==Ts0) {

if (sel0PasteBuffer.value&&sel0PasteBuffer.value.length > 0) {
for (let j = 0; j < sel0PasteBuffer.value.length; j++) { utilityLayer0.appendChild(sel0PasteBuffer.value[j]); }
recoverColouration();
if (sel0PasteBuffer.value.length > 1) { coinFocus1= sel0PasteBuffer.value[sel0PasteBuffer.value.length - 2]; }
coinFocus = sel0PasteBuffer.value[sel0PasteBuffer.value.length - 1];
}
sel0PasteBuffer.value = [];
} else if (group==Ts1) {

if (sel1PasteBuffer.value&&sel1PasteBuffer.value.length > 0) {
for (let j = 0; j < sel1PasteBuffer.value.length; j++) { utilityLayer0.appendChild(sel1PasteBuffer.value[j]); }
recoverColouration();
if (sel1PasteBuffer.value.length > 1) { coinFocus1= sel1PasteBuffer.value[sel1PasteBuffer.value.length - 2]; }
coinFocus = sel1PasteBuffer.value[sel1PasteBuffer.value.length - 1];
}
sel1PasteBuffer.value = [];
} else if (group==Ts2) {

if (sel2PasteBuffer.value&&sel2PasteBuffer.value.length > 0) {
for (let j = 0; j < sel2PasteBuffer.value.length; j++) { utilityLayer0.appendChild(sel2PasteBuffer.value[j]); }
recoverColouration();
if (sel2PasteBuffer.value.length > 1) { coinFocus1= sel2PasteBuffer.value[sel2PasteBuffer.value.length - 2]; }
coinFocus = sel2PasteBuffer.value[sel2PasteBuffer.value.length - 1];
}
sel2PasteBuffer.value = [];
}


for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.outline = fA;
utilityLayer0.children[j].style.outlineOffset = fAO;
}

if (utilityLayer0.children.length>0) { coinFocus = utilityLayer0.lastElementChild; curFocus = 0; }

readCoins();
recoverColouration();

if (coinFocus!=null) {
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}


return(1);

}
