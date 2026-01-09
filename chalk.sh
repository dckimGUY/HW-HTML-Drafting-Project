## Here is the 'CHALKING-UP' of the online program file.



cat y_header.txt > index.html;

echo -n '<link rel="stylesheet" href="e_stylesheets/a_style.css?v=' >> index.html;
                  echo -n $(date -r ./e_stylesheets/a_style.css +%Y%m%d%H%M%S) >> index.html;
                                                                 echo '"/>' >> index.html;
echo -n '<link rel="stylesheet" href="e_stylesheets/b_style.css?v=' >> index.html;
                  echo -n $(date -r ./e_stylesheets/b_style.css +%Y%m%d%H%M%S) >> index.html;
                                                                 echo '"/>' >> index.html;
echo -n '<link rel="stylesheet" href="e_stylesheets/c_style.css?v=' >> index.html;
                  echo -n $(date -r ./e_stylesheets/c_style.css +%Y%m%d%H%M%S) >> index.html;
                                                                 echo '"/>' >> index.html;
echo -n '<link rel="stylesheet" href="e_stylesheets/d_style.css?v=' >> index.html;
                  echo -n $(date -r ./e_stylesheets/d_style.css +%Y%m%d%H%M%S) >> index.html;
                                                                 echo '"/>' >> index.html;
echo -n '<link rel="stylesheet" href="e_stylesheets/e_style.css?v=' >> index.html;
                  echo -n $(date -r ./e_stylesheets/e_style.css +%Y%m%d%H%M%S) >> index.html;
                                                                 echo '"/>' >> index.html;

echo >> index.html;

echo -n '<meta name="last-build" content="' >> index.html;
   echo -n $(date -u +%Y-%m-%dT%H:%M:%SZ) >> index.html;
                             echo '">' >> index.html;

echo >> index.html;

echo '<body>' >> index.html;
echo '<div id="utilityLayer0"           ></div>' >> index.html;
echo '<div id="utilityLayer1"           ></div>' >> index.html;
echo '<div id="interfaceLayer"          ></div>' >> index.html;
echo '<div id="gridLayer"               ></div>' >> index.html;
echo '<div id="visualizationsLayer"     ></div>' >> index.html;
echo '<div id="mouseIconLayer"          ></div>' >> index.html;
echo '<div id="interfaceShelf"          ></div>' >> index.html;
echo '<div id="documentSizingBlock" style="position: absolute; top: 10000000px; left: 10000000px; width: 1px; height: 1px;"></div>' >> index.html;
echo '<div id="scripts">' >> index.html;
echo 'const' > ./h_hdub/z_hwObject/a_hwObject.js;
echo 'h_hdub = {};' >> ./h_hdub/z_hwObject/a_hwObject.js;
find h_hdub/a_programFunctions/ | sed "s/$/ = {};/g" | sed "s/\.js = {};//g" | tr '/' '.' | sed "s/\. / /g" > pasteFirst;
find h_hdub/a_programFunctions/ | sed "s/^.*_/ = /g" | sed "s/\.js/;/g" > pasteLast;
paste pasteFirst pasteLast | sed "s/;.*$/;/g" >> ./h_hdub/z_hwObject/a_hwObject.js;
rm pasteFirst pasteLast;
sed -i "s/\.\././g" ./h_hdub/z_hwObject/a_hwObject.js;
sed -i '/js\.swp/d' ./h_hdub/z_hwObject/a_hwObject.js;
find h_hdub -type f | sed '/js\.swp/d' | sed -n '/\.js/p' >> chalk_tmp_filenames; find h_hdub -type f | sed '/js\.swp/d' | sed -n '/\.js/p' | sed 's/^/echo ?v=$(date -r /' | sed 's/$/ +"%Y%m%d%H%M%S") >> chalk_tmp_versions;/' > chalk_tmp_versionControl; chmod 755 chalk_tmp_versionControl; . ./chalk_tmp_versionControl; paste -d '' chalk_tmp_filenames chalk_tmp_versions | sed 's/^/<script src=".\//g' | sed 's/$/"><\/script>/g' >> index.html; rm chalk_tmp_filenames chalk_tmp_versions chalk_tmp_versionControl;
echo '<script src="./h_hdub/d_handlers/c_initialization/c_insertNewWindow.js"></script>' >> index.html;
echo '</div>' >> index.html;
echo '</body>' >> index.html;
echo '</html>' >> index.html;




## When we use insertWindow, we are actually writing the index.html file again to that new window.


