let fontStyle = 0;

function cycleFonts(keyInfo) {
if (coinFocus!=null) {
       if (fontStyle==0) { coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.fontFamily=fontDeclaration0; fontStyle=1;
} else if (fontStyle==1) { coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.fontFamily=fontDeclaration1; fontStyle=2;
} else if (fontStyle==2) { coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.fontFamily=fontDeclaration2; fontStyle=3;
} else if (fontStyle==3) { coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.fontFamily=fontDeclaration3; fontStyle=4;
} else if (fontStyle==4) { coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.fontFamily=fontDeclaration4; fontStyle=5;
} else if (fontStyle==5) { coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.fontFamily=fontDeclaration5; fontStyle=0;
} else {
fontStyle=0;
}
}
}
