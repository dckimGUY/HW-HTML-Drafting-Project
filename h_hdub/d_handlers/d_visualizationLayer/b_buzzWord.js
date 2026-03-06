let buzzRunning = false;


function buzzWord(
method_0_1_2,
text,
fontSize,
colour,
delay,
speed,
chop,
sweepTo,
left,
top,
event
) {
if (buzzRunning == true) return;
const repeats = 10;
for (let j = 0; j < repeats; j++) {
setTimeout(() => {
buzz(method_0_1_2,text,fontSize,colour,delay,speed,chop,sweepTo,left,top,event);
if (j == repeats - 1) buzzRunning = false;
}, 5 * j);
}
buzzRunning = true;
}






function buzz(
method_0_1_2,
text,
fontSize,
colour,
delay,
speed,
chop,
sweepTo,
left,
top,
event
) {


if (
(text == "x" && lastKey != "x") ||
(text == "p" && lastKey != "p")
) {
return;
}


let lefting   = -window.scrollX;
let topping   = -window.scrollY;
let boxWidth  = window.innerWidth ;
let boxHeight = window.innerHeight;
let origin    = "center";
let lateDelay = 0;
if (left && top) {
lefting = left - (window.innerWidth  / 2) - window.scrollX;
topping = top  - (window.innerHeight / 2) - window.scrollY;
} else if (event) {
lefting = event.clientX  - (window.innerWidth  / 2) - window.scrollX;
topping = event.clientY  - (window.innerHeight / 2) - window.scrollY;
}
if (method_0_1_2 == (1 || 2)) {
switch (sweepTo) {
case "top left"    : origin = "bottom right"; break;
case "top right"   : origin = "bottom left" ; break;
case "bottom left" : origin = "top right"   ; break;
case "bottom right": origin = "top left"    ; break;
case "center"      : origin = "center"      ; break;
case "top"         : origin = "bottom"      ; break;
case "bottom"      : origin = "top"         ; break;
case "left"        : origin = "right"       ; break;
case "right"       : origin = "left"        ; break;
}
}
const
buzzFeed = document.createElement("button");
buzzFeed.style = `
pointer-events   :           none;
user-select      :           none;
background-color :    transparent;
border           :            0px;
font-family      : dckimPixelMono;
font-size        : ${fontSize * 0.75}px;
line-height      :              1;
color            :      ${colour};
overflow         :        visible;
width            :  ${boxWidth}px;
height           : ${boxHeight}px;
position         :          fixed;
left             :   ${lefting}px;
top              :   ${topping}px;
z-index          :   999999999999;
transform-origin :      ${origin};
opacity          :${visualOpacity / 2};
`;
       if (method_0_1_2 == 0) {
buzzFeed.style.transform = `scale(1)`;
buzzFeed.style.opacity   = visualOpacity / 2;
} else if (method_0_1_2 == 1) {
buzzFeed.style.transform = `scale(0)`;
buzzFeed.style.opacity   = "0";
lateDelay = delay;
delay = 0;
} else if (method_0_1_2 == 2) {
buzzFeed.style.transform = `scale(1)`;
buzzFeed.style.opacity   = visualOpacity / 2;
}
buzzFeed.innerHTML = text;
document.body.append(buzzFeed);
setTimeout(() => {
for (let j = chop; j >= parseInt(chop/10); j--) {
setTimeout(() => {
       if (method_0_1_2 == 0) {
buzzFeed.style.opacity   =  visualOpacity / 2 * (j / chop);
buzzFeed.style.transform = `
scaleX(${j / chop})
scaleY(${chop / j})
rotateZ(${(-360 * j) / chop}deg)
`;
} else if (method_0_1_2 == 1) {
buzzFeed.style.opacity   =  visualOpacity / 2 * (1 - j / chop);
buzzFeed.style.transform = `
scale(${1 - j / chop})
`;
} else if (method_0_1_2 == 2) {
buzzFeed.style.opacity   =  visualOpacity / 2 * (j / chop);
buzzFeed.style.transform = `
scale(${j / chop})
`;
}
}, (chop - j) * (speed / chop));
}
setTimeout(() => {
buzzFeed.remove();
redraw();
}, speed + lateDelay + 10);
}, delay);
}













function handleBuzz() {
let message = "";

let textColour = document.getElementById("coin72275").value;

switch (lastKey) {
case "1": message = `LEVEL 1&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "2": message = `LEVEL 2&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "3": message = `LEVEL 3&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "4": message = `LEVEL 4&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "5": message = `LEVEL 5&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "6": message = `LEVEL 6&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "7": message = `LEVEL 7&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "8": message = `LEVEL 8&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "9": message = `LEVEL 9&nbsp;`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "0": message = `LEVEL 10`     ;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;

case "!": message = `LEVEL 11`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "@": message = `LEVEL 12`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "#": message = `LEVEL 13`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "$": message = `LEVEL 14`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "%": message = `LEVEL 15`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "^": message = `LEVEL 16`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "&": message = `LEVEL 17`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "*": message = `LEVEL 18`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case "(": message = `LEVEL 19`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;
case ")": message = `LEVEL 20`;redraw();buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + 32);break;

case "s": message = `${topLayer.aa_project_name} SAVED`; redraw(); buzzWord(1,message,64,textColour,400,200,25,"center",window.innerWidth / 2,32); break;
case "S": message = `${filename} SAVED`; redraw();                 buzzWord(1,message,64,textColour,400,200,25,"center",window.innerWidth / 2,32); break;







case "b": message = `break`  ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "B": message = `combine`; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "q": message = `unwrap` ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "Q": message = `wrap`   ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;

case "a": message = `add right`     ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "A": message = `add right wall`; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "D": message = `add duplicate` ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "i": message = `add left`      ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "I": message = `add left wall` ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "o": message = `add below`     ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "O": message = `add above`     ; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"top",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;

case "w": message = `W window mode`;      redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "z": message = `Z-index global`;     redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "Z": message = `Z-index per colour`; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "e": message = `E edge mode`;        redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "d": message = `D duplication mode`; redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "g": message = `G move mode`;        redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "G": message = `G move mode`;        redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "t": message = `T colour mode`;      redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "T": message = `T colour mode`;      redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "v": message = `V flow global`;      redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
case "V": message = `V flow per colour`;  redraw(); buzzWord(2,message,64,textColour,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32); break;
}



if (message != "") {
return;
}










}
