function flipPhantomLair() {
if (utilityLayer0.children.length != 0 || thePhantomLair.children.length != 0) {
let middleman = document.createElement("div");
middleman.innerHTML      = thePhantomLair.innerHTML;
thePhantomLair.innerHTML = utilityLayer0.innerHTML;
utilityLayer0.innerHTML  = middleman.innerHTML;
singlePasteBuffer.value = [];
for (let j = 0; j < thePhantomLair.children.length; j++) {
singlePasteBuffer.value[j] = thePhantomLair.children[j];
}
if (utilityLayer0.children.length != 0) {
coinFocus = utilityLayer0.children[0];
}
readCoins(); recoverColouration();


buzzWord(2,"flip phantomLair",64,document.getElementById("coin72275").value,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32);

if (lastFlow == "colour") reflowPerTrip();
if (lastFlow == "global") reflowGlobal(rev,0);

focusFirst();
redraw();
drawLiv();
loadSidebar1();
updateInfoShelf();
}
}













function toggleSidebar1() {
if (document.getElementById("sidebar").style.left == "-148px") {
document.getElementById("sidebar").style.left = "0px";
localStorage.setItem("sidebar", "0px");
} else {
document.getElementById("sidebar").style.left = "-148px";
localStorage.setItem("sidebar", "-148px");
}
}


if (localStorage.getItem("sidebar")) {
document.getElementById("sidebar").style.left = localStorage.getItem("sidebar");
}












