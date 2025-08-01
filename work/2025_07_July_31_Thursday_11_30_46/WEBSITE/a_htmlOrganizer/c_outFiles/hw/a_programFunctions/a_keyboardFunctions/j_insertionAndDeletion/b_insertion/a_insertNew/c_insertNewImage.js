function insertNewImage(keyInfo,img) {

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
anchor       = document.createElement("a"),
main          = document.createElement("div");

button      = document.createElement("button"),
div = document.createElement("div"),

      anchor.dataset.name = `anchor`;
     button.dataset.name = `button`;
div.dataset.name = `div`;
    img.dataset.name = `img`;
         main.dataset.name = `main`;

      anchor.style = `position:absolute;z-index:200;left:0;top:0;width:100%;height:100%;border:0px;margin:0px;pointer-events:none;font-size:${utilityDivFontSize};             `;

       if (showPartName==true) {
anchor.innerText      =    newId;
} else {
anchor.innerText      =       "";
}

         main.style = `position:absolute;z-index:100;overflow: hidden;left:0;top:0;width:100%;height:100%;border:none;margin:none;pointer-events:none;`;

button.style = buttonInitialStyle;
div.style = `position:absolute;z-index:200;left:0;top:0;width: 100%;height: 100%;box-sizing: border-box;border:none;text-align:justify;pointer-events:none;background-color:transparent;`;

img.style = `position:absolute;z-index:100;left:0;top:0;width:100%;height:100%;border:none;margin:none;pointer-events:none;background-color:${noImageColour};`;
img.alt = ``;
div.style.color  = `rgba(0,0,0,1)`;
div.innerText    = ``;

main.dataset.perspective           =   "1536px";
main.dataset.rotateX               =     "0deg";
main.dataset.rotateY               =     "0deg";
main.dataset.rotateZ               =     "0deg";
main.dataset.translateZ            =      "0px";
main.style.transformOrigin         =   "center";
main.style.transform               =      "perspective(1536px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0deg)";

main.appendChild(button);
main.appendChild(div);
main.appendChild(img);



newCoin.id                            =      newId;
newCoin.dataset.jsName                =      newId;
newCoin.dataset.parent                =         "";
newCoin.dataset.children              =         "";
newCoin.dataset.dragPull              =         "style.transform";
newCoin.dataset.finishedOutline       =     "none";
newCoin.dataset.outlineColour         =     "grey";
newCoin.style.position                = "absolute";

newCoin.style.zIndex                  =   Cur.style.zIndex;

newCoin.dataset.coinTrip=Ts2;
anchor.style.fontFamily              =        Es2;
anchor.style.color                   =        Fs2;
anchor.style.textAlign               =        Gs2;
anchor.style.backgroundColor         =        Bs2;
anchor.style.opacity                 =        Os2;
newCoin.style.transformOrigin         = "top left";
newCoin.style.transform               = "scale(1)";


newCoin.style.userSelect              =        "none";


newCoin.style.left      =    Math.floor(parseInt(e.pageX)/T) * T         + "px";
newCoin.style.top       =    Math.floor(parseInt(e.pageY)/T) * T          + "px";

newCoin.style.width     =    parseInt(img.width) + "px"      ;
newCoin.style.height    =    parseInt(img.height) + "px"     ;
curFocus                =    1                                        ;
logMessage=`"N"-insertion at cursor,     jsName : "${newCoin.dataset.jsName}"`;
eM=0;modeRouter(e,5); 
logMessage=`*** mode 5 - "e" - extendEdge : right and down ***`;


/* Finalize into the datasets. */
newCoin.dataset.left    =    newCoin.style.left  ;
newCoin.dataset.top     =    newCoin.style.top   ;
newCoin.dataset.width   =    newCoin.style.width ;
newCoin.dataset.height  =    newCoin.style.height;


newCoin.dataset.scale                 =        "1";
newCoin.dataset.angle                 =        "0";
newCoin.dataset.left                  =        newCoin.style.left;
newCoin.dataset.top                   =        newCoin.style.top;



coinTrip.sel2[coinTrip.sel2.length] = newCoin;

newCoin.appendChild(anchor);
newCoin.appendChild(main);

newCoin.anchor = newCoin.firstElementChild;
newCoin.main   = newCoin.lastElementChild;
newCoin.button = newCoin.lastElementChild.firstElementChild;
newCoin.div    = newCoin.lastElementChild.firstElementChild.nextElementSibling;
newCoin.img    = newCoin.lastElementChild.lastElementChild;


utilityLayer0.appendChild(newCoin);
curFocus  = 0;
if (coinFocus!=null) {
coinFocus.style.outlineColor = Cs2;
coinFocus.style.outlineWidth = Ws2;
coinFocus.style.outlineStyle = Ss2;
}

coinFocus1=coinFocus;
coinFocus =newCoin;
coinFocus.style.outline = fB;

if (logMessage!="") {
}


}
