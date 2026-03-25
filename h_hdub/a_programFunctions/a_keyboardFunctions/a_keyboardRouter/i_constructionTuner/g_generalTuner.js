function generalTuner() {

if (coinFocus!=null) {
/*    -    */ if (kC == 109 && cC ==  45) {  }
/*    +    */ if (kC == 107 && cC ==  43) {  }

/*    /    */ if (kC == 111 && cC ==  47) { focusPrevious(true); }
/*    *    */ if (kC == 106 && cC ==  42) { focusNext(true);     }

/*    7    */ if (kC == 103 && cC ==  55) { if (activeStateEdit) { firstState(); } }
/*    8    */ if (kC == 104 && cC ==  56) { moveUp(['','','',false,false,false]); /*insertForArrows();*/ }
/*    9    */ if (kC == 105 && cC ==  57) { if (activeStateEdit) { nextState(); } }

/*    4    */ if (kC == 100 && cC ==  52) { moveLeft(['','','',false,false,false]); /*insertForArrows();*/ }
/*    5    */ if (kC == 101 && cC ==  53) { clearRotation(); }
/*    6    */ if (kC == 102 && cC ==  54) { moveRight(['','','',false,false,false]); /*insertForArrows();*/ }

/*    1    */ if (kC ==  97 && cC ==  49) { if (activeStateEdit) { lastState(); } }
/*    2    */ if (kC ==  98 && cC ==  50) { moveDown(['','','',false,false,false]); /*insertForArrows();*/ }
/*    3    */ if (kC ==  99 && cC ==  51) { if (activeStateEdit) { previousState(); } }

/*    0    */ if (kC ==  96 && cC ==  48) { insertKey(); }
/*    .    */ if (kC == 110 && cC ==  46) { deleteKey(); }
}

}