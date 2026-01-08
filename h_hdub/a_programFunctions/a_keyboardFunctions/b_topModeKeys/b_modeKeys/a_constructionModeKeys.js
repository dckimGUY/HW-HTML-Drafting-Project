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
/*    Q    */ if (kC ==  81 && cC ==  81) {                                 quitSave();                                                                                          }
/*    W    */ if (kC ==  87 && cC ==  87) {                                 appendFile();                                                                                        }
/*    E    */ if (kC ==  69 && cC ==  69) { noteCoin("<u>E</u><br><span style='font-size: 0.5em;'>scale/edge</span>",durationC); resetScale(); lastKey = "e";                    }
/*    R    */ if (kC ==  82 && cC ==  82) { pullFromGuideLayer(keyInfo);                                                                                                         }
/*    T    */ if (kC ==  84 && cC ==  84) { noteCoin("<u>T</u><br><span style='font-size: 0.5em;'>colour all</span>",durationC); assignAllColours();                             }
/*    Y    */ if (kC ==  89 && cC ==  89) { wrapDocumentWithScreen(); noteCoin("<u>Y</u><br><span style='font-size: 0.5em;'>wrap screen</span>",durationC);                      }
/*    U    */ if (kC ==  85 && cC ==  85) { wrapParts(); noteCoin("<u>U</u><br><span style='font-size: 0.5em;'>wrap colours</span>",durationC);                                  }
/*    I    */ if (kC ==  73 && cC ==  73) {                                 aioNRouter(keyInfo);                                                                                 }
/*    O    */ if (kC ==  79 && cC ==  79) {                                 aioNRouter(keyInfo);                                                                                 }
/*    P    */ if (kC ==  80 && cC ==  80) {                                 pasteMultiple(keyInfo);                                                                              }
/*    A    */ if (kC ==  65 && cC ==  65) {                                 aioNRouter(keyInfo);                                                                                 }
/*    S    */ if (kC ==  83 && cC ==  83) {                                 saveProject();                                                                                  }
/*    D    */ if (kC ==  68 && cC ==  68) { noteCoin("<u>D</u><br><span style='font-size: 0.5em;'>duplicate in place</span>",durationC); insertNewDuplicate(keyInfo);            }
/*    F    */ if (kC ==  70 && cC ==  70) {                                 openFile();                                                                                          }
/*    G    */ if (kC ==  71 && cC ==  71) {                                 gridArray();                                                                                         }
/*    H    */ if (kC ==  72 && cC ==  72) { hjklRouter(keyInfo);                                                                                                                 }
/*    J    */ if (kC ==  74 && cC ==  74) { hjklRouter(keyInfo);                                                                                                                 }
/*    K    */ if (kC ==  75 && cC ==  75) { hjklRouter(keyInfo);                                                                                                                 }
/*    L    */ if (kC ==  76 && cC ==  76) { hjklRouter(keyInfo);                                                                                                                 }
/*    Z    */ if (kC ==  90 && cC ==  90) { noteCoin("<u>Z</u><br><span style='font-size: 0.5em;'>Z by colour</span>",durationC); manageTripartiteZ(0); modeRouter(e,9);         }
/*    X    */ if (kC ==  88 && cC ==  88) {                                 deleteCoin(keyInfo);                                                                                 }
/*    C    */ if (kC ==  67 && cC ==  67) { noteCoin("<u>C</u><br><span style='font-size: 0.5em;'>coinToCursor</span>",durationC); coinToCursor(keyInfo); Cur.scrollIntoView({behavior:'smooth', block: 'center', inline: 'center'});                        }
/*    V    */ if (kC ==  86 && cC ==  86) { noteCoin("<u>V</u><br><span style='font-size: 0.5em;'>flow by colour</span>",durationC); lastFlow="colour"; reflowPerTrip(keyInfo);  }
/*    B    */ if (kC ==  66 && cC ==  66) { noteCoin("<u>B</u><br><span style='font-size: 0.5em;'>copy opener contents</span>",durationC); copyOpenerContents(keyInfo);          }
/*    N    */ if (kC ==  78 && cC ==  78) {                                 aioNRouter(keyInfo);                                                                                 }
/*    M    */ if (kC ==  77 && cC ==  77) { guideLayer(keyInfo);                                                                                                                 }
}

if (shift==false||hauptMode==0) {
/*    q    */ if (kC ==  81 && cC == 113) { fMan(keyInfo);                    }
/*    w    */ if (kC ==  87 && cC == 119) { fMan(keyInfo);                    }
/*    e    */ if (kC ==  69 && cC == 101) { fMan(keyInfo);                    }
/*    r    */ if (kC ==  82 && cC == 114) { fMan(keyInfo);                    }
/*    t    */ if (kC ==  84 && cC == 116) { fMan(keyInfo);                    }
/*    y    */ if (kC ==  89 && cC == 121) { fMan(keyInfo);                    }
/*    u    */ if (kC ==  85 && cC == 117) { fMan(keyInfo);                    }
/*    i    */ if (kC ==  73 && cC == 105) { fMan(keyInfo);                    }
/*    o    */ if (kC ==  79 && cC == 111) { fMan(keyInfo);                    }
/*    p    */ if (kC ==  80 && cC == 112) { fMan(keyInfo);                    }
/*    a    */ if (kC ==  65 && cC ==  97) { fMan(keyInfo);                    }
/*    s    */ if (kC ==  83 && cC == 115) { fMan(keyInfo);                    }
/*    d    */ if (kC ==  68 && cC == 100) { fMan(keyInfo);                    }
/*    f    */ if (kC ==  70 && cC == 102) { fMan(keyInfo);                    }
/*    g    */ if (kC ==  71 && cC == 103) { fMan(keyInfo);                    }
/*    h    */ if (kC ==  72 && cC == 104) { fMan(keyInfo);                    }
/*    j    */ if (kC ==  74 && cC == 106) { fMan(keyInfo);                    }
/*    k    */ if (kC ==  75 && cC == 107) { fMan(keyInfo);                    }
/*    l    */ if (kC ==  76 && cC == 108) { fMan(keyInfo);                    }
/*    z    */ if (kC ==  90 && cC == 122) { fMan(keyInfo);                    }
/*    x    */ if (kC ==  88 && cC == 120) { fMan(keyInfo);                    }
/*    c    */ if (kC ==  67 && cC ==  99) { fMan(keyInfo);                    }
/*    v    */ if (kC ==  86 && cC == 118) { fMan(keyInfo);                    }
/*    b    */ if (kC ==  66 && cC ==  98) { fMan(keyInfo);                    }
/*    n    */ if (kC ==  78 && cC == 110) { fMan(keyInfo);                    }
/*    m    */ if (kC ==  77 && cC == 109) { fMan(keyInfo);                    }
}

}
