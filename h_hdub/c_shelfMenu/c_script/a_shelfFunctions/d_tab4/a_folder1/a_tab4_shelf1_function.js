
const letters = [ "a", "b", "c", "d", "e", "f", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z" ]; 






if (localStorage.getItem("hdubSingleEntry")) {
ui.hdubSingleEntry.ref.value = localStorage.getItem("hdubSingleEntry"); }

ui.hdubSingleEntry.ref.onfocus = function() {
displayDemo();
}

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

["hwSel_a", "hwSel_b", "hwSel_c", "hwSel_d", "hwSel_e", "hwSel_f", "hwSel_g", "hwSel_i", "hwSel_j", "hwSel_k", "hwSel_l", "hwSel_m", "hwSel_n", "hwSel_o", "hwSel_p", "hwSel_q", "hwSel_r", "hwSel_s", "hwSel_t", "hwSel_u", "hwSel_v", "hwSel_x", "hwSel_y", "hwSel_z"].forEach((name) => {
if (ui.hwString[name].string != "") {
ui[name].img.src = drawCell(ui.hwString[name].string,ui.hwString[name].colour);
}
});











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

ui.hdubCanvas.click              = function() {
drawDemo(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
let initialDelay = 800;
hdubDemo.style.opacity = 1;

for (let j = 100; j >= 0; j--) {
setTimeout(() => { hdubDemo.style.opacity =  j / 100; },   (100 - j) * 1.5 + initialDelay);
}

};

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
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hwString",JSON.stringify(ui.hwString));

letters.forEach((letter) => {
ui["hwSel_" + letter].ref.style.outline = "";
ui["hwSel_" + letter].ref.style.zIndex = 100;
});
ui[cell].ref.style.outline = "2px solid " + ui.hwString[cell].colour;
ui[cell].ref.style.zIndex = 200;


drawDemo(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
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
for (j = 0; j < array.length; j++) {
let columnStart = 0;
for (i = 0; i < array[j].column.length; i++) {
ctx.fillStyle = shadeArray[shadeNumber];
shadeNumber++;
if (shadeNumber > 3) shadeNumber = 0;
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
for (j = 0; j < hdub.length; j++) {
let columnStart = 0;
for (i = 0; i < hdub[j].column.length; i++) {
let newHeight  = hdub[j].rowHeight       * entryFactor;
let newWidth   = hdub[j].column[i].width * entryFactor;
let rowTop     = rowStart                * entryFactor;
let columnLeft = columnStart             * entryFactor;
if (newHeight > 0 && newWidth > 0) {
if (hauptMode==1) {
hauptMode=0;
insertNewCoin([null,78,78,false,false,false]);
hauptMode=1;
} else {
insertNewCoin([null,78,78,false,false,false]);
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
sequence++;

}
columnStart += hdub[j].column[i].width;
}
rowStart += hdub[j].rowHeight;
}
}





function saveSyntaxImage() {
const datePrefix = Date.now().toString().slice(-6);
const syntax = reString(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
const dataURL = hdubCanvas.toDataURL('image/png');
const link = document.createElement('a');
link.href = dataURL;
link.download = "syxSHP_" + datePrefix + '_HDUB_' + syntax + '.png';
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

const datePrefix = Date.now().toString().slice(-6);
const syntax = reString(array);
const dataURL = canvas.toDataURL('image/png');
const link = document.createElement('a');
link.href = dataURL;
link.download = "syxTMP_" + datePrefix + `_HDUB_${factor}_tmpl_` + syntax + '.png';
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

hdubDemo.width  = 100 * factor;
hdubDemo.height = 180 * factor;


let ctx = hdubDemo.getContext("2d");
ctx.clearRect(0,0,hdubDemo.width,hdubDemo.height);
ctx.fillStyle = "lime";
ctx.font = "400 32px dckimPixelMono";
ctx.textAlign = "start";
ctx.textBaseline = "top";
ctx.fillText("x " + factor, 16,16);

if (factor > 4) {
ctx.lineWidth = 2;
ctx.strokeStyle = "lime";
ctx.fillStyle = "rgba(0,0,31,0.25)";
} else if (factor == 1) {
ctx.lineWidth = 4;
ctx.strokeStyle = "darkorange";
ctx.fillStyle = "rgba(31,0,31,0.35)";
} else if (factor == 2) {
ctx.lineWidth = 4;
ctx.strokeStyle = "darkorange";
ctx.fillStyle = "rgba(31,0,31,0.35)";
} else if (factor == 3) {
ctx.lineWidth = 4;
ctx.strokeStyle = "darkorange";
ctx.fillStyle = "rgba(31,0,31,0.35)";
} else if (factor == 4) {
ctx.lineWidth = 4;
ctx.strokeStyle = "darkorange";
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