function loadSidebar1() {
const itemSystem = document.getElementById("itemSystem");
itemSystem.innerHTML = "";
const topPad = document.createElement("div");
      topPad.classList = "topPad";
      topPad.dataset.scroll = "false";
const bottomPad = document.createElement("div");
      bottomPad.classList = "bottomPad";
      bottomPad.dataset.scroll = "false";
itemSystem.append(topPad);
for (let j = 0; j < utilityLayer0.children.length; j++) {
const container = document.createElement("div");
      container.classList = "coinItemContainer";
      container.dataset.scroll = "false";
const itemButton = document.createElement("button");
      itemButton.classList = "coinItemList";
      itemButton.dataset.scroll = "false";
try {
if (utilityLayer0.children[j].lastElementChild.firstElementChild.firstChild &&
    utilityLayer0.children[j].lastElementChild.firstElementChild.firstChild.dataset &&
    utilityLayer0.children[j].lastElementChild.firstElementChild.firstChild.dataset.coinTrip) {
      itemButton.style.textDecorationLine="underline";
}
} catch {  }

      itemButton.setAttribute("onclick", `
focusSet(document.getElementById('${utilityLayer0.children[j].id}'));
if (event.shiftKey) {
document.getElementById('${utilityLayer0.children[j].id}').scrollIntoView({behavior:'auto', block: 'center', inline: 'center'});
}
updateInfoShelf();
`);




      itemButton.title = JSON.stringify([utilityLayer0.children[j].id]);




      itemButton.innerText = `${utilityLayer0.children[j].id}`;
const deletionButton = document.createElement("button");
      deletionButton.classList = "coinDelete";
      deletionButton.dataset.scroll = "false";
      deletionButton.setAttribute("onclick", `
coinFocus1 = coinFocus;
coinFocus = document.getElementById('${utilityLayer0.children[j].id}');
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
deleteCoin([,88,120]);
updateInfoShelf();
if (coinFocus != null) { coinFocus.scrollIntoView({behavior:'auto', block: 'center', inline: 'center'});
}
`);
      deletionButton.innerText = "x";
if (coinFocus != null) {
       if (utilityLayer0.children[j].dataset.coinTrip == "0") {
itemButton.style.backgroundColor = coinColour0;
} else if (utilityLayer0.children[j].dataset.coinTrip == "1") {
itemButton.style.backgroundColor = coinColour1;
} else if (utilityLayer0.children[j].dataset.coinTrip == "2") {
itemButton.style.backgroundColor = coinColour2;
}
}
if (coinFocus != null && utilityLayer0.children[j] == coinFocus) {
      itemButton.classList = "coinItemList coinItemSelected";
      itemButton.style.outlineColor = selectedColour;
}
container.appendChild(itemButton);
container.appendChild(deletionButton);
itemSystem.appendChild(container);
}
itemSystem.append(bottomPad);






const phantomLair = document.getElementById("phantomLair");
phantomLair.innerHTML = "";


thePhantomLair.innerHTML = "";

for (let j = 0; j < singlePasteBuffer.value.length; j++) {

thePhantomLair.appendChild(singlePasteBuffer.value[j]);


const container = document.createElement("div");
      container.classList = "coinItemContainer";
      container.dataset.lair = "true";
const itemButton = document.createElement("button");
      itemButton.classList = "phantomItemList";
      itemButton.dataset.lair = "true";
      itemButton.setAttribute("onclick", `
pasteSingle();
if (coinFocus != null) { coinFocus.scrollIntoView({behavior:'auto', block: 'center', inline: 'center'}); }
updateInfoShelf();
`);
      itemButton.innerText = `${singlePasteBuffer.value[j].id}`;
if (coinFocus != null) {
       if (singlePasteBuffer.value[j].dataset.coinTrip == "0") {
//itemButton.style.backgroundColor = coinColour0;
} else if (singlePasteBuffer.value[j].dataset.coinTrip == "1") {
//itemButton.style.backgroundColor = coinColour1;
} else if (singlePasteBuffer.value[j].dataset.coinTrip == "2") {
//itemButton.style.backgroundColor = coinColour2;
}
itemButton.style.backgroundColor = "lightgrey";
}
if (coinFocus != null && singlePasteBuffer.value[j] == coinFocus) {
      itemButton.classList = "coinItemList coinItemSelected";
      itemButton.style.outlineColor = selectedColour;
}
container.appendChild(itemButton);
phantomLair.prepend(container);
}

for (let j = 0; j < phantomLair.children.length; j++) {
      phantomLair.children[j].style.opacity = 0.65 - j/16;
if (j == 0) {
      phantomLair.children[j].style.opacity = 0.95;
}
}














const container = document.createElement("div");
      container.classList = "coinItemContainer";

const itemButton0 = document.createElement("button");
      itemButton0.classList = "addItemList";
      itemButton0.dataset.scroll = "false";
      itemButton0.style.backgroundColor = coinColour2;
      itemButton0.innerText = "";
      itemButton0.setAttribute("onclick", `
if ( event.shiftKey || event.ctrlKey) {
copyToClipboard(this.dataset.idNames);
buzzWord(0,'GROUP',128,'magenta',200,200,25,'top','','',event);
} else if (!event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "2";
readCoins(); recoverColouration();
if (lastFlow == "global") {
reflowGlobal(rev,0)
} else if (lastFlow == "colour") {
reflowPerTrip();
}
setTimeout(() => {
loadSidebar1();
updateInfoShelf();
}, 10);
}
`);
const itemButton1 = document.createElement("button");
      itemButton1.classList = "addItemList";
      itemButton1.dataset.scroll = "false";
      itemButton1.style.backgroundColor = coinColour1;
      itemButton1.innerText = "";
      itemButton1.setAttribute("onclick", `
if ( event.shiftKey || event.ctrlKey) {
copyToClipboard(this.dataset.idNames);
buzzWord(0,'GROUP',128,'magenta',200,200,25,'top','','',event);
} else if (!event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "1";
readCoins(); recoverColouration();
if (lastFlow == "global") {
reflowGlobal(rev,0)
} else if (lastFlow == "colour") {
reflowPerTrip();
}
setTimeout(() => {
loadSidebar1();
updateInfoShelf();
}, 10);
}
`);
const itemButton2 = document.createElement("button");
      itemButton2.classList = "addItemList";
      itemButton2.dataset.scroll = "false";
      itemButton2.style.backgroundColor = coinColour0;
      itemButton2.innerText = "";
      itemButton2.setAttribute("onclick", `
if ( event.shiftKey || event.ctrlKey) {
copyToClipboard(this.dataset.idNames);
buzzWord(0,'GROUP',128,'magenta',200,200,25,'top','','',event);
} else if (!event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "0";
readCoins(); recoverColouration();
if (lastFlow == "global") {
reflowGlobal(rev,0)
} else if (lastFlow == "colour") {
reflowPerTrip();
}
setTimeout(() => {
loadSidebar1();
updateInfoShelf();
}, 10);
}
`);

let  pink = [];
let white = [];
let  blue = [];

  for (let j = 0; j < utilityLayer0.children.length; j++) {
                  if (utilityLayer0.children[j].dataset.coinTrip == "0") {
white[white.length] = utilityLayer0.children[j].id;
           } else if (utilityLayer0.children[j].dataset.coinTrip == "1") {
 pink[pink.length]  = utilityLayer0.children[j].id;
           } else if (utilityLayer0.children[j].dataset.coinTrip == "2") {
 blue[blue.length]  = utilityLayer0.children[j].id;
}
}

/* Pink */
itemButton1.title           = `${JSON.stringify(pink)}`;
itemButton1.dataset.idNames = `${JSON.stringify(pink)}`;
/* White */
itemButton2.title           = `${JSON.stringify(white)}`;
itemButton2.dataset.idNames = `${JSON.stringify(white)}`;
/* Blue */
itemButton0.title           = `${JSON.stringify(blue)}`;
itemButton0.dataset.idNames = `${JSON.stringify(blue)}`;




container.appendChild(itemButton1);
container.appendChild(itemButton2);
container.appendChild(itemButton0);
const addSystem = document.getElementById("addSystem");
addSystem.innerHTML = "";
addSystem.appendChild(container);




for (let j = 0; j < itemSystem.children.length; j++) {

try {
if (itemSystem.children[j].innerText.includes(coinFocus.id.toString())) {
itemSystem.children[j].scrollIntoView({behavior:'auto', block: 'center', inline: 'center'});
}
} catch {}
}




}














