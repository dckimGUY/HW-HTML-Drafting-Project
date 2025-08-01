function focusPrevious(del) {

if (utilityLayer0.children.length>0) {

if (curFocus==1) {
curFocus=0;
if (coinFocus!=null) {
coinFocus.style.outline = fB;
}
};

if (coinFocus!=null&&coinFocus.previousElementSibling) {
coinFocus.style.outline = fA;
setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = coinFocus.previousElementSibling;
coinFocus.style.outline = fB;
if (!del) {
coinFocus.scrollIntoView({behavior: 'smooth'});
}
return (1);
}


} else {
return (0);






}
}
