function saveReadyButton(width, height, repetition, upscaling) {
let repetitions = 4;
if (event.shiftKey) repetitions = 2;
function readyButton(width, height, repetitions, upscaling) {
const columnWidth   =  width * upscaling;
const rowHeight     = height * upscaling;
const canvas        = document.createElement("canvas");
      canvas.width  = 100 * upscaling * repetitions;
      canvas.height = 180 * upscaling;
let   ctx           = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.beginPath();
const columns    = canvas.width  / columnWidth;
const rows       = canvas.height / rowHeight;
const widthStep  = canvas.width  / columns;
const heightStep = canvas.height / rows;
for (let j = 1; j <     columns; j++) { ctx.moveTo(j *  widthStep,   0);  ctx.lineTo(j *  widthStep, canvas.height); }
for (let j = 1; j <        rows; j++) { ctx.moveTo(0  , j *  heightStep); ctx.lineTo(canvas.width, j *  heightStep); }
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = "black";
for (let j = 0; j < repetitions; j++) { ctx.strokeRect((canvas.width / repetitions) * j, 0, canvas.width / repetitions, canvas.height); }
      ctx.stroke();
return canvas;
}
let syntax = "";
       if (width == 20 && height == 20) {
syntax = 'h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20';
} else if (width == 50 && height == 20) {
syntax = 'h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50';
} else if (width == 20 && height == 45) {
syntax = 'h45w20w20w20w20w20h45w20w20w20w20w20h45w20w20w20w20w20h45w20w20w20w20w20';
}
const datePrefix = Date.now().toString().slice(-6);
const dataURL = readyButton(width, height, repetitions, upscaling).toDataURL('image/png');
const link = document.createElement('a');
link.href = dataURL;
link.download = "READY_" + datePrefix + '_HDUB_' + upscaling + '_' + repetitions + 'btn_' + syntax + '.png';
link.click();
}




















function toggleSidebar4() {
if (document.getElementById("sidebar4").style.left == "-148px") {
document.getElementById("sidebar4").style.left = "0px";
localStorage.setItem("sidebar4", "0px");
} else {
document.getElementById("sidebar4").style.left = "-148px";
localStorage.setItem("sidebar4", "-148px");
}
}

if (localStorage.getItem("sidebar4")) {
document.getElementById("sidebar4").style.left = localStorage.getItem("sidebar4");
}

const letters = [ "a", "b", "c", "d", "e", "f", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z" ]; 

if (localStorage.getItem("hdubSingleEntry")) {
ui.hdubSingleEntry.ref.value = localStorage.getItem("hdubSingleEntry"); }

if (localStorage.getItem("hdubPartDesignations")) {
ui.hdubPartDesignations.ref.value = localStorage.getItem("hdubPartDesignations"); }




ui.hdubSingleEntry.ref.onfocus = function() {
displayDemo();
}






/*
document.getElementById("hdubOverlay");
*/








ui.hdubPartDesignations.input         = function() {
ui.hdubPartDesignations.ref.value = ui.hdubPartDesignations.ref.value.replace(/[^A-Z]/g, "");
localStorage.setItem("hdubPartDesignations", ui.hdubPartDesignations.ref.value);
ui.hwString[ui.hwString.currentSel].part = ui.hdubPartDesignations.ref.value;
localStorage.setItem("hwString",JSON.stringify(ui.hwString));
};
















ui.hdubSingleEntry.input         = function() {
let input = ui.hdubSingleEntry.ref.value;

                  if (input.endsWith("\n") ||
                      input.includes("\n")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
let syntaxObject = cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value)));
enterFromSyntax(syntaxObject);
coinFocus.focus();
ui.hdubSingleEntry.ref.blur();
demoTime(1.5);
           } else if (input.endsWith( "*") ||
                      input.includes( "*") ||
                      input.endsWith( "?") ||
                      input.includes( "?")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
           } else if (input.endsWith( "/") ||
                      input.includes( "/")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
           } else if (input.endsWith("+") ||
                      input.includes("+")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
           } else if (input.endsWith("<") ||
                      input.includes("<")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
layerLeft();updateInfoShelf();redraw();
           } else if (input.endsWith(">") ||
                      input.includes(">")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
layerRight();updateInfoShelf();redraw();
           } else if (input.endsWith("[") ||
                      input.includes("[")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
if (ui.hdubSheetTemplate4x.ref.value > 0) {
ui.hdubSheetTemplate4x.ref.value--;
}
           } else if (input.endsWith("]") ||
                      input.includes("]")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
if (ui.hdubSheetTemplate4x.ref.value < 20) {
ui.hdubSheetTemplate4x.ref.value++;
}
           } else if (input.endsWith(" ") ||
                      input.includes(" ")) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
saveSyntaxImage();
}


letters.forEach((letter) => {
if (input.includes(letter)) {
ui.hdubSingleEntry.ref.value = clean(ui.hdubSingleEntry.ref.value);
switchString("hwSel_" + letter);
}
});




















ui.hdubSingleEntry.ref.value = ui.hdubSingleEntry.ref.value.replace(/\./g, "h").replace(/-/g, "w");
if (ui.hdubSingleEntry.ref.value != "") {
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
}
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
displayDemo();

