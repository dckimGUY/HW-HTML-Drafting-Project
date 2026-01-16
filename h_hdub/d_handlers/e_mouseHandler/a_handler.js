let mouseDeltaX = 0,
    mouseDeltaY = 0;
let mousemoveTarget=null;



if (localStorage.getItem("animatorTiming")) {
document.getElementById("animationTiming").value = localStorage.getItem("animatorTiming");
}



document.addEventListener("mousewheel", (event) => {


if (event.target == ui.hdubCanvas.ref) {

event.preventDefault();
event.stopPropagation();
if (event.wheelDelta > 0) {
ui.hdubSheetTemplate4x.ref.value++;displayDemo();
} else if (event.wheelDelta < 0) {
ui.hdubSheetTemplate4x.ref.value--;displayDemo();
}

















} else if (event.target == document.getElementById("partY")) {
event.preventDefault(); event.stopPropagation();



if ( event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) - mouseIncrement);
} else if (event.wheelDelta < 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) + mouseIncrement);
}                              if (ui.partY.ref.value  < mouseIncrement)
                                 { ui.partY.ref.value  = mouseIncrement; } } else if (!event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) - T);
} else if (event.wheelDelta < 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) + T);
}                              if (ui.partY.ref.value  < T)
                                 { ui.partY.ref.value  = T; } } else if (!event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) - 2);
} else if (event.wheelDelta < 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) + 2);
}                              if (ui.partY.ref.value  < 2)
                                 { ui.partY.ref.value  = 2; } } else if ( event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) - 1);
} else if (event.wheelDelta < 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) + 1);
}                              if (ui.partY.ref.value  < 1)
                                 { ui.partY.ref.value  = 1; } } if (coinFocus!=null) {
coinFocus.style.top =     parseInt(ui.partY.ref.value) + "px";
coinFocus.dataset.top =   parseInt(ui.partY.ref.value) + "px";
updateInfoShelf();redraw();
}







} else if (event.target == document.getElementById("partX")) {
event.preventDefault(); event.stopPropagation();



if ( event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) - mouseIncrement);
} else if (event.wheelDelta < 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) + mouseIncrement);
}                              if (ui.partX.ref.value  < mouseIncrement)
                                 { ui.partX.ref.value  = mouseIncrement; } } else if (!event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) - T);
} else if (event.wheelDelta < 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) + T);
}                              if (ui.partX.ref.value  < T)
                                 { ui.partX.ref.value  = T; } } else if (!event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) - 2);
} else if (event.wheelDelta < 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) + 2);
}                              if (ui.partX.ref.value  < 2)
                                 { ui.partX.ref.value  = 2; } } else if ( event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) - 1);
} else if (event.wheelDelta < 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) + 1);
}                              if (ui.partX.ref.value  < 1)
                                 { ui.partX.ref.value  = 1; } } if (coinFocus!=null) {
coinFocus.style.left =    parseInt(ui.partX.ref.value) + "px";
coinFocus.dataset.left =  parseInt(ui.partX.ref.value) + "px";
updateInfoShelf();redraw();
}










} else if (event.target == document.getElementById("partW")) {
event.preventDefault(); event.stopPropagation();



if ( event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) - mouseIncrement);
} else if (event.wheelDelta < 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) + mouseIncrement);
}                              if (ui.partW.ref.value  < mouseIncrement)
                                 { ui.partW.ref.value  = mouseIncrement; } } else if (!event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) - T);
} else if (event.wheelDelta < 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) + T);
}                              if (ui.partW.ref.value  < T)
                                 { ui.partW.ref.value  = T; } } else if (!event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) - 2);
} else if (event.wheelDelta < 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) + 2);
}                              if (ui.partW.ref.value  < 2)
                                 { ui.partW.ref.value  = 2; } } else if ( event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) - 1);
} else if (event.wheelDelta < 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) + 1);
}                              if (ui.partW.ref.value  < 1)
                                 { ui.partW.ref.value  = 1; } } if (coinFocus!=null) {
coinFocus.style.width =   parseInt(ui.partW.ref.value) + "px";
coinFocus.dataset.width = parseInt(ui.partW.ref.value) + "px";
updateInfoShelf();redraw();
}
















} else if (event.target == document.getElementById("partH")) {
event.preventDefault(); event.stopPropagation();


if ( event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) - mouseIncrement);
} else if (event.wheelDelta < 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) + mouseIncrement);
}                              if (ui.partH.ref.value  < mouseIncrement)
                                 { ui.partH.ref.value  = mouseIncrement; } } else if (!event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) - T);
} else if (event.wheelDelta < 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) + T);
}                              if (ui.partH.ref.value  < T)
                                 { ui.partH.ref.value  = T; } } else if (!event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) - 2);
} else if (event.wheelDelta < 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) + 2);
}                              if (ui.partH.ref.value  < 2)
                                 { ui.partH.ref.value  = 2; } } else if ( event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) - 1);
} else if (event.wheelDelta < 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) + 1);
}                              if (ui.partH.ref.value  < 1)
                                 { ui.partH.ref.value  = 1; } } if (coinFocus!=null) {
coinFocus.style.height =  parseInt(ui.partH.ref.value) + "px";
coinFocus.dataset.height =parseInt(ui.partH.ref.value) + "px";
updateInfoShelf();redraw();
}



} else if (
event.target == document.getElementById("setLayer1") ||
event.target == document.getElementById("setLayer2") ||
event.target == document.getElementById("setLayer3") ||
event.target == document.getElementById("setLayer4") ||
event.target == document.getElementById("setLayer5") ||
event.target == document.getElementById("setLayer6") ||
event.target == document.getElementById("setLayer7") ||
event.target == document.getElementById("setLayer8") ||
event.target == document.getElementById("setLayer9") ||
event.target == document.getElementById("setLayer10") ||
event.target == document.getElementById("setLayer11") ||
event.target == document.getElementById("setLayer12") ||
event.target == document.getElementById("setLayer13") ||
event.target == document.getElementById("setLayer14") ||
event.target == document.getElementById("setLayer15") ||
event.target == document.getElementById("setLayer16") ||
event.target == document.getElementById("setLayer17") ||
event.target == document.getElementById("setLayer18") ||
event.target == document.getElementById("setLayer19") ||
event.target == document.getElementById("setLayer20") ||
event.target == document.getElementById("setLayer21") ||
event.target == document.getElementById("setLayer22") ||
event.target == document.getElementById("setLayer23") ||
event.target == document.getElementById("setLayer24") ||
event.target == document.getElementById("setLayer25")
) {
event.preventDefault(); event.stopPropagation();
       if (event.wheelDelta > 0) {
layerRight();
} else if (event.wheelDelta < 0) {
layerLeft();
}


} else if (
event.target == document.getElementById("buttonWordList") ||
event.target == document.getElementById("readButtonBack") ||
event.target == document.getElementById("folder31") ||
event.target == document.getElementById("navPoint1") ||
event.target == document.getElementById("navPoint2") ||
event.target == document.getElementById("navPoint3") ||
event.target == document.getElementById("navPoint4") ||
event.target == document.getElementById("navPoint5") ||
event.target == document.getElementById("navPoint6") ||
event.target == document.getElementById("navPoint7") ||
event.target == document.getElementById("navPoint8") ||
event.target == document.getElementById("navPoint9") ||
event.target == document.getElementById("buttonScale").children[0] ||
event.target == document.getElementById("buttonScale").children[1] ||
event.target == document.getElementById("buttonScale").children[2] ||
event.target == document.getElementById("buttonScale").children[3] ||
event.target == document.getElementById("buttonScale").children[4] ||
event.target == document.getElementById("buttonScale").children[5] ||
event.target == document.getElementById("buttonScale").children[6] ||
event.target == document.getElementById("buttonScale").children[7] ||
event.target == document.getElementById("buttonScale").children[8] ||
event.target == document.getElementById("buttonScale").children[9] ||
event.target == document.getElementById("buttonScale").children[10] ||
event.target == document.getElementById("buttonScale").children[11] ||
event.target == document.getElementById("buttonScale").children[12] ||
event.target == document.getElementById("buttonScale").children[13] ||
event.target == document.getElementById("buttonScale").children[14] ||
event.target == document.getElementById("buttonScale").children[15] ||
event.target == document.getElementById("buttonScale").children[16] ||
event.target == document.getElementById("buttonScale").children[17] ||
event.target == document.getElementById("buttonScale").children[18] ||
event.target == document.getElementById("popColours") ||
event.target == document.getElementById("popButton") ||
event.target == document.getElementById("ringButton") ||
event.target == document.getElementById("yourButtonIsHere").firstElementChild
) {
event.preventDefault(); event.stopPropagation();
       if (event.wheelDelta > 0) {
cycleColoursForward();
drawButton7();
} else if (event.wheelDelta < 0) {
cycleColoursBackward();
drawButton7();
}














} else if (event.target == document.getElementById("animatorDiv")) {
event.preventDefault();
event.stopPropagation();
if (event.wheelDelta > 0) {
document.getElementById("animationTiming").value = parseInt(parseInt(document.getElementById("animationTiming").value) + 5);
} else if (event.wheelDelta < 0) {
document.getElementById("animationTiming").value -= 5;
}
if (document.getElementById("animationTiming").value < 5) {
document.getElementById("animationTiming").value = 5;
}



setupTheAnimator();

localStorage.setItem("animatorTiming", document.getElementById("animationTiming").value)






} else if (event.target == ui.frameNumber.ref) {
event.preventDefault();
event.stopPropagation();
if (event.wheelDelta > 0) {
ui.frameNumber.ref.value = parseInt(ui.frameNumber.ref.value) + 1;
} else if (event.wheelDelta < 0) {
ui.frameNumber.ref.value = parseInt(ui.frameNumber.ref.value) - 1;
}
if (ui.frameNumber.ref.value > imageRollArray.length) {
ui.frameNumber.ref.value = imageRollArray.length;
}


if (ui.frameNumber.ref.value < 1) {
ui.frameNumber.ref.value = 1;
}



setupTheAnimator();
}