ui.xrayGrey.click                = function() { if (xrayVision=="true") { xrayVision="false"; localStorage.setItem("xrayVision", "false"); } else { xrayVision="true"; localStorage.setItem("xrayVision", "true"); } };
ui.xrayMagenta.click             = function() { if (xrayVision=="true") { xrayVision="false"; localStorage.setItem("xrayVision", "false"); } else { xrayVision="true"; localStorage.setItem("xrayVision", "true"); } };
ui.xrayCyan.click                = function() { if (xrayVision=="true") { xrayVision="false"; localStorage.setItem("xrayVision", "false"); } else { xrayVision="true"; localStorage.setItem("xrayVision", "true"); } };

ui.partY.input                   = function() { 
       if (ui.partY.ref.value.includes("-")||ui.partY.ref.value.includes(":")) { 
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/-/g, "");
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/:/g, "");
updateInfoShelf();redraw();
ui.partH.ref.focus();
ui.partH.ref.select();
return;
} else if (ui.partY.ref.value.includes("+")||ui.partY.ref.value.includes(";")) { 
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/\+/g, "");
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/;/g, "");
updateInfoShelf();redraw();
ui.partX.ref.focus();
ui.partX.ref.select();
return;
}    
inputPartNav("partY");
if (coinFocus!=null) {
coinFocus.style.top = parseInt(ui.partY.ref.value) + "px";
coinFocus.dataset.top = parseInt(ui.partY.ref.value) + "px";
updateInfoShelf();redraw();
}
};

ui.partX.input                   = function() { 
       if (ui.partX.ref.value.includes("-")||ui.partX.ref.value.includes(":")) { 
           ui.partX.ref.value =
           ui.partX.ref.value.replace(/-/g, "");
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/:/g, "");
updateInfoShelf();redraw();
ui.partY.ref.focus();
ui.partY.ref.select();
return;
} else if (ui.partX.ref.value.includes("+")||ui.partX.ref.value.includes(";")) { 
           ui.partX.ref.value =
           ui.partX.ref.value.replace(/\+/g, "");
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/;/g, "");
updateInfoShelf();redraw();
ui.partW.ref.focus();
ui.partW.ref.select();
return;
}
inputPartNav("partX");
if (coinFocus!=null) {
coinFocus.style.left = parseInt(ui.partX.ref.value) + "px";
coinFocus.dataset.left = parseInt(ui.partX.ref.value) + "px";
updateInfoShelf();redraw();
}
};

