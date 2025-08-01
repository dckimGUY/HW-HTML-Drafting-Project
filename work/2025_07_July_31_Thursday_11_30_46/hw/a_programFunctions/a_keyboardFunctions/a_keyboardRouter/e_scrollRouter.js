function scrollRouter(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

       if ( ctrl&&!shift) {
/*   up arr*/ if (kC ==  38) {window.scrollTo({top : window.pageYOffset - T  , behavior:'smooth'});}
/* down arr*/ if (kC ==  40) {window.scrollTo({top : window.pageYOffset + T  , behavior:'smooth'});}
/* left arr*/ if (kC ==  37) {window.scrollTo({left: window.pageXOffset - T  , behavior:'smooth'});}
/*right arr*/ if (kC ==  39) {window.scrollTo({left: window.pageXOffset + T  , behavior:'smooth'});}
} else if ( ctrl&& shift) {
/*   up arr*/ if (kC ==  38) {window.scrollTo({top : window.pageYOffset - T/E, behavior:'smooth'});}
/* down arr*/ if (kC ==  40) {window.scrollTo({top : window.pageYOffset + T/E, behavior:'smooth'});}
/* left arr*/ if (kC ==  37) {window.scrollTo({left: window.pageXOffset - T/E, behavior:'smooth'});}
/*right arr*/ if (kC ==  39) {window.scrollTo({left: window.pageXOffset + T/E, behavior:'smooth'});}
} else if (!ctrl&& shift) {

/*   up arr*/ if (kC ==  38) {moveAllUp();   }
/* down arr*/ if (kC ==  40) {moveAllDown(); }
/* left arr*/ if (kC ==  37) {moveAllLeft(); }
/*right arr*/ if (kC ==  39) {moveAllRight();}

} else if (!ctrl&&!shift) {
/*   up arr*/ if (kC ==  38) { moveUpAndCentre(keyInfo)   ; }
/* down arr*/ if (kC ==  40) { moveDownAndCentre(keyInfo) ; }
/* left arr*/ if (kC ==  37) { moveLeftAndCentre(keyInfo) ; }
/*right arr*/ if (kC ==  39) { moveRightAndCentre(keyInfo); }
}

}
