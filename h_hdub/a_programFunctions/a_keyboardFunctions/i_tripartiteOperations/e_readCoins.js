function readCoins() {

coinTrip.sel0 = [];
coinTrip.sel1 = [];
coinTrip.sel2 = [];

let success = false;

for (j=0; j<utilityLayer0.children.length; j++) {
       if (utilityLayer0.children[j].dataset.coinTrip==Ts0) { coinTrip.sel0[coinTrip.sel0.length] = utilityLayer0.children[j];
} else if (utilityLayer0.children[j].dataset.coinTrip==Ts1) { coinTrip.sel1[coinTrip.sel1.length] = utilityLayer0.children[j];
} else if (utilityLayer0.children[j].dataset.coinTrip==Ts2) { coinTrip.sel2[coinTrip.sel2.length] = utilityLayer0.children[j];
} else if (!utilityLayer0.children[j])                      { coinTrip.out0[coinTrip.out0.length] = utilityLayer0.children[j]; utilityLayer0.children[j].dataset.coinTrip="out0";
}
success = true;
}


for (let j=0; j<utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].firstElementChild) {
utilityLayer0.children[j].anchor = utilityLayer0.children[j].firstElementChild;
}
if (utilityLayer0.children[j].lastElementChild) {
utilityLayer0.children[j].main   = utilityLayer0.children[j].lastElementChild;
}
if (utilityLayer0.main&&utilityLayer0.children[j].main.firstElementChild) {
utilityLayer0.children[j].button = utilityLayer0.children[j].main.firstElementChild;
}
if (utilityLayer0.main&&utilityLayer0.children[j].button&&utilityLayer0.children[j].button.nextElementSibling) {
utilityLayer0.children[j].div    = utilityLayer0.children[j].button.nextElementSibling;
}
if (utilityLayer0.children[j].main&&utilityLayer0.children[j].main.lastElementChild) {
utilityLayer0.children[j].img    = utilityLayer0.children[j].main.lastElementChild;
}
}

for (let j=0; j<utilityLayer0.children.length; j++) {
       if (utilityLayer0.children[j]==hold.q.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.q.name + '"'; 
} else if (utilityLayer0.children[j]==hold.w.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.w.name + '"'; 
} else if (utilityLayer0.children[j]==hold.e.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.e.name + '"'; 
} else if (utilityLayer0.children[j]==hold.r.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.r.name + '"'; 
} else if (utilityLayer0.children[j]==hold.t.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.t.name + '"'; 
} else if (utilityLayer0.children[j]==hold.y.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.y.name + '"'; 
} else if (utilityLayer0.children[j]==hold.u.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.u.name + '"'; 
} else if (utilityLayer0.children[j]==hold.i.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.i.name + '"'; 
} else if (utilityLayer0.children[j]==hold.o.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.o.name + '"'; 
} else if (utilityLayer0.children[j]==hold.p.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.p.name + '"'; 
} else if (utilityLayer0.children[j]==hold.a.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.a.name + '"'; 
} else if (utilityLayer0.children[j]==hold.s.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.s.name + '"'; 
} else if (utilityLayer0.children[j]==hold.d.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.d.name + '"'; 
} else if (utilityLayer0.children[j]==hold.f.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.f.name + '"'; 
} else if (utilityLayer0.children[j]==hold.g.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.g.name + '"'; 
} else if (utilityLayer0.children[j]==hold.h.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.h.name + '"'; 
} else if (utilityLayer0.children[j]==hold.j.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.j.name + '"'; 
} else if (utilityLayer0.children[j]==hold.k.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.k.name + '"'; 
} else if (utilityLayer0.children[j]==hold.l.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.l.name + '"'; 
} else if (utilityLayer0.children[j]==hold.z.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.z.name + '"'; 
} else if (utilityLayer0.children[j]==hold.x.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.x.name + '"'; 
} else if (utilityLayer0.children[j]==hold.c.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.c.name + '"'; 
} else if (utilityLayer0.children[j]==hold.v.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.v.name + '"'; 
} else if (utilityLayer0.children[j]==hold.b.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.b.name + '"'; 
} else if (utilityLayer0.children[j]==hold.n.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.n.name + '"'; 
} else if (utilityLayer0.children[j]==hold.m.value) { utilityLayer0.children[j].firstElementChild.innerText = '"' + hold.m.name + '"'; 
} else {

if (utilityLayer0.children[j].firstElementChild) {
       if (showPartName==true) {
utilityLayer0.children[j].firstElementChild.innerText = utilityLayer0.children[j].id ; 
} else {
utilityLayer0.children[j].firstElementChild.innerText =                                        ""; 
}
}
}


if (utilityLayer0.children[j].firstElementChild) {
if (utilityLayer0.children[j].firstElementChild.innerText!=utilityLayer0.children[j].id) {
       if (showPartName==true) {
utilityLayer0.children[j].firstElementChild.innerText += " " + utilityLayer0.children[j].id ; 
}
}
}

}

if (success) {
return (1);
} else {
return (0);
}

}
