function focusLast()     {
if (coinFocus!=null&&utilityLayer0.lastElementChild) {
curFocus=0;
coinFocus.style.outline = fA;
setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = utilityLayer0.lastElementChild;
coinFocus.style.outline = fB;
coinFocus.scrollIntoView({behavior: 'smooth'});
return (1);
} else {
return (0);
}
}
