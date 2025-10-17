function enterNewPartFromMouseInput(mouseInfo) {

const newXvalue = parseInt(P.style.left) > parseInt(S.style.left) ? parseInt(S.style.left) + O/2 : parseInt(P.style.left) + O/2;
const newYvalue = parseInt(P.style.top)  > parseInt(S.style.top)  ? parseInt(S.style.top)  + O/2 : parseInt(P.style.top)  + O/2;
const newWidth  = Math.abs(parseInt(P.style.left) - parseInt(S.style.left));
const newHeight = Math.abs(parseInt(P.style.top)  - parseInt(S.style.top));

if ((newWidth>=edgeQ*2&&newHeight>=edgeQ*2)&&(newWidth>=T&&newHeight>=T)&&(mousedown.lastButton==0||mousedown.lastButton==1)) {



const idSuffix = Date.now().toString();
newId = 'coin' + idSuffix.slice(idSuffix.length - 5, idSuffix.length);
let logMessage = "";

let
newCoin          = document.createElement("div"),
anchor       = document.createElement("a"),
main          = document.createElement("div"),

button      = document.createElement("button"),
div = document.createElement("div"),
img     = document.createElement("img");

      anchor.dataset.name = `anchor`;
     button.dataset.name = `button`;
div.dataset.name = `div`;
    img.dataset.name = `img`;
         main.dataset.name = `main`;
      main.style.transform = ``;

      anchor.style = `position:absolute;z-index:200;left:0;top:0;width:100%;height:100%;border:0px;margin:0px;pointer-events:none;font-size:${utilityDivFontSize};             `;

anchor.innerText      =    "";

         main.style = `position:absolute;z-index:100;overflow: hidden;left:0;top:0;width:100%;height:100%;border:none;margin:none;pointer-events:none;`;

     button.style = buttonInitialStyle;
div.style = `position:absolute;z-index:200;left:0;top:0;width: 100%;height: 100%;box-sizing: border-box;border:none;text-align:justify;pointer-events:none;background-color:transparent;`;

    img.style = `position:absolute;display:none;z-index:100;left:0;top:0;width:100%;height:100%;border:none;margin:none;pointer-events:none;background-color:${noImageColour};`;
div.style.color  = `rgba(0,0,0,1)`;
div.innerText    = ``;
img.alt = ``;

main.appendChild(button);
main.appendChild(div);
main.appendChild(img);



newCoin.id                            =      newId;
newCoin.dataset.jsName                =      newId;
newCoin.dataset.dragPull              =      "backgroundColor";
newCoin.dataset.parent                =         "";
newCoin.dataset.children              =         "";
newCoin.dataset.scale              =        "1";
newCoin.dataset.finishedOutline       =     "none";
newCoin.dataset.outlineColour         =     "grey";
newCoin.style.outlineOffset           =     "-" + Ws2;
newCoin.style.position                = "absolute";

       if (utilityLayer0.children.length!=0) {
newCoin.style.zIndex                  =   findZextrema().highestGlobalZ;
} else {
newCoin.style.zIndex                  =   findZextrema().highestGlobalZ + tricolourEchelon;
}


anchor.style.fontFamily              =        Es2;
anchor.style.color                   =        Fs2;
anchor.style.textAlign               =        Gs2;
anchor.style.backgroundColor         =        Bs2;
anchor.style.opacity                 =        Os2;




main.dataset.perspective           =   "1536px";
main.dataset.rotateX               =        "0";
main.dataset.rotateY               =        "0";
main.dataset.rotateZ               =        "0";
main.dataset.translateZ            =        "0";
main.style.transformOrigin         =   "center";
main.style.transform               =      "perspective(1536px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0deg)";



newCoin.style.userSelect              =        "none";
newCoin.style.transformOrigin         = "top left";
newCoin.style.transform               = "scale(1)";








if (newXvalue >=0) {
newCoin.style.left = newXvalue + "px";
newCoin.style.width = newWidth  + "px";
} else {
newCoin.style.left = "0px";
newCoin.style.width = newWidth  + newXvalue + "px";
}
if (newYvalue >=0) {
newCoin.style.top  = newYvalue + "px";
newCoin.style.height = newHeight + "px";
} else {
newCoin.style.top  = "0px";
newCoin.style.height = newHeight + newYvalue + "px";
}




newCoin.dataset.left      =    newCoin.style.left;
newCoin.dataset.top       =    newCoin.style.top;
newCoin.dataset.width     =    newCoin.style.width;
newCoin.dataset.height    =    newCoin.style.height;

logMessage=`- - - insertion from mouse input, jsName : "${newCoin.dataset.jsName}"`;





newCoin.dataset.coinTrip = Ts2;
coinTrip.sel2[coinTrip.sel2.length] = newCoin;

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


if (parseInt(newCoin.style.width) < 8 || parseInt(newCoin.style.height) < 8) { return; }

utilityLayer0.appendChild(newCoin);

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



coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;

coinFocus1=coinFocus;
}

coinFocus =newCoin;
curFocus  = 0;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
if (logMessage!="") {
}


} else {

rdots();

}


}