//ui.frameNumber.ref















if (event.buttons===4) {
event.preventDefault();
}
}, { passive: false });




























document.addEventListener("mousemove", (event) => {



if (mouseIsDogged==true) {
if (mousedown.hold==true) {
mouseX = mousedown.scrollX + mousedown.clientX - event.clientX;
mouseY = mousedown.scrollY + mousedown.clientY - event.clientY;
quarterMouseX = mousedown.scrollX + (mousedown.clientX - event.clientX) / 4;
quarterMouseY = mousedown.scrollY + (mousedown.clientY - event.clientY) / 4;
if (event.buttons===4) {
event.preventDefault();
if (!event.ctrlKey&&!event.shiftKey) {
window.scrollTo({ left: mouseX, top: mouseY, behavior: "auto"});
} else if (!event.ctrlKey&& event.shiftKey) {
window.scrollTo({ left: quarterMouseX, top: quarterMouseY, behavior: "auto"});
}
return;
}
}
}




if (mouseIsDogged==false) {

const ctrl  = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const e = event;
const mouseInfo = [e,ctrl,shift,alt];

if (event.target.dataset&&event.target.dataset.coinTrip) {
mousemoveTarget=event.target;
} else {
mousemoveTarget=null;
}

if (mousedown.hold==true) {
mouseDeltaX = event.pageX - mousedown.pageX;
mouseDeltaY = event.pageY - mousedown.pageY;
mouseX = mousedown.scrollX + mousedown.clientX - event.clientX;
mouseY = mousedown.scrollY + mousedown.clientY - event.clientY;
quarterMouseX = mousedown.scrollX + (mousedown.clientX - event.clientX) / 4;
quarterMouseY = mousedown.scrollY + (mousedown.clientY - event.clientY) / 4;



if (event.buttons===4) {
event.preventDefault();

position1X = Math.floor(mouseX/mouseIncrement)*mouseIncrement;
position1Y = Math.floor(mouseY/mouseIncrement)*mouseIncrement;
position2X = Math.floor(mouseX/visualGridSize2)*visualGridSize2;
position2Y = Math.floor(mouseY/visualGridSize2)*visualGridSize2;
if (!event.ctrlKey&&!event.shiftKey) {
window.scrollTo({ left: position1X, top: position1Y, behavior: "auto"});
} else if (!event.ctrlKey&& event.shiftKey) {
window.scrollTo({ left: position2X, top: position2Y, behavior: "auto"});
} else if ( event.ctrlKey&& event.shiftKey) {
window.scrollTo({ left: quarterMouseX, top: quarterMouseY, behavior: "auto"});
} else if ( event.ctrlKey&&!event.shiftKey) {
window.scrollTo({ left: mouseX, top: mouseY, behavior: "auto"});
}

return;
}
}












if (mousedown.hold == false && hotDog == false) {


if (!ctrl && !shift && !alt) {


let found = false;
for (let j = 0; j < utilityLayer0.children.length; j++) {

if (event.target == utilityLayer0.children[j]) {

found = true;



/* THESE HAVE BEEN ADAPTED TO ALIGN WITH THE VISUALS AND THE KEYBOARD ACTION */

if (mode==1) {

     if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.nwResize; } //7
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.wResize;  } //4
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.swResize; } //1
}                                                                                                                                                       
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ)))  {                                          
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.nResize;  } //8
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab;     } //5
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.sResize;  } //2
}                                                                                                                                                        
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3)))     {                                           
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.neResize; } //9
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.eResize;  } //6
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.seResize; } //3
}

} else if (mode==5) {

if (eM==0) {
     if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.grab;     } //7
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab;     } //4
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.sResize;  } //1
}                                                                                                                                                       
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ)))  {                                          
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.grab;     } //8
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab;     } //5
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.sResize;  } //2
}                                                                                                                                                        
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3)))     {                                           
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.eResize;  } //9
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.eResize;  } //6
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.seResize; } //3
}

} else if (eM==1) {
     if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.nwResize; } //7
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.wResize;  } //4
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.wResize;  } //1
}                                                                                                                                                       
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ)))  {                                          
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.nResize;  } //8
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab;     } //5
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.grab;     } //2
}                                                                                                                                                        
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3)))     {                                           
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.nResize;  } //9
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab;     } //6
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.grab;     } //3
}
}

} else if (mode==6) {

     if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.nwResize; } //7
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab;     } //4
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.swResize; } //1
}                                                                                                                                                       
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ)))  {                                          
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.grab;     } //8
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab;     } //5
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.grab;     } //2
}                                                                                                                                                        
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3)))     {                                           
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { utilityLayer0.children[j].style.cursor = cursor.neResize; } //9
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { utilityLayer0.children[j].style.cursor = cursor.grab;     } //6
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { utilityLayer0.children[j].style.cursor = cursor.seResize; } //3
}

} else {
utilityLayer0.children[j].style.cursor = cursor.grab;
}







} else {

utilityLayer0.children[j].style.cursor = cursor.crosshair;

}

}

} else {

/*
if (mode!=8)  {
       if ( ctrl && !shift && !alt)  {
event.target.style.cursor = cursor.copy;
} else if (!ctrl &&  shift && !alt) {
event.target.style.cursor = cursor.move;
} else if (!ctrl && !shift &&  alt) {
event.target.style.cursor = cursor.move;
} else if ( ctrl &&  shift && !alt) {
event.target.style.cursor = cursor.crosshair;
} else if ( ctrl && !shift &&  alt) {
event.target.style.cursor = cursor.grab;
} else if (!ctrl &&  shift &&  alt) {
event.target.style.cursor = cursor.grab;
} else if ( ctrl &&  shift &&  alt) {
event.target.style.cursor = cursor.grab;
} else            {
event.target.style.cursor = cursor.grab;
}
} else {
event.target.style.cursor = cursor.cell;
}

*/

}

