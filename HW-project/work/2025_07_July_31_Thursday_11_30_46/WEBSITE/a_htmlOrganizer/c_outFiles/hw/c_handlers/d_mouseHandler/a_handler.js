let mouseDeltaX = 0,
    mouseDeltaY = 0;
let mousemoveTarget=null;

document.addEventListener("mousemove", (event) => {
if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey;
const e = event;
const mouseInfo = [e,ctrl,shift];
if (event.target.dataset&&event.target.dataset.coinTrip) {
mousemoveTarget=event.target;
} else {
mousemoveTarget=null;
}

/*
mouseCursor.style.display            ="block";
	mouseCursor.style.left = `${event.clientX - (mSZ / 2)}px`;
	mouseCursor.style.top  = `${event.clientY - (mSZ / 2)}px`;
*/

if (mousedown.hold==true) {
mouseDeltaX = event.pageX - mousedown.pageX;
mouseDeltaY = event.pageY - mousedown.pageY;
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
});













let
mousedown                =    {};
mousedown.hold           = false;
mousedown.modeNumber     =     0;
mousedown.button         =     0;
mousedown.ctrl           =     0;
mousedown.shift          =     0;
mousedown.alt            =     0;
mousedown.meta           =     0;
mousedown.pageX          =     0;
mousedown.pageY          =     0;
mousedown.tripSet        =  null;
mousedown.target         =  null;
mousedown.targetRegion   =     5;




/* This puts the information from the mousedown event into data so that we can refer to it later in our conditions. */
document.addEventListener("mousedown",   (event) => {



if (splashScreenVisible==true) {
splashScreen.remove();
}



if (mouseIsDogged==false) {

const ctrl  = event.ctrlKey, shift = event.shiftKey;
const mouseInfo = [event,ctrl,shift];

mouseGiveFocus(mouseInfo);

mouseCursor.src          = currentIconSet.cur2.src;

mousedown.hold           = true;
mousedown.modeNumber     = mode;
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
}

     if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width)*1/3)))  {
     if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*1/3))) { mousedown.targetRegion = 7; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*2/3))) { mousedown.targetRegion = 4; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3))) { mousedown.targetRegion = 1; }
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width)*2/3)))  {
     if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*1/3))) { mousedown.targetRegion = 8; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*2/3))) { mousedown.targetRegion = 5; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3))) { mousedown.targetRegion = 2; }
else if (event.pageX <= (parseInt(event.target.style.left) + (parseInt(event.target.style.width)*3/3)))  {
     if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*1/3))) { mousedown.targetRegion = 9; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*2/3))) { mousedown.targetRegion = 6; }
else if (event.pageY <= (parseInt(event.target.style.top)  + (parseInt(event.target.style.height)*3/3))) { mousedown.targetRegion = 3; }
}
}
}



if (ctrl&&!shift&&mode!=8) {


if (event.target.dataset.coinTrip) {
insertNewDuplicate([event,68,100,shift,ctrl,false]);
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

});





document.addEventListener("mouseup", (event) => {
if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey;
const mouseInfo = [event,ctrl,shift];

mousedown.hold           = false;
mousedown.pageX          = 0;
mousedown.pageY          = 0;

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

});







document.addEventListener("click", (event) => {

if (mouseIsDogged==false) {

const ctrl  = event.ctrlKey, shift = event.shiftKey;
const mouseInfo = [event,ctrl,shift];
mouseGiveFocus(mouseInfo);

if ((event.target==document.body||curFocus==1)&&Math.abs(mouseDeltaX)<32&&Math.abs(mouseDeltaY)<32) {
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
}
});






document.addEventListener("dblclick", (event) => {
if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey;
const mouseInfo = [event,ctrl,shift];

       if (event.target.dataset.coinTrip&&!shift) {
innerRotationMin();
} else if (event.target.dataset.coinTrip&& shift) {
promptOutgoingHashLink();
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
}
});







/* Scraps the dots if the mouse leaves the browser window. */
document.addEventListener("mouseleave", (event) => {
if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey;
const mouseInfo = [event,ctrl,shift];
rdots();
}
});

let
mouseover                =    {};
mouseover.target         =  null;

/* This gives the change of colouration and other styles on mouse over. */
document.addEventListener("mouseover",      (event) => {
if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey;
const mouseInfo = [event,ctrl,shift];
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
}
});









document.addEventListener("mouseout",      (event) => {
if (mouseIsDogged==false) {
const ctrl  = event.ctrlKey, shift = event.shiftKey;
const mouseInfo = [event,ctrl,shift];
}
});