ui.hwString[ui.hwString.currentSel].string = ui.hdubSingleEntry.ref.value;
ui[ui.hwString.currentSel].img.src = drawCell(ui.hwString[ui.hwString.currentSel].string, ui.hwString[ui.hwString.currentSel].colour)
localStorage.setItem("hwString",JSON.stringify(ui.hwString));

};


ui.hwString.hwSel_a.string = "h20w20w20w20w20w20h50w50w50h40w20w30w40w10";

function drawAllCells() {
["hwSel_a", "hwSel_b", "hwSel_c", "hwSel_d", "hwSel_e", "hwSel_f", "hwSel_g", "hwSel_i", "hwSel_j", "hwSel_k", "hwSel_l", "hwSel_m", "hwSel_n", "hwSel_o", "hwSel_p", "hwSel_q", "hwSel_r", "hwSel_s", "hwSel_t", "hwSel_u", "hwSel_v", "hwSel_x", "hwSel_y", "hwSel_z"].forEach((name) => {
if (ui.hwString[name].string != "") {
ui[name].img.src = drawCell(ui.hwString[name].string,ui.hwString[name].colour);
}
});
}

drawAllCells();


if (localStorage.getItem("hwString")) {

hwString = JSON.parse(localStorage.getItem("hwString"));


}







ui.hdubSingleEntry.change        = function() { demoTime(1.5); }



ui.hdubAdd.click                 = function() {
rollAdd();
}

function rollAdd() {
ui.hdubRoll.ref.value = ui.hdubRoll.ref.value.replace(/,,/g, ",");
ui.hdubRoll.ref.value = ui.hdubRoll.ref.value.replace(/,,/g, ",");
if (clean(ui.hdubSingleEntry.ref.value) != "") {
if (ui.hdubRoll.ref.value != "") {
ui.hdubRoll.ref.value += ",\n" + reString(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
} else {
ui.hdubRoll.ref.value = reString(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
}
}
const rollArray = ui.hdubRoll.ref.value.split(",\n");
if (rollArray[0]) ui.hdubRoll.ref.value = rollArray[0];
for (j = 1; j < rollArray.length; j ++) {
ui.hdubRoll.ref.value += ",\n" + rollArray[j];
}
localStorage.setItem("hdubRoll", ui.hdubRoll.ref.value);
};

if (localStorage.getItem("hdubRoll")) {
ui.hdubRoll.ref.value = localStorage.getItem("hdubRoll"); }

ui.hdubRoll.input                = function() {
const rollArray = ui.hdubRoll.ref.value.split(",\n");
if (rollArray[0]) ui.hdubRoll.ref.value = rollArray[0];
for (j = 1; j < rollArray.length; j ++) {
ui.hdubRoll.ref.value += ",\n" + rollArray[j];
}
localStorage.setItem("hdubRoll", ui.hdubRoll.ref.value);
};

var hdubRollPosition = 0;
ui.hdubRollLeft.click            = function() {
rollLeft();
}

function rollLeft() {
if (ui.hdubRoll.ref.value != "") {
hdubRollPosition--;
if (hdubRollPosition < 0) hdubRollPosition = ui.hdubRoll.ref.value.split(",\n").length - 1;
ui.hdubSingleEntry.ref.value = ui.hdubRoll.ref.value.split(",\n")[hdubRollPosition];
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
if (ui.hdubSingleEntry.ref.value != "") {
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
}
} else {
hdubRollPosition = 0;
}
}

ui.hdubRollRight.click           = function() {
rollRight();
}

function rollRight() {
if (ui.hdubRoll.ref.value != "") {
hdubRollPosition++;
if (hdubRollPosition > ui.hdubRoll.ref.value.split(",\n").length - 1) hdubRollPosition = 0;
ui.hdubSingleEntry.ref.value = ui.hdubRoll.ref.value.split(",\n")[hdubRollPosition];
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
if (ui.hdubSingleEntry.ref.value != "") {
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
}
} else {
hdubRollPosition = 0;
}
};



ui.hdubEnter.click               = function() {
let syntaxObject = cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value)));
enterFromSyntax(syntaxObject);
hdubDemo.style.opacity = 0;
};

ui.hdubSave.click                = function() { saveSyntaxImage(); };

ui.hdubCanvas.click              = function() {  };

ui.hdubSheetTemplate1x.click     = function() { manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value)))); };


















