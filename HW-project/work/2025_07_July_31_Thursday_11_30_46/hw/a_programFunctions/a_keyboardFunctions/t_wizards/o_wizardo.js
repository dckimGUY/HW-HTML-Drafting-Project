function wizardo() {

if (hauptMode==1) {
hauptMode=0;
insertNewCoin([null,78,110,false,false,false]);
utilityLayer0.lastElementChild.div.innerHTML = z_wizardCode.o_wizard.b_code;
utilityLayer0.lastElementChild.anchor.style.zIndex   = '0';
utilityLayer0.lastElementChild.style.width    = '384px';
utilityLayer0.lastElementChild.dataset.width  = '384px';
utilityLayer0.lastElementChild.style.height   = '384px';
utilityLayer0.lastElementChild.dataset.height = '384px';
hauptMode=1;
} else {
insertNewCoin([null,78,110,false,false,false]);
utilityLayer0.lastElementChild.div.innerHTML = z_wizardCode.o_wizard.b_code;
utilityLayer0.lastElementChild.anchor.style.zIndex   = '0';
utilityLayer0.lastElementChild.style.width    = '384px';
utilityLayer0.lastElementChild.dataset.width  = '384px';
utilityLayer0.lastElementChild.style.height   = '384px';
utilityLayer0.lastElementChild.dataset.height = '384px';
}

interfaceLayer.style.display="none";

}
