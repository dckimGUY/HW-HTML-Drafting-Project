function clearAllBlur() {
const num = utilityLayer0.children.length;
for (let j = 0; j < num; j++) {
const pattern = new RegExp(/blur\([^)]*\)/, "g");
const newFilter = utilityLayer0.children[j].style.filter.replace(pattern, "blur(0px)");
utilityLayer0.children[j].style.filter = newFilter;
}
}