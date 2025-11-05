document.addEventListener("copy", event => {
if (event.target.tagName!="TEXTAREA"&&event.target.tagName!="INPUT") {
if (hotDog) { return; }
event.preventDefault();
if (mousemoveTarget!=null&&mousemoveTarget.lastElementChild.firstElementChild.nextElementSibling) {
event.clipboardData.setData('text/plain', mousemoveTarget.lastElementChild.firstElementChild.nextElementSibling.innerHTML);
}
}
});



document.addEventListener("paste", event => {
if (event.target.tagName!="TEXTAREA"&&event.target.tagName!="INPUT") {
if (hotDog) { return; }
event.preventDefault();
let pastedText = event.clipboardData.getData('text/plain');
if (mousemoveTarget!=null&&mousemoveTarget.lastElementChild.firstElementChild.nextElementSibling) {
if (pastedText.startsWith('anchor')) {
mousemoveTarget.firstElementChild.href = `${pastedText.split('="')[1].split('";')[0]}`;
mousemoveTarget.firstElementChild.innerHTML = `<span style="color:blue;">NAV link pasted</u></span>`;
setTimeout (() => readCoins(), 1500);
} else {
mousemoveTarget.lastElementChild.firstElementChild.nextElementSibling.innerHTML = pastedText;
}
}
}
});