ui.hwSel_a.click                 = function() { switchString("hwSel_a"); };
ui.hwSel_b.click                 = function() { switchString("hwSel_b"); };
ui.hwSel_c.click                 = function() { switchString("hwSel_c"); };
ui.hwSel_d.click                 = function() { switchString("hwSel_d"); };
ui.hwSel_e.click                 = function() { switchString("hwSel_e"); };
ui.hwSel_f.click                 = function() { switchString("hwSel_f"); };
ui.hwSel_g.click                 = function() { switchString("hwSel_g"); };
ui.hwSel_i.click                 = function() { switchString("hwSel_i"); };
ui.hwSel_j.click                 = function() { switchString("hwSel_j"); };
ui.hwSel_k.click                 = function() { switchString("hwSel_k"); };
ui.hwSel_l.click                 = function() { switchString("hwSel_l"); };
ui.hwSel_m.click                 = function() { switchString("hwSel_m"); };
ui.hwSel_n.click                 = function() { switchString("hwSel_n"); };
ui.hwSel_o.click                 = function() { switchString("hwSel_o"); };
ui.hwSel_p.click                 = function() { switchString("hwSel_p"); };
ui.hwSel_q.click                 = function() { switchString("hwSel_q"); };
ui.hwSel_r.click                 = function() { switchString("hwSel_r"); };
ui.hwSel_s.click                 = function() { switchString("hwSel_s"); };
ui.hwSel_t.click                 = function() { switchString("hwSel_t"); };
ui.hwSel_u.click                 = function() { switchString("hwSel_u"); };
ui.hwSel_v.click                 = function() { switchString("hwSel_v"); };
ui.hwSel_x.click                 = function() { switchString("hwSel_x"); };
ui.hwSel_y.click                 = function() { switchString("hwSel_y"); };
ui.hwSel_z.click                 = function() { switchString("hwSel_z"); };





