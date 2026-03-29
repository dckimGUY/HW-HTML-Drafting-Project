function insertNewWindow(keyInfo,refresh) {
const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];
const wH = window.innerHeight;
const wW = window.innerwidth;
const fileContentsReference =
`<!DOCTYPE html>
<html lang="en" itemscope="" itemtype="https://schema.org/WebApplication" style="cursor: crosshair; background-color: rgb(63, 63, 95);">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="mobile-web-app-capable" content="yes">					
  <meta name="handheldfriendly" content="true">					
  <meta name="author" content="dckimGUY Mohammed David">		
  <link rel="canonical" href="https://dckim.com/hdub/index.html">
  <meta name="description" content="DCKIM HTML DRAFTING PROJECT is Top-Notch, Open-Source, and Canadian. Hands-on, in-action: It's the best way to learn about HTML. Writing your own website is easy now! So, focus on the artistic and written aspects. Those are more important anyhow!">

  <!-- Open Graph -->
  <meta property="og:type"         content="website">
  <meta property="og:title"        content="DCKIM HTML Drafting">
  <meta property="og:description"  content="DCKIM HTML DRAFTING PROJECT is Top-Notch, Open-Source, and Canadian. Hands-on, in-action: It's the best way to learn about HTML. Writing your own website is easy now! So, focus on the artistic and written aspects. Those are more important anyhow!">
  <meta property="og:url"          content="https://dckim.com/hdub/index.html">
  <meta property="og:image"        content="https://dckim.com/images/logo.png">
  <meta property="og:site_name"    content="DCKIM">

  <!-- Twitter -->
  <meta name="twitter:card"        content="summary_large_image">
  <meta name="twitter:title"       content="DCKIM HTML Drafting">
  <meta name="twitter:description" content="DCKIM HTML DRAFTING PROJECT is Top-Notch, Open-Source, and Canadian. Hands-on, in-action: It's the best way to learn about HTML. Writing your own website is easy now! So, focus on the artistic and written aspects. Those are more important anyhow!">
  <meta name="twitter:image"       content="https://dckim.com/images/logo.png">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "DCKIM HTML Drafting",
    "operatingSystem": "All (offline-capable, browser-based)",
    "applicationCategory": "DeveloperApplication",
    "applicationSubCategory": "HTML Drafting Tool",
    "browserRequirements": "Works fully offline in any modern browser",
    "softwareVersion": "0.v5.1",
    "license": "https://opensource.org/licenses/MIT",
    "description": "HTML Drafting is a free, open-source HTML drafting app built entirely with HTML, CSS, and JavaScript. It requires no external dependencies and works fully offline.",
    "url": "https://dckim.com/HW_project_online.html",
    "screenshot": "https://dckim.com/images/logo.png",
    "publisher": {
      "@type": "Organization",
      "name": "dckimGUY Mohammed David",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dckim.com/images/logo.png"
      }
    }
  }
  </script>

  <!-- Schema.org SoftwareSourceCode JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": "DCKIM HTML Drafting",
    "codeRepository": "https://github.com/dckimGUY/HW-HTML-Drafting-Project",
    "programmingLanguage": ["HTML", "CSS", "JavaScript"],
    "license": "https://opensource.org/licenses/MIT",
    "description": "The complete source code for HTML Drafting, a free, offline-capable HTML drafting app.",
    "author": {
      "@type": "Organization",
      "name": "dckimGUY Mohammed David"
    }
  }
  </script>

<link rel="icon" type="image/png" sizes="512x512" href="k_favicons/favicon-512x512.png">
<link rel="icon" type="image/png" sizes="192x192" href="k_favicons/favicon-192x192.png">
<link rel="icon" type="image/png" sizes="180x180" href="k_favicons/favicon-180x180.png">
<link rel="icon" type="image/png" sizes="32x32"   href="k_favicons/favicon-32x32.png"  >
<link rel="icon" type="image/png" sizes="16x16"   href="k_favicons/favicon-16x16.png"  >
<link rel="icon" type="image/images/png" sizes="16x16" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAC5SURBVDhP3ZI9DsIwDIUdUi7ABZBAQgwwcP9jsLAwcAGEWCkN9ktrua0TIUY+ybLl2C/OT0gMFQghwFdKaNH7GUOzYOMproDuvN7DhJLITMA2P98tPdjS5oCcJzIS0ObdCb5l6yQQkT43FdFL9NR1/NsF3jJcrE4gCWugw/7AXWeKrwBMYYm6wBf8g4A8n2cgxuwZrwbGayltj/xrXrnScOcPJKxiAz+iWVK4nutHkEa32YAJcvgLRB8+A0j7DIEaSwAAAABJRU5ErkJggg==">

<style>
html, body              { overflow: scroll; scrollbar-width: none;               }
body                    {                         width: 98%; height: 98%;       }
p                       { margin: 0;                                             }
body::-webkit-scrollbar { display: none;                                         }
</style>

<title id="documentTitle">DCKIM HTML Drafting Project</title>

<link rel="stylesheet" href="e_stylesheets/a_style.css?v=20260324140710"/>
<link rel="stylesheet" href="e_stylesheets/b_style.css?v=20251228104423"/>
<link rel="stylesheet" href="e_stylesheets/c_style.css?v=20251119100122"/>
<link rel="stylesheet" href="e_stylesheets/d_style.css?v=20251119100122"/>
<link rel="stylesheet" href="e_stylesheets/e_style.css?v=20251119100122"/>

<meta name="last-build" content="2026-03-29T16:34:34Z">

<body>
<div id="utilityLayer0"           ></div>
<div id="utilityLayer1"           ></div>
<div id="interfaceLayer"          ></div>
<div id="gridLayer"               ></div>
<div id="visualizationsLayer"     ></div>
<div id="mouseIconLayer"          ></div>
<div id="interfaceShelf"          ></div>
<div id="documentSizingBlock" style="position: absolute; top: 10000000px; left: 10000000px; width: 1px; height: 1px;"></div>
<div id="scripts">
<script src='./bundle.js?v=20260329123434'></script>
<script src="./h_hdub/d_handlers/c_initialization/c_insertNewWindow.js"></script>
</div>
</body>
</html>
`;let iS = 192;
/*    i    */ if (kC ==  73 && cC == 105) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${window.screenLeft - iS},resizable=yes,noopener=no`); }
/*    o    */ if (kC ==  79 && cC == 111) { window.children[window.children.length] = window.open("","_blank",`height=${iS + 1},width=${window.innerWidth + 1},top=${window.screenTop + window.innerHeight},left=${window.screenLeft},resizable=yes,noopener=no`); }
/*    a    */ if (kC ==  65 && cC ==  97) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${window.screenLeft + window.innerWidth},resizable=yes,noopener=no`); }
/*    I    */ if (kC ==  73 && cC ==  73) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=0,resizable=yes,noopener=no`); }
/*    O    */ if (kC ==  79 && cC ==  79) { window.children[window.children.length] = window.open("","_blank",`height=${iS + 1},width=${window.innerWidth + 1},top=${window.screenTop - iS},left=${window.screenLeft},resizable=yes,noopener=no`); }
/*    A    */ if (kC ==  65 && cC ==  65) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${screen.width - iS},resizable=yes,noopener=no`); }
/*    N    */ if (kC ==  78 && cC ==  78) { window.children[window.children.length] = window.open("","_blank"); }
/* REFRESH */ if (refresh==true)          { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight},width=${window.innerWidth},top=${window.screenTop},left=${window.screenLeft},resizable=yes,noopener=no`); window.close(); }
window.children[window.children.length - 1].document.write(fileContentsReference);
try {
for (let j = 0; j < window.parents.length; j++) {
window.parents[j].children[window.parents[j].children.length] = window.children[window.children.length - 1];
}
} catch {}
}
