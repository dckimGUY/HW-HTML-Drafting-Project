function cursorToCoin(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

Cur.style.display="block";

       if (curFocus==0) {
curFocus=1;
modeRouter(e,1);
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
recoverColouration();
return (0);
} else if (curFocus==1) {
if (coinFocus!=null) {
Cur.style.left = coinFocus.style.left;
Cur.dataset.left = coinFocus.style.left;
Cur.style.top  = coinFocus.style.top ;
Cur.dataset.top  = coinFocus.style.top ;
curFocus=0;
recoverColouration();
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
modeRouter(e,1);
return (1);
} else {
if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
recoverColouration();
curFocus=1;
modeRouter(e,1);
return (0);
}
}
}
}
