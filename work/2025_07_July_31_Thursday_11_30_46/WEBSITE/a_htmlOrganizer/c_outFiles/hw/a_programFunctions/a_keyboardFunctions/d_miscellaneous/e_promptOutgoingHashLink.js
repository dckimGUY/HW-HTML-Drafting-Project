function promptOutgoingHashLink() {
if (coinFocus!=null) {
let result = null;

navigator.clipboard.writeText(`anchor.href="#${coinFocus.id}";`);

coinFocus.firstElementChild.innerHTML = `<span style="color:blue;"><u>NAV link copied</u></span>`;
setTimeout (() => readCoins(), 1500);

}
}
