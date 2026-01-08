function wizardq() {

if (hauptMode==1) {
hauptMode=0;
insertNewCoin([null,78,78,false,false,false]);
utilityLayer0.lastElementChild.div.innerHTML = z_wizardCode.q_wizard.b_code;
utilityLayer0.lastElementChild.anchor.style.zIndex   = '0';
utilityLayer0.lastElementChild.lastElementChild.style.overflow="visible";
utilityLayer0.lastElementChild.style.width    = '384px';
utilityLayer0.lastElementChild.dataset.width  = '384px';
utilityLayer0.lastElementChild.style.height   = '384px';
utilityLayer0.lastElementChild.dataset.height = '384px';
utilityLayer0.lastElementChild.div.style.textIndent = '0px';
utilityLayer0.lastElementChild.div.style.lineHeight = '0.5';
hauptMode=1;
} else {
insertNewCoin([null,78,78,false,false,false]);
utilityLayer0.lastElementChild.div.innerHTML = z_wizardCode.q_wizard.b_code;
utilityLayer0.lastElementChild.anchor.style.zIndex   = '0';
utilityLayer0.lastElementChild.lastElementChild.style.overflow="visible";
utilityLayer0.lastElementChild.style.width    = '384px';
utilityLayer0.lastElementChild.dataset.width  = '384px';
utilityLayer0.lastElementChild.style.height   = '384px';
utilityLayer0.lastElementChild.dataset.height = '384px';
utilityLayer0.lastElementChild.div.style.textIndent = '0px';
utilityLayer0.lastElementChild.div.style.lineHeight = '0.5';
}

interfaceLayer.style.display="none";

}
