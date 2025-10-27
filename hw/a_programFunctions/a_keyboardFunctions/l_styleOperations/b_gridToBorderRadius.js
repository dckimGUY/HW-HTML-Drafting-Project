function gridToBorderRadius(keyInfo) {
if (coinFocus!=null&&(lastKey=="r"||lastKey=="R")) {




const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];




let groupAction;
       if (coinFocus.dataset.coinTrip==Ts0) {
groupAction = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
groupAction = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
groupAction = coinTrip.sel2;
}





       if (coinFocus.lastElementChild.style.borderRadius==T+"px") {
coinFocus.lastElementChild.style.borderTopLeftRadius     = "inherit";
coinFocus.lastElementChild.style.borderTopRightRadius    = "inherit";
coinFocus.lastElementChild.style.borderBottomLeftRadius  = "inherit";
coinFocus.lastElementChild.style.borderBottomRightRadius = "inherit";

coinFocus.firstElementChild.style.borderTopLeftRadius     = "inherit";
coinFocus.firstElementChild.style.borderTopRightRadius    = "inherit";
coinFocus.firstElementChild.style.borderBottomLeftRadius  = "inherit";
coinFocus.firstElementChild.style.borderBottomRightRadius = "inherit";




if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.borderTopLeftRadius     = "inherit";
groupAction[j].lastElementChild.style.borderTopRightRadius    = "inherit";
groupAction[j].lastElementChild.style.borderBottomLeftRadius  = "inherit";
groupAction[j].lastElementChild.style.borderBottomRightRadius = "inherit";

groupAction[j].firstElementChild.style.borderTopLeftRadius     = "inherit";
groupAction[j].firstElementChild.style.borderTopRightRadius    = "inherit";
groupAction[j].firstElementChild.style.borderBottomLeftRadius  = "inherit";
groupAction[j].firstElementChild.style.borderBottomRightRadius = "inherit";
} }



} else {
coinFocus.lastElementChild.style.borderTopLeftRadius     = T + "px";
coinFocus.lastElementChild.style.borderTopRightRadius    = T + "px";
coinFocus.lastElementChild.style.borderBottomLeftRadius  = T + "px";
coinFocus.lastElementChild.style.borderBottomRightRadius = T + "px";

coinFocus.firstElementChild.style.borderTopLeftRadius     = T + "px";
coinFocus.firstElementChild.style.borderTopRightRadius    = T + "px";
coinFocus.firstElementChild.style.borderBottomLeftRadius  = T + "px";
coinFocus.firstElementChild.style.borderBottomRightRadius = T + "px";

borderTopLeftRadiusHold      = T;
borderTopRightRadiusHold     = T;
borderBottomLeftRadiusHold   = T;
borderBottomRightRadiusHold  = T;



if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.borderTopLeftRadius     = T + "px";
groupAction[j].lastElementChild.style.borderTopRightRadius    = T + "px";
groupAction[j].lastElementChild.style.borderBottomLeftRadius  = T + "px";
groupAction[j].lastElementChild.style.borderBottomRightRadius = T + "px";

groupAction[j].firstElementChild.style.borderTopLeftRadius     = T + "px";
groupAction[j].firstElementChild.style.borderTopRightRadius    = T + "px";
groupAction[j].firstElementChild.style.borderBottomLeftRadius  = T + "px";
groupAction[j].firstElementChild.style.borderBottomRightRadius = T + "px";

borderTopLeftRadiusHold      = T;
borderTopRightRadiusHold     = T;
borderBottomLeftRadiusHold   = T;
borderBottomRightRadiusHold  = T;
} }




}
}
}
