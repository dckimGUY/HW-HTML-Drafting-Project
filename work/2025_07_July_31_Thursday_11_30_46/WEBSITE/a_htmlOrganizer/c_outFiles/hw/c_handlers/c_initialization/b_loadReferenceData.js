function loadReferenceData() {

try {
let finished = 0;

for (let j = 0; j < window.parents.length; j++) {
if (finished!=1) {

for (let i = 0; i < window.parents[j].children.length; i++) {
if (!window.parents[j].children[i].closed) {
window.hold = window.parents[j].children[i].hold;
window.multiplePasteBuffer.value = window.parents[j].children[i].multiplePasteBuffer.value;
window.singlePasteBuffer.value = window.parents[j].children[i].singlePasteBuffer.value;
finished = 1;
}
}
}

}

window.helpMenuOverlay.style.display = window.opener.helpMenuOverlay.style.display;
window.filename = window.opener.filename;
window.pageEchelon = window.opener.pageEchelon;

if (finished==1) {
return (1);
} else {
return (0);
}
} catch {
return (0);
}

}
