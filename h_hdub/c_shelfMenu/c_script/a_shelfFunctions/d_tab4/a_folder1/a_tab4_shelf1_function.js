function saveReadyButton(width, height, repetition, upscaling) {
let repetitions = 4;
if (event.shiftKey) repetitions = 2;
function readyButton(width, height, repetitions, upscaling) {
const columnWidth   =  width * upscaling;
const rowHeight     = height * upscaling;
const canvas        = document.createElement("canvas");
      canvas.width  = 100 * upscaling * repetitions;
      canvas.height = 180 * upscaling;
let   ctx           = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.beginPath();
const columns    = canvas.width  / columnWidth;
const rows       = canvas.height / rowHeight;
const widthStep  = canvas.width  / columns;
const heightStep = canvas.height / rows;
for (let j = 1; j <     columns; j++) { ctx.moveTo(j *  widthStep,   0);  ctx.lineTo(j *  widthStep, canvas.height); }
for (let j = 1; j <        rows; j++) { ctx.moveTo(0  , j *  heightStep); ctx.lineTo(canvas.width, j *  heightStep); }
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = "black";
for (let j = 0; j < repetitions; j++) { ctx.strokeRect((canvas.width / repetitions) * j, 0, canvas.width / repetitions, canvas.height); }
      ctx.stroke();
return canvas;
}
let syntax = "";
       if (width == 20 && height == 20) {
syntax = 'h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20';
} else if (width == 50 && height == 20) {
syntax = 'h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50';
} else if (width == 20 && height == 45) {
syntax = 'h45w20w20w20w20w20h45w20w20w20w20w20h45w20w20w20w20w20h45w20w20w20w20w20';
}
const datePrefix = Date.now().toString().slice(-6);
const dataURL = readyButton(width, height, repetitions, upscaling).toDataURL('image/png');
const link = document.createElement('a');
link.href = dataURL;
link.download = "READY_" + datePrefix + '_HDUB_' + upscaling + '_' + repetitions + 'btn_' + syntax + '.png';
link.click();
}




















function toggleSidebar4() {
if (document.getElementById("sidebar4").style.left == "-148px") {
document.getElementById("sidebar4").style.left = "0px";
localStorage.setItem("sidebar4", "0px");
} else {
document.getElementById("sidebar4").style.left = "-148px";
localStorage.setItem("sidebar4", "-148px");
}
}

if (localStorage.getItem("sidebar4")) {
document.getElementById("sidebar4").style.left = localStorage.getItem("sidebar4");
}

