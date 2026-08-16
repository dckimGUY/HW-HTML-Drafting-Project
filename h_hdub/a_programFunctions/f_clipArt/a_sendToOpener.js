/* Basically working, just only wishing to make this copy all of the attributes together at the same time. That way you could apply a shadow etc to a specific part and then it would become part of the artwork insertion. */

function sendToOpener(element) {
if (window.opener != null && !!topLayer) {
window.opener.insertNewCoin([null,78,78,0,0,0]);
const target = window.opener.utilityLayer0.lastElementChild.lastElementChild.lastElementChild;
const source = element.parentNode.parentNode.parentNode;
target.innerHTML = element.outerHTML;

let height, width, top, left, amount;

window.opener.utilityLayer0.lastElementChild.style.height   = height = source.style.height;
window.opener.utilityLayer0.lastElementChild.dataset.height = height;
window.opener.utilityLayer0.lastElementChild.style.width    = width = source.style.width;
window.opener.utilityLayer0.lastElementChild.dataset.width  = width;

amount = window.opener.scrollY + (window.opener.innerHeight / 2) - (parseInt(source.style.height) / 2);
window.opener.utilityLayer0.lastElementChild.style.top      = top = amount - (amount % window.opener.T) + "px";
window.opener.utilityLayer0.lastElementChild.dataset.top    = top;

amount = window.opener.scrollX + (window.opener.innerWidth  / 2) - (parseInt(source.style.width)  / 2);
window.opener.utilityLayer0.lastElementChild.style.left     = left = amount - (amount % window.opener.T) + "px";
window.opener.utilityLayer0.lastElementChild.dataset.left   = left;

window.opener.readCoins();
window.opener.redraw();
}
}
