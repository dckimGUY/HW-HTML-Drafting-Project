/* ARE YOU SURE YOU WANT TO TAKE ADVANTAGE OF THE WHITESPACE LIKE THAT? YES... */
                       ui.folder21button.click =
             function() { folder2Selector(1); };
                       ui.folder22button.click =
             function() { folder2Selector(2); };
                 function folder2Selector(folderNumber) { for (let j = 1; j < 3; j++) {
 document.getElementById("folder2" + j).style.display = "none"; }
 document.getElementById("folder2" + folderNumber).style.display = "block";
    localStorage.setItem("folder2", folderNumber); } for (let j = 1; j < 3; j++) {
 document.getElementById("folder2" + j).style.display = "none"; }
if (localStorage.getItem("folder2")) {
 document.getElementById("folder2" + localStorage.getItem("folder2")).style.display = "block"; } else {
                       ui.folder21.ref.style.display = "block"; }
