function removeGroup() {
if (coinFocus != null) {
const group = coinFocus.dataset.coinTrip;
for (let j = coinTrip["sel" + group].length - 1; j >= 0; j--) {
coinFocus = coinTrip["sel" + group][j];
removeCoin();
}
}
recoverCoinFocus();
}