utilityLayer0.style.cursor = "crosshair";

}




mode1.mousemove(mouseInfo);

switch (mode) {
case 0: mode0.mousemove(mouseInfo); break;
case 2: mode2.mousemove(mouseInfo); break;
case 3: mode3.mousemove(mouseInfo); break;
case 4: mode4.mousemove(mouseInfo); break;

case 5: mode5.mousemove(mouseInfo); break;
case 6: mode6.mousemove(mouseInfo); break;
case 7: mode7.mousemove(mouseInfo); break;
case 8: mode8.mousemove(mouseInfo); break;
case 9: mode9.mousemove(mouseInfo); break;
}



/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/

if (mousedown.hold==false) {


/*
if (event.target.dataset.coinTrip) {
       if (event.target.dataset.coinTrip==Ts0||
           event.target.dataset.coinTrip==Ts1||
           event.target.dataset.coinTrip==Ts2) {

edgeDetect.style.left   = `${parseInt(event.target.style.left) + edgeQ + "px"}`   ;
edgeDetect.style.top    = `${parseInt(event.target.style.top) + edgeQ + "px"}`    ;

edgeDetect.style.width  = `${parseFloat(event.target.style.width)  * parseFloat(event.target.dataset.scale) - (edgeQ * 2) + "px"}` ;
edgeDetect.style.height = `${parseFloat(event.target.style.height) * parseFloat(event.target.dataset.scale) - (edgeQ * 2) + "px"}` ;

edgeDetect.style.zIndex = `${parseInt(event.target.style.zIndex) + 1}` ;
edgeDetect.style.display= "block"; 

} else {
edgeDetect.style.display= "none"; 

}
} else {
edgeDetect.style.display= "none"; 

}





} else {


if (mousedown.hold==true) {

if (mousedown.target!=null&&mousedown.target.dataset.coinTrip) {
       if (mousedown.target.dataset.coinTrip==Ts0||
           mousedown.target.dataset.coinTrip==Ts1||
           mousedown.target.dataset.coinTrip==Ts2) {

edgeDetect.style.left   = `${parseInt(mousedown.target.style.left) + edgeQ + "px"}`   ;
edgeDetect.style.top    = `${parseInt(mousedown.target.style.top) + edgeQ + "px"}`    ;

edgeDetect.style.width  = `${parseFloat(mousedown.target.style.width)  * parseFloat(mousedown.target.dataset.scale) - (edgeQ * 2) + "px"}` ;
edgeDetect.style.height = `${parseFloat(mousedown.target.style.height) * parseFloat(mousedown.target.dataset.scale) - (edgeQ * 2) + "px"}` ;

edgeDetect.style.zIndex = `${parseInt(mousedown.target.style.zIndex) + 1}` ;
edgeDetect.style.display= "block"; 

} else {

}
} else {

}




}

*/

}

