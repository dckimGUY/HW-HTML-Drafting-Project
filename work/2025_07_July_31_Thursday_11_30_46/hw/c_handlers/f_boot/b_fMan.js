/* fMan is essentially an intermediate router that will allow us to intercept keypress sequences that will be relevant to the part-focus system. */

function fMan(keyInfo) {

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
/*    $    */ if (kC ==  52 && cC ==  36) { if(rev==1){focusFirst()}else{focusLast()}                                                                          }
/*    ^    */ if (kC ==  54 && cC ==  94) { if(rev==1){focusLast()}else{focusFirst()}                                                                          }
/*                                                                                                                                                            */
/**************************************************************************************************************************************************************/
/*                                                                                                                                                            */
/*    '    */ if (kC == 222 && cC ==  39) { charQ1=1;charM=0;charF=0;                                                                                          }
/*                                                                                                                                                            */
/**************************************************************************************************************************************************************/
/*                                                                                                                                                            */
/*    Q    */ if (kC ==  81 && cC ==  81) {                          quitSave();                                                                                                        }
/*    W    */ if (kC ==  87 && cC ==  87) { noteCoin("W<br><span style='font-size: 0.5em;'>window mode</span>",durationC); flipWindowEdge(); modeRouter(e,0);                           }
/*    E    */ if (kC ==  69 && cC ==  69) {                                                                              flipEdge(); modeRouter(e,5);                                   }
/*    R    */ if (kC ==  82 && cC ==  82) { noteCoin("R<br><span style='font-size: 0.5em;'>flip image</span>",durationC); innerRotationMin();                                           }
/*    T    */ if (kC ==  84 && cC ==  84) { noteCoin("T<br><span style='font-size: 0.5em;'>colour mode</span>",durationC); modeRouter(e,8); if (lastKey=="T") { swapColours(); }        }
/*    Y    */ if (kC ==  89 && cC ==  89) { wrapDocument(); noteCoin("Y<br><span style='font-size: 0.5em;'>wrap snug</span>",durationC);                                                }
/*    U    */ if (kC ==  85 && cC ==  85) { unwrapParts(); noteCoin("U<br><span style='font-size: 0.5em;'>unwrap</span>",durationC);                                                    }
/*    I    */ if (kC ==  73 && cC ==  73) {                          aioNRouter(keyInfo);                                                                                               }
/*    O    */ if (kC ==  79 && cC ==  79) {                          aioNRouter(keyInfo);                                                                                               }
/*    P    */ if (kC ==  80 && cC ==  80) {                          pasteSingle(keyInfo);                                                                                              }
/*    A    */ if (kC ==  65 && cC ==  65) {                          aioNRouter(keyInfo);                                                                                               }
/*    S    */ if (kC ==  83 && cC ==  83) {                          saveParticlePreparation(0,false);                                                                                  }
/*    D    */ if (kC ==  68 && cC ==  68) { noteCoin("D<br><span style='font-size: 0.5em;'>duplication mode</span>",durationC); modeRouter(e,6);                                        }
/*    F    */ if (kC ==  70 && cC ==  70) { noteCoin("F+<br><span style='font-size: 0.5em;'>paste out</span>",durationC); charQ1=0;charQ2=0;charM=0;charF=1;                            }
/*    G    */ if (kC ==  71 && cC ==  71) { noteCoin("G<br><span style='font-size: 0.5em;'>grab move</span>",durationC); curFocus=0; modeRouter(e,1);                                   }
/*    H    */ if (kC ==  72 && cC ==  72) { hjklRouter(keyInfo);                                                                                                                        }
/*    J    */ if (kC ==  74 && cC ==  74) { hjklRouter(keyInfo);                                                                                                                        }
/*    K    */ if (kC ==  75 && cC ==  75) { hjklRouter(keyInfo);                                                                                                                        }
/*    L    */ if (kC ==  76 && cC ==  76) { hjklRouter(keyInfo);                                                                                                                        }
/*    Z    */ if (kC ==  90 && cC ==  90) { noteCoin("Z<br><span style='font-size: 0.5em;'>z-index mode</span>",durationC); manageGlobalZ(0); modeRouter(e,9);                          }
/*    X    */ if (kC ==  88 && cC ==  88) {                          deleteCoin(keyInfo);                                                                                               }
/*    C    */ if (kC ==  67 && cC ==  67) { noteCoin("C<br><span style='font-size: 0.5em;'>cursor</span>",durationC); cursorToCoin(keyInfo);                                            }
/*    V    */ if (kC ==  86 && cC ==  86) { noteCoin("V<br><span style='font-size: 0.5em;'>flow document</span>",durationC); reflowGlobal(rev,0);                                       }
/*    B    */ if (kC ==  66 && cC ==  66) {                          writeInfoToFace();                                                                                                 }
/*    N    */ if (kC ==  78 && cC ==  78) {                          explicitEntryForTopAndLeft();                                                                                      }
/*    M    */ if (kC ==  77 && cC ==  77) { noteCoin("M+<br><span style='font-size: 0.5em;'>set mark</span>",durationC); charQ1=0;charM=1;charF=0;                                      }
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

       if (kC==81&&cC==81){spreadReference(coinFocus,hold.q);(`++ stored in "${hold.q.name}"...`);
} else if (kC==87&&cC==87){spreadReference(coinFocus,hold.w);(`++ stored in "${hold.w.name}"...`);
} else if (kC==69&&cC==69){spreadReference(coinFocus,hold.e);(`++ stored in "${hold.e.name}"...`);
} else if (kC==82&&cC==82){spreadReference(coinFocus,hold.r);(`++ stored in "${hold.r.name}"...`);
} else if (kC==84&&cC==84){spreadReference(coinFocus,hold.t);(`++ stored in "${hold.t.name}"...`);
} else if (kC==89&&cC==89){spreadReference(coinFocus,hold.y);(`++ stored in "${hold.y.name}"...`);
} else if (kC==85&&cC==85){spreadReference(coinFocus,hold.u);(`++ stored in "${hold.u.name}"...`);
} else if (kC==73&&cC==73){spreadReference(coinFocus,hold.i);(`++ stored in "${hold.i.name}"...`);
} else if (kC==79&&cC==79){spreadReference(coinFocus,hold.o);(`++ stored in "${hold.o.name}"...`);
} else if (kC==80&&cC==80){spreadReference(coinFocus,hold.p);(`++ stored in "${hold.p.name}"...`);
} else if (kC==65&&cC==65){spreadReference(coinFocus,hold.a);(`++ stored in "${hold.a.name}"...`);
} else if (kC==83&&cC==83){spreadReference(coinFocus,hold.s);(`++ stored in "${hold.s.name}"...`);
} else if (kC==68&&cC==68){spreadReference(coinFocus,hold.d);(`++ stored in "${hold.d.name}"...`);
} else if (kC==70&&cC==70){spreadReference(coinFocus,hold.f);(`++ stored in "${hold.f.name}"...`);
} else if (kC==71&&cC==71){spreadReference(coinFocus,hold.g);(`++ stored in "${hold.g.name}"...`);
} else if (kC==72&&cC==72){spreadReference(coinFocus,hold.h);(`++ stored in "${hold.h.name}"...`);
} else if (kC==74&&cC==74){spreadReference(coinFocus,hold.j);(`++ stored in "${hold.j.name}"...`);
} else if (kC==75&&cC==75){spreadReference(coinFocus,hold.k);(`++ stored in "${hold.k.name}"...`);
} else if (kC==76&&cC==76){spreadReference(coinFocus,hold.l);(`++ stored in "${hold.l.name}"...`);
} else if (kC==90&&cC==90){spreadReference(coinFocus,hold.z);(`++ stored in "${hold.z.name}"...`);
} else if (kC==88&&cC==88){spreadReference(coinFocus,hold.x);(`++ stored in "${hold.x.name}"...`);
} else if (kC==67&&cC==67){spreadReference(coinFocus,hold.c);(`++ stored in "${hold.c.name}"...`);
} else if (kC==86&&cC==86){spreadReference(coinFocus,hold.v);(`++ stored in "${hold.v.name}"...`);
} else if (kC==66&&cC==66){spreadReference(coinFocus,hold.b);(`++ stored in "${hold.b.name}"...`);
} else if (kC==78&&cC==78){spreadReference(coinFocus,hold.n);(`++ stored in "${hold.n.name}"...`);
} else if (kC==77&&cC==77){spreadReference(coinFocus,hold.m);(`++ stored in "${hold.m.name}"...`);
}
charM=0;charQ1=0;charQ2=0;charF=0;

} else if (charF==1) {
pasteAfter=1;
       if (kC==81&&cC==81){pasteOut(keyInfo,hold.q.value);
} else if (kC==87&&cC==87){pasteOut(keyInfo,hold.w.value);
} else if (kC==69&&cC==69){pasteOut(keyInfo,hold.e.value);
} else if (kC==82&&cC==82){pasteOut(keyInfo,hold.r.value);
} else if (kC==84&&cC==84){pasteOut(keyInfo,hold.t.value);
} else if (kC==89&&cC==89){pasteOut(keyInfo,hold.y.value);
} else if (kC==85&&cC==85){pasteOut(keyInfo,hold.u.value);
} else if (kC==73&&cC==73){pasteOut(keyInfo,hold.i.value);
} else if (kC==79&&cC==79){pasteOut(keyInfo,hold.o.value);
} else if (kC==80&&cC==80){pasteOut(keyInfo,hold.p.value);
} else if (kC==65&&cC==65){pasteOut(keyInfo,hold.a.value);
} else if (kC==83&&cC==83){pasteOut(keyInfo,hold.s.value);
} else if (kC==68&&cC==68){pasteOut(keyInfo,hold.d.value);
} else if (kC==70&&cC==70){pasteOut(keyInfo,hold.f.value);
} else if (kC==71&&cC==71){pasteOut(keyInfo,hold.g.value);
} else if (kC==72&&cC==72){pasteOut(keyInfo,hold.h.value);
} else if (kC==74&&cC==74){pasteOut(keyInfo,hold.j.value);
} else if (kC==75&&cC==75){pasteOut(keyInfo,hold.k.value);
} else if (kC==76&&cC==76){pasteOut(keyInfo,hold.l.value);
} else if (kC==90&&cC==90){pasteOut(keyInfo,hold.z.value);
} else if (kC==88&&cC==88){pasteOut(keyInfo,hold.x.value);
} else if (kC==67&&cC==67){pasteOut(keyInfo,hold.c.value);
} else if (kC==86&&cC==86){pasteOut(keyInfo,hold.v.value);
} else if (kC==66&&cC==66){pasteOut(keyInfo,hold.b.value);
} else if (kC==78&&cC==78){pasteOut(keyInfo,hold.n.value);
} else if (kC==77&&cC==77){pasteOut(keyInfo,hold.m.value);
}
charM=0;charQ1=0;charQ2=0;charF=0;
pasteAfter=0;

} else if (charQ1==1) {
       if (kC==81&&cC==81){focusSet(hold.q.value);
} else if (kC==87&&cC==87){focusSet(hold.w.value);
} else if (kC==69&&cC==69){focusSet(hold.e.value);
} else if (kC==82&&cC==82){focusSet(hold.r.value);
} else if (kC==84&&cC==84){focusSet(hold.t.value);
} else if (kC==89&&cC==89){focusSet(hold.y.value);
} else if (kC==85&&cC==85){focusSet(hold.u.value);
} else if (kC==73&&cC==73){focusSet(hold.i.value);
} else if (kC==79&&cC==79){focusSet(hold.o.value);
} else if (kC==80&&cC==80){focusSet(hold.p.value);
} else if (kC==65&&cC==65){focusSet(hold.a.value);
} else if (kC==83&&cC==83){focusSet(hold.s.value);
} else if (kC==68&&cC==68){focusSet(hold.d.value);
} else if (kC==70&&cC==70){focusSet(hold.f.value);
} else if (kC==71&&cC==71){focusSet(hold.g.value);
} else if (kC==72&&cC==72){focusSet(hold.h.value);
} else if (kC==74&&cC==74){focusSet(hold.j.value);
} else if (kC==75&&cC==75){focusSet(hold.k.value);
} else if (kC==76&&cC==76){focusSet(hold.l.value);
} else if (kC==90&&cC==90){focusSet(hold.z.value);
} else if (kC==88&&cC==88){focusSet(hold.x.value);
} else if (kC==67&&cC==67){focusSet(hold.c.value);
} else if (kC==86&&cC==86){focusSet(hold.v.value);
} else if (kC==66&&cC==66){focusSet(hold.b.value);
} else if (kC==78&&cC==78){focusSet(hold.n.value);
} else if (kC==77&&cC==77){focusSet(hold.m.value);
}
if (kC == 222 && cC ==  39) {
if (curFocus==1&&coinFocus!=null) {
curFocus=0;


coinFocus.style.outline = fA;
       if (coinFocus.dataset.coinTrip==Ts0) { coinFocus.firstElementChild.style.color = Fs0; coinFocus.style.outlineColor = Cs0; coinFocus.firstElementChild.style.backgroundColor = Bs0; coinFocus.firstElementChild.style.opacity = Os0;
} else if (coinFocus.dataset.coinTrip==Ts1) { coinFocus.firstElementChild.style.color = Fs1; coinFocus.style.outlineColor = Cs1; coinFocus.firstElementChild.style.backgroundColor = Bs1; coinFocus.firstElementChild.style.opacity = Os1;
} else if (coinFocus.dataset.coinTrip==Ts2) { coinFocus.firstElementChild.style.color = Fs2; coinFocus.style.outlineColor = Cs2; coinFocus.firstElementChild.style.backgroundColor = Bs2; coinFocus.firstElementChild.style.opacity = Os2;
}

readCoins();
recoverColouration();
coinFocus.style.outline = fB;




} else {
focusFlip();
}
}

charM=0;charQ1=0;charQ2=0;charF=0;
}

}
