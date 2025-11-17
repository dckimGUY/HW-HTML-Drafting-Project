/*** THIS SETS UP THE FUNCTION BLOCKS: READY FOR CODE ***/
var lastNavPoint   =  5;
var buttonStep     = {};
    buttonStep.x   =  0;
    buttonStep.y   =  0;
    buttonStep.num =  0;

ui.textEntry.ref.onblur = function() { buttonStep.x = 0; buttonStep.y = 0; buttonStep.num = 0; }

ui.textEntry.input              = function() {

if (ui.textEntry.ref.value.endsWith("\n")) {
if (hauptMode==0) { enterNavLinkButton(lastNavPoint); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(lastNavPoint); hauptMode = 1; }
ui.textEntry.ref.value = ui.textEntry.ref.value.slice(0,ui.textEntry.ref.value.length - 1);
cycleColoursForward();
}
ui.textEntry.ref.value = ui.textEntry.ref.value.slice(0,17);
localStorage.setItem("textEntry", ui.textEntry.ref.value);
drawButton7();
};

ui.buttonFace.input             = function() { drawButton7(); };
ui.buttonShadow.input           = function() { drawButton7(); };
ui.buttonLeft.input             = function() { drawButton7(); };
ui.buttonTop.input              = function() { drawButton7(); };
ui.buttonRight.input            = function() { drawButton7(); };
ui.buttonBottom.input           = function() { drawButton7(); };
ui.textRight.input              = function() { drawButton7(); };
ui.textBottom.input             = function() { drawButton7(); };
ui.textFace.input               = function() { drawButton7(); };
ui.textHover.input              = function() { drawButton7(); };
ui.textActive.input             = function() { drawButton7(); };
ui.textFocus.input              = function() { drawButton7(); };

ui.buttonLink.input             = function() { drawButton7(); };

ui.buttonFace.change            = function() { localStorage.setItem("buttonizer_buttonFace"  , ui.buttonFace.ref.value  ); };
ui.buttonShadow.change          = function() { localStorage.setItem("buttonizer_buttonShadow", ui.buttonShadow.ref.value); };
ui.buttonLeft.change            = function() { localStorage.setItem("buttonizer_buttonLeft"  , ui.buttonLeft.ref.value  ); };
ui.buttonTop.change             = function() { localStorage.setItem("buttonizer_buttonTop"   , ui.buttonTop.ref.value   ); };
ui.buttonRight.change           = function() { localStorage.setItem("buttonizer_buttonRight" , ui.buttonRight.ref.value ); };
ui.buttonBottom.change          = function() { localStorage.setItem("buttonizer_buttonBottom", ui.buttonBottom.ref.value); };
ui.textRight.change             = function() { localStorage.setItem("buttonizer_textRight"   , ui.textRight.ref.value   ); };
ui.textBottom.change            = function() { localStorage.setItem("buttonizer_textBottom"  , ui.textBottom.ref.value  ); };
ui.textFace.change              = function() { localStorage.setItem("buttonizer_textFace"    , ui.textFace.ref.value    ); };
ui.textHover.change             = function() { localStorage.setItem("buttonizer_textHover"   , ui.textHover.ref.value   ); };
ui.textActive.change            = function() { localStorage.setItem("buttonizer_textActive"  , ui.textActive.ref.value  ); };
ui.textFocus.change             = function() { localStorage.setItem("buttonizer_textFocus"   , ui.textFocus.ref.value   ); };
ui.buttonTooltip.change         = function() { drawButton7(); };

const navigationPoints    = [];
      navigationPoints[7] = ", block: 'start' , inline: 'start' ";
      navigationPoints[8] = ", block: 'start' , inline: 'center'";
      navigationPoints[9] = ", block: 'start' , inline: 'end'   ";

      navigationPoints[4] = ", block: 'center', inline: 'start' ";
      navigationPoints[5] = ", block: 'center', inline: 'center'";
      navigationPoints[6] = ", block: 'center', inline: 'end'   ";

      navigationPoints[1] = ", block: 'end'   , inline: 'start' ";
      navigationPoints[2] = ", block: 'end'   , inline: 'center'";
      navigationPoints[3] = ", block: 'end'   , inline: 'end'   ";

