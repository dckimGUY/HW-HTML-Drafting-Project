## This bit here makes the working version using the individual files. Then it's easy to change the code around.



cat y_header.txt > workingVersion.html;
echo -n '<link rel="stylesheet" href="e_stylesheets/a_style.css?v=' >> workingVersion.html;
                  echo -n $(date -r ./e_stylesheets/a_style.css +%Y%m%d%H%M%S) >> workingVersion.html;
                                                                 echo '"/>' >> workingVersion.html;
echo >> workingVersion.html;
echo -n '<meta name="last-build" content="' >> workingVersion.html;
   echo -n $(date -u +%Y-%m-%dT%H:%M:%SZ) >> workingVersion.html;
                             echo '">' >> workingVersion.html;
echo >> workingVersion.html;
echo '<body>' >> workingVersion.html;
echo '<div id="utilityLayer0"           ></div>' >> workingVersion.html;
echo '<div id="utilityLayer1"           ></div>' >> workingVersion.html;
echo '<div id="interfaceLayer"          ></div>' >> workingVersion.html;
echo '<div id="gridLayer"               ></div>' >> workingVersion.html;
echo '<div id="visualizationsLayer"     ></div>' >> workingVersion.html;
echo '<div id="mouseIconLayer"          ></div>' >> workingVersion.html;
echo '<div id="interfaceShelf"          ></div>' >> workingVersion.html;
echo '<div id="documentSizingBlock" style="position: absolute; top: 10000000px; left: 10000000px; width: 1px; height: 1px;"></div>' >> workingVersion.html;
echo '<div id="scripts">' >> workingVersion.html;
find h_hdub -type f | sed '/js\.swp/d' | sed -n '/\.js/p' >> chalk_tmp_filenames; find h_hdub -type f | sed '/js\.swp/d' | sed -n '/\.js/p' | sed 's/^/echo ?v=$(date -r /' | sed 's/$/ +"%Y%m%d%H%M%S") >> chalk_tmp_versions;/' > chalk_tmp_versionControl; chmod 755 chalk_tmp_versionControl; . ./chalk_tmp_versionControl; paste -d '' chalk_tmp_filenames chalk_tmp_versions | sed 's/^/<script src=".\//g' | sed 's/$/"><\/script>/g' >> workingVersion.html; rm chalk_tmp_filenames chalk_tmp_versions chalk_tmp_versionControl;
echo '<script src="./h_hdub/d_handlers/c_initialization/c_insertNewWindow.js"></script>' >> workingVersion.html;
echo '</div>' >> workingVersion.html;
echo '</body>' >> workingVersion.html;
echo '</html>' >> workingVersion.html;




## Here is the 'CHALKING-UP' of the online program file.




echo -n "cat " > bundleMaker;
find h_hdub -type f -name '*.js' | sed "/shadowTree/d" | sed "s/^/.\//g" | tr '\n' ' ' >> bundleMaker;
echo -n " > bundle.js; " >> bundleMaker;
chmod 755 bundleMaker;
. ./bundleMaker;
rm bundleMaker;

cat y_header.txt > index.html;

echo '<style>' >> index.html;
cat ./e_stylesheets/a_style.css >> index.html;
echo '</style>' >> index.html;

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
echo '<script>' >> index.html;
cat ./bundle.js >> index.html;
echo >> index.html;
cat ./h_hdub/d_handlers/c_initialization/c_insertNewWindow.js >> index.html;
echo '</script>' >> index.html;
echo '</div>' >> index.html;
echo '</body>' >> index.html;
echo '</html>' >> index.html;

## THIS IS FOR NEOCITIES, DIRECT TO PROGRAM


cp index.html not_found.html;




## Here we are setting the permissions completely, which will help when it comes to compressing the file.


find . -type f -exec chmod 644 {} +;
find . -type d -exec chmod 755 {} +;
echo "... all done! index.html, c_insertNewWindow.js, and t_treeDiagram.html are revised and all permissions are set ...";
