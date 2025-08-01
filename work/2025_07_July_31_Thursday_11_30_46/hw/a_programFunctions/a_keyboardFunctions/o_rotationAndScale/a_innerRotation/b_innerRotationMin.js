/* downgraded to a mere flip, this because it was much easier.
HTML is clearly not designed with rotations and scaling being easy.
After a rotation is applied, the "origin of the part" effects subsequent
movements in edge-extend which seems very unnatural and weird.
*/

function innerRotationMin() {
if (coinFocus!=null) {
       if (coinFocus.lastElementChild.lastElementChild.style.transform=="") {
           coinFocus.lastElementChild.lastElementChild.style.transform= "rotate(180deg)";
} else if (coinFocus.lastElementChild.lastElementChild.style.transform=="rotate(180deg)") {
           coinFocus.lastElementChild.lastElementChild.style.transform= "";
}
return (1);
}
}
