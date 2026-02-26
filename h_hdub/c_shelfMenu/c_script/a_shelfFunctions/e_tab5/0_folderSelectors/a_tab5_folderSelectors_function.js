/* ARE YOU SURE YOU WANT TO TAKE ADVANTAGE OF THE WHITESPACE LIKE THAT? YES... */
                       ui.folder51button.click =
             function() { folder5Selector(1); };
                       ui.folder52button.click =
             function() { folder5Selector(2); };
                 function folder5Selector(folderNumber) { for (let j = 1; j < 3; j++) {
 document.getElementById("folder5" + j).style.display = "none"; }
 document.getElementById("folder5" + folderNumber).style.display = "block";
    localStorage.setItem("folder5", folderNumber); } for (let j = 1; j < 3; j++) {
 document.getElementById("folder5" + j).style.display = "none"; }
if (localStorage.getItem("folder5")) {
 document.getElementById("folder5" + localStorage.getItem("folder5")).style.display = "block"; } else {
                       ui.folder51.ref.style.display = "block"; }
