let mouseDeltaX = 0,
 mouseDeltaY = 0;
let mousemoveTarget=null;
document.addEventListener("mousemove", (event) => {
if (event.target.dataset&&event.target.dataset.coinTrip) {
mousemoveTarget=event.target;
} else {
mousemoveTarget=null;
}
/* basically seems to be working okay */
if (mousedown.hold==true && event.target.id.toString() == "siteMapCanvas") {
drawSiteMap();
const menuScale = parseFloat(document.getElementById("menuWrapper").style.transform.replace(/scale\(/g,"").replace(/\)/g,""));
const zoomFactor = parseFloat(document.getElementById("siteMapWrapper").style.transform.replace(/scale\(/g,"").replace(/\)/g,""));
/* EXTRA CHEESY METHOD: JUST PICK NUMBERS */
/* THIS MAKES THE VIEW-FINDER TRACK GOOD */
let trackFactor = 2.25;
switch (parseInt(Math.floor(parseFloat(ui.menuWrapper.ref.style.transform.slice(6,-1)) * 4))) {
case 1: trackFactor = 120.00 ; break;
case 2: trackFactor = 33.60 ; break;
case 3: trackFactor = 20.85 ; break;
case 4: trackFactor = 11.50 ; break;
case 5: trackFactor = 8.00 ; break;
case 6: trackFactor = 5.80 ; break;
case 7: trackFactor = 4.15 ; break;
case 8: trackFactor = 3.35 ; break;
case 9: trackFactor = 2.68 ; break;
case 10: trackFactor = 2.28 ; break;
case 11: trackFactor = 1.98 ; break;
case 12: trackFactor = 1.60 ; break;
case 13: trackFactor = 1.395 ; break;
case 14: trackFactor = 1.22 ; break;
case 15: trackFactor = 1.075 ; break;
case 16: trackFactor = 0.925 ; break;
case 17: trackFactor = 0.80 ; break;
case 18: trackFactor = 0.73 ; break;
case 19: trackFactor = 0.667 ; break;
case 20: trackFactor = 0.61 ; break;
case 21: trackFactor = 0.55 ; break;
case 22: trackFactor = 0.515 ; break;
case 23: trackFactor = 0.462 ; break;
case 24: trackFactor = 0.43 ; break;
case 25: trackFactor = 0.392 ; break;
case 26: trackFactor = 0.36 ; break;
case 27: trackFactor = 0.345 ; break;
case 28: trackFactor = 0.315 ; break;
case 29: trackFactor = 0.290 ; break;
case 30: trackFactor = 0.268 ; break;
case 31: trackFactor = 0.259 ; break;
case 32: trackFactor = 0.25 ; break;
case 33: trackFactor = 0.235 ; break;
}
const factor = trackFactor * menuScale / zoomFactor;
mouseX = mousedown.scrollX + ((mousedown.clientX - event.clientX) * factor);
mouseY = mousedown.scrollY + ((mousedown.clientY - event.clientY) * factor);
quarterMouseX = mousedown.scrollX + ((mousedown.clientX - event.clientX) * factor) / 4;
quarterMouseY = mousedown.scrollY + ((mousedown.clientY - event.clientY) * factor) / 4;
if (event.buttons===4) {
event.preventDefault();
if (!event.ctrlKey&&!event.shiftKey) {
window.scrollTo({ left: mouseX, top: mouseY, behavior: "auto"});
} else if (!event.ctrlKey&& event.shiftKey) {
window.scrollTo({ left: quarterMouseX, top: quarterMouseY, behavior: "auto"});
}
topLayer.lastScroll = { left: window.scrollX, top: window.scrollY, behavior: "auto"};
localStorage.setItem("lastScroll", JSON.stringify(topLayer.lastScroll));
return;
}
}
if (mouseIsDogged==true) {
if (mousedown.hold==true) {
drawSiteMap();
mouseX = mousedown.scrollX + mousedown.clientX - event.clientX;
mouseY = mousedown.scrollY + mousedown.clientY - event.clientY;
quarterMouseX = mousedown.scrollX + (mousedown.clientX - event.clientX) / 4;
quarterMouseY = mousedown.scrollY + (mousedown.clientY - event.clientY) / 4;
if (event.buttons===4) {
event.preventDefault();
if (!event.ctrlKey&&!event.shiftKey) {
window.scrollTo({ left: mouseX, top: mouseY, behavior: "auto"});
} else if (!event.ctrlKey&& event.shiftKey) {
window.scrollTo({ left: quarterMouseX, top: quarterMouseY, behavior: "auto"});
}
topLayer.lastScroll = { left: window.scrollX, top: window.scrollY, behavior: "auto"};
localStorage.setItem("lastScroll", JSON.stringify(topLayer.lastScroll));
return;
}
}
}
if (mouseIsDogged==false) {
const ctrl = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const e = event;
const mouseInfo = [e,ctrl,shift,alt];
if (mousedown.hold==true) {
drawSiteMap();
mouseDeltaX = event.pageX - mousedown.pageX;
mouseDeltaY = event.pageY - mousedown.pageY;
mouseX = mousedown.scrollX + mousedown.clientX - event.clientX;
mouseY = mousedown.scrollY + mousedown.clientY - event.clientY;
quarterMouseX = mousedown.scrollX + (mousedown.clientX - event.clientX) / 4;
quarterMouseY = mousedown.scrollY + (mousedown.clientY - event.clientY) / 4;
if (event.buttons===4) {
event.preventDefault();
position1X = Math.floor(mouseX/mouseIncrement)*mouseIncrement;
position1Y = Math.floor(mouseY/mouseIncrement)*mouseIncrement;
position2X = Math.floor(mouseX/visualGridSize2)*visualGridSize2;
position2Y = Math.floor(mouseY/visualGridSize2)*visualGridSize2;
if (!event.ctrlKey&&!event.shiftKey) {
window.scrollTo({ left: position1X, top: position1Y, behavior: "auto"});
} else if (!event.ctrlKey&& event.shiftKey) {
window.scrollTo({ left: position2X, top: position2Y, behavior: "auto"});
} else if ( event.ctrlKey&& event.shiftKey) {
window.scrollTo({ left: quarterMouseX, top: quarterMouseY, behavior: "auto"});
} else if ( event.ctrlKey&&!event.shiftKey) {
window.scrollTo({ left: mouseX, top: mouseY, behavior: "auto"});
}
topLayer.lastScroll = { left: window.scrollX, top: window.scrollY, behavior: "auto"};
localStorage.setItem("lastScroll", JSON.stringify(topLayer.lastScroll));
return;
}
}
if (mousedown.hold == false && hotDog == false) {
if (!ctrl && !shift && !alt) {
let found = false;
for (let j = 0; j < utilityLayer0.children.length; j++) {
if (event.target == utilityLayer0.children[j]) {
found = true;
/* THESE HAVE BEEN ADAPTED TO ALIGN WITH THE VISUALS AND THE KEYBOARD ACTION */
if (mode==1) {
 if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.nwResize; } //7
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.wResize; } //4
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.swResize; } //1
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.nResize; } //8
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //5
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.sResize; } //2
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.neResize; } //9
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.eResize; } //6
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.seResize; } //3
}
} else if (mode==5) {
if (eM==0) {
 if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //7
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //4
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.sResize; } //1
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //8
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //5
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.sResize; } //2
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.eResize; } //9
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.eResize; } //6
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.seResize; } //3
}
} else if (eM==1) {
 if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.nwResize; } //7
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.wResize; } //4
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.wResize; } //1
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.nResize; } //8
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //5
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //2
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.nResize; } //9
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //6
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //3
}
}
} else if (mode==6) {
 if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.nwResize; } //7
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //4
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.swResize; } //1
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //8
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //5
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //2
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.neResize; } //9
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab; } //6
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { utilityLayer0.children[j].style.cursor = cursor.seResize; } //3
}
} else {
utilityLayer0.children[j].style.cursor = cursor.grab;
}
} else {
utilityLayer0.children[j].style.cursor = cursor.crosshair;
}
}
} else {
/*
if (mode!=8) {
 if ( ctrl && !shift && !alt) {
event.target.style.cursor = cursor.copy;
} else if (!ctrl && shift && !alt) {
event.target.style.cursor = cursor.move;
} else if (!ctrl && !shift && alt) {
event.target.style.cursor = cursor.move;
} else if ( ctrl && shift && !alt) {
event.target.style.cursor = cursor.crosshair;
} else if ( ctrl && !shift && alt) {
event.target.style.cursor = cursor.grab;
} else if (!ctrl && shift && alt) {
event.target.style.cursor = cursor.grab;
} else if ( ctrl && shift && alt) {
event.target.style.cursor = cursor.grab;
} else {
event.target.style.cursor = cursor.grab;
}
} else {
event.target.style.cursor = cursor.cell;
}
*/
}
utilityLayer0.style.cursor = "crosshair";
}
mode1.mousemove(mouseInfo);
switch (mode) {
case 0: mode0.mousemove(mouseInfo); break;
case 2: mode2.mousemove(mouseInfo); break;
case 3: mode3.mousemove(mouseInfo); break;
case 4: mode4.mousemove(mouseInfo); break;
case 5: mode5.mousemove(mouseInfo); break;
case 6: mode6.mousemove(mouseInfo); break;
case 7: mode7.mousemove(mouseInfo); break;
case 8: mode8.mousemove(mouseInfo); break;
case 9: mode9.mousemove(mouseInfo); break;
}
/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/
if (mousedown.hold==false) {
/*
if (event.target.dataset.coinTrip) {
 if (event.target.dataset.coinTrip==Ts0||
 event.target.dataset.coinTrip==Ts1||
 event.target.dataset.coinTrip==Ts2) {
edgeDetect.style.left = `${parseInt(event.target.style.left) + edgeQ + "px"}` ;
edgeDetect.style.top = `${parseInt(event.target.style.top) + edgeQ + "px"}` ;
edgeDetect.style.width = `${parseFloat(event.target.style.width) * parseFloat(event.target.dataset.scale) - (edgeQ * 2) + "px"}` ;
edgeDetect.style.height = `${parseFloat(event.target.style.height) * parseFloat(event.target.dataset.scale) - (edgeQ * 2) + "px"}` ;
edgeDetect.style.zIndex = `${parseInt(event.target.style.zIndex) + 1}` ;
edgeDetect.style.display= "block";
} else {
edgeDetect.style.display= "none";
}
} else {
edgeDetect.style.display= "none";
}
} else {
if (mousedown.hold==true) {
if (mousedown.target!=null&&mousedown.target.dataset.coinTrip) {
 if (mousedown.target.dataset.coinTrip==Ts0||
 mousedown.target.dataset.coinTrip==Ts1||
 mousedown.target.dataset.coinTrip==Ts2) {
edgeDetect.style.left = `${parseInt(mousedown.target.style.left) + edgeQ + "px"}` ;
edgeDetect.style.top = `${parseInt(mousedown.target.style.top) + edgeQ + "px"}` ;
edgeDetect.style.width = `${parseFloat(mousedown.target.style.width) * parseFloat(mousedown.target.dataset.scale) - (edgeQ * 2) + "px"}` ;
edgeDetect.style.height = `${parseFloat(mousedown.target.style.height) * parseFloat(mousedown.target.dataset.scale) - (edgeQ * 2) + "px"}` ;
edgeDetect.style.zIndex = `${parseInt(mousedown.target.style.zIndex) + 1}` ;
edgeDetect.style.display= "block";
} else {
}
} else {
}
}
*/
}
redraw();
/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/
} else if (mouseIsDogged==true) {
if (event.target.dataset.coinTrip) {
 if (event.target.dataset.coinTrip==Ts0||
 event.target.dataset.coinTrip==Ts1||
 event.target.dataset.coinTrip==Ts2) {
pulledText.style.left = `${event.target.style.left}` ;
pulledText.style.top = `${event.target.style.top}` ;
pulledText.style.width = `${parseFloat(event.target.style.width) * parseFloat(event.target.dataset.scale) + "px"}` ;
pulledText.style.height = `${parseFloat(event.target.style.height) * parseFloat(event.target.dataset.scale) + "px"}` ;
pulledText.style.zIndex = `${parseInt(event.target.style.zIndex) + 1}` ;
if (event.target.dataset.wrapper=="true") {event.target.style.pointerEvents="none";}
if (event.target.dataset.dragPull) {
let dragPullArray = event.target.dataset.dragPull.split(",");
/*
for (let j = 0; j < dragPullArray.length; j++) {
dragPullArray[j] = dragPullArray[j].trim();
}
*/
pulledText.value = blankSpaces;
for (let j = 0; j < dragPullArray.length; j++) {
 if (dragPullArray[j].startsWith("backgroundColor")) {
pulledText.style.color = dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.style.backgroundColor;
pulledText.value += `${event.target.lastElementChild.firstElementChild.style.backgroundColor.toString()}`;
pulledText.value += '\n';
} else if (dragPullArray[j].startsWith("style.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.style[`${dragPullArray[j].split(".")[1]}`]; }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("dataset.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.dataset[`${dragPullArray[j].split(".")[1]}`]; }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("anchor.style.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.firstElementChild.style[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("anchor.dataset.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.firstElementChild.dataset[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("anchor.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.firstElementChild[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("main.style.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.lastElementChild.style[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("main.dataset.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.lastElementChild.dataset[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("main.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.lastElementChild[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("div.style.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.style[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("div.dataset.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.dataset[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("div.")) {
try{ pulledText.value += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';
} else {
try{ pulledText.value += dragPullArray[j] + '="' + event.target[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';
}
}
}
pulledText.value += blankSpaces;
pulledText.value = pulledText.value.replace(/("")/g,'"');
pulledText.style.display= "block";
}
}
}
updateInfoShelf();
});
let
mousedown = {};
mousedown.hold = false;
mousedown.modeNumber = 0;
mousedown.button = 0;
mousedown.button0 = false;
mousedown.button1 = false;
mousedown.button2 = false;
mousedown.ctrl = 0;
mousedown.shift = 0;
mousedown.alt = 0;
mousedown.meta = 0;
mousedown.pageX = 0;
mousedown.pageY = 0;
mousedown.clientX = 0;
mousedown.clientY = 0;
mousedown.scrollX = 0;
mousedown.scrollY = 0;
mousedown.tripSet = null;
mousedown.target = null;
mousedown.targetRegion = 5;
/* This puts the information from the mousedown event into data so that we can refer to it later in our conditions. */
document.addEventListener("mousedown", (event) => {
drawSiteMap();
switch (event.button) {
case 0: mousedown.button0 = true; break;
case 1: mousedown.button1 = true; break;
case 2: mousedown.button2 = true; break;
}
if (splashScreen.style.display != "none") {
for (let j = 100; j >= 0; j--) {
if (j == 100) {
setTimeout(() => { splashScreen.style.display = "none"; }, 150);
} else {
setTimeout(() => {
splashScreen.style.opacity = j / 100;
splashScreen.style.transform = `scale(${100 / j})`;
}, (100 - j) * 2);
}
}
}
mousedown.clientX = event.clientX;
mousedown.clientY = event.clientY;
mousedown.scrollX = window.scrollX;
mousedown.scrollY = window.scrollY;
if (event.button===1) {
event.preventDefault();
}
if (event.button!=2) {
mousedown.hold = true;
} else {
mousedown.hold=false;
}
if (mouseIsDogged==false) {
const ctrl = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
mouseGiveFocus(mouseInfo);
mousedown.modeNumber = mode;
mousedown.lastButton = mousedown.button;
mousedown.button = event.button;
mousedown.ctrl = event.ctrlKey;
mousedown.shift = event.shiftKey;
mousedown.alt = event.altKey;
mousedown.meta = event.metaKey;
mousedown.pageX = event.pageX;
mousedown.pageY = event.pageY;
mousedown.tripSet = event.target.dataset.tripSet;
if (event.target.dataset.coinTrip==Ts0||event.target.dataset.coinTrip==Ts1||event.target.dataset.coinTrip==Ts2) {
mousedown.target = event.target;
} else {
if (!alt&&ctrl&&shift&&mode==8) {
modeRouter(event,1);
}
}
if (event.target.dataset.coinTrip==Ts0||event.target.dataset.coinTrip==Ts1||event.target.dataset.coinTrip==Ts2) {
if (hotDog==false) {
if (!ctrl && !shift) {
 if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { mousedown.targetRegion = 7; }
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { mousedown.targetRegion = 4; }
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { mousedown.targetRegion = 1; }
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { mousedown.targetRegion = 8; }
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { mousedown.targetRegion = 5; event.target.style.cursor= cursor.grabbing; }
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { mousedown.targetRegion = 2; }
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3))) {
 if (event.pageY <= (parseInt(event.target.style.top) + (edgeQ))) { mousedown.targetRegion = 9; }
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height) - edgeQ))) { mousedown.targetRegion = 6; }
else if (event.pageY <= (parseInt(event.target.style.top) + (parseInt(event.target.style.height)*3/3))) { mousedown.targetRegion = 3; }
}
} else {
if (mode!=8) {
 if ( ctrl && !shift && !alt) {
event.target.style.cursor = cursor.copy;
} else if (!ctrl && shift && !alt) {
event.target.style.cursor = cursor.move;
} else if (!ctrl && !shift && alt) {
event.target.style.cursor = cursor.move;
} else if ( ctrl && shift && !alt) {
event.target.style.cursor = cursor.grab;
} else if ( ctrl && !shift && alt) {
event.target.style.cursor = cursor.grab;
} else if (!ctrl && shift && alt) {
event.target.style.cursor = cursor.grab;
} else if ( ctrl && shift && alt) {
event.target.style.cursor = cursor.grab;
} else {
event.target.style.cursor = cursor.grab;
}
} else {
event.target.style.cursor = cursor.cell;
}
}
}
utilityLayer0.style.cursor = "crosshair";
}
if (!alt&&ctrl&&!shift&&mode!=8) {
if (event.target.dataset.coinTrip) {
insertNewDuplicate([event,68,68,shift,ctrl,false]);
}
focusFlip();
}
switch (mode) {
case 0: mode0.mousedown(mouseInfo); break;
case 1: mode1.mousedown(mouseInfo); break;
case 2: mode2.mousedown(mouseInfo); break;
case 3: mode3.mousedown(mouseInfo); break;
case 4: mode4.mousedown(mouseInfo); break;
case 5: mode5.mousedown(mouseInfo); break;
case 6: mode6.mousedown(mouseInfo); break;
case 7: mode7.mousedown(mouseInfo); break;
case 8: mode8.mousedown(mouseInfo); break;
case 9: mode9.mousedown(mouseInfo); break;
}
}
redraw();
});
let mouseupTarget = null;
document.addEventListener("mouseup", (event) => {
activeUpdate();
if (event.target.dataset&&event.target.dataset.coinTrip) {
mouseupTarget=event.target;
} else {
mouseupTarget=null;
}
switch (event.button) {
case 0: mousedown.button0 = false; break;
case 1: mousedown.button1 = false; break;
case 2: mousedown.button2 = false; break;
}
const ctrl = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
if (hotDog==false) {
if (!ctrl && !shift && !alt) {
if (coinFocus!=null) {
coinFocus.style.cursor = cursor.grab;
}
}
}
mousedown.hold = false;
mousedown.pageX = 0;
mousedown.pageY = 0;
if (mouseIsDogged==false) {
if (mousedown.button==1&&event.button==1&&mousedown.target==event.target) {
mouseGiveFocus(mouseInfo);
//deleteCoin([,88,88,,]);
//edgeDetect.style.display= "none";
}
mode1.mouseup(mouseInfo);
switch (mode) {
case 0: mode0.mouseup(mouseInfo);break;
case 2: mode2.mouseup(mouseInfo);break;
case 3: mode3.mouseup(mouseInfo);break;
case 4: mode4.mouseup(mouseInfo);break;
case 5: mode5.mouseup(mouseInfo);break;
case 6: mode6.mouseup(mouseInfo);break;
case 7: mode7.mouseup(mouseInfo);break;
case 8: mode8.mouseup(mouseInfo);break;
case 9: mode9.mouseup(mouseInfo);break;
}
mousedown.target = null;
}
if (!event.target.dataset.coinTrip) {
//edgeDetect.style.display= "none";
}
redraw();
});
document.addEventListener("click", (event) => {
if (mouseIsDogged==false) {
 if (lastFlow == "global") {
reflowGlobal(rev,0)
} else if (lastFlow == "colour") {
reflowPerTrip();
}
}
drawSiteMap();
loadSidebar1();
updateInfoShelf();
if (coinFocus!=null&&drawPartNames=="true"&&event.target&&event.target.dataset&&event.target.dataset.coinTrip) {
/* COPY VARIOUS STUFF TO THE CLIPBOARD IF ENABLED */
 if (!event.shiftKey&&!event.ctrlKey) {
/* copyToClipboard(coinFocus.id); */
} else if ( event.shiftKey&&!event.ctrlKey) {
let setName = "sel0";
 if (coinFocus.dataset.coinTrip=="0") {
setName = "sel0";
} else if (coinFocus.dataset.coinTrip=="1") {
setName = "sel1";
} else if (coinFocus.dataset.coinTrip=="2") {
setName = "sel2";
}
let variableName = "n" + Date.now();
let clipList =
`const ${variableName} =
[
"`;
for ( let j = 0; j < coinTrip[setName].length; j++) {
if (j != coinTrip[setName].length - 1) {
clipList += coinTrip[setName][j].id + '",\n"';
} else {
clipList += coinTrip[setName][j].id +'"\n];';
}
}
copyToClipboard(clipList);
} else if ( event.shiftKey&& event.ctrlKey) {
copyToClipboard(coinFocus.lastElementChild.firstElementChild.innerHTML);
}
}
if (mode==0) { curFocus=0; modeRouter(event,1); }
if (mouseIsDogged==false) {
const ctrl = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
if (!ctrl&&!shift) {
mouseGiveFocus(mouseInfo);
}
if ((event.target==document.documentElement&&curFocus==1)&&Math.abs(mouseDeltaX)<32&&Math.abs(mouseDeltaY)<32) {
mousePlaceCursor(mouseInfo);
}
switch (mode) {
case 0: mode0.mouseclick(mouseInfo);break;
case 1: mode1.mouseclick(mouseInfo);break;
case 2: mode2.mouseclick(mouseInfo);break;
case 3: mode3.mouseclick(mouseInfo);break;
case 4: mode4.mouseclick(mouseInfo);break;
case 5: mode5.mouseclick(mouseInfo);break;
case 6: mode6.mouseclick(mouseInfo);break;
case 7: mode7.mouseclick(mouseInfo);break;
case 8: mode8.mouseclick(mouseInfo);break;
case 9: mode9.mouseclick(mouseInfo);break;
}
mouseDeltaX = 0;
mouseDeltaY = 0;
redraw();
}
});
document.addEventListener("dblclick", (event) => {
if (mouseIsDogged==true) {
if (event.target === document.documentElement) {
if (ui.folder52.ref.style.display == "none" ||
 ui.tab5Wrapper.ref.style.display == "none") {
hdubDemo.style.opacity = 0;
}
if (mode==0) { curFocus=0; modeRouter(event,1); }
hotDog = false;
spaceViewOff([event,32,32,event.shiftKey,event.ctrlKey,event.altKey]);
restorePointerEventsNone();
helpMenuOverlay.style.display="none";
F.focus();
return;
}
}
if (mouseIsDogged==false) {
const ctrl = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
 if (event.target.dataset.coinTrip&&!shift&&!alt) {
/* TUCK THE EDGE INWARD TO THE NEAREST MOUSE GRID STEP */
const originalEM = eM;
const originalT = T;
T = mouseIncrement;
switch (mousedown.targetRegion) {
case 1:
eM = 0; extendEdge(['',74,106]); //j bottom down
eM = 0; extendEdge(['',75,107]); //k bottom up
eM = 1; extendEdge(['',72,104]); //h right left
eM = 1; extendEdge(['',76,108]); //l right right
redraw(); return;
case 2:
eM = 0; extendEdge(['',74,106]); //j bottom down
eM = 0; extendEdge(['',75,107]); //k bottom up
redraw(); return;
case 6:
eM = 0; extendEdge(['',76,108]); //l right right
eM = 0; extendEdge(['',72,104]); //h right left
redraw(); return;
case 3:
eM = 0; extendEdge(['',76,108]); //l right right
eM = 0; extendEdge(['',72,104]); //h right left
eM = 0; extendEdge(['',74,106]); //j bottom down
eM = 0; extendEdge(['',75,107]); //k bottom up
redraw(); return;
case 8:
eM = 1; extendEdge(['',75,107]); //k bottom up
eM = 1; extendEdge(['',74,106]); //j bottom down
redraw(); return;
case 4:
eM = 1; extendEdge(['',72,104]); //h right left
eM = 1; extendEdge(['',76,108]); //l right right
redraw(); return;
case 7:
eM = 1; extendEdge(['',75,107]); //k bottom up
eM = 1; extendEdge(['',74,106]); //j bottom down
eM = 1; extendEdge(['',72,104]); //h right left
eM = 1; extendEdge(['',76,108]); //l right right
redraw(); return;
case 9:
eM = 0; extendEdge(['',76,108]); //l right right
eM = 0; extendEdge(['',72,104]); //h right left
eM = 1; extendEdge(['',75,107]); //k bottom up
eM = 1; extendEdge(['',74,106]); //j bottom down
redraw(); return;
}
T = originalT ;
eM = originalEM;
//insertNewDuplicate([,68,100,,,]);
hotDog = true; event.preventDefault(); spaceViewOn([event,32,32,event.shiftKey,event.ctrlKey,event.altKey]); removePointerEventsNone();
if (coinFocus != null &&
 coinFocus.lastElementChild.firstElementChild
) {
if (ui.folder52.ref.style.display == "block" &&
 ui.tab5Wrapper.ref.style.display == "block") {
coinFocus.firstElementChild.style.zIndex = "0";
}
coinFocus.lastElementChild.firstElementChild.focus();
}
} else if (event.target.dataset.coinTrip&& shift&&!alt) {
try { cutOutImage(); } catch {}
} else if (event.target.dataset.coinTrip&&!shift&& alt) {
} else if (event.target==document.documentElement) {
mousePlaceCursor(mouseInfo);
curFocus=1;
modeRouter(event,1);
if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}
recoverColouration();
}
switch (mode) {
case 0: mode0.dblclick(mouseInfo);break;
case 1: mode1.dblclick(mouseInfo);break;
case 2: mode2.dblclick(mouseInfo);break;
case 3: mode3.dblclick(mouseInfo);break;
case 4: mode4.dblclick(mouseInfo);break;
case 5: mode5.dblclick(mouseInfo);break;
case 6: mode6.dblclick(mouseInfo);break;
case 7: mode7.dblclick(mouseInfo);break;
case 8: mode8.dblclick(mouseInfo);break;
case 9: mode9.dblclick(mouseInfo);break;
}
redraw();
}
});
/* Scraps the dots if the mouse leaves the browser window. */
document.addEventListener("mouseleave", (event) => {
if (mouseIsDogged==false) {
const ctrl = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
rdots();
redraw();
}
});
/* This gives the change of colouration and other styles on mouse over. */
document.addEventListener("mouseover", (event) => {
if (mouseIsDogged==false) {
const ctrl = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
switch (mode) {
//case 0: mode0.mouseover(mouseInfo); break;
//case 1: mode1.mouseover(mouseInfo); break;
//case 2: mode2.mouseover(mouseInfo); break;
//case 3: mode3.mouseover(mouseInfo); break;
//case 4: mode4.mouseover(mouseInfo); break;
//case 5: mode5.mouseover(mouseInfo); break;
//case 6: mode6.mouseover(mouseInfo); break;
//case 7: mode7.mouseover(mouseInfo); break;
case 8: mode8.mouseover(mouseInfo); break;
//case 9: mode9.mouseover(mouseInfo); break;
}
redraw();
}
});
document.addEventListener("mouseout", (event) => {
if (mouseIsDogged==false) {
const ctrl = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
redraw();
}
//edgeDetect.style.display = "none";
});
setTimeout(() => { loadSidebar1(); }, 200);