const letters = [ "a", "b", "c", "d", "e", "f", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z" ]; 

if (localStorage.getItem("hdubSingleEntry")) {
ui.hdubSingleEntry.ref.value = localStorage.getItem("hdubSingleEntry"); }

if (localStorage.getItem("hdubPartDesignations")) {
ui.hdubPartDesignations.ref.value = localStorage.getItem("hdubPartDesignations"); }




ui.hdubSingleEntry.ref.onfocus = function() {
displayDemo();
}





ui.hdubPartDesignations.input = function() {
  const ref = ui.hdubPartDesignations.ref;
  let input = ref.value;
  if (input === "") return;

  // 1. Handle command characters (Exact match from the other box)
  if (/[\n\*\?\/\+<>\[\] ]/.test(input)) {
    ref.value = clean(input);
    const cleaned = ref.value;

    if (input.includes("\n")) {
      const syntaxObject = cropObject(100, 180, makeObject(cleaned));
      enterFromSyntax(syntaxObject);
      coinFocus.focus();
      ref.blur();
      demoTime(1.5);
      redraw();
    } else if (/[<>]/.test(input)) {
      input.includes("<") ? layerLeft() : layerRight();
      updateInfoShelf();
      redraw();
    } else if (/[\[\]]/.test(input)) {
      let tempRef = ui.hdubSheetTemplate4x.ref;
      let val = parseInt(tempRef.value);
      if (input.includes("[") && val > 0) tempRef.value = val - 1;
      if (input.includes("]") && val < 20) tempRef.value = val + 1;
    } else if (input.includes(" ")) {
      saveSyntaxImage();
    }
  }

  // 2. Handle Letter triggers (lowercase a-z logic)
  for (let k = 0; k < letters.length; k++) {
    if (input.includes(letters[k])) {
      ref.value = clean(ref.value);
      switchString("hwSel_" + letters[k]);
      break;
    }
  }

  // 3. Part Designation Specific Logic (A-Z filtering)
  // Strips everything that isn't uppercase A-Z for the part name
  ref.value = ref.value.replace(/[^A-Z]/g, "");
  const finalValue = ref.value;

  // 4. Storage and Sync
  localStorage.setItem("hdubPartDesignations", finalValue);

  const current = ui.hwString.currentSel;
  ui.hwString[current].part = finalValue;
  
  // Also sync the string logic to ensure the canvas reflects the state
  ui.hwString[current].string = finalValue;
  
  localStorage.setItem("hwString", JSON.stringify(ui.hwString));
  
  loadLetterInputs();
};















ui.hdubSingleEntry.input = function() {
  const ref = ui.hdubSingleEntry.ref;
  let input = ref.value;
  if (input === "") return;

  // Handle Command Triggers
  if (/[\n\*\?\/\+<>\[\] ]/.test(input)) {
    ref.value = clean(input);
    const cleaned = ref.value;

    if (input.includes("\n")) {
      const syntaxObject = cropObject(100, 180, makeObject(cleaned));
      enterFromSyntax(syntaxObject);
      coinFocus.focus();
      ref.blur();
      demoTime(1.5);
      redraw();
    } else if (input.includes("*") || input.includes("?") || input.includes("/") || input.includes("+")) {
      // Logic for these characters simply cleans the input in the original
    } else if (/[<>]/.test(input)) {
      input.includes("<") ? layerLeft() : layerRight();
      updateInfoShelf();
      redraw();
    } else if (/[\[\]]/.test(input)) {
      let val = parseInt(ui.hdubSheetTemplate4x.ref.value);
      if (input.includes("[") && val > 0) ui.hdubSheetTemplate4x.ref.value = val - 1;
      if (input.includes("]") && val < 20) ui.hdubSheetTemplate4x.ref.value = val + 1;
    } else if (input.includes(" ")) {
      saveSyntaxImage();
    }
  }

  // Handle Letter Triggers
  for (let k = 0; k < letters.length; k++) {
    if (input.includes(letters[k])) {
      ref.value = clean(ref.value);
      switchString("hwSel_" + letters[k]);
      break;
    }
  }

  // Final Formatting and Drawing
  ref.value = ref.value.replace(/\./g, "h").replace(/-/g, "w");
  if (ref.value != "") {
    drawArray(cropObject(100, 180, makeObject(clean(ref.value))));
  }

  localStorage.setItem("hdubSingleEntry", ref.value);
  displayDemo();

  const current = ui.hwString.currentSel;
  ui.hwString[current].string = ref.value;
  ui[current].img.src = drawCell(ref.value, ui.hwString[current].colour);
  localStorage.setItem("hwString", JSON.stringify(ui.hwString));
};

function drawAllCells() {
  const cellNames = ["hwSel_a", "hwSel_b", "hwSel_c", "hwSel_d", "hwSel_e", "hwSel_f", "hwSel_g", "hwSel_i", "hwSel_j", "hwSel_k", "hwSel_l", "hwSel_m", "hwSel_n", "hwSel_o", "hwSel_p", "hwSel_q", "hwSel_r", "hwSel_s", "hwSel_t", "hwSel_u", "hwSel_v", "hwSel_x", "hwSel_y", "hwSel_z"];
  for (let k = 0; k < cellNames.length; k++) {
    const name = cellNames[k];
    if (ui.hwString[name].string != "") {
      ui[name].img.src = drawCell(ui.hwString[name].string, ui.hwString[name].colour);
    }
  }
}

// Initialization and LocalStorage Load
if (localStorage.getItem("hwString")) {
  ui.hwString = JSON.parse(localStorage.getItem("hwString"));
}

drawAllCells();


























ui.hdubSingleEntry.change        = function() { demoTime(1.5); loadLetterInputs(); }



ui.hdubAdd.click                 = function() {
rollAdd();
}

function rollAdd() {
ui.hdubRoll.ref.value = ui.hdubRoll.ref.value.replace(/,,/g, ",");
ui.hdubRoll.ref.value = ui.hdubRoll.ref.value.replace(/,,/g, ",");
if (clean(ui.hdubSingleEntry.ref.value) != "") {
if (ui.hdubRoll.ref.value != "") {
ui.hdubRoll.ref.value += ",\n" + reString(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
} else {
ui.hdubRoll.ref.value = reString(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
}
}
const rollArray = ui.hdubRoll.ref.value.split(",\n");
if (rollArray[0]) ui.hdubRoll.ref.value = rollArray[0];
for (j = 1; j < rollArray.length; j ++) {
ui.hdubRoll.ref.value += ",\n" + rollArray[j];
}
localStorage.setItem("hdubRoll", ui.hdubRoll.ref.value);
};

if (localStorage.getItem("hdubRoll")) {
ui.hdubRoll.ref.value = localStorage.getItem("hdubRoll"); }

ui.hdubRoll.input                = function() {
const rollArray = ui.hdubRoll.ref.value.split(",\n");
if (rollArray[0]) ui.hdubRoll.ref.value = rollArray[0];
for (j = 1; j < rollArray.length; j ++) {
ui.hdubRoll.ref.value += ",\n" + rollArray[j];
}
localStorage.setItem("hdubRoll", ui.hdubRoll.ref.value);
};

var hdubRollPosition = 0;
ui.hdubRollLeft.click            = function() {
rollLeft();
}

function rollLeft() {
if (ui.hdubRoll.ref.value != "") {
hdubRollPosition--;
if (hdubRollPosition < 0) hdubRollPosition = ui.hdubRoll.ref.value.split(",\n").length - 1;
ui.hdubSingleEntry.ref.value = ui.hdubRoll.ref.value.split(",\n")[hdubRollPosition];
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
if (ui.hdubSingleEntry.ref.value != "") {
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
}
} else {
hdubRollPosition = 0;
}
}

ui.hdubRollRight.click           = function() {
rollRight();
}

function rollRight() {
if (ui.hdubRoll.ref.value != "") {
hdubRollPosition++;
if (hdubRollPosition > ui.hdubRoll.ref.value.split(",\n").length - 1) hdubRollPosition = 0;
ui.hdubSingleEntry.ref.value = ui.hdubRoll.ref.value.split(",\n")[hdubRollPosition];
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
if (ui.hdubSingleEntry.ref.value != "") {
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
}
} else {
hdubRollPosition = 0;
}
};



ui.hdubEnter.click               = function() {
let syntaxObject = cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value)));
enterFromSyntax(syntaxObject);
hdubDemo.style.opacity = 0;
};

ui.hdubSave.click                = function() { saveSyntaxImage(); };

ui.hdubCanvas.click              = function() {  };

ui.hdubSheetTemplate1x.click     = function() { manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value)))); };


















