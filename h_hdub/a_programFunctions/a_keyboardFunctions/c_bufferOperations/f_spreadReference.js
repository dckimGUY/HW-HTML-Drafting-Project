function spreadReference(coinPull,coinRef) {

try {
if (coinPull!=null) {

for (a of alphabet) {
       if (coinRef.name==a){ coinRef.value = coinPull; if (referenceLock) { for (let j = 0; j < window.parents.length; j++) { if (!window.parents[j].closed) { window.parents[j].hold[a].value = coinRef.value; window.parents[j].readCoins(); } for (let i = 0; i < window.parents[j].children.length; i++) { if (!window.parents[j].children[i].closed) { window.parents[j].children[i].hold[a].value = coinRef.value; window.parents[j].children[i].readCoins(); } } } for (let j = 0; j < window.children.length; j++) { if (!window.children[j].closed) { window.children[j].hold[a].value = coinRef.value; window.children[j].readCoins(); } } } 
}

const list = [ "multiplePasteBuffer", "sel0PasteBuffer", "sel1PasteBuffer", "sel2PasteBuffer" ];
for (a of list) {
if (coinRef.name==list){ coinRef.value = coinPull; if (referenceLock) { for (let j = 0; j < window.parents.length; j++) { if (!window.parents[j].closed) { window.parents[j][list].value = coinRef.value; window.parents[j].readCoins(); } for (let i = 0; i < window.parents[j].children.length; i++) { if (!window.parents[j].children[i].closed) { window.parents[j].children[i][list].value = coinRef.value; window.parents[j].children[i].readCoins(); } } } for (let j = 0; j < window.children.length; j++) { if (!window.children[j].closed) { window.children[j][list].value = coinRef.value; window.children[j].readCoins(); } } } 
}

}
}

readCoins();

return (1);
} else {
return (0);
}
} catch {
return (0);
}

}
