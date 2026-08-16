
function saveExampleButton(data) {
dataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAYAAACoy2Z3AAAH8UlEQVR4nO3dQU4cORTG8ecRF2CDlGOE5SCxyJYbcA2kHAKJa+QG2bIYaWbJHCMSG45QWXQ7PIztqnrdUH6v/z80Srq6qLZVGX9tu1yVJpFJMIQknIyRcD7GwvkYSxKRMxERmZyflpR2fwapx3///LtxQQ7z9/WViPivh+zrkZz/s5r2/3t4r4ek/JcoFfFfj7+2LgIAwCcCBABgMnyAfPn+KF++P25dDOzd3D7Ize3D1sXA3rT/wRheni/l5fly62J8mrOtC9ATJTjKevy6/7ZRSQ4TJTjKevz8cbdRSQ4TJTjKeqTXyQ5XogRHWY/zi6fmvsP2QKKFx6/7b3+Cw2OvKlp4/Pxx9yc4PPaqooVH2v/kbd7qFy08zi+e/gRHr1c1bIDoBtc7XQ+vddINrne6Hl7rpBtc73Q9vNZJN7je6XrM1WnYAIkg9zK89Taiyr0Mb72NqHIvw1tvI6rcy1jTmyJAPlCtt6GHtPC5ar0NPaSFz1XrbeghLXyuWm9DD2nVDD2JHoEOCnoi29NBQU9kezoo6IlsTwfFkp4IPRAAgAkBsgGGr8bC8NVYGL4ai8vLeEXeDvl4Hv5pXbbrrU56yMfz8E/rsl1vddJDPp6Hf1qX7Xqrkx7y8XxZb+uy3dq2YQMkQoPbEmUdiLcGtyXKOhBvDW5LlHUgnkNE660DGXYSPcIwjw4J75PpEYZ5dEh4n0yPMMyjQ8L7ZHqENSA6JJZOpqdJZIpyG3Tv9UgpyST+b4Me5XbuV9dXMon/26BHup17XjniW4zbuSdu5w4AsGoOYUW5AaB3reGVCENKAHxr9kAIjPF4H7cHEMuwk+ioo+cBHE9r4njuPewMFyAMnQGAD4sDZK5hr12aunaf8rJXvV6CIMGWojz0CDimxQGiH4aU/yy35f16+/SOo98vj3Vqegv3lsyFrNmn9oS+1lP7asc6hWG1JMnl+gTYHTpstebJfl5114G0vv0v6RXU9un93txndT8v8DqQ1uK31nvltiX76G214Gnt0ypb1HUgrYVvo4u6DqS2wG3JArjzi6fZVeK1fazb3r/+f/833yckSTp8DmRND6HWY9Hb1x4PO+UT9uZ6CdYeQz72ze1DqCcUjoyhs7pWA/3yfFltwPXv5H1qx2mpvVdu671eEloeHX0SvTbsVPYiekNTzHUcz0dc6tsb9jolvQcftYa69DO/y+1z2/Jr/bm198vPiqrWWM/1SI4xhLQkCObf/6p6Ib596lVYrXCg1/ExWr0Ri3K46pjH9qjWoIvUh7n0o1vLhn3N615o6GPnckUNkUMb8GOWoxdKEXscpUUBsqaB7+2bJ8xbQ1j5qqvW5Pyp+cgG2voo19b+eVjrlPQm1pc2/C1L3p8LiMghkrWGoj6y8S6HzHQ5amV7L845aa5E7w0x5f/K13q7Po7eXhvOqn32qYdHTStQes/pqA059cIjvzf3Wac+hHUsS4JC/yyR1E9kliGp3q3JsR534x2I9W68SxrzuX3mejtr5j5O6Sqs1hBW2XjXtvcmyHtzLLXj9vaNdhXWy/PX7m5lr6T1Wm8r92tNxNd+r/d+vYcU5yosAmQg3M59LATIYDq3c2816EvWYrQm33u/uzRAaseNdDv34W5lAkRQTmqvpSfpexP02GkNZy0Z5rL87txxIy4arCFAgAXmHiGbG/rySqjskAa/1VNhZTy2RoAAC9QCoBcKSwJjbp9D3wc+Gk8kBACYECAAABMCBABgQoAAAEwIEACACQECADAhQAAAJgQIAMCEAAEAmBAgAAATAgQAYEKAAABMCBAAgAkBAgAw2T2REENIwskYCedjLJyPsSShBwIAMNo9UMr5s8SjPBM918P7s8SjPBNd9vXw/izxSM9E34lSEf/1oAcCADAhQAAAJgQIAMDkbOsC9Hz5/vjm9a/7bxuV5Dh0fTzW5eb24c3rnz/uNirJcej6eKzLVIyhp9dJApd0fTzW5eX58s3r84unjUpyHLo+rboM2wPJja1uaMtA8cRz2UVeG1vd0JaB4onnsou8Nra6oS0DxRPPZRd5bWx1Q1sGiidLyz5sgGgev61rtTD0zOO3da0Whp55/Lau1cLQsyg9jyX1cBEgAIDxDDsHEuXbepTeR5Rv61F6H1G+rUfpfXjvdWRreh8iAwdI5nniOUp4aJ4nnqOEh+Z54jlKeGhLJp5HtTY8RPK9sBys4O42xgOvRO9Nnpd1SSnJJD5WcPca45FXovcmz8u6XF1fySQ+VnD3GuORV6L3Js/f1SXltdsDVqTQb4zHXYnemzwv65IkjdsDifLtvSy/13pF+fZelt9rvaJ8ey/L77Velm/vIyrLP1cvJtEBACYuAsT7GopovK+hiMb7GopoPK//WGvYAMlDPJ4n0Uu6Lt5CMQ/xeJ5EL+m6eAvFPMTjeRK9pOviLRTzEI/nSfSSrksrFN1MoncNPIm+hqdJ9J6RJ9HX8DSJ3jPyJPoqjibR+8adRF8jcTt3AIAVAQIAMCFAAAAmBAgAwIQAAQCYECAAABMCBABgQoAAAEwIEACACQECADAhQAAAJgQIAMCEAAEAmBAgAAATAgQAYEKAAABMCBAAgAkBAgAwIUAAACYECADAhAABAJgQIAAAEwIEAGBCgAAATAgQAIAJAQIAMCFAAAAmBAgAwIQAAQCYECAAABMCBABgQoAAAEzSJDJtXQjsJOFkjITzMRbOx1iSiPwGQo86XJmyr0MAAAAASUVORK5CYII=";
const name = "READY_4btn_example_HDUB_1_4btn_h50w50w50h50w50w50.png";
if (data == 1) { return [name, dataURL]; };
const link = document.createElement('a');
link.href = dataURL;
link.download = name;
link.click();
return 0;
}


