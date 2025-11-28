function focusNext(del)     {

if (utilityLayer0.children.length>0) {
if (curFocus==1) { 

if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}

curFocus=0; coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
};

if (coinFocus!=null&&coinFocus.nextElementSibling) {

if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}

setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = coinFocus.nextElementSibling;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
if (!del) {
coinFocus.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
}
return (1);

}

} else {
return (0);
}

}
