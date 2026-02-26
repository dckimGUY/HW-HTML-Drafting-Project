function isolateSingle() {
if (multiplePasteBuffer.value != '') {
deleteCoin(['',88,120]);
pasteMultiple();
pasteSingle();
return;
}
deleteCoin(['',88,120]);
deleteCoin(['',88,88]);
pasteSingle();
if(rev==1){focusLast()}else{focusFirst()};
}