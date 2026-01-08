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
coinFocus.style.outlineOffset = fBO;
}

} else {



/* This puts a textual or HTML file into the div. */

e.target.lastElementChild.firstElementChild.nextElementSibling.innerHTML = reader.result.toString();
e.target.dataset.fileInclude = `${file.name}`;




coinFocus = e.target;

recoverColouration();



coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;

}


};
reader.readAsText(file);



} else {






//if (!file.type.startsWith("image/")&&!file.type.startsWith("audio/")&&!file.type.startsWith("video/")) {

if ( file.type.startsWith("image/")) {























/* ONE MORE RETARDED HACK PLEASE GOD. */
/* I DONT KNOW HOW THIS CODE WORKS.   */



if (!e.altKey) {


/* this handles the special importing */
if (file.name.includes("_HDUB_")) {






function pixelationScale(inputScale) {
let scale = 1;
if (inputScale >= 5) scale = 1;
switch (inputScale) {
case 1: scale = 10; break;
case 2: scale =  8; break;
case 3: scale =  6; break;
case 4: scale =  5; break;
}

if (scale != 1) {
for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.left   = parseInt(utilityLayer0.children[j].style.left)   * scale + "px";
utilityLayer0.children[j].style.top    = parseInt(utilityLayer0.children[j].style.top)    * scale + "px";
utilityLayer0.children[j].style.width  = parseInt(utilityLayer0.children[j].style.width)  * scale + "px";
utilityLayer0.children[j].style.height = parseInt(utilityLayer0.children[j].style.height) * scale + "px";
utilityLayer0.children[j].dataset.left   = utilityLayer0.children[j].style.left  ;
utilityLayer0.children[j].dataset.top    = utilityLayer0.children[j].style.top   ;
utilityLayer0.children[j].dataset.width  = utilityLayer0.children[j].style.width ;
utilityLayer0.children[j].dataset.height = utilityLayer0.children[j].style.height;
utilityLayer0.children[j].div.lastElementChild.classList = "pixelArt";
}
}

}

















       if (file.name.includes("_tmpl_")) {
ui.templateIntake.ref.value  = file.name.split("_HDUB_")[0];
sheetImages.star.filename    = ui.templateIntake.ref.value;
ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_tmpl_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_tmpl_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_tmpl_")[0]));
sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_tmpl_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader  = new FileReader();
reader.onload = evt => {
const img  = new Image();
img.onload = () => {
img.width  = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
tabSelector(3);
folder3Selector(2);



} else if (file.name.includes("_2btn_")) {

ui.templateIntake.ref.value  = file.name.split("_HDUB_")[0];
sheetImages.star.filename    = ui.templateIntake.ref.value;
                                                  ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_2btn_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
                                     ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_2btn_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_2btn_")[0]));
                                              sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_2btn_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader  = new FileReader();
reader.onload = evt => {
const img  = new Image();
img.onload = () => {
img.width  = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer")   ;
const imageCutter   = document.createElement("canvas");
imageCutter.width   =  sheetImages.star.img.width  / 2;
imageCutter.height  =  sheetImages.star.img.height    ;
let           ctx   = imageCutter.getContext("2d")    ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src   = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width / 2), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click()   ;
setTimeout(() => {
ui.getButtons.ref.click()  ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
topLayer.importer.b_content.children[j].style.left   = parseInt(topLayer.importer.b_content.children[j].style.left)   + previousScrollX + "px";
topLayer.importer.b_content.children[j].dataset.left = parseInt(topLayer.importer.b_content.children[j].dataset.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].style.top    = parseInt(topLayer.importer.b_content.children[j].style.top)    + previousScrollY + "px";
topLayer.importer.b_content.children[j].dataset.top  = parseInt(topLayer.importer.b_content.children[j].dataset.top)  + previousScrollY + "px";
}
while (topLayer.importer.b_content.children.length != 0) {
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
utilityLayer0.appendChild(topLayer.importer.b_content.children[j]);   }
}
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 2000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);



} else if (file.name.includes("_4btn_")) {
ui.templateIntake.ref.value  = file.name.split("_HDUB_")[0];
sheetImages.star.filename    = ui.templateIntake.ref.value;
                                                  ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_4btn_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
                                     ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_4btn_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_4btn_")[0]));
                                              sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_4btn_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader  = new FileReader();
reader.onload = evt => {
const img  = new Image();
img.onload = () => {
img.width  = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer")   ;
const imageCutter   = document.createElement("canvas");
imageCutter.width   =  sheetImages.star.img.width  / 4;
imageCutter.height  =  sheetImages.star.img.height    ;
let           ctx   = imageCutter.getContext("2d")    ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src   = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (1/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focus.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (2/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.hover.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (3/4)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click()   ;
setTimeout(() => {
ui.getButtons.ref.click()  ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
topLayer.importer.b_content.children[j].style.left   = parseInt(topLayer.importer.b_content.children[j].style.left)   + previousScrollX + "px";
topLayer.importer.b_content.children[j].dataset.left = parseInt(topLayer.importer.b_content.children[j].dataset.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].style.top    = parseInt(topLayer.importer.b_content.children[j].style.top)    + previousScrollY + "px";
topLayer.importer.b_content.children[j].dataset.top  = parseInt(topLayer.importer.b_content.children[j].dataset.top)  + previousScrollY + "px";
}
while (topLayer.importer.b_content.children.length != 0) {
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
utilityLayer0.appendChild(topLayer.importer.b_content.children[j]);   }
}
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 4000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);


} else if (file.name.includes("_6btn_")) {
ui.templateIntake.ref.value  = file.name.split("_HDUB_")[0];
sheetImages.star.filename    = ui.templateIntake.ref.value;
                                                  ui.hdubSingleEntry.ref.value = file.name.split("_HDUB_")[1].split("_6btn_")[1].replace(".png", "");
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
sheetImages.star.syntax = ui.hdubSingleEntry.ref.value;
                                     ui.hdubSheetTemplate4x.ref.value = parseInt(file.name.split("_HDUB_")[1].split("_6btn_")[0]);
ui.hdubSheetTemplate4x.ref.setAttribute("title", "hdubEntryFactor = " + parseInt(file.name.split("_HDUB_")[1].split("_6btn_")[0]));
                                              sheetImages.star.factor = parseInt(file.name.split("_HDUB_")[1].split("_6btn_")[0]);
localStorage.setItem("hdubEntryFactor", ui.hdubSheetTemplate4x.ref.value);
const reader  = new FileReader();
reader.onload = evt => {
const img  = new Image();
img.onload = () => {
img.width  = img.naturalWidth;
img.height = img.naturalHeight;
sheetImages.star.img = img;
drawArray(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
clearImageSheet("base");
clearImageSheet("focus");
clearImageSheet("hover");
clearImageSheet("active");
clearImageSheet("focusHover");
clearImageSheet("focusActive");
const originalLayer = topLayer.a_currentLayer;
makeTopLayer("importer")   ;
const imageCutter   = document.createElement("canvas");
imageCutter.width   =  sheetImages.star.img.width  / 6;
imageCutter.height  =  sheetImages.star.img.height    ;
let           ctx   = imageCutter.getContext("2d")    ;
ctx.drawImage(sheetImages.star.img, 0, 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.base.img.src   = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (1/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focus.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (2/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.hover.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (3/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.active.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (4/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focusHover.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
ctx.drawImage(sheetImages.star.img, -(sheetImages.star.img.width * (5/6)), 0, sheetImages.star.img.width, sheetImages.star.img.height);
sheetImages.focusActive.img.src = imageCutter.toDataURL("image/png");
ctx.clearRect(0,0,imageCutter.width,imageCutter.height);
const previousScrollX = window.scrollX;
const previousScrollY = window.scrollY;
window.scrollTo(0,0);
ui.hdubEnter.ref.click()   ;
setTimeout(() => {
ui.getButtons.ref.click()  ;
pixelationScale(sheetImages.star.factor);
Picture.style.display = "none";
makeTopLayer(originalLayer);
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
topLayer.importer.b_content.children[j].style.left   = parseInt(topLayer.importer.b_content.children[j].style.left)   + previousScrollX + "px";
topLayer.importer.b_content.children[j].dataset.left = parseInt(topLayer.importer.b_content.children[j].dataset.left) + previousScrollX + "px";
topLayer.importer.b_content.children[j].style.top    = parseInt(topLayer.importer.b_content.children[j].style.top)    + previousScrollY + "px";
topLayer.importer.b_content.children[j].dataset.top  = parseInt(topLayer.importer.b_content.children[j].dataset.top)  + previousScrollY + "px";
}
while (topLayer.importer.b_content.children.length != 0) {
for (let j = 0; j < topLayer.importer.b_content.children.length; j++) {
utilityLayer0.appendChild(topLayer.importer.b_content.children[j]);   }
}
window.scrollTo(previousScrollX,previousScrollY);
readCoins();
recoverCoinFocus();
}, 6000);
};
img.src = evt.target.result;
};
reader.readAsDataURL(file);




} else if (file.name.includes("_2img_")) {

} else if (file.name.includes("_4img_")) {

} else if (file.name.includes("_6img_")) {






} else {



["hwSel_a", "hwSel_b", "hwSel_c", "hwSel_d", "hwSel_e", "hwSel_f", "hwSel_g", "hwSel_i", "hwSel_j", "hwSel_k", "hwSel_l", "hwSel_m", "hwSel_n", "hwSel_o", "hwSel_p", "hwSel_q", "hwSel_r", "hwSel_s", "hwSel_t", "hwSel_u", "hwSel_v", "hwSel_x", "hwSel_y", "hwSel_z"].forEach((name) => {
if (event.target == ui[name].ref) {

ui.hwString[name].string = file.name.split("_HDUB_")[1].replace(".png", "");

switchString(name);


ui[name].img.src = drawCell(ui.hwString[name].string,ui.hwString[name].colour);

drawArray(cropObject(100, 180, makeObject(clean(ui.hwString[name].string))));
localStorage.setItem("hdubSingleEntry", ui.hdubSingleEntry.ref.value);
tabSelector(4);
folder4Selector(1);
document.getElementById("hdubSingleEntry").focus();

}
});





}






} else {
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
img.src ="./" + hdub_imagePath + file.name;
}
};
reader.readAsDataURL(file);
}










} else if (e.altKey) {
/* retarded hack-job */
const reader  = new FileReader();
reader.onload = evt => {
const img  = new Image();
img.onload = () => {
img.width  = img.naturalWidth;
img.height = img.naturalHeight;
Picture.width  = img.width;
Picture.height = img.height;
let ctx = Picture.getContext("2d");
ctx.drawImage(img, 0, 0, img.width, img.height);
Picture.style.display="block";
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


insertNewCoin(["",78,78,true,false,false]);

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


insertNewCoin(["",78,78,true,false,false]);

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