ui.cycleColourLeft.click        = function() { cycleColoursForward();  drawButton7(); };
ui.cycleColoursRight.click      = function() { cycleColoursBackward(); drawButton7(); };
ui.navPoint7.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(7); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(7); hauptMode = 1; }; lastNavPoint = 7; };
ui.navPoint8.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(8); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(8); hauptMode = 1; }; lastNavPoint = 8; };
ui.navPoint9.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(9); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(9); hauptMode = 1; }; lastNavPoint = 9; };
ui.navPoint4.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(4); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(4); hauptMode = 1; }; lastNavPoint = 4; };
ui.navPoint5.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(5); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(5); hauptMode = 1; }; lastNavPoint = 5; };
ui.navPoint6.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(6); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(6); hauptMode = 1; }; lastNavPoint = 6; };
ui.navPoint1.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(1); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(1); hauptMode = 1; }; lastNavPoint = 1; };
ui.navPoint2.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(2); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(2); hauptMode = 1; }; lastNavPoint = 2; };
ui.navPoint3.click              = function() { drawButton7(); if (hauptMode==0) { enterNavLinkButton(3); } else if (hauptMode==1) { hauptMode = 0; enterNavLinkButton(3); hauptMode = 1; }; lastNavPoint = 3; };

let buttonLinkValue = "";

function enterButton() {
insertNewCoin([null,78,110]);
coinFocus.style.left    = parseInt(window.scrollX) + "px";
coinFocus.dataset.left  = parseInt(window.scrollX) + "px";
coinFocus.style.top     = parseInt(window.scrollY) + "px";
coinFocus.dataset.top   = parseInt(window.scrollY) + "px";
coinFocus.style.width    = ui.canvasOutput2.ref.width * 4 +  "px";
coinFocus.dataset.width  = ui.canvasOutput2.ref.width * 4 +  "px";
coinFocus.style.height   = ui.canvasOutput2.ref.height * 4 + "px";
coinFocus.dataset.height = ui.canvasOutput2.ref.height * 4 + "px";
coinFocus.div.innerHTML = buttonHTML1 + buttonLinkValue + buttonHTML2;
flipAnchorZ([,,,false,]);
coinFocus.div.lastElementChild.style.width  = "100%";
coinFocus.div.lastElementChild.style.height = "100%";
coinFocus.div.lastElementChild.style.left   =  "0px";
coinFocus.div.lastElementChild.style.backgroundSize = "100% 100%";
}







function enterNavLinkButton(navPoint) {
buttonLinkValue = "";
if (ui.buttonLink.ref.value != "") {
buttonLinkValue = "location.href = '" + ui.buttonLink.ref.value + "';";
enterButton(); return;
}
let navLinkEntry = "";
if (coinFocus!=null) {
const targetButtonId = (Array.from(coinFocus.querySelectorAll("[id]")).map(e => e.id).find(id => /^button\d{13}$/.test(id))) || "";
if (targetButtonId.startsWith("button")) {
navLinkEntry = `(function(){try{document.getElementById('${targetButtonId}').scrollIntoView({ behavior:'smooth'${navigationPoints[navPoint]} }); document.getElementById('${targetButtonId}').focus(); }catch{}})()`;
} else {
navLinkEntry = `(function(){try{document.getElementById('${coinFocus.id}').scrollIntoView({ behavior:'smooth'${navigationPoints[navPoint]} }); document.getElementById('${coinFocus.id}').focus(); }catch{}})()`;
}
} else {
navLinkEntry = ``;
}
insertNewCoin([null,78,110]);
coinFocus.style.left    = parseInt(window.scrollX) + (buttonStep.x * 304) + "px";
coinFocus.dataset.left  = parseInt(window.scrollX) + (buttonStep.x * 304) + "px";
coinFocus.style.top     = parseInt(window.scrollY) + (buttonStep.y * 112) + "px";
coinFocus.dataset.top   = parseInt(window.scrollY) + (buttonStep.y * 112) + "px";
coinFocus.style.width    = ui.canvasOutput2.ref.width  * 2 + "px";
coinFocus.dataset.width  = ui.canvasOutput2.ref.width  * 2 + "px";
coinFocus.style.height   = ui.canvasOutput2.ref.height * 2 + "px";
coinFocus.dataset.height = ui.canvasOutput2.ref.height * 2 + "px";
coinFocus.div.innerHTML = buttonHTML1 + navLinkEntry + buttonHTML2;
flipAnchorZ([,,,false,]);
coinFocus.div.lastElementChild.style.width  = "100%";
coinFocus.div.lastElementChild.style.height = "100%";
coinFocus.div.lastElementChild.style.left   =  "0px";
coinFocus.div.lastElementChild.style.backgroundSize = "100% 100%";
buttonStep.y++;
if (buttonStep.y%10==0) { buttonStep.y = 0; buttonStep.x++; }
}






