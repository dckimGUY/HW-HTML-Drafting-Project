function hjklRouter(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

       if (mode==0) {
if (!window.opener) { modeRouter(e,1); return; }
/*    H    */ if (kC ==  72 && cC ==  72) { windowEdge(keyInfo); }/*    h    */ if (kC ==  72 && cC == 104) { windowEdge(keyInfo); }
/*    J    */ if (kC ==  74 && cC ==  74) { windowEdge(keyInfo); }/*    j    */ if (kC ==  74 && cC == 106) { windowEdge(keyInfo); }
/*    K    */ if (kC ==  75 && cC ==  75) { windowEdge(keyInfo); }/*    k    */ if (kC ==  75 && cC == 107) { windowEdge(keyInfo); }
/*    L    */ if (kC ==  76 && cC ==  76) { windowEdge(keyInfo); }/*    l    */ if (kC ==  76 && cC == 108) { windowEdge(keyInfo); }
} else if (mode==1) {
/*    H    */ if (kC ==  72 && cC ==  72) { HJKLnoteCoin("&larr; H",durationC);    moveLeft(keyInfo);   }/*    h    */ if (kC ==  72 && cC == 104) { HJKLnoteCoin("&larr;",durationC,true); moveLeft(keyInfo);   }
/*    J    */ if (kC ==  74 && cC ==  74) { HJKLnoteCoin("J<br>&darr;",durationC); moveDown(keyInfo);   }/*    j    */ if (kC ==  74 && cC == 106) { HJKLnoteCoin("&darr;",durationC,true); moveDown(keyInfo);   }
/*    K    */ if (kC ==  75 && cC ==  75) { HJKLnoteCoin("&uarr;<br>K",durationC); moveUp(keyInfo);     }/*    k    */ if (kC ==  75 && cC == 107) { HJKLnoteCoin("&uarr;",durationC,true); moveUp(keyInfo);     }
/*    L    */ if (kC ==  76 && cC ==  76) { HJKLnoteCoin("L &rarr;",durationC);    moveRight(keyInfo);  }/*    l    */ if (kC ==  76 && cC == 108) { HJKLnoteCoin("&rarr;",durationC,true); moveRight(keyInfo);  }
} else if (mode==2) {
} else if (mode==3) {
} else if (mode==5) {
/*    H    */ if (kC ==  72 && cC ==  72) { HJKLnoteCoin("&larr; H",durationC);    extendEdge(keyInfo); }/*    h    */ if (kC ==  72 && cC == 104) { HJKLnoteCoin("&rarr;&larr;",durationC);     extendEdge(keyInfo); }
/*    J    */ if (kC ==  74 && cC ==  74) { HJKLnoteCoin("J<br>&darr;",durationC); extendEdge(keyInfo); }/*    j    */ if (kC ==  74 && cC == 106) { HJKLnoteCoin("&darr;<br>&uarr;",durationC); extendEdge(keyInfo); }
/*    K    */ if (kC ==  75 && cC ==  75) { HJKLnoteCoin("&uarr;<br>K",durationC); extendEdge(keyInfo); }/*    k    */ if (kC ==  75 && cC == 107) { HJKLnoteCoin("&uarr;<br>&darr;",durationC); extendEdge(keyInfo); }
/*    L    */ if (kC ==  76 && cC ==  76) { HJKLnoteCoin("L &rarr;",durationC);    extendEdge(keyInfo); }/*    l    */ if (kC ==  76 && cC == 108) { HJKLnoteCoin("&larr;&rarr;",durationC);     extendEdge(keyInfo); }
} else if (mode==6) {
/*    H    */ if (kC ==  72 && cC ==  72) { HJKLnoteCoin("&larr; H",durationC);    moveLeft(keyInfo);   }/*    h    */ if (kC ==  72 && cC == 104) { HJKLnoteCoin("&larr;",durationC,true); moveLeft(keyInfo);   }
/*    J    */ if (kC ==  74 && cC ==  74) { HJKLnoteCoin("J<br>&darr;",durationC); moveDown(keyInfo);   }/*    j    */ if (kC ==  74 && cC == 106) { HJKLnoteCoin("&darr;",durationC,true); moveDown(keyInfo);   }
/*    K    */ if (kC ==  75 && cC ==  75) { HJKLnoteCoin("&uarr;<br>K",durationC); moveUp(keyInfo);     }/*    k    */ if (kC ==  75 && cC == 107) { HJKLnoteCoin("&uarr;",durationC,true); moveUp(keyInfo);     }
/*    L    */ if (kC ==  76 && cC ==  76) { HJKLnoteCoin("L &rarr;",durationC);    moveRight(keyInfo);  }/*    l    */ if (kC ==  76 && cC == 108) { HJKLnoteCoin("&rarr;",durationC,true); moveRight(keyInfo);  }
} else if (mode==7) {
} else if (mode==8) {
/*    H    */ if (kC ==  72 && cC ==  72) {if(rev==0){focusNext()}else{focusPrevious()}}
/*    J    */ if (kC ==  74 && cC ==  74) { setCoinTrip(e,1);                          }
/*    K    */ if (kC ==  75 && cC ==  75) { setCoinTrip(e,1);                          }
/*    L    */ if (kC ==  76 && cC ==  76) {if(rev==0){focusPrevious()}else{focusNext()}}

/*    h    */ if (kC ==  72 && cC == 104) {if(rev==0){focusNext()}else{focusPrevious()};setCoinTrip(e,0);}
/*    j    */ if (kC ==  74 && cC == 106) { setCoinTrip(e,1);                                            }
/*    k    */ if (kC ==  75 && cC == 107) { setCoinTrip(e,1);                                            }
/*    l    */ if (kC ==  76 && cC == 108) {if(rev==0){focusPrevious()}else{focusNext()};setCoinTrip(e,0);}
} else if (mode==9) {
/*    H    */ if (kC ==  72 && cC ==  72) { HJKLnoteCoin("H<br><span style='font-size: 0.5em;'>top</span>",durationC);       ceilingGlobalZ();         }/*    h    */ if (kC ==  72 && cC == 104) { HJKLnoteCoin("H<br><span style='font-size: 0.5em;'>top (colour)</span>",durationC);       ceilingTripartiteZ();    }
/*    J    */ if (kC ==  74 && cC ==  74) { HJKLnoteCoin("J<br><span style='font-size: 0.5em;'>lower</span>",durationC);     lowerGlobalZ();           }/*    j    */ if (kC ==  74 && cC == 106) { HJKLnoteCoin("J<br><span style='font-size: 0.5em;'>lower (colour)</span>",durationC);     lowerTripartiteZ();      }
/*    K    */ if (kC ==  75 && cC ==  75) { HJKLnoteCoin("K<br><span style='font-size: 0.5em;'>raise</span>",durationC);     raiseGlobalZ();           }/*    k    */ if (kC ==  75 && cC == 107) { HJKLnoteCoin("K<br><span style='font-size: 0.5em;'>raise (colour)</span>",durationC);     raiseTripartiteZ();      }
/*    L    */ if (kC ==  76 && cC ==  76) { HJKLnoteCoin("L<br><span style='font-size: 0.5em;'>bottom</span>",durationC);    floorGlobalZ();           }/*    l    */ if (kC ==  76 && cC == 108) { HJKLnoteCoin("L<br><span style='font-size: 0.5em;'>bottom (colour)</span>",durationC);    floorTripartiteZ();      }
}

}
