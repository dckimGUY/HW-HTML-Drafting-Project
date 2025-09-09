document.addEventListener('dragover', e => { e.preventDefault();});

/* Single Image Drag Handling OR Textual Input Handling. */

document.addEventListener('drop', e => { e.preventDefault();

/* This bit is some setup for accepting the HW syntax as dragged in text... */
const dropText = e.dataTransfer.getData("text").trim();

let colourArray =
[
"#00","#01","#02","#03","#04","#05","#06","#07","#08","#09","#0A","#0B","#0C","#0D","#0E","#0F",
"#10","#11","#12","#13","#14","#15","#16","#17","#18","#19","#1A","#1B","#1C","#1D","#1E","#1F",
"#20","#21","#22","#23","#24","#25","#26","#27","#28","#29","#2A","#2B","#2C","#2D","#2E","#2F",
"#30","#31","#32","#33","#34","#35","#36","#37","#38","#39","#3A","#3B","#3C","#3D","#3E","#3F",
"#40","#41","#42","#43","#44","#45","#46","#47","#48","#49","#4A","#4B","#4C","#4D","#4E","#4F",
"#50","#51","#52","#53","#54","#55","#56","#57","#58","#59","#5A","#5B","#5C","#5D","#5E","#5F",
"#60","#61","#62","#63","#64","#65","#66","#67","#68","#69","#6A","#6B","#6C","#6D","#6E","#6F",
"#70","#71","#72","#73","#74","#75","#76","#77","#78","#79","#7A","#7B","#7C","#7D","#7E","#7F",
"#80","#81","#82","#83","#84","#85","#86","#87","#88","#89","#8A","#8B","#8C","#8D","#8E","#8F",
"#90","#91","#92","#93","#94","#95","#96","#97","#98","#99","#9A","#9B","#9C","#9D","#9E","#9F",
"#A0","#A1","#A2","#A3","#A4","#A5","#A6","#A7","#A8","#A9","#AA","#AB","#AC","#AD","#AE","#AF",
"#B0","#B1","#B2","#B3","#B4","#B5","#B6","#B7","#B8","#B9","#BA","#BB","#BC","#BD","#BE","#BF",
"#C0","#C1","#C2","#C3","#C4","#C5","#C6","#C7","#C8","#C9","#CA","#CB","#CC","#CD","#CE","#CF",
"#D0","#D1","#D2","#D3","#D4","#D5","#D6","#D7","#D8","#D9","#DA","#DB","#DC","#DD","#DE","#DF",
"#E0","#E1","#E2","#E3","#E4","#E5","#E6","#E7","#E8","#E9","#EA","#EB","#EC","#ED","#EE","#EF",
"#F0","#F1","#F2","#F3","#F4","#F5","#F6","#F7","#F8","#F9","#FA","#FB","#FC","#FD","#FE","#FF",

"aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen",

"rgb", "transparent"
]


if
(event.target.dataset.coinTrip==Ts0||
 event.target.dataset.coinTrip==Ts1||
 event.target.dataset.coinTrip==Ts2) {



/* Here we cover modifier keys which will change the destination of the colouration input. */
/* background-color, outline-color, color, and text-decoration-color are the outputs       */


let colourChange = false;

colourArray.forEach((colour) => {
       if (dropText.trim().startsWith(colour)&&dropText.length<30) {
       const colourValue = dropText.split(';\n')[0];
       if (!e.shiftKey          ) {
       if (!e.altKey&&!e.ctrlKey) {event.target.lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor     = colourValue.trim().toString();
} else if ( e.altKey&&!e.ctrlKey) {


event.target.lastElementChild.style.outlineColor = colourValue.trim().toString();
event.target.dataset.outlineColour = colourValue.trim().toString();


} else if (!e.altKey&& e.ctrlKey) {event.target.lastElementChild.firstElementChild.nextElementSibling.style.color               = colourValue.trim().toString();
} else if ( e.altKey&& e.ctrlKey) {event.target.lastElementChild.firstElementChild.nextElementSibling.style.textDecorationColor = colourValue.trim().toString();
}
} else if ( e.shiftKey          ) {

       if (!e.altKey&&!e.ctrlKey) {
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor = colourValue.trim().toString(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor = colourValue.trim().toString(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor = colourValue.trim().toString(); }
}

} else if ( e.altKey&&!e.ctrlKey) {
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.style.outlineColor    = colourValue.trim().toString();
coinTrip.sel0[j].dataset.outlineColour                  = colourValue.trim().toString();
}
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.style.outlineColor    = colourValue.trim().toString();
coinTrip.sel1[j].dataset.outlineColour                  = colourValue.trim().toString();
}
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.style.outlineColor    = colourValue.trim().toString();
coinTrip.sel2[j].dataset.outlineColour                  = colourValue.trim().toString();
}
}

} else if (!e.altKey&& e.ctrlKey) {
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.nextElementSibling.style.color           = colourValue.trim().toString(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.nextElementSibling.style.color           = colourValue.trim().toString(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.nextElementSibling.style.color           = colourValue.trim().toString(); }
}

} else if ( e.altKey&& e.ctrlKey) {
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.nextElementSibling.style.textDecorationColor           = colourValue.trim().toString(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.nextElementSibling.style.textDecorationColor           = colourValue.trim().toString(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.nextElementSibling.style.textDecorationColor           = colourValue.trim().toString(); }
}

}



}
colourChange=true;
}
});



