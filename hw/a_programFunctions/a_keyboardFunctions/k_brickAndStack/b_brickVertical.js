function brickVertical() {
if (utilityLayer0.children.length>0) {
let input = null;
       if (coinFocus.dataset.coinTrip==Ts0) {input=coinTrip.sel0; 
} else if (coinFocus.dataset.coinTrip==Ts1) {input=coinTrip.sel1; 
} else if (coinFocus.dataset.coinTrip==Ts2) {input=coinTrip.sel2;
}
       if (vST==0) {
//stackVertical(input,0,1);
stackVertical(input,1,0);
} else if (vST==1) {
//stackVertical(input,1,1);
stackVertical(input,0,0);
} else if (vST==2) {
stackVerticalCentre(input);
} else if (vST==3) {
stackVertical(input,0,0);
}
if (vST==0) {vST=1; } else if (vST==1) {vST=2; } else if (vST==2) {vST=0;} // else if (vST==3) {vST=0;};
}
}
