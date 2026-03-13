function enterNewPartFromMouseInput(mouseInfo) {

const newXvalue = parseInt(P.style.left) > parseInt(S.style.left) ? parseInt(S.style.left) + O/2 : parseInt(P.style.left) + O/2;
const newYvalue = parseInt(P.style.top)  > parseInt(S.style.top)  ? parseInt(S.style.top)  + O/2 : parseInt(P.style.top)  + O/2;
const newWidth  = Math.abs(parseInt(P.style.left) - parseInt(S.style.left));
const newHeight = Math.abs(parseInt(P.style.top)  - parseInt(S.style.top));

if (
(newWidth >= edgeQ*2 &&
 newHeight>=edgeQ*2) &&
(newWidth >= mouseIncrement  &&
newHeight >= mouseIncrement) &&
(mousedown.lastButton == 0 ||
 mousedown.lastButton == 1)
) {



insertNewCoin([null,78,78,true,false,false]);

for (w of ["style", "dataset"]) {
coinFocus[w].left   = newXvalue + "px";
coinFocus[w].top    = newYvalue + "px";
coinFocus[w].width  = newWidth  + "px";
coinFocus[w].height = newHeight + "px";
}


} else {

rdots();

}


}
