function restorePointerEventsNone() {

if (utilityLayer0.children.length>0) {
for (let j = 0; j < utilityLayer0.children.length; j++) {

if (utilityLayer0.children[j].lastElementChild) {
utilityLayer0.children[j].lastElementChild.style.pointerEvents = "none";
}


if (utilityLayer0.children[j].dataset.wrapper&&utilityLayer0.children[j].dataset.wrapper=="true") {
utilityLayer0.children[j].firstElementChild.style.display = "block";
}



if (utilityLayer0.children[j].firstElementChild) {
utilityLayer0.children[j].firstElementChild.style.pointerEvents = "none";
}






if (utilityLayer0.children[j].lastElementChild && utilityLayer0.children[j].lastElementChild.firstElementChild) {
utilityLayer0.children[j].lastElementChild.firstElementChild.style.pointerEvents = "none";
}

if (utilityLayer0.children[j].lastElementChild && utilityLayer0.children[j].lastElementChild.lastElementChild) {
utilityLayer0.children[j].lastElementChild.lastElementChild.style.pointerEvents = "none";
}

if (utilityLayer0.children[j].lastElementChild && utilityLayer0.children[j].lastElementChild.firstElementChild && utilityLayer0.children[j].lastElementChild.firstElementChild.nextElementSibling) {
utilityLayer0.children[j].lastElementChild.firstElementChild.nextElementSibling.style.pointerEvents = "none";
}

}
}
}
