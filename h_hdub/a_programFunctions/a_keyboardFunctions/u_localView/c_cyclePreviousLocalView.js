function cyclePreviousLocalView() {

if (topLayer.a_currentLayer=="localView") {

toggleLocalView();

if (lastFlow=="colour") {
reflowPerTrip();
} else if (lastFlow=="global") {
reflowGlobal(rev,0);
} else {
reflowGlobal(rev,0);
}

if(rev==1){focusNext(true)}else{focusPrevious(true)}
toggleLocalView();

} else {
if(rev==1){focusNext(false)}else{focusPrevious(false)}


}


}