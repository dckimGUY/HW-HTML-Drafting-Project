function windowEdge(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (window.opener) {

const windowWidthDelta  = window.outerWidth  - window.innerWidth ;
const windowHeightDelta = window.outerHeight - window.innerHeight;

       if (wM==0) {
/*    H    */ if (kC ==  72 && cC ==  104) {
if (window.innerWidth%T!=0) {
window.resizeTo((Math.floor(window.innerWidth/T)*T) + windowWidthDelta, window.outerHeight);
} else {
window.resizeTo(window.outerWidth - T, window.outerHeight);
}
}
/*    J    */ if (kC ==  74 && cC ==  106) {
if (window.innerHeight%T!=0) {
window.resizeTo(window.outerWidth, (Math.ceil(window.innerHeight/T)*T) + windowHeightDelta);
} else {
window.resizeTo(window.outerWidth, window.outerHeight + T);
}
}
/*    K    */ if (kC ==  75 && cC ==  107) {
if (window.innerHeight%T!=0) {
window.resizeTo(window.outerWidth, (Math.floor(window.innerHeight/T)*T) + windowHeightDelta);
} else {
window.resizeTo(window.outerWidth, window.outerHeight - T);
}
}
/*    L    */ if (kC ==  76 && cC ==  108) {
if (window.innerWidth%T!=0) {
window.resizeTo((Math.ceil(window.innerWidth/T)*T) + windowWidthDelta, window.outerHeight);
} else {
window.resizeTo(window.outerWidth + T, window.outerHeight);
}
}

} else if (wM==1) {

/*    H    */ if (kC ==  72 && cC ==  104) {
if (window.screenLeft>0) {
if (window.screenLeft%T!=0) {
window.moveTo(Math.floor(window.screenLeft/T)*T, window.screenTop);
} else {
window.moveTo(window.screenLeft - T, window.screenTop);
} } }

/*    J    */ if (kC ==  74 && cC ==  106) {
if (window.screenTop%T!=0) {
window.moveTo(window.screenLeft, Math.floor(window.screenTop/T)*T);
} else {
window.moveTo(window.screenLeft, window.screenTop + T);
} }

/*    K    */ if (kC ==  75 && cC ==  107) {
if (window.screenTop>0) {

if (window.screenTop%T!=0) {
window.moveTo(window.screenLeft, Math.floor(window.screenTop/T)*T);
} else {
window.moveTo(window.screenLeft, window.screenTop - T);
} } }

/*    L    */ if (kC ==  76 && cC ==  108) {
if (window.screenLeft%T!=0) {
window.moveTo(Math.ceil(window.screenLeft/T)*T, window.screenTop);
} else {
window.moveTo(window.screenLeft + T, window.screenTop);
} } }




















/*    H    */ if (kC ==  72 && cC ==  72) {}
/*    J    */ if (kC ==  74 && cC ==  74) {}
/*    K    */ if (kC ==  75 && cC ==  75) {}
/*    L    */ if (kC ==  76 && cC ==  76) {}

}






















}