function saveReadyRabbit(data) {
dataURL = "data:image/png;base64,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";
const name = "READY_4btn_readyRabbit_HDUB_4_4btn_h39w22.png";
if (data == 1) { return [name, dataURL]; };
const link = document.createElement('a');
link.href = dataURL;
link.download = name;
link.click();
return 0;
}






function saveRectangle(width, height, repetition, syntax, upscaling, data) {
let repetitions = 4;
try { if (event.shiftKey) repetitions = 2; } catch {};
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
const datePrefix = Date.now().toString().slice(-6);
const dataURL = readyButton(width, height, repetitions, upscaling).toDataURL('image/png');
const name = 'READY__HDUB_' + upscaling + '_' + repetitions + 'btn_' + syntax + '.png';
if (data == 1) { return [name, dataURL]; };
const link = document.createElement('a');
link.href = dataURL;
link.download = "READY_" + datePrefix + '_HDUB_' + upscaling + '_' + repetitions + 'btn_' + syntax + '.png';
link.click();
return 0;
}










function shapeTemplate(array, factor, data) {
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
const name = `TEMPLATE__HDUB_${factor}_tmpl_` + syntax + '.png';
if (data == 1) return [name, dataURL];
link.href = dataURL;
link.download = "TEMPLATE_" + datePrefix + `_HDUB_${factor}_tmpl_` + syntax + '.png';
link.click();
return 0;
}


function sq100(array, factor, data) {
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width  = 100 * factor;
canvas.height = 100 * factor;
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
const name = `TEMPLATE__HDUB_${factor}_tmpl_` + syntax + '.png';
if (data == 1) return [name, dataURL];
link.href = dataURL;
link.download = "TEMPLATE_" + datePrefix + `_HDUB_${factor}_tmpl_` + syntax + '.png';
link.click();
return 0;
}


function sq96(array, factor, data) {
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width  = 100 * factor;
canvas.height = 96 * factor;
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
const name = `TEMPLATE__HDUB_${factor}_tmpl_` + syntax + '.png';
if (data == 1) return [name, dataURL];
link.href = dataURL;
link.download = "TEMPLATE_" + datePrefix + `_HDUB_${factor}_tmpl_` + syntax + '.png';
link.click();
return 0;
}





