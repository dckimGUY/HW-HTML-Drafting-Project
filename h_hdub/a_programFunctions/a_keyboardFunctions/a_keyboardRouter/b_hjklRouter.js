function hjklRouter(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

function zBuzz(text) {
if (coinFocus != null) {
const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(1,text,fontWidth,textColour,120,120,100,"center",coinCentre[0],coinCentre[1]);
}
}

       if (mode==0) {
if (!window.opener) { modeRouter(e,1); return; }
/*    h    */ if (kC ==  72 && cC == 104) { windowEdge(keyInfo); }/*    H    */ if (kC ==  72 && cC ==  72) { windowEdge(keyInfo); }
/*    j    */ if (kC ==  74 && cC == 106) { windowEdge(keyInfo); }/*    J    */ if (kC ==  74 && cC ==  74) { windowEdge(keyInfo); }
/*    k    */ if (kC ==  75 && cC == 107) { windowEdge(keyInfo); }/*    K    */ if (kC ==  75 && cC ==  75) { windowEdge(keyInfo); }
/*    l    */ if (kC ==  76 && cC == 108) { windowEdge(keyInfo); }/*    L    */ if (kC ==  76 && cC ==  76) { windowEdge(keyInfo); }
} else if (mode==1) {
/*    h    */ if (kC ==  72 && cC == 104) { moveLeft(keyInfo);   }/*    H    */ if (kC ==  72 && cC ==  72) { moveLeft(keyInfo);   }
/*    j    */ if (kC ==  74 && cC == 106) { moveDown(keyInfo);   }/*    J    */ if (kC ==  74 && cC ==  74) { moveDown(keyInfo);   }
/*    k    */ if (kC ==  75 && cC == 107) { moveUp(keyInfo);     }/*    K    */ if (kC ==  75 && cC ==  75) { moveUp(keyInfo);     }
/*    l    */ if (kC ==  76 && cC == 108) { moveRight(keyInfo);  }/*    L    */ if (kC ==  76 && cC ==  76) { moveRight(keyInfo);  }
} else if (mode==2) {
} else if (mode==3) {
} else if (mode==5) {
/*    h    */ if (kC ==  72 && cC == 104) { extendEdge(keyInfo); }/*    H    */ if (kC ==  72 && cC ==  72) { extendEdge(keyInfo); }
/*    j    */ if (kC ==  74 && cC == 106) { extendEdge(keyInfo); }/*    J    */ if (kC ==  74 && cC ==  74) { extendEdge(keyInfo); }
/*    k    */ if (kC ==  75 && cC == 107) { extendEdge(keyInfo); }/*    K    */ if (kC ==  75 && cC ==  75) { extendEdge(keyInfo); }
/*    l    */ if (kC ==  76 && cC == 108) { extendEdge(keyInfo); }/*    L    */ if (kC ==  76 && cC ==  76) { extendEdge(keyInfo); }
} else if (mode==6) {
/*    h    */ if (kC ==  72 && cC == 104) { moveLeft(keyInfo);   }/*    H    */ if (kC ==  72 && cC ==  72) { moveLeft(keyInfo);   }
/*    j    */ if (kC ==  74 && cC == 106) { moveDown(keyInfo);   }/*    J    */ if (kC ==  74 && cC ==  74) { moveDown(keyInfo);   }
/*    k    */ if (kC ==  75 && cC == 107) { moveUp(keyInfo);     }/*    K    */ if (kC ==  75 && cC ==  75) { moveUp(keyInfo);     }
/*    l    */ if (kC ==  76 && cC == 108) { moveRight(keyInfo);  }/*    L    */ if (kC ==  76 && cC ==  76) { moveRight(keyInfo);  }
} else if (mode==7) {
} else if (mode==8) {
/*    H    */ if (kC ==  72 && cC == 104) {if(rev==1){focusNext()}else{focusPrevious()}}
/*    J    */ if (kC ==  74 && cC == 106) { setCoinTrip(e,1);                          }
/*    K    */ if (kC ==  75 && cC == 107) { setCoinTrip(e,1);                          }
/*    L    */ if (kC ==  76 && cC == 108) {if(rev==1){focusPrevious()}else{focusNext()}}

/*    H    */ if (kC ==  72 && cC ==  72) {if(rev==1){focusNext()}else{focusPrevious()}; if (lastFlow == "global") { setCoinTrip(e,0); } }
/*    J    */ if (kC ==  74 && cC ==  74) { setCoinTrip(e,1);                                            }
/*    K    */ if (kC ==  75 && cC ==  75) { setCoinTrip(e,1);                                            }
/*    L    */ if (kC ==  76 && cC ==  76) {if(rev==1){focusPrevious()}else{focusNext()}; if (lastFlow == "global") { setCoinTrip(e,0); } }
} else if (mode==9) {
/*    h    */ if (kC ==  72 && cC == 104) { ceilingGlobalZ(); zBuzz("h"); }/*    H    */ if (kC ==  72 && cC ==  72) { ceilingTripartiteZ(); zBuzz("H"); }
/*    j    */ if (kC ==  74 && cC == 106) { lowerGlobalZ();   zBuzz("j"); }/*    J    */ if (kC ==  74 && cC ==  74) { lowerTripartiteZ();   zBuzz("J"); }
/*    k    */ if (kC ==  75 && cC == 107) { raiseGlobalZ();   zBuzz("k"); }/*    K    */ if (kC ==  75 && cC ==  75) { raiseTripartiteZ();   zBuzz("K"); }
/*    l    */ if (kC ==  76 && cC == 108) { floorGlobalZ();   zBuzz("l"); }/*    L    */ if (kC ==  76 && cC ==  76) { floorTripartiteZ();   zBuzz("L"); }
}

}