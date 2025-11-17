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
if (typeof value === "string" && value.startsWith("<")) {
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

Z();
document.getElementById("documentTitle").innerText = filename;
readCoins();
recoverColouration();
if (coinFocus!=null) {
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
}
if (coinFocus==null) { curFocus = 1; } else { curFocus = 0; }
redraw();
updateInfoShelf();

};
reader.readAsText(file);
});
document.body.appendChild(input);
input.click();
input.remove();
})();
}