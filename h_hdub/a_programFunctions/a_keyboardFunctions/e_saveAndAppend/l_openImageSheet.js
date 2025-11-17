function openImageSheet(sheetName) {

const input = document.createElement("input");
input.type = "file";
input.accept = "image/*";

input.onchange = () => {
const file = input.files[0];
const reader = new FileReader();

reader.onload = () => {
const img = new Image();
img.onload = () => {};
img.src = reader.result;
};
sheetName.src = reader.result;
reader.readAsDataURL(file);
};
input.click();

}
