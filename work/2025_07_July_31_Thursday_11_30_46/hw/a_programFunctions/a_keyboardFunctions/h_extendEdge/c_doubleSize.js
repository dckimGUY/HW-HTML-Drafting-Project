function doubleSize() {
if (coinFocus!=null) {
coinFocus.style.width = parseInt(coinFocus.style.width) * 2 + "px";
coinFocus.style.height = parseInt(coinFocus.style.height) * 2 + "px";
coinFocus.dataset.width = coinFocus.style.width;
coinFocus.dataset.height = coinFocus.style.height;
} }
