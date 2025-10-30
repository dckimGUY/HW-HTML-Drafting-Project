function enterPHPref(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

let result = null;
if (coinFocus!=null) {

let promptDefaultText = "";

if (coinFocus.dataset.fileInclude) {
promptDefaultText = coinFocus.dataset.fileInclude == "" ? "" : coinFocus.dataset.fileInclude.includes("@") ? coinFocus.dataset.fileInclude.split("@")[0] + ".html" : coinFocus.dataset.fileInclude + ".html";
}



result = prompt("enter PHP reference for div: ", promptDefaultText);
if (result!=null) {
coinFocus.lastElementChild.firstElementChild.nextElementSibling.innerText = `<?php include "./include/${result}"; ?>`;
coinFocus.dataset.fileInclude = result;

}
}

}
