function openProject() {
(() => {
const input  = document.createElement('input');
input.type   = 'file';
input.accept = '.html';
input.addEventListener('change', e => {
const file = e.target.files[0];
if (!file) return;

const reader = new FileReader();
reader.onload = event => {





const restoredObject = JSON.parse(reader.result.toString(), (key, value) => {
if (typeof value === "string" && value.startsWith("<div")) {
const temp = document.createElement("div");
temp.innerHTML = value;
return temp.firstElementChild;
} return value; });
topLayer = restoredObject;
coinFocus = document.getElementById(topLayer[topLayer.a_currentLayer].e_coinFocus);
coinFocus1 = document.getElementById(topLayer[topLayer.a_currentLayer].f_coinFocus);
utilityLayer0.innerHTML = topLayer[topLayer.a_currentLayer].b_content.innerHTML;
filename = topLayer[topLayer.a_currentLayer].filename;
pageEchelon = topLayer[topLayer.a_currentLayer].echelon * 100000000;
document.getElementById("documentTitle").innerText = filename;
restorePointerEventsNone();
recoverColouration();
for (j=0; j<utilityLayer0.children.length; j++) { 
utilityLayer0.children[j].style.outline = fA;
utilityLayer0.children[j].style.outlineOffset = fAO;
 }
if (utilityLayer0.firstElementChild) {
coinFocus = utilityLayer0.firstElementChild;
pageEchelon = Math.floor(utilityLayer0.firstElementChild.style.zIndex/100000000)*100000000;
}
if (coinFocus!=null) {
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}
if (coinFocus==null) { curFocus = 1; } else { curFocus = 0; }
makeTopLayer("b_layer1");




singlePasteBuffer = topLayer.singlePasteBuffer;
multiplePasteBuffer = topLayer.multiplePasteBuffer;
sel0PasteBuffer = topLayer.sel0PasteBuffer;
sel1PasteBuffer = topLayer.sel1PasteBuffer;
sel2PasteBuffer = topLayer.sel2PasteBuffer;
hold = topLayer.hold;


ui.hwString = topLayer.hwString;



ui.idNames.forEach((name) => {
ui[name].value   = topLayer.capitals[name].value.outerHTML;
if (!topLayer.capitals[name].value.outerHTML) ui[name].value = topLayer.capitals[name].value.toString();
ui[name].title   = topLayer.capitals[name].title.toString();
ui[name].colour  = topLayer.capitals[name].colour.toString();
});


updateInfoShelf();
redraw();
readCoins();
Z();
drawAllCells();
ui.projectName.ref.value = topLayer.aa_project_name;
userCustomTheme = topLayer.projectThemes;
loadTheme("currentTheme");










};
reader.readAsText(file);
});
document.body.appendChild(input);
input.click();
input.remove();
})();



















}