let buzzRunning = false;

function buzzWord(method, text, fontSize, colour, delay, speed, chop, sweepTo, left, top, event, force) {
    if (force === false && buzzRunning) return;
    
    buzzRunning = true;
    const repeats = 10;
    for (let j = 0; j < repeats; j++) {
        setTimeout(() => {
            buzz(method, text, fontSize, colour, delay, speed, chop, sweepTo, left, top, event);
            if (j === repeats - 1) buzzRunning = false;
        }, 5 * j);
    }
}

function buzz(method, text, fontSize, colour, delay, speed, chop, sweepTo, left, top, event) {
    // Preserved lastKey logic
    if ((text === "x" && lastKey !== "x") || (text === "p" && lastKey !== "p")) return;

    let lefting = -window.scrollX, topping = -window.scrollY;
    if (left && top) {
        lefting = left - (window.innerWidth / 2) - window.scrollX;
        topping = top - (window.innerHeight / 2) - window.scrollY;
    } else if (event) {
        lefting = event.clientX - (window.innerWidth / 2);
        topping = event.clientY - (window.innerHeight / 2);
    }

    const origins = {
        "top left": "bottom right", "top right": "bottom left", "bottom left": "top right",
        "bottom right": "top left", "center": "center", "top": "bottom", "bottom": "top",
        "left": "right", "right": "left"
    };
    
    // Fixed: strict check for method 1 or 2
    const origin = (method === 1 || method === 2) ? (origins[sweepTo] || "center") : "center";

    const el = document.createElement("button");
    const baseOp = visualOpacity / 2;
    
    // Optimized style application
    Object.assign(el.style, {
        pointerEvents: "none", userSelect: "none", backgroundColor: "transparent", border: "0px",
        fontFamily: "dckimPixelMono", fontSize: (fontSize * 0.75) + "px", lineHeight: "1",
        color: colour, overflow: "visible", width: window.innerWidth + "px", height: window.innerHeight + "px",
        position: "fixed", left: lefting + "px", top: topping + "px", zIndex: "999999999", transformOrigin: origin
    });

    let lateDelay = 0;
    if (method === 1) { 
        el.style.transform = "scale(0)"; el.style.opacity = "0"; 
        lateDelay = delay; delay = 0; 
    } else { 
        el.style.transform = "scale(1)"; el.style.opacity = baseOp; 
    }

    el.innerHTML = text;
    document.body.append(el);

    setTimeout(() => {
        const minChop = parseInt(chop / 10);
        for (let j = chop; j >= minChop; j--) {
            setTimeout(() => {
                const ratio = j / chop;
                if (method === 0) {
                    el.style.opacity = baseOp * ratio;
                    el.style.transform = `scaleX(${ratio}) scaleY(${1 / ratio}) rotateZ(${(-360 * j) / chop}deg)`;
                } else if (method === 1) {
                    el.style.opacity = baseOp * (1 - ratio);
                    el.style.transform = `scale(${1 - ratio})`;
                } else if (method === 2) {
                    el.style.opacity = baseOp * ratio;
                    el.style.transform = `scale(${ratio})`;
                }
            }, (chop - j) * (speed / chop));
        }
        setTimeout(() => { 
            el.remove(); 
            if (typeof redraw === "function") redraw(); 
        }, speed + lateDelay + 10);
    }, delay);
}