ui.partW.input                   = function() {
       if (ui.partW.ref.value.includes("-")||ui.partW.ref.value.includes(":")) { 
           ui.partW.ref.value =
           ui.partW.ref.value.replace(/-/g, "");
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/:/g, "");
updateInfoShelf();redraw();
ui.partX.ref.focus();
ui.partX.ref.select();
return;
} else if (ui.partW.ref.value.includes("+")||ui.partW.ref.value.includes(";")) { 
           ui.partW.ref.value =
           ui.partW.ref.value.replace(/\+/g, "");
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/;/g, "");
updateInfoShelf();redraw();
ui.partH.ref.focus();
ui.partH.ref.select();
return;
}
inputPartNav("partW");
if (coinFocus!=null) {
coinFocus.style.width = parseInt(ui.partW.ref.value) + "px";
coinFocus.dataset.width = parseInt(ui.partW.ref.value) + "px";
updateInfoShelf();redraw();
}
};

ui.partH.input                   = function() {
       if (ui.partH.ref.value.includes("-")||ui.partH.ref.value.includes(":")) { 
           ui.partH.ref.value =
           ui.partH.ref.value.replace(/-/g, "");
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/:/g, "");
updateInfoShelf();redraw();
ui.partW.ref.focus();
ui.partW.ref.select();
return;
} else if (ui.partH.ref.value.includes("+")||ui.partH.ref.value.includes(";")) { 
           ui.partH.ref.value =
           ui.partH.ref.value.replace(/\+/g, "");
           ui.partY.ref.value =
           ui.partY.ref.value.replace(/;/g, "");
updateInfoShelf();redraw();
ui.partY.ref.focus();
ui.partY.ref.select();
return;
}
inputPartNav("partH");
if (coinFocus!=null) {
coinFocus.style.height = parseInt(ui.partH.ref.value) + "px";
coinFocus.dataset.height = parseInt(ui.partH.ref.value) + "px";
updateInfoShelf();redraw();
}
};

ui.cursorAuto.click              = function() { useCustomCursors = false;                               cursorSetup(); };
ui.cursorXS.click                = function() { useCustomCursors = true ; cursorSet = cursorSize[0][0]; cursorSetup(); };
ui.cursorS.click                 = function() { useCustomCursors = true ; cursorSet = cursorSize[1][0]; cursorSetup(); };
ui.cursorM.click                 = function() { useCustomCursors = true ; cursorSet = cursorSize[2][0]; cursorSetup(); };
ui.cursorL.click                 = function() { useCustomCursors = true ; cursorSet = cursorSize[3][0]; cursorSetup(); };
ui.cursorXL.click                = function() { useCustomCursors = true ; cursorSet = cursorSize[4][0]; cursorSetup(); };
ui.cursorNum.click               = function() {  };

ui.partNom.input                 = function() {
inputPartNav("partNom");
if (coinFocus != null && curFocus ==0) {
coinFocus.id = ui.partNom.ref.value;
coinFocus.name = ui.partNom.ref.value;
}
loadSidebar1();
redraw();
};


ui.partPrev.click                = function() { focusPrevious(); if (coinFocus!=null) { coinFocus.scrollIntoView({ behavior :'smooth', block : 'center', inline: 'center' }); }; updateInfoShelf(); redraw(); };

ui.showNames.click               = function() { if (drawPartNames=="false") { drawPartNames = "true"; } else { drawPartNames = "false"; }; localStorage.setItem("drawPartNames", drawPartNames); redraw(); };

ui.partNext.click                = function() { focusNext(); if (coinFocus!=null) { coinFocus.scrollIntoView({ behavior :'smooth', block : 'center', inline: 'center' }); };     updateInfoShelf(); redraw(); };

ui.partText.input                = function() { };
ui.partStyle.input               = function() { if (curFocus==0&&coinFocus!=null) { coinFocus.lastElementChild.firstElementChild.style = ui.partStyle.ref.value; } };
ui.partCode.input                = function() { };




ui.pathEntry.input               = function() { ui.pathEntry.ref.value = ui.pathEntry.ref.value.replace(/\\/g, "/"); hdub_imagePath = ui.pathEntry.ref.value; localStorage.setItem("hdub_imagePath", hdub_imagePath); };

