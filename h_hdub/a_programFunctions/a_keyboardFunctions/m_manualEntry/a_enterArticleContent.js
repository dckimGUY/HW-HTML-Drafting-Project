function enterArticleContent(keyInfo) {
if (hauptMode==1) {
let result = null;
if (coinFocus!=null) {
result = prompt("Enter HTML or text:", `${coinFocus.lastElementChild.firstElementChild.innerHTML}`);
if (result!=null) {
coinFocus.lastElementChild.firstElementChild.innerHTML = result;
}
}
}
}
