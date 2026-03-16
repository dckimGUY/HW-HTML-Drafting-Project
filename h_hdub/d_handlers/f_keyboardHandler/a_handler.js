/* This tells us if the spacebar is being held down */

const spacebar = {};
      spacebar.hold = false;


/* This will "dog-the-mouse" and allow us to drag displayed text from the objects. */
var mouseIsDogged = false;
var spaceView = false;

/* This stops the screen from being refreshed from the keys... which leaves a blank screen anyhow. */
document.addEventListener("keydown", (event) => {

/*

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

*/

});

/* The mode indicator. */
var kC = 0, cC = 0;

var shiftHold = false;

document.addEventListener("keydown", (event) => { 



drawSiteMap();

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


if (ec&&es&&mode!=8) {dot();}

/*   esc   */ if (kC ==  27)              {

if (ui.folder52.ref.style.display == "none" ||
    ui.tab5Wrapper.ref.style.display  == "none") {
hdubDemo.style.opacity = 0;
}

if (mode==0) { curFocus=0; modeRouter(e,1); }

hotDog = false;
spaceViewOff([e,32,32,es,ec,ea]);
restorePointerEventsNone(); 
helpMenuOverlay.style.display="none";
F.focus();

if (activeStateEdit == true) {
buzzWord(0,'<sup>DISABLED</sup>',96,'red',200,200,25,'top','','',event);
}
           activeStateEdit = false;
document.getElementById("activeStateEdit").style.outline = "";
document.getElementById("activeStateEdit").style.backgroundColor = "transparent";
}

if (hotDog) { return; }

/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/*                                                                        */
/*   tab   */ if (kC ==   9)              {
if (!event.ctrlKey) {
event.preventDefault();
toggleLocalView();
}
/*
if (!es) {
toggleInterfaceLayer();
} else {
enterWizardMaster();
}
*/

}
/*backspace*/ if (kC ==   8)              {


if (event.shiftKey) {
flipTheBuffers();
} else {
flipPhantomLair();
}

//
}
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*   F1    */ if (kC == 112)              { programManual("index");        }
/*   F2    */ if (kC == 113)              {                                }
/*   F3    */ if (kC == 114)              {                                }
/*   F4    */ if (kC == 115)              {                                }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*   F5    */ if (kC == 116)              {                                }
/*   F6    */ if (kC == 117)              {                                }
/*   F7    */ if (kC == 118)              {                                }
/*   F8    */ if (kC == 119)              { event.preventDefault(); toggleLevelBar(); }
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*   F9    */ if (kC == 120)              { event.preventDefault();  try { topLayer.programStateAccumulator.push(JSON.parse(document.getElementById(topLayer.a_currentLayer.replace(/._l/g, 'setL')).dataset.programState)); buzzWord(0,'+STATE',128,'orange',400,200,25,'top')} catch{}; }
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
/*   ins   */ if (kC ==  45)              { event.preventDefault(); insertKey(); }
/*   home  */ if (kC ==  36)              { event.preventDefault();
if (activeStateEdit) {
firstState();
}
}
/* page up */ if (kC ==  33)              { event.preventDefault();
if (activeStateEdit) {
nextState();
} else {
       if (!event.shiftKey) {
nextState();
} else if ( event.shiftKey) {
deMinimis(true); layerLeft(); buzzWord(0,'< + SAVE',128,'magenta',200,200,25,'top','','',event);
}
}
}
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/*  delete */ if (kC ==  46)              { event.preventDefault(); deleteKey(); }
/*   end   */ if (kC ==  35)              { event.preventDefault();
if (activeStateEdit) {
lastState();
}
}
/*page down*/ if (kC ==  34)              { event.preventDefault();
if (activeStateEdit) {
previousState();
} else {
       if (!event.shiftKey) {
previousState();
} else if ( event.shiftKey) {
deMinimis(true); layerRight(); buzzWord(0,'> + SAVE',128,'magenta',200,200,25,'top','','',event);
}
}
}
/*                                                                        */
/**************************************************************************/
/*                                                                        */
/* scr lck */ if (kC == 145)              {                                }
/* num lock*/ if (kC == 144)              { event.preventDefault(); 


toggleActiveStateEdit();








 }
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

spacebar.hold = true;

event.preventDefault();
spaceViewOn([e,32,32,es,ec,ea]);
removePointerEventsNone();
interfaceLayer.style.display = "none";

} else if (kC==32&&es) {

event.preventDefault();
tabSelector(4);
folder4Selector(1);
document.getElementById("hdubSingleEntry").focus();

}


setTimeout(() => {
loadSidebar1();
updateInfoShelf();
redraw();
}, 10);



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
/*    /    */ if (kC == 111 && cC ==  47) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n/";}
/*    *    */ if (kC == 106 && cC ==  42) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n*";}
/*                                                                        */
/*    -    */ if (kC == 109 && cC ==  45) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n-";}
/*    +    */ if (kC == 107 && cC ==  43) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n+";}
/*                                                                        */
/*    7    */ if (kC == 103 && cC ==  55) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n7";}
/*    8    */ if (kC == 104 && cC ==  56) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n8";}
/*    9    */ if (kC == 105 && cC ==  57) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n9";}
/*                                                                        */
/*    4    */ if (kC == 100 && cC ==  52) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n4";}
/*    5    */ if (kC == 101 && cC ==  53) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n5";}
/*    6    */ if (kC == 102 && cC ==  54) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n6";}
/*                                                                        */
/*    1    */ if (kC ==  97 && cC ==  49) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n1";}
/*    2    */ if (kC ==  98 && cC ==  50) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n2";}
/*    3    */ if (kC ==  99 && cC ==  51) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n3";}
/*                                                                        */
/*    0    */ if (kC ==  96 && cC ==  48) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n0";}
/*    .    */ if (kC == 110 && cC ==  46) { e.preventDefault(); numpadRouter(keyInfo);         lastKey = "n.";}
/*                                                                        */
/**************************************************************************/

if (hotDog) { return; }
/*                                                                        */
/*  enter  */ if (kC ==  13 && cC ==  13) {
if (event.shiftKey) {

deMinimis(false,'','',true);

/*
tabSelector(5);
folder5Selector(2);
let selectedTheme = userCustomTheme.currentTheme;
loadTheme("i8");
userCustomTheme.currentTheme = selectedTheme;
localStorage.setItem("currentTheme", userCustomTheme.currentTheme);
drawFury(true);
*/




} else {

hotDog = true; event.preventDefault(); spaceViewOn([e,32,32,es,ec,ea]); removePointerEventsNone();

if (coinFocus != null &&
    coinFocus.lastElementChild.lastElementChild.previousElementSibling
) {
if (ui.folder52.ref.style.display == "block" &&
    ui.tab5Wrapper.ref.style.display  == "block") {
}

}
}
}


/*                                                                        */
/******************************************************************************************************************************************************/
/*                                                                                                                                                    */
/*    `    */ if (kC == 192 && cC ==  96) { toggleMenu();             lastKey = "`"; }/*    ~    */ if (kC == 192 && cC == 126) { toggleInterfaceLayer();        lastKey = "~";}
/*    1    */ if (kC ==  49 && cC ==  49) { changeLayer("b_layer1");  lastKey = "1"; }/*    !    */ if (kC ==  49 && cC ==  33) { changeLayer("l_layer11");      lastKey = "!";}
/*    2    */ if (kC ==  50 && cC ==  50) { changeLayer("c_layer2");  lastKey = "2"; }/*    @    */ if (kC ==  50 && cC ==  64) { changeLayer("m_layer12");      lastKey = "@";}
/*    3    */ if (kC ==  51 && cC ==  51) { changeLayer("d_layer3");  lastKey = "3"; }/*    #    */ if (kC ==  51 && cC ==  35) { changeLayer("n_layer13");      lastKey = "#";}
/*    4    */ if (kC ==  52 && cC ==  52) { changeLayer("e_layer4");  lastKey = "4"; }/*    $    */ if (kC ==  52 && cC ==  36) { changeLayer("o_layer14");      lastKey = "$";}
/*    5    */ if (kC ==  53 && cC ==  53) { changeLayer("f_layer5");  lastKey = "5"; }/*    %    */ if (kC ==  53 && cC ==  37) { changeLayer("p_layer15");      lastKey = "%";}
/*    6    */ if (kC ==  54 && cC ==  54) { changeLayer("g_layer6");  lastKey = "6"; }/*    ^    */ if (kC ==  54 && cC ==  94) { changeLayer("q_layer16");      lastKey = "^";}
/*    7    */ if (kC ==  55 && cC ==  55) { changeLayer("h_layer7");  lastKey = "7"; }/*    &    */ if (kC ==  55 && cC ==  38) { changeLayer("r_layer17");      lastKey = "&";}
/*    8    */ if (kC ==  56 && cC ==  56) { changeLayer("i_layer8");  lastKey = "8"; }/*    *    */ if (kC ==  56 && cC ==  42) { changeLayer("s_layer18");      lastKey = "*";}
/*    9    */ if (kC ==  57 && cC ==  57) { changeLayer("j_layer9");  lastKey = "9"; }/*    (    */ if (kC ==  57 && cC ==  40) { changeLayer("t_layer19");      lastKey = "(";}
/*    0    */ if (kC ==  48 && cC ==  48) { changeLayer("k_layer10"); lastKey = "0"; }/*    )    */ if (kC ==  48 && cC ==  41) { changeLayer("u_layer20");      lastKey = ")";}
/*    -    */ if (kC == 173 && cC ==  45) { lessG(e);                 lastKey = "-"; }/*    _    */ if (kC == 173 && cC ==  95) { lessG(e);                      lastKey = "_";}
/*    =    */ if (kC ==  61 && cC ==  61) { moreG(e);                 lastKey = "="; }/*    +    */ if (kC ==  61 && cC ==  43) { moreG(e);                      lastKey = "+";}
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
/*    [    */ if (kC == 219 && cC ==  91) { lessG(e);            lastKey="[";}/*    {    */ if (kC == 219 && cC == 123) { oneLessG(e);         lastKey="{";}
/*    ]    */ if (kC == 221 && cC ==  93) { moreG(e);            lastKey="]";}/*    }    */ if (kC == 221 && cC == 125) { oneMoreG(e);         lastKey="}";}
/*    \    */ if (kC == 220 && cC ==  92) { focusNextColour();  lastKey="\\";}/*    |    */ if (kC == 220 && cC == 124) { firstLastColour();   lastKey="|";}
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
/*    ;    */ if (kC ==  59 && cC ==  59) { if (coinFocus!=null) {coinFocus.scrollIntoView({behavior:'smooth', block:'center'});} lastKey = ";";}/*    :    */ if (kC ==  59 && cC ==  58) { if (coinFocus!=null) {coinFocus.scrollIntoView({behavior:'smooth', inline: 'center'});} lastKey = ":";}
/*    '    */ if (kC == 222 && cC ==  39) { if (coinFocus!=null) {coinFocus.scrollIntoView({behavior:'smooth', block:'center', inline: 'center'});} lastKey = "'"; }/*    "    */ if (kC == 222 && cC ==34){ if (coinFocus!=null) {coinFocus.scrollIntoView({behavior:'smooth', block:'center', inline: 'center'});} lastKey = '"'; }
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
/*    ,    */ if (kC == 188 && cC ==  44) {if(rev==1){focusNext(true)}else{focusPrevious(true)}lastKey = ",";}/*    <    */ if (kC == 188 && cC ==  60) {setupLeft();  lastKey = "<";}
/*    .    */ if (kC == 190 && cC ==  46) {if(rev==1){focusPrevious(true)}else{focusNext(true)}lastKey = ".";}/*    >    */ if (kC == 190 && cC ==  62) {setupRight(); lastKey = ">";}
/*    /    */ if (kC == 191 && cC ==  47) { event.preventDefault(); mouseIncrementCycle(); lastKey = "/";}/*    ?    */ if (kC == 191 && cC ==  63) { 
                 if ( grid0Viz == "true") {
                      grid0Viz = "false";
localStorage.setItem("grid0Viz", "false");
} else {              grid0Viz = "true";
localStorage.setItem("grid0Viz", "true"); }
Z();                      

lastKey = "?";
}


/*                                                                                                                                                    */



handleBuzz();



       if (lastFlow == "global") {
reflowGlobal(rev,0)
} else if (lastFlow == "colour") {
reflowPerTrip();
}



/******************************************************************************************************************************************************/
/******************************************************************************************************************************************************/
/***************************************************************************************************************************************************/});

document.addEventListener("keyup", (event) => {








activeUpdate();











drawSiteMap();

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


spacebar.hold = false;



spaceViewOff([e,32,32,es,ec,ea]);
restorePointerEventsNone();



}

if (!(ec&&es)) {rdots();}



setTimeout(() => {
loadSidebar1();
updateInfoShelf();
}, 10);

});