function inputPartNav(inputBoxName) {

/* CYCLE THROUGH THE PARTS (LEFT AND RIGHT) */
       if (ui[inputBoxName].ref.value.includes(".")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/./g, "");
focusNext();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

} else if (ui[inputBoxName].ref.value.includes(",")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/,/g, "");
focusPrevious();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

/* SAME FROM THE NUMBER-PAD */
} else if (ui[inputBoxName].ref.value.includes("*")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/\*/g, "");
focusNext();updateInfoShelf();redraw();ui[inputBoxName].ref.select();
} else if (ui[inputBoxName].ref.value.includes("/")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/\//g, "");
focusPrevious();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

/* SWITCH PART NAMES ON AND OFF */
} else if (ui[inputBoxName].ref.value.includes(" ")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/ /g, "");
if (drawPartNames=="false") {
drawPartNames = "true";
} else {
drawPartNames = "false";
};
localStorage.setItem("drawPartNames", drawPartNames);
redraw(); 


/* CYCLE THROUGH THE PARTS (FIRST AND LAST) */
} else if (ui[inputBoxName].ref.value.includes("$")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/$/g, "");
focusLast();updateInfoShelf();redraw();ui[inputBoxName].ref.select();
} else if (ui[inputBoxName].ref.value.includes("^")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/^/g, "");
focusFirst();updateInfoShelf();redraw();ui[inputBoxName].ref.select();
} else if (ui[inputBoxName].ref.value.includes("|")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/|/g, "");
focusFirst();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

/* CYCLE THOUGH THE LAYERS (LEFT AND RIGHT) */
} else if (ui[inputBoxName].ref.value.includes("<")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/</g, "");
layerLeft();updateInfoShelf();redraw();ui[inputBoxName].ref.select();
} else if (ui[inputBoxName].ref.value.includes(">")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/>/g, "");
layerRight();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

}





}













if (localStorage.getItem("tab1subTab")) {
setTimeout(() => {
ui[localStorage.getItem("tab1subTab")].click();
}, 200);
}


ui.notesTab.click       = function() {
partText.style.display  = "block";
partStyle.style.display =  "none";
partCode.style.display  =  "none";
localStorage.setItem("tab1subTab", "notesTab");
};
ui.styleTab.click       = function() {
partText.style.display  =  "none";
partStyle.style.display = "block";
partCode.style.display  =  "none";
localStorage.setItem("tab1subTab", "styleTab");
};
ui.codeTab.click        = function() {
partText.style.display  =  "none";
partStyle.style.display =  "none";
partCode.style.display  = "block";
localStorage.setItem("tab1subTab", "codeTab");
};







































/*** THIS SETS UP THE REFERENCES ***/
const styleMenu = {};
[
    "styleFG",
    "styleBG",
    "styleOL",
    "shadowRadius7",
    "shadowRadius8",
    "shadowRadius9",
    "shadowRadius4",
    "shadowRadius5",
    "shadowRadius6",
    "shadowRadius1",
    "shadowRadius2",
    "shadowRadius3",
    "indentLine",
    "fontShadow",
    "charWord",
    "fontSize",
    "textAlignLeft",
    "textAlignCenter",
    "textAlignRight",
    "outlineSize",
    "outlineStyle",
    "padding",
    "opacity"
].forEach((name) => {
styleMenu[name]       = {};
styleMenu[name].ref   = document.getElementById(name);
});

/*** THIS SETS UP THE FUNCTION BLOCKS: READY FOR CODE ***/
          styleMenu.shadowRadius7.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 103; cC = 55;
borderRadiusTuner();
} else if ( event.shiftKey) {
styleKey = "u";
kC = 103; cC = 55;
boxShadowTuner();
}
}; /*                                                */
          styleMenu.shadowRadius8.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 104; cC = 56;
borderRadiusTuner();
} else if ( event.shiftKey) {
styleKey = "u";
kC = 104; cC = 56;
boxShadowTuner();
}
}; /*                                                */
          styleMenu.shadowRadius9.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 105; cC = 57;
borderRadiusTuner();
} else if ( event.shiftKey) {
styleKey = "u";
kC = 105; cC = 57;
boxShadowTuner();
}
}; /*                                                */
          styleMenu.shadowRadius4.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 100; cC = 52;
borderRadiusTuner();
} else if ( event.shiftKey) {
styleKey = "u";
kC = 100; cC = 52;
boxShadowTuner();
}
}; /*                                                */
          styleMenu.shadowRadius5.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 101; cC = 53;
