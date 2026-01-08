function insertNewDuplicate(keyInfo) {

if (coinFocus!=null) {

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
newCoin = document.createElement("div");
newCoin.id                            =      newId;
newCoin.dataset.jsName                =      newId;


if (coinFocus!=null&&coinFocus.dataset.children&&coinFocus.dataset.children.split(",").length!=0) { coinFocus.dataset.children += ","; }
if (coinFocus!=null) {
coinFocus.dataset.children += newCoin.dataset.jsName;


newCoin.dataset.parent                =      coinFocus.dataset.jsName;
newCoin.dataset.children              =      "";
newCoin.dataset.finishedOutline       =  "none";
newCoin.dataset.dragPull              =      coinFocus.dataset.dragPull;
newCoin.dataset.wrapper               =      coinFocus.dataset.wrapper ;
newCoin.dataset.outlineColour         =      coinFocus.dataset.outlineColour;
newCoin.style.outlineOffset           =     "-" + Ws2;
newCoin.dataset.fileInclude           =      coinFocus.dataset.fileInclude;



newCoin.style.position                = "absolute";



newCoin.style.zIndex                  =    coinFocus.style.zIndex - 1       ;
newCoin.style.fontFamily              =    coinFocus.style.fontFamily       ;
newCoin.style.color                   =    coinFocus.style.color            ;
newCoin.style.textAlign               =    coinFocus.style.textAlign        ;
newCoin.style.borderColor             =    coinFocus.style.borderColor      ;
newCoin.style.borderWidth             =    coinFocus.style.borderWidth      ;
newCoin.style.borderStyle             =    coinFocus.style.borderStyle      ;
newCoin.style.backgroundColor         =    coinFocus.style.backgroundColor  ;
newCoin.style.opacity                 =    coinFocus.style.opactiy          ;
newCoin.style.userSelect              =    coinFocus.style.userSelect       ;
newCoin.style.left                    =    parseInt(coinFocus.dataset.left)  +"px";
newCoin.style.top                     =    parseInt(coinFocus.dataset.top)   +"px";
newCoin.style.width                   =    parseInt(coinFocus.dataset.width) +"px";
newCoin.style.height                  =    parseInt(coinFocus.dataset.height)+"px";
newCoin.dataset.width                 =    parseInt(coinFocus.dataset.width) +"px";
newCoin.dataset.height                =    parseInt(coinFocus.dataset.height)+"px";
newCoin.style.transformOrigin         =    coinFocus.style.transformOrigin
newCoin.style.transform               =    coinFocus.style.transform;
newCoin.dataset.scale                 =    coinFocus.dataset.scale;


let scaleFactor = 1;
if (coinFocus.dataset.scale) { scaleFactor = parseFloat(coinFocus.dataset.scale); }


/*    i    */ if (kC ==  73 && cC ==  105) {
coinFocus.style.left      =    parseInt(coinFocus.dataset.left) - parseInt(coinFocus.dataset.width)*scaleFactor + "px";
coinFocus.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
logMessage=`"i"-duplicated at left,       jsName : "${newCoin.dataset.jsName}"`;
}
/*    I    */ if (kC ==  73 && cC == 73) {
coinFocus.style.left      =    document.body.scrollLeft + "px";
coinFocus.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
logMessage=`"I"-duplicated at left edge,  jsName : "${newCoin.dataset.jsName}"`;
}

/*    o    */ if (kC ==  79 && cC ==  111) {
coinFocus.style.left      =    parseInt(coinFocus.dataset.left) + "px";
coinFocus.style.top       =    parseInt(coinFocus.dataset.top) + parseInt(coinFocus.dataset.height)*scaleFactor + "px";
logMessage=`"o"-duplicated below,         jsName : "${newCoin.dataset.jsName}"`;
}
/*    O    */ if (kC ==  79 && cC == 79) {
coinFocus.style.left      =    parseInt(coinFocus.dataset.left) + "px";
coinFocus.style.top       =    parseInt(coinFocus.dataset.top) - parseInt(coinFocus.dataset.height)*scaleFactor + "px";
logMessage=`"O"-duplicated above,         jsName : "${newCoin.dataset.jsName}"`;
}

/*    a    */ if (kC ==  65 && cC ==  97) {
coinFocus.style.left      =    parseInt(coinFocus.dataset.left) + parseInt(coinFocus.dataset.width)*scaleFactor + "px";
coinFocus.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
logMessage=`"a"-duplicated at right,      jsName : "${newCoin.dataset.jsName}"`;
}
/*    A    */ if (kC ==  65 && cC ==  65) {
coinFocus.style.left      =    document.body.scrollLeft + window.innerWidth - parseInt(coinFocus.dataset.width)*scaleFactor + "px";
coinFocus.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
logMessage=`"A"-duplicated at right edge, jsName : "${newCoin.dataset.jsName}"`;
}

/*    D    */ if (kC ==  68 && cC == 68) {
coinFocus.style.left      =    parseInt(coinFocus.dataset.left) + "px";
coinFocus.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
logMessage=`"D"-duplicated in-place,      jsName : "${newCoin.dataset.jsName}"`;
}
}
       if (mode!=5) {
/*    N    */ if (kC ==  78 && cC == 78) {
coinFocus.style.left      =    parseInt(Cur.dataset.left) + "px"      ;
coinFocus.style.top       =    parseInt(Cur.dataset.top)  + "px"      ;
logMessage=`"N"-duplicated at cursor,     jsName : "${newCoin.dataset.jsName}"`;
}
} else if (mode==5) {
/*    N    */ if (kC ==  78 && cC == 78) {
coinFocus.style.left      =    parseInt(Cur.dataset.left)         + "px";
coinFocus.style.top       =    parseInt(Cur.dataset.top)          + "px";
coinFocus.style.width     =    T + "px"                                ;
coinFocus.style.height    =    T + "px"                                ;
curFocus                =    1                                        ;
logMessage=`"N"-insertion at cursor,     jsName : "${newCoin.dataset.jsName}"`;
eM=0;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : right and down ***`;
}
}

/*    N    */ if ((kC ==  78 && cC == 78)||coinFocus!=null) {




/* Finalize into the datasets. */
coinFocus.dataset.left    =    coinFocus.style.left  ;
coinFocus.dataset.top     =    coinFocus.style.top   ;
coinFocus.dataset.width   =    coinFocus.style.width ;
coinFocus.dataset.height  =    coinFocus.style.height;

if (coinFocus!=null) {
newCoin.style.fontSize                = coinFocus.style.fontSize;
} else {
newCoin.style.fontSize                = Ds0;
}

newCoin.dataset.angle                 =        "0";
newCoin.dataset.left                  =        newCoin.style.left;
newCoin.dataset.top                   =        newCoin.style.top;

if (coinFocus!=null) {
newCoin.dataset.coinTrip              =        coinFocus.dataset.coinTrip;
} else {
newCoin.dataset.coinTrip              =        Ts2;
}

if (parseInt(newCoin.style.left)>=0&&parseInt(newCoin.style.top)>=0) {
       if (newCoin.dataset.coinTrip == Ts0) {
coinTrip.sel0[coinTrip.sel0.length] = newCoin;
} else if (newCoin.dataset.coinTrip == Ts1) {
coinTrip.sel1[coinTrip.sel1.length] = newCoin;
} else if (newCoin.dataset.coinTrip == Ts2) {
coinTrip.sel2[coinTrip.sel2.length] = newCoin;
}

newCoin.innerHTML = coinFocus.innerHTML;

       if (showPartName==true) {
newCoin.firstElementChild.innerText = newId;
} else {
newCoin.firstElementChild.innerText = "";
}





newCoin.lastElementChild.dataset.perspective       =    coinFocus.lastElementChild.dataset.perspective;
newCoin.lastElementChild.dataset.rotateX           =    coinFocus.lastElementChild.dataset.rotateX    ;
newCoin.lastElementChild.dataset.rotateY           =    coinFocus.lastElementChild.dataset.rotateY    ;
newCoin.lastElementChild.dataset.rotateZ           =    coinFocus.lastElementChild.dataset.rotateZ    ;
newCoin.lastElementChild.dataset.translateZ        =    coinFocus.lastElementChild.dataset.translateZ ;
newCoin.lastElementChild.style.transformOrigin     =    coinFocus.lastElementChild.style.transformOrigin  ;
newCoin.lastElementChild.style.transform           =    coinFocus.lastElementChild.style.transform    ;


newCoin.anchor = newCoin.firstElementChild;
newCoin.main   = newCoin.lastElementChild;
newCoin.button = newCoin.lastElementChild.firstElementChild;
newCoin.div    = newCoin.lastElementChild.firstElementChild.nextElementSibling;
newCoin.img    = newCoin.lastElementChild.lastElementChild;

utilityLayer0.appendChild(newCoin);

coinFocus1 = newCoin;



coinFocus.remove();
utilityLayer0.appendChild(coinFocus);





readCoins();


curFocus  = 0;
if (coinFocus!=null) {
       if (newCoin.dataset.coinTrip==Ts0) {
newCoin.style.outlineColor = Cs0;
newCoin.style.outlineWidth = Ws0;
newCoin.style.outlineStyle = Ss0;
} else if (newCoin.dataset.coinTrip==Ts1) {
newCoin.style.outlineColor = Cs1;
newCoin.style.outlineWidth = Ws1;
newCoin.style.outlineStyle = Ss1;
} else if (newCoin.dataset.coinTrip==Ts2) {
newCoin.style.outlineColor = Cs2;
newCoin.style.outlineWidth = Ws2;
newCoin.style.outlineStyle = Ss2;
}
}

if (logMessage!="") {
}
}

} else {
}


}
}
