function focusFirst()    {
if (coinFocus!=null&&utilityLayer0.firstElementChild) {
curFocus=0;
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = utilityLayer0.firstElementChild;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
coinFocus.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
return (1);
} else {
return (0);
}
}
