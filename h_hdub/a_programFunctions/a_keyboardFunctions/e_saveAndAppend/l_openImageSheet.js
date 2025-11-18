function openImageSheet(sheetName) {
const input = document.createElement("input");
input.type = "file";
input.accept = "image/*";
input.onchange = () => {
const file = input.files[0];
const reader = new FileReader();
reader.onload = () => {
const img = new Image();
sheetImages[sheetName].filename = file.name;
img.onload = () => {};
sheetImages[sheetName].img.src = reader.result;

/* ALSO DISPLAY THE IMAGE */
let ctx = Picture.getContext("2d");
Picture.width        = img.width;
Picture.height       = img.height;
Picture.style.width  = img.width;
Picture.style.height = img.height;
ctx.drawImage(img, 0, 0, img.width, img.height);
Picture.style.display="block";

};
reader.readAsDataURL(file);
};
input.click();
}
