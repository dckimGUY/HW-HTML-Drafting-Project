function brickHorizontal() {
if (utilityLayer0.children.length>0) {
let input = null;
       if (coinFocus.dataset.coinTrip==Ts0) {input=coinTrip.sel0; 
} else if (coinFocus.dataset.coinTrip==Ts1) {input=coinTrip.sel1; 
} else if (coinFocus.dataset.coinTrip==Ts2) {input=coinTrip.sel2;
}
       if (hST==0) {
stackHorizontal(input,1,0);
} else if (hST==1) {
stackHorizontal(input,0,0);
} else if (hST==2) {
stackHorizontalCentre(input);
} else if (hST==3) {
stackHorizontal(input,0,0);
}
if (hST==0) {hST=1; } else if (hST==1) {hST=2; } else if (hST==2) {hST=0;} // else if (hST==3) {hST=0;};
return (1);
} else {
return (0);
}
}
