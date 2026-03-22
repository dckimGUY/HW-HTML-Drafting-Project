function focusNext(del)     {
if (utilityLayer0.children.length>0) {
if (curFocus==1 && !mouseIsDogged) { 
if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}
curFocus=0; coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}
if (coinFocus!=null&&coinFocus.nextElementSibling) {
if (coinFocus!=null && !mouseIsDogged) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}
if (!mouseIsDogged) {
setCoinTripColouration();
}
coinFocus1=coinFocus;
coinFocus = coinFocus.nextElementSibling;
if (!mouseIsDogged) {
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}
if (!del) {
coinFocus.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
}
return (1);
}
} else {
return (0);
}
}
