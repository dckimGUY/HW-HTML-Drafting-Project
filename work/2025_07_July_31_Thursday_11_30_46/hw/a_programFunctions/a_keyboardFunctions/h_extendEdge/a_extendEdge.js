function extendEdge(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

       if (coinFocus!=null&&(!coinFocus.dataset.lockE||coinFocus.dataset.lockE!="true")) {
const coinLeft   = parseInt(coinFocus.style.left)  ,
      coinWidth  = parseInt(coinFocus.style.width) ,
      coinTop    = parseInt(coinFocus.style.top)   ,
      coinHeight = parseInt(coinFocus.style.height);


if (coinFocus != null) {
       if (eM==0) {

/*    H    */ if (kC ==  72 && cC ==  72) {
if ((coinLeft + coinWidth)%T==0) {
if (coinWidth - T >= 0) {
coinFocus.style.width = coinWidth - T + "px";
} else {
coinFocus.style.width = coinWidth + T + "px";
coinFocus.style.left  = coinLeft  - T + "px";
eM=1;
}
} else {
coinFocus.style.width = (Math.floor((coinLeft + coinWidth) / T) * T) - coinLeft + "px";
}
}

/*    J    */ if (kC ==  74 && cC ==  74) {
if ((coinTop + coinHeight)%T==0) {
coinFocus.style.height = coinHeight + T + "px";
} else {
coinFocus.style.height = (Math.ceil((coinTop + coinHeight) / T) * T) - coinTop + "px";
}
}

/*    K    */ if (kC ==  75 && cC ==  75) {
if ((coinTop + coinHeight)%T==0) {
if (coinHeight - T >= 0) {
coinFocus.style.height = coinHeight - T + "px";
} else {
coinFocus.style.height = coinHeight + T + "px";
coinFocus.style.top    = coinTop    - T + "px";
eM=1;
}
} else {
coinFocus.style.height = (Math.floor((coinTop + coinHeight) / T) * T) - coinTop + "px";
}
}

/*    L    */ if (kC ==  76 && cC ==  76) {
if ((coinLeft + coinWidth)%T==0) {
coinFocus.style.width = coinWidth + T + "px";
} else {
coinFocus.style.width = (Math.ceil((coinLeft + coinWidth) / T) * T) - coinLeft + "px";
}
}

} else if (eM==1) {
/*    H    */ if (kC ==  72 && cC ==  72) {
if (coinLeft%T==0) {
if (((coinLeft - T) * T)>=0) {
coinFocus.style.width = coinWidth + T + "px";
coinFocus.style.left  = coinLeft  - T + "px";
}
} else {
if ((Math.floor((coinLeft) / T) * T)>=0) {
coinFocus.style.width = coinWidth + coinLeft - (Math.floor((coinLeft) / T) * T) + "px";
coinFocus.style.left = Math.floor((coinLeft) / T) * T + "px";
}
}
}

/*    J    */ if (kC ==  74 && cC ==  74) {
if (coinTop%T==0) {
if (coinHeight - T >= 0) {
coinFocus.style.height = coinHeight - T + "px";
coinFocus.style.top    = coinTop    + T + "px";
} else {
coinFocus.style.height = coinHeight + T + "px";
eM=0;
}
} else {
coinFocus.style.height = coinHeight + coinTop - (Math.ceil((coinTop) / T) * T) + "px";
coinFocus.style.top = Math.ceil((coinTop) / T) * T + "px";
}
}

/*    K    */ if (kC ==  75 && cC ==  75) {
if (coinTop%T==0) {
if ((coinTop - T)>=0) {
coinFocus.style.height = coinHeight + T + "px";
coinFocus.style.top    = coinTop    - T + "px";
}
} else {
if ((Math.floor((coinTop) / T) * T)>=0) {
coinFocus.style.height = coinHeight + coinTop - (Math.floor((coinTop) / T) * T) + "px";
coinFocus.style.top = Math.floor((coinTop) / T) * T + "px";
}
}
}

/*    L    */ if (kC ==  76 && cC ==  76) {
if (coinLeft%T==0) {
if (coinWidth - T >= 0) {
coinFocus.style.width = coinWidth - T + "px";
coinFocus.style.left  = coinLeft  + T + "px";
} else {
coinFocus.style.width = coinWidth + T + "px";
eM=0;
}
} else {
coinFocus.style.width = coinWidth + coinLeft - (Math.ceil((coinLeft) / T) * T) + "px";
coinFocus.style.left = Math.ceil((coinLeft) / T) * T + "px";
}
}
}


/*    h    */ if (kC ==  72 && cC == 104) {
if (coinWidth - (T*2) >= 0) {
coinFocus.style.width = coinWidth - (T*2) + "px";
coinFocus.style.left  = coinLeft  + T + "px";
}
}
/*    j    */ if (kC ==  74 && cC == 106) {
if (coinHeight - (T*2) >= 0) {
coinFocus.style.height = coinHeight - (T*2) + "px";
coinFocus.style.top  = coinTop  + T + "px";
}
}
/*    k    */ if (kC ==  75 && cC == 107) {
coinFocus.style.height = coinHeight + (T*2) + "px";
coinFocus.style.top  = coinTop  - T + "px";
}
/*    l    */ if (kC ==  76 && cC == 108) {
coinFocus.style.width = coinWidth + (T*2) + "px";
coinFocus.style.left  = coinLeft  - T + "px";
}


coinFocus.dataset.width  = coinFocus.style.width ;
coinFocus.dataset.height = coinFocus.style.height;
coinFocus.dataset.left   = coinFocus.style.left  ;
coinFocus.dataset.top    = coinFocus.style.top   ;
}



} else if (coinFocus!=null&&coinFocus.dataset.lockE&&coinFocus.dataset.lockE=="true") {


/*    h    */ if (kC ==  72 && cC == 104) { rotateLeft();                           }
/*    j    */ if (kC ==  74 && cC == 106) { rotateUnder();                          }
/*    k    */ if (kC ==  75 && cC == 107) { rotateOver();                           }
/*    l    */ if (kC ==  76 && cC == 108) { rotateRight();                          }

/*    H    */ if (kC ==  72 && cC ==  72) { outerScaleDown(keyInfo);                }
/*    J    */ if (kC ==  74 && cC ==  74) { rotateZleft();                          }
/*    K    */ if (kC ==  75 && cC ==  75) { rotateZright();                         }
/*    L    */ if (kC ==  76 && cC ==  76) { outerScaleUp(keyInfo);                  }





}



}
