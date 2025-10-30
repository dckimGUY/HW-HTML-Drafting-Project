/* ARE YOU SURE YOU WANT TO TAKE ADVANTAGE OF THE WHITESPACE LIKE THAT? YES... */
                       ui.folder31button.click =
             function() { folder3Selector(1); };
                       ui.folder32button.click =
             function() { folder3Selector(2); };
                 function folder3Selector(folderNumber) { for (let j = 1; j < 3; j++) {
 document.getElementById("folder3" + j).style.display = "none"; }
 document.getElementById("folder3" + folderNumber).style.display = "block";
    localStorage.setItem("folder3", folderNumber); } for (let j = 1; j < 3; j++) {
 document.getElementById("folder3" + j).style.display = "none"; }
if (localStorage.getItem("folder3")) {
 document.getElementById("folder3" + localStorage.getItem("folder3")).style.display = "block"; } else {
                       ui.folder31.ref.style.display = "block"; }
