function jsNameAndNote(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

let result = null;
if (coinFocus!=null) {
result = prompt("enter new idName: ", coinFocus.id);
if (result!=null) {
coinFocus.id = result;

       if (showPartName==true) {
coinFocus.firstElementChild.innerText = result;
} else {
coinFocus.firstElementChild.innerText =     "";
}
}
}

}
