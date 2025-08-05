function enterWizardMaster() {

if (hauptMode==1) {
hauptMode=0;
insertNewCoin([null,78,110,false,false,false]);
utilityLayer0.lastElementChild.div.innerHTML = defaultUIasObjects;
utilityLayer0.lastElementChild.anchor.style.zIndex   = '0';
utilityLayer0.lastElementChild.main.style.overflow   = 'visible';
utilityLayer0.lastElementChild.style.width    = '320px';
utilityLayer0.lastElementChild.dataset.width  = '320px';
utilityLayer0.lastElementChild.style.height   = '320px';
utilityLayer0.lastElementChild.dataset.height = '320px';
hauptMode=1;
} else {
insertNewCoin([null,78,110,false,false,false]);
utilityLayer0.lastElementChild.div.innerHTML = defaultUIasObjects;
utilityLayer0.lastElementChild.anchor.style.zIndex   = '0';
utilityLayer0.lastElementChild.main.style.overflow   = 'visible';
utilityLayer0.lastElementChild.style.width    = '320px';
utilityLayer0.lastElementChild.dataset.width  = '320px';
utilityLayer0.lastElementChild.style.height   = '320px';
utilityLayer0.lastElementChild.dataset.height = '320px';
}

}