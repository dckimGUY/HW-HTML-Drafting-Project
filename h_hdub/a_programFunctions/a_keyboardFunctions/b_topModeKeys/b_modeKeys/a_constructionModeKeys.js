function constructionModeKeys(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

/* These conditions will be Constructing the "construction-mode" for the program. */
if (shift==true||hauptMode==0) {
/*    q    */ if (kC ==  81 && cC == 113) {                                 quitSave();                                                                                          }
/*    w    */ if (kC ==  87 && cC == 119) {                                 appendFile();                                                                                        }
/*    e    */ if (kC ==  69 && cC == 101) { noteCoin("<u>E</u><br><span style='font-size: 0.5em;'>scale/edge</span>",durationC); resetScale(); lastKey = "e";                    }
/*    r    */ if (kC ==  82 && cC == 114) { pullFromGuideLayer(keyInfo);                                                                                                         }
/*    t    */ if (kC ==  84 && cC == 116) { noteCoin("<u>T</u><br><span style='font-size: 0.5em;'>colour all</span>",durationC); assignAllColours();                             }
/*    y    */ if (kC ==  89 && cC == 121) { wrapDocumentWithScreen(); noteCoin("<u>Y</u><br><span style='font-size: 0.5em;'>wrap screen</span>",durationC);                      }
/*    u    */ if (kC ==  85 && cC == 117) { wrapParts(); noteCoin("<u>U</u><br><span style='font-size: 0.5em;'>wrap colours</span>",durationC);                                  }
/*    i    */ if (kC ==  73 && cC == 105) {                                 aioNRouter(keyInfo);                                                                                 }
/*    o    */ if (kC ==  79 && cC == 111) {                                 aioNRouter(keyInfo);                                                                                 }
/*    p    */ if (kC ==  80 && cC == 112) {                                 pasteMultiple(keyInfo);                                                                              }
/*    a    */ if (kC ==  65 && cC ==  97) {                                 aioNRouter(keyInfo);                                                                                 }
/*    s    */ if (kC ==  83 && cC == 115) {                                 saveParticlePreparation(1,false);                                                                    }
/*    d    */ if (kC ==  68 && cC == 100) { noteCoin("<u>D</u><br><span style='font-size: 0.5em;'>duplicate in place</span>",durationC); insertNewDuplicate(keyInfo);            }
/*    f    */ if (kC ==  70 && cC == 102) {                                 openFile();                                                                                          }
/*    g    */ if (kC ==  71 && cC == 103) {                                 gridArray();                                                                                         }
/*    h    */ if (kC ==  72 && cC == 104) { hjklRouter(keyInfo);                                                                                                                 }
/*    j    */ if (kC ==  74 && cC == 106) { hjklRouter(keyInfo);                                                                                                                 }
/*    k    */ if (kC ==  75 && cC == 107) { hjklRouter(keyInfo);                                                                                                                 }
/*    l    */ if (kC ==  76 && cC == 108) { hjklRouter(keyInfo);                                                                                                                 }
/*    z    */ if (kC ==  90 && cC == 122) { noteCoin("<u>Z</u><br><span style='font-size: 0.5em;'>Z by colour</span>",durationC); manageTripartiteZ(0); modeRouter(e,9);         }
/*    x    */ if (kC ==  88 && cC == 120) {                                 deleteCoin(keyInfo);                                                                                 }
/*    c    */ if (kC ==  67 && cC ==  99) { noteCoin("<u>C</u><br><span style='font-size: 0.5em;'>coinToCursor</span>",durationC); coinToCursor(keyInfo);                        }
/*    v    */ if (kC ==  86 && cC == 118) { noteCoin("<u>V</u><br><span style='font-size: 0.5em;'>flow by colour</span>",durationC); lastFlow="colour"; reflowPerTrip(keyInfo);  }
/*    b    */ if (kC ==  66 && cC ==  98) { noteCoin("<u>B</u><br><span style='font-size: 0.5em;'>copy opener contents</span>",durationC); copyOpenerContents(keyInfo);          }
/*    n    */ if (kC ==  78 && cC == 110) {                                 aioNRouter(keyInfo);                                                                                 }
/*    m    */ if (kC ==  77 && cC == 109) { guideLayer(keyInfo);                                                                                                                 }
}

if (shift==false||hauptMode==0) {
/*    Q    */ if (kC ==  81 && cC ==  81) { fMan(keyInfo);                    }
/*    W    */ if (kC ==  87 && cC ==  87) { fMan(keyInfo);                    }
/*    E    */ if (kC ==  69 && cC ==  69) { fMan(keyInfo);                    }
/*    R    */ if (kC ==  82 && cC ==  82) { fMan(keyInfo);                    }
/*    T    */ if (kC ==  84 && cC ==  84) { fMan(keyInfo);                    }
/*    Y    */ if (kC ==  89 && cC ==  89) { fMan(keyInfo);                    }
/*    U    */ if (kC ==  85 && cC ==  85) { fMan(keyInfo);                    }
/*    I    */ if (kC ==  73 && cC ==  73) { fMan(keyInfo);                    }
/*    O    */ if (kC ==  79 && cC ==  79) { fMan(keyInfo);                    }
/*    P    */ if (kC ==  80 && cC ==  80) { fMan(keyInfo);                    }
/*    A    */ if (kC ==  65 && cC ==  65) { fMan(keyInfo);                    }
/*    S    */ if (kC ==  83 && cC ==  83) { fMan(keyInfo);                    }
/*    D    */ if (kC ==  68 && cC ==  68) { fMan(keyInfo);                    }
/*    F    */ if (kC ==  70 && cC ==  70) { fMan(keyInfo);                    }
/*    G    */ if (kC ==  71 && cC ==  71) { fMan(keyInfo);                    }
/*    H    */ if (kC ==  72 && cC ==  72) { fMan(keyInfo);                    }
/*    J    */ if (kC ==  74 && cC ==  74) { fMan(keyInfo);                    }
/*    K    */ if (kC ==  75 && cC ==  75) { fMan(keyInfo);                    }
/*    L    */ if (kC ==  76 && cC ==  76) { fMan(keyInfo);                    }
/*    Z    */ if (kC ==  90 && cC ==  90) { fMan(keyInfo);                    }
/*    X    */ if (kC ==  88 && cC ==  88) { fMan(keyInfo);                    }
/*    C    */ if (kC ==  67 && cC ==  67) { fMan(keyInfo);                    }
/*    V    */ if (kC ==  86 && cC ==  86) { fMan(keyInfo);                    }
/*    B    */ if (kC ==  66 && cC ==  66) { fMan(keyInfo);                    }
/*    N    */ if (kC ==  78 && cC ==  78) { fMan(keyInfo);                    }
/*    M    */ if (kC ==  77 && cC ==  77) { fMan(keyInfo);                    }
}

}
