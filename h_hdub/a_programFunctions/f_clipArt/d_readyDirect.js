function readyDirect() {


const newFileName = "READY_4btn_376010_HDUB_5_4btn_h32w18w14w16w12w12w4w4w4w16h24w13w6w8w7w8w8w12w7w8w9w3w11h14w8w6w6w8w10w10w9w20w23h8w16w10w10w9w9h47w12w27w24w25w12h7w22w22w14w7w4w8w10w13h8w4w14w4w4w14w4w10w10w6w10w11w9h4w6w10w6w6w10w6w10w10w15w15w6h6w1w9.png";

function pixelationScale(inputScale) {
let scale = 2;
for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.left = parseInt(utilityLayer0.children[j].style.left) * scale + "px";
utilityLayer0.children[j].style.top = parseInt(utilityLayer0.children[j].style.top) * scale + "px";
utilityLayer0.children[j].style.width = parseInt(utilityLayer0.children[j].style.width) * scale + "px";
utilityLayer0.children[j].style.height = parseInt(utilityLayer0.children[j].style.height) * scale + "px";
utilityLayer0.children[j].dataset.left = utilityLayer0.children[j].style.left ;
utilityLayer0.children[j].dataset.top = utilityLayer0.children[j].style.top ;
utilityLayer0.children[j].dataset.width = utilityLayer0.children[j].style.width ;
utilityLayer0.children[j].dataset.height = utilityLayer0.children[j].style.height;
utilityLayer0.children[j].lastElementChild.lastElementChild.lastElementChild.classList = "pixelArt";
}
}


ui.templateIntake.ref.value = newFileName.split("_HDUB_")[0];
sheetImages.star.filename = ui.templateIntake.ref.value;
 ui.hdubSingleEntry.ref.value = newFileName.split("_HDUB_")[1].split("_4btn_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
 ui.hdubSheetTemplate4x.ref.value = parseInt(newFileName.split("_HDUB_")[1].split("_4btn_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(newFileName.split("_HDUB_")[1].split("_4btn_")[0]));
 sheetImages.star.factor = parseInt(newFileName.split("_HDUB_")[1].split("_4btn_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);

const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer") ;
const imageCutter = document.createElement("canvas");
imageCutter.width = sheetImages.star.img.width / 4;
imageCutter.height = sheetImages.star.img.height ;
let ctx = imageCutter.getContext("2d") ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (1/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focus.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (2/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.hover.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (3/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click() ;
setTimeout(() => {
ui.getButtons.ref.click() ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
topLayer.importer.b_content.children[j].style.left = parseInt(topLayer.importer.b_content.children[j].style.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].dataset.left = parseInt(topLayer.importer.b_content.children[j].dataset.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].style.top = parseInt(topLayer.importer.b_content.children[j].style.top) + previousScrollY + "px";
topLayer.importer.b_content.children[j].dataset.top = parseInt(topLayer.importer.b_content.children[j].dataset.top) + previousScrollY + "px";
}
while (topLayer.importer.b_content.children.length != 0) {
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
utilityLayer0.appendChild(topLayer.importer.b_content.children[j]); }
}
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 4000);
};
img.src = readyRabbitSet;















}
