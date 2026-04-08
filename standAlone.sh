#!/bin/bash

echo -n "cat " > bundleMaker;

# Filter files and build the command string
find h_hdub -type f -name '*.js' | grep -v "shadowTree" | while read -r file; do
    echo -n " <(echo '<script data-path=\"$file\">') \"$file\" <(echo ' </script>') " >> bundleMaker
done

echo " > inners.text" >> bundleMaker;
chmod +x bundleMaker;
./bundleMaker;
rm bundleMaker;


cat y_header.txt > hdubPixelArtEdition.html;
echo -n '<style data-path="e_stylesheets/a_style.css">' >> hdubPixelArtEdition.html;
cat e_stylesheets/a_style.css >> hdubPixelArtEdition.html;
echo '</style>' >> hdubPixelArtEdition.html;
echo >> hdubPixelArtEdition.html;
echo -n '<meta name="last-build" content="' >> hdubPixelArtEdition.html;
echo -n $(date -u +%Y-%m-%dT%H:%M:%SZ) >> hdubPixelArtEdition.html;
echo '">' >> hdubPixelArtEdition.html;
echo >> hdubPixelArtEdition.html;
echo '<body>' >> hdubPixelArtEdition.html;
cat storageKeys.txt >>hdubPixelArtEdition.html;
echo '<div id="utilityLayer0"           ></div>' >> hdubPixelArtEdition.html;
echo '<div id="utilityLayer1"           ></div>' >> hdubPixelArtEdition.html;
echo '<div id="interfaceLayer"          ></div>' >> hdubPixelArtEdition.html;
echo '<div id="gridLayer"               ></div>' >> hdubPixelArtEdition.html;
echo '<div id="visualizationsLayer"     ></div>' >> hdubPixelArtEdition.html;
echo '<div id="mouseIconLayer"          ></div>' >> hdubPixelArtEdition.html;
echo '<div id="interfaceShelf"          ></div>' >> hdubPixelArtEdition.html;
echo '<div id="documentSizingBlock" style="position: absolute; top: 10000000px; left: 10000000px; width: 1px; height: 1px;"></div>' >> hdubPixelArtEdition.html;
echo '<div id="scripts">' >> hdubPixelArtEdition.html;

cat inners.text >> hdubPixelArtEdition.html; 

echo '</div>' >> hdubPixelArtEdition.html;
echo '</body>' >> hdubPixelArtEdition.html;
echo '</html>' >> hdubPixelArtEdition.html;

chmod 644 hdubPixelArtEdition.html;
echo "... all done! hdubPixelArtEdition.html and permissions are set ...";
