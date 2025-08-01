function setDragPullFromContext() {

if (coinFocus!=null) {


if (hauptMode==0) {






       if (mode==0) {

} else if (mode==1) {
coinFocus.dataset.dragPull="style.left,dataset.left,style.top,dataset.top";
} else if (mode==5) {
coinFocus.dataset.dragPull="main.style.transform";
} else if (mode==6) {
coinFocus.dataset.dragPull="style.left,dataset.left,style.top,dataset.top,style.width,dataset.width,style.height,dataset.height";
} else if (mode==8) {
coinFocus.dataset.dragPull="style.transform";
} else if (mode==9) {
coinFocus.dataset.dragPull="style.transform";
}






} else if (hauptMode==1) {






       if (styleKey =="r"||styleKey =="R") {
coinFocus.dataset.dragPull="main.style.borderTopLeftRadius,main.style.borderTopRightRadius,main.style.borderBottomLeftRadius,main.style.borderBottomRightRadius,main.style.outline";
} else if (styleKey =="u"||styleKey =="U") {
coinFocus.dataset.dragPull="main.style.boxShadow";
} else if (styleKey =="i"||styleKey =="I") {
coinFocus.dataset.dragPull="backgroundColor";
} else if (styleKey =="o"||styleKey =="O") {
coinFocus.dataset.dragPull="backgroundColor";
} else if (styleKey =="p"||styleKey =="P") {
coinFocus.dataset.dragPull="backgroundColor";
} else if (styleKey =="a"||styleKey =="A") {
coinFocus.dataset.dragPull="backgroundColor";
} else if (styleKey =="f"||styleKey =="F") {
coinFocus.dataset.dragPull="backgroundColor";
}






}







}
}