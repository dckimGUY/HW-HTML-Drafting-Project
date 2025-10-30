function focusPrevious(del) {



if (utilityLayer0.children.length>0) {

if (curFocus==1) {

if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}

curFocus=0;
if (coinFocus!=null) {
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}
};

if (coinFocus!=null&&coinFocus.previousElementSibling) {

if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}

setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = coinFocus.previousElementSibling;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
if (!del) {
coinFocus.scrollIntoView({behavior: 'smooth'});
}
return (1);
}


} else {
return (0);






}
}
