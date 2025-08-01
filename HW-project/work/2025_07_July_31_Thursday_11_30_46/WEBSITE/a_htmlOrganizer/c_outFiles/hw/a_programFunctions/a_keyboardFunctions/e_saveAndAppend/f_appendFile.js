function appendFile() {
(() => {
const input = document.createElement('input');
input.type = 'file';
input.accept = '.html';
input.addEventListener('change', e => {
const file = e.target.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = event => {
utilityLayer0.innerHTML += event.target.result;
restorePointerEventsNone();
for (j=0; j<utilityLayer0.children.length; j++) { utilityLayer0.children[j].style.outline = fA; }
if (utilityLayer0.firstElementChild) {
coinFocus = utilityLayer0.firstElementChild;
}
coinFocus.style.outline = fB;
readCoins();
};
reader.readAsText(file);
});
document.body.appendChild(input);
input.click();
input.remove();
})();


}