var dropTextArray = dropText.trim().replace(/ +/g, ' ').replace(/\s*=\s*/g, '=').replace(/; +/g, ';').replace(/\n\s+/g, '\n').replace(/(\r?\n)+/g, '\n').split(';\n');

for (let j = 0; j < dropTextArray.length; j++) {






       if (!e.shiftKey&&colourChange==false) {
       if (dropTextArray[j].startsWith("style="))              {
const lastBit = dropTextArray[j].split("style=")[1];
event.target.style                    = lastBit.split('"')[1].trim();
} else if (dropTextArray[j].startsWith("style."))               {
const nextBit = dropTextArray[j].split("style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("style.")[1].split("=")[1];
event.target.style[`${nextBit}`]      = lastBit.split('"')[1].trim();
} else if (dropTextArray[j].startsWith("dataset."))               {
const nextBit = dropTextArray[j].split("dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("dataset.")[1].split("=")[1];
event.target.dataset[`${nextBit}`]    = lastBit.split('"')[1].replace(/\n+/g,' ').replace(/ +/g,'').trim();
} else if (dropTextArray[j].startsWith("innerHTML=")||dropTextArray[j].startsWith("innerText")||dropTextArray[j].startsWith("textContent")) {
const lastBit = dropTextArray[j].split("innerHTML=")[1];
event.target.innerHTML                = lastBit.split('"')[1].trim();


} else if (dropTextArray[j].startsWith("anchor."))                              {
       if (dropTextArray[j].startsWith("anchor.style="))                       {
const lastBit = dropTextArray[j].split("anchor.style=")[1];
event.target.firstElementChild.style                    = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("anchor.style."))                 {
const nextBit = dropTextArray[j].split("anchor.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("anchor.style.")[1].split("=")[1];
event.target.firstElementChild.style[`${nextBit}`]      = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("anchor.dataset."))                {
const nextBit = dropTextArray[j].split("anchor.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("anchor.dataset.")[1].split("=")[1];
event.target.firstElementChild.dataset[`${nextBit}`]    = lastBit.split('"')[1].trim();
	} else {
	const nextBit = dropTextArray[j].split("anchor.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("anchor.")[1].split("=")[1];
	event.target.firstElementChild[`${nextBit}`]    = lastBit.split('"')[1].trim();
	}


} else if (dropTextArray[j].startsWith("main."))                              {
       if (dropTextArray[j].startsWith("main.style="))                       {
const lastBit = dropTextArray[j].split("main.style=")[1];
event.target.lastElementChild.style                    = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("main.style."))                 {
const nextBit = dropTextArray[j].split("main.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("main.style.")[1].split("=")[1];
event.target.lastElementChild.style[`${nextBit}`]      = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("main.dataset."))                {
const nextBit = dropTextArray[j].split("main.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("main.dataset.")[1].split("=")[1];
event.target.lastElementChild.dataset[`${nextBit}`]    = lastBit.split('"')[1].trim();
	} else {
	const nextBit = dropTextArray[j].split("main.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("main.")[1].split("=")[1];
	event.target.lastElementChild[`${nextBit}`]    = lastBit.split('"')[1].trim();
	}


} else if (dropTextArray[j].startsWith("button."))                              {
       if (dropTextArray[j].startsWith("button.style="))                       {
const lastBit = dropTextArray[j].split("button.style=")[1];
event.target.lastElementChild.firstElementChild.style                    = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("button.style."))                 {
const nextBit = dropTextArray[j].split("button.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("button.style.")[1].split("=")[1];
event.target.lastElementChild.firstElementChild.style[`${nextBit}`]      = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("button.dataset."))                {
const nextBit = dropTextArray[j].split("button.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("button.dataset.")[1].split("=")[1];
event.target.lastElementChild.firstElementChild.dataset[`${nextBit}`]    = lastBit.split('"')[1].trim();
	} else {
	const nextBit = dropTextArray[j].split("button.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("button.")[1].split("=")[1];
	event.target.lastElementChild.firstElementChild[`${nextBit}`]    = lastBit.split('"')[1].trim();
	}


} else if (dropTextArray[j].startsWith("div."))                            {
       if (dropTextArray[j].startsWith("div.style="))                     {
const lastBit = dropTextArray[j].split("div.style=")[1];
event.target.lastElementChild.firstElementChild.nextElementSibling.style                    = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("div.style."))                {
const nextBit = dropTextArray[j].split("div.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("div.style.")[1].split("=")[1];
event.target.lastElementChild.firstElementChild.nextElementSibling.style[`${nextBit}`]      = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("div.dataset."))                {
const nextBit = dropTextArray[j].split("div.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("div.dataset.")[1].split("=")[1];
event.target.lastElementChild.firstElementChild.nextElementSibling.dataset[`${nextBit}`]    = lastBit.split('"')[1].trim();
	} else {
	const nextBit = dropTextArray[j].split("div.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("div.")[1].split("=")[1];
	event.target.lastElementChild.firstElementChild.nextElementSibling[`${nextBit}`]    = lastBit.split('"')[1].trim();
	}


} else if (dropTextArray[j].startsWith("img."))                            {
       if (dropTextArray[j].startsWith("img.style="))                     {
const lastBit = dropTextArray[j].split("img.style=")[1];
event.target.lastElementChild.lastElementChild.style                    = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("img.style."))                {
const nextBit = dropTextArray[j].split("img.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("img.style.")[1].split("=")[1];
event.target.lastElementChild.lastElementChild.style[`${nextBit}`]      = lastBit.split('"')[1].trim();
       } else if (dropTextArray[j].startsWith("img.dataset."))              {
const nextBit = dropTextArray[j].split("img.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("img.dataset.")[1].split("=")[1];
event.target.lastElementChild.lastElementChild.dataset[`${nextBit}`]    = lastBit.split('"')[1].trim();
	} else {
	const nextBit = dropTextArray[j].split("img.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("img.")[1].split("=")[1];
	event.target.lastElementChild.lastElementChild[`${nextBit}`]    = lastBit.split('"')[1].trim();
	}


} else if (dropTextArray[j].includes("="))                                {
const nextBit = dropTextArray[j].split("=")[0];
const lastBit = dropTextArray[j].split("=")[1];
event.target[`${nextBit}`]          = lastBit.split('"')[1].trim();
}








} else if ( e.shiftKey&&colourChange==false) {

       if (dropTextArray[j].startsWith("style="))              {
const lastBit = dropTextArray[j].split("style=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].style = lastBit.split('"')[1].trim(); }
}

} else if (dropTextArray[j].startsWith("style."))               {
const nextBit = dropTextArray[j].split("style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("style.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

} else if (dropTextArray[j].startsWith("dataset."))               {
const nextBit = dropTextArray[j].split("dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("dataset.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

} else if (dropTextArray[j].startsWith("anchor."))                              {
       if (dropTextArray[j].startsWith("anchor.style="))                       {
const lastBit = dropTextArray[j].split("anchor.style=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].firstElementChild.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].firstElementChild.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].firstElementChild.style = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("anchor.style."))                  {
const nextBit = dropTextArray[j].split("anchor.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("anchor.style.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].firstElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].firstElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].firstElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("anchor.dataset."))                {
const nextBit = dropTextArray[j].split("anchor.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("anchor.dataset.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].firstElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].firstElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].firstElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

	} else {
	const nextBit = dropTextArray[j].split("anchor.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("anchor.")[1].split("=")[1];
	       if (event.target.dataset.coinTrip==Ts0) {
	for (let j = 0; j < coinTrip.sel0.length; j++) {
	coinTrip.sel0[j].firstElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts1) {
	for (let j = 0; j < coinTrip.sel1.length; j++) {
	coinTrip.sel1[j].firstElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts2) {
	for (let j = 0; j < coinTrip.sel2.length; j++) {
	coinTrip.sel2[j].firstElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	}
	}

} else if (dropTextArray[j].startsWith("main."))                              {
       if (dropTextArray[j].startsWith("main.style="))                       {
const lastBit = dropTextArray[j].split("main.style=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.style = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("main.style."))                  {
const nextBit = dropTextArray[j].split("main.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("main.style.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("main.dataset."))                {
const nextBit = dropTextArray[j].split("main.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("main.dataset.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

	} else {
	const nextBit = dropTextArray[j].split("main.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("main.")[1].split("=")[1];
	       if (event.target.dataset.coinTrip==Ts0) {
	for (let j = 0; j < coinTrip.sel0.length; j++) {
	coinTrip.sel0[j].lastElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts1) {
	for (let j = 0; j < coinTrip.sel1.length; j++) {
	coinTrip.sel1[j].lastElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts2) {
	for (let j = 0; j < coinTrip.sel2.length; j++) {
	coinTrip.sel2[j].lastElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	}
	}

} else if (dropTextArray[j].startsWith("button."))                              {
       if (dropTextArray[j].startsWith("button.style="))                       {
const lastBit = dropTextArray[j].split("button.style=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.style = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("button.style."))                  {
const nextBit = dropTextArray[j].split("button.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("button.style.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("button.dataset."))                {
const nextBit = dropTextArray[j].split("button.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("button.dataset.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

	} else {
	const nextBit = dropTextArray[j].split("button.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("button.")[1].split("=")[1];
	       if (event.target.dataset.coinTrip==Ts0) {
	for (let j = 0; j < coinTrip.sel0.length; j++) {
	coinTrip.sel0[j].lastElementChild.firstElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts1) {
	for (let j = 0; j < coinTrip.sel1.length; j++) {
	coinTrip.sel1[j].lastElementChild.firstElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts2) {
	for (let j = 0; j < coinTrip.sel2.length; j++) {
	coinTrip.sel2[j].lastElementChild.firstElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	}
	}

} else if (dropTextArray[j].startsWith("div."))                            {
       if (dropTextArray[j].startsWith("div.style="))                     {
const lastBit = dropTextArray[j].split("div.style=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.nextElementSibling.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.nextElementSibling.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.nextElementSibling.style = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("div.style."))                {
const nextBit = dropTextArray[j].split("div.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("div.style.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.nextElementSibling.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.nextElementSibling.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.nextElementSibling.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("div.dataset."))                {
const nextBit = dropTextArray[j].split("div.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("div.dataset.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.firstElementChild.nextElementSibling.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.firstElementChild.nextElementSibling.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.firstElementChild.nextElementSibling.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

	} else {
	const nextBit = dropTextArray[j].split("div.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("div.")[1].split("=")[1];
	       if (event.target.dataset.coinTrip==Ts0) {
	for (let j = 0; j < coinTrip.sel0.length; j++) {
	coinTrip.sel0[j].lastElementChild.firstElementChild.nextElementSibling[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts1) {
	for (let j = 0; j < coinTrip.sel1.length; j++) {
	coinTrip.sel1[j].lastElementChild.firstElementChild.nextElementSibling[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts2) {
	for (let j = 0; j < coinTrip.sel2.length; j++) {
	coinTrip.sel2[j].lastElementChild.firstElementChild.nextElementSibling[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	}
	}

} else if (dropTextArray[j].startsWith("img."))                            {
       if (dropTextArray[j].startsWith("img.style="))                     {
const lastBit = dropTextArray[j].split("img.style=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.lastElementChild.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.lastElementChild.style = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.lastElementChild.style = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("img.style."))                {
const nextBit = dropTextArray[j].split("img.style.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("img.style.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.lastElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.lastElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.lastElementChild.style[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

       } else if (dropTextArray[j].startsWith("img.dataset."))              {
const nextBit = dropTextArray[j].split("img.dataset.")[1].split("=")[0];
const lastBit = dropTextArray[j].split("img.dataset.")[1].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].lastElementChild.lastElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].lastElementChild.lastElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].lastElementChild.lastElementChild.dataset[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}

	} else {
	const nextBit = dropTextArray[j].split("img.")[1].split("=")[0];
	const lastBit = dropTextArray[j].split("img.")[1].split("=")[1];
	       if (event.target.dataset.coinTrip==Ts0) {
	for (let j = 0; j < coinTrip.sel0.length; j++) {
	coinTrip.sel0[j].lastElementChild.lastElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts1) {
	for (let j = 0; j < coinTrip.sel1.length; j++) {
	coinTrip.sel1[j].lastElementChild.lastElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	} else if (event.target.dataset.coinTrip==Ts2) {
	for (let j = 0; j < coinTrip.sel2.length; j++) {
	coinTrip.sel2[j].lastElementChild.lastElementChild[`${nextBit}`] = lastBit.split('"')[1].trim(); }
	}
	}

} else if (dropTextArray[j].includes("="))                                {
const nextBit = dropTextArray[j].split("=")[0];
const lastBit = dropTextArray[j].split("=")[1];
       if (event.target.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
coinTrip.sel0[j].target[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
coinTrip.sel1[j].target[`${nextBit}`] = lastBit.split('"')[1].trim(); }
} else if (event.target.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
coinTrip.sel2[j].target[`${nextBit}`] = lastBit.split('"')[1].trim(); }
}
}
}



}

} else if (e.clientX<64&&e.clientY<64) {
/* Utility Grid Line Color  var    U="#0FF";*/
/* Utility Grid Line Color2 var    C="#0F0";*/
/* Utility Grid Line Color3 var    D="#0FF";*/

/* Utility Background Color Alternate for Construction Mode var   sL="#333";*/
/* Utility Background Color Alternate for Style Mode        var    L="#225";*/
/* Finished Document Background Color var   finishedBackgroundColour="#225";*/





colourArray.forEach((colour) => {

       if (dropText.startsWith(colour)) {
       if (!e.shiftKey          ) {


       if (hauptMode==0||document.documentElement.style.backgroundColor==sL) {sL=dropText.toString();
} else if (e.ctrlKey||hauptMode==1||document.documentElement.style.backgroundColor== L) { L=dropText.toString();
} else if (e.altKey||document.documentElement.style.backgroundColor==finishedBackgroundColour) {finishedBackgroundColour=dropText.toString();
}
document.documentElement.style.backgroundColor = dropText.toString();



} else if ( e.shiftKey          ) {




       if (!e.ctrlKey&&!e.altKey) {
U = dropText.toString(); D = dropText.toString();
C = dropText.toString();
Z();
} else if (  e.ctrlKey) {
bU= dropText.toString();
Z();
}




}
}

});





















} else {




}












const numberOfParts = utilityLayer0.children.length;


const file = e.dataTransfer.files[0];
if (!file) return;

if (!file.type.startsWith("image/")&&!file.type.startsWith("audio/")&&!file.type.startsWith("video/")) {

const reader = new FileReader();
reader.onload = evt => {

if (!e.target.dataset.coinTrip) {






let sequestrationLayer = document.createElement("div");


sequestrationLayer.innerHTML = reader.result.toString();

if (sequestrationLayer.children.length > 1 && sequestrationLayer.firstElementChild.dataset && sequestrationLayer.firstElementChild.dataset.coinTrip) {
} else {
sequestrationLayer.innerHTML = "";
}


if (sequestrationLayer.lastElementChild&&sequestrationLayer.lastElementChild.tagName=="SCRIPT") {
sequestrationLayer.lastElementChild.remove();
}

utilityLayer0.innerHTML = utilityLayer0.innerHTML + sequestrationLayer.innerHTML;






restorePointerEventsNone();
spaceViewOff();

readCoins();
recoverColouration();
if (utilityLayer0.children.length>0) {
coinFocus = utilityLayer0.lastElementChild;
coinFocus.style.outline = fB;
}

} else {



/* This puts a textual or HTML file into the div. */

e.target.lastElementChild.firstElementChild.nextElementSibling.innerHTML = reader.result.toString();
e.target.dataset.fileInclude = `${file.name}`;




coinFocus = e.target;

recoverColouration();



coinFocus.style.outline = fB;

}


};
reader.readAsText(file);



} else {






//if (!file.type.startsWith("image/")&&!file.type.startsWith("audio/")&&!file.type.startsWith("video/")) {

if ( file.type.startsWith("image/")) {




/* ONE MORE RETARDED HACK PLEASE GOD. */
/* I DONT KNOW HOW THIS CODE WORKS. */



if (!e.altKey) {










const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.loading = "lazy";
insertNewImage([e,'','',e.shiftKey,e.ctrlKey,e.altKey],img);
modeRouter('',1);
};
if (useBase64forImages==true) {
img.src = evt.target.result;
} else {
img.src ="./d_images/" + file.name;
}
};
reader.readAsDataURL(file);













} else if (e.altKey) {










/* retarded hack-job */



const reader = new FileReader();
reader.onload = evt => {
const img = new Image();
img.onload = () => {
img.width = img.naturalWidth;
img.height = img.naturalHeight;
Picture.width=img.width;
Picture.height=img.height;
let ctx = Picture.getContext("2d");
ctx.drawImage(img, 0, 0, img.width, img.height);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
}








} else if ( file.type.startsWith("audio/")) {


hauptModeOriginalState = hauptMode;

hauptMode = 0;

const reader = new FileReader();
reader.onload = evt => {
const audio = new Audio();


insertNewCoin(["",78,110,true,false,false]);

hauptMode = hauptModeOriginalState;


if (useBase64forAudio==true) {
audio.src = evt.target.result;
} else {
audio.src ="./b_audio/" + file.name;
}

audio.style.width = "100%";
audio.style.height = "100%";
audio.style.margin = "0";
audio.style.padding = "0";
audio.style.border = "0";
audio.controls="true";

utilityLayer0.lastElementChild.style.height   = "64";
utilityLayer0.lastElementChild.style.width    = "256px";
utilityLayer0.lastElementChild.dataset.height = "64";
utilityLayer0.lastElementChild.dataset.width  = "256px";

utilityLayer0.lastElementChild.style.left        =    Math.floor(parseInt(e.pageX)/T) * T         + "px";
utilityLayer0.lastElementChild.style.top         =    Math.floor(parseInt(e.pageY)/T) * T          + "px";
utilityLayer0.lastElementChild.dataset.left      =    Math.floor(parseInt(e.pageX)/T) * T         + "px";
utilityLayer0.lastElementChild.dataset.top       =    Math.floor(parseInt(e.pageY)/T) * T          + "px";

utilityLayer0.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.appendChild(audio);
};
reader.readAsDataURL(file);
} else if ( file.type.startsWith("video/")) {


hauptModeOriginalState = hauptMode;

hauptMode = 0;

const reader = new FileReader();
reader.onload = evt => {
const video = document.createElement("video");


insertNewCoin(["",78,110,true,false,false]);

hauptMode = hauptModeOriginalState;

if (useBase64forVideo==true) {
video.src = evt.target.result;
} else {
video.src ="./c_video/" + file.name;
}

video.style.width = "100%";
video.style.height = "100%";
video.style.margin = "0";
video.style.padding = "0";
video.style.border = "0";
video.controls="true";

utilityLayer0.lastElementChild.style.height   = "256px";
utilityLayer0.lastElementChild.dataset.height = "256px";
utilityLayer0.lastElementChild.style.width    = "256px";
utilityLayer0.lastElementChild.dataset.width  = "256px";

utilityLayer0.lastElementChild.style.left        =    Math.floor(parseInt(e.pageX)/T) * T         + "px";
utilityLayer0.lastElementChild.style.top         =    Math.floor(parseInt(e.pageY)/T) * T          + "px";
utilityLayer0.lastElementChild.dataset.left      =    Math.floor(parseInt(e.pageX)/T) * T         + "px";
utilityLayer0.lastElementChild.dataset.top       =    Math.floor(parseInt(e.pageY)/T) * T          + "px";

utilityLayer0.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.appendChild(video);

};
reader.readAsDataURL(file);
}

}









restorePointerEventsNone();


recoverColouration();
readCoins();





});
