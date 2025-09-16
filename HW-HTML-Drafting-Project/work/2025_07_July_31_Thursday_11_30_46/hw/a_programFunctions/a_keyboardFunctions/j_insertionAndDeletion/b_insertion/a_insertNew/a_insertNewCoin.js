function insertNewCoin(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

const idSuffix = Date.now().toString();
newId = 'coin' + idSuffix.slice(idSuffix.length - 5, idSuffix.length);
let logMessage = "";

let
newCoin          = document.createElement("div"),
anchor           = document.createElement("a"),
main             = document.createElement("div"),

button      = document.createElement("button"),
div         = document.createElement("div"),
img         = document.createElement("img");

         anchor.dataset.name  = `anchor`;
          button.dataset.name = `button`;
             div.dataset.name = `div`;
             img.dataset.name = `img`;
          main.dataset.name   = `main`;

       anchor.style = `position:absolute;z-index:200;left:0;top:0;width:100%;height:100%;border:0px;margin:0px;pointer-events:none;font-size:${utilityDivFontSize};             `;

       if (showPartName==true) {
anchor.innerText      =    newId;
} else {
anchor.innerText      =       "";
}

main.style = `position:absolute;z-index:100;overflow: hidden;left:0;top:0;width:100%;height:100%;border:none;margin:none;pointer-events:none;`;

button.style = buttonInitialStyle;
div.style = `position:absolute;z-index:200;left:0;top:0;width: 100%;height: 100%;box-sizing: border-box;border:none;text-align:justify;pointer-events:none;background-color:transparent;`;

img.style = `position:absolute;display:none;z-index:100;left:0;top:0;width:100%;height:100%;border:none;margin:none;pointer-events:none;background-color:${noImageColour};`;
img.alt = ``;
div.style.color  = `rgba(0,0,0,1)`;
div.innerText    = ``;


main.dataset.perspective           =   "1536px";
main.dataset.rotateX               =        "0";
main.dataset.rotateY               =        "0";
main.dataset.rotateZ               =        "0";
main.dataset.translateZ            =        "0";
main.style.transformOrigin         =   "center";
main.style.transform               =      "perspective(1536px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0deg)";

main.appendChild(button);
main.appendChild(div);
main.appendChild(img);

newCoin.id                            =      newId;
newCoin.dataset.jsName                =      newId;
newCoin.dataset.dragPull              =      "backgroundColor";
newCoin.dataset.parent                =         "";
newCoin.dataset.children              =         "";
newCoin.dataset.finishedOutline       =     "none";
newCoin.dataset.outlineColour         =     "grey";
newCoin.style.outlineOffset           =     "-" + Ws2;
newCoin.style.position                = "absolute";
newCoin.style.transformOrigin         = "top left";
newCoin.style.transform               = "scale(1)";

       if (utilityLayer0.children.length!=0) { newCoin.style.zIndex = findZextrema().highestGlobalZ; } else { newCoin.style.zIndex                  =   findZextrema().highestGlobalZ + tricolourEchelon; }

if (coinFocus!=null) { 
if (coinFocus.dataset.coinTrip==Ts0) {
anchor.style.fontFamily              =        Es0;
anchor.style.color                   =        Fs0;
anchor.style.textAlign               =        Gs2;
anchor.style.backgroundColor         =        Bs0;
anchor.style.opacity                 =        Os0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
anchor.style.fontFamily              =        Es1;
anchor.style.color                   =        Fs1;
anchor.style.textAlign               =        Gs2;
anchor.style.backgroundColor         =        Bs1;
anchor.style.opacity                 =        Os1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
anchor.style.fontFamily              =        Es2;
anchor.style.color                   =        Fs2;
anchor.style.textAlign               =        Gs2;
anchor.style.backgroundColor         =        Bs2;
anchor.style.opacity                 =        Os2;
}

} else {
anchor.style.fontFamily              =        Es2;
anchor.style.color                   =        Fs2;
anchor.style.textAlign               =        Gs2;
anchor.style.backgroundColor         =        Bs2;
anchor.style.opacity                 =        Os2;

}

newCoin.style.userSelect="none";

if (coinFocus!=null) {
let scaleFactor = 1;
if (coinFocus.dataset.scale) { scaleFactor = parseFloat(coinFocus.dataset.scale); }
/*    I    */ if (kC ==  73 && cC ==  73) {
newCoin.style.left      =    parseInt(coinFocus.dataset.left) - T + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
newCoin.style.width     =    T + "px"                              ;
newCoin.style.height    =    parseInt(coinFocus.dataset.height)*scaleFactor + "px";
logMessage=`"i"-insertion at left,       jsName : "${newCoin.dataset.jsName}"`;
eM=1;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : left and top ***`;
}
/*    i    */ if (kC ==  73 && cC == 105) {
newCoin.style.left      =    document.body.scrollLeft + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
newCoin.style.width     =    T + "px"                              ;
newCoin.style.height    =    parseInt(coinFocus.dataset.height)*scaleFactor + "px";
logMessage=`"I"-insertion at left edge,  jsName : "${newCoin.dataset.jsName}"`;
eM=0;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : right and down ***`;
}

/*    O    */ if (kC ==  79 && cC ==  79) {
newCoin.style.left      =    parseInt(coinFocus.dataset.left) + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top) + parseInt(coinFocus.dataset.height)*scaleFactor + "px";
newCoin.style.width     =    parseInt(coinFocus.dataset.width)*scaleFactor +"px";
newCoin.style.height    =    T + "px"                              ;
logMessage=`"o"-insertion below,         jsName : "${newCoin.dataset.jsName}"`;
eM=0;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : right and down ***`;
}
/*    o    */ if (kC ==  79 && cC == 111) {
newCoin.style.left      =    parseInt(coinFocus.dataset.left) + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top) - T + "px";
newCoin.style.width     =    parseInt(coinFocus.dataset.width)*scaleFactor +"px";
newCoin.style.height    =    T + "px"                              ;
logMessage=`"O"-insertion above,         jsName : "${newCoin.dataset.jsName}"`;
eM=1;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : left and top ***`;
}

/*    A    */ if (kC ==  65 && cC ==  65) {
newCoin.style.left      =    parseInt(coinFocus.dataset.left) + parseInt(coinFocus.dataset.width)*scaleFactor + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
newCoin.style.width     =    T + "px"                              ;
newCoin.style.height    =    parseInt(coinFocus.dataset.height)*scaleFactor + "px";
logMessage=`"a"-insertion at right,      jsName : "${newCoin.dataset.jsName}"`;
eM=0;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : right and down ***`;
}
/*    a    */ if (kC ==  65 && cC ==  97) {
newCoin.style.left      =    document.body.scrollLeft + window.innerWidth - T + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
newCoin.style.width     =    T + "px"                              ;
newCoin.style.height    =    parseInt(coinFocus.dataset.height)*scaleFactor + "px";
logMessage=`"A"-insertion at right edge, jsName : "${newCoin.dataset.jsName}"`;
eM=1;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : left and top ***`;
}

/*    d    */ if (kC ==  68 && cC == 100) {
newCoin.style.left      =    parseInt(coinFocus.dataset.left) + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
newCoin.style.width     =    parseInt(coinFocus.dataset.width) +"px";
newCoin.style.height    =    parseInt(coinFocus.dataset.height)+"px";
logMessage=`"D"-duplicated in-place,      jsName : "${newCoin.dataset.jsName}"`;
modeRouter(e,1);
}

}



