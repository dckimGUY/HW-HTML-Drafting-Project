function promptDownloadLink() {
if (coinFocus!=null) {
let result = null;
result = prompt(`Enter the URL to Your Download File : `, `${coinFocus.firstElementChild.href}`);
if (result!=null) {
coinFocus.firstElementChild.href     = result;
coinFocus.dataset.linkText          = result;
coinFocus.firstElementChild.download =     "";
}
}
}