/* READ THE COLOURS AND TEXT BACK INTO THE BUTTON SELECTOR SYSTEM */
ui.readButtonBack.click          = function() {
if (coinFocus!=null) {
const targetButtonId = (Array.from(coinFocus.querySelectorAll("[id]")).map(e => e.id).find(id => /^button\d{13}$/.test(id))) || "";
if (targetButtonId!="") {
const buttonDataArray = document.getElementById(targetButtonId).dataset.buttonData.split(",");
ui.buttonFace.ref.value       =   buttonDataArray[ 0];
ui.buttonShadow.ref.value     =   buttonDataArray[ 1];
ui.buttonLeft.ref.value       =   buttonDataArray[ 2];
ui.buttonTop.ref.value        =   buttonDataArray[ 3];
ui.buttonRight.ref.value      =   buttonDataArray[ 4];
ui.buttonBottom.ref.value     =   buttonDataArray[ 5];
ui.textRight.ref.value        =   buttonDataArray[ 6];
ui.textBottom.ref.value       =   buttonDataArray[ 7];
ui.textFace.ref.value         =   buttonDataArray[ 8];
ui.textHover.ref.value        =   buttonDataArray[ 9];
ui.textActive.ref.value       =   buttonDataArray[10];
ui.textFocus.ref.value        =   buttonDataArray[11];
sendColoursToStorage();
drawButton7();
}
}
};

/* THIS SETS UP LOCAL STORAGE */
if (localStorage.getItem("textEntry"              ))  { ui.textEntry.ref.value     = localStorage.getItem("textEntry"              ); }
if (localStorage.getItem("buttonizer_buttonFace"  ))  { ui.buttonFace.ref.value    = localStorage.getItem("buttonizer_buttonFace"  ); }
if (localStorage.getItem("buttonizer_buttonShadow"))  { ui.buttonShadow.ref.value  = localStorage.getItem("buttonizer_buttonShadow"); }
if (localStorage.getItem("buttonizer_buttonLeft"  ))  { ui.buttonLeft.ref.value    = localStorage.getItem("buttonizer_buttonLeft"  ); }
if (localStorage.getItem("buttonizer_buttonTop"   ))  { ui.buttonTop.ref.value     = localStorage.getItem("buttonizer_buttonTop"   ); }
if (localStorage.getItem("buttonizer_buttonRight" ))  { ui.buttonRight.ref.value   = localStorage.getItem("buttonizer_buttonRight" ); }
if (localStorage.getItem("buttonizer_buttonBottom"))  { ui.buttonBottom.ref.value  = localStorage.getItem("buttonizer_buttonBottom"); }
if (localStorage.getItem("buttonizer_textRight"   ))  { ui.textRight.ref.value     = localStorage.getItem("buttonizer_textRight"   ); }
if (localStorage.getItem("buttonizer_textBottom"  ))  { ui.textBottom.ref.value    = localStorage.getItem("buttonizer_textBottom"  ); }
if (localStorage.getItem("buttonizer_textFace"    ))  { ui.textFace.ref.value      = localStorage.getItem("buttonizer_textFace"    ); }
if (localStorage.getItem("buttonizer_textHover"   ))  { ui.textHover.ref.value     = localStorage.getItem("buttonizer_textHover"   ); }
if (localStorage.getItem("buttonizer_textActive"  ))  { ui.textActive.ref.value    = localStorage.getItem("buttonizer_textActive"  ); }
if (localStorage.getItem("buttonizer_textFocus"   ))  { ui.textFocus.ref.value     = localStorage.getItem("buttonizer_textFocus"   ); }

ui.yourButtonIsHere.ref.addEventListener("click", function() { ui.textEntry.ref.focus(); });

