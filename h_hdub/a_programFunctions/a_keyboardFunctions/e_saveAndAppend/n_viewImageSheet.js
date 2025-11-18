function viewImageSheet(sheetName) {
let ctx = Picture.getContext("2d");
Picture.style.display="block";
Picture.width  = sheetImages[sheetName].img.width;
Picture.height = sheetImages[sheetName].img.height;
Picture.style.width  = sheetImages[sheetName].img.width  + "px";
Picture.style.height = sheetImages[sheetName].img.height + "px";
ctx.drawImage(sheetImages[sheetName].img, 0, 0, sheetImages[sheetName].img.width, sheetImages[sheetName].img.height);
}
