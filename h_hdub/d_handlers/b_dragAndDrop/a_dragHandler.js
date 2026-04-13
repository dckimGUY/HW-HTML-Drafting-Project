/* FIND THIS STRING TO CONTINUE */
//if (file.name.toLowerCase().endsWith('.css')) {
// 1. ALLOW THE DRAG: This prevents the browser from opening the file as a new tab
document.addEventListener('dragover', (e) => {
 e.preventDefault();
 e.dataTransfer.dropEffect = 'copy';
});
// 2. HANDLE THE DROP: This decompresses and restores your project
document.addEventListener('drop', async (e) => {
 e.preventDefault();
 // Get the first file dropped
 const file = e.dataTransfer.files[0];
 if (!file) return;
 // Only process your specific project files
 if (file.name.startsWith("HDUB_")) {
 try {
 // DECOMPRESS: Setup the native Gzip stream
 const ds = new DecompressionStream('gzip');
 const decompressedStream = file.stream().pipeThrough(ds);
 // CONVERT: Wait for the stream to turn back into your original JSON string
 const response = new Response(decompressedStream);
 const jsonText = await response.text();
 // REASSEMBLE: Run your custom JSON parser to restore HTML elements
 const restoredObject = JSON.parse(jsonText, (key, value) => {
 if (typeof value === "string" && value.startsWith("<div")) {
 const temp = document.createElement("div");
 temp.innerHTML = value;
 return temp.firstElementChild;
 }
 return value;
 });
 // RESTORE DATA: Map the restored object back to your global variables
 topLayer = restoredObject;
 // Re-link DOM elements
 coinFocus = document.getElementById(topLayer[topLayer.a_currentLayer].e_coinFocus);
 coinFocus1 = document.getElementById(topLayer[topLayer.a_currentLayer].f_coinFocus);
 utilityLayer0.innerHTML = topLayer[topLayer.a_currentLayer].b_content.innerHTML;
 // Restore project metadata
 filename = topLayer[topLayer.a_currentLayer].filename;
 pageEchelon = topLayer[topLayer.a_currentLayer].echelon * 100000000;
 document.getElementById("documentTitle").innerText = filename;
 // Run your UI refresh functions
 restorePointerEventsNone();
 recoverColouration();
 for (let j = 0; j < utilityLayer0.children.length; j++) {
 utilityLayer0.children[j].style.outline = fA;
 utilityLayer0.children[j].style.outlineOffset = fAO;
 }
 if (utilityLayer0.firstElementChild) {
 coinFocus = utilityLayer0.firstElementChild;
 pageEchelon = Math.floor(utilityLayer0.firstElementChild.style.zIndex / 100000000) * 100000000;
 }
 if (coinFocus != null) {
 coinFocus.style.outline = fB;
 coinFocus.style.outlineOffset = fBO;
 }
 curFocus = (coinFocus == null) ? 1 : 0;
 makeTopLayer(topLayer.a_currentLayer);
 // Restore Buffers
 singlePasteBuffer = topLayer.singlePasteBuffer;
 singleRestoreBuffer = topLayer.singleRestoreBuffer;
 multiplePasteBuffer = topLayer.multiplePasteBuffer;
 sel0PasteBuffer = topLayer.sel0PasteBuffer;
 sel1PasteBuffer = topLayer.sel1PasteBuffer;
 sel2PasteBuffer = topLayer.sel2PasteBuffer;
 hold = topLayer.hold;
 if (!topLayer.programStateAccumulator) {
 topLayer.programStateAccumulator = [];
 }
 ui.hwString = topLayer.hwString;
 // Restore UI Inputs
 ui.idNames.forEach((name) => {
 ui[name].value = topLayer.capitals[name].value.outerHTML;
 if (!topLayer.capitals[name].value.outerHTML) {
 ui[name].value = topLayer.capitals[name].value.toString();
 }
 ui[name].title = topLayer.capitals[name].title.toString();
 ui[name].colour = topLayer.capitals[name].colour.toString();
 });
 // Final UI Redraw
 updateInfoShelf();
 redraw();
 readCoins();
 Z();
 drawAllCells();
 ui.projectName.ref.value = topLayer.aa_project_name;
 userCustomTheme = topLayer.projectThemes;
 loadTheme("currentTheme");
 if (topLayer.lastScroll) {
 window.scrollTo(topLayer.lastScroll);
 }
 console.log("Compressed project loaded successfully.");
 } catch (err) {
 console.error("This file is not a compressed HDUB file or is corrupted.", err);
 alert("Error: Could not decompress file. Make sure it was saved with the new compression method.");
 }
 }
});
/* Single Image Drag Handling OR Textual Input Handling. */
document.addEventListener('drop', async (e) => { e.preventDefault();
/* This bit is some setup for accepting the HW syntax as dragged in text... */
const dropText = e.dataTransfer.getData("text").trim();
const numberOfParts = utilityLayer0.children.length;
const file = e.dataTransfer.files[0];
if (!file) return;
if (file.name.toLowerCase().endsWith('.css')) {
hauptModeOriginalState = hauptMode;
hauptMode = 0;
const reader = new FileReader();
reader.onload = evt => {
popStyle();
hauptMode = hauptModeOriginalState;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.firstElementChild.value = evt.target.result;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = evt.target.result;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.lastElementChild.value = evt.target.result;
};
reader.readAsText(file);
return 0;
}
if (file.name.toLowerCase().endsWith('.json')) {
hauptModeOriginalState = hauptMode;
hauptMode = 0;
const reader = new FileReader();
reader.onload = evt => {
popJSON();
hauptMode = hauptModeOriginalState;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.firstElementChild.value = evt.target.result;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = evt.target.result;
utilityLayer0.lastElementChild.dataset.json = JSON.stringify(JSON.parse(evt.target.result));
};
reader.readAsText(file);
return 0;
}
if (file.name.toLowerCase().endsWith('.js')) {
hauptModeOriginalState = hauptMode;
hauptMode = 0;
const reader = new FileReader();
reader.onload = evt => {
popScript();
hauptMode = hauptModeOriginalState;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.firstElementChild.value = evt.target.result;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = evt.target.result;
utilityLayer0.lastElementChild.dataset.addScript = evt.target.result;
};
reader.readAsText(file);
return 0;
}
if (!file.type.startsWith("image/")&&!file.type.startsWith("audio/")&&!file.type.startsWith("video/")) {
const reader = new FileReader();
reader.onload = evt => {
if (!e.target.dataset.coinTrip) {
let sequestrationLayer = document.createElement("div");
sequestrationLayer.innerHTML = reader.result.toString();
if (sequestrationLayer.children.length > 1 && sequestrationLayer.firstElementChild.dataset && sequestrationLayer.firstElementChild.dataset.coinTrip) {
} else {
sequestrationLayer.innerHTML = "";
}
if (sequestrationLayer.lastElementChild&&sequestrationLayer.lastElementChild.tagName=="SCRIPT") {
sequestrationLayer.lastElementChild.remove();
}
utilityLayer0.innerHTML = utilityLayer0.innerHTML + sequestrationLayer.innerHTML;
restorePointerEventsNone();
spaceViewOff();
readCoins();
recoverColouration();
if (utilityLayer0.children.length>0) {
coinFocus = utilityLayer0.lastElementChild;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}
} else {
/* This puts a textual or HTML file into the div. */
e.target.lastElementChild.firstElementChild.innerHTML = reader.result.toString();
e.target.dataset.fileInclude = `${file.name}`;
coinFocus = e.target;
recoverColouration();
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}
};
reader.readAsText(file);
} else {
//if (!file.type.startsWith("image/")&&!file.type.startsWith("audio/")&&!file.type.startsWith("video/")) {
if ( file.type.startsWith("image/")) {
/* ONE MORE RETARDED HACK PLEASE GOD. */
/* I DONT KNOW HOW THIS CODE WORKS. */
if (!e.altKey && e.target.parentNode != document.getElementById("hdubOverlay") && e.target != document.getElementById("hdubOverlay")) {
/* this handles the special importing */
if (file.name.includes("_HDUB_")) {
document.getElementById("hdubPartDesignations").value = "";
function pixelationScale(inputScale) {
let scale = 1;
if (inputScale >= 5) scale = 1;
switch (inputScale) {
case 1: scale = 10; break;
case 2: scale = 8; break;
case 3: scale = 6; break;
case 4: scale = 5; break;
}
if (scale != 1) {
for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.left = parseInt(utilityLayer0.children[j].style.left) * scale + "px";
utilityLayer0.children[j].style.top = parseInt(utilityLayer0.children[j].style.top) * scale + "px";
utilityLayer0.children[j].style.width = parseInt(utilityLayer0.children[j].style.width) * scale + "px";
utilityLayer0.children[j].style.height = parseInt(utilityLayer0.children[j].style.height) * scale + "px";
utilityLayer0.children[j].dataset.left = utilityLayer0.children[j].style.left ;
utilityLayer0.children[j].dataset.top = utilityLayer0.children[j].style.top ;
utilityLayer0.children[j].dataset.width = utilityLayer0.children[j].style.width ;
utilityLayer0.children[j].dataset.height = utilityLayer0.children[j].style.height;
utilityLayer0.children[j].lastElementChild.lastElementChild.lastElementChild.classList = "pixelArt";
}
}
}
 if (file.name.includes("_tmpl_")) {
ui.templateIntake.ref.value = file.name.split("_HDUB_")[0];
sheetImages.star.filename = ui.templateIntake.ref.value;
ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_tmpl_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_tmpl_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_tmpl_")[0]));
sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_tmpl_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
tabSelector(3);
folder3Selector(2);
} else if (file.name.includes("_2btn_")) {
ui.templateIntake.ref.value = file.name.split("_HDUB_")[0];
sheetImages.star.filename = ui.templateIntake.ref.value;
 ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_2btn_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
 ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_2btn_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_2btn_")[0]));
 sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_2btn_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer") ;
const imageCutter = document.createElement("canvas");
imageCutter.width = sheetImages.star.img.width / 2;
imageCutter.height = sheetImages.star.img.height ;
let ctx = imageCutter.getContext("2d") ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width / 2), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click() ;
setTimeout(() => {
ui.getButtons.ref.click() ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
topLayer.importer.b_content.children[j].style.left = parseInt(topLayer.importer.b_content.children[j].style.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].dataset.left = parseInt(topLayer.importer.b_content.children[j].dataset.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].style.top = parseInt(topLayer.importer.b_content.children[j].style.top) + previousScrollY + "px";
topLayer.importer.b_content.children[j].dataset.top = parseInt(topLayer.importer.b_content.children[j].dataset.top) + previousScrollY + "px";
}
while (topLayer.importer.b_content.children.length != 0) {
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
utilityLayer0.appendChild(topLayer.importer.b_content.children[j]); }
}
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 2000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
} else if (file.name.includes("_4btn_")) {
ui.templateIntake.ref.value = file.name.split("_HDUB_")[0];
sheetImages.star.filename = ui.templateIntake.ref.value;
 ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_4btn_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
 ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_4btn_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_4btn_")[0]));
 sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_4btn_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer") ;
const imageCutter = document.createElement("canvas");
imageCutter.width = sheetImages.star.img.width / 4;
imageCutter.height = sheetImages.star.img.height ;
let ctx = imageCutter.getContext("2d") ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (1/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focus.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (2/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.hover.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (3/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click() ;
setTimeout(() => {
ui.getButtons.ref.click() ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
topLayer.importer.b_content.children[j].style.left = parseInt(topLayer.importer.b_content.children[j].style.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].dataset.left = parseInt(topLayer.importer.b_content.children[j].dataset.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].style.top = parseInt(topLayer.importer.b_content.children[j].style.top) + previousScrollY + "px";
topLayer.importer.b_content.children[j].dataset.top = parseInt(topLayer.importer.b_content.children[j].dataset.top) + previousScrollY + "px";
}
while (topLayer.importer.b_content.children.length != 0) {
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
utilityLayer0.appendChild(topLayer.importer.b_content.children[j]); }
}
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 4000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
} else if (file.name.includes("_6btn_")) {
ui.templateIntake.ref.value = file.name.split("_HDUB_")[0];
sheetImages.star.filename = ui.templateIntake.ref.value;
 ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_6btn_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
 ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_6btn_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_6btn_")[0]));
 sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_6btn_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer") ;
const imageCutter = document.createElement("canvas");
imageCutter.width = sheetImages.star.img.width / 6;
imageCutter.height = sheetImages.star.img.height ;
let ctx = imageCutter.getContext("2d") ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (1/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focus.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (2/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.hover.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (3/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (4/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focusHover.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (5/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focusActive.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click() ;
setTimeout(() => {
ui.getButtons.ref.click() ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
topLayer.importer.b_content.children[j].style.left = parseInt(topLayer.importer.b_content.children[j].style.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].dataset.left = parseInt(topLayer.importer.b_content.children[j].dataset.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].style.top = parseInt(topLayer.importer.b_content.children[j].style.top) + previousScrollY + "px";
topLayer.importer.b_content.children[j].dataset.top = parseInt(topLayer.importer.b_content.children[j].dataset.top) + previousScrollY + "px";
}
while (topLayer.importer.b_content.children.length != 0) {
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
utilityLayer0.appendChild(topLayer.importer.b_content.children[j]); }
}
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 6000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
} else if (file.name.includes("_2img_")) {
ui.templateIntake.ref.value = file.name.split("_HDUB_")[0];
sheetImages.star.filename = ui.templateIntake.ref.value;
 ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_2img_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
 ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_2img_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_2img_")[0]));
 sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_2img_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer") ;
const imageCutter = document.createElement("canvas");
imageCutter.width = sheetImages.star.img.width / 2;
imageCutter.height = sheetImages.star.img.height ;
let ctx = imageCutter.getContext("2d") ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width / 2), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click() ;
setTimeout(() => {
ui.getButtons.ref.click() ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
topLayer.importer.b_content.innerHTML = "";
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 2000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
tabSelector(3);
folder3Selector(2);
setTimeout(() => { setupTheAnimator(); }, 5000);
} else if (file.name.includes("_4img_")) {
ui.templateIntake.ref.value = file.name.split("_HDUB_")[0];
sheetImages.star.filename = ui.templateIntake.ref.value;
 ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_4img_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
 ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_4img_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_4img_")[0]));
 sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_4img_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer") ;
const imageCutter = document.createElement("canvas");
imageCutter.width = sheetImages.star.img.width / 2;
imageCutter.height = sheetImages.star.img.height ;
let ctx = imageCutter.getContext("2d") ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width / 2), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click() ;
setTimeout(() => {
ui.getButtons.ref.click() ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
topLayer.importer.b_content.innerHTML = "";
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 2000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
tabSelector(3);
folder3Selector(2);
setTimeout(() => { setupTheAnimator(); }, 5000);
} else if (file.name.includes("_6img_")) {
ui.templateIntake.ref.value = file.name.split("_HDUB_")[0];
sheetImages.star.filename = ui.templateIntake.ref.value;
 ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_6img_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
 ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_6img_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_6img_")[0]));
 sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_6img_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer") ;
const imageCutter = document.createElement("canvas");
imageCutter.width = sheetImages.star.img.width / 2;
imageCutter.height = sheetImages.star.img.height ;
let ctx = imageCutter.getContext("2d") ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width / 2), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click() ;
setTimeout(() => {
ui.getButtons.ref.click() ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
topLayer.importer.b_content.innerHTML = "";
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 2000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
tabSelector(3);
folder3Selector(2);
setTimeout(() => { setupTheAnimator(); }, 5000);
} else {
["hwSel_a", "hwSel_b", "hwSel_c", "hwSel_d", "hwSel_e", "hwSel_f", "hwSel_g", "hwSel_i", "hwSel_j", "hwSel_k", "hwSel_l", "hwSel_m", "hwSel_n", "hwSel_o", "hwSel_p", "hwSel_q", "hwSel_r", "hwSel_s", "hwSel_t", "hwSel_u", "hwSel_v", "hwSel_x", "hwSel_y", "hwSel_z"].forEach((name) => {
if (event.target == ui[name].ref) {
ui.hwString[name].string = file.name.split("_HDUB_")[1].replace(".png", "");
switchString(name);
ui[name].img.src = drawCell(ui.hwString[name].string,ui.hwString[name].colour);
drawArray(cropObject(100, 180, makeObject(clean(ui.hwString[name].string))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
tabSelector(4);
folder4Selector(1);
document.getElementById("hdubSingleEntry").focus();
}
});
}
} else {
hauptModeOriginalState = hauptMode;
hauptMode = 0;
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.loading = "lazy";
img.style.width  = "100%";
img.style.height = "100%";
insertNewCoin(["",78,78,true,false,false]);
utilityLayer0.lastElementChild.style.height = img.naturalHeight + "px";
utilityLayer0.lastElementChild.style.width = img.naturalWidth + "px";
utilityLayer0.lastElementChild.dataset.height = utilityLayer0.lastElementChild.style.height;
utilityLayer0.lastElementChild.dataset.width = utilityLayer0.lastElementChild.style.width;
utilityLayer0.lastElementChild.style.left = Math.floor(parseInt(e.pageX)/T) * T + "px";
utilityLayer0.lastElementChild.style.top = Math.floor(parseInt(e.pageY)/T) * T + "px";
utilityLayer0.lastElementChild.dataset.left = Math.floor(parseInt(e.pageX)/T) * T + "px";
utilityLayer0.lastElementChild.dataset.top = Math.floor(parseInt(e.pageY)/T) * T + "px";
utilityLayer0.lastElementChild.id = utilityLayer0.lastElementChild.id.replace(/coin/g, "img");
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.innerHTML = "";
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.appendChild(img);
hauptMode = hauptModeOriginalState;
};
if (useBase64forImages==true) {
img.src = evt.target.result;
} else {
img.src ="./" + hdub_imagePath + file.name;
}
};
reader.readAsDataURL(file);
}
} else if (e.altKey || e.target.parentNode != document.getElementById("hdubOverlay") || e.target != document.getElementById("hdubOverlay")) {
/* retarded hack-job */
const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
Picture.width = img.width;
Picture.height = img.height;
let ctx = Picture.getContext("2d");
ctx.drawImage(img, 0, 0, img.width, img.height);
Picture.style.display="block";
let pictureScale = 1;
switch (document.getElementById("hdubSheetTemplate4x").value) {
case '1': pictureScale = 10; break;
case '2': pictureScale = 8; break;
case '3': pictureScale = 6; break;
case '4': pictureScale = 5; break;
}
Picture.style.transform = "scale(" + pictureScale + ")";
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
}
} else if ( file.type.startsWith("audio/")) {
const mouseCover = event.target;
hauptModeOriginalState = hauptMode;
hauptMode = 0;
const reader = new FileReader();
reader.onload = evt => {
const audio = new Audio();
if (mouseCover.dataset &&
mouseCover.dataset.coinTrip &&
mouseCover.lastElementChild.firstElementChild.firstElementChild.tagName == "BUTTON") {
mouseCover.lastElementChild.firstElementChild.firstElementChild.dataset.audio = evt.target.result;
mouseCover.lastElementChild.firstElementChild.firstElementChild.setAttribute("onclick", "let player = new Audio(); player.src = this.dataset.audio; player.play();");
} else {
insertNewCoin(["",78,78,true,false,false]);
hauptMode = hauptModeOriginalState;
if (useBase64forAudio==true) {
audio.src = evt.target.result;
} else {
audio.src ="./b_audio/" + file.name;
}
audio.style.width = "100%";
audio.style.height = "100%";
audio.style.margin = "0";
audio.style.padding = "0";
audio.style.border = "0";
audio.controls="true";
utilityLayer0.lastElementChild.style.height = "64";
utilityLayer0.lastElementChild.style.width = "256px";
utilityLayer0.lastElementChild.dataset.height = "64";
utilityLayer0.lastElementChild.dataset.width = "256px";
utilityLayer0.lastElementChild.style.left = Math.floor(parseInt(e.pageX)/T) * T + "px";
utilityLayer0.lastElementChild.style.top = Math.floor(parseInt(e.pageY)/T) * T + "px";
utilityLayer0.lastElementChild.dataset.left = Math.floor(parseInt(e.pageX)/T) * T + "px";
utilityLayer0.lastElementChild.dataset.top = Math.floor(parseInt(e.pageY)/T) * T + "px";
utilityLayer0.lastElementChild.id = utilityLayer0.lastElementChild.id.replace(/coin/g, "audio");
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.innerHTML = "";
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.appendChild(audio);
}
};
reader.readAsDataURL(file);
} else if ( file.type.startsWith("video/")) {
hauptModeOriginalState = hauptMode;
hauptMode = 0;
const reader = new FileReader();
reader.onload = evt => {
const video = document.createElement("video");
insertNewCoin(["",78,78,true,false,false]);
hauptMode = hauptModeOriginalState;
if (useBase64forVideo==true) {
video.src = evt.target.result;
} else {
video.src ="./c_video/" + file.name;
}
video.style.width = "100%";
video.style.height = "100%";
video.style.margin = "0";
video.style.padding = "0";
video.style.border = "0";
video.controls="true";
utilityLayer0.lastElementChild.style.height = "256px";
utilityLayer0.lastElementChild.dataset.height = "256px";
utilityLayer0.lastElementChild.style.width = "256px";
utilityLayer0.lastElementChild.dataset.width = "256px";
utilityLayer0.lastElementChild.style.left = Math.floor(parseInt(e.pageX)/T) * T + "px";
utilityLayer0.lastElementChild.style.top = Math.floor(parseInt(e.pageY)/T) * T + "px";
utilityLayer0.lastElementChild.dataset.left = Math.floor(parseInt(e.pageX)/T) * T + "px";
utilityLayer0.lastElementChild.dataset.top = Math.floor(parseInt(e.pageY)/T) * T + "px";
utilityLayer0.lastElementChild.id = utilityLayer0.lastElementChild.id.replace(/coin/g, "video");
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.innerHTML = "";
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.appendChild(video);
};
reader.readAsDataURL(file);
}
}
restorePointerEventsNone();
recoverColouration();
readCoins();
});
