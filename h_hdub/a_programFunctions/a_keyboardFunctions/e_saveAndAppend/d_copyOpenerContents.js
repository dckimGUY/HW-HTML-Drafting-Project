function copyOpenerContents(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (window.opener) {
if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}
window.utilityLayer0.innerHTML += window.opener.utilityLayer0.innerHTML;
if (utilityLayer0.firstElementChild) {
coinFocus=utilityLayer0.firstElementChild;
curFocus=0;
} else {
curFocus = 1;
}
readCoins();
recoverColouration();
if (coinFocus!=null) {
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}
}
}