borderRadiusTuner();
} else if ( event.shiftKey) {
try {
coinFocus.lastElementChild.style.boxShadow =``;
} catch { };
}
}; /*                                                */
          styleMenu.shadowRadius6.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 102; cC = 54;
borderRadiusTuner();
} else if ( event.shiftKey) {
styleKey = "u";
kC = 102; cC = 54;
boxShadowTuner();
}
}; /*                                                */
          styleMenu.shadowRadius1.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 97; cC = 49;
borderRadiusTuner();
} else if ( event.shiftKey) {
styleKey = "u";
kC = 97; cC = 49;
boxShadowTuner();
}
}; /*                                                */
          styleMenu.shadowRadius2.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 98; cC = 50;
borderRadiusTuner();
} else if ( event.shiftKey) {
styleKey = "u";
kC = 98; cC = 50;
boxShadowTuner();
}
}; /*                                                */
          styleMenu.shadowRadius3.click = function() {
if (!event.shiftKey) {
styleKey = "r";
kC = 99; cC = 51;
borderRadiusTuner();
} else if ( event.shiftKey) {
styleKey = "u";
kC = 99; cC = 51;
boxShadowTuner();
}
}; /*                                                */
             styleMenu.indentLine.click = function() { coinFocus.lastElementChild.firstElementChild.style.textIndent = ""; coinFocus.lastElementChild.firstElementChild.style.lineHeight = ""; }; /*                                                */
             styleMenu.fontShadow.click = function() {
       if (coinFocus != null) {
       if (!event.shiftKey) {
fitTheText();
} else if ( event.shiftKey) {
fitTheBox();
}
}
}; /*                                                */






function fitTheText() {
}




