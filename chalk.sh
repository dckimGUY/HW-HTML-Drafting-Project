#!/bin/bash

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

find h_hdub -type f | sed '/js\.swp/d' | sed -n '/\.js/p' >> chalk_tmp_filenames; 
find h_hdub -type f | sed '/js\.swp/d' | sed -n '/\.js/p' | sed 's/^/echo ?v=$(date -r /' | sed 's/$/ +"%Y%m%d%H%M%S") >> chalk_tmp_versions;/' > chalk_tmp_versionControl; 
chmod 755 chalk_tmp_versionControl; . ./chalk_tmp_versionControl; 
paste -d '' chalk_tmp_filenames chalk_tmp_versions | sed 's/^/<script src=".\//g' | sed 's/$/"><\/script>/g' >> workingVersion.html; 
rm chalk_tmp_filenames chalk_tmp_versions chalk_tmp_versionControl;

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

# --- START OF ASSET & LOGIC OPTIMIZATION ---
echo "Optimizing bundle.js for Production..."
IMG_DIR="temp_assets_cache"
mkdir -p "$IMG_DIR"

# Extract unique PNGs/GIFs
grep -oE 'data:image/(png|gif);base64,[A-Za-z0-9+/=]*' bundle.js | sort | uniq > asset_list.txt

if [ -s asset_list.txt ]; then
    echo "Squeezing Base64 assets..."
    i=0
    while read -r old_b64; do
        ((i++))
        ext="png"; [[ "$old_b64" == *"image/gif"* ]] && ext="gif"
        echo "$old_b64" | sed -E 's/data:image\/(png|gif);base64,//' | base64 -d > "$IMG_DIR/asset_$i.$ext"
    done < asset_list.txt

    # Parallel squeeze using 8 threads on your i7-6700HQ
    find "$IMG_DIR" -name "*.png" | xargs -P 8 -I {} oxipng -o 4 --strip safe {} 2>/dev/null
    find "$IMG_DIR" -name "*.gif" | xargs -P 8 -I {} gifsicle -O3 --lossy=80 {} -o {} 2>/dev/null

    # Build the mass-replacement map
    echo "#!/usr/bin/sed -f" > replace.sed
    i=0
    while read -r old_b64; do
        ((i++))
        ext="png"; [[ "$old_b64" == *"image/gif"* ]] && ext="gif"
        new_raw=$(base64 -w 0 "$IMG_DIR/asset_$i.$ext")
        new_b64="data:image/$ext;base64,$new_raw"
        echo "s#$old_b64#$new_b64#g" >> replace.sed
    done < asset_list.txt

    # Apply the swap and update bundle.js
    sed -f replace.sed bundle.js > bundle_opt.js
    mv bundle_opt.js bundle.js
fi

# Final Terser pass to clear experimental vestiges and whitespace
terser bundle.js -o bundle.js -c

# Clean up build artifacts and include init script in the bundle
cat ./h_hdub/d_handlers/c_initialization/c_insertNewWindow.js >> bundle.js; 
rm -rf "$IMG_DIR" asset_list.txt replace.sed
# --- END OF OPTIMIZATION ---

cat y_header.txt > index.html;

echo '<style>' >> index.html;
cleancss ./e_stylesheets/a_style.css >> index.html;
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
# New Split-File model for index.html
echo '<script src="bundle.js"></script>' >> index.html;
echo '</div>' >> index.html;
echo '</body>' >> index.html;
echo '</html>' >> index.html;

## Here is the 'CHALKING-UP' of the single file model 'hdubPixelArtEdition.html'
cat y_header.txt > hdubPixelArtEdition.html;
echo '<style>' >> hdubPixelArtEdition.html;
cleancss ./e_stylesheets/a_style.css >> hdubPixelArtEdition.html;
echo '</style>' >> hdubPixelArtEdition.html;
echo >> hdubPixelArtEdition.html;
echo -n '<meta name="last-build" content="' >> hdubPixelArtEdition.html;
echo -n $(date -u +%Y-%m-%dT%H:%M:%SZ) >> hdubPixelArtEdition.html;
echo '">' >> hdubPixelArtEdition.html;
echo >> hdubPixelArtEdition.html;
echo '<body>' >> hdubPixelArtEdition.html;
echo '<div id="utilityLayer0"           ></div>' >> hdubPixelArtEdition.html;
echo '<div id="utilityLayer1"           ></div>' >> hdubPixelArtEdition.html;
echo '<div id="interfaceLayer"          ></div>' >> hdubPixelArtEdition.html;
echo '<div id="gridLayer"               ></div>' >> hdubPixelArtEdition.html;
echo '<div id="visualizationsLayer"     ></div>' >> hdubPixelArtEdition.html;
echo '<div id="mouseIconLayer"          ></div>' >> hdubPixelArtEdition.html;
echo '<div id="interfaceShelf"          ></div>' >> hdubPixelArtEdition.html;
echo '<div id="documentSizingBlock" style="position: absolute; top: 10000000px; left: 10000000px; width: 1px; height: 1px;"></div>' >> hdubPixelArtEdition.html;
echo '<div id="scripts">' >> hdubPixelArtEdition.html;
echo '<script>' >> hdubPixelArtEdition.html;
cat ./bundle.js >> hdubPixelArtEdition.html;
echo '</script>' >> hdubPixelArtEdition.html;
echo '</div>' >> hdubPixelArtEdition.html;
echo '</body>' >> hdubPixelArtEdition.html;
echo '</html>' >> hdubPixelArtEdition.html;

# rm bundle.js 2>/dev/null; # Retained so index.html can load it

## THIS IS FOR NEOCITIES, DIRECT TO PROGRAM

cp index.html not_found.html;

## Final permissions and feedback

find . -type f -exec chmod 644 {} +;
find . -type d -exec chmod 755 {} +;
echo "... all done! index.html (Optimized Bundle Link), hdubPixelArtEdition.html (Single File), workingVersion.html (Dev), and permissions are set ...";
