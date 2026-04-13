document.addEventListener("mousewheel", (event) => {
    const wheelUp = event.wheelDelta > 0;

    if (coinFocus != null) {
        coinFocus.lastElementChild.firstElementChild = coinFocus.lastElementChild.firstElementChild;
    }

    // 1. LEVEL RANGE (LVL1 - LVL20)
    for (let j = 1; j < 21; j++) {
        if (event.target.id == `LVL${j}`) {
            event.preventDefault(); event.stopPropagation();
            wheelUp ? layerRight() : layerLeft();
            loadSidebar1();
            return;
        }
    }

    // 2. STATE TRIGGERS (Functionally identical list)
    const stateTriggers = ["popStyle1","popStyle2","popStyle3","activeStateEdit","statename","stateFrame","firstFrame","stateFrameLeft","stateFrameRight","lastFrame","stateCodeCopy","codeOutput","folder51","stateDel","stateIns","animatorBar","frameNumber1","frameBackward","frameForward","skipBack","skipAhead","skipToStart","skipToEnd","leftBumper","rightBumper"];
    if (stateTriggers.includes(event.target.id)) {
        event.preventDefault(); event.stopPropagation();
        const steps = event.shiftKey ? 5 : 1;
        for (let i = 0; i < steps; i++) wheelUp ? nextState() : previousState();
        return;
    }

    // 3. STATE TIMING
    if (event.target.id == "stateTiming") {
        event.preventDefault(); event.stopPropagation();
        let increment = (event.shiftKey && !event.ctrlKey) ? 100 : 10;
        if (event.ctrlKey) increment = 1;
        let val = parseInt(document.getElementById("stateTiming").innerText) + (wheelUp ? increment : -increment);
        if (val < 0) val = 0;
        document.getElementById("stateTiming").innerText = val;
        localStorage.setItem("stateTiming", val);
        return;
    }

    // 4. HDUB OVERLAY
    if (event.target.id == "hdubOverlay" || (event.target.dataset && event.target.dataset.hdubOverlay == "scroll")) {
        event.preventDefault(); event.stopPropagation();
        wheelUp ? ui.hdubSheetTemplate4x.ref.value++ : ui.hdubSheetTemplate4x.ref.value--;
        displayDemo();
        const buzzVals = { '1': "10x", '2': "8x", '3': "6x", '4': "5x" };
        const curVal = document.getElementById("hdubSheetTemplate4x").value;
        if (buzzVals[curVal]) {
            buzzWord(0, buzzVals[curVal], 512, document.getElementById("coin72275").value, 400, 300, 100, "center");
        }
        return;
    }

    // 5. SITEMAP & NAVUPSCALE
    if (event.target == document.getElementById("siteMapCanvas")) {
        event.preventDefault(); event.stopPropagation();
        wheelUp ? zoomSiteMapIn() : zoomSiteMapOut();
        drawSiteMap();
        return;
    }

    if (event.target == document.getElementById("navUpscale")) {
        event.preventDefault(); event.stopPropagation();
        let val = parseInt(document.getElementById("navUpscale").innerText) + (wheelUp ? 1 : -1);
        if (val < 1) val = 1; if (val > 100) val = 100;
        document.getElementById("navUpscale").innerText = val;
        localStorage.setItem("navUpscale", val);
        return;
    }

    // 6. PART X / Y / W / H (Functionally identical step logic)
    const parts = ["partX", "partY", "partW", "partH"];
    if (parts.includes(event.target.id)) {
        event.preventDefault(); event.stopPropagation();
        const id = event.target.id;
        let inc = 2;
        if (event.shiftKey && event.ctrlKey) inc = mouseIncrement;
        else if (event.ctrlKey) inc = T;
        else if (event.shiftKey) inc = 1;

        let ref = ui[id].ref;
        ref.value = wheelUp ? (parseInt(ref.value) - inc) : (parseInt(ref.value) + inc);
        if (parseInt(ref.value) < (event.shiftKey && !event.ctrlKey ? 1 : inc)) {
            ref.value = (event.shiftKey && !event.ctrlKey ? 1 : inc);
        }

        if (coinFocus != null) {
            const prop = id === "partX" ? "left" : id === "partY" ? "top" : id === "partW" ? "width" : "height";
            coinFocus.style[prop] = coinFocus.dataset[prop] = parseInt(ref.value) + "px";
            updateInfoShelf(); redraw();
        }
        return;
    }

    // 7. PHANTOM LAIR
    if (event.target == document.getElementById("phantomLair") || event.target == document.getElementById("phantomFlip") || (event.target.dataset && event.target.dataset.lair == "true")) {
        event.preventDefault(); event.stopPropagation();
        let op = parseFloat(thePhantomLair.style.opacity) || 0;
        op = wheelUp ? op + 0.01 : op - 0.01;
        if (op < 0) op = 0; if (op > 0.35) op = 0.35;
        thePhantomLair.style.opacity = op;
        localStorage.setItem("thePhantomLairOpacity", op);
        return;
    }

    // 8. LARGE BLOCK: LAYERS & COINS (Restored every reference)
    if (
        event.target == document.getElementById("pageDescription") || event.target == document.getElementById("projectName") ||
        event.target == document.getElementById("folder12") || 
        [49592, 54398, 77155, 59760, 64291, 70038, 77671].some(n => event.target == document.getElementById("coin" + n)) ||
        Array.from({length: 25}, (_, i) => i + 1).some(n => event.target == document.getElementById("setLayer" + n))
    ) {
        event.preventDefault(); event.stopPropagation();
        wheelUp ? layerRight() : layerLeft();
        loadSidebar1();
        return;
    }

    // 9. FACTOR SWITCHING (Save buttons & Headers)
    if (
        ["clipCSS", "clipHTML", "clipCODE", "textFlow", "folder42"].some(id => event.target == document.getElementById(id)) ||
        [200, 300, 500, 800, 1000, 1200, 1500, 1800].some(n => event.target == document.getElementById("save" + n)) ||
        [0, 1, 2, 3, 4].some(n => event.target == document.getElementById("header" + n) || event.target == document.getElementById("footer" + n))
    ) {
        event.preventDefault(); event.stopPropagation();
        const f = ["1", "(100/320)", "(100/500)", "(100/768)", "(100/1000)", "(100/1280)", "(100/1536)", "(100/2000)"];
        let i = f.indexOf(lastFactor);
        if (!wheelUp) { lastFactor = f[i + 1] || f[f.length - 1]; } 
        else { lastFactor = f[i - 1] || f[0]; }
        localStorage.setItem("lastFactor", lastFactor);
        updateInfoShelf();
        return;
    }

    // 10. COLORS & BUTTON SCALE (Restored indices 0-9 and 11-18)
    const scaleBtn = document.getElementById("buttonScale");
    if (
        event.target == document.getElementById("readButtonBack") || event.target == document.getElementById("folder31") ||
        [1,2,3,4,5,6,7,8,9].some(n => event.target == document.getElementById("navPoint" + n)) ||
        [0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18].some(n => event.target == scaleBtn.children[n]) ||
        event.target == document.getElementById("popColours") || event.target == document.getElementById("popButton") ||
        event.target == document.getElementById("ringButton") || event.target == document.getElementById("yourButtonIsHere").firstElementChild
    ) {
        event.preventDefault(); event.stopPropagation();
        wheelUp ? cycleColoursForward() : cycleColoursBackward();
        drawButton7();
        return;
    }

    // 11. ANIMATOR DIV & FRAME
    if (event.target == document.getElementById("animatorDiv")) {
        event.preventDefault(); event.stopPropagation();
        let el = document.getElementById("animationTiming");
        el.value = Math.max(5, parseInt(el.value) + (wheelUp ? 5 : -5));
        setupTheAnimator();
        localStorage.setItem("animatorTiming", el.value);
        return;
    }

    if (event.target == ui.frameNumber.ref) {
        event.preventDefault(); event.stopPropagation();
        let val = parseInt(ui.frameNumber.ref.value) + (wheelUp ? 1 : -1);
        if (val > imageRollArray.length) val = imageRollArray.length;
        if (val < 1) val = 1;
        ui.frameNumber.ref.value = val;
        setupTheAnimator();
        return;
    }

    // 12. STYLE MENU (Looping every reference)
    ["styleFG","styleBG","styleOL","shadowRadius7","shadowRadius8","shadowRadius9","shadowRadius4","shadowRadius5","shadowRadius6","shadowRadius1","shadowRadius2","shadowRadius3","indentLine","fontShadow","charWord","fontSize","textAlignLeft","textAlignCenter","textAlignRight","outlineSize","outlineStyle","padding","opacity"].forEach((name) => {
        if (event.target == styleMenu[name].ref) {
            event.preventDefault(); event.stopPropagation();
            if (coinFocus != null) styleMenu[name].mousewheel();
        }
    });

    if (event.buttons === 4) event.preventDefault();
}, { passive: false });