function switchString(cell) {
ui.hwString.currentSel = cell;


ui.hdubSingleEntry.ref.value = ui.hwString[cell].string;
if (ui.hwString[cell].part) {
ui.hdubPartDesignations.ref.value = ui.hwString[cell].part;
} else {
ui.hdubPartDesignations.ref.value = "";
}
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hwString",JSON.stringify(ui.hwString));
letters.forEach((letter) => {
ui["hwSel_" + letter].ref.style.outline = "";
ui["hwSel_" + letter].ref.style.zIndex = 100;
});
ui[cell].ref.style.outline = "2px solid " + ui.hwString[cell].colour;
ui[cell].ref.style.zIndex = 200;
drawDemo(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
loadLetterInputs();
}





















/* display the demo */
ui.hdubSheetTemplate4x.input     = function() { displayDemo(); };

/* fade the demo out */
ui.hdubSheetTemplate4x.change    = function() { demoTime(1.5); };


function displayDemo() {
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + ui.hdubSheetTemplate4x.ref.value);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
drawDemo(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
hdubDemo.style.opacity = 1;
if (Picture.style.display == "block") {
let pictureScale = 1;
switch (document.getElementById("hdubSheetTemplate4x").value) {
case '1': pictureScale = 10; break;
case '2': pictureScale =  8; break;
case '3': pictureScale =  6; break;
case '4': pictureScale =  5; break;
}
Picture.style.transform = "scale(" + pictureScale + ")";
}
}










function demoTime(max) {
drawDemo(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
for (let j = 100; j >= 0; j--) {
setTimeout(() => { hdubDemo.style.opacity =  j / 100; },   (100 - j) * max);
}
}













function clean(string) {
if (string == "") return "";
let newString = string;
/* preparing the raw string */
/* remove anything preceding the first 'h' */
newString = newString.replace(/^[^h]*/g, "");
/* remove any embedded syntax chunk */
newString = newString.replace(/([hw]0)[^hw]*([hw])/g, "$1$2");
newString = newString.replace(/([hw])[^hw0123456789]*([hw])/g, "$1$2");
newString = newString.replace(/([hw][123456789][0123456789]*)[^hw0123456789][^hw]*([hw])/g, "$1$2");
/* remove anything after the last valid numeral */
newString = newString.replace(/([hw]0)[^hw]*$/g, "$1");
newString = newString.replace(/([hw])[^hw0123456789]*$/g, "$1");
newString = newString.replace(/(w[123456789][0123456789]*)[^hw0123456789]*$/g, "$1");
/* complete abbreviations in the string */
/* fill the middle    */
newString = newString.replace(/hh/g, "h0w0h");
newString = newString.replace(/hh/g, "h0w0h");
newString = newString.replace(/ww/g, "w0w"  );
newString = newString.replace(/ww/g, "w0w"  );
newString = newString.replace(/hw/g, "h0w"  );
newString = newString.replace(/wh/g, "w0h"  );
/* fill the beginning */
newString = newString.replace(/^w/g, "h0w");
newString = newString.replace(/^([^hw]*)$/g, "h$1w0");
newString = newString.replace(/^([^hw]*)w/g, "h$1w");
newString = newString.replace(/^([^hw]*)w$/g, "h$1w0");
/* fill the end       */
newString = newString.replace(/h$/g, "h0w0");
newString = newString.replace(/h([^hw]*)$/g, "h$1w0");
newString = newString.replace(/w$/g, "w0");
return newString;
}




function makeObject(string) {
let newString = string.replace(/^h/g, "");
let newArray = newString.split("h");
let rowArray = [];
for (j = 0; j < newArray.length; j++) {
let numberArray = newArray[j].split("w");
/* set as integers */
for (i = 0; i < numberArray.length; i++) {
numberArray[i] = parseInt(numberArray[i]);
}
rowArray.push([]);
rowArray[j].rowHeight = numberArray.shift();
rowArray[j].column = [];
for (i = 0; i < numberArray.length; i++) {
/* set up with object for extension */
rowArray[j].column[i] = {};
rowArray[j].column[i].width = numberArray[i];
}
}
return rowArray;
}




function cropObject(widthCrop, heightCrop, array) {
let newObject = array;
let rowStart = 0;
for (let j = 0; j < newObject.length; j++) {
let columnStart = 0;
for (i = 0; i < newObject[j].column.length; i++) {
       if (columnStart > widthCrop) {
newObject[j].column[i].pop();
} else if (columnStart + newObject[j].column[i].width > widthCrop) {
newObject[j].column[i].width = widthCrop - columnStart;
columnStart += newObject[j].column[i].width;
} else {
columnStart += newObject[j].column[i].width;
/* this condition was used to fill it
if (i == (newObject[j].column.length - 1) && columnStart < widthCrop) {
newObject[j].column[i + 1] = {};
newObject[j].column[i + 1].width = widthCrop - columnStart;
}
*/
}
}
       if (rowStart > heightCrop) {
newObject[j].pop();
} else if (rowStart + newObject[j].rowHeight > heightCrop) {
newObject[j].rowHeight = heightCrop - rowStart;
rowStart += newObject[j].rowHeight;
} else {
rowStart += newObject[j].rowHeight;
/* this condition was used to fill it
if (j == (newObject.length - 1) && rowStart < heightCrop) {
newObject.push([]);
newObject[j + 1].rowHeight = heightCrop - rowStart;
newObject[j + 1].column = [];
newObject[j + 1].column[0] = {};
newObject[j + 1].column[0].width = widthCrop;
}
*/
}
}
return newObject;
}




function reString(array) {
let string = "";
for (let j = 0; j < array.length; j++) {
string += "h" + array[j].rowHeight;
for (i = 0; i < array[j].column.length; i++) {
string += "w" + array[j].column[i].width;
}
}
return string;
}




function presentString(string) {
return string.replace(/h/g, "\nh").replace(/^\n/g, "");
}



const shadeArray = [
"rgba(240,240,255,0.55)",
"rgba(255,240,240,0.65)",
"rgba(240,255,240,0.45)",
"rgba(255,240,255,0.75)"
];





function drawArray(array) {
let ctx = ui.hdubCanvas.ref.getContext("2d");
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(16,28,82)";
ctx.fillStyle   = "rgb(16,28,82)";
ctx.fillRect(0, 0, ui.hdubCanvas.ref.width, ui.hdubCanvas.ref.height);
let rowStart = 0;
let shadeNumber = 0;


const overlay = document.getElementById("hdubOverlay");
      overlay.innerHTML = "";


for (j = 0; j < array.length; j++) {
let columnStart = 0;
for (i = 0; i < array[j].column.length; i++) {
ctx.fillStyle = shadeArray[shadeNumber];
shadeNumber++;
if (shadeNumber > 3) shadeNumber = 0;

const newButton = document.createElement("button");
      newButton.classList = "overlayButton dckimPixelMono";
      newButton.style.left            = columnStart + "px";
      newButton.style.top             = rowStart    + "px";
      newButton.style.width           = array[j].column[i].width + "px";
if (array[j].column[i].width < array[j].rowHeight) {
      newButton.style.fontSize        = array[j].column[i].width + "px";
} else {
      newButton.style.fontSize        = array[j].rowHeight + "px";
}
      newButton.style.height          = array[j].rowHeight + "px";
      newButton.style.color           = "black";
      newButton.dataset.hdubOverlay   = "scroll";
      newButton.setAttribute("onclick", "this.innerText = ui[ui.hdub.selected].letter; if (ui[ui.hdub.selected].colour == 'hdubPink') { this.style.backgroundColor = pinkColour; } else if (ui[ui.hdub.selected].colour == 'hdubGrey') { this.style.backgroundColor = greyColour; }  else if (ui[ui.hdub.selected].colour == 'hdubBlue') { this.style.backgroundColor = blueColour; }; evaluateLetterInputs();");
      overlay.appendChild(newButton);

ctx.clearRect(columnStart, rowStart, array[j].column[i].width, array[j].rowHeight);
ctx.fillRect(columnStart, rowStart, array[j].column[i].width, array[j].rowHeight);
ctx.strokeRect(columnStart, rowStart, array[j].column[i].width, array[j].rowHeight);
columnStart += array[j].column[i].width;
}
rowStart += array[j].rowHeight;
}
}

drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));




























function drawCell(string, colour) {
const array = cropObject(100, 180, makeObject(clean(string)));
let drawing = document.createElement("canvas");
    drawing.width  = 100;
    drawing.height = 180;
let ctx = drawing.getContext("2d");
ctx.lineWidth = 4;
ctx.strokeStyle = colour;
ctx.clearRect(0, 0, 100, 180);
let rowStart = 0;
let shadeNumber = 0;
for (j = 0; j < array.length; j++) {
let columnStart = 0;
for (i = 0; i < array[j].column.length; i++) {
ctx.strokeRect(columnStart, rowStart, array[j].column[i].width, array[j].rowHeight);
columnStart += array[j].column[i].width;
}
rowStart += array[j].rowHeight;
}
return drawing.toDataURL("image/png");
}