echo 'function insertNewWindow(keyInfo,refresh) {' > c_insertNewWindow.js;
echo 'const' >> c_insertNewWindow.js;
echo 'e      = keyInfo[0],' >> c_insertNewWindow.js;
echo 'kC     = keyInfo[1],' >> c_insertNewWindow.js;
echo 'cC     = keyInfo[2],' >> c_insertNewWindow.js;
echo 'shift  = keyInfo[3],' >> c_insertNewWindow.js;
echo 'ctrl   = keyInfo[4],' >> c_insertNewWindow.js;
echo 'alt    = keyInfo[5];' >> c_insertNewWindow.js;
echo 'const wH = window.innerHeight;' >> c_insertNewWindow.js;
echo 'const wW = window.innerwidth;' >> c_insertNewWindow.js;
echo 'const fileContentsReference =' >> c_insertNewWindow.js;
echo -n "\`" >> c_insertNewWindow.js;
cat index.html >> c_insertNewWindow.js;
echo -n "\`;" >> c_insertNewWindow.js;
echo 'let iS = 192;' >> c_insertNewWindow.js;
echo '/*    I    */ if (kC ==  73 && cC ==  73) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${window.screenLeft - iS},resizable=yes,noopener=no`); }' >> c_insertNewWindow.js;
echo '/*    O    */ if (kC ==  79 && cC ==  79) { window.children[window.children.length] = window.open("","_blank",`height=${iS + 1},width=${window.innerWidth + 1},top=${window.screenTop + window.innerHeight},left=${window.screenLeft},resizable=yes,noopener=no`); }' >> c_insertNewWindow.js;
echo '/*    A    */ if (kC ==  65 && cC ==  65) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${window.screenLeft + window.innerWidth},resizable=yes,noopener=no`); }' >> c_insertNewWindow.js;
echo '/*    i    */ if (kC ==  73 && cC == 105) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=0,resizable=yes,noopener=no`); }' >> c_insertNewWindow.js;
echo '/*    o    */ if (kC ==  79 && cC == 111) { window.children[window.children.length] = window.open("","_blank",`height=${iS + 1},width=${window.innerWidth + 1},top=${window.screenTop - iS},left=${window.screenLeft},resizable=yes,noopener=no`); }' >> c_insertNewWindow.js;
echo '/*    a    */ if (kC ==  65 && cC ==  97) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${screen.width - iS},resizable=yes,noopener=no`); }' >> c_insertNewWindow.js;
echo '/*    n    */ if (kC ==  78 && cC == 110) { window.children[window.children.length] = window.open("","_blank"); }' >> c_insertNewWindow.js;
echo '/* REFRESH */ if (refresh==true)          { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight},width=${window.innerWidth},top=${window.screenTop},left=${window.screenLeft},resizable=yes,noopener=no`); window.close(); }' >> c_insertNewWindow.js;
echo 'window.children[window.children.length - 1].document.write(fileContentsReference);' >> c_insertNewWindow.js;
echo 'try {' >> c_insertNewWindow.js;
echo 'for (let j = 0; j < window.parents.length; j++) {' >> c_insertNewWindow.js;
echo 'window.parents[j].children[window.parents[j].children.length] = window.children[window.children.length - 1];' >> c_insertNewWindow.js;
echo '}' >> c_insertNewWindow.js;
echo '} catch {}' >> c_insertNewWindow.js;
echo '}' >> c_insertNewWindow.js;
mv c_insertNewWindow.js ./h_hdub/d_handlers/c_initialization/;




## Build the helpful tree
 





## This is a handy header and footer pair that will allow in-program tutorials or start-up files to be made easily.

head -n -3 index.html > b_0_topClip;
echo "<script>" >> b_0_topClip;
echo "utilityLayer0.innerHTML = " >> b_0_topClip;
echo '`' >> b_0_topClip;




## Also make up a piece of data for an in-program button that will save start-up files.


