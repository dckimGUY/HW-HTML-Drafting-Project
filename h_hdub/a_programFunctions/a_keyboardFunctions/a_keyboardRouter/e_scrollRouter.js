function scrollRouter(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

       if ( ctrl) {
/*   up arr*/ if (kC ==  38) {  rotateOver(keyInfo); }
/* down arr*/ if (kC ==  40) { rotateUnder(keyInfo); }
/* left arr*/ if (kC ==  37) {  rotateLeft(keyInfo); }
/*right arr*/ if (kC ==  39) { rotateRight(keyInfo); }
} else if (!ctrl) {
/*   up arr*/ if (kC ==  38) {      moveUp(keyInfo); }
/* down arr*/ if (kC ==  40) {    moveDown(keyInfo); }
/* left arr*/ if (kC ==  37) {    moveLeft(keyInfo); }
/*right arr*/ if (kC ==  39) {   moveRight(keyInfo); }
}

}
