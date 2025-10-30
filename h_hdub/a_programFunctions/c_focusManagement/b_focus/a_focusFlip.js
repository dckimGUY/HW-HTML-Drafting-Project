function focusFlip() {
if (coinFocus!=null&&coinFocus1!=null&&mousedown.hold==false) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
setCoinTripColouration();
coinFocus2=coinFocus ;
coinFocus =coinFocus1;
coinFocus1=coinFocus2;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
coinFocus.scrollIntoView({behavior: 'smooth'});
curFocus=0;
return (1);
} else {
return (0);
}
}
