/* This will "dog-the-mouse" and allow us to drag displayed text from the objects. */
var mouseIsDogged = false;
var spaceView = false;

/* This stops the screen from being refreshed from the keys... which leaves a blank screen anyhow. */
document.addEventListener("keydown", (event) => {

if (hotDog) {
if ((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='r') { event.preventDefault(); }
if (event.key==='F5'){ event.preventDefault(); }
return; }

if ((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='r') {
event.preventDefault();
utilityLayer0.innerHTML = "";
utilityLayer1.innerHTML = "";
Picture.width = 0;
Picture.height = 0;
Picture.style.display="none";
readCoins();
curFocus = 1;
}

if (event.key==='F5'){ event.preventDefault(); }


});

/* The mode indicator. */
var kC = 0, cC = 0;

var shiftHold = false;

document.addEventListener("keydown", (event) => { 

if (splashScreenVisible==true) {
splashScreen.remove();
}

kC = event.keyCode;
let e = event, cC=0, es=event.shiftKey, ec=event.ctrlKey, ea=event.altKey;
let keyInfo = [e,kC,cC,es,ec,ea];

if (es) { shiftHold = true; } else { shiftHold = false; }


/* THIS SETS UP THE CURSOR THINGY */

if (mousemoveTarget!=null) {
if (mode!=8)  {
if (ec && !es)  {
mousemoveTarget.style.cursor = cursor.copy;
} else if (es && !ec) {
mousemoveTarget.style.cursor = cursor.move;
} else if (ec && es) {
mousemoveTarget.style.cursor = cursor.crosshair;
} else            {
mousemoveTarget.style.cursor = cursor.grabbing;
}
} else {
mousemoveTarget.style.cursor = cursor.cell;
}
}



if (!es&&!ec&&!ea) {
edgeDetect.style.display= "none";
}

mouseCursor.style.display            = "none";
if (ec&&es&&mode!=8) {dot();}

/*   esc   */ if (kC ==  27)              {

if (mode==0) { curFocus=0; modeRouter(e,1); }

hotDog = false;
spaceViewOff([e,32,32,es,ec,ea]);
restorePointerEventsNone(); 
helpMenuOverlay.style.display="none";
F.focus();
}

if (hotDog) { return; }

/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/*                                                                        */
/*   tab   */ if (kC ==   9)              {
event.preventDefault();

toggleLocalView();

/*
if (!es) {
toggleInterfaceLayer();
} else {
enterWizardMaster();
}
*/

}
/*backspace*/ if (kC ==   8)              { pulledText.style.pointerEvents = ""; spaceViewToggle(keyInfo);      }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*   F1    */ if (kC == 112)              { helpMenu(e);                   }
/*   F2    */ if (kC == 113)              {                                }
/*   F3    */ if (kC == 114)              {                                }
/*   F4    */ if (kC == 115)              {                                }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*   F5    */ if (kC == 116)              {                                }
/*   F6    */ if (kC == 117)              {                                }
/*   F7    */ if (kC == 118)              {                                }
/*   F8    */ if (kC == 119)              {                                }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*   F9    */ if (kC == 120)              {                                }
/*   F10   */ if (kC == 121)              {                                }
/*   F11   */ if (kC == 122)              {                                }
/*   F12   */ if (kC == 123)              {                                }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/* pauseBR */ if (kC ==  19)              {                                }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*   ins   */ if (kC ==  45)              { groupPaste(Ts0);               }
/*   home  */ if (kC ==  36)              { groupPaste(Ts1);               }
/* page up */ if (kC ==  33)              { groupPaste(Ts2);               }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*  delete */ if (kC ==  46)              { groupDeletion(Ts0);            }
/*   end   */ if (kC ==  35)              { groupDeletion(Ts1);            }
/*page down*/ if (kC ==  34)              { groupDeletion(Ts2);            }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/* scr lck */ if (kC == 145)              {                                }
/* num lock*/ if (kC == 144)              {                                }
/*  caps   */ if (kC ==  20)              { flipHauptMode(keyInfo);        }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*   up arr*/ if (kC ==  38)              { event.preventDefault(); scrollRouter(keyInfo); }
/* down arr*/ if (kC ==  40)              { event.preventDefault(); scrollRouter(keyInfo); }
/* left arr*/ if (kC ==  37)              { event.preventDefault(); scrollRouter(keyInfo); }
/*right arr*/ if (kC ==  39)              { event.preventDefault(); scrollRouter(keyInfo); }
/*                                                                        */
/*  space  */ if (kC ==  32&&!es)              {

event.preventDefault();
spaceViewOn([e,32,32,es,ec,ea]);
removePointerEventsNone();
interfaceLayer.style.display = "none";

} else if (kC==32&&es) {

event.preventDefault();

interfaceLayer.style.display = "block";

}

redraw();

/*                                                                        */
/**************************************************************************/
/**************************************************************************/
/***********************************************************************/});





document.addEventListener("keypress", (event) =>  { 

edgeDetect.style.display= "none";

cC = event.charCode;
let e = event, es=event.shiftKey, ec=event.ctrlKey, ea=event.altKey;
let keyInfo = [e,kC,cC,es,ec,ea];
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/*                                                                        */
/*    /    */ if (kC == 111 && cC ==  47) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    *    */ if (kC == 106 && cC ==  42) { e.preventDefault(); numpadRouter(keyInfo);         }
/*                                                                        */
/*    -    */ if (kC == 109 && cC ==  45) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    +    */ if (kC == 107 && cC ==  43) { e.preventDefault(); numpadRouter(keyInfo);         }
/*                                                                        */
/*    7    */ if (kC == 103 && cC ==  55) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    8    */ if (kC == 104 && cC ==  56) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    9    */ if (kC == 105 && cC ==  57) { e.preventDefault(); numpadRouter(keyInfo);         }
/*                                                                        */
/*    4    */ if (kC == 100 && cC ==  52) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    5    */ if (kC == 101 && cC ==  53) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    6    */ if (kC == 102 && cC ==  54) { e.preventDefault(); numpadRouter(keyInfo);         }
/*                                                                        */
/*    1    */ if (kC ==  97 && cC ==  49) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    2    */ if (kC ==  98 && cC ==  50) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    3    */ if (kC ==  99 && cC ==  51) { e.preventDefault(); numpadRouter(keyInfo);         }
/*                                                                        */
/*    0    */ if (kC ==  96 && cC ==  48) { e.preventDefault(); numpadRouter(keyInfo);         }
/*    .    */ if (kC == 110 && cC ==  46) { e.preventDefault(); numpadRouter(keyInfo);         }
/*                                                                        */
/**************************************************************************/

if (hotDog) { return; }
/*                                                                        */
/*  enter  */ if (kC ==  13 && cC ==  13) { hotDog = true; event.preventDefault(); spaceViewOn([e,32,32,es,ec,ea]); removePointerEventsNone(); }
/*                                                                        */
/******************************************************************************************************************************************************/
/*                                                                                                                                                    */
/*    `    */ if (kC == 192 && cC ==  96) { toggleInterfaceShelf();        }/*    ~    */ if (kC == 192 && cC == 126) { toggleInterfaceLayer();        }
/*    1    */ if (kC ==  49 && cC ==  49) { makeTopLayer("b_layer1");      }/*    !    */ if (kC ==  49 && cC ==  33) { saveInternalImage();           }
/*    2    */ if (kC ==  50 && cC ==  50) { makeTopLayer("c_layer2");      }/*    @    */ if (kC ==  50 && cC ==  64) { setDragPullFromContext();      }
/*    3    */ if (kC ==  51 && cC ==  51) { makeTopLayer("d_layer3");      }/*    #    */ if (kC ==  51 && cC ==  35) {  if (drawPartNames=="false") { drawPartNames = "true"; } else { drawPartNames = "false"; }; localStorage.setItem("drawPartNames", drawPartNames); redraw();              }
/*    4    */ if (kC ==  52 && cC ==  52) { makeTopLayer("e_layer4");      }/*    $    */ if (kC ==  52 && cC ==  36) { fMan(keyInfo);                 }
/*    5    */ if (kC ==  53 && cC ==  53) { makeTopLayer("f_layer5");      }/*    %    */ if (kC ==  53 && cC ==  37) { enterPageEchelon();            }
/*    6    */ if (kC ==  54 && cC ==  54) { makeTopLayer("g_layer6");      }/*    ^    */ if (kC ==  54 && cC ==  94) { fMan(keyInfo);                 }
/*    7    */ if (kC ==  55 && cC ==  55) { makeTopLayer("h_layer7");      }/*    &    */ if (kC ==  55 && cC ==  38) { otherFontAndTemplates();       }
/*    8    */ if (kC ==  56 && cC ==  56) { makeTopLayer("i_layer8");      }/*    *    */ if (kC ==  56 && cC ==  42) { goFullscreen();                }
/*    9    */ if (kC ==  57 && cC ==  57) { makeTopLayer("j_layer9");      }/*    (    */ if (kC ==  57 && cC ==  40) { insertNamedColours();          }
/*    0    */ if (kC ==  48 && cC ==  48) { copyFilenameLink();            }/*    )    */ if (kC ==  48 && cC ==  41) { insertGrayscale();             }
/*    -    */ if (kC == 173 && cC ==  45) { lessG(e);                      }/*    _    */ if (kC == 173 && cC ==  95) { lessG(e);                      }
/*    =    */ if (kC ==  61 && cC ==  61) { moreG(e);                      }/*    +    */ if (kC ==  61 && cC ==  43) { moreG(e);                      }
/*                                                                                                                                                    */
/******************************************************************************************************************************************************/
/*                                                                                                                                                    */
/*    q    */ if (kC ==  81 && cC == 113) { shiftRouter(keyInfo);lastKey="q";}/*    Q    */ if (kC ==  81 && cC ==  81) { shiftRouter(keyInfo);lastKey="Q";}
/*    w    */ if (kC ==  87 && cC == 119) { shiftRouter(keyInfo);lastKey="w";}/*    W    */ if (kC ==  87 && cC ==  87) { shiftRouter(keyInfo);lastKey="W";}
/*    e    */ if (kC ==  69 && cC == 101) { shiftRouter(keyInfo);lastKey="e";}/*    E    */ if (kC ==  69 && cC ==  69) { shiftRouter(keyInfo);lastKey="E";}
/*    r    */ if (kC ==  82 && cC == 114) { shiftRouter(keyInfo);lastKey="r";}/*    R    */ if (kC ==  82 && cC ==  82) { shiftRouter(keyInfo);lastKey="R";}
/*    t    */ if (kC ==  84 && cC == 116) { shiftRouter(keyInfo);lastKey="t";}/*    T    */ if (kC ==  84 && cC ==  84) { shiftRouter(keyInfo);lastKey="T";}
/*    y    */ if (kC ==  89 && cC == 121) { shiftRouter(keyInfo);lastKey="y";}/*    Y    */ if (kC ==  89 && cC ==  89) { shiftRouter(keyInfo);lastKey="Y";}
/*    u    */ if (kC ==  85 && cC == 117) { shiftRouter(keyInfo);lastKey="u";}/*    U    */ if (kC ==  85 && cC ==  85) { shiftRouter(keyInfo);lastKey="U";}
/*    i    */ if (kC ==  73 && cC == 105) { shiftRouter(keyInfo);lastKey="i";}/*    I    */ if (kC ==  73 && cC ==  73) { shiftRouter(keyInfo);lastKey="I";}
/*    o    */ if (kC ==  79 && cC == 111) { shiftRouter(keyInfo);lastKey="o";}/*    O    */ if (kC ==  79 && cC ==  79) { shiftRouter(keyInfo);lastKey="O";}
/*    p    */ if (kC ==  80 && cC == 112) { shiftRouter(keyInfo);lastKey="p";}/*    P    */ if (kC ==  80 && cC ==  80) { shiftRouter(keyInfo);lastKey="P";}
/*    [    */ if (kC == 219 && cC ==  91) { lessG(e);                        }/*    {    */ if (kC == 219 && cC == 123) { oneLessG(e);                     }
/*    ]    */ if (kC == 221 && cC ==  93) { moreG(e);                        }/*    }    */ if (kC == 221 && cC == 125) { oneMoreG(e);                     }
/*    \    */ if (kC == 220 && cC ==  92) { focusNextColour();               }/*    |    */ if (kC == 220 && cC == 124) {if(rev==1){focusLast()}else{focusFirst()}}
/*                                                                                                                                                    */
/******************************************************************************************************************************************************/
/*                                                                                                                                                    */
/*    a    */ if (kC ==  65 && cC ==  97) { shiftRouter(keyInfo);lastKey="a";}/*    A    */ if (kC ==  65 && cC ==  65) { shiftRouter(keyInfo);lastKey="A";}
/*    s    */ if (kC ==  83 && cC == 115) { shiftRouter(keyInfo);lastKey="s";}/*    S    */ if (kC ==  83 && cC ==  83) { shiftRouter(keyInfo);lastKey="S";}
/*    d    */ if (kC ==  68 && cC == 100) { shiftRouter(keyInfo);lastKey="d";}/*    D    */ if (kC ==  68 && cC ==  68) { shiftRouter(keyInfo);lastKey="D";}
/*    f    */ if (kC ==  70 && cC == 102) { shiftRouter(keyInfo);lastKey="f";}/*    F    */ if (kC ==  70 && cC ==  70) { shiftRouter(keyInfo);lastKey="F";}
/*    g    */ if (kC ==  71 && cC == 103) { shiftRouter(keyInfo);lastKey="g";}/*    G    */ if (kC ==  71 && cC ==  71) { shiftRouter(keyInfo);lastKey="G";}
/*    h    */ if (kC ==  72 && cC == 104) { shiftRouter(keyInfo);lastKey="h";}/*    H    */ if (kC ==  72 && cC ==  72) { shiftRouter(keyInfo);lastKey="H";}
/*    j    */ if (kC ==  74 && cC == 106) { shiftRouter(keyInfo);lastKey="j";}/*    J    */ if (kC ==  74 && cC ==  74) { shiftRouter(keyInfo);lastKey="J";}
/*    k    */ if (kC ==  75 && cC == 107) { shiftRouter(keyInfo);lastKey="k";}/*    K    */ if (kC ==  75 && cC ==  75) { shiftRouter(keyInfo);lastKey="K";}
/*    l    */ if (kC ==  76 && cC == 108) { shiftRouter(keyInfo);lastKey="l";}/*    L    */ if (kC ==  76 && cC ==  76) { shiftRouter(keyInfo);lastKey="L";}
/*    ;    */ if (kC ==  59 && cC ==  59) {if(rev==1){focusPrevious()}else{focusNext()}}/*    :    */ if (kC ==  59 && cC ==  58) {if(rev==1){focusNext()}else{focusPrevious()}}
/*    '    */ if (kC == 222 && cC ==  39) { fMan(keyInfo);                 }/*    "    */ if (kC == 222 && cC ==34){shiftRouter([e,78,110,true,ec,ea]);}
/*                                                                                                                                                    */
/******************************************************************************************************************************************************/
/*                                                                                                                                                    */
/*    z    */ if (kC ==  90 && cC == 122) { shiftRouter(keyInfo);lastKey="z";}/*    Z    */ if (kC ==  90 && cC ==  90) { shiftRouter(keyInfo);lastKey="Z";}
/*    x    */ if (kC ==  88 && cC == 120) { shiftRouter(keyInfo);lastKey="x";}/*    X    */ if (kC ==  88 && cC ==  88) { shiftRouter(keyInfo);lastKey="X";}
/*    c    */ if (kC ==  67 && cC ==  99) { shiftRouter(keyInfo);lastKey="c";}/*    C    */ if (kC ==  67 && cC ==  67) { shiftRouter(keyInfo);lastKey="C";}
/*    v    */ if (kC ==  86 && cC == 118) { shiftRouter(keyInfo);lastKey="v";}/*    V    */ if (kC ==  86 && cC ==  86) { shiftRouter(keyInfo);lastKey="V";}
/*    b    */ if (kC ==  66 && cC ==  98) { shiftRouter(keyInfo);lastKey="b";}/*    B    */ if (kC ==  66 && cC ==  66) { shiftRouter(keyInfo);lastKey="B";}
/*    n    */ if (kC ==  78 && cC == 110) { shiftRouter(keyInfo);lastKey="n";}/*    N    */ if (kC ==  78 && cC ==  78) { shiftRouter(keyInfo);lastKey="N";}
/*    m    */ if (kC ==  77 && cC == 109) { shiftRouter(keyInfo);lastKey="m";}/*    M    */ if (kC ==  77 && cC ==  77) { shiftRouter(keyInfo);lastKey="M";}
/*    ,    */ if (kC == 188 && cC ==  44) {if(rev==1){focusNext(true)}else{focusPrevious(true)}}/*    <    */ if (kC == 188 && cC ==  60) {cyclePreviousLocalView();}
/*    .    */ if (kC == 190 && cC ==  46) {if(rev==1){focusPrevious(true)}else{focusNext(true)}}/*    >    */ if (kC == 190 && cC ==  62) {cycleNextLocalView();}
/*    /    */ if (kC == 191 && cC ==  47) { lessG(e);                      }/*    ?    */ if (kC == 191 && cC ==  63) { 
                 if ( grid0Viz == "true") {
                      grid0Viz = "false";
localStorage.setItem("grid0Viz", "false");
} else {              grid0Viz = "true";
localStorage.setItem("grid0Viz", "true"); }
Z();                      }
/*                                                                                                                                                    */

redraw();

/******************************************************************************************************************************************************/
/******************************************************************************************************************************************************/
/***************************************************************************************************************************************************/});

document.addEventListener("keyup", (event) => {




edgeDetect.style.display= "none";

if (hotDog) { return; }

let e = event, es=event.shiftKey, ec=event.ctrlKey, ea=event.altKey;
let keyInfo = [e,kC,cC,es,ec,ea];

if (es) { shiftHold = true; } else { shiftHold = false; }


/* THIS SETS UP THE CURSOR THINGY */

if (mousemoveTarget!=null) {
if (ec && !es)  {
mousemoveTarget.style.cursor = cursor.copy;
} else if (es && !ec) {
mousemoveTarget.style.cursor = cursor.move;
} else if (ec && es) {
mousemoveTarget.style.cursor = cursor.crosshair;
} else            {
mousemoveTarget.style.cursor = cursor.grab;

}
} else {
}

utilityLayer0.style.cursor = "crosshair";

/*  space  */ if (kC==32) {


spaceViewOff([e,32,32,es,ec,ea]);
restorePointerEventsNone();



}

if (!(ec&&es)) {rdots();}

redraw();

updateInfoShelf();

});





