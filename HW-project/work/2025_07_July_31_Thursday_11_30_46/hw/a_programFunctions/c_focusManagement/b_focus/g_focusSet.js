function focusSet(newFocus) {
if (coinFocus!=null&&newFocus&&scanForCoin(utilityLayer0,newFocus)==1) {
curFocus=0;
coinFocus.style.outline = fA;
setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = newFocus;
readCoins();
recoverColouration();
coinFocus.style.outline = fB;
return (1);
} else {
return (0);
}
}
