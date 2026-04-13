/* fMan: Optimized intermediate router for the part-focus system. */
function fMan(keyInfo) {
    function zBuzz(text) {
        if (coinFocus != null) {
            const trip = coinFocus.dataset.coinTrip;
            const textColour = window["coinColour" + trip];
            const w = parseInt(coinFocus.style.width), h = parseInt(coinFocus.style.height);
            const fontWidth = w < h ? w : h;
            const cX = parseInt(coinFocus.style.left) + w / 2;
            const cY = parseInt(coinFocus.style.top) + h / 2;
            buzzWord(1, text, fontWidth, textColour, 120, 120, 100, "center", cX, cY);
        }
    }

    const [e, kC, cC] = keyInfo;

    // Standard Mode Router
    if (charM == 0 && charQ1 == 0 && yank == 0 && charF == 0) {
        if (kC == 222 && cC == 39) { charQ1 = 1; charM = 0; charF = 0; }
        
        // Uppercase Triggers (A-Z)
        if (kC == 81 && cC == 81) wrapDocument();
        if (kC == 87 && cC == 87) duplicateU();
        if (kC == 69 && cC == 69) enterPageEchelon();
        if (kC == 82 && cC == 82) removeGroup();
        if (kC == 84 && cC == 84) { modeRouter(e, 8); if (lastKey == "T") assignAllColours(); }
        if (kC == 89 && cC == 89) isolateGroup();
        if (kC == 85 && cC == 85) globalUndo();
        if (kC == 80 && cC == 80) duplicateP();
        if (kC == 83 && cC == 83) deMinimis(false, lastFactor);
        if (kC == 68 && cC == 68) insertNewDuplicate(keyInfo);
        if (kC == 70 && cC == 70) { styleKey = "f"; gridToFontSize(keyInfo); lastKey = "f"; }
        if (kC == 71 && cC == 71) { curFocus = 0; modeRouter(e, 1); }
        if (kC == 90 && cC == 90) { manageTripartiteZ(0); modeRouter(e, 9); zBuzz("Z"); }
        if (kC == 88 && cC == 88) groupToPhantomLair();
        if (kC == 67 && cC == 67) { coinToCursor(keyInfo); Cur.scrollIntoView({behavior:'smooth', block: 'center', inline: 'center'}); }
        if (kC == 86 && cC == 86) { lastFlow = "colour"; reflowPerTrip(); flowVis(); }
        if (kC == 66 && cC == 66) combineStates();
        if (kC == 77 && cC == 77) { event.preventDefault();
                                    tabSelector(4);
                                    folder4Selector(1);
                                    document.getElementById("hdubSingleEntry").focus(); };

        // Lowercase Triggers (q-m)
        if (kC == 81 && cC == 113) unwrapParts();
        if (kC == 87 && cC == 119) restoreSingle();
        if (kC == 69 && cC == 101) { flipEdge(); modeRouter(e, 5); }
        if (kC == 82 && cC == 114) removeCoin();
        if (kC == 84 && cC == 116) { modeRouter(e, 8); if (lastKey == "t") swapColours(); }
        if (kC == 89 && cC == 121) isolateSingle();
        if (kC == 85 && cC == 117) singleUndo();
        if (kC == 80 && cC == 112) pasteSingle(keyInfo);
        if (kC == 83 && cC == 115) saveProject();
        if (kC == 68 && cC == 100) modeRouter(e, 6);
        if (kC == 70 && cC == 102) { charQ1 = 0; charQ2 = 0; charM = 0; charF = 1; }
        if (kC == 71 && cC == 103) { curFocus = 0; modeRouter(e, 1); }
        if (kC == 90 && cC == 122) { manageGlobalZ(0); modeRouter(e, 9); zBuzz("z"); }
        if (kC == 88 && cC == 120) deleteCoin(keyInfo);
        if (kC == 67 && cC == 99) { cursorToCoin(keyInfo); Cur.scrollIntoView({behavior:'smooth', block: 'center', inline: 'center'}); }
        if (kC == 86 && cC == 118) { lastFlow = "global"; reflowGlobal(rev, 0); flowVis(); }
        if (kC == 66 && cC == 98) severState();
        if (kC == 78 && cC == 110) { tabSelector(1); folder1Selector(1); document.getElementById("partNom").focus(); }
        if (kC == 77 && cC == 109) { charQ1 = 0; charM = 1; charF = 0; }

        // External Routers (HJKL, AION)
        if ([72, 74, 75, 76].includes(kC)) hjklRouter(keyInfo);
        if ([73, 79, 65, 78].includes(kC)) aioNRouter(keyInfo);

    } else if (charM == 1) {
        // Dynamic Hold Storage
        if (cC >= 97 && cC <= 122) {
            const char = String.fromCharCode(cC);
            Object.keys(hold).forEach(l => { if (hold[l].value == coinFocus) hold[l].value = null; });
            if (hold[char]) { spreadReference(coinFocus, hold[char]); console.log(`++ stored in "${hold[char].name}"...`); }
        }
        // Dynamic UI Storage
        if (coinFocus != null && kC == cC) {
            const char = String.fromCharCode(kC), uiKey = "hdub" + char;
            if (ui[uiKey]) {
                const val = coinFocus.lastElementChild.firstElementChild.innerHTML;
                ui[uiKey].value = val; localStorage.setItem(uiKey + '.value', val);
            }
        }
        charM = charQ1 = charQ2 = charF = 0;

    } else if (charF == 1) {
        pasteAfter = 1;
        // Dynamic PasteOut
        if (cC >= 97 && cC <= 122) {
            const char = String.fromCharCode(cC);
            if (hold[char]) pasteOut(keyInfo, hold[char].value);
        }
        // Dynamic UI Injection
        if (coinFocus != null) {
            if (kC == cC && kC != 88) {
                const uiKey = "hdub" + String.fromCharCode(kC);
                if (ui[uiKey]) coinFocus.lastElementChild.firstElementChild.innerHTML = ui[uiKey].value;
            } else if (kC == 88 && cC == 88) { coinFocus.lastElementChild.firstElementChild.innerHTML = ""; }
        }
        charM = charQ1 = charQ2 = charF = pasteAfter = 0;

    } else if (charQ1 == 1) {
        // Dynamic focusSet
        if (cC >= 97 && cC <= 122) {
            const char = String.fromCharCode(cC);
            if (hold[char]) focusSet(hold[char].value);
        }
        // Focus Toggle Logic
        if (kC == 222 && cC == 39) {
            if (curFocus == 1 && coinFocus != null) {
                curFocus = 0; coinFocus.style.outline = fA; coinFocus.style.outlineOffset = fAO;
                const trip = coinFocus.dataset.coinTrip, el = coinFocus.firstElementChild;
                const sMap = { [Ts0]:[Fs0,Cs0,Bs0,Os0], [Ts1]:[Fs1,Cs1,Bs1,Os1], [Ts2]:[Fs2,Cs2,Bs2,Os2] };
                if (sMap[trip]) [el.style.color, coinFocus.style.outlineColor, el.style.backgroundColor, el.style.opacity] = sMap[trip];
                readCoins(); recoverColouration();
                coinFocus.style.outline = fB; coinFocus.style.outlineOffset = fBO;
            } else { focusFlip(); }
        }
        charM = charQ1 = charQ2 = charF = 0;
    }
}
