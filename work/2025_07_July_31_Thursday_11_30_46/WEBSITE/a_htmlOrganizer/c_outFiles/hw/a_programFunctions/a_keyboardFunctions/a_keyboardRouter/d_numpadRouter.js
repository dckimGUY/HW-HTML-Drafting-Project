function numpadRouter(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (hauptMode==0||mode==0) {

constructionTuner(keyInfo);

} else if (hauptMode==1&&mode!=0) {

if (coinFocus!=0) {
styleTuner(keyInfo);
}

}

}
