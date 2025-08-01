function findLeastExtent() {

let leastExtent = [];

leastExtent[0] = findFurthestExtent()[0];
leastExtent[1] = findFurthestExtent()[1];
leastExtent[2] = findFurthestExtent()[2];
leastExtent[3] = findFurthestExtent()[3];

if (coinTrip.sel0.length > 0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
if (parseInt(coinTrip.sel0[j].style.top) < leastExtent[0][0]) {
leastExtent[0][0] = parseInt(coinTrip.sel0[j].style.top); }
if (parseInt(coinTrip.sel0[j].style.left) < leastExtent[0][1]) {
leastExtent[0][1] = parseInt(coinTrip.sel0[j].style.left); }
} }

if (coinTrip.sel1.length > 0) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
if (parseInt(coinTrip.sel1[j].style.top) < leastExtent[1][0]) {
leastExtent[1][0] = parseInt(coinTrip.sel1[j].style.top); }
if (parseInt(coinTrip.sel1[j].style.left) < leastExtent[1][1]) {
leastExtent[1][1] = parseInt(coinTrip.sel1[j].style.left); }
} }

if (coinTrip.sel2.length > 0) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
if (parseInt(coinTrip.sel2[j].style.top) < leastExtent[2][0]) {
leastExtent[2][0] = parseInt(coinTrip.sel2[j].style.top); }
if (parseInt(coinTrip.sel2[j].style.left) < leastExtent[2][1]) {
leastExtent[2][1] = parseInt(coinTrip.sel2[j].style.left); }
} }

if (utilityLayer0.children.length > 0) {
for (let j = 0; j < utilityLayer0.children.length; j++) {
if (parseInt(utilityLayer0.children[j].style.top) < leastExtent[3][0]) {
leastExtent[3][0] = parseInt(utilityLayer0.children[j].style.top); }
if (parseInt(utilityLayer0.children[j].style.left) < leastExtent[3][1]) {
leastExtent[3][1] = parseInt(utilityLayer0.children[j].style.left); }
} }

return (leastExtent);
}
