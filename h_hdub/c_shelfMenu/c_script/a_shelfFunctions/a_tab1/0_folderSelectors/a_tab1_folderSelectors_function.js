/* ARE YOU SURE YOU WANT TO TAKE ADVANTAGE OF THE WHITESPACE LIKE THAT? YES... */
                       ui.folder11button.click =
             function() { folder1Selector(1); };
                       ui.folder12button.click =
             function() { folder1Selector(2); };
                 function folder1Selector(folderNumber) { for (let j = 1; j < 3; j++) {
 document.getElementById("folder1" + j).style.display = "none"; }
 document.getElementById("folder1" + folderNumber).style.display = "block";
    localStorage.setItem("folder1", folderNumber); } for (let j = 1; j < 3; j++) {
 document.getElementById("folder1" + j).style.display = "none"; }
if (localStorage.getItem("folder1")) {
 document.getElementById("folder1" + localStorage.getItem("folder1")).style.display = "block"; } else {
                       ui.folder11.ref.style.display = "block"; }
