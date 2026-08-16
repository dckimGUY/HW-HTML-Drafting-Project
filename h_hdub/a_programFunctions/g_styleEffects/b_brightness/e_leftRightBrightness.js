function leftRightBrightness(max) {
const base = window.innerWidth;
const num = utilityLayer0.children.length;
const target = utilityLayer0.children;
for (let j = 0; j < num; j++) {
let factor = (base - parseInt(target[j].style.left) - parseInt(target[j].style.width)) / base;
if (factor < 0) factor = 0;
const pattern = new RegExp(/brightness\([^)]*\)/, "g");
const expression = `brightness(${1 + ((max - 1) * factor)})`;
if (!target[j].style.filter || target[j].style.filter == "none") {
target[j].style.filter = "brightness(1) contrast(1) saturate(1) grayscale(0) sepia(0) invert(0) opacity(1)";
}
const newFilter = target[j].style.filter.replace(pattern, expression);
target[j].style.filter = newFilter;
}
}