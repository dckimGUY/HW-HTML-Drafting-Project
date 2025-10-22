function buttonizer() {
if (coinFocus != null) {
if (coinFocus.div&&coinFocus.div.children&&coinFocus.div.children.length > 1) {
let newInternals = '<div style="position: absolute; left: 0px; top: 0px; width: ' + coinFocus.style.width + '; height: ' + coinFocus.style.height + ';">';
for (let j = 0; j < coinFocus.div.children.length; j++) {
newInternals += '<button id="' + coinFocus.div.children[j].id + '" class="" style="position: absolute; left: ' + coinFocus.div.children[j].style.left + '; top: ' + coinFocus.div.children[j].style.top + '; width: ' + coinFocus.div.children[j].style.width + '; height: ' + coinFocus.div.children[j].style.height + '"></button>';
}
newInternals += "</div>";
coinFocus.div.innerHTML = newInternals;
}
}
}