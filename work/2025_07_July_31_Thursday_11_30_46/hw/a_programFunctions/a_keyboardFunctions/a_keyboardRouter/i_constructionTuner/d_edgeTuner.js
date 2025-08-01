function edgeTuner() {

/*    -    */ if (kC == 109 && cC ==  45) { lessG(); }
/*    +    */ if (kC == 107 && cC ==  43) { moreG(); }

if (coinFocus!=null) {
/*    /    */ if (kC == 111 && cC ==  47) { rotateZleft()  ; }
/*    *    */ if (kC == 106 && cC ==  42) { rotateZright() ; }

/*    7    */ if (kC == 103 && cC ==  55) { rotateOver(); rotateLeft();  }
/*    8    */ if (kC == 104 && cC ==  56) { rotateOver()   ; }
/*    9    */ if (kC == 105 && cC ==  57) { rotateOver(); rotateRight(); }

/*    4    */ if (kC == 100 && cC ==  52) { rotateLeft()   ; }
/*    5    */ if (kC == 101 && cC ==  53) { clearRotation(); }
/*    6    */ if (kC == 102 && cC ==  54) { rotateRight()  ; }

/*    1    */ if (kC ==  97 && cC ==  49) { rotateUnder(); rotateLeft();  }
/*    2    */ if (kC ==  98 && cC ==  50) { rotateUnder()  ; }
/*    3    */ if (kC ==  99 && cC ==  51) { rotateUnder(); rotateRight(); }

/*    0    */ if (kC ==  96 && cC ==  48) { coinFocus.dataset.dragPull="backgroundColor"; }
/*    .    */ if (kC == 110 && cC ==  46) { coinFocus.dataset.dragPull="main.style.transform"; }
}

}