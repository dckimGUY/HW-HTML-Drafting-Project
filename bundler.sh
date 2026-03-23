## This is the meagre bundling operation here.
echo -n "cat " > bundleMaker;
find h_hdub -type f -name '*.js' | sed "/shadowTree/d" | sed "s/^/.\//g" | tr '\n' ' ' >> bundleMaker;
echo -n " > bundle.js; " >> bundleMaker;
chmod 755 bundleMaker;
. ./bundleMaker;
rm bundleMaker;