function sendColoursToStorage() {
localStorage.setItem("buttonizer_buttonFace"  , ui.buttonFace.ref.value  );
localStorage.setItem("buttonizer_buttonShadow", ui.buttonShadow.ref.value);
localStorage.setItem("buttonizer_buttonLeft"  , ui.buttonLeft.ref.value  );
localStorage.setItem("buttonizer_buttonTop"   , ui.buttonTop.ref.value   );
localStorage.setItem("buttonizer_buttonRight" , ui.buttonRight.ref.value );
localStorage.setItem("buttonizer_buttonBottom", ui.buttonBottom.ref.value);
localStorage.setItem("buttonizer_textRight"   , ui.textRight.ref.value   );
localStorage.setItem("buttonizer_textBottom"  , ui.textBottom.ref.value  );
localStorage.setItem("buttonizer_textFace"    , ui.textFace.ref.value    );
localStorage.setItem("buttonizer_textHover"   , ui.textHover.ref.value   );
localStorage.setItem("buttonizer_textActive"  , ui.textActive.ref.value  );
localStorage.setItem("buttonizer_textFocus"   , ui.textFocus.ref.value   );
}

function cycleColoursBackward() {
const colourSwap           =  ui.textFocus.ref.value   ;
ui.textFocus.ref.value     =  ui.textActive.ref.value  ;
ui.textActive.ref.value    =  ui.textHover.ref.value   ;
ui.textHover.ref.value     =  ui.textFace.ref.value    ;
ui.textFace.ref.value      =  ui.textBottom.ref.value  ;
ui.textBottom.ref.value    =  ui.textRight.ref.value   ;
ui.textRight.ref.value     =  ui.buttonBottom.ref.value;
ui.buttonBottom.ref.value  =  ui.buttonRight.ref.value ;
ui.buttonRight.ref.value   =  ui.buttonTop.ref.value   ;
ui.buttonTop.ref.value     =  ui.buttonLeft.ref.value  ;
ui.buttonLeft.ref.value    =  ui.buttonShadow.ref.value;
ui.buttonShadow.ref.value  =  ui.buttonFace.ref.value  ;
ui.buttonFace.ref.value    =  colourSwap               ;
sendColoursToStorage();
}

function cycleColoursForward() {
const colourSwap           = ui.buttonFace.ref.value  ; 
ui.buttonFace.ref.value    = ui.buttonShadow.ref.value; 
ui.buttonShadow.ref.value  = ui.buttonLeft.ref.value  ; 
ui.buttonLeft.ref.value    = ui.buttonTop.ref.value   ; 
ui.buttonTop.ref.value     = ui.buttonRight.ref.value ; 
ui.buttonRight.ref.value   = ui.buttonBottom.ref.value; 
ui.buttonBottom.ref.value  = ui.textRight.ref.value   ; 
ui.textRight.ref.value     = ui.textBottom.ref.value  ; 
ui.textBottom.ref.value    = ui.textFace.ref.value    ; 
ui.textFace.ref.value      = ui.textHover.ref.value   ; 
ui.textHover.ref.value     = ui.textActive.ref.value  ; 
ui.textActive.ref.value    = ui.textFocus.ref.value   ; 
ui.textFocus.ref.value     = colourSwap;
sendColoursToStorage();
}

const hexToRGB=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7,),16)];
var lastCall = 0;