function fitTheBox() {
}





               styleMenu.charWord.click = function() {

       if (coinFocus.lastElementChild.style.overflow=="hidden") {
coinFocus.lastElementChild.style.overflow="auto";
} else if (coinFocus.lastElementChild.style.overflow=="auto") {
coinFocus.lastElementChild.style.overflow="visible";
} else {
coinFocus.lastElementChild.style.overflow="hidden";
}

}; /*                                                */
               styleMenu.fontSize.click = function() {                        }; /*                                                */
          styleMenu.textAlignLeft.click = function() {
if (coinFocus.lastElementChild.firstElementChild.style.textAlign == "left") {
coinFocus.lastElementChild.firstElementChild.style.textAlign = "justify";
} else {
coinFocus.lastElementChild.firstElementChild.style.textAlign = "left";
}

}; /*                                                */
        styleMenu.textAlignCenter.click = function() {
coinFocus.lastElementChild.firstElementChild.style.textAlign = "center";}; /*                                                */
         styleMenu.textAlignRight.click = function() {
coinFocus.lastElementChild.firstElementChild.style.textAlign = "right";}; /*                                                */



            styleMenu.outlineSize.click = function() {
       if ( event.shiftKey) {
coinFocus.lastElementChild.style.outlineOffset = "0px";
} else if (!event.shiftKey) {
try {
coinFocus.lastElementChild.style.outlineOffset = -parseFloat(coinFocus.lastElementChild.style.outlineWidth) / 2 + "px";
} catch {}
}
}; /*                                                */



           styleMenu.outlineStyle.click = function() {
const part = coinFocus.lastElementChild;
function evaluateOutline() {
part.style.outlineStyle = `${outlineStyleArray[outlineTunedStyle]}`;
}
outlineTunedStyle -= 1;
if (outlineTunedStyle < 0) { outlineTunedStyle = outlineStyleArray.length - 1; }
evaluateOutline();
}; /*                                                */


                styleMenu.padding.click = function() { coinFocus.lastElementChild.firstElementChild.style.padding = "0px";                       }; /*                                                */


                styleMenu.opacity.click = function() {
if (!event.shiftKey) {
coinFocus.lastElementChild.style.opacity = 1;
} else if ( event.shiftKey) {
coinFocus.lastElementChild.style.opacity = 0;
}



}; /*                                                */

       styleMenu.shadowRadius7.dblclick = function() {                        }; /*                                                */
       styleMenu.shadowRadius8.dblclick = function() {                        }; /*                                                */
       styleMenu.shadowRadius9.dblclick = function() {                        }; /*                                                */
       styleMenu.shadowRadius4.dblclick = function() {                        }; /*                                                */
       styleMenu.shadowRadius5.dblclick = function() {                        }; /*                                                */
       styleMenu.shadowRadius6.dblclick = function() {                        }; /*                                                */
       styleMenu.shadowRadius1.dblclick = function() {                        }; /*                                                */
       styleMenu.shadowRadius2.dblclick = function() {                        }; /*                                                */
       styleMenu.shadowRadius3.dblclick = function() {                        }; /*                                                */
          styleMenu.indentLine.dblclick = function() {                        }; /*                                                */
          styleMenu.fontShadow.dblclick = function() {                        }; /*                                                */
            styleMenu.charWord.dblclick = function() {                        }; /*                                                */
            styleMenu.fontSize.dblclick = function() {                        }; /*                                                */
       styleMenu.textAlignLeft.dblclick = function() {                        }; /*                                                */
     styleMenu.textAlignCenter.dblclick = function() {                        }; /*                                                */
      styleMenu.textAlignRight.dblclick = function() {                        }; /*                                                */
         styleMenu.outlineSize.dblclick = function() {                        }; /*                                                */
        styleMenu.outlineStyle.dblclick = function() {                        }; /*                                                */
             styleMenu.padding.dblclick = function() {                        }; /*                                                */
             styleMenu.opacity.dblclick = function() {                        }; /*                                                */




          styleMenu.styleFG.input = function() {
if (coinFocus != null) {
coinFocus.lastElementChild.firstElementChild.style.color = styleMenu.styleFG.ref.value
}
}; /*                                                */
          styleMenu.styleBG.input = function() {
if (coinFocus != null) {
coinFocus.lastElementChild.firstElementChild.style.backgroundColor = styleMenu.styleBG.ref.value
}
}; /*                                                */
          styleMenu.styleOL.input = function() {
if (coinFocus != null) {
let oldOutline = coinFocus.lastElementChild.style.outline;
coinFocus.lastElementChild.style.outlineColor = styleMenu.styleOL.ref.value
}
}; /*                                                */



          styleMenu.shadowRadius7.input = function() {                        }; /*                                                */
          styleMenu.shadowRadius8.input = function() {                        }; /*                                                */
          styleMenu.shadowRadius9.input = function() {                        }; /*                                                */
          styleMenu.shadowRadius4.input = function() {                        }; /*                                                */
          styleMenu.shadowRadius5.input = function() {                        }; /*                                                */
          styleMenu.shadowRadius6.input = function() {                        }; /*                                                */
          styleMenu.shadowRadius1.input = function() {                        }; /*                                                */
          styleMenu.shadowRadius2.input = function() {                        }; /*                                                */
          styleMenu.shadowRadius3.input = function() {                        }; /*                                                */
             styleMenu.indentLine.input = function() {                        }; /*                                                */
             styleMenu.fontShadow.input = function() {                        }; /*                                                */
               styleMenu.charWord.input = function() {                        }; /*                                                */
               styleMenu.fontSize.input = function() {                        }; /*                                                */
          styleMenu.textAlignLeft.input = function() {                        }; /*                                                */
        styleMenu.textAlignCenter.input = function() {                        }; /*                                                */
         styleMenu.textAlignRight.input = function() {                        }; /*                                                */
            styleMenu.outlineSize.input = function() {                        }; /*                                                */
           styleMenu.outlineStyle.input = function() {                        }; /*                                                */
                styleMenu.padding.input = function() {                        }; /*                                                */
                styleMenu.opacity.input = function() {                        }; /*                                                */