if (localStorage.getItem("hdubEntryFactor")) {
ui.hdubSheetTemplate4x.ref.value = parseInt(localStorage.getItem("hdubEntryFactor"));
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + ui.hdubSheetTemplate4x.ref.value);
} else {
ui.hdubSheetTemplate4x.ref.value = 10;
}



const hdubTopOffset  = 0;
const hdubLeftOffset = 0;




function enterFromSyntax(syntaxObject) {
const serial = parseInt(parseInt(Date.now().toString().slice(-4)) + "0");
let sequence = 0;

const hdub = syntaxObject;
const entryFactor = ui.hdubSheetTemplate4x.ref.value;
localStorage.setItem("hdubEntryFactor", entryFactor);
let rowStart = 0;

let parts   = document.getElementById("hdubPartDesignations").value.split("");

for (j = 0; j < hdub.length; j++) {


let columnStart = 0;
for (i = 0; i < hdub[j].column.length; i++) {


let nextLetter = parts.shift();

if (nextLetter != "X") {

let newHeight  = hdub[j].rowHeight       * entryFactor;
let newWidth   = hdub[j].column[i].width * entryFactor;
let rowTop     = rowStart                * entryFactor;
let columnLeft = columnStart             * entryFactor;
if (newHeight > 0 && newWidth > 0) {
if (hauptMode==1) {
hauptMode=0;
insertNewCoin([null,78,78,false,false,false]);
coinFocus.lastElementChild.lastElementChild.previousElementSibling.contentEditable = "true";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.fontSize = "32px";
coinFocus.firstElementChild.style.zIndex = "0";
hauptMode=1;
} else {
insertNewCoin([null,78,78,false,false,false]);
coinFocus.lastElementChild.lastElementChild.previousElementSibling.contentEditable = "true";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.fontSize = "32px";
coinFocus.firstElementChild.style.zIndex = "0";
}
utilityLayer0.lastElementChild.style.top      = rowTop     + window.scrollY + hdubTopOffset + "px";
utilityLayer0.lastElementChild.dataset.top    = rowTop     + window.scrollY + hdubTopOffset + "px";
utilityLayer0.lastElementChild.style.left     = columnLeft + window.scrollX + hdubLeftOffset + "px";
utilityLayer0.lastElementChild.dataset.left   = columnLeft + window.scrollX + hdubLeftOffset + "px";
utilityLayer0.lastElementChild.style.width    = newWidth   + "px";
utilityLayer0.lastElementChild.dataset.width  = newWidth   + "px";
utilityLayer0.lastElementChild.style.height   = newHeight  + "px";
utilityLayer0.lastElementChild.dataset.height = newHeight  + "px";
utilityLayer0.lastElementChild.id             = "hdub" + (serial + sequence);

try {
       if (ui["hdub" + nextLetter].colour == "hdubPink") {
utilityLayer0.lastElementChild.dataset.coinTrip    = "1";
} else if (ui["hdub" + nextLetter].colour == "hdubGrey") {
utilityLayer0.lastElementChild.dataset.coinTrip    = "0";
} else if (ui["hdub" + nextLetter].colour == "hdubBlue") {
utilityLayer0.lastElementChild.dataset.coinTrip    = "?";
}
} catch { }

try {
utilityLayer0.lastElementChild.div.innerHTML  = ui["hdub" + nextLetter].value;
} catch { }

}




sequence++;

}
columnStart += hdub[j].column[i].width;
}
rowStart += hdub[j].rowHeight;
}

readCoins();
recoverColouration();
}























function saveSyntaxImage() {
const datePrefix = Date.now().toString().slice(-6);
const syntax = reString(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
const dataURL = hdubCanvas.toDataURL('image/png');
const link = document.createElement('a');
link.href = dataURL;
link.download = "SHAPE_" + datePrefix + '_HDUB_' + syntax + '.png';
link.click();
}





function getFilename() {
(() => {
const input = document.createElement('input');
input.type = 'file';
input.accept = '.png';
input.addEventListener('change', e => {
const file = e.target.files[0];
if (!file) return;
ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].replace(".png", "");
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
});
document.body.appendChild(input);
input.click();
input.remove();
})();
}








function manufactureTemplate(array) {
let factor = ui.hdubSheetTemplate4x.ref.value;
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width  = 100 * factor;
canvas.height = 180 * factor;
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
let rowStart = 0;
for (j = 0; j < array.length; j++) {
let columnStart = 0;
for (i = 0; i < array[j].column.length; i++) {
ctx.strokeRect(columnStart * factor, rowStart * factor, array[j].column[i].width * factor, array[j].rowHeight * factor);
columnStart += array[j].column[i].width;
}
rowStart += array[j].rowHeight;
}

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(canvas.width, 0);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();

const datePrefix = Date.now().toString().slice(-6);
const syntax = reString(array);
const dataURL = canvas.toDataURL('image/png');
const link = document.createElement('a');
link.href = dataURL;
link.download = "TEMPL_" + datePrefix + `_HDUB_${factor}_tmpl_` + syntax + '.png';
link.click();
}
















