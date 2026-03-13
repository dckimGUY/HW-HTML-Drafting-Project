function loopState() {
ui.textEntry.ref.value = "[~]";
ui.buttonTooltip.ref.value = "LOOP";
drawButton7();
if (hauptMode==0) {
enterNavLinkButton(lastNavPoint);
} else if (hauptMode==1) {
hauptMode = 0;
enterNavLinkButton(lastNavPoint);
hauptMode = 1;
}
ui.textEntry.ref.value = "";
drawButton7();
coinFocus.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.setAttribute("onclick", `try { go.anim.all.loop.cycl(); } catch { }`);
}