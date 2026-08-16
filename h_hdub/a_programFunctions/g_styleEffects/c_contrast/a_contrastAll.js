function contrastAll(max) {
const num = utilityLayer0.children.length;
const target = utilityLayer0.children;
for (let j = 0; j < num; j++) {
const pattern = new RegExp(/contrast\([^)]*\)/, "g");
const expression = `contrast(${max})`;
if (!target[j].style.filter || target[j].style.filter == "none") {
target[j].style.filter = "brightness(1) contrast(1) saturate(1) grayscale(0) sepia(0) invert(0) opacity(1)";
}
const newFilter = target[j].style.filter.replace(pattern, expression);
target[j].style.filter = newFilter;
}
}