/*    n    */ if (kC ==  78 && cC == 110) {
if (Cur.style.display!="none") {
newCoin.style.left      =    parseInt(Cur.dataset.left)         + "px";
newCoin.style.top       =    parseInt(Cur.dataset.top)          + "px";
} else {
newCoin.style.left      =    window.scrollX         + "px";
newCoin.style.top       =    window.scrollY         + "px";
}
newCoin.style.width     =    T + "px"                                ;
newCoin.style.height    =    T + "px"                                ;
curFocus                =    1                                        ;
logMessage=`"N"-insertion at cursor,     jsName : "${newCoin.dataset.jsName}"`;
eM=0;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : right and down ***`;
}




/*    n    */ if ((kC ==  78 && cC ==  110)||coinFocus!=null) {

/* Finalize into the datasets. */
newCoin.dataset.left    =    parseInt(newCoin.style.left  ) + "px";
newCoin.dataset.top     =    parseInt(newCoin.style.top   ) + "px";
newCoin.dataset.width   =    parseInt(newCoin.style.width ) + "px";
newCoin.dataset.height  =    parseInt(newCoin.style.height) + "px";


newCoin.dataset.scale                 =        "1";
newCoin.dataset.angle                 =        "0";
newCoin.dataset.left                  =        parseInt(newCoin.style.left) + "px";
newCoin.dataset.top                   =        parseInt(newCoin.style.top)  + "px";

if (curFocus==1) {
if (coinFocus!=null) {
       if (coinFocus.dataset.coinTrip==Ts0) {
newCoin.dataset.coinTrip              =        Ts0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
newCoin.dataset.coinTrip              =        Ts1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
newCoin.dataset.coinTrip              =        Ts2;
}
} else {
newCoin.dataset.coinTrip              =        Ts2;
}
} else {
newCoin.dataset.coinTrip              =        coinFocus.dataset.coinTrip;
}

if (parseInt(newCoin.style.left)>=0&&parseInt(newCoin.style.top)>=0) {
       if (newCoin.dataset.coinTrip == Ts0) { coinTrip.sel0[coinTrip.sel0.length] = newCoin;
} else if (newCoin.dataset.coinTrip == Ts1) { coinTrip.sel1[coinTrip.sel1.length] = newCoin;
} else if (newCoin.dataset.coinTrip == Ts2) { coinTrip.sel2[coinTrip.sel2.length] = newCoin;
}

newCoin.appendChild(anchor);
newCoin.appendChild(main);

newCoin.anchor = newCoin.firstElementChild;
newCoin.main   = newCoin.lastElementChild;
newCoin.button = newCoin.lastElementChild.firstElementChild;
newCoin.div    = newCoin.lastElementChild.firstElementChild.nextElementSibling;
newCoin.img    = newCoin.lastElementChild.lastElementChild;


/* Initialize from the template. */

div.style.background              = template.default.background              ;
div.style.backgroundColor         = template.default.backgroundColor         ;
div.style.color                   = template.default.color                   ;
div.style.textShadow              = template.default.textShadow              ;

div.style.textAlign               = template.default.textAlign               ;
div.style.textIndent              = template.default.textIndent              ;
div.style.fontSize                = template.default.fontSize                ;
div.style.fontStyle               = template.default.fontStyle               ;
div.style.fontWeight              = template.default.fontWeight              ;
div.style.fontVariant             = template.default.fontVariant             ;

div.style.lineHeight              = template.default.lineHeight              ; 
div.style.wordSpacing             = template.default.wordSpacing             ; 
div.style.letterSpacing           = template.default.letterSpacing           ; 

div.style.textTransform           = template.default.textTransform           ;
div.style.direction               = template.default.direction               ;
div.style.opacity                 = template.default.opacity                 ;

div.style.paddingLeft             = template.default.paddingLeft             ;
div.style.paddingRight            = template.default.paddingRight            ;
div.style.paddingTop              = template.default.paddingTop              ;
div.style.paddingBottom           = template.default.paddingBottom           ;




if (hauptMode==0) {
utilityLayer0.appendChild(newCoin);
}



if (coinFocus!=null) {
       if (coinFocus.dataset.coinTrip==Ts0) {
coinFocus.style.outlineColor = Cs0;
coinFocus.style.outlineWidth = Ws0;
coinFocus.style.outlineStyle = Ss0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
coinFocus.style.outlineColor = Cs1;
coinFocus.style.outlineWidth = Ws1;
coinFocus.style.outlineStyle = Ss1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
coinFocus.style.outlineColor = Cs2;
coinFocus.style.outlineWidth = Ws2;
coinFocus.style.outlineStyle = Ss2;
}
}

if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}

coinFocus1=coinFocus;
coinFocus =newCoin;
curFocus  = 0;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;


return(newCoin);

if (logMessage!="") {
}
}
} else {
}
}
