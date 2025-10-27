function cutImagesAll() {
if (coinFocus!=null) {


for (let j = 0; j < utilityLayer0.children.length; j++) {
let tmpCan = document.createElement("canvas");
tmpCan.width = parseInt(utilityLayer0.children[j].style.width);
tmpCan.height = parseInt(utilityLayer0.children[j].style.height);

let ctx = tmpCan.getContext("2d");
ctx.drawImage(Picture, -parseInt(utilityLayer0.children[j].style.left), -parseInt(utilityLayer0.children[j].style.top), Picture.width, Picture.height);

utilityLayer0.children[j].lastElementChild.lastElementChild.src = tmpCan.toDataURL("image/png");
utilityLayer0.children[j].lastElementChild.lastElementChild.style.display = "";
}


}
}
