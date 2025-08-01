function enterArticleContent(keyInfo) {
if (hauptMode==1) {
let result = null;
if (coinFocus!=null) {
result = prompt("Enter HTML or text:", `${coinFocus.lastElementChild.firstElementChild.nextElementSibling.innerHTML}`);
if (result!=null) {
coinFocus.lastElementChild.firstElementChild.nextElementSibling.innerHTML = result;
}
}
}
}