function drawButton7(){

/* THROTTLE THE CALLS */
if (lastCall !=0 && performance.now() - lastCall < 50) return;
lastCall = performance.now();


const buttonData = `${ui.buttonFace.ref.value},${ui.buttonShadow.ref.value},${ui.buttonLeft.ref.value},${ui.buttonTop.ref.value},${ui.buttonRight.ref.value},${ui.buttonBottom.ref.value},${ui.textRight.ref.value},${ui.textBottom.ref.value},${ui.textFace.ref.value},${ui.textHover.ref.value},${ui.textActive.ref.value},${ui.textFocus.ref.value}`;


WbuttonContext = ui.canvasOutput3.ref.getContext("2d", {alpha: true, willReadFrequently: true});
XbuttonContext = ui.canvasOutput4.ref.getContext("2d", {alpha: true, willReadFrequently: true});
YbuttonContext = ui.canvasOutput1.ref.getContext("2d", {alpha: true, willReadFrequently: true});
ZbuttonContext = ui.canvasOutput2.ref.getContext("2d", {alpha: true, willReadFrequently: true});

/* THE CONDITION WILL HELP GIVE US A SQUARE BUTTON IN CASE OF TWO DIGITS */
if (ui.textEntry.ref.value.length > 2) {
ui.canvasOutput1.ref.width = (ui.textEntry.ref.value.length * 16) + 40;
ui.canvasOutput2.ref.width = (ui.textEntry.ref.value.length * 16) + 40;
ui.canvasOutput3.ref.width = (ui.textEntry.ref.value.length * 16) + 40;
ui.canvasOutput4.ref.width = (ui.textEntry.ref.value.length * 16) + 40;

} else {
ui.canvasOutput1.ref.width = 56;
ui.canvasOutput2.ref.width = 56;
ui.canvasOutput3.ref.width = 56;
ui.canvasOutput4.ref.width = 56;

}

let twoCharDeduction = 0;
if (ui.textEntry.ref.value.length == 2) { twoCharDeduction = 8; }



ZbuttonContext.clearRect(0,0,ui.canvasOutput2.ref.width,56);

ZbuttonContext.drawImage(ui.buttonStyle[ui.buttonStyle.names[ui.buttonStyle.chosen]].left, 0,0);

for (let j = 0; j < ui.textEntry.ref.value.length; j++) {
ZbuttonContext.drawImage(ui.buttonStyle[ui.buttonStyle.names[ui.buttonStyle.chosen]].center, 22 + (j * 16),0);
}

if (ui.textEntry.ref.value.length == 0) { ZbuttonContext.drawImage(ui.buttonStyle[ui.buttonStyle.names[ui.buttonStyle.chosen]].center, 22,0); }

ZbuttonContext.drawImage(ui.buttonStyle[ui.buttonStyle.names[ui.buttonStyle.chosen]].right,ui.canvasOutput2.ref.width - 18,0);

swapColours("#FF0000",ui.buttonFace.ref.value  , ZbuttonContext);
swapColours("#FFFF00",ui.buttonShadow.ref.value, ZbuttonContext);
swapColours("#FF00FF",ui.buttonLeft.ref.value  , ZbuttonContext);
swapColours("#00FF00",ui.buttonTop.ref.value   , ZbuttonContext);
swapColours("#0000FF",ui.buttonRight.ref.value , ZbuttonContext);
swapColours("#00FFFF",ui.buttonBottom.ref.value, ZbuttonContext);

YbuttonContext.clearRect(0,0,312,56);

YbuttonContext.font="400 32px dckimPixelMono";
YbuttonContext.textBaseline="top";

YbuttonContext.beginPath();
YbuttonContext.fillStyle="#4d894d";
YbuttonContext.fillText(ui.textEntry.ref.value,21 - twoCharDeduction,13);
YbuttonContext.stroke();
clean(hexToRGB("#4d894d")[0], hexToRGB("#4d894d")[1], hexToRGB("#4d894d")[2]);
ZbuttonContext.drawImage(ui.canvasOutput1.ref,0,0);
YbuttonContext.clearRect(0,0,312,56);

YbuttonContext.beginPath();
YbuttonContext.fillStyle="#4d894d";
YbuttonContext.fillText(ui.textEntry.ref.value,21 - twoCharDeduction,14);
YbuttonContext.stroke();
clean(hexToRGB("#4d894d")[0], hexToRGB("#4d894d")[1], hexToRGB("#4d894d")[2]);
ZbuttonContext.drawImage(ui.canvasOutput1.ref,0,0);
YbuttonContext.clearRect(0,0,312,56);

YbuttonContext.beginPath();
YbuttonContext.fillStyle="#6ea66e";
YbuttonContext.fillText(ui.textEntry.ref.value,20 - twoCharDeduction,14);
YbuttonContext.stroke();
clean(hexToRGB("#6ea66e")[0], hexToRGB("#6ea66e")[1], hexToRGB("#6ea66e")[2]);
ZbuttonContext.drawImage(ui.canvasOutput1.ref,0,0);
YbuttonContext.clearRect(0,0,312,56);

YbuttonContext.beginPath();
YbuttonContext.fillStyle="#540707";
YbuttonContext.fillText(ui.textEntry.ref.value,20 - twoCharDeduction,13);
YbuttonContext.stroke();
clean(hexToRGB("#540707")[0], hexToRGB("#540707")[1], hexToRGB("#540707")[2]);
ZbuttonContext.drawImage(ui.canvasOutput1.ref,0,0);
YbuttonContext.clearRect(0,0,312,56);

function clean(R,G,B) {
let d = YbuttonContext.getImageData(0,0,ui.canvasOutput1.ref.width,ui.canvasOutput1.ref.height);
let p = d.data;
for (let i = 0; i < p.length; i += 4) { if ( p[i]==R&&p[i+1]==G&&p[i+2]==B) { p[i] =R; p[i+1] =G; p[i+2] =B;p[i+3]= 255; } else { p[i]=p[i+1]=p[i+2]=p[i+3]=0; } }
YbuttonContext.putImageData(d,0,0);
}

function swapColours(colourFrom,colourTo,context) {
let d = context.getImageData(0,0,ui.canvasOutput2.ref.width,ui.canvasOutput2.ref.height);
let p = d.data;
for (let i = 0; i < p.length; i += 4) {
if (
p[i  ]==hexToRGB(colourFrom)[0]&&
p[i+1]==hexToRGB(colourFrom)[1]&&
p[i+2]==hexToRGB(colourFrom)[2]
)
{
p[i  ] =hexToRGB(colourTo)[0];
p[i+1] =hexToRGB(colourTo)[1];
p[i+2] =hexToRGB(colourTo)[2];
p[i+3]= 255;
}
}
context.putImageData(d,0,0);
}

swapColours("#540707", ui.textFace.ref.value,   ZbuttonContext);
swapColours("#4d894d", ui.textRight.ref.value,  ZbuttonContext);
swapColours("#6ea66e", ui.textBottom.ref.value, ZbuttonContext);

YbuttonContext.drawImage(ui.canvasOutput2.ref, 0, 0); swapColours(ui.textFace.ref.value,     ui.textHover.ref.value,  YbuttonContext);
WbuttonContext.drawImage(ui.canvasOutput2.ref,-2, 2); swapColours(ui.textFace.ref.value,     ui.textActive.ref.value, WbuttonContext);
WbuttonContext.clearRect(0,55,1,1);
XbuttonContext.drawImage(ui.canvasOutput2.ref, 0, 0); swapColours(ui.buttonShadow.ref.value, ui.textFocus.ref.value,  XbuttonContext);

const uniqueIdentifier        = "button" + Date.now();
const constructedButtonWidth  = ui.canvasOutput2.ref.width ;
const constructedButtonHeight = ui.canvasOutput2.ref.height;

buttonHTML1 = `
<style>
.${uniqueIdentifier} {
position: absolute;
top:     0px;
border:  0px;
margin:  0px;
padding: 0px;
width    : ${constructedButtonWidth}px;
height   : ${constructedButtonHeight}px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background-color: transparent;
}
.${uniqueIdentifier}        { background-image: url("${ui.canvasOutput2.ref.toDataURL("image/png")}"); outline: none; }
.${uniqueIdentifier}:focus  { background-image: url("${ui.canvasOutput4.ref.toDataURL("image/png")}"); outline: none; }
.${uniqueIdentifier}:hover  { background-image: url("${ui.canvasOutput1.ref.toDataURL("image/png")}"); outline: none; }
.${uniqueIdentifier}:active { background-image: url("${ui.canvasOutput3.ref.toDataURL("image/png")}"); outline: none; }
</style>
<button id="${uniqueIdentifier}" class="${uniqueIdentifier}" title="${ui.buttonTooltip.ref.value}" style="right: -152px;" data-button-data="${buttonData}" onclick="`;

buttonHTML2 = `"></button>`;

ui.yourButtonIsHere.ref.innerHTML = buttonHTML1 + buttonHTML2;
;

WbuttonContext.clearRect(0,0,312,56);
XbuttonContext.clearRect(0,0,312,56);
YbuttonContext.clearRect(0,0,312,56);
ZbuttonContext.clearRect(0,0,312,56);

}