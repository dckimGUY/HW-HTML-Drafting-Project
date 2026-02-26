function isolateGroup() {
if (coinFocus != null) {
const group = coinFocus.dataset.coinTrip.toString();
deleteCoin(['',88,120]);
if (
sel0PasteBuffer.value&&sel0PasteBuffer.value.length > 0 ||
sel1PasteBuffer.value&&sel1PasteBuffer.value.length > 0 ||
sel2PasteBuffer.value&&sel2PasteBuffer.value.length > 0
) {
pasteMultiple();
groupPaste("0");
groupPaste("1");
groupPaste("2");
pasteSingle();
return;
}
groupDeletion("0");
groupDeletion("1");
groupDeletion("2");
groupPaste(group);
pasteSingle();
}
return;
}