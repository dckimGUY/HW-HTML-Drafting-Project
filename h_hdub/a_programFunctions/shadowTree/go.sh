#!/bin/bash

#
# Make a directory in the target base directory
# Put go.sh and shadowTree.html into there
# Run go.sh to make the file list
# shadowTree now reads that file list.
#

echo "findFileList =" > "./find -type f.js";
echo "\\\`" >> "./find -type f.js";
find ../ -type f | sed '/\.swp/d' | \
                   sed '/\.git/d' | \
                   sed '/^\.\.\/$/d' | \
                   sed '/^\.\.\/\./d' | \
                   sed '/'$(echo "$(pwd | sed 's/^.*\///g')")'/d' | \
                   sed 's/\.\.\///g' | \
                   sed 's/^/..\//g' >> "./find -type f.js";
echo "\\\`;" >> "./find -type f.js";
echo >> "./find -type f.js";

echo "workingDirectory = \"$(pwd | sed 's/\/[^\/]*$//')\";" > pwd.js
