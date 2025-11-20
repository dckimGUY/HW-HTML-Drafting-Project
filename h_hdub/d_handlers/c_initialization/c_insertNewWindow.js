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

<link rel="stylesheet" href="e_stylesheets/a_style.css?v=20251119090942"/>
<link rel="stylesheet" href="e_stylesheets/b_style.css?v=20251119100122"/>
<link rel="stylesheet" href="e_stylesheets/c_style.css?v=20251119100122"/>
<link rel="stylesheet" href="e_stylesheets/d_style.css?v=20251119100122"/>
<link rel="stylesheet" href="e_stylesheets/e_style.css?v=20251119100122"/>

<meta name="last-build" content="2025-11-20T00:27:34Z">

<body>
<div id="utilityLayer0"           ></div>
<div id="utilityLayer1"           ></div>
<div id="interfaceLayer"          ></div>
<div id="gridLayer"               ></div>
<div id="visualizationsLayer"     ></div>
<div id="mouseIconLayer"          ></div>
<div id="interfaceShelf"          ></div>
<div id="scripts">
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/a_modeRouter.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/b_hjklRouter.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/c_aioNRouter.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/d_numpadRouter.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/e_scrollRouter.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/f_shiftRouter.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/g_topRowRouter.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/h_styleTuner/a_styleTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/h_styleTuner/b_borderRadiusTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/h_styleTuner/c_boxShadowTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/h_styleTuner/f_paddingTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/h_styleTuner/g_alignmentTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/h_styleTuner/h_fontTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/i_constructionTuner/a_constructionTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/i_constructionTuner/b_windowTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/i_constructionTuner/c_grabTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/i_constructionTuner/d_edgeTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/i_constructionTuner/e_duplicateTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/a_keyboardRouter/i_constructionTuner/f_tricolourTuner.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/a_spaceView/a_spaceViewOn.js?v=20251111073557"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/a_spaceView/b_spaceViewOff.js?v=20251111073620"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/a_spaceView/c_spaceViewToggle.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/a_spaceView/d_spaceViewToggleAndExposeAttributesAsText.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/a_spaceView/e_flipHauptMode.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/a_spaceView/f_removePointerEventsNone.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/a_spaceView/g_restorePointerEventsNone.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/b_modeKeys/a_constructionModeKeys.js?v=20251118173548"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/b_topModeKeys/b_modeKeys/b_styleDeclarationModeKeys.js?v=20251118173428"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/c_bufferOperations/a_gridArray.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/c_bufferOperations/b_pasteOut.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/c_bufferOperations/c_pasteSingle.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/c_bufferOperations/d_pasteMultiple.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/c_bufferOperations/e_groupPaste.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/c_bufferOperations/f_spreadReference.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/a_writeInfoToFace.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/b_togglePartNames.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/c_externalLink.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/d_promptDownloadLink.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/e_copyFilenameLink.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/e_copyOutgoingHashLink.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/f_finalizeHTMLandOpen.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/g_wrapParts.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/h_unwrapParts.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/h_unwrapPartsAlways.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/i_findFurthestExtent.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/j_wrapDocument.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/k_findLeastExtent.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/l_wrapDocumentWithScreen.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/m_userSelectNone.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/n_flipAnchorZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/o_buttonDiv.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/p_overflowMain.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/q_makeItContentEditable.js?v=20251112104505"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/r_goFullscreen.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/s_setDragPullFromContext.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/t_wrapPink.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/u_wrapGrey.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/v_wrapBlue.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/w_cutOutImage.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/x_saveInternalImage.js?v=20251106101036"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/y_cutImagesAll.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/d_miscellaneous/z_applyImageBack.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/a_quitSave.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/b_saveHTMLparticle.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/c_saveParticlePreparation.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/d_copyOpenerContents.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/e_openFile.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/f_appendFile.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/g_openImageFile.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/h_openHTMLinNewWindow.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/i_saveStartupTutorial.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/j_saveWithHeaderFooter.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/k_saveFromHotdog.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/l_openImageSheet.js?v=20251118000908"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/m_clearImageSheet.js?v=20251118010043"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/e_saveAndAppend/n_viewImageSheet.js?v=20251117235551"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/a_flowManagement/a_reflow.js?v=20251112083746"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/a_flowManagement/b_reflowGlobal.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/a_flowManagement/c_reflowPerTrip.js?v=20251112074956"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/a_globalZManagement/a_manageGlobalZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/a_globalZManagement/b_ceilingGlobalZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/a_globalZManagement/c_lowerGlobalZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/a_globalZManagement/d_raiseGlobalZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/a_globalZManagement/e_floorGlobalZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/b_tripartiteZManagement/a_manageTripartiteZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/b_tripartiteZManagement/b_ceilingTripartiteZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/b_tripartiteZManagement/c_lowerTripartiteZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/b_tripartiteZManagement/d_raiseTripartiteZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/b_tripartiteZManagement/e_floorTripartiteZ.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/f_documentOrder/b_zIndexManagement/c_findZextrema/a_findZextrema.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/a_alignCenter/a_moveLeftAndCentre.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/a_alignCenter/b_moveDownAndCentre.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/a_alignCenter/c_moveUpAndCentre.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/a_alignCenter/d_moveRightAndCentre.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/b_alignEdges/a_moveLeft.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/b_alignEdges/b_moveDown.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/b_alignEdges/c_moveUp.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/b_alignEdges/d_moveRight.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/c_moveAll/a_moveAllLeft.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/c_moveAll/b_moveAllDown.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/c_moveAll/c_moveAllUp.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/c_moveAll/d_moveAllRight.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/g_movement/d_explicitEntry/a_explicitEntryForTopAndLeft.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/h_extendEdge/a_extendEdge.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/h_extendEdge/b_halfSize.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/h_extendEdge/c_doubleSize.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/i_tripartiteOperations/a_assignAllColours.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/i_tripartiteOperations/b_swapColours.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/i_tripartiteOperations/c_setCoinTrip.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/i_tripartiteOperations/d_recoverColouration.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/i_tripartiteOperations/e_readCoins.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/a_deletion/a_deleteCoin.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/a_deletion/b_groupDeletion.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/a_insertNew/a_insertNewCoin.js?v=20251111140309"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/a_insertNew/b_insertNewDuplicate.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/a_insertNew/c_insertNewImage.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/a_insertDragIns.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/b_insertNamedColours.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/c_insertGrayscale.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/d_insertFontSizeAndPadding.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/e_insertFontVarious.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/f_insertBorderSelector.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/g_insertBoxShadowSelector.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/h_otherFontAndTemplates.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/b_insertion/b_insertDragSelector/i_insertSingleTemplates.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/c_guideLayer/a_guideLayer.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/j_insertionAndDeletion/c_guideLayer/b_pullFromGuideLayer.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/a_brickHorizontal.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/b_brickVertical.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/c_stackHorizontal.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/d_stackVertical.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/e_stepStackDiagonal.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/f_stackPoint.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/g_stepStackFlat.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/h_stackVerticalCentre.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/k_brickAndStack/i_stackHorizontalCentre.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/l_styleOperations/a_gridToPadding.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/l_styleOperations/b_gridToBorderRadius.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/l_styleOperations/c_gridToFontSize.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/l_styleOperations/d_gridToOutline.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/l_styleOperations/e_gridToBoxShadow.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/l_styleOperations/f_cycleTextAlignment.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/l_styleOperations/g_cycleFonts.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/l_styleOperations/h_gridToIndent.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/a_enterArticleContent.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/b_enterCODEnote.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/c_enterPHPref.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/d_jsNameAndNote.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/e_enterBackgroundColour.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/f_enterForegroundColour.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/g_enterOutlineColour.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/h_enterPageEchelon.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/i_setSequentialIds.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/j_customPrompt.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/k_enterImageAltText.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/m_manualEntry/l_enterClassNames.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/n_window/a_windowEdge.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/n_window/b_openTextareaInNewWindow.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/a_innerRotation/a_innerRotation.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/a_innerRotation/b_innerRotationMin.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/a_innerRotation/c_innerRotationCan.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/b_3dTransform/a_rotateUnder.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/b_3dTransform/b_rotateOver.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/b_3dTransform/c_rotateLeft.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/b_3dTransform/d_rotateRight.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/b_3dTransform/e_rotateZleft.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/b_3dTransform/f_rotateZright.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/b_3dTransform/g_clearRotation.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/c_outerScale/a_outerScaleUp.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/c_outerScale/b_outerScaleDown.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/o_rotationAndScale/c_outerScale/c_resetScale.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/p_F1menu/a_helpMenu.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/q_notificationsSystem/a_noteCoin.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/q_notificationsSystem/b_HJKLnoteCoin.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/q_notificationsSystem/c_noteStyle.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/r_topLayerManager/a_makeTopLayer.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/r_topLayerManager/b_recoverCoinFocus.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/r_topLayerManager/c_layerLeft.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/r_topLayerManager/d_layerRight.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/s_interfaceLayer/a_toggleInterfaceLayer.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/s_interfaceLayer/b_enterWizardMaster.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/s_interfaceLayer/c_toggleInterfaceShelf.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/s_interfaceLayer/d_setDefaultTemplate.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/a_wizarda.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/b_wizardb.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/c_wizardc.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/d_wizardd.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/e_wizarde.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/f_wizardf.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/g_wizardg.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/h_wizardh.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/i_wizardi.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/j_wizardj.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/k_wizardk.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/l_wizardl.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/m_wizardm.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/n_wizardn.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/o_wizardo.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/p_wizardp.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/q_wizardq.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/r_wizardr.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/s_wizards.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/t_wizardt.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/u_wizardu.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/v_wizardv.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/w_wizardw.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/x_wizardx.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/y_wizardy.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/t_wizards/z_wizardz.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/u_localView/a_toggleLocalView.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/u_localView/b_cycleNextLocalView.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/u_localView/c_cyclePreviousLocalView.js?v=20251102205813"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/v_cleanConversion/a_buttonizer.js?v=20251105160606"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/w_projectLevel/a_saveProject.js?v=20251119105649"></script>
<script src="./h_hdub/a_programFunctions/a_keyboardFunctions/w_projectLevel/b_openProject.js?v=20251119105728"></script>
<script src="./h_hdub/a_programFunctions/b_mouseFunctions/a_enterNewPartFromMouseInput.js?v=20251118154500"></script>
<script src="./h_hdub/a_programFunctions/b_mouseFunctions/b_mouseGiveFocus.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/b_mouseFunctions/c_mousePlaceCursor.js?v=20251118154654"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/a_coinToCursor.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/b_cursorToCoin.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/c_cursorToEnd.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/d_cursorToHome.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/e_coinCentreToCursor.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/f_cursorToCoinCentre.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/g_cursorToCoinTopLeft.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/h_cursorToCoinTopRight.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/i_cursorToCoinBottomLeft.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/j_cursorToCoinBottomRight.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/k_cursorToWindowCentre.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/l_cursorMoveLeft.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/m_cursorMoveRight.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/n_cursorMoveUp.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/o_cursorMoveDown.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/p_cursorToCoinTopCentre.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/q_cursorToCoinLeftCentre.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/r_cursorToCoinRightCentre.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/a_spatialCursor/s_cursorToCoinBottomCentre.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/b_focus/a_focusFlip.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/b_focus/b_focusPrevious.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/b_focus/c_focusNext.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/b_focus/d_focusFirst.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/b_focus/e_focusLast.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/b_focus/f_focusNextColour.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/b_focus/g_focusSet.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/c_scanAndSet/a_scanForCoin.js?v=20251102205812"></script>
<script src="./h_hdub/a_programFunctions/c_focusManagement/c_scanAndSet/b_setCoinTripColouration.js?v=20251102205812"></script>
<script src="./h_hdub/b_defaultConfiguration/a_defaultConfig.js?v=20251118153559"></script>
<script src="./h_hdub/b_defaultConfiguration/b_defaultTemplates.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/0_declarations/a_shelfMenuHTML.js?v=20251117203454"></script>
<script src="./h_hdub/c_shelfMenu/b_html/0_tabSelectors/a_tabSelectors_style.js?v=20251111125627"></script>
<script src="./h_hdub/c_shelfMenu/b_html/0_tabSelectors/b_tabSelectors_HTML.js?v=20251111130241"></script>
<script src="./h_hdub/c_shelfMenu/b_html/0_tabSelectors/c_scaler.js?v=20251111223554"></script>
<script src="./h_hdub/c_shelfMenu/b_html/a_tab1/0_folderSelectors/a_tab1_folderSelectors_style.js?v=20251119192039"></script>
<script src="./h_hdub/c_shelfMenu/b_html/a_tab1/0_folderSelectors/b_tab1_folderSelectors_HTML.js?v=20251119192039"></script>
<script src="./h_hdub/c_shelfMenu/b_html/a_tab1/1_folderBackgrounds/a_tab1_background_style.js?v=20251119192046"></script>
<script src="./h_hdub/c_shelfMenu/b_html/a_tab1/a_folder1/a_tab1_shelf1_style.js?v=20251119192055"></script>
<script src="./h_hdub/c_shelfMenu/b_html/a_tab1/a_folder1/b_tab1_shelf1_HTML.js?v=20251119192055"></script>
<script src="./h_hdub/c_shelfMenu/b_html/a_tab1/b_folder2/a_tab1_shelf2_style.js?v=20251119192117"></script>
<script src="./h_hdub/c_shelfMenu/b_html/a_tab1/b_folder2/b_tab1_shelf2_HTML.js?v=20251119192117"></script>
<script src="./h_hdub/c_shelfMenu/b_html/b_tab2/0_folderSelectors/a_tab2_folderSelectors_style.js?v=20251119192040"></script>
<script src="./h_hdub/c_shelfMenu/b_html/b_tab2/0_folderSelectors/b_tab2_folderSelectors_HTML.js?v=20251119192040"></script>
<script src="./h_hdub/c_shelfMenu/b_html/b_tab2/1_folderBackgrounds/a_tab2_background_style.js?v=20251119192046"></script>
<script src="./h_hdub/c_shelfMenu/b_html/b_tab2/a_folder1/a_tab2_shelf1_style.js?v=20251119192105"></script>
<script src="./h_hdub/c_shelfMenu/b_html/b_tab2/a_folder1/b_tab2_shelf1_HTML.js?v=20251119192105"></script>
<script src="./h_hdub/c_shelfMenu/b_html/b_tab2/b_folder2/a_tab2_shelf2_style.js?v=20251119192122"></script>
<script src="./h_hdub/c_shelfMenu/b_html/b_tab2/b_folder2/b_tab2_shelf2_HTML.js?v=20251119192122"></script>
<script src="./h_hdub/c_shelfMenu/b_html/c_tab3/0_folderSelectors/a_tab3_folderSelectors_style.js?v=20251119192041"></script>
<script src="./h_hdub/c_shelfMenu/b_html/c_tab3/0_folderSelectors/b_tab3_folderSelectors_HTML.js?v=20251119192041"></script>
<script src="./h_hdub/c_shelfMenu/b_html/c_tab3/1_folderBackgrounds/a_tab3_background_style.js?v=20251119192047"></script>
<script src="./h_hdub/c_shelfMenu/b_html/c_tab3/a_folder1/a_tab3_shelf1_style.js?v=20251119192110"></script>
<script src="./h_hdub/c_shelfMenu/b_html/c_tab3/a_folder1/b_tab3_shelf1_HTML.js?v=20251119192110"></script>
<script src="./h_hdub/c_shelfMenu/b_html/c_tab3/b_folder2/a_tab3_shelf2_style.js?v=20251119192125"></script>
<script src="./h_hdub/c_shelfMenu/b_html/c_tab3/b_folder2/b_tab3_shelf2_HTML.js?v=20251119192125"></script>
<script src="./h_hdub/c_shelfMenu/b_html/d_tab4/0_folderSelectors/a_tab4_folderSelectors_style.js?v=20251119192042"></script>
<script src="./h_hdub/c_shelfMenu/b_html/d_tab4/0_folderSelectors/b_tab4_folderSelectors_HTML.js?v=20251119192042"></script>
<script src="./h_hdub/c_shelfMenu/b_html/d_tab4/1_folderBackgrounds/a_tab4_background_style.js?v=20251119192048"></script>
<script src="./h_hdub/c_shelfMenu/b_html/d_tab4/a_folder1/a_tab4_shelf1_style.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/b_html/d_tab4/a_folder1/b_tab4_shelf1_HTML.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/b_html/d_tab4/b_folder2/a_tab4_shelf2_style.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/b_html/d_tab4/b_folder2/b_tab4_shelf2_HTML.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/b_html/e_tab5/0_folderSelectors/a_tab5_folderSelectors_style.js?v=20251119192044"></script>
<script src="./h_hdub/c_shelfMenu/b_html/e_tab5/0_folderSelectors/b_tab5_folderSelectors_HTML.js?v=20251119192044"></script>
<script src="./h_hdub/c_shelfMenu/b_html/e_tab5/1_folderBackgrounds/a_tab5_background_style.js?v=20251119192048"></script>
<script src="./h_hdub/c_shelfMenu/b_html/e_tab5/a_folder1/a_tab5_shelf1_style.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/b_html/e_tab5/a_folder1/b_tab5_shelf1_HTML.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/b_html/e_tab5/b_folder2/a_tab5_shelf2_style.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/b_html/e_tab5/b_folder2/b_tab5_shelf2_HTML.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/b_html/f_tab6/0_folderSelectors/a_tab6_folderSelectors_style.js?v=20251119192045"></script>
<script src="./h_hdub/c_shelfMenu/b_html/f_tab6/0_folderSelectors/b_tab6_folderSelectors_HTML.js?v=20251119192045"></script>
<script src="./h_hdub/c_shelfMenu/b_html/f_tab6/1_folderBackgrounds/a_tab6_background_style.js?v=20251119192049"></script>
<script src="./h_hdub/c_shelfMenu/b_html/f_tab6/a_folder1/a_tab6_shelf1_style.js?v=20251119192114"></script>
<script src="./h_hdub/c_shelfMenu/b_html/f_tab6/a_folder1/b_tab6_shelf1_HTML.js?v=20251119192114"></script>
<script src="./h_hdub/c_shelfMenu/b_html/f_tab6/b_folder2/a_tab6_shelf2_style.js?v=20251111092738"></script>
<script src="./h_hdub/c_shelfMenu/b_html/f_tab6/b_folder2/b_tab6_shelf2_HTML.js?v=20251111092744"></script>
<script src="./h_hdub/c_shelfMenu/b_html/z_mainAssembly/a_shelfAssembly.js?v=20251111221430"></script>
<script src="./h_hdub/c_shelfMenu/b_html/z_mainAssembly/b_defaultUIshelfOld.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/0_declarations/a_ui.js?v=20251119072259"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/0_tabSelectors/a_tabSelectors_function.js?v=20251111132006"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/a_tab1/0_folderSelectors/a_tab1_folderSelectors_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/a_tab1/a_folder1/a_tab1_shelf1_function.js?v=20251119145757"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/a_tab1/b_folder2/a_tab1_shelf2_function.js?v=20251119083559"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/b_tab2/0_folderSelectors/a_tab2_folderSelectors_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/b_tab2/a_folder1/a_tab2_shelf1_function.js?v=20251119192624"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/b_tab2/b_folder2/a_tab2_shelf2_function.js?v=20251118160952"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/c_tab3/0_folderSelectors/a_tab3_folderSelectors_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/c_tab3/a_folder1/a_tab3_shelf1_function.js?v=20251117175551"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/c_tab3/b_folder2/a_tab3_shelf2_function.js?v=20251118004748"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/d_tab4/0_folderSelectors/a_tab4_folderSelectors_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/d_tab4/a_folder1/a_tab4_shelf1_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/d_tab4/b_folder2/a_tab4_shelf2_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/e_tab5/0_folderSelectors/a_tab5_folderSelectors_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/e_tab5/a_folder1/a_tab5_shelf1_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/e_tab5/b_folder2/a_tab5_shelf2_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/f_tab6/0_folderSelectors/a_tab6_folderSelectors_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/f_tab6/a_folder1/a_tab6_shelf1_function.js?v=20251118152644"></script>
<script src="./h_hdub/c_shelfMenu/c_script/a_shelfFunctions/f_tab6/b_folder2/a_tab6_shelf2_function.js?v=20251102205813"></script>
<script src="./h_hdub/c_shelfMenu/c_script/b_shelfHandlers/a_clickHandler.js?v=20251118152712"></script>
<script src="./h_hdub/c_shelfMenu/c_script/b_shelfHandlers/b_changeHandler.js?v=20251106175439"></script>
<script src="./h_hdub/c_shelfMenu/c_script/b_shelfHandlers/c_inputHandler.js?v=20251119072339"></script>
<script src="./h_hdub/c_shelfMenu/c_script/b_shelfHandlers/d_changeHandler.js?v=20251116005354"></script>
<script src="./h_hdub/c_shelfMenu/c_script/b_shelfHandlers/z_stopPropagation.js?v=20251118095541"></script>
<script src="./h_hdub/c_shelfMenu/d_updateFunction/a_updateInfoShelf.js?v=20251119150212"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/a_mode0.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/b_mode1.js?v=20251118155241"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/c_mode2.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/d_mode3.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/e_mode4.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/f_mode5.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/g_mode6.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/h_mode7.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/i_mode8.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/a_mouseModeRouter/j_mode9.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/b_dragAndDrop/a_dragHandler.js?v=20251105160929"></script>
<script src="./h_hdub/d_handlers/c_initialization/a_namedColourArray.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/c_initialization/b_loadReferenceData.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/c_initialization/c_insertNewWindow.js?v=20251119192037"></script>
<script src="./h_hdub/d_handlers/c_initialization/d_helpMenu.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/c_initialization/e_defaultUI.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/c_initialization/f_defaultUIasObjects.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/c_initialization/g_splashScreenBase64.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/d_visualizationLayer/a_visualizations.js?v=20251116063115"></script>
<script src="./h_hdub/d_handlers/e_mouseHandler/a_handler.js?v=20251103220701"></script>
<script src="./h_hdub/d_handlers/f_keyboardHandler/a_handler.js?v=20251118163504"></script>
<script src="./h_hdub/d_handlers/g_boot/a_boot.js?v=20251119192012"></script>
<script src="./h_hdub/d_handlers/g_boot/b_fMan.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/g_boot/c_setMouseCursorIcon.js?v=20251102205813"></script>
<script src="./h_hdub/d_handlers/h_copyAndPaste/a_copyAndPasteHandler.js?v=20251104221847"></script>
<script src="./h_hdub/e_wizards/0_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/1_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/2_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/3_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/4_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/5_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/6_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/7_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/8_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/9_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/a_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/b_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/c_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/d_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/e_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/f_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/g_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/h_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/i_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/j_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/k_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/l_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/m_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/n_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/o_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/p_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/q_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/r_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/s_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/t_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/u_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/v_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/w_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/x_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/y_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/e_wizards/z_wizard.js?v=20251102205813"></script>
<script src="./h_hdub/z_hwObject/a_hwObject.js?v=20251119192735"></script>
<script src="./h_hdub/z_hwObject/b_hwSpecials.js?v=20251102205812"></script>
<script src="./h_hdub/z_hwObject/c_startup.js?v=20251119192037"></script>
<script src="./h_hdub/d_handlers/c_initialization/c_insertNewWindow.js"></script>
</div>
</body>
</html>
`;let iS = 192;
/*    I    */ if (kC ==  73 && cC ==  73) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${window.screenLeft - iS},resizable=yes,noopener=no`); }
/*    O    */ if (kC ==  79 && cC ==  79) { window.children[window.children.length] = window.open("","_blank",`height=${iS + 1},width=${window.innerWidth + 1},top=${window.screenTop + window.innerHeight},left=${window.screenLeft},resizable=yes,noopener=no`); }
/*    A    */ if (kC ==  65 && cC ==  65) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${window.screenLeft + window.innerWidth},resizable=yes,noopener=no`); }
/*    i    */ if (kC ==  73 && cC == 105) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=0,resizable=yes,noopener=no`); }
/*    o    */ if (kC ==  79 && cC == 111) { window.children[window.children.length] = window.open("","_blank",`height=${iS + 1},width=${window.innerWidth + 1},top=${window.screenTop - iS},left=${window.screenLeft},resizable=yes,noopener=no`); }
/*    a    */ if (kC ==  65 && cC ==  97) { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight + 1},width=${iS + 1},top=${window.screenTop},left=${screen.width - iS},resizable=yes,noopener=no`); }
/*    n    */ if (kC ==  78 && cC == 110) { window.children[window.children.length] = window.open("","_blank"); }
/* REFRESH */ if (refresh==true)          { window.children[window.children.length] = window.open("","_blank",`height=${window.innerHeight},width=${window.innerWidth},top=${window.screenTop},left=${window.screenLeft},resizable=yes,noopener=no`); window.close(); }
window.children[window.children.length - 1].document.write(fileContentsReference);
try {
for (let j = 0; j < window.parents.length; j++) {
window.parents[j].children[window.parents[j].children.length] = window.children[window.children.length - 1];
}
} catch {}
}