/*** THIS SETS UP EVENT DELEGATION FOR "CLICK" EVENT ***/
document.addEventListener("click", function() {
if (coinFocus == null) return;
switch (event.target) {
       case styleMenu.shadowRadius7.ref:         styleMenu.shadowRadius7.click(); break;
       case styleMenu.shadowRadius8.ref:         styleMenu.shadowRadius8.click(); break;
       case styleMenu.shadowRadius9.ref:         styleMenu.shadowRadius9.click(); break;
       case styleMenu.shadowRadius4.ref:         styleMenu.shadowRadius4.click(); break;
       case styleMenu.shadowRadius5.ref:         styleMenu.shadowRadius5.click(); break;
       case styleMenu.shadowRadius6.ref:         styleMenu.shadowRadius6.click(); break;
       case styleMenu.shadowRadius1.ref:         styleMenu.shadowRadius1.click(); break;
       case styleMenu.shadowRadius2.ref:         styleMenu.shadowRadius2.click(); break;
       case styleMenu.shadowRadius3.ref:         styleMenu.shadowRadius3.click(); break;
          case styleMenu.indentLine.ref:            styleMenu.indentLine.click(); break;
          case styleMenu.fontShadow.ref:            styleMenu.fontShadow.click(); break;
            case styleMenu.charWord.ref:              styleMenu.charWord.click(); break;
            case styleMenu.fontSize.ref:              styleMenu.fontSize.click(); break;
       case styleMenu.textAlignLeft.ref:         styleMenu.textAlignLeft.click(); break;
     case styleMenu.textAlignCenter.ref:       styleMenu.textAlignCenter.click(); break;
      case styleMenu.textAlignRight.ref:        styleMenu.textAlignRight.click(); break;
         case styleMenu.outlineSize.ref:           styleMenu.outlineSize.click(); break;
        case styleMenu.outlineStyle.ref:          styleMenu.outlineStyle.click(); break;
             case styleMenu.padding.ref:               styleMenu.padding.click(); break;
             case styleMenu.opacity.ref:               styleMenu.opacity.click(); break;
}});

/*** THIS SETS UP EVENT DELEGATION FOR "DBLCLICK" EVENT ***/
document.addEventListener("dblclick", function() {
switch (event.target) {
       case styleMenu.shadowRadius7.ref:      styleMenu.shadowRadius7.dblclick(); break;
       case styleMenu.shadowRadius8.ref:      styleMenu.shadowRadius8.dblclick(); break;
       case styleMenu.shadowRadius9.ref:      styleMenu.shadowRadius9.dblclick(); break;
       case styleMenu.shadowRadius4.ref:      styleMenu.shadowRadius4.dblclick(); break;
       case styleMenu.shadowRadius5.ref:      styleMenu.shadowRadius5.dblclick(); break;
       case styleMenu.shadowRadius6.ref:      styleMenu.shadowRadius6.dblclick(); break;
       case styleMenu.shadowRadius1.ref:      styleMenu.shadowRadius1.dblclick(); break;
       case styleMenu.shadowRadius2.ref:      styleMenu.shadowRadius2.dblclick(); break;
       case styleMenu.shadowRadius3.ref:      styleMenu.shadowRadius3.dblclick(); break;
          case styleMenu.indentLine.ref:         styleMenu.indentLine.dblclick(); break;
          case styleMenu.fontShadow.ref:         styleMenu.fontShadow.dblclick(); break;
            case styleMenu.charWord.ref:           styleMenu.charWord.dblclick(); break;
            case styleMenu.fontSize.ref:           styleMenu.fontSize.dblclick(); break;
       case styleMenu.textAlignLeft.ref:      styleMenu.textAlignLeft.dblclick(); break;
     case styleMenu.textAlignCenter.ref:    styleMenu.textAlignCenter.dblclick(); break;
      case styleMenu.textAlignRight.ref:     styleMenu.textAlignRight.dblclick(); break;
         case styleMenu.outlineSize.ref:        styleMenu.outlineSize.dblclick(); break;
        case styleMenu.outlineStyle.ref:       styleMenu.outlineStyle.dblclick(); break;
             case styleMenu.padding.ref:            styleMenu.padding.dblclick(); break;
             case styleMenu.opacity.ref:            styleMenu.opacity.dblclick(); break;
}});

/*** THIS SETS UP EVENT DELEGATION FOR "INPUT" EVENT ***/
document.addEventListener("input", function() {
switch (event.target) {
       case styleMenu.styleFG.ref:         styleMenu.styleFG.input(); break;
       case styleMenu.styleBG.ref:         styleMenu.styleBG.input(); break;
       case styleMenu.styleOL.ref:         styleMenu.styleOL.input(); break;
}});



