function paintColour(event,value) {
if (coinFocus == null) return 0;
switch (value) {
case "FG": target = "color"; break;
case "BG": target = "backgroundColor"; break;
default: return 0;
}
if (event.shiftKey) {
switch (coinFocus.dataset.coinTrip) {
case "0": for (h of coinTrip.sel0) { h.lastElementChild.firstElementChild.style[target] = document.getElementById("style" + value).value; }; break;
case "1": for (h of coinTrip.sel1) { h.lastElementChild.firstElementChild.style[target] = document.getElementById("style" + value).value; }; break;
case "2": for (h of coinTrip.sel2) { h.lastElementChild.firstElementChild.style[target] = document.getElementById("style" + value).value; }; break;
}
} else {
return 0;
}
}