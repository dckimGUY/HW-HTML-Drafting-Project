/* ARE YOU SURE YOU WANT TO TAKE ADVANTAGE OF THE WHITESPACE LIKE THAT? YES... */
                       ui.folder61button.click =
             function() { folder6Selector(1);
if (event.shiftKey) {
window.open("n_art/ASCII_art_fullVersion.html","_blank",`height=600,width=800,top=0,left=0,resizable=yes,noopener=no`);
}
};
                       ui.folder62button.click =
             function() { folder6Selector(2); };
                 function folder6Selector(folderNumber) { for (let j = 1; j < 3; j++) {
 document.getElementById("folder6" + j).style.display = "none"; }
 document.getElementById("folder6" + folderNumber).style.display = "block";
    localStorage.setItem("folder6", folderNumber); } for (let j = 1; j < 3; j++) {
 document.getElementById("folder6" + j).style.display = "none"; }
if (localStorage.getItem("folder6")) {
 document.getElementById("folder6" + localStorage.getItem("folder6")).style.display = "block"; } else {
                       ui.folder61.ref.style.display = "block"; }
