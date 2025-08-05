/***** Use base64 for images that you drag in.
 * Write true if you want that to work that way,
 * otherwise put images in the "/d_images/" directory
 * where this program opens from. *****/

let useBase64forImages = true;
let useBase64forAudio  = true;
let useBase64forVideo  = true;

let mainNote = true;
let HJKLnote = false;
let styleNote= true;

let durationC = 250;
let durationM = 250;
let durationS = 450;

let buttonInitialStyle = `
position: absolute;
z-index: 300;
left:0;
top:0;
width:100%;
height:100%;
border:none;
margin:none;
pointer-events:none;
display:none;
background-color: transparent;
color: #DEFF1C;
text-shadow:
 2px  2px 2px black,
-2px  2px 2px black,
 2px -2px 2px black,
-2px -2px 2px black
;
font-size: 24px;
font-weight: bold;
`;

var styleKey = "a";


/* This is the alignment used for text within the article. */
const
numpadAlignment             = {};
numpadAlignment.partList    = [ "display", "align-items", "justify-content", "text-align" ];
numpadAlignment.num7        = [ "flex",    "flex-start",  "flex-start",      "left"       ];
numpadAlignment.num8        = [ "flex",    "flex-start",  "center",          "center"     ];
numpadAlignment.num9        = [ "flex",    "flex-start",  "flex-end",        "right"      ];
numpadAlignment.num4        = [ "flex",    "center",      "flex-start",      "left"       ];
numpadAlignment.num5        = [ "flex",    "center",      "center",          "center"     ];
numpadAlignment.num6        = [ "flex",    "center",      "flex-end",        "right"      ];
numpadAlignment.num1        = [ "flex",    "flex-end",    "flex-start",      "left"       ];
numpadAlignment.num2        = [ "flex",    "flex-end",    "center",          "center"     ];
numpadAlignment.num3        = [ "flex",    "flex-end",    "flex-end",        "right"      ];
numpadAlignment.num0        = [ "",        "",            "",                "justify"    ];









let outlineTunedSize  = 4; 
let outlineTunedStyle = 0; 
let outlineTunedColour = 'grey'; 

const outlineStyleArray = ["solid ","dashed","dotted","ridge ","groove","double","inset ","outset", ""] 




let shadowTop  = " ";
let shadowLeft = " ";
let shadowSize = 0.01;
let shadowBlur = 2;
let shadowColour = "0,0,0";
let shadowAlpha = 0.50;
let tintArrayNumber = 0;



let borderTopLeftRadiusHold     = 32; 
let borderTopRightRadiusHold    = 32; 
let borderBottomLeftRadiusHold  = 32; 
let borderBottomRightRadiusHold = 32; 




let boxShadowTop  = " ";
let boxShadowLeft = " ";
let boxShadowSize = 2;
let boxShadowBlur = 2;
let boxShadowColourTune = "0,0,0";
let boxShadowAlpha = 0.50;
let boxTintArrayNumber = 0;
let boxShadowFactor = 0.50;



















 
let boxShadowColour  = "rgba(127,127,127,0.75)";
let boxShadowDivisor = 12;

let textShadowColour  = "rgba(127,127,127,0.75)";
let textShadowDivisor = 32;

let outlineColour  = "rgba(127,127,127,0.5)";
let outlineDivisor = 4;


var showPartName = false;

var quitSaveTimeoutSetting = 500;


/* Initial Design Grid Size */var    T=    64;
/*  Scale  Design Grid Size */var  aS1=    16;
/*  Scale  Design Grid Size */var  aS2=    32;
/* Rotate  Design Grid Size */var  aD1=    32;
/* Rotate  Design Grid Size */var  aD2=   180;
/* Design Grid Size Divisor */var    E=     2;

/* The Spatial Cursor Top   */let  cRT=    32;
/* The Spatial Cursor Left  */let  cRL=    32;
/* The Spatial Cursor Size  */let  cSZ=    64;