const hdubDemo = document.createElement("canvas");
{
const s=`position:fixed;left:0;top:0;pointer-events:none; border:none;`;
hdubDemo.style = s;
hdubDemo.style.opacity = 1;
hdubDemo.style.zIndex  = 100;
}
document.body.appendChild(hdubDemo);
hdubDemo.width      = 100 * ui.hdubSheetTemplate4x.ref.value;
hdubDemo.height     = 180 * ui.hdubSheetTemplate4x.ref.value;
hdubDemo.style.top  = hdubTopOffset  + "px";
hdubDemo.style.left = hdubLeftOffset + "px";
hdubDemo.style.opacity = visualOpacity;


function drawDemo(array){
let factor = ui.hdubSheetTemplate4x.ref.value;
let nominalFactor = factor;
if (Picture.style.display == "block") {
switch (document.getElementById("hdubSheetTemplate4x").value) {
case '1': factor = factor * 10; break;
case '2': factor = factor *  8; break;
case '3': factor = factor *  6; break;
case '4': factor = factor *  5; break;
}
}

hdubDemo.width  = 100 * factor;
hdubDemo.height = 180 * factor;

let ctx = hdubDemo.getContext("2d");
ctx.clearRect(0,0,hdubDemo.width,hdubDemo.height);
ctx.fillStyle = "lime";
ctx.font = "400 32px dckimPixelMono";
ctx.textAlign = "start";
ctx.textBaseline = "top";

if (nominalFactor > 4) {
ctx.lineWidth = 2;
ctx.strokeStyle = "lime";
ctx.fillStyle   = "lime";
ctx.fillText("x " + nominalFactor, 16,16);
ctx.fillStyle = "rgba(0,0,31,0.25)";
} else {
ctx.lineWidth = 4;
if (Picture.style.display == "block") {
ctx.strokeStyle = "cyan";
ctx.fillStyle   = "cyan";
} else {
ctx.strokeStyle = "darkorange";
ctx.fillStyle   = "darkorange";
}
ctx.fillText("x " + nominalFactor + " [pixelArt]", 16,16);
ctx.fillStyle = "rgba(31,0,31,0.35)";
}

let rowStart = 0;
for (j = 0; j < array.length; j++) {
let columnStart = 0;
for (i = 0; i < array[j].column.length; i++) {
ctx.fillRect(columnStart * factor, rowStart * factor, array[j].column[i].width * factor, array[j].rowHeight * factor);
ctx.strokeRect(columnStart * factor, rowStart * factor, array[j].column[i].width * factor, array[j].rowHeight * factor);
columnStart += array[j].column[i].width;
}
rowStart += array[j].rowHeight;
}
}




















































/*



*/



/*** THIS SETS UP THE REFERENCES ***/

      ui.idNames =
[
    "hdubA",
    "hdubB",
    "hdubC",
    "hdubD",
    "hdubE",
    "hdubF",
    "hdubG",
    "hdubH",
    "hdubI",
    "hdubJ",
    "hdubK",
    "hdubL",
    "hdubM",
    "hdubN",
    "hdubO",
    "hdubP",
    "hdubQ",
    "hdubR",
    "hdubS",
    "hdubT",
    "hdubU",
    "hdubV",
    "hdubW",
    "hdubX",
    "hdubY",
    "hdubZ"
];
ui.idNames.forEach((name) => {
ui[name]         = {};
ui[name].title   = "";
ui[name].value   = "";
ui[name].letter  = name.replace(/hdub/g, "");
ui[name].colour  = "hdubBlue";
});


/* HERE ARE SOME DEFAULT EXAMPLE CONTENTS FOR THE ARRAY OF INSERTION HTML */

/* THIS ONE IS ALWAYS PUT IN, IN CASE OF NO CONTENTS */
ui.hdubO.title = "default";
ui.hdubO.value = '<div style="width: 100%; height: 100%; outline-offset: -2px; outline: 2px dashed blue;"></div>';

