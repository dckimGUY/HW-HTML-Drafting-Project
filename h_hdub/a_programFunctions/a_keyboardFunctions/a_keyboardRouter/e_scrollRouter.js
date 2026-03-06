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

/*   up arr*/ if (kC ==  38) {moveAllUp();   }
/* down arr*/ if (kC ==  40) {moveAllDown(); }
/* left arr*/ if (kC ==  37) {moveAllLeft(); }
/*right arr*/ if (kC ==  39) {moveAllRight();}

} else if (!ctrl&&!shift) {
/*   up arr*/ if (kC ==  38) { moveUp(keyInfo)   ; }
/* down arr*/ if (kC ==  40) { moveDown(keyInfo) ; }
/* left arr*/ if (kC ==  37) { moveLeft(keyInfo) ; }
/*right arr*/ if (kC ==  39) { moveRight(keyInfo); }
}

}
