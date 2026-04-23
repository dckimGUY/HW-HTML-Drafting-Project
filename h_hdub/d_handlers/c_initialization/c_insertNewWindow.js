function insertNewWindow(keyInfo,refresh) {

document.getElementById("levelBar").style.display = "none";
animatorBar.style.display = "none";
localStorage.setItem("levelBar", document.getElementById("levelBar").style.display);

const
e = keyInfo[0],
kC = keyInfo[1],
cC = keyInfo[2],
shift = keyInfo[3],
ctrl = keyInfo[4],
alt = keyInfo[5];
const wH = window.innerHeight;
const wW = window.innerwidth;
const fileContentsReference = document.documentElement.outerHTML;
let iS = 192;
/* i */ if (kC == 73 && cC == 105) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${window.screenLeft - iS},resizable=yes,noopener=no`); }
/* o */ if (kC == 79 && cC == 111) { window.children[window.children.length] = window.open("","_blank",`height=${iS + 1},width=${window.innerWidth + 1},top=${window.screenTop + window.innerHeight},left=${window.screenLeft},resizable=yes,noopener=no`); }
/* a */ if (kC == 65 && cC == 97) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${window.screenLeft + window.innerWidth},resizable=yes,noopener=no`); }
/* I */ if (kC == 73 && cC == 73) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=0,resizable=yes,noopener=no`); }
/* O */ if (kC == 79 && cC == 79) { window.children[window.children.length] = window.open("","_blank",`height=${iS + 1},width=${window.innerWidth + 1},top=${window.screenTop - iS},left=${window.screenLeft},resizable=yes,noopener=no`); }
/* A */ if (kC == 65 && cC == 65) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${screen.width - iS},resizable=yes,noopener=no`); }
/* N */ if (kC == 78 && cC == 78) { window.children[window.children.length] = window.open("","_blank"); }
/* REFRESH */ if (refresh==true) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight},width=${window.innerWidth},top=${window.screenTop},left=${window.screenLeft},resizable=yes,noopener=no`); window.close(); }
window.children[window.children.length - 1].document.write(fileContentsReference);
try {
for (let j = 0; j < window.parents.length; j++) {
window.parents[j].children[window.parents[j].children.length] = window.children[window.children.length - 1];
}
} catch {}
}