ui.hwSel_a.click                 = function() { switchString("hwSel_a"); buzzWord(0,'<sup>a</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_b.click                 = function() { switchString("hwSel_b"); buzzWord(0,'<sup>b</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_c.click                 = function() { switchString("hwSel_c"); buzzWord(0,'<sup>c</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_d.click                 = function() { switchString("hwSel_d"); buzzWord(0,'<sup>d</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_e.click                 = function() { switchString("hwSel_e"); buzzWord(0,'<sup>e</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_f.click                 = function() { switchString("hwSel_f"); buzzWord(0,'<sup>f</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_g.click                 = function() { switchString("hwSel_g"); buzzWord(0,'<sup>g</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_i.click                 = function() { switchString("hwSel_i"); buzzWord(0,'<sup>i</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_j.click                 = function() { switchString("hwSel_j"); buzzWord(0,'<sup>j</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_k.click                 = function() { switchString("hwSel_k"); buzzWord(0,'<sup>k</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_l.click                 = function() { switchString("hwSel_l"); buzzWord(0,'<sup>l</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_m.click                 = function() { switchString("hwSel_m"); buzzWord(0,'<sup>m</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_n.click                 = function() { switchString("hwSel_n"); buzzWord(0,'<sup>n</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_o.click                 = function() { switchString("hwSel_o"); buzzWord(0,'<sup>o</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_p.click                 = function() { switchString("hwSel_p"); buzzWord(0,'<sup>p</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_q.click                 = function() { switchString("hwSel_q"); buzzWord(0,'<sup>q</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_r.click                 = function() { switchString("hwSel_r"); buzzWord(0,'<sup>r</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_s.click                 = function() { switchString("hwSel_s"); buzzWord(0,'<sup>s</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_t.click                 = function() { switchString("hwSel_t"); buzzWord(0,'<sup>t</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_u.click                 = function() { switchString("hwSel_u"); buzzWord(0,'<sup>u</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_v.click                 = function() { switchString("hwSel_v"); buzzWord(0,'<sup>v</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_x.click                 = function() { switchString("hwSel_x"); buzzWord(0,'<sup>x</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_y.click                 = function() { switchString("hwSel_y"); buzzWord(0,'<sup>y</sup>',144,'white',200,200,25,'top','','',event); };
ui.hwSel_z.click                 = function() { switchString("hwSel_z"); buzzWord(0,'<sup>z</sup>',144,'white',200,200,25,'top','','',event); };





function switchString(cell) {
ui.hwString.currentSel = cell;


ui.hdubSingleEntry.ref.value = ui.hwString[cell].string;
if (ui.hwString[cell].part) {
ui.hdubPartDesignations.ref.value = ui.hwString[cell].part;
} else {
ui.hdubPartDesignations.ref.value = "";
}
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hwString",JSON.stringify(ui.hwString));
letters.forEach((letter) => {
ui["hwSel_" + letter].ref.style.outline = "";
ui["hwSel_" + letter].ref.style.zIndex = 100;
});
ui[cell].ref.style.outline = "2px solid " + ui.hwString[cell].colour;
ui[cell].ref.style.zIndex = 200;
drawDemo(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
loadLetterInputs();
}





















/* display the demo */
ui.hdubSheetTemplate4x.input = function() {
  const val = document.getElementById("hdubSheetTemplate4x").value;
  const coinVal = document.getElementById("coin72275").value;
  
  // Simplified scale mapping
  const labels = { '1': "10x", '2': "8x", '3': "6x", '4': "5x" };
  if (labels[val]) {
    buzzWord(0, labels[val], 512, coinVal, 400, 300, 100, "center");
  }
  
  displayDemo();
};

/* fade the demo out */
ui.hdubSheetTemplate4x.change = function() {
  demoTime(1.5);
};

function displayDemo() {
  const entryFactor = ui.hdubSheetTemplate4x.ref.value;
  localStorage.setItem("hdubEntryFactor", entryFactor);
  
  // Draw the preview based on current syntax
  drawDemo(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
  hdubDemo.style.opacity = 1;

  if (Picture.style.display === "block") {
    const scaleMap = { '1': 10, '2': 8, '3': 6, '4': 5 };
    const pictureScale = scaleMap[entryFactor] || 1;
    Picture.style.transform = "scale(" + pictureScale + ")";
  }
}

function demoTime(max) {
  // Refresh the demo draw once before fading
  drawDemo(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
  
  // Use a single transition for the fade instead of 100 timeouts
  hdubDemo.style.transition = "opacity " + (max / 100) + "s linear";
  hdubDemo.style.opacity = 0;
  
  // Clean up transition after it finishes to prevent logic conflicts elsewhere
  setTimeout(() => {
    hdubDemo.style.transition = "";
  }, max * 10);
}














function drawArray(array) {
  let ctx = ui.hdubCanvas.ref.getContext("2d");
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(16,28,82)";
  ctx.fillStyle = "rgb(16,28,82)";
  ctx.fillRect(0, 0, ui.hdubCanvas.ref.width, ui.hdubCanvas.ref.height);

  rowStart = 0;
  shadeNumber = 0;

  const overlay = document.getElementById("hdubOverlay");
  overlay.innerHTML = "";
  const fragment = document.createDocumentFragment();

  for (let j = 0; j < array.length; j++) {
    columnStart = 0;
    for (let i = 0; i < array[j].column.length; i++) {
      ctx.fillStyle = shadeArray[shadeNumber];
      shadeNumber++;
      if (shadeNumber > 3) shadeNumber = 0;

      const newButton = document.createElement("button");
      newButton.classList = "overlayButton dckimPixelMono";
      newButton.style.left = columnStart + "px";
      newButton.style.top = rowStart + "px";
      newButton.style.width = array[j].column[i].width + "px";
      newButton.style.height = array[j].rowHeight + "px";

      let fontSizeValue = (array[j].column[i].width < array[j].rowHeight) ? array[j].column[i].width : array[j].rowHeight;
      newButton.style.fontSize = fontSizeValue + "px";
      
      newButton.style.color = "black";
      newButton.dataset.hdubOverlay = "scroll";
      newButton.setAttribute("onclick", "this.innerText = ui[ui.hdub.selected].letter; if (ui[ui.hdub.selected].colour == 'hdubPink') { this.style.backgroundColor = coinColour1; } else if (ui[ui.hdub.selected].colour == 'hdubGrey') { this.style.backgroundColor = coinColour0; }  else if (ui[ui.hdub.selected].colour == 'hdubBlue') { this.style.backgroundColor = coinColour2; }; evaluateLetterInputs();");

      fragment.appendChild(newButton);

      ctx.clearRect(columnStart, rowStart, array[j].column[i].width, array[j].rowHeight);
      ctx.fillRect(columnStart, rowStart, array[j].column[i].width, array[j].rowHeight);
      ctx.strokeRect(columnStart, rowStart, array[j].column[i].width, array[j].rowHeight);
      columnStart += array[j].column[i].width;
    }
    rowStart += array[j].rowHeight;
  }
  overlay.appendChild(fragment);
}

function clean(string) {
  if (string == "") return "";
  let newString = string;
  newString = newString.replace(/^[^h]*/g, "");
  newString = newString.replace(/([hw]0)[^hw]*([hw])/g, "$1$2");
  newString = newString.replace(/([hw])[^hw0123456789]*([hw])/g, "$1$2");
  newString = newString.replace(/([hw][123456789][0123456789]*)[^hw0123456789][^hw]*([hw])/g, "$1$2");
  newString = newString.replace(/([hw]0)[^hw]*$/g, "$1");
  newString = newString.replace(/([hw])[^hw0123456789]*$/g, "$1");
  newString = newString.replace(/(w[123456789][0123456789]*)[^hw0123456789]*$/g, "$1");

  const abbrev = [/hh/g, /ww/g, /hw/g, /wh/g];
  const replace = ["h0w0h", "w0w", "h0w", "w0h"];
  for (let k = 0; k < abbrev.length; k++) {
    while (newString.match(abbrev[k])) {
      newString = newString.replace(abbrev[k], replace[k]);
    }
  }

  newString = newString.replace(/^w/g, "h0w");
  newString = newString.replace(/^([^hw]*)$/g, "h$1w0");
  newString = newString.replace(/^([^hw]*)w/g, "h$1w");
  newString = newString.replace(/^([^hw]*)w$/g, "h$1w0");
  newString = newString.replace(/h$/g, "h0w0");
  newString = newString.replace(/h([^hw]*)$/g, "h$1w0");
  newString = newString.replace(/w$/g, "w0");
  return newString;
}

function makeObject(string) {
  let newString = string.replace(/^h/g, "");
  let newArray = newString.split("h");
  let rowArray = [];
  for (let j = 0; j < newArray.length; j++) {
    let numberArray = newArray[j].split("w");
    rowArray.push([]);
    rowArray[j].rowHeight = parseInt(numberArray.shift());
    rowArray[j].column = [];
    for (let i = 0; i < numberArray.length; i++) {
      rowArray[j].column[i] = {};
      rowArray[j].column[i].width = parseInt(numberArray[i]);
    }
  }
  return rowArray;
}

function cropObject(widthCrop, heightCrop, array) {
  let newObject = array;
  rowStart = 0;
  for (let j = 0; j < newObject.length; j++) {
    columnStart = 0;
    for (let i = 0; i < newObject[j].column.length; i++) {
      if (columnStart > widthCrop) {
        newObject[j].column.splice(i, 1);
        i--;
      } else if (columnStart + newObject[j].column[i].width > widthCrop) {
        newObject[j].column[i].width = widthCrop - columnStart;
        columnStart += newObject[j].column[i].width;
      } else {
        columnStart += newObject[j].column[i].width;
      }
    }
    if (rowStart > heightCrop) {
      newObject.splice(j, 1);
      j--;
    } else if (rowStart + newObject[j].rowHeight > heightCrop) {
      newObject[j].rowHeight = heightCrop - rowStart;
      rowStart += newObject[j].rowHeight;
    } else {
      rowStart += newObject[j].rowHeight;
    }
  }
  return newObject;
}

function reString(array) {
  let string = "";
  for (let j = 0; j < array.length; j++) {
    string += "h" + array[j].rowHeight;
    for (let i = 0; i < array[j].column.length; i++) {
      string += "w" + array[j].column[i].width;
    }
  }
  return string;
}

function presentString(string) {
  return string.replace(/h/g, "\nh").replace(/^\n/g, "");
}










const shadeArray = [
"rgba(240,240,255,0.55)",
"rgba(255,240,240,0.65)",
"rgba(240,255,240,0.45)",
"rgba(255,240,255,0.75)"
];
























function drawArray(array) {
  const canvasRef = ui.hdubCanvas.ref;
  const ctx = canvasRef.getContext("2d");
  const overlay = document.getElementById("hdubOverlay");
  const fragment = document.createDocumentFragment(); // Optimizes DOM performance

  // Reset overlay
  overlay.innerHTML = "";

  // Initial Canvas setup
  ctx.lineWidth = 2;
  const defaultColor = "rgb(16,28,82)";
  ctx.strokeStyle = defaultColor;
  ctx.fillStyle = defaultColor;
  ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);

  let rowStart = 0;
  let shadeNumber = 0;

  for (let j = 0; j < array.length; j++) {
    const row = array[j];
    const rowHeight = row.rowHeight;
    let columnStart = 0;

    for (let i = 0; i < row.column.length; i++) {
      const col = row.column[i];
      const colWidth = col.width;

      // Canvas Drawing
      ctx.fillStyle = shadeArray[shadeNumber];
      ctx.clearRect(columnStart, rowStart, colWidth, rowHeight);
      ctx.fillRect(columnStart, rowStart, colWidth, rowHeight);
      ctx.strokeRect(columnStart, rowStart, colWidth, rowHeight);

      // Button Creation
      const newButton = document.createElement("button");
      newButton.className = "overlayButton dckimPixelMono";

      // Style batching for speed
      const s = newButton.style;
      s.left = columnStart + "px";
      s.top = rowStart + "px";
      s.width = colWidth + "px";
      s.height = rowHeight + "px";
      s.fontSize = (colWidth < rowHeight ? colWidth : rowHeight) + "px";
      s.color = "black";

      newButton.dataset.hdubOverlay = "scroll";
      newButton.setAttribute("onclick", "this.innerText = ui[ui.hdub.selected].letter; if (ui[ui.hdub.selected].colour == 'hdubPink') { this.style.backgroundColor = coinColour1; } else if (ui[ui.hdub.selected].colour == 'hdubGrey') { this.style.backgroundColor = coinColour0; }  else if (ui[ui.hdub.selected].colour == 'hdubBlue') { this.style.backgroundColor = coinColour2; }; evaluateLetterInputs();");

      fragment.appendChild(newButton);

      columnStart += colWidth;
      shadeNumber = (shadeNumber + 1) % 4; // Cycles 0, 1, 2, 3
    }
    rowStart += rowHeight;
  }

  // Batch-adds all buttons at once to prevent page flickering
  overlay.appendChild(fragment);
}

























drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));




























function drawCell(string, colour) {
    const array = cropObject(100, 180, makeObject(clean(string)));
    const drawing = document.createElement("canvas");
    drawing.width = 100;
    drawing.height = 180;
    
    const ctx = drawing.getContext("2d", { alpha: true });
    ctx.lineWidth = 4;
    ctx.strokeStyle = colour;
    
    // Using a single path for all rectangles is significantly faster than individual strokeRect calls
    ctx.beginPath();
    
    let rowStart = 0;
    for (let j = 0; j < array.length; j++) {
        const row = array[j];
        const rowHeight = row.rowHeight;
        const columns = row.column;
        let columnStart = 0;
        
        for (let i = 0; i < columns.length; i++) {
            const colWidth = columns[i].width;
            ctx.rect(columnStart, rowStart, colWidth, rowHeight);
            columnStart += colWidth;
        }
        rowStart += rowHeight;
    }
    
    ctx.stroke(); // Batched draw call
    return drawing.toDataURL("image/png");
}












if (localStorage.getItem("hdubEntryFactor")) {
ui.hdubSheetTemplate4x.ref.value = parseInt(localStorage.getItem("hdubEntryFactor"));
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + ui.hdubSheetTemplate4x.ref.value);
} else {
ui.hdubSheetTemplate4x.ref.value = 10;
}



const hdubTopOffset  = 0;
const hdubLeftOffset = 0;



function enterFromSyntax(syntaxObject) {
  const serial = parseInt(Date.now().toString().slice(-4) + "0");
  let sequence = 0;

  const hdub = syntaxObject;
  const entryFactor = ui.hdubSheetTemplate4x.ref.value;
  localStorage.setItem("hdubEntryFactor", entryFactor);
  
  let rowStart = 0;
  let parts = document.getElementById("hdubPartDesignations").value.split("");

  for (let j = 0; j < hdub.length; j++) {
    let columnStart = 0;
    let rowHeight = hdub[j].rowHeight;

    for (let i = 0; i < hdub[j].column.length; i++) {
      let nextLetter = parts.shift();
      let colWidth = hdub[j].column[i].width;

      if (nextLetter !== "X") {
        let newHeight  = rowHeight   * entryFactor;
        let newWidth   = colWidth    * entryFactor;
        let rowTop     = rowStart    * entryFactor;
        let columnLeft = columnStart * entryFactor;

        if (newHeight > 0 && newWidth > 0) {
          // Handle Coin Insertion
          if (hauptMode == 1) {
            hauptMode = 0;
            insertNewCoin([null, 78, 78, false, false, false]);
            const input = coinFocus.lastElementChild.firstElementChild;
            input.contentEditable = "true";
            input.style.fontSize = "32px";
            coinFocus.firstElementChild.style.zIndex = "0";
            hauptMode = 1;
          } else {
            insertNewCoin([null, 78, 78, false, false, false]);
            const input = coinFocus.lastElementChild.firstElementChild;
            input.contentEditable = "true";
            input.style.fontSize = "32px";
            coinFocus.firstElementChild.style.zIndex = "0";
          }

          // Reference the newly created element
          let lastCoin = utilityLayer0.lastElementChild;
          let coinStyle = lastCoin.style;
          let calcTop = rowTop + window.scrollY + hdubTopOffset;
          let calcLeft = columnLeft + window.scrollX + hdubLeftOffset;

          // Apply coordinates and dimensions
          coinStyle.top    = calcTop + "px";
          coinStyle.left   = calcLeft + "px";
          coinStyle.width  = newWidth + "px";
          coinStyle.height = newHeight + "px";

          // Update Datasets
          lastCoin.dataset.top    = calcTop + "px";
          lastCoin.dataset.left   = calcLeft + "px";
          lastCoin.dataset.width  = newWidth + "px";
          lastCoin.dataset.height = newHeight + "px";
          lastCoin.id             = "hdub" + (serial + sequence);

          // Apply Logic/Colours from UI object
          try {
            let config = ui["hdub" + nextLetter];
            if (config.colour == "hdubPink") {
              lastCoin.dataset.coinTrip = "1";
            } else if (config.colour == "hdubGrey") {
              lastCoin.dataset.coinTrip = "0";
            } else if (config.colour == "hdubBlue") {
              lastCoin.dataset.coinTrip = "2";
            }
            // Set Inner HTML value
            lastCoin.lastElementChild.firstElementChild.innerHTML = config.value;
          } catch (e) { 
            /* Silently catch missing ui definitions */ 
          }
        }
        sequence++;
      }
      columnStart += colWidth;
    }
    rowStart += rowHeight;
  }

  readCoins();
  recoverColouration();
}





















function saveSyntaxImage() {
  // Process the syntax string once and store it
  const rawValue = ui.hdubSingleEntry.ref.value;
  const syntax = reString(cropObject(100, 180, makeObject(clean(rawValue))));
  
  // Ensure we are referencing the actual canvas element
  const canvasElement = ui.hdubCanvas.ref; 
  const dataURL = canvasElement.toDataURL('image/png');
  
  // Trigger download
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'SHAPE_HDUB_' + syntax + '.png';
  
  // Append/Remove is safer in some browsers to ensure the click triggers
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}












function getFilename() {
(() => {
const input = document.createElement('input');
input.type = 'file';
input.accept = '.png';
input.addEventListener('change', e => {
const file = e.target.files[0];
if (!file) return;
ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].replace(".png", "");
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
});
document.body.appendChild(input);
input.click();
input.remove();
})();
}







function manufactureTemplate(array) {
let factor = ui.hdubSheetTemplate4x.ref.value;
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width  = 100 * factor;
canvas.height = 180 * factor;
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
let rowStart = 0;
for (j = 0; j < array.length; j++) {
let columnStart = 0;
for (i = 0; i < array[j].column.length; i++) {
ctx.strokeRect(columnStart * factor, rowStart * factor, array[j].column[i].width * factor, array[j].rowHeight * factor);
columnStart += array[j].column[i].width;
}
rowStart += array[j].rowHeight;
}

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(canvas.width, 0);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();

if (Picture.style.display == "block") {
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(Picture, 0,0);
}

const datePrefix = Date.now().toString().slice(-6);
const syntax = reString(array);
const dataURL = canvas.toDataURL('image/png');
const link = document.createElement('a');
link.href = dataURL;
link.download = "TEMPL_" + datePrefix + `_HDUB_${factor}_tmpl_` + syntax + '.png';
link.click();
}












const hdubDemo = document.createElement("canvas");
{
  const s = `position:fixed;left:0;top:0;pointer-events:none; border:none;`;
  hdubDemo.style = s;
  hdubDemo.style.opacity = visualOpacity; // Using your global variable
  hdubDemo.style.zIndex = 100;
  hdubDemo.style.top = hdubTopOffset + "px";
  hdubDemo.style.left = hdubLeftOffset + "px";
}
document.body.appendChild(hdubDemo);

function drawDemo(array) {
  let nominalFactor = parseInt(ui.hdubSheetTemplate4x.ref.value);
  let factor = nominalFactor;

  // Handle the exponential scaling if Picture is active
  if (Picture.style.display == "block") {
    const multiMap = { '1': 10, '2': 8, '3': 6, '4': 5 };
    const multiplier = multiMap[nominalFactor] || 1;
    factor = nominalFactor * multiplier;
  }

  // Update canvas size
  hdubDemo.width = 100 * factor;
  hdubDemo.height = 180 * factor;

  const ctx = hdubDemo.getContext("2d");
  ctx.clearRect(0, 0, hdubDemo.width, hdubDemo.height);
  ctx.font = "400 32px dckimPixelMono";
  ctx.textAlign = "start";
  ctx.textBaseline = "top";

  // Configuration based on Scale
  if (nominalFactor > 4) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "lime";
    ctx.fillStyle = "lime";
    ctx.fillText("x " + nominalFactor, 16, 16);
    ctx.fillStyle = "rgba(0,0,31,0.25)";
  } else {
    ctx.lineWidth = 4;
    const isPic = Picture.style.display == "block";
    ctx.strokeStyle = isPic ? "cyan" : "darkorange";
    ctx.fillStyle = isPic ? "cyan" : "darkorange";
    ctx.fillText("x " + nominalFactor + " [pixelArt]", 16, 16);
    ctx.fillStyle = "rgba(31,0,31,0.35)";
  }

  // Render Grid
  const fillStyle = ctx.fillStyle; // Store the transparency color
  const strokeStyle = ctx.strokeStyle; // Store the line color
  let rowStart = 0;

  for (let j = 0; j < array.length; j++) {
    const rowHeight = array[j].rowHeight;
    let columnStart = 0;

    for (let i = 0; i < array[j].column.length; i++) {
      const colWidth = array[j].column[i].width;
      const x = columnStart * factor;
      const y = rowStart * factor;
      const w = colWidth * factor;
      const h = rowHeight * factor;

      ctx.fillStyle = fillStyle;
      ctx.fillRect(x, y, w, h);
      
      ctx.strokeStyle = strokeStyle;
      ctx.strokeRect(x, y, w, h);

      columnStart += colWidth;
    }
    rowStart += rowHeight;
  }
}
















































/*



*/



/*** THIS SETS UP THE REFERENCES ***/

      ui.idNames =
[
    "hdubA",
    "hdubB",
    "hdubC",
    "hdubD",
    "hdubE",
    "hdubF",
    "hdubG",
    "hdubH",
    "hdubI",
    "hdubJ",
    "hdubK",
    "hdubL",
    "hdubM",
    "hdubN",
    "hdubO",
    "hdubP",
    "hdubQ",
    "hdubR",
    "hdubS",
    "hdubT",
    "hdubU",
    "hdubV",
    "hdubW",
    "hdubX",
    "hdubY",
    "hdubZ"
];
ui.idNames.forEach((name) => {
ui[name]         = {};
ui[name].title   = "";
ui[name].value   = "";
ui[name].letter  = name.replace(/hdub/g, "");
ui[name].colour  = "hdubBlue";
});


/* HERE ARE SOME DEFAULT EXAMPLE CONTENTS FOR THE ARRAY OF INSERTION HTML */

/* THIS ONE IS ALWAYS PUT IN, IN CASE OF NO CONTENTS */
ui.hdubO.title = "default";
ui.hdubO.value = '<div style="width: 100%; height: 100%; outline-offset: -2px; outline: 2px dashed blue;"></div>';

ui.hdubA.title = '            '; ui.hdubA.value = '';
ui.hdubB.title = 'button input'; ui.hdubB.value = '<input type="button" name="button" style="width: 100%; height: 100%;" value="">';
ui.hdubC.title = 'HTML canvas '; ui.hdubC.value = `<canvas style="width: 100%; height: 100%; margin: 0; border: 0; padding: 0;"></canvas><!-- NORMALLY THE HTML CANVAS ELEMENT IS USED IN THE 'ABSTRACT SENSE' WITHOUT PLACING IT INTO THE PAGE, BUT FOR TESTING PURPOSES IT CAN BE CONVENIENT -->`;
ui.hdubD.title = 'colour input'; ui.hdubD.value = '<input type="color" name="colour" value="#AAAAAA" style="width: 100%; height: 100%; margin: 0; border: 0; padding: 0;">';
ui.hdubE.title = '            '; ui.hdubE.value = '';
ui.hdubF.title = 'form        '; ui.hdubF.value = `<form name="form" style="width: 100%; height: 100%;">
<!-- THERE IS NOTHING YOU CAN WRITE THAT WILL MAKE THIS 'FIT', EVER, OTHER THAN REMOVING THE DEFAULT STYLING -->
<input type="value"  name="value1" style="width: 100%; height: 20%; margin: 0; border: 0; padding: 0;" value="" placeholder="value1">
<input type="value"  name="value2" style="width: 100%; height: 20%; margin: 0; border: 0; padding: 0;" value="" placeholder="value2">
<input type="value"  name="value3" style="width: 100%; height: 20%; margin: 0; border: 0; padding: 0;" value="" placeholder="value3">
<input type="value"  name="value4" style="width: 100%; height: 20%; margin: 0; border: 0; padding: 0;" value="" placeholder="value4">
<input type="button" name="button" style="width: 100%; height: 20%;" value="">
</form>`;
ui.hdubG.title = '            '; ui.hdubG.value = '';
ui.hdubH.title = 'header 1'    ; ui.hdubH.value = '<h1 style="margin: 0px; width: 100%; height: 100%; outline-offset: -3px; outline: 3px dashed red;" contenteditable="true"></h1>';
ui.hdubI.title = 'iframe      '; ui.hdubI.value = '<iframe src="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;"></iframe>';
ui.hdubJ.title = '            '; ui.hdubJ.value = '';
ui.hdubK.title = '            '; ui.hdubK.value = '';
ui.hdubL.title = 'ordered list'; ui.hdubL.value = '<ol style="margin: 0px; width: 100%; height: 100%; outline-offset: -3px; outline: 3px dashed purple;" contenteditable="true"><li></li></ol>';
ui.hdubM.title = 'marquee     '; ui.hdubM.value = '<marquee direction="left" scrollamount="4" behavior="scroll" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;" onmouseover="this.stop();" onmouseout="this.start();" contenteditable="true">default</marquee>';
ui.hdubN.title = 'number input'; ui.hdubN.value = '<input type="number" name="number" min="" max="" step="" value="" placeholder="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubP.title = 'paragraph'   ; ui.hdubP.value = '<p style="margin: 0px; width: 100%; height: 100%; outline-offset: -3px; outline: 3px dashed green;" contenteditable="true"></p>';
ui.hdubQ.title = 'blockquote'  ; ui.hdubQ.value = '<blockquote style="margin: 0px; width: 100%; height: 100%; outline-offset: -3px; outline: 3px dashed magenta;" contenteditable="true"></blockquote>';
ui.hdubR.title = 'radio button'; ui.hdubR.value = '<input type="radio" name="radio" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubS.title = 'slider range'; ui.hdubS.value = '<input type="range" name="range" min="" max="" step="" value="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubT.title = 'textarea    '; ui.hdubT.value = '<textarea name="textarea" value="" placeholder="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;"></textarea>';
ui.hdubU.title = 'unordered list'; ui.hdubU.value = '<ul style="margin: 0px; width: 100%; height: 100%; outline-offset: -3px; outline: 3px dashed purple;" contenteditable="true"><li></li></ul>';
ui.hdubV.title = 'value input '; ui.hdubV.value = '<input type="value" name="value" value="" placeholder="" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubW.title = '            '; ui.hdubW.value = '';
ui.hdubY.title = 'checkbox    '; ui.hdubY.value = '<input type="checkbox" name="checkbox" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 0px;">';
ui.hdubZ.title = '            '; ui.hdubZ.value = '';














ui.idNames.forEach((name) => {
if (localStorage.getItem(name + ".title"))  {ui[name].title  = localStorage.getItem(name + ".title"); }
if (localStorage.getItem(name + ".value"))  {ui[name].value  = localStorage.getItem(name + ".value"); }
if (localStorage.getItem(name + ".colour")) {ui[name].colour = localStorage.getItem(name + ".colour");}
ui[name].ref     = document.getElementById(name);
});







      ui.hdub = {};
      ui.hdub.selected = "hdubA";
      ui.hdubStuff =
[
    "hdubPink",
    "hdubGrey",
    "hdubBlue",
    "hdubTitle",
    "hdubCode"
];
ui.hdubStuff.forEach((name) => {
ui[name]         = {};
ui[name].ref     = document.getElementById(name);
});


ui.hdubX.title   = "no-part (empty)";
ui.hdubX.value   = "This one just marks the part to not become rendered or entered. It's good when you want to leave empty spaces.";



if (localStorage.getItem("hdubSelected")) {
ui.hdub.selected = localStorage.getItem("hdubSelected");
       if (ui[ui.hdub.selected].colour == "hdubPink") {
ui.hdubPink.ref.style.outlineOffset = "-28px";
ui.hdubPink.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubPink'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
} else if (ui[ui.hdub.selected].colour == "hdubGrey") {
ui.hdubGrey.ref.style.outlineOffset = "-28px";
ui.hdubGrey.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubGrey'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
} else if (ui[ui.hdub.selected].colour == "hdubBlue") {
ui.hdubBlue.ref.style.outlineOffset = "-28px";
ui.hdubBlue.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubBlue'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
}
ui.hdubTitle.ref.value = ui[ui.hdub.selected].title;
ui.hdubCode.ref.value = ui[ui.hdub.selected].value;
}









ui.hdubTitle.ref.setAttribute("oninput", "ui[ui.hdub.selected].title = ui.hdubTitle.ref.value; localStorage.setItem(ui.hdub.selected + '.title', ui[ui.hdub.selected].title);");
ui.hdubCode.ref.setAttribute( "oninput", "ui[ui.hdub.selected].value = ui.hdubCode.ref.value;  localStorage.setItem(ui.hdub.selected + '.value', ui[ui.hdub.selected].value);");










/*** THIS SETS UP EVENT DELEGATION ***/

document.addEventListener(       "click", function() { ui.idNames.forEach((name) => { if (event.target == ui[name].ref) {
ui.hdubTitle.ref.value = ui[name].title;
ui.hdubCode.ref.value  = ui[name].value;
ui.hdub.selected       = name;
localStorage.setItem("hdubSelected", ui.hdub.selected);

       if ( event.shiftKey && !event.ctrlKey && coinFocus != null) {
if (name != "hdubX") {
coinFocus.lastElementChild.firstElementChild.innerHTML = ui.hdubCode.ref.value;
} else if (name == "hdubX") {
coinFocus.lastElementChild.firstElementChild.innerHTML = "";
}
} else if (!event.shiftKey &&  event.ctrlKey && name != "hdubX") {
if (hauptMode==1) {
hauptMode=0;
insertNewCoin([null,78,78,false,false,false]);
coinFocus.lastElementChild.firstElementChild.contentEditable = "true";
coinFocus.firstElementChild.style.zIndex = "0";
coinFocus.style.left   = window.scrollX + "px";
coinFocus.dataset.left = window.scrollX + "px";
coinFocus.style.top    = window.scrollY + "px";
coinFocus.dataset.top  = window.scrollY + "px";
hauptMode=1;
} else {
insertNewCoin([null,78,78,false,false,false]);
coinFocus.lastElementChild.firstElementChild.contentEditable = "true";
coinFocus.firstElementChild.style.zIndex = "0";
coinFocus.style.left   = window.scrollX + "px";
coinFocus.dataset.left = window.scrollX + "px";
coinFocus.style.top    = window.scrollY + "px";
coinFocus.dataset.top  = window.scrollY + "px";
}
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.innerHTML = ui.hdubCode.ref.value;
}



return 0; } });














loadHdubArray();


ui.hdubPink.ref.style.outline = "";
ui.hdubGrey.ref.style.outline = "";
ui.hdubBlue.ref.style.outline = "";



       if (ui[ui.hdub.selected].colour == "hdubPink") {
ui.hdubPink.ref.style.outlineOffset = "-28px";
ui.hdubPink.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubPink'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
} else if (ui[ui.hdub.selected].colour == "hdubGrey") {
ui.hdubGrey.ref.style.outlineOffset = "-28px";
ui.hdubGrey.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubGrey'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
} else if (ui[ui.hdub.selected].colour == "hdubBlue") {
ui.hdubBlue.ref.style.outlineOffset = "-28px";
ui.hdubBlue.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubBlue'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
}

       if (event.target == ui.hdubPink.ref ||
           event.target == ui.hdubGrey.ref ||
           event.target == ui.hdubBlue.ref) {
ui.hdubPink.ref.style.outline = "";
ui.hdubGrey.ref.style.outline = "";
ui.hdubBlue.ref.style.outline = "";
}


       if (event.target == ui.hdubPink.ref) {
ui.hdubPink.ref.style.outlineOffset = "-28px";
ui.hdubPink.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubPink'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
if (event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "1";
readCoins(); recoverColouration();
}
} else if (event.target == ui.hdubGrey.ref) {
ui.hdubGrey.ref.style.outlineOffset = "-28px";
ui.hdubGrey.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubGrey'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
if (event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "0";
readCoins(); recoverColouration();
}
} else if (event.target == ui.hdubBlue.ref) {
ui.hdubBlue.ref.style.outlineOffset = "-28px";
ui.hdubBlue.ref.style.outline       =  "28px dotted black";
ui[ui.hdub.selected].colour = 'hdubBlue'; localStorage.setItem(ui.hdub.selected + '.colour', ui[ui.hdub.selected].colour);
if (event.shiftKey && coinFocus != null) {
coinFocus.dataset.coinTrip = "2";
readCoins(); recoverColouration();
}
}


loadLetterInputs();

});

document.addEventListener(  "mousewheel", function() { ui.idNames.forEach((name) => { if (event.target == ui[name].ref) { return 0; } }); });























function evaluateLetterInputs() {
const overlay = document.getElementById("hdubOverlay");
const parts   = document.getElementById("hdubPartDesignations");
parts.value = "";
for (let j = 0; j < overlay.children.length; j++) {
if (overlay.children[j].innerText && overlay.children[j].innerText != "") {
parts.value += overlay.children[j].innerText;
}
}
//loadLetterInputs();
}




function loadLetterInputs() {
const overlay = document.getElementById("hdubOverlay");
let parts   = document.getElementById("hdubPartDesignations").value.split("");
for (let j = 0; j < overlay.children.length; j++) {
let nextLetter = parts.shift();
if (!nextLetter) nextLetter = "O";
overlay.children[j].innerText = nextLetter;
if (ui["hdub" + nextLetter].colour == 'hdubPink') {
overlay.children[j].style.backgroundColor = coinColour1;
} else if (ui["hdub" + nextLetter].colour == 'hdubGrey') {
overlay.children[j].style.backgroundColor = coinColour0;
}  else if (ui["hdub" + nextLetter].colour == 'hdubBlue') {
overlay.children[j].style.backgroundColor = coinColour2;
};

overlay.children[j].style.color = "black";
if (nextLetter == "X") {
overlay.children[j].style.backgroundColor = "black";
overlay.children[j].style.color = "red";
}

}
localStorage.setItem("hdubPartDesignations", ui.hdubPartDesignations.ref.value);
ui.hwString[ui.hwString.currentSel].part = ui.hdubPartDesignations.ref.value;
localStorage.setItem("hwString",JSON.stringify(ui.hwString));
}





function loadHdubArray() {
ui.idNames.forEach((name) => {
ui[name].ref.style.outline = "";
ui[name].ref.style.borderRadius = "16px";
});
ui[ui.hdub.selected].ref.style.outlineOffset = "-28px";
ui[ui.hdub.selected].ref.style.outline       = "28px dotted lime";
ui.hdubPink.ref.style.backgroundColor = coinColour1;
ui.hdubGrey.ref.style.backgroundColor = coinColour0;
ui.hdubBlue.ref.style.backgroundColor = coinColour2;
}
loadHdubArray();
loadLetterInputs();





















