function setSingleState() {
ui.textEntry.ref.value = document.getElementById("statename").innerText;
ui.buttonTooltip.ref.value = "";
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
coinFocus.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.setAttribute("onclick", `try { go.setState(go.xqn.grp['${document.getElementById('statename').innerText}'][0]); } catch { }`);
}

