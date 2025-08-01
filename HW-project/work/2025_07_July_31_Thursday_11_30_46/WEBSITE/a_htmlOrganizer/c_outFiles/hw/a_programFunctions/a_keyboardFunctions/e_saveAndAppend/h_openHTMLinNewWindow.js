function openHTMLinNewWindow(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (mode!=0) {
const newWindow = window.open("","_blank",`height=${window.innerHeight},width=${window.innerWidth},top=${window.screenTop},left=${window.screenLeft},resizable=yes`);
newWindow.document.write(`
<html>
<head>
<meta charset="UTF-8">
<title>Test Page</title>
</head>
<body>

${utilityLayer0.innerHTML}

<` + `script>
let kC = 0, cC = 0;
document.addEventListener("keydown",  (event) =>  { kC = event.keyCode;  cC=0; });
document.addEventListener("keypress", (event) =>  { cC = event.charCode;
 /*    q    */ if (kC ==  81 && cC ==  113) { window.close();} });
<` + `/script>
<` + `/body>
<` + `/html>`);
}
}