ui.hdubA.title = '            '; ui.hdubA.value = '';
ui.hdubB.title = 'button input'; ui.hdubB.value = '<input type="button" name="button" style="width: 100%; height: 100%;" value="">';
ui.hdubC.title = 'HTML canvas '; ui.hdubC.value = `<canvas style="width: 100%; height: 100%; margin: 0; border: 0; padding: 0;"></canvas><!-- NORMALLY THE HTML CANVAS ELEMENT IS USED IN THE 'ABSTRACT SENSE' WITHOUT PLACING IT INTO THE PAGE, BUT FOR TESTING PURPOSES IT CAN BE CONVENIENT -->`;
ui.hdubD.title = 'colour input'; ui.hdubD.value = '<input type="color" name="colour" value="#AAAAAA" style="width: 100%; height: 100%; margin: 0; border: 0; padding: 0;">';
ui.hdubE.title = '            '; ui.hdubE.value = '';
ui.hdubF.title = 'form        '; ui.hdubF.value = `<form name="form" style="width: 100%; height: 100%;">
<!-- THERE IS NOTHING YOU CAN WRITE THAT WILL MAKE THIS 'FIT', EVER, OTHER THAN REMOVING THE DEFAULT STYLING -->
<input type="value"  name="value1" style="width: 100%; height: 20%; margin: 0; border: 0; padding: 0;" value="" placeholder="value1">
<input type="value"  name="value2" style="width: 100%; height: 20%; margin: 0; border: 0; padding: 0;" value="" placeholder="value2">
<input type="value"  name="value3" style="width: 100%; height: 20%; margin: 0; border: 0; padding: 0;" value="" placeholder="value3">
<input type="value"  name="value4" style="width: 100%; height: 20%; margin: 0; border: 0; padding: 0;" value="" placeholder="value4">
<input type="button" name="button" style="width: 100%; height: 20%;" value="">
</form>`;
ui.hdubG.title = '            '; ui.hdubG.value = '';
ui.hdubH.title = '            '; ui.hdubH.value = '';
ui.hdubI.title = 'iframe      '; ui.hdubI.value = '<iframe src="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;"></iframe>';
ui.hdubJ.title = '            '; ui.hdubJ.value = '';
ui.hdubK.title = '            '; ui.hdubK.value = '';
ui.hdubL.title = '            '; ui.hdubL.value = '';
ui.hdubM.title = 'marquee     '; ui.hdubM.value = '<marquee direction="left" scrollamount="4" behavior="scroll" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;" onmouseover="this.stop();" onmouseout="this.start();">default</marquee>';
ui.hdubN.title = 'number input'; ui.hdubN.value = '<input type="number" name="number" min="" max="" step="" value="" placeholder="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubP.title = '            '; ui.hdubP.value = '';
ui.hdubQ.title = 'checkbox    '; ui.hdubQ.value = '<input type="checkbox" name="checkbox" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubR.title = 'radio button'; ui.hdubR.value = '<input type="radio" name="radio" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubS.title = 'slider range'; ui.hdubS.value = '<input type="range" name="range" min="" max="" step="" value="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubT.title = 'textarea    '; ui.hdubT.value = '<textarea name="textarea" value="" placeholder="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;"></textarea>';
ui.hdubU.title = '            '; ui.hdubU.value = '';
ui.hdubV.title = 'value input '; ui.hdubV.value = '<input type="value" name="value" value="" placeholder="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubW.title = '            '; ui.hdubW.value = '';
ui.hdubY.title = '            '; ui.hdubY.value = '';
ui.hdubZ.title = '            '; ui.hdubZ.value = '';














ui.idNames.forEach((name) => {
if (localStorage.getItem(name + ".title"))  {ui[name].title  = localStorage.getItem(name + ".title"); }
if (localStorage.getItem(name + ".value"))  {ui[name].value  = localStorage.getItem(name + ".value"); }
if (localStorage.getItem(name + ".colour")) {ui[name].colour = localStorage.getItem(name + ".colour");}
ui[name].ref     = document.getElementById(name);
});







      ui.hdub = {};
      ui.hdub.selected = "hdubA";
      ui.hdubStuff =
[
    "hdubPink",
    "hdubGrey",
    "hdubBlue",
    "hdubTitle",
    "hdubCode"
];
ui.hdubStuff.forEach((name) => {
ui[name]         = {};
ui[name].ref     = document.getElementById(name);
});


ui.hdubX.title   = "no-part (empty)";
ui.hdubX.value   = "This one just marks the part to not become rendered or entered. It's good when you want to leave empty spaces.";



if (localStorage.getItem("hdubSelected")) {
ui.hdub.selected = localStorage.getItem("hdubSelected");
       if (ui[ui.hdub.selected].colour == "hdubPink") {
ui.hdubPink.ref.style.outlineOffset = "-28px";
ui.hdubPink.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubPink'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
} else if (ui[ui.hdub.selected].colour == "hdubGrey") {
ui.hdubGrey.ref.style.outlineOffset = "-28px";
ui.hdubGrey.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubGrey'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
} else if (ui[ui.hdub.selected].colour == "hdubBlue") {
ui.hdubBlue.ref.style.outlineOffset = "-28px";
ui.hdubBlue.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubBlue'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
}
ui.hdubTitle.ref.value = ui[ui.hdub.selected].title;
ui.hdubCode.ref.value = ui[ui.hdub.selected].value;
}









ui.hdubTitle.ref.setAttribute("oninput", "ui[ui.hdub.selected].title = ui.hdubTitle.ref.value; localStorage.setItem(ui.hdub.selected + '.title', ui[ui.hdub.selected].title);");
ui.hdubCode.ref.setAttribute( "oninput", "ui[ui.hdub.selected].value = ui.hdubCode.ref.value;  localStorage.setItem(ui.hdub.selected + '.value', ui[ui.hdub.selected].value);");










/*** THIS SETS UP EVENT DELEGATION ***/

