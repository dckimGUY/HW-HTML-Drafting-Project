/**
 * Updates a specific CSS filter without destroying the others.
 * @param {HTMLElement} el - The target part.
 * @param {string} func - e.g., 'blur', 'brightness', 'contrast'.
 * @param {string} val - e.g., '5px', '1.5', '50%'.
 */
function updatePartFilter(el, func, val) {
    let s = el.style,
        cur = s.filter && s.filter !== "none" ? s.filter : "",
        // Regex finds the specific function and its content inside brackets
        reg = new RegExp(`${func}\\(.*?\\)`, "i"),
        newF = `${func}(${val})`;

    // Replace existing function or append to the end
    let final = reg.test(cur) ? cur.replace(reg, newF) : (cur + " " + newF).trim();

    // Toggle invisible property for Omni history trigger
    const fO = s.floodOpacity === "1" ? "0.99" : "1";

    omni(el).set({
        "filter": final,
        "floodOpacity": fO
    });
}



function floodFlip(el) {
    const targets = Array.isArray(el) ? el : [el];
    targets.forEach(t => {
        if (!t) return;
        const s = t.style;
        const nxt = (s.floodOpacity === "1") ? "0.99" : "1";
        
        // This is all it needs. Omni handles the rest.
        omni(t).set({ "floodOpacity": nxt });
    });
}












function map3d(e,p={}){const d=e?.dataset||{},r=Math.PI/180,f={x:0,y:0,z:0,tx:0,ty:0,tz:0,sx:1,sy:1,kX:0,kY:0,p:1536},v={};for(let k in f){let l=p[k]??parseFloat(d[k])??f[k];if(k==='sx'||k==='sy'){const s=l<0?-1:1;let m=Math.abs(l);if(m<1e-3)m=1e-3;if(m>1e3)m=1e3;l=m*s}if(k==='p')l=Math.max(1,Math.min(99999,l));if(k==='kX'||k==='kY')l=Math.max(-89.9,Math.min(89.9,l));if(k.startsWith('t'))l=Math.max(-1e6,Math.min(1e6,l));v[k]=l}const a=v.x*r,b=v.y*r,c=v.z*r,h=v.kX*r,i=v.kY*r,cX=Math.cos(a),sX=Math.sin(a),cY=Math.cos(b),sY=Math.sin(b),cZ=Math.cos(c),sZ=Math.sin(c),tX=Math.tan(h),tY=Math.tan(i),m=[(cY*cZ)*v.sx,(cY*sZ+tY)*v.sy,-sY,0,(sX*sY*cZ-cX*sZ+tX)*v.sx,(sX*sY*sZ+cX*cZ)*v.sy,sX*cY,0,(cX*sY*cZ+sX*sZ)*v.sx,(cX*sY*sZ-sX*cZ)*v.sy,cX*cY,-1/v.p,v.tx,v.ty,v.tz,1],s=`matrix3d(${m.map(n=>Math.round(n*1e6)/1e6).join(',')})`;return e?.style&&(e.style.transform=s),s}
