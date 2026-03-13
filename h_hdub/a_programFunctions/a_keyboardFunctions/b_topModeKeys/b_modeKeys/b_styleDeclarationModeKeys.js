/* Declare the Style modes. */
let modeS = 100;





function styleDeclarationModeKeys(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

/* These conditions will be directed to the "style-declaration-mode" for the program. */
if (shift==false||hauptMode==1) {
/*    Q    */ if (kC ==  81 && cC ==  81) {                                                         }
/*    W    */ if (kC ==  87 && cC ==  87) {                 userSelectNone(keyInfo);                }
/*    E    */ if (kC ==  69 && cC ==  69) {                                                         }
/*    R    */ if (kC ==  82 && cC ==  82) { styleKey = "r";  gridToBorderRadius(keyInfo); lastKey = "r";         }
/*    T    */ if (kC ==  84 && cC ==  84) { modeRouter(e,8); if (lastKey=="t") { swapColours(); }   }
/*    Y    */ if (kC ==  89 && cC ==  89) {                 copyOutgoingHashLink();                 }
/*    U    */ if (kC ==  85 && cC ==  85) { styleKey = "u";  gridToBoxShadow(keyInfo); lastKey = "u";               }
/*    I    */ if (kC ==  73 && cC ==  73) { enterImageAltText(keyInfo);                             }
/*    O    */ if (kC ==  79 && cC ==  79) { enterClassNames(keyInfo);                               }
/*    P    */ if (kC ==  80 && cC ==  80) { styleKey = "p";     gridToPadding(keyInfo); lastKey = "p";                 }
/*    A    */ if (kC ==  65 && cC ==  65) { styleKey = "a"; cycleTextAlignment(keyInfo); lastKey = "a";            }
/*    S    */ if (kC ==  83 && cC ==  83) {                 deMinimis(false, lastFactor);           }
/*    D    */ if (kC ==  68 && cC ==  68) {                 promptDownloadLink();                   }
/*    F    */ if (kC ==  70 && cC ==  70) { styleKey = "f"; gridToFontSize(keyInfo); lastKey = "f"; }
/*    G    */ if (kC ==  71 && cC ==  71) { modeRouter(e,1);                                        }
/*    H    */ if (kC ==  72 && cC ==  72) {                 rotateLeft();                           }
/*    J    */ if (kC ==  74 && cC ==  74) {                 rotateZleft();                          }
/*    K    */ if (kC ==  75 && cC ==  75) {                 rotateZright();                         }
/*    L    */ if (kC ==  76 && cC ==  76) {                 rotateRight();                          }
/*    Z    */ if (kC ==  90 && cC ==  90) {                                                         }
/*    X    */ if (kC ==  88 && cC ==  88) {                 clearRotation();            }
/*    C    */ if (kC ==  67 && cC ==  67) {                 enterForegroundColour(keyInfo);  }
/*    V    */ if (kC ==  86 && cC ==  86) {                 lastFlow="global"; reflowGlobal(rev,0); }
/*    B    */ if (kC ==  66 && cC ==  66) {                 enterBackgroundColour(keyInfo);  }
/*    N    */ if (kC ==  78 && cC ==  78) {                                                         }
/*    M    */ if (kC ==  77 && cC ==  77) {                 overflowMain(keyInfo);                  }

}
if (shift==true||hauptMode==1) {
/*    q    */ if (kC ==  81 && cC == 113) {                                                         }
/*    w    */ if (kC ==  87 && cC == 119) {                 userSelectNone(keyInfo);                }
/*    e    */ if (kC ==  69 && cC == 101) {                                                         }
/*    r    */ if (kC ==  82 && cC == 114) { styleKey = "R";  gridToBorderRadius(keyInfo); lastKey = "R";   }
/*    t    */ if (kC ==  84 && cC == 116) {                                     assignAllColours(); }
/*    y    */ if (kC ==  89 && cC == 121) {                 externalLink();                         }
/*    u    */ if (kC ==  85 && cC == 117) { styleKey = "U";  gridToBoxShadow(keyInfo); lastKey = "U";         }
/*    i    */ if (kC ==  73 && cC == 105) { enterImageAltText(keyInfo);                             }
/*    o    */ if (kC ==  79 && cC == 111) { enterClassNames(keyInfo);                               }
/*    p    */ if (kC ==  80 && cC == 112) { styleKey = "P"; gridToPadding(keyInfo); lastKey = "P";  }
/*    a    */ if (kC ==  65 && cC ==  97) { styleKey = "A"; cycleTextAlignment(keyInfo); lastKey = "A";            }
/*    s    */ if (kC ==  83 && cC == 115) {                 saveProject();       }
/*    d    */ if (kC ==  68 && cC == 100) {                 buttonDiv();                            }
/*    f    */ if (kC ==  70 && cC == 102) { styleKey = "F"; gridToFontSize(keyInfo); lastKey = "F"; }
/*    g    */ if (kC ==  71 && cC == 103) { modeRouter(e,1);                                        }
/*    h    */ if (kC ==  72 && cC == 104) {                 /*outerScaleDown(keyInfo);*/            }
/*    j    */ if (kC ==  74 && cC == 106) {                 rotateUnder();                          }
/*    k    */ if (kC ==  75 && cC == 107) {                 rotateOver();                           }
/*    l    */ if (kC ==  76 && cC == 108) {                 /*outerScaleUp(keyInfo);      */        }
/*    z    */ if (kC ==  90 && cC == 122) {                                                         }
/*    x    */ if (kC ==  88 && cC == 120) {                 resetScale();                       }
/*    c    */ if (kC ==  67 && cC ==  99) {                 enterForegroundColour(keyInfo);  }
/*    v    */ if (kC ==  86 && cC == 118) {                  lastFlow="colour"; reflowPerTrip(keyInfo);  }
/*    b    */ if (kC ==  66 && cC ==  98) {                 enterBackgroundColour(keyInfo);  }
/*    n    */ if (kC ==  78 && cC == 110) {                                                         }
/*    m    */ if (kC ==  77 && cC == 109) {                 overflowMain(keyInfo);                  }
}







return (1);
}
