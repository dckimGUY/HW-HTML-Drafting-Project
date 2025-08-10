function focusNextColour() {

if (coinFocus!=null) {

       if (coinFocus.dataset.coinTrip==Ts0) {
       if (coinTrip.sel1.length>0) {
focusSet(coinTrip.sel1[0]);
} else if (coinTrip.sel2.length>0) {
focusSet(coinTrip.sel2[0]);
}

} else if (coinFocus.dataset.coinTrip==Ts1) {
       if (coinTrip.sel2.length>0) {
focusSet(coinTrip.sel2[0]);
} else if (coinTrip.sel0.length>0) {
focusSet(coinTrip.sel0[0]);
}

} else if (coinFocus.dataset.coinTrip==Ts2) {
       if (coinTrip.sel0.length>0) {
focusSet(coinTrip.sel0[0]);
} else if (coinTrip.sel1.length>0) {
focusSet(coinTrip.sel1[0]);
}

}

} else {

       if (coinTrip.sel0.length>0) {
focusSet(coinTrip.sel0[0]);
} else if (coinTrip.sel1.length>0) {
focusSet(coinTrip.sel1[0]);
} else if (coinTrip.sel1.length>0) {
focusSet(coinTrip.sel1[0]);
}

}

}
