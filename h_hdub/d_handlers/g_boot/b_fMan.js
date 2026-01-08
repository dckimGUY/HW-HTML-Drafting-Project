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
/*    q    */ if (kC ==  81 && cC == 113) {                          quitSave();                                                                                                        }
/*    w    */ if (kC ==  87 && cC == 119) { noteCoin("W<br><span style='font-size: 0.5em;'>window mode</span>",durationC); flipWindowEdge(); modeRouter(e,0);                           }
/*    e    */ if (kC ==  69 && cC == 101) {                                                                              flipEdge(); modeRouter(e,5);                                   }
/*    r    */ if (kC ==  82 && cC == 114) { noteCoin("R<br><span style='font-size: 0.5em;'>flip image</span>",durationC); innerRotationMin();                                           }
/*    t    */ if (kC ==  84 && cC == 116) { noteCoin("T<br><span style='font-size: 0.5em;'>colour mode</span>",durationC); modeRouter(e,8); if (lastKey=="T") { swapColours(); }        }
/*    y    */ if (kC ==  89 && cC == 121) { wrapDocument(); noteCoin("Y<br><span style='font-size: 0.5em;'>wrap snug</span>",durationC);                                                }
/*    u    */ if (kC ==  85 && cC == 117) { unwrapParts(); noteCoin("U<br><span style='font-size: 0.5em;'>unwrap</span>",durationC);                                                    }
/*    i    */ if (kC ==  73 && cC == 105) {                          aioNRouter(keyInfo);                                                                                               }
/*    o    */ if (kC ==  79 && cC == 111) {                          aioNRouter(keyInfo);                                                                                               }
/*    p    */ if (kC ==  80 && cC == 112) {                          pasteSingle(keyInfo);                                                                                              }
/*    a    */ if (kC ==  65 && cC ==  97) {                          aioNRouter(keyInfo);                                                                                               }
/*    s    */ if (kC ==  83 && cC == 115) {                               deMinimis(false);                                                                               }
/*    d    */ if (kC ==  68 && cC == 100) {                                                                                     modeRouter(e,6);                                        }
/*    f    */ if (kC ==  70 && cC == 102) { noteCoin("F+<br><span style='font-size: 0.5em;'>paste out</span>",durationC); charQ1=0;charQ2=0;charM=0;charF=1;                            }
/*    g    */ if (kC ==  71 && cC == 103) {                                                                              curFocus=0; modeRouter(e,1);                                   }
/*    h    */ if (kC ==  72 && cC == 104) { hjklRouter(keyInfo);                                                                                                                        }
/*    j    */ if (kC ==  74 && cC == 106) { hjklRouter(keyInfo);                                                                                                                        }
/*    k    */ if (kC ==  75 && cC == 107) { hjklRouter(keyInfo);                                                                                                                        }
/*    l    */ if (kC ==  76 && cC == 108) { hjklRouter(keyInfo);                                                                                                                        }
/*    z    */ if (kC ==  90 && cC == 122) { noteCoin("Z<br><span style='font-size: 0.5em;'>z-index mode</span>",durationC); manageGlobalZ(0); modeRouter(e,9);                          }
/*    x    */ if (kC ==  88 && cC == 120) {                          deleteCoin(keyInfo);                                                                                               }
/*    c    */ if (kC ==  67 && cC ==  99) { noteCoin("C<br><span style='font-size: 0.5em;'>cursor</span>",durationC); cursorToCoin(keyInfo); Cur.scrollIntoView({behavior:'smooth', block: 'center', inline: 'center'});   }
/*    v    */ if (kC ==  86 && cC == 118) { noteCoin("V<br><span style='font-size: 0.5em;'>flow document</span>",durationC); lastFlow = "global"; reflowGlobal(rev,0);                  }
/*    b    */ if (kC ==  66 && cC ==  98) {                          buttonizer();                                                                                                      }
/*    n    */ if (kC ==  78 && cC == 110) { tabSelector(1); folder1Selector(1); document.getElementById("partY").focus(); document.getElementById("partY").select();                    }
/*    m    */ if (kC ==  77 && cC == 109) { noteCoin("M+<br><span style='font-size: 0.5em;'>set mark</span>",durationC); charQ1=0;charM=1;charF=0;                                      }
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
