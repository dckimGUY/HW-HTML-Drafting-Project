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
/*    q    */ if (kC ==  81 && cC == 113) {                 quitSave();                             }
/*    w    */ if (kC ==  87 && cC == 119) {                 userSelectNone(keyInfo);                }
/*    e    */ if (kC ==  69 && cC == 101) {                 makeItContentEditable(keyInfo);         }
/*    r    */ if (kC ==  82 && cC == 114) { styleKey = "r"; noteStyle("R<br><span style='font-size: 0.5em;'>grid to border-radius</span>",durationS); gridToBorderRadius(keyInfo); lastKey = "r";         }
/*    t    */ if (kC ==  84 && cC == 116) {                 noteStyle("T<br><span style='font-size: 0.5em;'>colour mode</span>",durationS); modeRouter(e,8); if (lastKey=="T") { swapColours(); } }
/*    y    */ if (kC ==  89 && cC == 121) {                 copyOutgoingHashLink();                 }
/*    u    */ if (kC ==  85 && cC == 117) { styleKey = "u"; noteStyle("U<br><span style='font-size: 0.5em;'>grid to box-shadow</span>",durationS); gridToBoxShadow(keyInfo); lastKey = "u";               }
/*    i    */ if (kC ==  73 && cC == 105) {                                                                                                                                                               }
/*    o    */ if (kC ==  79 && cC == 111) {                                                                                                                                                               }
/*    p    */ if (kC ==  80 && cC == 112) { styleKey = "p"; noteStyle("P<br><span style='font-size: 0.5em;'>grid to padding</span>",durationS);    gridToPadding(keyInfo); lastKey = "p";                 }
/*    a    */ if (kC ==  65 && cC ==  97) { styleKey = "a"; cycleTextAlignment(keyInfo); lastKey = "a";            }
/*    s    */ if (kC ==  83 && cC == 115) {                 saveParticlePreparation(0,false);       }
/*    d    */ if (kC ==  68 && cC == 100) {                 promptDownloadLink();                   }
/*    f    */ if (kC ==  70 && cC == 102) { styleKey = "f"; noteStyle("F<br><span style='font-size: 0.5em;'>grid to font-size</span>",durationS);  gridToFontSize(keyInfo); lastKey = "f";                }
/*    g    */ if (kC ==  71 && cC == 103) {                 /* SAFE KEY, NO ACTION */               }
/*    h    */ if (kC ==  72 && cC == 104) {                 outerScaleDown(keyInfo);                }
/*    j    */ if (kC ==  74 && cC == 106) {                 rotateZleft();                          }
/*    k    */ if (kC ==  75 && cC == 107) {                 rotateZright();                         }
/*    l    */ if (kC ==  76 && cC == 108) {                 outerScaleUp(keyInfo);                  }
/*    z    */ if (kC ==  90 && cC == 122) {                 flipAnchorZ(keyInfo);                   }
/*    x    */ if (kC ==  88 && cC == 120) {                 clearRotation(); noteStyle("X<br><span style='font-size: 0.5em;'>clear rotation</span>",durationS);           }
/*    c    */ if (kC ==  67 && cC ==  99) {                 enterForegroundColour(keyInfo); noteStyle("C<br><span style='font-size: 0.5em;'>FG colour</span>",durationS); }
/*    v    */ if (kC ==  86 && cC == 118) {                 noteStyle("V<br><span style='font-size: 0.5em;'>flow document</span>",durationS); reflowGlobal(rev,0);        }
/*    b    */ if (kC ==  66 && cC ==  98) {                 enterBackgroundColour(keyInfo); noteStyle("B<br><span style='font-size: 0.5em;'>BG colour</span>",durationS); }
/*    n    */ if (kC ==  78 && cC == 110) {                 enterArticleContent(keyInfo);           }
/*    m    */ if (kC ==  77 && cC == 109) {                 overflowMain(keyInfo);                  }

}
if (shift==true||hauptMode==1) {
/*    Q    */ if (kC ==  81 && cC ==  81) {                 quitSave();                             }
/*    W    */ if (kC ==  87 && cC ==  87) {                 userSelectNone(keyInfo);                }
/*    E    */ if (kC ==  69 && cC ==  69) {                 makeItContentEditable(keyInfo);         }
/*    R    */ if (kC ==  82 && cC ==  82) { styleKey = "R"; noteStyle("<u>R</u><br><span style='font-size: 0.5em;'>grid to border-radius</span>",durationS,true); gridToBorderRadius(keyInfo); lastKey = "R";   }
/*    T    */ if (kC ==  84 && cC ==  84) {                 noteStyle("<u>T</u><br><span style='font-size: 0.5em;'>colour all</span>",durationS); assignAllColours();                            }
/*    Y    */ if (kC ==  89 && cC ==  89) {                 externalLink(); noteStyle("<u>Y</u><br><span style='font-size: 0.5em;'>external link</span>",durationS);                             }
/*    U    */ if (kC ==  85 && cC ==  85) { styleKey = "U"; noteStyle("<u>U</u><br><span style='font-size: 0.5em;'>grid to box-shadow</span>",durationS,true); gridToBoxShadow(keyInfo); lastKey = "U";         }
/*    I    */ if (kC ==  73 && cC ==  73) {                                                                                                                                                                     }
/*    O    */ if (kC ==  79 && cC ==  79) {                                                                                                                                                                     }
/*    P    */ if (kC ==  80 && cC ==  80) { styleKey = "P"; noteStyle("<u>P</u><br><span style='font-size: 0.5em;'>grid to padding</span>",durationS,true);    gridToPadding(keyInfo); lastKey = "P";           }
/*    A    */ if (kC ==  65 && cC ==  65) { styleKey = "A"; cycleTextAlignment(keyInfo); lastKey = "A";            }
/*    S    */ if (kC ==  83 && cC ==  83) {                 saveParticlePreparation(1,false);       }
/*    D    */ if (kC ==  68 && cC ==  68) {                 buttonDiv();                            }
/*    F    */ if (kC ==  70 && cC ==  70) { styleKey = "F"; noteStyle("<u>F</u><br><span style='font-size: 0.5em;'>grid to font-size</span>",durationS,true); gridToFontSize(keyInfo); lastKey = "F";           }
/*    G    */ if (kC ==  71 && cC ==  71) {                 /* SAFE KEY, NO ACTION */               }
/*    H    */ if (kC ==  72 && cC ==  72) {                 rotateLeft();                           }
/*    J    */ if (kC ==  74 && cC ==  74) {                 rotateUnder();                          }
/*    K    */ if (kC ==  75 && cC ==  75) {                 rotateOver();                           }
/*    L    */ if (kC ==  76 && cC ==  76) {                 rotateRight();                          }
/*    Z    */ if (kC ==  90 && cC ==  90) {                 flipAnchorZ(keyInfo);                   }
/*    X    */ if (kC ==  88 && cC ==  88) {                 resetScale(); noteStyle("X<br><span style='font-size: 0.5em;'>reset scale</span>",durationS);                      }
/*    C    */ if (kC ==  67 && cC ==  67) {                 enterForegroundColour(keyInfo); noteStyle("C<br><span style='font-size: 0.5em;'>FG colour</span>",durationS,true); }
/*    V    */ if (kC ==  86 && cC ==  86) {                 noteStyle("<u>V</u><br><span style='font-size: 0.5em;'>flow by colour</span>",durationS); reflowPerTrip(keyInfo);  }
/*    B    */ if (kC ==  66 && cC ==  66) {                 enterBackgroundColour(keyInfo); noteStyle("B<br><span style='font-size: 0.5em;'>BG colour</span>",durationS,true); }
/*    N    */ if (kC ==  78 && cC ==  78) {                 jsNameAndNote(keyInfo);                 }
/*    M    */ if (kC ==  77 && cC ==  77) {                 overflowMain(keyInfo);                  }
}







return (1);
}