/* Default Insertion Width  */let   iW=    64;
/* Default Insertion Height */let   iH=    64;

/* Focus Outline            */let   fA=    "2px dashed white";
/* Focus Outline            */let   fB=    "orange solid 3px";

/* The Mouse Cursor Size    */let  mSZ=    64;



/* ECHELON VALUES */

var pageEchelon      = 100000000;
var tricolourEchelon =    250000;
var internalStep     =       100;



/* FONT DECLARATIONS */

const fontDeclaration0    =    `"Helvetica Neue",   Helvetica,            Arial,                  sans-serif                `  ,
      fontDeclaration1    =    ` Georgia,          "Times New Roman",     Times,                       serif                `  ,
      fontDeclaration2    =    ` Verdana,           Tahoma,               Geneva,                 sans-serif                `  ,
      fontDeclaration3    =    `"Trebuchet MS",    "Lucida Grande",      "Segoe UI",              sans-serif                `  ,
      fontDeclaration4    =    `"Courier New",      Courier,              monospace                                         `  ,
      fontDeclaration5    =    ` system-ui,        -apple-system,         BlinkMacSystemFont,    "Segoe UI",      sans-serif`  ;


const fontNames = [ "Arial", "Helvetica", "Verdana", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Lucida Console", "Lucida Sans Unicode", "Palatino Linotype", "Book Antiqua", "Impact", "Comic Sans MS", "Century Gothic", "Calibri", "Cambria", "Candara", "Consolas", "Franklin Gothic Medium", "Gill Sans", "Segoe UI", "Optima", "Futura", "Geneva", "Baskerville", "Droid Sans", "Droid Serif", "Roboto", "Noto Sans", "Noto Serif", "Liberation Sans", "Liberation Serif", "Ubuntu", "sans-serif", "serif", "monospace" ];



let utilityOpacity = 0.75;

/* OPTIONS FOR THE GRID */

/* Utility Background Color Alternate for Construction Mode */var   sL="rgb( 63, 63, 63)";
/* Utility Background Color Alternate for Style Mode        */var    L="rgb( 63, 63, 95)";
/* Finished Document Background Color */var    finishedBackgroundColour="rgb(191,191,191)";

/* Utility Grid Line Color  */var    U="rgb(  0,255,255)";
/* Utility Grid Line Color2 */var    C="rgb(  0,255,  0)";
/* Utility Grid Line Color3 */var    D="rgb(  0,255,255)";
/* Utility Grid Line Size   */var   gW=   "1";
/* Utility Grid Font Select */var   bF="16px monospace";
/* Utility Grid Font Select */var   bFarr="26px monospace";
/* Utility Grid Boundary    */var   bW=  "12";
/* Utility Grid Boundary Col*/var   bU="#F00";
/* Utility Grid Opacity     */var    K="0.25";

/* Utility Indicator Size   */let    O=     8;
/* Utility Indicator Color  */let    N="#0F0";

/* Utility Div Font Size    */let    utilityDivFontSize="32px";

/* Missing Image Colour     */let    noImageColour="transparent";


/* Change mode in all windows    */      var modeLock        = true;
/* Change mode in all windows    */      var referenceLock   = true;

/* Rolls the focus over the end  */ /*   var rollFocus       = true; */ /* not used */



let
/****************************************************************************************************/
/*                 These Determine the Colourations of the Utility Components.                      */
/****************************************************************************************************/
/*                                                                                                  */
/*    Normal State                Tripartite 0           Tripartite 1           Tripartite 2        */
/*                                                                                                  */
/****************************************************************************************************/
/*                        */                                                                      /**/
/*    Tripartite Text     */      Ts0=         "0",      Ts1=         "1",      Ts2=         "?", /**/
/*    Font Family         */      Es0= "monospace",      Es1= "monospace",      Es2= "monospace", /**/
/*    Foreground Color    */      Fs0=      "#000",      Fs1=      "#000",      Fs2=      "#000", /**/
/*    Outline Color       */      Cs0=      "#CCC",      Cs1=      "#A0A",      Cs2=      "#0CC", /**/
/*    Outline Width       */      Ws0=       "2px",      Ws1=       "2px",      Ws2=       "2px", /**/
/*    Outline Style       */      Ss0=    "dashed",      Ss1=    "dashed",      Ss2=    "dashed", /**/
/*    Background Color    */      Bs0=      "rgba(255,255,255,0.5)",      Bs1=      "rgba(255,127,255,0.5)",      Bs2=      "rgba(127,255,255,0.5)", /**/
/*    Opacity             */      Os0=      "1.00",      Os1=      "1.00",      Os2=      "1.00"; /**/
/*                        */                                                                      /**/
/****************************************************************************************************/
/*                                                                                                  */
/*    On Mouse Over               Tripartite 0           Tripartite 1           Tripartite 2        */
/*                                                                                                  */
/****************************************************************************************************/
/*                        */                                                                      /**/
/*    Tripartite Text     */      Tm0=         "0",      Tm1=         "1",      Tm2=         "?", /**/
/*    Font Family         */      Em0= "monospace",      Em1= "monospace",      Em2= "monospace", /**/
/*    Foreground Color    */      Fm0=      "#FFF",      Fm1=      "#FFF",      Fm2=      "#FFF", /**/
/*    Outline Color       */      Cm0=      "#CCC",      Cm1=      "#A0A",      Cm2=      "#0CC", /**/
/*    Outline Width       */      Wm0=       "2px",      Wm1=       "2px",      Wm2=       "2px", /**/
/*    Outline Style       */      Sm0=    "dashed",      Sm1=    "dashed",      Sm2=    "dashed", /**/
/*    Background Color    */      Bm0=      "#CCC",      Bm1=      "#C0C",      Bm2=      "#0CC", /**/
/*    Opacity             */      Om0=      "0.75",      Om1=      "0.75",      Om2=      "0.75", /**/
/*                        */                                                                      /**/
/****************************************************************************************************/
/*                        */                                                                      /**/
/*    Font Size           */      Ds0=      "64px",      Ds1=      "64px",      Ds2=      "64px", /**/
/*    Text Alignment      */      Gs2=      "left";                                               /**/
/*                        */                                                                      /**/
/****************************************************************************************************/



/* The following declaration should be moved to a central declarations file later... */

var mode = 0;










/* This is included here as a reference to the syntax for setting up the dragText interface. */
/* This will determine, from the part, what text will be dragged out if 'mouse-dog'.         */
/* It is unfortunate that a method did not seem apparent but, the syntax is minimal.         */
/* This is the beginning of what must appear on the outer div dataset.dragPull               */
/* The expression must be followed with '= "' and ended suitably                             */
/* ... this will be done automatically by using the dataset.dragPull value.                  */
/* It will not be interpreted directly but, rather will gain access through condition.       */
/* See code at /2_drag...                                                                    */



/*


To these must be added the 'finishing touch' to
define what will be accessed.

"div." is the one that will be generally used.


It is only necessary to complete this by adding the property name only.
If there is no such property name, you may cause an error.


The main outer 'div' gets these:
"style."
"dataset."

This is the 'utility' 'div'.
"utility.style."
"utility.dataset."
"utility."

This is the 'anchor' which contains the next three items listed here.
"anchor.style."
"anchor.dataset."
"anchor."

This is a 'button', it has nicely centered text.
"button.style."
"button.dataset."
"button."

This is the 'div' which most things go into.
"div.style."
"div.dataset."
"div."

This is the 'img' which is behind everything.
"img.style."
"img.dataset."
"img."

This is a 'catch-all' which goes to the outer 'div'.
Do not enter this as the dataset.dragPull value.
"= "

*/