document.addEventListener(       "click", function() { ui.idNames.forEach((name) => { if (event.target == ui[name].ref) {
ui.hdubTitle.ref.value = ui[name].title;
ui.hdubCode.ref.value  = ui[name].value;
ui.hdub.selected       = name;
localStorage.setItem("hdubSelected", ui.hdub.selected);

       if ( event.shiftKey && !event.ctrlKey && coinFocus != null) {
if (name != "hdubX") {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = ui.hdubCode.ref.value;
} else if (name == "hdubX") {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = "";
}
} else if (!event.shiftKey &&  event.ctrlKey && name != "hdubX") {
if (hauptMode==1) {
hauptMode=0;
insertNewCoin([null,78,78,false,false,false]);
coinFocus.lastElementChild.lastElementChild.previousElementSibling.contentEditable = "true";
coinFocus.firstElementChild.style.zIndex = "0";
coinFocus.style.left   = window.scrollX + "px";
coinFocus.dataset.left = window.scrollX + "px";
coinFocus.style.top    = window.scrollY + "px";
coinFocus.dataset.top  = window.scrollY + "px";
hauptMode=1;
} else {
insertNewCoin([null,78,78,false,false,false]);
coinFocus.lastElementChild.lastElementChild.previousElementSibling.contentEditable = "true";
coinFocus.firstElementChild.style.zIndex = "0";
coinFocus.style.left   = window.scrollX + "px";
coinFocus.dataset.left = window.scrollX + "px";
coinFocus.style.top    = window.scrollY + "px";
coinFocus.dataset.top  = window.scrollY + "px";
}
utilityLayer0.lastElementChild.lastElementChild.lastElementChild.previousElementSibling.innerHTML = ui.hdubCode.ref.value;
}



return 0; } });














loadHdubArray();


ui.hdubPink.ref.style.outline = "";
ui.hdubGrey.ref.style.outline = "";
ui.hdubBlue.ref.style.outline = "";



       if (ui[ui.hdub.selected].colour == "hdubPink") {
ui.hdubPink.ref.style.outlineOffset = "-28px";
ui.hdubPink.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubPink'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
} else if (ui[ui.hdub.selected].colour == "hdubGrey") {
ui.hdubGrey.ref.style.outlineOffset = "-28px";
ui.hdubGrey.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubGrey'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
} else if (ui[ui.hdub.selected].colour == "hdubBlue") {
ui.hdubBlue.ref.style.outlineOffset = "-28px";
ui.hdubBlue.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubBlue'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
}

       if (event.target == ui.hdubPink.ref ||
           event.target == ui.hdubGrey.ref ||
           event.target == ui.hdubBlue.ref) {
ui.hdubPink.ref.style.outline = "";
ui.hdubGrey.ref.style.outline = "";
ui.hdubBlue.ref.style.outline = "";
}


       if (event.target == ui.hdubPink.ref) {
ui.hdubPink.ref.style.outlineOffset = "-28px";
ui.hdubPink.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubPink'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
if (event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "1";
readCoins(); recoverColouration();
}
} else if (event.target == ui.hdubGrey.ref) {
ui.hdubGrey.ref.style.outlineOffset = "-28px";
ui.hdubGrey.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubGrey'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
if (event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "0";
readCoins(); recoverColouration();
}
} else if (event.target == ui.hdubBlue.ref) {
ui.hdubBlue.ref.style.outlineOffset = "-28px";
ui.hdubBlue.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubBlue'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
if (event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "?";
readCoins(); recoverColouration();
}
}


loadLetterInputs();

});

document.addEventListener(  "mousewheel", function() { ui.idNames.forEach((name) => { if (event.target == ui[name].ref) { return 0; } }); });























function evaluateLetterInputs() {
const overlay = document.getElementById("hdubOverlay");
const parts   = document.getElementById("hdubPartDesignations");
parts.value = "";
for (let j = 0; j < overlay.children.length; j++) {
if (overlay.children[j].innerText && overlay.children[j].innerText != "") {
parts.value += overlay.children[j].innerText;
}
}
//loadLetterInputs();
}




function loadLetterInputs() {
const overlay = document.getElementById("hdubOverlay");
let parts   = document.getElementById("hdubPartDesignations").value.split("");
for (let j = 0; j < overlay.children.length; j++) {
let nextLetter = parts.shift();
if (!nextLetter) nextLetter = "O";
overlay.children[j].innerText = nextLetter;
if (ui["hdub" + nextLetter].colour == 'hdubPink') {
overlay.children[j].style.backgroundColor = pinkColour;
} else if (ui["hdub" + nextLetter].colour == 'hdubGrey') {
overlay.children[j].style.backgroundColor = greyColour;
}  else if (ui["hdub" + nextLetter].colour == 'hdubBlue') {
overlay.children[j].style.backgroundColor = blueColour;
};

overlay.children[j].style.color = "black";
if (nextLetter == "X") {
overlay.children[j].style.backgroundColor = "black";
overlay.children[j].style.color = "red";
}

}
localStorage.setItem("hdubPartDesignations", ui.hdubPartDesignations.ref.value);
ui.hwString[ui.hwString.currentSel].part = ui.hdubPartDesignations.ref.value;
localStorage.setItem("hwString",JSON.stringify(ui.hwString));
}





function loadHdubArray() {
ui.idNames.forEach((name) => {
ui[name].ref.style.outline = "";
ui[name].ref.style.borderRadius = "16px";
});
ui[ui.hdub.selected].ref.style.outlineOffset = "-28px";
ui[ui.hdub.selected].ref.style.outline       = "28px dotted lime";
ui.hdubPink.ref.style.backgroundColor = pinkColour;
ui.hdubGrey.ref.style.backgroundColor = greyColour;
ui.hdubBlue.ref.style.backgroundColor = blueColour;
}
loadHdubArray();
loadLetterInputs();





















