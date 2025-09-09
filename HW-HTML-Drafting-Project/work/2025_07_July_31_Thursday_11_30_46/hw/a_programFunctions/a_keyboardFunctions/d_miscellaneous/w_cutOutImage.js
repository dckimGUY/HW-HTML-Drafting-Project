function cutOutImage() {
if (coinFocus!=null) {

let tmpCan = document.createElement("canvas");
tmpCan.width = parseInt(coinFocus.style.width);
tmpCan.height = parseInt(coinFocus.style.height);

let ctx = tmpCan.getContext("2d");
ctx.drawImage(Picture, -parseInt(coinFocus.style.left), -parseInt(coinFocus.style.top), Picture.width, Picture.height);

coinFocus.lastElementChild.lastElementChild.src = tmpCan.toDataURL("image/png");
coinFocus.lastElementChild.lastElementChild.style.display = "";

}
}
