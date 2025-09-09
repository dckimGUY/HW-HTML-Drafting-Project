function applyImageBack() {
if (coinFocus!=null) {

let tmpCan = document.createElement("canvas");
tmpCan.width = parseInt(coinFocus.style.width);
tmpCan.height = parseInt(coinFocus.style.height);

let ctx = Picture.getContext("2d");

if (Picture.width!=0&&Picture.height!=0) {

       if (coinFocus.lastElementChild.lastElementChild.src!='') {
ctx.drawImage(coinFocus.lastElementChild.lastElementChild, parseInt(coinFocus.style.left), parseInt(coinFocus.style.top), parseInt(coinFocus.style.width), parseInt(coinFocus.style.height));

} else if (coinFocus.img.src==''&&coinFocus.style.left=='0px'&&coinFocus.style.top=='0px') {

let Picture2 = document.createElement("canvas");
const tmpWidth  = Picture.width;
const tmpHeight = Picture.height;

let ctx2 = Picture2.getContext("2d");
Picture2.width = tmpWidth;
Picture2.height = tmpHeight;

try {
ctx2.drawImage(Picture, 0, 0, tmpWidth, tmpHeight);
} catch { }

Picture.width  = parseInt(coinFocus.style.width);
Picture.height = parseInt(coinFocus.style.height);

ctx.drawImage(Picture2, 0, 0, tmpWidth, tmpHeight);

}

} else {
/* This is the "NO PICTURE" condition. */

Picture.width  = parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width);
Picture.height = parseInt(coinFocus.style.top)  + parseInt(coinFocus.style.height);

       if (coinFocus.lastElementChild.lastElementChild.src!='') {
ctx.drawImage(coinFocus.lastElementChild.lastElementChild, parseInt(coinFocus.style.left), parseInt(coinFocus.style.top), parseInt(coinFocus.style.width), parseInt(coinFocus.style.height));
}

}


//coinFocus.lastElementChild.lastElementChild.src = tmpCan.toDataURL("image/png");
//coinFocus.lastElementChild.lastElementChild.style.display = "";

}
}
