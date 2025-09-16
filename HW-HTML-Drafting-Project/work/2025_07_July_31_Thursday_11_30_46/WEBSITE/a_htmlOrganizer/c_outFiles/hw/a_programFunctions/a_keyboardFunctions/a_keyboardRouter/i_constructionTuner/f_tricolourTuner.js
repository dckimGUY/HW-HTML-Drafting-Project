function tricolourTuner() {

Cur.style.display="block";

/*    /    */ if (kC == 111 && cC ==  47) { }
/*    *    */ if (kC == 106 && cC ==  42) { }
/*    -    */ if (kC == 109 && cC ==  45) { lessG(); }
/*    +    */ if (kC == 107 && cC ==  43) { moreG(); }

if (utilityLayer0.children.length>0&&coinFocus!=null) {
let input = null;
       if (coinFocus.dataset.coinTrip==Ts0) {input=coinTrip.sel0; 
} else if (coinFocus.dataset.coinTrip==Ts1) {input=coinTrip.sel1; 
} else if (coinFocus.dataset.coinTrip==Ts2) {input=coinTrip.sel2;
}

/* corners */
/*    7    */ if (kC == 103 && cC ==  55) { stackPoint(input,0,0,1,1); }
/*    9    */ if (kC == 105 && cC ==  57) { stackPoint(input,0,1,1,1); }
/*    1    */ if (kC ==  97 && cC ==  49) { stackPoint(input,1,0,1,1); }
/*    3    */ if (kC ==  99 && cC ==  51) { stackPoint(input,1,1,1,1); }

/* sides */
/*    8    */ if (kC == 104 && cC ==  56) { stackPoint(input,0,1,0,1); }
/*    4    */ if (kC == 100 && cC ==  52) { stackPoint(input,0,0,1,0); }
/*    6    */ if (kC == 102 && cC ==  54) { stackPoint(input,1,1,1,0); }
/*    2    */ if (kC ==  98 && cC ==  50) { stackPoint(input,1,0,0,1); }

/* brick */
/*    0    */ if (kC ==  96 && cC ==  48) { brickHorizontal(); lastKey="0"; }
/*    .    */ if (kC == 110 && cC ==  46) { brickVertical();   lastKey=")"; }
}

/*    5    */ if (kC == 101 && cC ==  53) {
cursorToWindowCentre();
}


}