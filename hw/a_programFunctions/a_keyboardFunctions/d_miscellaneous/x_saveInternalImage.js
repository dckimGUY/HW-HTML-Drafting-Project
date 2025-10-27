function saveInternalImage() {
if (coinFocus!=null) {

const date       =    new Date()                                      ;
const year       =    date.getFullYear()                              ;
const month      =    date.getMonth().toString().padStart(2,"0")      ;
const day        =    date.getDate().toString().padStart(2,"0")       ;
const hour       =    date.getHours().toString().padStart(2,"0")      ;
const minute     =    date.getMinutes().toString().padStart(2,"0")    ;
const second     =    date.getSeconds().toString().padStart(2,"0")    ;

const dateSuffix =    `${year}-${month}-${day}-T${hour}-${minute}-${second}`

if(coinFocus.lastElementChild.lastElementChild.src != '') {
const dataURL = coinFocus.lastElementChild.lastElementChild.src;
const link = document.createElement('a');
link.href = dataURL;
link.download = "d_image-crop@" + dateSuffix + ".png";
link.click();
}

}
}