function saveReady100(width, height, repetition, syntax, upscaling, data) {
let repetitions = 4;
try { if (event.shiftKey) repetitions = 2; } catch { }
function readyButton(width, height, repetitions, upscaling) {
const columnWidth   =  width * upscaling;
const rowHeight     = height * upscaling;
const canvas        = document.createElement("canvas");
      canvas.width  = 100 * upscaling * repetitions;
      canvas.height = 100 * upscaling;
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
const datePrefix = Date.now().toString().slice(-6);
const dataURL = readyButton(width, height, repetitions, upscaling).toDataURL('image/png');
const link = document.createElement('a');
link.href = dataURL;
const name = 'READY__HDUB_' + upscaling + '_' + repetitions + 'btn_' + syntax + '.png';
if (data == 1) return [name, dataURL];
link.download = "READY_" + datePrefix + '_HDUB_' + upscaling + '_' + repetitions + 'btn_' + syntax + '.png';
link.click();
return 0;
}

function saveReady96(width, height, repetition, syntax, upscaling, data) {
let repetitions = 4;
try { if (event.shiftKey) repetitions = 2; } catch { }
function readyButton(width, height, repetitions, upscaling) {
const columnWidth   =  width * upscaling;
const rowHeight     = height * upscaling;
const canvas        = document.createElement("canvas");
      canvas.width  = 100 * upscaling * repetitions;
      canvas.height = 96 * upscaling;
let   ctx           = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.beginPath();
const columns    = canvas.width  / columnWidth;
const rows       = canvas.height / rowHeight;
const widthStep  = canvas.width  / columns;
const heightStep = canvas.height / rows;
for (let j = 1; j <     columns/4; j++) { ctx.moveTo(j *  widthStep + (0 * canvas.width) / 4,   0);  ctx.lineTo(j *  widthStep + (0 * canvas.width) / 4, canvas.height); }
for (let j = 1; j <     columns/4; j++) { ctx.moveTo(j *  widthStep + (1 * canvas.width) / 4,   0);  ctx.lineTo(j *  widthStep + (1 * canvas.width) / 4, canvas.height); }
for (let j = 1; j <     columns/4; j++) { ctx.moveTo(j *  widthStep + (2 * canvas.width) / 4,   0);  ctx.lineTo(j *  widthStep + (2 * canvas.width) / 4, canvas.height); }
for (let j = 1; j <     columns/4; j++) { ctx.moveTo(j *  widthStep + (3 * canvas.width) / 4,   0);  ctx.lineTo(j *  widthStep + (3 * canvas.width) / 4, canvas.height); }
for (let j = 1; j <        rows; j++) { ctx.moveTo(0 + (0 * canvas.width) / 4  , j *  heightStep); ctx.lineTo(columnWidth * Math.floor(96/width) + (0 * canvas.width) / 4, j *  heightStep); }
for (let j = 1; j <        rows; j++) { ctx.moveTo(0 + (1 * canvas.width) / 4  , j *  heightStep); ctx.lineTo(columnWidth * Math.floor(96/width) + (1 * canvas.width) / 4, j *  heightStep); }
for (let j = 1; j <        rows; j++) { ctx.moveTo(0 + (2 * canvas.width) / 4  , j *  heightStep); ctx.lineTo(columnWidth * Math.floor(96/width) + (2 * canvas.width) / 4, j *  heightStep); }
for (let j = 1; j <        rows; j++) { ctx.moveTo(0 + (3 * canvas.width) / 4  , j *  heightStep); ctx.lineTo(columnWidth * Math.floor(96/width) + (3 * canvas.width) / 4, j *  heightStep); }
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = "black";
for (let j = 0; j < repetitions; j++) { ctx.strokeRect((canvas.width / repetitions) * j, 0, canvas.width / repetitions, canvas.height); }
      ctx.stroke();
return canvas;
}
const datePrefix = Date.now().toString().slice(-6);
const dataURL = readyButton(width, height, repetitions, upscaling).toDataURL('image/png');
const link = document.createElement('a');
const name = 'READY__HDUB_' + upscaling + '_' + repetitions + 'btn_' + syntax + '.png';
if (data == 1) return [name, dataURL];
link.href = dataURL;
link.download = "READY_" + datePrefix + '_HDUB_' + upscaling + '_' + repetitions + 'btn_' + syntax + '.png';
link.click();
return 0;
}
