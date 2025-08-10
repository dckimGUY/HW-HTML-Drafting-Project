function enterCODEnote(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];
let result = null;
if (coinFocus!=null) {
result = prompt(
`The following note will be
applied to the js reference
for this element as:
"${coinFocus.dataset.jsName}.codeNote"
(when saved using back-tick)
(sequential id rename is done with "shift + I")
It is still possible to change
the jsName using "shift-N".

Enter code note: `, coinFocus.dataset.codeNote);
if (result!=null) {
coinFocus.dataset.codeNote = result;
}
}

}
