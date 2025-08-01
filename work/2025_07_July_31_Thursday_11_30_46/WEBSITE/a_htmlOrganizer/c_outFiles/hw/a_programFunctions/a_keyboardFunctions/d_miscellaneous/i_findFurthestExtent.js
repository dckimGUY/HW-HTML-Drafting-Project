function findFurthestExtent() {

let furthestExtent = [];

furthestExtent[0] = [0,0];
furthestExtent[1] = [0,0];
furthestExtent[2] = [0,0];
furthestExtent[3] = [0,0];

if (coinTrip.sel0.length > 0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
if ((parseInt(coinTrip.sel0[j].style.top) + parseInt(coinTrip.sel0[j].style.height) * parseFloat(coinTrip.sel0[j].dataset.scale)) > furthestExtent[0][0]) {
furthestExtent[0][0] = parseInt(coinTrip.sel0[j].style.top) + parseInt(coinTrip.sel0[j].style.height) * parseFloat(coinTrip.sel0[j].dataset.scale); }
if ((parseInt(coinTrip.sel0[j].style.left) + parseInt(coinTrip.sel0[j].style.width) * parseFloat(coinTrip.sel0[j].dataset.scale)) > furthestExtent[0][1]) {
furthestExtent[0][1] = parseInt(coinTrip.sel0[j].style.left) + parseInt(coinTrip.sel0[j].style.width) * parseFloat(coinTrip.sel0[j].dataset.scale); }
} }

if (coinTrip.sel1.length > 0) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
if ((parseInt(coinTrip.sel1[j].style.top) + parseInt(coinTrip.sel1[j].style.height) * parseFloat(coinTrip.sel1[j].dataset.scale)) > furthestExtent[1][0]) {
furthestExtent[1][0] = parseInt(coinTrip.sel1[j].style.top) + parseInt(coinTrip.sel1[j].style.height) * parseFloat(coinTrip.sel1[j].dataset.scale); }
if ((parseInt(coinTrip.sel1[j].style.left) + parseInt(coinTrip.sel1[j].style.width) * parseFloat(coinTrip.sel1[j].dataset.scale)) > furthestExtent[1][1]) {
furthestExtent[1][1] = parseInt(coinTrip.sel1[j].style.left) + parseInt(coinTrip.sel1[j].style.width) * parseFloat(coinTrip.sel1[j].dataset.scale); }
} }

if (coinTrip.sel2.length > 0) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
if ((parseInt(coinTrip.sel2[j].style.top) + parseInt(coinTrip.sel2[j].style.height) * parseFloat(coinTrip.sel2[j].dataset.scale)) > furthestExtent[2][0]) {
furthestExtent[2][0] = parseInt(coinTrip.sel2[j].style.top) + parseInt(coinTrip.sel2[j].style.height) * parseFloat(coinTrip.sel2[j].dataset.scale); }
if ((parseInt(coinTrip.sel2[j].style.left) + parseInt(coinTrip.sel2[j].style.width) * parseFloat(coinTrip.sel2[j].dataset.scale)) > furthestExtent[2][1]) {
furthestExtent[2][1] = parseInt(coinTrip.sel2[j].style.left) + parseInt(coinTrip.sel2[j].style.width) * parseFloat(coinTrip.sel2[j].dataset.scale); }
} }

if (utilityLayer0.children.length > 0) {
for (let j = 0; j < utilityLayer0.children.length; j++) {
if ((parseInt(utilityLayer0.children[j].style.top) + parseInt(utilityLayer0.children[j].style.height) * parseFloat(utilityLayer0.children[j].dataset.scale)) > furthestExtent[3][0]) {
furthestExtent[3][0] = parseInt(utilityLayer0.children[j].style.top) + parseInt(utilityLayer0.children[j].style.height) * parseFloat(utilityLayer0.children[j].dataset.scale); }
if ((parseInt(utilityLayer0.children[j].style.left) + parseInt(utilityLayer0.children[j].style.width) * parseFloat(utilityLayer0.children[j].dataset.scale)) > furthestExtent[3][1]) {
furthestExtent[3][1] = parseInt(utilityLayer0.children[j].style.left) + parseInt(utilityLayer0.children[j].style.width) * parseFloat(utilityLayer0.children[j].dataset.scale); }
} }

return (furthestExtent);
}
