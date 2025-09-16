function pasteOut(keyInfo,originalCoin) {
if (originalCoin!=null) {
let coinRef = originalCoin.cloneNode(true);

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

const idSuffix = Date.now().toString();
newId = 'coin' + idSuffix.slice(idSuffix.length - 5, idSuffix.length);

let
newCoin = document.createElement("div");
newCoin.id                            =      newId;
newCoin.dataset.jsName                =      newId;
newCoin.style.position                = "absolute";

if (coinRef!=null) {

newCoin.dataset.parent                =             coinRef.dataset.jsName;
newCoin.dataset.finishedOutline       =    coinRef.dataset.finishedOutline;
newCoin.dataset.children              =                                 "";
newCoin.dataset.wrapper               =    coinRef.dataset.wrapper        ;
newCoin.style.zIndex                  =    coinRef.style.zIndex           ;
newCoin.style.fontFamily              =    coinRef.style.fontFamily       ;
newCoin.style.color                   =    coinRef.style.color            ;
newCoin.style.textAlign               =    coinRef.style.textAlign        ;
newCoin.style.outlineColor            =    coinRef.style.outlineColor     ;
newCoin.style.outlineWidth            =    coinRef.style.outlineWidth     ;
newCoin.style.outlineStyle            =    coinRef.style.outlineStyle     ;
newCoin.style.backgroundColor         =    coinRef.style.backgroundColor  ;
newCoin.style.opacity                 =    Os0          ;
newCoin.style.userSelect              =    coinRef.style.userSelect       ;
newCoin.style.overflow                =    coinRef.style.overflow         ;
newCoin.style.transformOrigin         =    coinRef.style.transformOrigin  ;
newCoin.style.transform               =    coinRef.style.transform        ;

if (coinRef.dataset.scale) {
newCoin.dataset.scale                 =    coinRef.dataset.scale          ;
}


let scaleFactor = 1;
if (coinFocus!=null) {
scaleFactor = parseFloat(coinFocus.dataset.scale);
}

/*    P    */ if (kC ==  80 && cC ==  80) {
if (curFocus==0&&coinFocus!=null) {
newCoin.style.left      =    parseInt(coinFocus.dataset.left) + parseInt(coinFocus.dataset.width)*scaleFactor + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
modeRouter(e,1);
} else {
newCoin.style.left      =    parseInt(Cur.dataset.left) + "px";
newCoin.style.top       =    parseInt(Cur.dataset.top)  + "px";
modeRouter(e,1);
}


} else /*    p    */ if (kC ==  80 && cC == 112) {
if (curFocus==0&&coinFocus!=null) {
newCoin.style.left      =    parseInt(coinFocus.dataset.left) - parseInt(coinRef.dataset.width)*scaleFactor + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
modeRouter(e,1);
} else {
newCoin.style.left      =    parseInt(Cur.dataset.left) - parseInt(coinRef.style.width)*scaleFactor + "px";
newCoin.style.top       =    parseInt(Cur.dataset.top)  + "px";
modeRouter(e,1);
}
} else {

if (Cur.style.display!="none") {
if (curFocus==0&&coinFocus!=null) {
newCoin.style.left      =    parseInt(coinFocus.dataset.left) + parseInt(coinFocus.dataset.width)*scaleFactor + "px";
newCoin.style.top       =    parseInt(coinFocus.dataset.top)  + "px";
modeRouter(e,1);
} else {
newCoin.style.left      =    parseInt(Cur.dataset.left) + "px";
newCoin.style.top       =    parseInt(Cur.dataset.top)  + "px";
modeRouter(e,1);
}
} else {

newCoin.style.left      =    window.scrollX + "px";
newCoin.style.top       =    window.scrollY + "px";
modeRouter(e,1);



}

}






newCoin.style.width     =    parseInt(coinRef.dataset.width) +"px";
newCoin.style.height    =    parseInt(coinRef.dataset.height)+"px";

/* Finalize into the datasets. */
newCoin.dataset.left    =    parseInt(newCoin.style.left  ) + "px";
newCoin.dataset.top     =    parseInt(newCoin.style.top   ) + "px";
newCoin.dataset.width   =    parseInt(newCoin.style.width ) + "px";
newCoin.dataset.height  =    parseInt(newCoin.style.height) + "px";

newCoin.style.fontSize                = coinRef.style.fontSize;

newCoin.dataset.angle                 =        "0";
newCoin.dataset.left                  =        parseInt(newCoin.style.left) + "px";
newCoin.dataset.top                   =        parseInt(newCoin.style.top ) + "px";
if (coinRef.dataset.coinTrip) {
newCoin.dataset.coinTrip              =        coinRef.dataset.coinTrip;
} else {
newCoin.dataset.coinTrip              =        Ts2;
}




















       if (newCoin.dataset.coinTrip == Ts0) {
coinTrip.sel0[coinTrip.sel0.length] = newCoin;
} else if (newCoin.dataset.coinTrip == Ts1) {
coinTrip.sel1[coinTrip.sel1.length] = newCoin;
} else if (newCoin.dataset.coinTrip == Ts2) {
coinTrip.sel2[coinTrip.sel2.length] = newCoin;
}

newCoin.innerHTML = coinRef.innerHTML;

       if (showPartName==true) {
newCoin.firstElementChild.innerText   = newCoin.dataset.jsName;
} else {
newCoin.firstElementChild.innerText   =                     "";
}

newCoin.anchor = newCoin.firstElementChild;
newCoin.main   = newCoin.lastElementChild;
newCoin.button = newCoin.lastElementChild.firstElementChild;
newCoin.div    = newCoin.lastElementChild.firstElementChild.nextElementSibling;
newCoin.img    = newCoin.lastElementChild.lastElementChild;









utilityLayer0.appendChild(newCoin);
curFocus  = 0;
if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}
coinFocus = coinRef;
coinFocus = newCoin;

recoverColouration();



coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
readCoins();

} else {
}

} else {
}
}
