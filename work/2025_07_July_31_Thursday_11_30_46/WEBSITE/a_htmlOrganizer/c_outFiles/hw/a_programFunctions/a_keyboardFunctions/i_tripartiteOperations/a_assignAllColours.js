function assignAllColours() {
       if (utilityLayer0.firstElementChild.dataset.coinTrip==Ts0) {
for (j=0;j<utilityLayer0.children.length;j++) {
                            utilityLayer0.children[j].dataset.coinTrip = Ts1;
               utilityLayer0.children[j].firstElementChild.style.color = Fs1;
                          utilityLayer0.children[j].style.outlineColor = Cs1;
     utilityLayer0.children[j].firstElementChild.style.backgroundColor = Bs1;
             utilityLayer0.children[j].firstElementChild.style.opacity = Os1;
}
} else if (utilityLayer0.firstElementChild.dataset.coinTrip==Ts1) {
for (j=0;j<utilityLayer0.children.length;j++) {
                            utilityLayer0.children[j].dataset.coinTrip = Ts2;
               utilityLayer0.children[j].firstElementChild.style.color = Fs2;
                          utilityLayer0.children[j].style.outlineColor = Cs2;
     utilityLayer0.children[j].firstElementChild.style.backgroundColor = Bs2;
             utilityLayer0.children[j].firstElementChild.style.opacity = Os2;
}
} else if (utilityLayer0.firstElementChild.dataset.coinTrip==Ts2) {
for (j=0;j<utilityLayer0.children.length;j++) {
                            utilityLayer0.children[j].dataset.coinTrip = Ts0;
if (utilityLayer0.children[j].firstElementChild) {
               utilityLayer0.children[j].firstElementChild.style.color = Fs0;
}
                          utilityLayer0.children[j].style.outlineColor = Cs0;
if (utilityLayer0.children[j].firstElementChild) {
     utilityLayer0.children[j].firstElementChild.style.backgroundColor = Bs0;
             utilityLayer0.children[j].firstElementChild.style.opacity = Os0;
}
}
}
readCoins();
}
