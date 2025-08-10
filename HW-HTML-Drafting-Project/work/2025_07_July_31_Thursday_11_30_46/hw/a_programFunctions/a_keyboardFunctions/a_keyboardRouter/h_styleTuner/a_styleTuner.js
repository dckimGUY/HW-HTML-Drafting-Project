const tintArray = 
[
"31, 0, 0",
"47, 0, 0",
"63, 0, 0",
" 0,31, 0",
" 0,47, 0",
" 0,63, 0",
" 0, 0,31",
" 0, 0,47",
" 0, 0,63",
"31,31, 0",
"47,47, 0",
"63,63, 0",
"31,63, 0",
"47,63, 0",
"63,63, 0",
" 0,31,31",
" 0,47,31",
" 0,63,31",
" 0,31,31",
" 0,31,47",
" 0,31,63",
" 0,31,31",
" 0,47,47",
" 0,63,63",
"31, 0,31",
"47, 0,47",
"63, 0,63",
"31, 0,63",
"47, 0,63",
"63, 0,63",
"63, 0,31",
"63, 0,47",
"63, 0,63"
];

function styleTuner(keyInfo) {

       if (styleKey =="r"||styleKey =="R") {
borderRadiusTuner();
} else if (styleKey =="u"||styleKey =="U") {
boxShadowTuner();
} else if (styleKey =="i"||styleKey =="I") {
alignmentTuner();
} else if (styleKey =="o"||styleKey =="O") {
borderRadiusTuner();
} else if (styleKey =="p"||styleKey =="P") {
paddingTuner();
} else if (styleKey =="a"||styleKey =="A") {
alignmentTuner();
} else if (styleKey =="f"||styleKey =="F") {
fontTuner();
}

}
