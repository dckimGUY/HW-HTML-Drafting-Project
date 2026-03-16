function scrollRouter(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

       if ( ctrl&&!shift) {
/*   up arr*/ if (kC ==  38) {window.scrollTo({top : window.pageYOffset - visualGridSize3, behavior:'auto'});}
/* down arr*/ if (kC ==  40) {window.scrollTo({top : window.pageYOffset + visualGridSize3, behavior:'auto'});}
/* left arr*/ if (kC ==  37) {window.scrollTo({left: window.pageXOffset - visualGridSize3, behavior:'auto'});}
/*right arr*/ if (kC ==  39) {window.scrollTo({left: window.pageXOffset + visualGridSize3, behavior:'auto'});}
} else if ( ctrl&& shift) {
/*   up arr*/ if (kC ==  38) {window.scrollTo({top : window.pageYOffset - visualGridSize2, behavior:'auto'});}
/* down arr*/ if (kC ==  40) {window.scrollTo({top : window.pageYOffset + visualGridSize2, behavior:'auto'});}
/* left arr*/ if (kC ==  37) {window.scrollTo({left: window.pageXOffset - visualGridSize2, behavior:'auto'});}
/*right arr*/ if (kC ==  39) {window.scrollTo({left: window.pageXOffset + visualGridSize2, behavior:'auto'});}
} else if (!ctrl&& shift) {

/*   up arr*/ if (kC ==  38) { insertForArrows(); setTimeout(() => { moveAllUp()   ; }, 10); }
/* down arr*/ if (kC ==  40) { insertForArrows(); setTimeout(() => { moveAllDown() ; }, 10); }
/* left arr*/ if (kC ==  37) { insertForArrows(); setTimeout(() => { moveAllLeft() ; }, 10); }
/*right arr*/ if (kC ==  39) { insertForArrows(); setTimeout(() => { moveAllRight(); }, 10); }

} else if (!ctrl&&!shift) {
if (kC ==  38) { insertForArrows(); setTimeout(() => { moveUp(keyInfo)   ; }, 10); }
if (kC ==  40) { insertForArrows(); setTimeout(() => { moveDown(keyInfo) ; }, 10); }
if (kC ==  37) { insertForArrows(); setTimeout(() => { moveLeft(keyInfo) ; }, 10); }
if (kC ==  39) { insertForArrows(); setTimeout(() => { moveRight(keyInfo); }, 10); }


/*

if (kC ==  38) { insertForArrows(); setTimeout(() => { moveUp(keyInfo)   ; }, 10); }
if (kC ==  40) { insertForArrows(); setTimeout(() => { moveDown(keyInfo) ; }, 10); }
if (kC ==  37) { insertForArrows(); setTimeout(() => { moveLeft(keyInfo) ; }, 10); }
if (kC ==  39) { insertForArrows(); setTimeout(() => { moveRight(keyInfo); }, 10); }

*/


}

}
