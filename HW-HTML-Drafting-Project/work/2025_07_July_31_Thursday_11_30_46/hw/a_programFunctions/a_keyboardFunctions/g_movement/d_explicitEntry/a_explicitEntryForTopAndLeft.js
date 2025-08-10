function explicitEntryForTopAndLeft() {

let result = null;
if (coinFocus!=null) {
result = prompt(
`enter pixel values in the
following format:  top,left,width,height
cursor requires :  top,left entries only
(use * + - / whatever)
`, parseInt(coinFocus.style.top) + "," + parseInt(coinFocus.style.left) + "," + parseInt(coinFocus.style.width) + "," + parseInt(coinFocus.style.height));
if (result!=null) {
       if (curFocus!=1) {
coinFocus.style.top      = parseInt(eval(result.trim().split(",")[0])) + "px";
coinFocus.style.left     = parseInt(eval(result.trim().split(",")[1])) + "px";
coinFocus.style.width    = parseInt(eval(result.trim().split(",")[2])) + "px";
coinFocus.style.height   = parseInt(eval(result.trim().split(",")[3])) + "px";
coinFocus.dataset.top    = coinFocus.style.top   ;
coinFocus.dataset.left   = coinFocus.style.left  ;
coinFocus.dataset.width  = coinFocus.style.width ;
coinFocus.dataset.height = coinFocus.style.height;

} else if (curFocus==1) {

Cur.style.top    = parseInt(eval(result.trim().split(",")[0])) + "px";
Cur.style.left   = parseInt(eval(result.trim().split(",")[1])) + "px";
Cur.dataset.top  = Cur.style.top ;
Cur.dataset.left = Cur.style.left;

}


}
}

}