// RESTORED STYLE FUNCTIONS
styleMenu.shadowRadius7.mousewheel = styleMenu.shadowRadius8.mousewheel = styleMenu.shadowRadius9.mousewheel = 
styleMenu.shadowRadius4.mousewheel = styleMenu.shadowRadius5.mousewheel = styleMenu.shadowRadius6.mousewheel = 
styleMenu.shadowRadius1.mousewheel = styleMenu.shadowRadius2.mousewheel = styleMenu.shadowRadius3.mousewheel = function() {
    const up = event.wheelDelta > 0;
    const { shiftKey: s, ctrlKey: c, altKey: a } = event;
    if (!s && !c && !a) { styleKey = "r"; kC = up ? 107 : 109; cC = up ? 43 : 45; borderRadiusTuner(); }
    else if (s && !c && !a) { styleKey = "u"; kC = up ? 107 : 109; cC = up ? 43 : 45; boxShadowTuner(); }
    else if (!s && c && !a) { styleKey = "u"; kC = up ? 106 : 111; cC = up ? 42 : 47; boxShadowTuner(); }
    else if (!s && !c && a) { styleKey = "u"; kC = up ? 110 : 96;  cC = up ? 46 : 48; boxShadowTuner(); }
};

styleMenu.indentLine.mousewheel = function() {
    const el = coinFocus.lastElementChild.firstElementChild;
    if (!event.shiftKey) {
        if (el.style.textIndent == "") el.style.textIndent = "0em";
        el.style.textIndent = (parseFloat(el.style.textIndent) + (wheelUp ? 0.05 : -0.05)) + "em";
    } else {
        if (el.style.lineHeight == "") el.style.lineHeight = "1em";
        el.style.lineHeight = (parseFloat(el.style.lineHeight) + (wheelUp ? 0.01 : -0.01)) + "em";
    }
};

