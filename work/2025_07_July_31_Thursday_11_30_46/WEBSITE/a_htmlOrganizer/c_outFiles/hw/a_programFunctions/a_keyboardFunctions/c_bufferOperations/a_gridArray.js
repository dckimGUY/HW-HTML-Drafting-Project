function gridArray() {
if (coinFocus!=null) {

let tripRef;
       if (coinFocus.dataset.coinTrip==Ts0) { tripRef = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) { tripRef = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) { tripRef = coinTrip.sel2;
}

/*
for (let j = 0; j < tripRef.length; j++) {
tripRef[j].firstChild.innerText = "\n" + tripRef[j].dataset.jsName;
}
*/

for (let j = 0; j < tripRef.length; j++) {
if (tripRef[j]) {

if (!tripRef[j].lastElementChild.firstElementChild.nextElementSibling.innerHTML.toString().includes("=")) {
     if (j==0) {spreadReference(tripRef[j],hold.q);}
else if (j==1) {spreadReference(tripRef[j],hold.w);}
else if (j==2) {spreadReference(tripRef[j],hold.e);}
else if (j==3) {spreadReference(tripRef[j],hold.r);}
else if (j==4) {spreadReference(tripRef[j],hold.t);}
else if (j==5) {spreadReference(tripRef[j],hold.y);}
else if (j==6) {spreadReference(tripRef[j],hold.u);}
else if (j==7) {spreadReference(tripRef[j],hold.i);}
else if (j==8) {spreadReference(tripRef[j],hold.o);}
else if (j==9) {spreadReference(tripRef[j],hold.p);}
else if (j==10){spreadReference(tripRef[j],hold.a);}
else if (j==11){spreadReference(tripRef[j],hold.s);}
else if (j==12){spreadReference(tripRef[j],hold.d);}
else if (j==13){spreadReference(tripRef[j],hold.f);}
else if (j==14){spreadReference(tripRef[j],hold.g);}
else if (j==15){spreadReference(tripRef[j],hold.h);}
else if (j==16){spreadReference(tripRef[j],hold.j);}
else if (j==17){spreadReference(tripRef[j],hold.k);}
else if (j==18){spreadReference(tripRef[j],hold.l);}
else if (j==19){spreadReference(tripRef[j],hold.z);}
else if (j==20){spreadReference(tripRef[j],hold.x);}
else if (j==21){spreadReference(tripRef[j],hold.c);}
else if (j==22){spreadReference(tripRef[j],hold.v);}
else if (j==23){spreadReference(tripRef[j],hold.b);}
else if (j==24){spreadReference(tripRef[j],hold.n);}
else if (j==25){spreadReference(tripRef[j],hold.m);}
}
}

}
return (1);
} else {
return (0);
}
}
