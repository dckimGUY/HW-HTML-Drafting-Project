function openFile() {
(() => {
const input = document.createElement('input');
input.type = 'file';
input.accept = '.html';
input.addEventListener('change', e => {
const file = e.target.files[0];
if (!file) return;

if (file.name.split("@").length==2) {
filename = file.name.split("@")[0];
Z();
} else {
filename = file.name.split(".")[0];

filename = filename.replace(/ /g, '_');

}





document.getElementById("documentTitle").innerText = filename;

const reader = new FileReader();
reader.onload = event => {


utilityLayer0.innerHTML = reader.result.toString();


if (utilityLayer0.lastElementChild.tagName=="SCRIPT") {
utilityLayer0.lastElementChild.remove();
}



restorePointerEventsNone();
recoverColouration();
for (j=0; j<utilityLayer0.children.length; j++) { utilityLayer0.children[j].style.outline = fA; }
if (utilityLayer0.firstElementChild) {
coinFocus = utilityLayer0.firstElementChild;
pageEchelon = Math.floor(utilityLayer0.firstElementChild.style.zIndex/100000000)*100000000;

}
coinFocus.style.outline = fB;

readCoins();

Z();
};
reader.readAsText(file);
});
document.body.appendChild(input);
input.click();
input.remove();
})();






}
