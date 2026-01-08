#!/bin/bash

echo "findFileList =" > "./find -type f.js";
echo "\`" >> "./find -type f.js";
find ../ -type f | sed '/\.swp/d' | \
                   sed '/\.git/d' | \
                   sed '/^\.\.\/$/d' | \
                   sed '/^\.\.\/\./d' | \
                   sed '/'$(echo "$(pwd | sed 's/^.*\///g')")'/d' | \
                   sed 's/\.\.\///g' | \
                   sed 's/^/..\//g' >> "./find -type f.js";
echo "\`;" >> "./find -type f.js";
echo >> "./find -type f.js";

echo "workingDirectory = \"$(pwd | sed 's/\/[^\/]*$//')\";" > pwd.js
