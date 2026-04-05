function modeRouter(e,modeNumber) {
if (modeLock) {
try {
for (let j = 0; j < window.parents.length; j++) {
if (!window.parents[j].closed) {
window.parents[j].mode = modeNumber;
}
for (let i = 0; i < window.parents[j].children.length; i++) {
if (!window.parents[j].children[i].closed) {
window.parents[j].children[i].mode = modeNumber;
} } }
for (let j = 0; j < window.children.length; j++) {
if (!window.children[j].closed) {
window.children[j].mode = modeNumber;
} }
} catch {}
}
mode = modeNumber;
}