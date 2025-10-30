function buttonizer() {
if (coinFocus != null) {
if (coinFocus.div&&coinFocus.div.children&&coinFocus.div.children.length > 1) {
let newInternals =
`<div style="position: absolute; left: 0px; top: 0px; width: ${coinFocus.style.width}; height: ${coinFocus.style.height};">
<style>
.button_         {
image-rendering  : crisp-edges;
image-rendering  :   pixelated;
background-color : transparent;
                 }
.button_:focus   {
outline: none;
                 }
.input_          {
position         :    absolute;
box-sizing       :  border-box;
font-size        :        32px;
border           :        none;
margin           :        none;
padding-right    :        32px;
resize           :        none;
background-color : transparent;
font-family      :   monospace;
text-align       :       right;
color            :       black;
                 }
.input_:focus    {
outline: none;
                 }
.textarea_       {
position         :    absolute;
box-sizing       :  border-box;
font-size        :        32px;
border           :        none;
margin           :        none;
padding          :        none;
resize           :        none;
background-color : transparent;
                 }
.textarea_:focus {
outline: none;
                 }`;

let nameInput;
let scriptBlock       = '["';
let buttonHandlerPrep = ''  ;
let changeHandlerPrep  = ''  ;
let functionPrep      = ''  ;

let imageFolder = "d_images/";

for (let j = 0; j < coinFocus.div.children.length; j++) {
if (coinFocus.div.children[j].dataset.name) { nameInput = coinFocus.div.children[j].dataset.name; } else { nameInput = coinFocus.div.children[j].id; }
if (coinFocus.div.children[j].dataset.coinTrip==Ts2) {
if (j != coinFocus.div.children.length - 1) {
scriptBlock  += nameInput + '", "';
functionPrep += ('ui.' + nameInput + '.click').padEnd(32, " ") + ' = function() {  };\n';
buttonHandlerPrep   += ('case ui.' + nameInput + '.ref:').padEnd(32, " ") + (' ui.' + nameInput + '.click()').padEnd(32, " ") + ' ; break;\n';
} else {
scriptBlock += nameInput + '"]';
functionPrep += ('ui.' + nameInput + '.click').padEnd(32, " ") + ' = function() {  };';
buttonHandlerPrep   += ('case ui.' + nameInput + '.ref:').padEnd(32, " ") + (' ui.' + nameInput + '.click()').padEnd(32, " ") + ' ; break;';
}
} else {
if (j != coinFocus.div.children.length - 1) {
scriptBlock  += nameInput + '", "';
functionPrep += ('ui.' + nameInput + '.change').padEnd(32, " ") + ' = function() {  };\n';
changeHandlerPrep   += ('case ui.' + nameInput + '.ref:').padEnd(32, " ") + (' ui.' + nameInput + '.change()').padEnd(32, " ") + ' ; break;\n';
} else {
scriptBlock += nameInput + '"]';
functionPrep += ('ui.' + nameInput + '.change').padEnd(32, " ") + ' = function() {  };';
changeHandlerPrep   += ('case ui.' + nameInput + '.ref:').padEnd(32, " ") + (' ui.' + nameInput + '.change()').padEnd(32, " ") + ' ; break;';
}
}

if (coinFocus.div.children[j].dataset.coinTrip==Ts2) {
if (!!coinFocus.div.children[j].lastElementChild.lastElementChild.src && !coinFocus.div.children[j].lastElementChild.lastElementChild.src == "" && !coinFocus.div.children[j].lastElementChild.lastElementChild.src.startsWith("data")) {
let extension = coinFocus.div.children[j].lastElementChild.lastElementChild.src.match(/(\.[^.\/]+)$/)[0];
let filename  = coinFocus.div.children[j].lastElementChild.lastElementChild.src.match(/([^/]+)\.[^.]+$/)[1];
newInternals += `
.button_${nameInput.padEnd(24, " ")} { position: absolute; border: none; margin: none; padding: none; left: ${coinFocus.div.children[j].style.left.padStart(8, " ")}; top: ${coinFocus.div.children[j].style.top.padStart(8, " ")}; width: ${coinFocus.div.children[j].style.width.padStart(8, " ")}; height: ${coinFocus.div.children[j].style.height.padStart(8, " ")};
                                   background-image: url("${imageFolder}${filename}${extension}");        }
.button_${(nameInput + ":focus").padEnd(24, " ")} { background-image: url("${imageFolder}${filename}_focus${extension}");  }
.button_${(nameInput + ":hover").padEnd(24, " ")} { background-image: url("${imageFolder}${filename}_hover${extension}");  }
.button_${(nameInput + ":active").padEnd(24, " ")} { background-image: url("${imageFolder}${filename}_active${extension}"); }`;
} else {
newInternals += `
.button_${nameInput.padEnd(24, " ")} { position: absolute; border: none; margin: none; padding: none; left: ${coinFocus.div.children[j].style.left.padStart(8, " ")}; top: ${coinFocus.div.children[j].style.top.padStart(8, " ")}; width: ${coinFocus.div.children[j].style.width.padStart(8, " ")}; height: ${coinFocus.div.children[j].style.height.padStart(8, " ")}; outline-offset: -4px;
                                   background-color: grey; outline: 4px outset grey; }
.button_${(nameInput + ":focus").padEnd(24, " ")} { background-color: blue; outline: 4px outset blue; }
.button_${(nameInput + ":hover").padEnd(24, " ")} { background-color: lime; outline: 4px outset lime; }
.button_${(nameInput + ":active").padEnd(24, " ")} { background-color: pink; outline: 4px inset  pink; }`;
}
} else {
newInternals += `
.input_${nameInput.padEnd(25, " ")} { position: absolute; border: none; margin: none; padding: none; left: ${coinFocus.div.children[j].style.left.padStart(8, " ")}; top: ${coinFocus.div.children[j].style.top.padStart(8, " ")}; width: ${coinFocus.div.children[j].style.width.padStart(8, " ")}; height: ${coinFocus.div.children[j].style.height.padStart(8, " ")}; outline-offset: -4px; }`;
}
}
newInternals += '\n</style>\n\n';
for (let j = 0; j < coinFocus.div.children.length; j++) {
if (coinFocus.div.children[j].dataset.name) { nameInput = coinFocus.div.children[j].dataset.name; } else { nameInput = coinFocus.div.children[j].id; }
       if (coinFocus.div.children[j].dataset.coinTrip==Ts2) {
newInternals += '<button id="' + nameInput + '" class="button_ button_' + nameInput + '" title="' + coinFocus.div.children[j].dataset.notes + '"></button>' + '\n';
} else if (coinFocus.div.children[j].dataset.coinTrip==Ts1){
newInternals += '<input id="' + nameInput + '" name="' + nameInput + '" class="input_ input_' + nameInput + '" type="value" placeholder="empty">' + '\n';
} else if (coinFocus.div.children[j].dataset.coinTrip==Ts0){
newInternals += '<textarea id="' + nameInput + '" class="textarea_ input_' + nameInput + '" placeholder="empty"></textarea>' + '\n';
}
}

newInternals += '</div>' + '\n';
newInternals += `
<script>
/*** THIS SETS UP THE REFERENCES ***/
const ui = {};
${scriptBlock}.forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/*** THIS SETS UP THE FUNCTION BLOCKS: READY FOR CODE ***/
${functionPrep}

/*** THIS SETS UP EVENT DELEGATION ***/
document.addEventListener("click", function() {
switch (event.target) {
${buttonHandlerPrep}
}
});

/*** THIS SETS UP EVENT DELEGATION ***/
document.addEventListener("change", function() {
switch (event.target) {
${changeHandlerPrep}
}
});
</script>`;
coinFocus.div.innerHTML = newInternals;
}
}
}