redraw();

/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/


} else if (mouseIsDogged==true) {


if (event.target.dataset.coinTrip) {
       if (event.target.dataset.coinTrip==Ts0||
           event.target.dataset.coinTrip==Ts1||
           event.target.dataset.coinTrip==Ts2) {
pulledText.style.left   = `${event.target.style.left}`   ;
pulledText.style.top    = `${event.target.style.top}`    ;
pulledText.style.width  = `${parseFloat(event.target.style.width)  * parseFloat(event.target.dataset.scale) + "px"}` ;
pulledText.style.height = `${parseFloat(event.target.style.height) * parseFloat(event.target.dataset.scale) + "px"}` ;
pulledText.style.zIndex = `${parseInt(event.target.style.zIndex) + 1}` ;

if (event.target.dataset.wrapper=="true") {event.target.style.pointerEvents="none";}

if (event.target.dataset.dragPull) {
let dragPullArray = event.target.dataset.dragPull.split(",");

/*
for (let j = 0; j < dragPullArray.length; j++) {
dragPullArray[j] = dragPullArray[j].trim();
}
*/
pulledText.value = blankSpaces;

for (let j = 0; j < dragPullArray.length; j++) {
       if (dragPullArray[j].startsWith("backgroundColor")) {
pulledText.style.color       = dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor;
pulledText.value            += `${event.target.lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor.toString()}`;
pulledText.value += '\n';


} else if (dragPullArray[j].startsWith("style.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.style[`${dragPullArray[j].split(".")[1]}`]; }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("dataset.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.dataset[`${dragPullArray[j].split(".")[1]}`]; }catch{}
pulledText.value += '";\n';


} else if (dragPullArray[j].startsWith("anchor.style.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.firstElementChild.style[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("anchor.dataset.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.firstElementChild.dataset[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("anchor.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.firstElementChild[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';


} else if (dragPullArray[j].startsWith("main.style.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.style[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("main.dataset.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.dataset[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("main.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';


} else if (dragPullArray[j].startsWith("button.style.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.style[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("button.dataset.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.dataset[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("button.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';


} else if (dragPullArray[j].startsWith("div.style.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.nextElementSibling.style[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("div.dataset.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.nextElementSibling.dataset[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("div.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.firstElementChild.nextElementSibling[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';


} else if (dragPullArray[j].startsWith("img.style.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.lastElementChild.style[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("img.dataset.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.lastElementChild.dataset[`${dragPullArray[j].split(".")[2]}`].toString(); }catch{}
pulledText.value += '";\n';
} else if (dragPullArray[j].startsWith("img.")) {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target.lastElementChild.lastElementChild[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';


} else {
try{ pulledText.value       += dragPullArray[j] + '="' + event.target[`${dragPullArray[j].split(".")[1]}`].toString(); }catch{}
pulledText.value += '";\n';

}
}


}

pulledText.value += blankSpaces;

pulledText.value = pulledText.value.replace(/("")/g,'"');

pulledText.style.display=               "block"; 

}
}

}


updateInfoShelf();


});













let
mousedown                =    {};
mousedown.hold           = false;
mousedown.modeNumber     =     0;
mousedown.button         =     0;
mousedown.button0        = false;
mousedown.button1        = false;
mousedown.button2        = false;
mousedown.ctrl           =     0;
mousedown.shift          =     0;
mousedown.alt            =     0;
mousedown.meta           =     0;
mousedown.pageX          =     0;
mousedown.pageY          =     0;
mousedown.clientX        =     0;
mousedown.clientY        =     0;
mousedown.scrollX        =     0;
mousedown.scrollY        =     0;
mousedown.tripSet        =  null;
mousedown.target         =  null;
mousedown.targetRegion   =     5;




/* This puts the information from the mousedown event into data so that we can refer to it later in our conditions. */
document.addEventListener("mousedown",   (event) => {


switch (event.button) {
case 0: mousedown.button0 = true; break;
case 1: mousedown.button1 = true; break;
case 2: mousedown.button2 = true; break;
}




if (splashScreenVisible==true) {
splashScreen.remove();
}


mousedown.clientX          = event.clientX;
mousedown.clientY          = event.clientY;
mousedown.scrollX          = window.scrollX;
mousedown.scrollY          = window.scrollY;







if (event.button===1) {
event.preventDefault();
}




if (event.button!=2) {
mousedown.hold           = true;
} else {
mousedown.hold=false;
}














if (mouseIsDogged==false) {








const ctrl  = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];

mouseGiveFocus(mouseInfo);

mouseCursor.src          = currentIconSet.cur2.src;


























mousedown.modeNumber     = mode;
mousedown.lastButton     = mousedown.button;
mousedown.button         = event.button;
mousedown.ctrl           = event.ctrlKey;
mousedown.shift          = event.shiftKey;
mousedown.alt            = event.altKey;
mousedown.meta           = event.metaKey;
mousedown.pageX          = event.pageX;
mousedown.pageY          = event.pageY;
mousedown.tripSet        = event.target.dataset.tripSet;

if (event.target.dataset.coinTrip==Ts0||event.target.dataset.coinTrip==Ts1||event.target.dataset.coinTrip==Ts2) {
mousedown.target         = event.target;

} else {
if (!alt&&ctrl&&shift&&mode==8) {

modeRouter(event,1);

}
}


if (event.target.dataset.coinTrip==Ts0||event.target.dataset.coinTrip==Ts1||event.target.dataset.coinTrip==Ts2) {

if (hotDog==false) {
if (!ctrl && !shift) {
     if (event.pageX <= (parseInt(event.target.style.left) + (edgeQ))) {
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { mousedown.targetRegion = 7; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { mousedown.targetRegion = 4; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { mousedown.targetRegion = 1; }
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) - edgeQ)))  {
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { mousedown.targetRegion = 8; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { mousedown.targetRegion = 5; event.target.style.cursor= cursor.grabbing; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { mousedown.targetRegion = 2; }
}
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width) *3/3)))     {
     if (event.pageY <= (parseInt(event.target.style.top)  + (edgeQ)))                                       { mousedown.targetRegion = 9; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height) - edgeQ))) { mousedown.targetRegion = 6; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3)))     { mousedown.targetRegion = 3; }
}
} else {


if (mode!=8)  {
       if ( ctrl && !shift && !alt)  {
event.target.style.cursor = cursor.copy;
} else if (!ctrl &&  shift && !alt) {
event.target.style.cursor = cursor.move;
} else if (!ctrl && !shift &&  alt) {
event.target.style.cursor = cursor.move;
} else if ( ctrl &&  shift && !alt) {
event.target.style.cursor = cursor.grab;
} else if ( ctrl && !shift &&  alt) {
event.target.style.cursor = cursor.grab;
} else if (!ctrl &&  shift &&  alt) {
event.target.style.cursor = cursor.grab;
} else if ( ctrl &&  shift &&  alt) {
event.target.style.cursor = cursor.grab;
} else            {
event.target.style.cursor = cursor.grab;
}
} else {
event.target.style.cursor = cursor.cell;
}


}
}
utilityLayer0.style.cursor = "crosshair";
}


if (!alt&&ctrl&&!shift&&mode!=8) {


if (event.target.dataset.coinTrip) {
insertNewDuplicate([event,68,68,shift,ctrl,false]);
}

focusFlip();


}


switch (mode) {
case 0: mode0.mousedown(mouseInfo); break;
case 1: mode1.mousedown(mouseInfo); break;
case 2: mode2.mousedown(mouseInfo); break;
case 3: mode3.mousedown(mouseInfo); break;
case 4: mode4.mousedown(mouseInfo); break;
case 5: mode5.mousedown(mouseInfo); break;
case 6: mode6.mousedown(mouseInfo); break;
case 7: mode7.mousedown(mouseInfo); break;
case 8: mode8.mousedown(mouseInfo); break;
case 9: mode9.mousedown(mouseInfo); break;
}
}

redraw();




});




















document.addEventListener("mouseup", (event) => {


switch (event.button) {
case 0: mousedown.button0 = false; break;
case 1: mousedown.button1 = false; break;
case 2: mousedown.button2 = false; break;
}















const ctrl  = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];



if (hotDog==false) {
if (!ctrl && !shift && !alt) {
if (coinFocus!=null) {
coinFocus.style.cursor = cursor.grab;
}
}
}






mousedown.hold           = false;
mousedown.pageX          = 0;
mousedown.pageY          = 0;





if (mouseIsDogged==false) {



if (mousedown.button==1&&event.button==1&&mousedown.target==event.target) {
mouseGiveFocus(mouseInfo);
//deleteCoin([,88,88,,]);

//edgeDetect.style.display= "none";

}


mode1.mouseup(mouseInfo);





switch (mode) {
case 0: mode0.mouseup(mouseInfo);break;
case 2: mode2.mouseup(mouseInfo);break;
case 3: mode3.mouseup(mouseInfo);break;
case 4: mode4.mouseup(mouseInfo);break;
case 5: mode5.mouseup(mouseInfo);break;
case 6: mode6.mouseup(mouseInfo);break;
case 7: mode7.mouseup(mouseInfo);break;
case 8: mode8.mouseup(mouseInfo);break;
case 9: mode9.mouseup(mouseInfo);break;
}

mousedown.target         = null;
}

if (!event.target.dataset.coinTrip) {
//edgeDetect.style.display= "none"; 

}

redraw();

updateInfoShelf();

});























document.addEventListener("click", (event) => {


if (coinFocus!=null&&drawPartNames=="true"&&event.target&&event.target.dataset&&event.target.dataset.coinTrip) {



/* COPY VARIOUS STUFF TO THE CLIPBOARD IF ENABLED */
       if (!event.shiftKey&&!event.ctrlKey) {
/* copyToClipboard(coinFocus.id); */
} else if ( event.shiftKey&&!event.ctrlKey) {
let setName = "sel0";
       if (coinFocus.dataset.coinTrip=="0") {
setName = "sel0";
} else if (coinFocus.dataset.coinTrip=="1") {
setName = "sel1";
} else if (coinFocus.dataset.coinTrip=="?") {
setName = "sel2";
}
let variableName = "n" + Date.now();
let clipList =
`const ${variableName} =
[
"`;
for ( let j = 0; j < coinTrip[setName].length; j++) {
if (j != coinTrip[setName].length - 1) {
clipList += coinTrip[setName][j].id + '",\n"';
} else {
clipList += coinTrip[setName][j].id +'"\n];';
}
}
copyToClipboard(clipList);
} else if ( event.shiftKey&& event.ctrlKey) {
copyToClipboard(coinFocus.lastElementChild.firstElementChild.nextElementSibling.innerHTML);
}
}






if (mode==0) { curFocus=0; modeRouter(event,1); }

interfaceLayer.style.display = "none";

if (mouseIsDogged==false) {

const ctrl  = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];

if (!ctrl&&!shift) {
mouseGiveFocus(mouseInfo);
}


if ((event.target==document.documentElement&&curFocus==1)&&Math.abs(mouseDeltaX)<32&&Math.abs(mouseDeltaY)<32) {
mousePlaceCursor(mouseInfo);
}

switch (mode) {
case 0: mode0.mouseclick(mouseInfo);break;
case 1: mode1.mouseclick(mouseInfo);break;
case 2: mode2.mouseclick(mouseInfo);break;
case 3: mode3.mouseclick(mouseInfo);break;
case 4: mode4.mouseclick(mouseInfo);break;
case 5: mode5.mouseclick(mouseInfo);break;
case 6: mode6.mouseclick(mouseInfo);break;
case 7: mode7.mouseclick(mouseInfo);break;
case 8: mode8.mouseclick(mouseInfo);break;
case 9: mode9.mouseclick(mouseInfo);break;
}
mouseDeltaX = 0;
mouseDeltaY = 0;

redraw();

}



});






