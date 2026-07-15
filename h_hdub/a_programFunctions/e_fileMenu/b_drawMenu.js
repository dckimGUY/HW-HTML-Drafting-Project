const MENU_KEYS = {
  labelKey: "text",
  actionKey: "action",
  childrenKey: "items",
  shortcutKey: "shortcut",
  noteKey: "note"
};

(() => {
  document.querySelectorAll(".universal-top-bar").forEach(bar => bar.remove());

  const style = document.createElement("style");
  style.textContent = `.universal-top-bar{display:flex;background:rgba(240,240,240,0.75);border-bottom:1px solid rgba(204,204,204,0.75);font-family:'dckimPixelMono',monospace;position:fixed;top:0;left:0;right:0;z-index:9999;}.menu-item-top{position:relative;display:inline-block;}.menu-item-nested{position:relative;width:100%;}.menu-element{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;width:100%;text-align:left;background:none;border:1px solid transparent;padding:8px 14px;cursor:pointer;font-size:14px;white-space:nowrap;outline:none;box-sizing:border-box;font-family:inherit;}.menu-element:hover{background:#DEFF1C;border:1px solid lime;padding:8px 14px;}.menu-shortcut,.menu-arrow{color:#666;font-size:12px;padding-left:10px;font-family:inherit;white-space:nowrap;}.menu-note{color:#666;font-size:12px;padding-left:20px;font-family:inherit;white-space:pre-line;text-align:left;width:100%;line-height:1.2;display:block;box-sizing:border-box;}.menu-dropdown{display:none;position:absolute;background:rgba(255,255,255,0.75);border:1px solid rgba(204,204,204,0.75);min-width:180px;z-index:1000;flex-direction:column;padding:0;margin:0;}.menu-divider{height:1px;background:rgba(204,204,204,0.75);margin:0;width:100%;}.menu-item-top>.menu-dropdown{top:100%;left:0;}.menu-item-nested>.menu-dropdown{top:0;left:100%;}.menu-item-nested:hover>.menu-dropdown,.menu-item-top.is-open>.menu-dropdown{display:flex;}`;
  document.head.appendChild(style);
  
  const navBar = document.createElement("nav");
  navBar.className = "universal-top-bar";
  document.body.prepend(navBar);

  function buildMenu(d, c, k, s = false) {
    const { labelKey: l, actionKey: a, childrenKey: ch, shortcutKey: sh, noteKey: nt } = k;
    d.forEach(i => {
      if (s && i.divider) {
        const div = document.createElement("div");
        div.className = "menu-divider";
        c.appendChild(div);
        return;
      }
      const g = document.createElement("div");
      g.className = s ? "menu-item-nested" : "menu-item-top";
      const t = document.createElement("button");
      t.className = "menu-element";
      
      if (s && i[nt] && !i[l]) {
        t.style.flexDirection = "column";
        const n = document.createElement("span");
        n.className = "menu-note";
        n.textContent = i[nt];
        t.appendChild(n);
      } else {
        const txt = document.createElement("span");
        txt.textContent = i[l];
        t.appendChild(txt);
        const hasChildren = i[ch] && Array.isArray(i[ch]) && i[ch].length > 0;
        if (s && hasChildren) {
          const arr = document.createElement("span");
          arr.className = "menu-arrow";
          arr.textContent = ">";
          t.appendChild(arr);
        } else if (s && i[sh]) {
          const sk = document.createElement("span");
          sk.className = "menu-shortcut";
          sk.textContent = i[sh];
          t.appendChild(sk);
        }
        if (s && i[nt]) {
          t.style.flexDirection = "column";
          const n = document.createElement("span");
          n.className = "menu-note";
          n.textContent = i[nt];
          t.appendChild(n);
        }
      }
      
      g.appendChild(t);
      const hasChildren = i[ch] && Array.isArray(i[ch]) && i[ch].length > 0;
      if (hasChildren) {
        const drop = document.createElement("div");
        drop.className = "menu-dropdown";
        buildMenu(i[ch], drop, k, true);
        g.appendChild(drop);

        if (!s) {
          t.onclick = (e) => {
            e.stopPropagation();
            const isOpen = g.classList.contains("is-open");
            document.querySelectorAll(".menu-item-top.is-open").forEach(el => el.classList.remove("is-open"));
            if (!isOpen) g.classList.add("is-open");
          };

          g.onmouseleave = () => {
            g.classList.remove("is-open");
          };
        }
      } else if (typeof i[a] === "function") {
        t.onclick = (e) => {
          i[a](e);
          document.querySelectorAll(".menu-item-top.is-open").forEach(el => el.classList.remove("is-open"));
        };
      }
      c.appendChild(g);
    });
  }
  buildMenu(USER_MENU_DATA, navBar, MENU_KEYS);
})();
