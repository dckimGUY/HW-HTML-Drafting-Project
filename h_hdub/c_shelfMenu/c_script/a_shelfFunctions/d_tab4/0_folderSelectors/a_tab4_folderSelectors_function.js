/* ARE YOU SURE YOU WANT TO TAKE ADVANTAGE OF THE WHITESPACE LIKE THAT? YES... */
                       ui.folder41button.click =
             function() { folder4Selector(1); };
                       ui.folder42button.click =
             function() { folder4Selector(2); };
                 function folder4Selector(folderNumber) { for (let j = 1; j < 3; j++) {
 document.getElementById("folder4" + j).style.display = "none"; }
 document.getElementById("folder4" + folderNumber).style.display = "block";
    localStorage.setItem("folder4", folderNumber); } for (let j = 1; j < 3; j++) {
 document.getElementById("folder4" + j).style.display = "none"; }
if (localStorage.getItem("folder4")) {
 document.getElementById("folder4" + localStorage.getItem("folder4")).style.display = "block"; } else {
                       ui.folder41.ref.style.display = "block"; }
