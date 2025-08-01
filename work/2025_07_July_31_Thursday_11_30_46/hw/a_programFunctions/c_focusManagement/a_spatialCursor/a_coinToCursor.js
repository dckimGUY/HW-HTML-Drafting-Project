function coinToCursor(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (coinFocus!=null) {
coinFocus.style.left = Cur.style.left;
coinFocus.style.top  = Cur.style.top ;
coinFocus.dataset.left = Cur.style.left;
coinFocus.dataset.top  = Cur.style.top ;
coinFocus.style.outline = fB;
curFocus=0;
modeRouter(e,1);
return (1);
} else {
recoverColouration();
curFocus=1;
modeRouter(e,1);
return (0);
}
}
