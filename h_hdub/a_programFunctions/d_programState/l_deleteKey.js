function deleteKey() {
if (activeStateEdit) {
let newArray = [];
stateHolder  =
newArray.concat(
stateHolder.slice(0,currentStateNumber),
stateHolder.slice(currentStateNumber + 1,stateHolder.length));
setTimeout(() => { previousState(); }, 10);
buzzWord(0,'-DEL',128,'red',400,200,25,'top');
} else {
       if (!event.shiftKey) {
/* WE NEED TO MAKE A WAY TO REMOVE THE LAST ARRAY ELEMENT FROM THE STATE ACCUMULATOR IN TAB I 2 */
} else if ( event.shiftKey) {
permanentRemoval(['',88,120]);
}
}
}
