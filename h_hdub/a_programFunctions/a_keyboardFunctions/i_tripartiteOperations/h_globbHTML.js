function globbHTML() {
if (coinFocus != null && coinTrip["sel" + coinFocus.dataset.coinTrip].length > 1) {
const lefting = coinTrip["sel" + coinFocus.dataset.coinTrip][0].style.left;
const topping = coinTrip["sel" + coinFocus.dataset.coinTrip][0].style.top;
const globbString = deMinimis(false,false,'','','flow');
insertNewDuplicate(['',68,68]);
deleteCoin(['',88,120]);
removeGroup();
pasteSingle();
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = globbString;
coinFocus.style.left   = lefting;
coinFocus.dataset.left = lefting;
coinFocus.style.top    = topping;
coinFocus.dataset.top  = topping;
}
}