styleMenu.charWord.mousewheel = function() {
    const el = coinFocus.lastElementChild.firstElementChild;
    if (!event.shiftKey) {
        if (!el.style.letterSpacing) el.style.letterSpacing = "0em";
        el.style.letterSpacing = (parseFloat(el.style.letterSpacing) + (wheelUp ? 0.001 : -0.001)) + "em";
    } else {
        if (el.style.wordSpacing == "") el.style.wordSpacing = "1em";
        el.style.wordSpacing = (parseFloat(el.style.wordSpacing) + (wheelUp ? 0.02 : -0.02)) + "em";
    }
};

styleMenu.fontSize.mousewheel = function() {
    let upSize = event.shiftKey ? 0.1 : 1;
    let target = coinFocus.lastElementChild.lastElementChild;
    let cur = parseFloat(target.style.fontSize) || 16;
    target.style.fontSize = (wheelUp ? cur + upSize : cur - upSize) + "px";
};

styleMenu.outlineSize.mousewheel = function() {
    const el = coinFocus.lastElementChild;
    let change = event.ctrlKey ? 0.1 : 0.5;
    if (el.style.outline == "") el.style.outline = "black solid 2px";
    if (!el.style.outlineOffset) el.style.outlineOffset = "0px";
    if (!event.shiftKey) {
        el.style.outlineWidth = (parseFloat(el.style.outlineWidth) + (wheelUp ? change : -change)) + "px";
    } else {
        el.style.outlineOffset = (parseFloat(el.style.outlineOffset) + (wheelUp ? change : -change)) + "px";
    }
};

styleMenu.padding.mousewheel = function() {
    const el = coinFocus.lastElementChild.firstElementChild;
    let change = event.ctrlKey ? 5 : 1;
    if (el.style.padding == "") el.style.padding = "0px";
    if (!event.shiftKey) {
        el.style.paddingLeft = el.style.paddingRight = (parseFloat(el.style.paddingLeft) + (wheelUp ? change : -change)) + "px";
    } else {
        el.style.paddingTop = el.style.paddingBottom = (parseFloat(el.style.paddingTop) + (wheelUp ? change : -change)) + "px";
    }
};

styleMenu.opacity.mousewheel = function() {
    const el = coinFocus.lastElementChild;
    if (el.style.opacity == "") el.style.opacity = 1;
    let change = event.shiftKey ? 0.01 : (event.ctrlKey ? 0.1 : 0.05);
    el.style.opacity = parseFloat(el.style.opacity) + (wheelUp ? change : -change);
};
