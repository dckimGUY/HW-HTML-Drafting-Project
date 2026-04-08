function reflowPerTrip() {
    readCoins();
    reflow(coinTrip.sel0, rev, 0);
    reflow(coinTrip.sel1, rev, 0);
    reflow(coinTrip.sel2, rev, 0);
    Z();
}
