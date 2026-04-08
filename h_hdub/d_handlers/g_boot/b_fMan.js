/* fMan is essentially an intermediate router that will allow us to intercept keypress sequences that will be relevant to the part-focus system. */

function fMan(keyInfo) {



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







const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (charM==0&&charQ1==0&&yank==0&&charF==0) {
/**************************************************************************************************************************************************************/
/*                                                                                                                                                            */
/*    '    */ if (kC == 222 && cC ==  39) { charQ1=1;charM=0;charF=0;                                                                                          }
/*                                                                                                                                                            */
/**************************************************************************************************************************************************************/
/*                                                                                                                                                            */
/*    Q    */ if (kC ==  81 && cC ==  81) { wrapDocument();                                                                                                    }
/*    W    */ if (kC ==  87 && cC ==  87) { copyOpenerContents(keyInfo);                                                                                       }
/*    E    */ if (kC ==  69 && cC ==  69) { enterPageEchelon();                                                                                                }
/*    R    */ if (kC ==  82 && cC ==  82) { removeGroup();                                                                                                     }
/*    T    */ if (kC ==  84 && cC ==  84) { modeRouter(e,8); if (lastKey=="T") { assignAllColours(); }                                                         }
/*    Y    */ if (kC ==  89 && cC ==  89) { isolateGroup();                                                                                                    }
/*    U    */ if (kC ==  85 && cC ==  85) { duplicateU();                                                                                                      }
/*    I    */ if (kC ==  73 && cC ==  73) { aioNRouter(keyInfo);                                                                                               } 
/*    O    */ if (kC ==  79 && cC ==  79) { aioNRouter(keyInfo);                                                                                               }
/*    P    */ if (kC ==  80 && cC ==  80) { duplicateP();                                                                                                      }
/*    A    */ if (kC ==  65 && cC ==  65) { aioNRouter(keyInfo);                                                                                               }
/*    S    */ if (kC ==  83 && cC ==  83) { deMinimis(false, lastFactor);                                                                                      }
/*    D    */ if (kC ==  68 && cC ==  68) { insertNewDuplicate(keyInfo);                                                                                       }
/*    F    */ if (kC ==  70 && cC ==  70) { styleKey = "f"; gridToFontSize(keyInfo); lastKey = "f";                                                            }
/*    G    */ if (kC ==  71 && cC ==  71) { curFocus=0; modeRouter(e,1);                                                                                       }
/*    H    */ if (kC ==  72 && cC ==  72) { hjklRouter(keyInfo);                                                                                               }
/*    J    */ if (kC ==  74 && cC ==  74) { hjklRouter(keyInfo);                                                                                               }
/*    K    */ if (kC ==  75 && cC ==  75) { hjklRouter(keyInfo);                                                                                               }
/*    L    */ if (kC ==  76 && cC ==  76) { hjklRouter(keyInfo);                                                                                               }
/*    Z    */ if (kC ==  90 && cC ==  90) { manageTripartiteZ(0); modeRouter(e,9); zBuzz("Z");                                                                 }
/*    X    */ if (kC ==  88 && cC ==  88) { groupToPhantomLair();                                                                                              }
/*    C    */ if (kC ==  67 && cC ==  67) { coinToCursor(keyInfo); Cur.scrollIntoView({behavior:'smooth', block: 'center', inline: 'center'});                 }
/*    V    */ if (kC ==  86 && cC ==  86) { lastFlow="colour"; reflowPerTrip(); zBuzz("V");                                                                    }
/*    B    */ if (kC ==  66 && cC ==  66) { combineStates();                                                                                                   }
/*    N    */ if (kC ==  78 && cC ==  78) { aioNRouter(keyInfo);                                                                                               }
/*    M    */ if (kC ==  77 && cC ==  77) { gridArray();                                                                                                       }
/*                                                                                                                                                            */
/**************************************************************************************************************************************************************/
/*                                                                                                                                                            */
/*    q    */ if (kC ==  81 && cC == 113) { unwrapParts();                                                                                                     }
/*    w    */ if (kC ==  87 && cC == 119) { flipWindowEdge(); modeRouter(e,0);                                                                                 }
/*    e    */ if (kC ==  69 && cC == 101) { flipEdge(); modeRouter(e,5);                                                                                       }
/*    r    */ if (kC ==  82 && cC == 114) { removeCoin();                                                                                                      }
/*    t    */ if (kC ==  84 && cC == 116) { modeRouter(e,8); if (lastKey=="t") { swapColours(); }                                                              }
/*    y    */ if (kC ==  89 && cC == 121) { isolateSingle();                                                                                                   }
/*    u    */ if (kC ==  85 && cC == 117) { restoreSingle();                                                                                                   }
/*    i    */ if (kC ==  73 && cC == 105) { aioNRouter(keyInfo);                                                                                               }
/*    o    */ if (kC ==  79 && cC == 111) { aioNRouter(keyInfo);                                                                                               }
/*    p    */ if (kC ==  80 && cC == 112) { pasteSingle(keyInfo);                                                                                              }
/*    a    */ if (kC ==  65 && cC ==  97) { aioNRouter(keyInfo);                                                                                               }
/*    s    */ if (kC ==  83 && cC == 115) { saveProject();                                                                                                     }
/*    d    */ if (kC ==  68 && cC == 100) { modeRouter(e,6);                                                                                                   }
/*    f    */ if (kC ==  70 && cC == 102) { charQ1=0;charQ2=0;charM=0;charF=1;                                                                                 }
/*    g    */ if (kC ==  71 && cC == 103) { curFocus=0; modeRouter(e,1);                                                                                       }
/*    h    */ if (kC ==  72 && cC == 104) { hjklRouter(keyInfo);                                                                                               }
/*    j    */ if (kC ==  74 && cC == 106) { hjklRouter(keyInfo);                                                                                               }
/*    k    */ if (kC ==  75 && cC == 107) { hjklRouter(keyInfo);                                                                                               }
/*    l    */ if (kC ==  76 && cC == 108) { hjklRouter(keyInfo);                                                                                               }
/*    z    */ if (kC ==  90 && cC == 122) { manageGlobalZ(0); modeRouter(e,9); zBuzz("z");                                                                     }
/*    x    */ if (kC ==  88 && cC == 120) { deleteCoin(keyInfo);                                                                                               }
/*    c    */ if (kC ==  67 && cC ==  99) { cursorToCoin(keyInfo); Cur.scrollIntoView({behavior:'smooth', block: 'center', inline: 'center'});                 }
/*    v    */ if (kC ==  86 && cC == 118) { lastFlow = "global"; reflowGlobal(rev,0); zBuzz("v");                                                              }
/*    b    */ if (kC ==  66 && cC ==  98) { severState();                                                                                                      }
/*    n    */ if (kC ==  78 && cC == 110) { tabSelector(1); folder1Selector(1); document.getElementById("partNom").focus();                                    }
/*    m    */ if (kC ==  77 && cC == 109) { charQ1=0;charM=1;charF=0;                                                                                          }
/*                                                                                                                                                            */
/**************************************************************************************************************************************************************/

} else if (charM==1) {

[
"q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"
].forEach((letter) => {
if (hold[letter].value == coinFocus) {
hold[letter].value = null;
}
});

       if (kC ==  81 && cC == 113){spreadReference(coinFocus,hold.q);(`++ stored in "${hold.q.name}"...`);
} else if (kC ==  87 && cC == 119){spreadReference(coinFocus,hold.w);(`++ stored in "${hold.w.name}"...`);
} else if (kC ==  69 && cC == 101){spreadReference(coinFocus,hold.e);(`++ stored in "${hold.e.name}"...`);
} else if (kC ==  82 && cC == 114){spreadReference(coinFocus,hold.r);(`++ stored in "${hold.r.name}"...`);
} else if (kC ==  84 && cC == 116){spreadReference(coinFocus,hold.t);(`++ stored in "${hold.t.name}"...`);
} else if (kC ==  89 && cC == 121){spreadReference(coinFocus,hold.y);(`++ stored in "${hold.y.name}"...`);
} else if (kC ==  85 && cC == 117){spreadReference(coinFocus,hold.u);(`++ stored in "${hold.u.name}"...`);
} else if (kC ==  73 && cC == 105){spreadReference(coinFocus,hold.i);(`++ stored in "${hold.i.name}"...`);
} else if (kC ==  79 && cC == 111){spreadReference(coinFocus,hold.o);(`++ stored in "${hold.o.name}"...`);
} else if (kC ==  80 && cC == 112){spreadReference(coinFocus,hold.p);(`++ stored in "${hold.p.name}"...`);
} else if (kC ==  65 && cC ==  97){spreadReference(coinFocus,hold.a);(`++ stored in "${hold.a.name}"...`);
} else if (kC ==  83 && cC == 115){spreadReference(coinFocus,hold.s);(`++ stored in "${hold.s.name}"...`);
} else if (kC ==  68 && cC == 100){spreadReference(coinFocus,hold.d);(`++ stored in "${hold.d.name}"...`);
} else if (kC ==  70 && cC == 102){spreadReference(coinFocus,hold.f);(`++ stored in "${hold.f.name}"...`);
} else if (kC ==  71 && cC == 103){spreadReference(coinFocus,hold.g);(`++ stored in "${hold.g.name}"...`);
} else if (kC ==  72 && cC == 104){spreadReference(coinFocus,hold.h);(`++ stored in "${hold.h.name}"...`);
} else if (kC ==  74 && cC == 106){spreadReference(coinFocus,hold.j);(`++ stored in "${hold.j.name}"...`);
} else if (kC ==  75 && cC == 107){spreadReference(coinFocus,hold.k);(`++ stored in "${hold.k.name}"...`);
} else if (kC ==  76 && cC == 108){spreadReference(coinFocus,hold.l);(`++ stored in "${hold.l.name}"...`);
} else if (kC ==  90 && cC == 122){spreadReference(coinFocus,hold.z);(`++ stored in "${hold.z.name}"...`);
} else if (kC ==  88 && cC == 120){spreadReference(coinFocus,hold.x);(`++ stored in "${hold.x.name}"...`);
} else if (kC ==  67 && cC ==  99){spreadReference(coinFocus,hold.c);(`++ stored in "${hold.c.name}"...`);
} else if (kC ==  86 && cC == 118){spreadReference(coinFocus,hold.v);(`++ stored in "${hold.v.name}"...`);
} else if (kC ==  66 && cC ==  98){spreadReference(coinFocus,hold.b);(`++ stored in "${hold.b.name}"...`);
} else if (kC ==  78 && cC == 110){spreadReference(coinFocus,hold.n);(`++ stored in "${hold.n.name}"...`);
} else if (kC ==  77 && cC == 109){spreadReference(coinFocus,hold.m);(`++ stored in "${hold.m.name}"...`);
}


if (coinFocus != null) {
       if (kC ==  81 && cC ==  81){ui.hdubQ.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubQ.value', ui.hdubQ.value);
} else if (kC ==  87 && cC ==  87){ui.hdubW.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubW.value', ui.hdubW.value);
} else if (kC ==  69 && cC ==  69){ui.hdubE.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubE.value', ui.hdubE.value);
} else if (kC ==  82 && cC ==  82){ui.hdubR.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubR.value', ui.hdubR.value);
} else if (kC ==  84 && cC ==  84){ui.hdubT.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubT.value', ui.hdubT.value);
} else if (kC ==  89 && cC ==  89){ui.hdubY.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubY.value', ui.hdubY.value);
} else if (kC ==  85 && cC ==  85){ui.hdubU.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubU.value', ui.hdubU.value);
} else if (kC ==  73 && cC ==  73){ui.hdubI.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubI.value', ui.hdubI.value);
} else if (kC ==  79 && cC ==  79){ui.hdubO.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubO.value', ui.hdubO.value);
} else if (kC ==  80 && cC ==  80){ui.hdubP.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubP.value', ui.hdubP.value);
} else if (kC ==  65 && cC ==  65){ui.hdubA.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubA.value', ui.hdubA.value);
} else if (kC ==  83 && cC ==  83){ui.hdubS.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubS.value', ui.hdubS.value);
} else if (kC ==  68 && cC ==  68){ui.hdubD.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubD.value', ui.hdubD.value);
} else if (kC ==  70 && cC ==  70){ui.hdubF.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubF.value', ui.hdubF.value);
} else if (kC ==  71 && cC ==  71){ui.hdubG.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubG.value', ui.hdubG.value);
} else if (kC ==  72 && cC ==  72){ui.hdubH.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubH.value', ui.hdubH.value);
} else if (kC ==  74 && cC ==  74){ui.hdubJ.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubJ.value', ui.hdubJ.value);
} else if (kC ==  75 && cC ==  75){ui.hdubK.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubK.value', ui.hdubK.value);
} else if (kC ==  76 && cC ==  76){ui.hdubL.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubL.value', ui.hdubL.value);
} else if (kC ==  90 && cC ==  90){ui.hdubZ.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubZ.value', ui.hdubZ.value);
} else if (kC ==  67 && cC ==  67){ui.hdubC.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubC.value', ui.hdubC.value);
} else if (kC ==  86 && cC ==  86){ui.hdubV.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubV.value', ui.hdubV.value);
} else if (kC ==  66 && cC ==  66){ui.hdubB.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubB.value', ui.hdubB.value);
} else if (kC ==  78 && cC ==  78){ui.hdubN.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubN.value', ui.hdubN.value);
} else if (kC ==  77 && cC ==  77){ui.hdubM.value = coinFocus.lastElementChild.firstElementChild.innerHTML; localStorage.setItem('hdubM.value', ui.hdubM.value);
}
}


//} else if (kC ==  88 && cC ==  88){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubX.value;


charM=0;charQ1=0;charQ2=0;charF=0;

} else if (charF==1) {
pasteAfter=1;
       if (kC ==  81 && cC == 113){pasteOut(keyInfo,hold.q.value);
} else if (kC ==  87 && cC == 119){pasteOut(keyInfo,hold.w.value);
} else if (kC ==  69 && cC == 101){pasteOut(keyInfo,hold.e.value);
} else if (kC ==  82 && cC == 114){pasteOut(keyInfo,hold.r.value);
} else if (kC ==  84 && cC == 116){pasteOut(keyInfo,hold.t.value);
} else if (kC ==  89 && cC == 121){pasteOut(keyInfo,hold.y.value);
} else if (kC ==  85 && cC == 117){pasteOut(keyInfo,hold.u.value);
} else if (kC ==  73 && cC == 105){pasteOut(keyInfo,hold.i.value);
} else if (kC ==  79 && cC == 111){pasteOut(keyInfo,hold.o.value);
} else if (kC ==  80 && cC == 112){pasteOut(keyInfo,hold.p.value);
} else if (kC ==  65 && cC ==  97){pasteOut(keyInfo,hold.a.value);
} else if (kC ==  83 && cC == 115){pasteOut(keyInfo,hold.s.value);
} else if (kC ==  68 && cC == 100){pasteOut(keyInfo,hold.d.value);
} else if (kC ==  70 && cC == 102){pasteOut(keyInfo,hold.f.value);
} else if (kC ==  71 && cC == 103){pasteOut(keyInfo,hold.g.value);
} else if (kC ==  72 && cC == 104){pasteOut(keyInfo,hold.h.value);
} else if (kC ==  74 && cC == 106){pasteOut(keyInfo,hold.j.value);
} else if (kC ==  75 && cC == 107){pasteOut(keyInfo,hold.k.value);
} else if (kC ==  76 && cC == 108){pasteOut(keyInfo,hold.l.value);
} else if (kC ==  90 && cC == 122){pasteOut(keyInfo,hold.z.value);
} else if (kC ==  88 && cC == 120){pasteOut(keyInfo,hold.x.value);
} else if (kC ==  67 && cC ==  99){pasteOut(keyInfo,hold.c.value);
} else if (kC ==  86 && cC == 118){pasteOut(keyInfo,hold.v.value);
} else if (kC ==  66 && cC ==  98){pasteOut(keyInfo,hold.b.value);
} else if (kC ==  78 && cC == 110){pasteOut(keyInfo,hold.n.value);
} else if (kC ==  77 && cC == 109){pasteOut(keyInfo,hold.m.value);
}

if (coinFocus != null) {
       if (kC ==  81 && cC ==  81){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubQ.value;
} else if (kC ==  87 && cC ==  87){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubW.value;
} else if (kC ==  69 && cC ==  69){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubE.value;
} else if (kC ==  82 && cC ==  82){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubR.value;
} else if (kC ==  84 && cC ==  84){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubT.value;
} else if (kC ==  89 && cC ==  89){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubY.value;
} else if (kC ==  85 && cC ==  85){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubU.value;
} else if (kC ==  73 && cC ==  73){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubI.value;
} else if (kC ==  79 && cC ==  79){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubO.value;
} else if (kC ==  80 && cC ==  80){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubP.value;
} else if (kC ==  65 && cC ==  65){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubA.value;
} else if (kC ==  83 && cC ==  83){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubS.value;
} else if (kC ==  68 && cC ==  68){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubD.value;
} else if (kC ==  70 && cC ==  70){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubF.value;
} else if (kC ==  71 && cC ==  71){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubG.value;
} else if (kC ==  72 && cC ==  72){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubH.value;
} else if (kC ==  74 && cC ==  74){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubJ.value;
} else if (kC ==  75 && cC ==  75){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubK.value;
} else if (kC ==  76 && cC ==  76){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubL.value;
} else if (kC ==  90 && cC ==  90){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubZ.value;
} else if (kC ==  67 && cC ==  67){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubC.value;
} else if (kC ==  86 && cC ==  86){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubV.value;
} else if (kC ==  66 && cC ==  66){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubB.value;
} else if (kC ==  78 && cC ==  78){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubN.value;
} else if (kC ==  77 && cC ==  77){coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubM.value;
} else if (kC ==  88 && cC ==  88){coinFocus.lastElementChild.firstElementChild.innerHTML = "";
}
}

charM=0;charQ1=0;charQ2=0;charF=0;
pasteAfter=0;

} else if (charQ1==1) {
       if (kC ==  81 && cC == 113){focusSet(hold.q.value);
} else if (kC ==  87 && cC == 119){focusSet(hold.w.value);
} else if (kC ==  69 && cC == 101){focusSet(hold.e.value);
} else if (kC ==  82 && cC == 114){focusSet(hold.r.value);
} else if (kC ==  84 && cC == 116){focusSet(hold.t.value);
} else if (kC ==  89 && cC == 121){focusSet(hold.y.value);
} else if (kC ==  85 && cC == 117){focusSet(hold.u.value);
} else if (kC ==  73 && cC == 105){focusSet(hold.i.value);
} else if (kC ==  79 && cC == 111){focusSet(hold.o.value);
} else if (kC ==  80 && cC == 112){focusSet(hold.p.value);
} else if (kC ==  65 && cC ==  97){focusSet(hold.a.value);
} else if (kC ==  83 && cC == 115){focusSet(hold.s.value);
} else if (kC ==  68 && cC == 100){focusSet(hold.d.value);
} else if (kC ==  70 && cC == 102){focusSet(hold.f.value);
} else if (kC ==  71 && cC == 103){focusSet(hold.g.value);
} else if (kC ==  72 && cC == 104){focusSet(hold.h.value);
} else if (kC ==  74 && cC == 106){focusSet(hold.j.value);
} else if (kC ==  75 && cC == 107){focusSet(hold.k.value);
} else if (kC ==  76 && cC == 108){focusSet(hold.l.value);
} else if (kC ==  90 && cC == 122){focusSet(hold.z.value);
} else if (kC ==  88 && cC == 120){focusSet(hold.x.value);
} else if (kC ==  67 && cC ==  99){focusSet(hold.c.value);
} else if (kC ==  86 && cC == 118){focusSet(hold.v.value);
} else if (kC ==  66 && cC ==  98){focusSet(hold.b.value);
} else if (kC ==  78 && cC == 110){focusSet(hold.n.value);
} else if (kC ==  77 && cC == 109){focusSet(hold.m.value);
}
if (kC == 222 && cC ==  39) {
if (curFocus==1&&coinFocus!=null) {
curFocus=0;


coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
       if (coinFocus.dataset.coinTrip==Ts0) { coinFocus.firstElementChild.style.color = Fs0; coinFocus.style.outlineColor = Cs0; coinFocus.firstElementChild.style.backgroundColor = Bs0; coinFocus.firstElementChild.style.opacity = Os0;
} else if (coinFocus.dataset.coinTrip==Ts1) { coinFocus.firstElementChild.style.color = Fs1; coinFocus.style.outlineColor = Cs1; coinFocus.firstElementChild.style.backgroundColor = Bs1; coinFocus.firstElementChild.style.opacity = Os1;
} else if (coinFocus.dataset.coinTrip==Ts2) { coinFocus.firstElementChild.style.color = Fs2; coinFocus.style.outlineColor = Cs2; coinFocus.firstElementChild.style.backgroundColor = Bs2; coinFocus.firstElementChild.style.opacity = Os2;
}

readCoins();
recoverColouration();
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;




} else {
focusFlip();
}
}

charM=0;charQ1=0;charQ2=0;charF=0;
}

}
