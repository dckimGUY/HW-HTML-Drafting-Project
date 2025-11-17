function saveProject() {
/* MAKE SURE THE ARRANGEMENT IS 'FULL-UP' */
if (coinFocus!=null)  { topLayer[topLayer.a_currentLayer].e_coinFocus = coinFocus.id;  } else { topLayer[topLayer.a_currentLayer].e_coinFocus = null; }
if (coinFocus1!=null) { topLayer[topLayer.a_currentLayer].f_coinFocus = coinFocus1.id; } else { topLayer[topLayer.a_currentLayer].f_coinFocus = null; }
topLayer[topLayer.a_currentLayer].b_content.innerHTML = utilityLayer0.innerHTML;
topLayer[topLayer.a_currentLayer].filename = filename;
topLayer[topLayer.a_currentLayer].echelon = pageEchelon / 100000000;

const json = JSON.stringify(topLayer, (key, value) => {
if (value instanceof Element) { return value.outerHTML; }
return value; }, 0);

const date       =    new Date()                                      ;
const year       =    date.getFullYear()                              ;
const month      =    date.getMonth().toString().padStart(  2,"0")    ;
const day        =    date.getDate().toString().padStart(   2,"0")    ;
const hour       =    date.getHours().toString().padStart(  2,"0")    ;
const minute     =    date.getMinutes().toString().padStart(2,"0")    ;
const second     =    date.getSeconds().toString().padStart(2,"0")    ;
const dateSuffix =    `${year}-${month}-${day}-T${hour}-${minute}-${second}`;

const blob = new Blob([json], { type:'text/html' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
//filename = filename.replace(/ /g, '-');
a.download = "HDUB_Project_" + topLayer.aa_project_name + "@_" + dateSuffix + ".html";
a.click();
URL.revokeObjectURL(url);
}
