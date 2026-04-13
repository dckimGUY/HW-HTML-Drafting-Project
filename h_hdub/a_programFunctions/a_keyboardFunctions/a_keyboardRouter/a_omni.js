const omni = (function() {
    const h = new WeakMap();
    const U = ['px','em','rem','%','vh','vw','vmin','vmax','ch','ex','pt','pc','in','cm','mm','deg','rad','grad','turn','s','ms'];
    const M = {top:"px",left:"px",width:"px",height:"px",fontSize:"px",opacity:"",zIndex:""};
    const D = {fontSize:"16px",opacity:"1",top:"0px",left:"0px",zIndex:"1"};

    // Global timeline counter to keep multi-element changes in sync
    let globalStep = 0;

    // --- LOGIC 1: HISTORY STACK MANAGER ---
    const recordChange = (el, prev, next) => {
        if (!h.has(el)) h.set(el, { s: [], i: -1 });
        const state = h.get(el);

        // Branching: Clear forward history if we're at an older point
        state.s = state.s.slice(0, state.i + 1);
        
        // Save the state with a global step ID for synchronized undo/redo
        state.s.push({ p: prev, n: next, step: globalStep });
        state.i++;

        if (state.s.length > 500) { 
            state.s.shift(); 
            state.i--; 
        }
    };

    // --- LOGIC 2: STYLE PROPERTY ASSIGNMENT ---
    const calc = (el, props) => {
        let p = {}, n = {};
        for (let k in props) {
            let v = props[k];
            if (v == null) continue;

            let curStr = el.style[k] || D[k] || "0";
            let curNum = parseFloat(curStr) || 0;
            
            let s = String(v).replace(/\s+/g,'');
            let isRel = s.includes('+=') || s.includes('-=');
            let isRaw = !isRel && (/^[a-z\-]+$/i.test(s) || s.startsWith('#') || s.startsWith('rgb') || s.startsWith('hsl'));
            
            let res;
            if (isRaw) {
                res = v;
            } else {
                let d = parseFloat(isRel ? s.replace(/[+=-]/g,'') : s);
                if (isNaN(d)) continue;
                
                let num = isRel ? curNum + (s.includes('-=') ? -d : d) : d;
                
                // FIXED: Handle unit extraction correctly to avoid TypeError
                let unitMatch = s.match(/[a-z%]+$/i) || curStr.match(/[a-z%]+$/i);
                let unit = (unitMatch ? unitMatch[0] : (M[k] || "")).toLowerCase();
                
                res = (k === 'opacity' || k === 'zIndex') ? num : Math.round(num) + unit;
            }
            p[k] = curStr;
            n[k] = res;
        }
        return { p, n };
    };

    // --- MAIN WRAPPER ---
    return function(t, o) {
        const isA = Array.isArray(t);
        const targets = (isA ? t : [t]).map(x => typeof x === 'string' ? document.getElementById(x) : x).filter(x => x && x.style);

        const ctrl = {
            undo: () => {
                // Find the highest step ID currently active across targets
                const activeStates = targets.map(e => h.get(e)).filter(s => s && s.i >= 0);
                if (!activeStates.length) return ctrl;
                
                const targetStep = Math.max(...activeStates.map(s => s.s[s.i].step));

                // Revert everyone who belongs to this global step
                targets.forEach(e => {
                    const s = h.get(e);
                    if (s && s.i >= 0 && s.s[s.i].step === targetStep) {
                        Object.assign(e.style, s.s[s.i--].p);
                    }
                });
                return ctrl;
            },
            redo: () => {
                // Find the next step ID in the future
                const activeStates = targets.map(e => h.get(e)).filter(s => s && s.i < s.s.length - 1);
                if (!activeStates.length) return ctrl;

                const targetStep = Math.min(...activeStates.map(s => s.s[s.i + 1].step));

                // Apply the next state for everyone in this global step
                targets.forEach(e => {
                    const s = h.get(e);
                    if (s && s.i < s.s.length - 1 && s.s[s.i + 1].step === targetStep) {
                        Object.assign(e.style, s.s[++s.i].n);
                    }
                });
                return ctrl;
            },
            set: (props) => {
                if (!targets.length) return ctrl;
                
                globalStep++; // Increment sequence for this batch call
                targets.forEach(e => {
                    const { p, n } = calc(e, props);
                    recordChange(e, p, n);
                    Object.assign(e.style, n);
                });
                return ctrl;
            }
        };

        // Handle Getters
        if (typeof o === 'string') {
            const res = targets.map(e => e.style[o] || D[o] || "0");
            return isA ? res : res[0];
        }

        // Handle Setters or Return Control Object
        return (o && typeof o === 'object') ? ctrl.set(o) : ctrl;
    };
})();
