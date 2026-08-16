function clearAllBrightness() {
const num = utilityLayer0.children.length;
for (let j = 0; j < num; j++) {
const pattern = new RegExp(/brightness\([^)]*\)/, "g");
const newFilter = utilityLayer0.children[j].style.filter.replace(pattern, "brightness(1)");
utilityLayer0.children[j].style.filter = newFilter;
}
}