function viewImageSheet(sheetName) {
if (sheetImages[sheetName].img!=""&&sheetImages[sheetName].img!=null) {
let ctx = Picture.getContext("2d");
Picture.width  = sheetImages[sheetName].img.width;
Picture.height = sheetImages[sheetName].img.height;
ctx.drawImage(sheetImages[sheetName].img, 0, 0, sheetImages[sheetName].img.width, sheetImages[sheetName].img.height);
Picture.style.display="block";
}
}