document.addEventListener("dblclick", (event) => {


if (mouseIsDogged==true) {
if (event.target === document.documentElement) {

if (ui.folder52.ref.style.display == "none" ||
    ui.tab5Wrapper.ref.style.display  == "none") {
hdubDemo.style.opacity = 0;
}

if (mode==0) { curFocus=0; modeRouter(event,1); }

hotDog = false;
spaceViewOff([event,32,32,event.shiftKey,event.ctrlKey,event.altKey]);
restorePointerEventsNone(); 
helpMenuOverlay.style.display="none";
F.focus();

return;

}
}





if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];

       if (event.target.dataset.coinTrip&&!shift&&!alt) {
//insertNewDuplicate([,68,100,,,]);


hotDog = true; event.preventDefault(); spaceViewOn([event,32,32,event.shiftKey,event.ctrlKey,event.altKey]); removePointerEventsNone();
if (coinFocus != null &&
    coinFocus.div
) {
if (ui.folder52.ref.style.display == "block" &&
    ui.tab5Wrapper.ref.style.display  == "block") {
coinFocus.div.setAttribute("contentEditable", true);
coinFocus.anchor.style.zIndex = "0";
}
coinFocus.div.focus();
}


} else if (event.target.dataset.coinTrip&& shift&&!alt) {
cutOutImage();
} else if (event.target.dataset.coinTrip&&!shift&& alt) {
applyImageBack();
} else if (event.target==document.documentElement) {
mousePlaceCursor(mouseInfo);

curFocus=1;
modeRouter(event,1);
if (coinFocus!=null) {
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
}
recoverColouration();

}

switch (mode) {
case 0: mode0.dblclick(mouseInfo);break;
case 1: mode1.dblclick(mouseInfo);break;
case 2: mode2.dblclick(mouseInfo);break;
case 3: mode3.dblclick(mouseInfo);break;
case 4: mode4.dblclick(mouseInfo);break;
case 5: mode5.dblclick(mouseInfo);break;
case 6: mode6.dblclick(mouseInfo);break;
case 7: mode7.dblclick(mouseInfo);break;
case 8: mode8.dblclick(mouseInfo);break;
case 9: mode9.dblclick(mouseInfo);break;
}

redraw();

}



});







/* Scraps the dots if the mouse leaves the browser window. */
document.addEventListener("mouseleave", (event) => {

if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
rdots();

redraw();

}



});












/* This gives the change of colouration and other styles on mouse over. */
document.addEventListener("mouseover",      (event) => {











if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];
switch (mode) {
//case 0: mode0.mouseover(mouseInfo); break;
//case 1: mode1.mouseover(mouseInfo); break;
//case 2: mode2.mouseover(mouseInfo); break;
//case 3: mode3.mouseover(mouseInfo); break;
//case 4: mode4.mouseover(mouseInfo); break;
//case 5: mode5.mouseover(mouseInfo); break;
//case 6: mode6.mouseover(mouseInfo); break;
//case 7: mode7.mouseover(mouseInfo); break;
case 8: mode8.mouseover(mouseInfo); break;
//case 9: mode9.mouseover(mouseInfo); break;
}

redraw();

}



});









document.addEventListener("mouseout",      (event) => {

if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey, alt = event.altKey;
const mouseInfo = [event,ctrl,shift,alt];

redraw();

}
//edgeDetect.style.display = "none";



});
