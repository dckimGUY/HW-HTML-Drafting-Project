function shiftRouter(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

const lowercaseLetterReceived =
((kC ==  81 && cC == 113) || (kC ==  87 && cC == 119) || (kC ==  69 && cC == 101) || (kC ==  82 && cC == 114) || (kC ==  84 && cC == 116) ||
 (kC ==  89 && cC == 121) || (kC ==  85 && cC == 117) || (kC ==  73 && cC == 105) || (kC ==  79 && cC == 111) || (kC ==  80 && cC == 112) ||
 (kC ==  65 && cC ==  97) || (kC ==  83 && cC == 115) || (kC ==  68 && cC == 100) || (kC ==  70 && cC == 102) || (kC ==  71 && cC == 103) ||
 (kC ==  72 && cC == 104) || (kC ==  74 && cC == 106) || (kC ==  75 && cC == 107) || (kC ==  76 && cC == 108) || (kC ==  90 && cC == 122) ||
 (kC ==  88 && cC == 120) || (kC ==  67 && cC ==  99) || (kC ==  86 && cC == 118) || (kC ==  66 && cC ==  98) || (kC ==  78 && cC == 110) ||
 (kC ==  77 && cC == 109));

const uppercaseLetterReceived =
((kC ==  81 && cC ==  81) || (kC ==  87 && cC ==  87) || (kC ==  69 && cC ==  69) || (kC ==  82 && cC ==  82) || (kC ==  84 && cC ==  84) ||
 (kC ==  89 && cC ==  89) || (kC ==  85 && cC ==  85) || (kC ==  73 && cC ==  73) || (kC ==  79 && cC ==  79) || (kC ==  80 && cC ==  80) ||
 (kC ==  65 && cC ==  65) || (kC ==  83 && cC ==  83) || (kC ==  68 && cC ==  68) || (kC ==  70 && cC ==  70) || (kC ==  71 && cC ==  71) ||
 (kC ==  72 && cC ==  72) || (kC ==  74 && cC ==  74) || (kC ==  75 && cC ==  75) || (kC ==  76 && cC ==  76) || (kC ==  90 && cC ==  90) ||
 (kC ==  88 && cC ==  88) || (kC ==  67 && cC ==  67) || (kC ==  86 && cC ==  86) || (kC ==  66 && cC ==  66) || (kC ==  78 && cC ==  78) ||
 (kC ==  77 && cC ==  77));

if (lowercaseLetterReceived && shift==false) { CAPS=0; setHauptModeOff(keyInfo); }
if (lowercaseLetterReceived && shift==true)  { CAPS=1; setHauptModeOn(keyInfo);  }
if (uppercaseLetterReceived && shift==false) { CAPS=1; setHauptModeOn(keyInfo);  }
if (uppercaseLetterReceived && shift==true)  { CAPS=0; setHauptModeOff(keyInfo); }

/* Here we decide which of the two "Haupt-modes" are active and then route the keypresses to that system. */
if (hauptMode==0) {
constructionModeKeys(keyInfo);
} else if (hauptMode==1) {
styleDeclarationModeKeys(keyInfo);
}

return (1);
}