echo 'h_hdub.c_startup = {};' > h_hdub/z_hwObject/c_startup.js;
echo 'h_hdub.c_startup.a_note = "This data allow entry for your own startup file metadata in c_customMetaData";' >> h_hdub/z_hwObject/c_startup.js;
echo 'h_hdub.c_startup.b_first = `' >> h_hdub/z_hwObject/c_startup.js;
head -3 index.html >> h_hdub/z_hwObject/c_startup.js;
echo '`;' >> h_hdub/z_hwObject/c_startup.js;
echo >> h_hdub/z_hwObject/c_startup.js;
echo 'h_hdub.c_startup.c_customMetaDataHere = ``;' >> h_hdub/z_hwObject/c_startup.js;
echo >> h_hdub/z_hwObject/c_startup.js;
echo 'h_hdub.c_startup.d_second = `' >> h_hdub/z_hwObject/c_startup.js;
head -n -3 index.html | tail -n +4 >> h_hdub/z_hwObject/c_startup.js;
echo "<script>" >> h_hdub/z_hwObject/c_startup.js;
echo 'utilityLayer0.innerHTML = \`' >> h_hdub/z_hwObject/c_startup.js;
echo '`;' >> h_hdub/z_hwObject/c_startup.js;
echo >> h_hdub/z_hwObject/c_startup.js;
echo 'h_hdub.c_startup.e_third = `' >> h_hdub/z_hwObject/c_startup.js;
echo '\`;' >> h_hdub/z_hwObject/c_startup.js;
cat b_1_bottomClip | tail -n +2 >> h_hdub/z_hwObject/c_startup.js;
echo '`;' >> h_hdub/z_hwObject/c_startup.js;




## HERE WE ARE SETTING SOME VERSION STRINGS IN THE INJECTED HTML STUFF OF THE SHELF MENU


find h_hdub/c_shelfMenu/a_images/a_tab1/0_folderSelectors/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/a_tab1\/0_folderSelectors\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/b_tab2/0_folderSelectors/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/b_tab2\/0_folderSelectors\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/c_tab3/0_folderSelectors/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/c_tab3\/0_folderSelectors\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/d_tab4/0_folderSelectors/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/d_tab4\/0_folderSelectors\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/e_tab5/0_folderSelectors/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/e_tab5\/0_folderSelectors\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/f_tab6/0_folderSelectors/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/f_tab6\/0_folderSelectors\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;

find h_hdub/c_shelfMenu/a_images/a_tab1/1_folderBackgrounds/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/a_tab1\/1_folderBackgrounds\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/b_tab2/1_folderBackgrounds/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/b_tab2\/1_folderBackgrounds\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/c_tab3/1_folderBackgrounds/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/c_tab3\/1_folderBackgrounds\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/d_tab4/1_folderBackgrounds/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/d_tab4\/1_folderBackgrounds\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/e_tab5/1_folderBackgrounds/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/e_tab5\/1_folderBackgrounds\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/f_tab6/1_folderBackgrounds/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/f_tab6\/1_folderBackgrounds\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;

find h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/a_tab1\/a_folder1\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/b_tab2/a_folder1/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/b_tab2\/a_folder1\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/c_tab3\/a_folder1\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/d_tab4/a_folder1/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/d_tab4\/a_folder1\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/e_tab5/a_folder1/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/e_tab5\/a_folder1\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/f_tab6/a_folder1/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/f_tab6\/a_folder1\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;

find h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/a_tab1\/b_folder2\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/b_tab2/b_folder2/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/b_tab2\/b_folder2\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/c_tab3\/b_folder2\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/d_tab4/b_folder2/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/d_tab4\/b_folder2\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/e_tab5/b_folder2/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/e_tab5\/b_folder2\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;
find h_hdub/c_shelfMenu/a_images/f_tab6/b_folder2/ -type f > menu_temp; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/[^"]*"\//' > menu_temp_1; cat menu_temp | sed 's/\//\\\//g' | sed 's/$/?v=/' > menu_temp_2; cat menu_temp | sed 's/^/date -r /' | sed 's/$/ +"%Y%m%d%H%M%S" >> menu_versions;/' > menu_stamp_script; . ./menu_stamp_script; paste -d '' menu_temp_1 menu_temp_2 menu_versions | sed "s/^/sed -i 's\//" | sed "s/$/@\/' h_hdub\/c_shelfMenu\/b_html\/f_tab6\/b_folder2\/*;/" | sed 's/@/"/' > menu_temp_script; chmod 755 menu_temp_script; . ./menu_temp_script; rm menu_temp_script menu_temp menu_temp_1 menu_temp_2 menu_versions menu_stamp_script;




## THIS IS FOR NEOCITIES, DIRECT TO PROGRAM


cp index.html not_found.html;




## Here we are setting the permissions completely, which will help when it comes to compressing the file.


find . -type f -exec chmod 644 {} +;
find . -type d -exec chmod 755 {} +;
echo "... all done! index.html, c_insertNewWindow.js, and t_treeDiagram.html are revised and all permissions are set ...";
