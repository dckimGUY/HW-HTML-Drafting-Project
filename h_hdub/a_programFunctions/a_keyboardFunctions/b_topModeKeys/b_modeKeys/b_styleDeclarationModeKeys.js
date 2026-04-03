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
/**************************************************************************************************************************************************************/
/*                                                                                                                                                            */
/*    q    */ if (kC ==  81 && cC == 113) { wrapDocument();                                                                                                    }
/*    w    */ if (kC ==  87 && cC == 119) { copyOpenerContents(keyInfo);                                                                                       }
/*    e    */ if (kC ==  69 && cC == 101) { enterPageEchelon();                                                                                                }
/*    r    */ if (kC ==  82 && cC == 114) { removeGroup();                                                                                                     }
/*    t    */ if (kC ==  84 && cC == 116) { modeRouter(e,8); if (lastKey=="T") { assignAllColours(); }                                                         }
/*    y    */ if (kC ==  89 && cC == 121) { isolateGroup();                                                                                                    }
/*    u    */ if (kC ==  85 && cC == 117) { duplicateU();                                                                                                      }
/*    i    */ if (kC ==  73 && cC == 105) {                                 aioNRouter(keyInfo);                                                               } 
/*    o    */ if (kC ==  79 && cC == 111) {                                 aioNRouter(keyInfo);                                                               }
/*    p    */ if (kC ==  80 && cC == 112) { duplicateP();                                                                                                      }
/*    a    */ if (kC ==  65 && cC ==  97) {                                 aioNRouter(keyInfo);                                                               }
/*    s    */ if (kC ==  83 && cC == 115) {                                 deMinimis(false, lastFactor);                                                      }
/*    d    */ if (kC ==  68 && cC == 100) { insertNewDuplicate(keyInfo);                                                                                       }
/*    f    */ if (kC ==  70 && cC == 102) { styleKey = "f"; gridToFontSize(keyInfo); lastKey = "f";                                                            }
/*    g    */ if (kC ==  71 && cC == 103) { curFocus=0; modeRouter(e,1);                                                                                       }
/*    h    */ if (kC ==  72 && cC == 104) { hjklRouter(keyInfo);                                                                                               }
/*    j    */ if (kC ==  74 && cC == 106) { hjklRouter(keyInfo);                                                                                               }
/*    k    */ if (kC ==  75 && cC == 107) { hjklRouter(keyInfo);                                                                                               }
/*    l    */ if (kC ==  76 && cC == 108) { hjklRouter(keyInfo);                                                                                               }
/*    z    */ if (kC ==  90 && cC == 122) { manageTripartiteZ(0); modeRouter(e,9); zBuzz("Z");                                                                 }
/*    x    */ if (kC ==  88 && cC == 120) { groupToPhantomLair();                                                                                              }
/*    c    */ if (kC ==  67 && cC ==  99) { coinToCursor(keyInfo); Cur.scrollIntoView({behavior:'smooth', block: 'center', inline: 'center'});                 }
/*    v    */ if (kC ==  86 && cC == 118) { lastFlow="colour"; reflowPerTrip(); zBuzz("V");                                                                    }
/*    b    */ if (kC ==  66 && cC ==  98) { combineStates();                                                                                                   }
/*    n    */ if (kC ==  78 && cC == 110) {                                 aioNRouter(keyInfo);                                                               }
/*    m    */ if (kC ==  77 && cC == 109) { gridArray();                                                                                                       }
/*                                                                                                                                                            */
/**************************************************************************************************************************************************************/
/*                                                                                                                                                            */
}
if (shift==true||hauptMode==1) {
/*    Q    */ if (kC ==  81 && cC ==  81) { unwrapParts();                                                                                                     }
/*    W    */ if (kC ==  87 && cC ==  87) { flipWindowEdge(); modeRouter(e,0);                                                                                 }
/*    E    */ if (kC ==  69 && cC ==  69) {                                                                              flipEdge(); modeRouter(e,5);          }
/*    R    */ if (kC ==  82 && cC ==  82) { removeCoin();                                                                                                      }
/*    T    */ if (kC ==  84 && cC ==  84) { modeRouter(e,8); if (lastKey=="t") { swapColours(); }                                                              }
/*    Y    */ if (kC ==  89 && cC ==  89) { isolateSingle();                                                                                                   }
/*    U    */ if (kC ==  85 && cC ==  85) { restoreSingle();                                                                                                   }
/*    I    */ if (kC ==  73 && cC ==  73) {                          aioNRouter(keyInfo);                                                                      }
/*    O    */ if (kC ==  79 && cC ==  79) {                          aioNRouter(keyInfo);                                                                      }
/*    P    */ if (kC ==  80 && cC ==  80) {                          pasteSingle(keyInfo);                                                                     }
/*    A    */ if (kC ==  65 && cC ==  65) {                          aioNRouter(keyInfo);                                                                      }
/*    S    */ if (kC ==  83 && cC ==  83) {                                    saveProject();                                                                  }
/*    D    */ if (kC ==  68 && cC ==  68) {                                                                                     modeRouter(e,6);               }
/*    F    */ if (kC ==  70 && cC ==  70) { charQ1=0;charQ2=0;charM=0;charF=1;                                                                                 }
/*    G    */ if (kC ==  71 && cC ==  71) { curFocus=0; modeRouter(e,1);                                                                                       }
/*    H    */ if (kC ==  72 && cC ==  72) { hjklRouter(keyInfo);                                                                                               }
/*    J    */ if (kC ==  74 && cC ==  74) { hjklRouter(keyInfo);                                                                                               }
/*    K    */ if (kC ==  75 && cC ==  75) { hjklRouter(keyInfo);                                                                                               }
/*    L    */ if (kC ==  76 && cC ==  76) { hjklRouter(keyInfo);                                                                                               }
/*    Z    */ if (kC ==  90 && cC ==  90) { manageGlobalZ(0); modeRouter(e,9); zBuzz("z");                                                                     }
/*    X    */ if (kC ==  88 && cC ==  88) {                          deleteCoin(keyInfo);                                                                      }
/*    C    */ if (kC ==  67 && cC ==  67) { cursorToCoin(keyInfo); Cur.scrollIntoView({behavior:'smooth', block: 'center', inline: 'center'});                 }
/*    V    */ if (kC ==  86 && cC ==  86) { lastFlow = "global"; reflowGlobal(rev,0); zBuzz("v");                                                              }
/*    B    */ if (kC ==  66 && cC ==  66) { severState();                                                                                                      }
/*    N    */ if (kC ==  78 && cC ==  78) { tabSelector(1); folder1Selector(1); document.getElementById("partNom").focus();                                    }
/*    M    */ if (kC ==  77 && cC ==  77) { charQ1=0;charM=1;charF=0;                                                                                          }
/*                                                                                                                                                            */
/**************************************************************************************************************************************************************/
}







return (1);
}
