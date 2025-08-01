function stepStackFlat() {
if (utilityLayer0.children.length>0) {
let input = null;
       if (coinFocus.dataset.coinTrip==Ts0) {input=coinTrip.sel0; 
} else if (coinFocus.dataset.coinTrip==Ts1) {input=coinTrip.sel1; 
} else if (coinFocus.dataset.coinTrip==Ts2) {input=coinTrip.sel2;
}
       if (sST==0) { stackPoint(input,0,1,0,1); sST=3;
} else if (sST==1) { stackPoint(input,1,0,0,1); sST=2;
} else if (sST==2) { stackPoint(input,1,1,1,0); sST=0;
} else             { stackPoint(input,0,0,1,0); sST=1;
}
}
}
