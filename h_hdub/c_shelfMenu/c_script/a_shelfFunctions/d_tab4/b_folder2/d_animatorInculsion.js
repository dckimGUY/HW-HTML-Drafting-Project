const animatorInclusion = `
window.addEventListener('keydown', e => e.key === 'Escape' && window.close());

let lastAction = "";
const animBar = document.createElement('div');
Object.assign(animBar.style, {
    position: 'fixed', bottom: '0', left: '0', width: '100%', height: '70px',
    backgroundColor: '#111', display: 'flex', alignItems: 'center',
    padding: '0 15px', boxSizing: 'border-box', zIndex: '9999',
    borderTop: '1px solid #333', gap: '10px', justifyContent: 'space-between'
});
const groupSelect = document.createElement('select');
Object.assign(groupSelect.style, {
    backgroundColor: '#222', color: 'lime', border: '1px solid #444',
    padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', fontSize: '20px',
    fontWeight: 'bold', flex: '0 1 auto', minWidth: '180px', height: '50px'
});
if (Array.isArray(go.xqn.nom)) {
    go.xqn.nom.forEach(name => {
        const opt = document.createElement('option');
        opt.value = name; opt.innerText = name;
        groupSelect.appendChild(opt);
    });
}
groupSelect.onchange = () => {
    const targetGroup = go.xqn.grp[groupSelect.value];
    if (targetGroup) {
        lastAction = ""; 
        go.setState(targetGroup[0]);
    }
};
animBar.appendChild(groupSelect);
const nowDisplay = document.createElement('div');
Object.assign(nowDisplay.style, {
    backgroundColor: '#111', color: 'lime', border: '1px solid #444',
    padding: '0 15px', borderRadius: '6px', fontSize: '24px',
    fontFamily: 'monospace', fontWeight: 'bold', minWidth: '80px',
    height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'
});
animBar.appendChild(nowDisplay);
const cmdWrapper = document.createElement('div');
Object.assign(cmdWrapper.style, {
    flex: '1 1 auto', position: 'relative', margin: '0 10px', height: '50px'
});
const cmdLabel = document.createElement('div');
cmdLabel.innerText = 'CLICK TO COPY COMMAND';
Object.assign(cmdLabel.style, {
    position: 'absolute', top: '-12px', left: '10px', fontSize: '9px',
    color: 'magenta', fontWeight: 'bold', letterSpacing: '1px',
    textShadow: '0 0 8px magenta'
});
const cmdDisplay = document.createElement('div');
Object.assign(cmdDisplay.style, {
    backgroundColor: '#000', color: '#0f0', padding: '10px 15px',
    borderRadius: '6px', border: '2px solid magenta', fontSize: '13px',
    fontFamily: 'monospace', width: '100%', height: '100%', boxSizing: 'border-box',
    whiteSpace: 'nowrap', overflow: 'hidden', cursor: 'copy', 
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', userSelect: 'all', textAlign: 'center',
    boxShadow: '0 0 10px rgba(255, 0, 255, 0.4)'
});
cmdDisplay.onclick = () => {
    navigator.clipboard.writeText(cmdDisplay.innerText).then(() => {
        cmdDisplay.style.transition = 'none';
        cmdDisplay.style.backgroundColor = 'magenta';
        cmdDisplay.style.color = 'white';
        cmdDisplay.style.boxShadow = '0 0 30px magenta';
        setTimeout(() => {
            cmdDisplay.style.transition = 'all 0.8s ease';
            cmdDisplay.style.backgroundColor = '#000';
            cmdDisplay.style.color = '#0f0';
            cmdDisplay.style.boxShadow = '0 0 10px rgba(255, 0, 255, 0.4)';
        }, 400);
    });
};
cmdWrapper.appendChild(cmdLabel);
cmdWrapper.appendChild(cmdDisplay);
animBar.appendChild(cmdWrapper);
const updateReadout = () => {
    const groupName = groupSelect.value;
    const targetGroup = go.xqn.grp[groupName];
    if (targetGroup) {
        const val = targetGroup.now.value;
        nowDisplay.innerText = val;
        let finalAction = "";
        if (lastAction.includes('play') || lastAction.includes('loop')) {
            finalAction = "go.xqn.grp['" + groupName + "']." + lastAction + "()";
        } else {
            finalAction = "go.setState(go.xqn.grp['" + groupName + "'][" + val + "])";
        }
        cmdDisplay.innerText = "go.xqn.grp['" + groupName + "'].rate.set(" + targetGroup.rate.value + "); " + finalAction + ";";
    }
};
setInterval(updateReadout, 15);
const runCommand = (methodPath) => {
    if (!methodPath.includes('rate')) { lastAction = methodPath; }
    const targetGroup = go.xqn.grp[groupSelect.value];
    try {
        const parts = methodPath.split('.');
        let fn = targetGroup;
        parts.forEach(p => {
            if (p.includes('(')) {
                const [name, val] = p.split('(');
                fn = fn[name](parseFloat(val));
            } else {
                fn = fn[p];
            }
        });
        if (typeof fn === 'function') {
            if (methodPath.includes('play') || methodPath.includes('loop')) fn();
            else go.setState(fn());
        }
    } catch (e) { }
};
const controls = [
    { icon: '▶',   path: 'play.fwd' },  
    { icon: '⏹',   path: 'stop' },      
    { icon: '⏸',   path: 'pause' },     
    { icon: '⏮',   path: 'skip.start' },
    { icon: '«',   path: 'prev' },      
    { icon: '»',   path: 'next' },      
    { icon: '⏭',   path: 'skip.end' },    
    { icon: '＋',   path: 'rate.incr(0.1)' },
    { icon: '－',   path: 'rate.decr(0.1)' },
    { icon: '↻',   path: 'loop.fwd' },
    { icon: '↺',   path: 'loop.rev' },
    { icon: '∞',   path: 'loop.cycl' }
];
controls.forEach(item => {
    const btn = document.createElement('button');
    btn.innerText = item.icon;
    Object.assign(btn.style, {
        flex: '1 1 auto', height: '50px', fontSize: '24px', cursor: 'pointer',
        backgroundColor: '#222', color: '#eee', border: '1px solid #444', 
        borderRadius: '6px', display: 'flex', alignItems: 'center', 
        justifyContent: 'center', transition: 'all 0.1s ease', minWidth: '35px'
    });
    btn.onmouseenter = () => {
        btn.style.color = 'lime';
        btn.style.borderColor = 'lime';
        btn.style.boxShadow = '0 0 8px lime';
    };
    btn.onmouseleave = () => {
        btn.style.color = '#eee';
        btn.style.borderColor = '#444';
        btn.style.boxShadow = 'none';
    };
    btn.onmousedown  = () => {
        btn.style.color = 'magenta';
        btn.style.borderColor = 'magenta';
        btn.style.boxShadow = '0 0 15px magenta';
    };
    btn.onmouseup    = () => {
        btn.style.color = 'lime';
        btn.style.borderColor = 'lime';
    };
    btn.onclick = () => runCommand(item.path);
    animBar.appendChild(btn);
});
const animToggle = document.createElement('button');
animToggle.innerText = '▼';
Object.assign(animToggle.style, {
    position: 'fixed', bottom: '70px', right: '15px', zIndex: '10000',
    cursor: 'pointer', backgroundColor: '#222', color: '#888', border: 'none',
    padding: '6px 14px', borderRadius: '6px 6px 0 0', fontSize: '12px'
});
let barVisible = true;
animToggle.onclick = () => {
    barVisible = !barVisible;
    animBar.style.transform = barVisible ? 'translateY(0)' : 'translateY(100%)';
    animToggle.innerText = barVisible ? '▼' : '▲';
    animToggle.style.bottom = barVisible ? '70px' : '0px';
};


animBar.onwheel = (e) => {
    e.preventDefault();
    const targetGroup = go.xqn.grp[groupSelect.value];
    if (targetGroup) {
        if (e.deltaY < 0) {
            targetGroup.rate.decr(10);
        } else {
            targetGroup.rate.incr(10);
        }
    }
};

animBar.style.zIndex  = "9999999999";
animBar.style.opacity = "0.75";
document.body.appendChild(animBar);
document.body.appendChild(animToggle);



`;