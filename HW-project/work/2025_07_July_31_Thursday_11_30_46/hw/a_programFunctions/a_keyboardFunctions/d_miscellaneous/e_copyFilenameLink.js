function copyFilenameLink() {
if (coinFocus!=null) {
let result = null;

navigator.clipboard.writeText(`anchor.href="${filename}.html";`);

coinFocus.firstElementChild.innerHTML = `<span style="color:blue;"><u>link copied</u></span>`;
setTimeout (() => readCoins(), 1500);

}
}
