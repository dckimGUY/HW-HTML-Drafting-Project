function scanForCoin(collection,seekCoin) {
let coinFound = 0;
for (let j=0; j < collection.children.length; j++) {
if (collection.children[j] == seekCoin) {
coinFound=1;
}
}
if (coinFound==1) {
return (1);
} else {
return (0);
}
}
