function spaceViewOn() {
mouseIsDogged=true;
spaceView = true;

edgeDetect.style.display= "none"; 

for (j=0;j<utilityLayer0.children.length;j++) {


if (utilityLayer0.children[j].style) {
utilityLayer0.children[j].style.outline = utilityLayer0.children[j].dataset.finishedOutline;
}


if (utilityLayer0.children[j].firstElementChild) {
utilityLayer0.children[j].firstElementChild.style.backgroundColor = "transparent";
utilityLayer0.children[j].firstElementChild.innerText             =            "";
}


if (utilityLayer0.children[j].lastElementChild) {
utilityLayer0.children[j].lastElementChild.style.display  = "block";
}


}
utilityLayer1.style.display = "none";
utilityLayer0.style.opacity = "1.00";
gridLayer.style.display      = "none";
document.documentElement.style.backgroundColor = finishedBackgroundColour;
}
