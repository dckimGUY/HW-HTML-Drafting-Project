let mode4 = {};

mode4.mousemove = function(event,ctrl,shift,M) { 
const lO = O * 2;
/* Coin insertion visual dots. */
if (mode==4) {
if (!(mousedown.hold)) {
P.style.left=(event.pageX%M)>(M/E) ? event.pageX + (M - event.pageX%M) - O/2 : event.pageX - (event.pageX%M) - O/2;
P.style.top=(event.pageY%M)>(M/E)  ? event.pageY + (M - event.pageY%M) - O/2 : event.pageY - (event.pageY%M) - O/2;
}
S.style.left=(event.pageX%M)>(M/E) ? event.pageX + (M - event.pageX%M) - O/2 : event.pageX - (event.pageX%M) - O/2;
S.style.top=(event.pageY%M)>(M/E)  ? event.pageY + (M - event.pageY%M) - O/2 : event.pageY - (event.pageY%M) - O/2;
Q.style.left=S.style.left;Q.style.top=P.style.top;
R.style.left=P.style.left;R.style.top=S.style.top;
}
if (event.target == document.documentElement || event.target != document.body) {
/* Translation */
if (mode==1) {
if (mousedown.target) {
mousedown.target.style.left   = (event.pageX%M)>(M/E) ? event.pageX - event.pageX%M : event.pageX - event.pageX%M;
mousedown.target.style.top    = (event.pageY%M)>(M/E)  ? event.pageY - event.pageY%M : event.pageY - event.pageY%M;
}
}
}
};

mode4.mousedown  = function(event,ctrl,shift,M) { };
mode4.mouseup    = function(event,ctrl,shift,M) { };
mode4.mouseclick = function(event,ctrl,shift,M) { };
mode4.dblclick   = function(event,ctrl,shift,M) { };
