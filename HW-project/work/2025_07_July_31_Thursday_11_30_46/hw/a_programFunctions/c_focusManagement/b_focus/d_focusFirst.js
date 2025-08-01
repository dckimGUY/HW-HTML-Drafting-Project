function focusFirst()    {
if (coinFocus!=null&&utilityLayer0.firstElementChild) {
curFocus=0;
coinFocus.style.outline = fA;
setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = utilityLayer0.firstElementChild;
coinFocus.style.outline = fB;
coinFocus.scrollIntoView({behavior: 'smooth'});
return (1);
} else {
return (0);
}
}
