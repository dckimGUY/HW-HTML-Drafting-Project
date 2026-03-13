function allAnimBlocks() {
setTimeout(() => { stepStateForward(); }, 1);
setTimeout(() => { stepStateBackward(); }, 100);
setTimeout(() => { animStateForward(); }, 200);
setTimeout(() => { animStateBackward(); }, 300);
setTimeout(() => { loopState(); }, 400);
setTimeout(() => { animStop(); }, 500);
setTimeout(() => { animPause(); }, 600);
setTimeout(() => { animResume(); }, 700);
setTimeout(() => { rateUp(); }, 800);
setTimeout(() => { rateDown(); }, 900);
buzzWord(0,'the WORKS',256,'magenta',1000,200,100,'top','','');
}