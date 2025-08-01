function setHauptModeOff(keyInfo) { hauptMode=1; document.documentElement.style.backgroundColor = L; }

function setHauptModeOn(keyInfo) { hauptMode=0; document.documentElement.style.backgroundColor = sL; }

function flipHauptMode(keyInfo) {
       if (CAPS==0) { CAPS=1; hauptMode=0; setHauptModeOn(keyInfo); 
} else if (CAPS==1) { CAPS=0; hauptMode=1; setHauptModeOff(keyInfo); }
}
