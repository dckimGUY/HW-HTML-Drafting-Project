function grabTuner() {

/*    /    */ if (kC == 111 && cC ==  47) { cursorToCoinCentre(); }
/*    *    */ if (kC == 106 && cC ==  42) { coinCentreToCursor(); }
/*    -    */ if (kC == 109 && cC ==  45) { lessG(); }
/*    +    */ if (kC == 107 && cC ==  43) { moreG(); }

/*    7    */ if (kC == 103 && cC ==  55) { cursorToCoinTopLeft()      ; }
/*    8    */ if (kC == 104 && cC ==  56) { cursorToCoinTopCentre()    ; }
/*    9    */ if (kC == 105 && cC ==  57) { cursorToCoinTopRight()     ; }

/*    4    */ if (kC == 100 && cC ==  52) { cursorToCoinLeftCentre()   ; }
/*    5    */ if (kC == 101 && cC ==  53) { cursorToCoinCentre()       ; }
/*    6    */ if (kC == 102 && cC ==  54) { cursorToCoinRightCentre()  ; }

/*    1    */ if (kC ==  97 && cC ==  49) { cursorToCoinBottomLeft()   ; }
/*    2    */ if (kC ==  98 && cC ==  50) { cursorToCoinBottomCentre() ; }
/*    3    */ if (kC ==  99 && cC ==  51) { cursorToCoinBottomRight()  ; }

/*    0    */ if (kC ==  96 && cC ==  48) {}
/*    .    */ if (kC == 110 && cC ==  46) {}

}