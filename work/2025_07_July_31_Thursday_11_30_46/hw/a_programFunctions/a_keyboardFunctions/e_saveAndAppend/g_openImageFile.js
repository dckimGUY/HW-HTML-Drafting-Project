function openImageFile(keyInfo) {
if (coinFocus!=null) {



const input = document.createElement("input");
input.type = "file";
input.accept = "image/*";
input.addEventListener("change", () => {
const file = input.files[0];
if (!file) return;


const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
let imageWidth;
let imageHeight;



const url = URL.createObjectURL(file);
img.src = url;
img.onload = () => {





if (useBase64forImages==true) {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
imageWidth = img.naturalWidth;
imageHeight = img.naturalHeight;
modeRouter('',1);

} else {
coinFocus.lastElementChild.lastElementChild.src = "./images/" + file.name;
coinFocus.lastElementChild.lastElementChild.style.display = "block";
coinFocus.style.width    = parseInt(img.naturalWidth) + "px";
coinFocus.dataset.width  = parseInt(img.naturalWidth) + "px";
coinFocus.style.height   = parseInt(img.naturalHeight) + "px";
coinFocus.dataset.height = parseInt(img.naturalHeight) + "px";
}




};


if (useBase64forImages==true) {
coinFocus.lastElementChild.lastElementChild.src = evt.target.result;
coinFocus.lastElementChild.lastElementChild.style.display = "block";
}

};
reader.readAsDataURL(file);








});
input.click();

restorePointerEventsNone();

}
}
