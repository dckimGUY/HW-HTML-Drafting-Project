function firstLastColour() {
if (coinFocus != null) {
if (
coinFocus != coinTrip["sel" + coinFocus.dataset.coinTrip][0]
) {
focusSet(coinTrip["sel" + coinFocus.dataset.coinTrip][0]);
} else {
focusSet(coinTrip["sel" + coinFocus.dataset.coinTrip][coinTrip["sel" + coinFocus.dataset.coinTrip].length - 1]);
}
}
}
