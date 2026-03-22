function setSingleState() {

if (event.ctrlKey) {
copyToClipboard(`try { go.setState(go.xqn.grp['${document.getElementById('statename').innerText}'][0]); } catch { }`);
buzzWord(0,'<sup>copy</sup><sub>code</sub>',112,'white',200,200,25,'top','','',event);
return;
}

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

