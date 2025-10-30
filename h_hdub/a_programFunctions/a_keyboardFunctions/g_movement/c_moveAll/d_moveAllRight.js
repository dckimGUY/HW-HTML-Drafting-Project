function moveAllRight(){
if (utilityLayer0.children.length>0) {
for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.left   = parseInt(utilityLayer0.children[j].style.left) + T + "px";
utilityLayer0.children[j].dataset.left = utilityLayer0.children[j].style.left;
}
}
}
