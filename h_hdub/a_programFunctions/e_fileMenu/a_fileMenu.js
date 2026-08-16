const grid50 = 'h50w50w50h50w50w50';
const grid48 = 'h48w48w48h48w48w48';
const grid32 = 'h32w32w32w32h32w32w32w32h32w32w32w32';
const grid25 = 'h25w25w25w25w25h25w25w25w25w25h25w25w25w25w25h25w25w25w25w25';
const grid24 = 'h24w24w24w24w24h24w24w24w24w24h24w24w24w24w24h24w24w24w24w24';
const grid20 = 'h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20h20w20w20w20w20w20';
const grid16 = 'h16w16w16w16w16w16w16h16w16w16w16w16w16w16h16w16w16w16w16w16w16h16w16w16w16w16w16w16h16w16w16w16w16w16w16h16w16w16w16w16w16w16';


const USER_MENU_DATA = [


/******************************/


{ text: "File", items: [
{ text: "New Project", shortcut: "F5", action: () => { location.reload(); } },
{ text: "Open Project", shortcut: "", action: () => { openProject(); } },
{ text: "Save Project", shortcut: "s", action: () => { saveProject(); } },
{text: "Save Webpage(s)", items: [
{ text: "Save '.zip'" , shortcut: "Website", action: () => { document.getElementById('').click(); } },
{ note: "Save with sources, and in folders as a complete website package. Edit the image atlas, images, and audio later directly." }
]},
{text: "Save Web-Program", items: [
{ text: "Save Pixels" ,  shortcut: "", action: () => { document.getElementById('save200').click(); } },
{ text: "Save Screen Width" , shortcut: "", action: () => { document.getElementById('save300').click(); } },
{ text: "Save VW 500" ,  shortcut: "", action: () => { document.getElementById('save500').click(); } },
{ text: "Save VW 768" ,  shortcut: "", action: () => { document.getElementById('save800').click(); } },
{ text: "Save VW 1000" , shortcut: "", action: () => { document.getElementById('save1000').click(); } },
{ text: "Save VW 1280" , shortcut: "", action: () => { document.getElementById('save1200').click(); } },
{ text: "Save VW 1536" , shortcut: "", action: () => { document.getElementById('save1500').click(); } },
{ text: "Save VW 2000" , shortcut: "", action: () => { document.getElementById('save1800').click(); } },
{ note: "All of these will save the program as a single file with base64 sources. It's not easy to change images etc later. This will make a single-file vanilla web-program. Basically, you could view it and use it from your phone without internet." }
]}
]},


/******************************/


{ text: "buttonCraft",
items: [

{ text: "Example Artwork", items: [
{ note: "A simple explanation of the basic concept." },
{ text: "example-button", action: (data) => { return saveExampleButton(data); } },
{ note: "First choose whether to put one, or put a larger set of artwork:" },
{ text: "readyRabbit One Example", action: (data) => { return saveReadyRabbit(data); } },
{ text: "readyRabbit Large Graphics Set", action: () => { readyDirect(); } },
{ note: "Next use the following button to make a separate window." },
{ text: "Sprite Window", action: () => { clipArtSetup(); } },
{ note: "Clicking the artwork now puts it into the main website scene. Move the new window to a good location." },
]},


{ note: "Do It Yourself" },


{ text: "TEMPLATE", items: [

{ text: "1x-scale", items: [
{ note: "rectangle" },
{ text: "rectangle-100X180", items: [
{ text: "1pc-500x900",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  5, data); } },
{ text: "1pc-600x1080",              action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  6, data); } },
{ text: "1pc-700x1260",              action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  7, data); } },
{ text: "1pc-800x1440",              action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  8, data); } },
{ text: "1pc-900x1620",              action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  9, data); } },
{ text: "1pc-1000x1800",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))), 10, data); } },
{ text: "1pc-1100x1980",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))), 11, data); } },
{ text: "1pc-1200x2160",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))), 12, data); } }
]},
{ text: "v-grid-4-50x90", items: [
{ text: "4pcs-250x450",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  5, data); } },
{ text: "4pcs-300x540",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  6, data); } },
{ text: "4pcs-350x630",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  7, data); } },
{ text: "4pcs-400x720",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  8, data); } },
{ text: "4pcs-450x810",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  9, data); } },
{ text: "4pcs-500x900",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))), 10, data); } },
{ text: "4pcs-550x990",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))), 11, data); } },
{ text: "4pcs-600x1080",              action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))), 12, data); } }
]},
{ text: "v-grid-16-25x45", items: [
{ text: "16pcs-125x225",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  5, data); } },
{ text: "16pcs-150x270",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  6, data); } },
{ text: "16pcs-175x315",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  7, data); } },
{ text: "16pcs-200x360",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  8, data); } },
{ text: "16pcs-225x405",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  9, data); } },
{ text: "16pcs-250x450",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))), 10, data); } },
{ text: "16pcs-275x495",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))), 11, data); } },
{ text: "16pcs-300x540",             action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))), 12, data); } }
]},
{ text: "h-grid-8-100x45", items: [
{ text: "8pcs-500x225",                action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  5, data); } },
{ text: "8pcs-600x270",                action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  6, data); } },
{ text: "8pcs-700x315",                action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  7, data); } },
{ text: "8pcs-800x360",                action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  8, data); } },
{ text: "8pcs-900x405",                action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  9, data); } },
{ text: "8pcs-1000x450",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))), 10, data); } },
{ text: "8pcs-1100x495",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))), 11, data); } },
{ text: "8pcs-1200x540",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))), 12, data); } }
]},
{ text: "h-grid-18-50x20", items: [
{ text: "18pcs-250x100",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  5, data); } },
{ text: "18pcs-300x120",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  6, data); } },
{ text: "18pcs-350x140",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  7, data); } },
{ text: "18pcs-400x160",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  8, data); } },
{ text: "18pcs-450x180",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  9, data); } },
{ text: "18pcs-500x200",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))), 10, data); } },
{ text: "18pcs-550x220",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))), 11, data); } },
{ text: "18pcs-600x240",               action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))), 12, data); } }
]},
{ note: "square-100" },
{ text: "square-100", items: [
{ text: "1pc-500x500",               action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  5, data); } },
{ text: "1pc-600x600",               action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  6, data); } },
{ text: "1pc-700x700",               action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  7, data); } },
{ text: "1pc-800x800",               action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  8, data); } },
{ text: "1pc-900x900",               action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  9, data); } },
{ text: "1pc-1000x1000",             action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))), 10, data); } },
{ text: "1pc-1100x1100",             action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))), 11, data); } },
{ text: "1pc-1200x1200",             action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))), 12, data); } }
]},
{ text: "grid-4-50", items: [
{ text: "4pcs-250x250  ",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  5, data); } },
{ text: "4pcs-300x300  ",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  6, data); } },
{ text: "4pcs-350x350  ",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  7, data); } },
{ text: "4pcs-400x400  ",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  8, data); } },
{ text: "4pcs-450x450  ",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  9, data); } },
{ text: "4pcs-500x500  ",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))), 10, data); } },
{ text: "4pcs-550x550  ",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))), 11, data); } },
{ text: "4pcs-600x600  ",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))), 12, data); } }
]},
{ text: "grid-16-25", items: [
{ text: "16pcs-125x125",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  5, data); } },
{ text: "16pcs-150x150",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  6, data); } },
{ text: "16pcs-175x175",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  7, data); } },
{ text: "16pcs-200x200",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  8, data); } },
{ text: "16pcs-225x225",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  9, data); } },
{ text: "16pcs-250x250",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))), 10, data); } },
{ text: "16pcs-275x275",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))), 11, data); } },
{ text: "16pcs-300x300",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))), 12, data); } }
]},
{ text: "grid-25-20", items: [
{ text: "25pcs-100x100",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  5, data); } },
{ text: "25pcs-120x120",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  6, data); } },
{ text: "25pcs-140x140",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  7, data); } },
{ text: "25pcs-160x160",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  8, data); } },
{ text: "25pcs-180x180",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  9, data); } },
{ text: "25pcs-200x200",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))), 10, data); } },
{ text: "25pcs-220x220",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))), 11, data); } },
{ text: "25pcs-240x240",              action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))), 12, data); } }
]},
{ note: "square-96" },
{ text: "square-96", items: [
{ text: "1pc-480x480  ",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  5, data); } },
{ text: "1pc-576x576  ",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  6, data); } },
{ text: "1pc-672x672  ",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  7, data); } },
{ text: "1pc-768x768  ",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  8, data); } },
{ text: "1pc-864x864  ",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  9, data); } },
{ text: "1pc-960x960  ",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))), 10, data); } },
{ text: "1pc-1056x1056",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))), 11, data); } },
{ text: "1pc-1152x1152",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))), 12, data); } }
]},
{ text: "grid-4-48", items: [
{ text: "4pcs-240x240",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  5, data); } },
{ text: "4pcs-288x288",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  6, data); } },
{ text: "4pcs-336x336",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  7, data); } },
{ text: "4pcs-384x384",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  8, data); } },
{ text: "4pcs-432x432",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  9, data); } },
{ text: "4pcs-480x480",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))), 10, data); } },
{ text: "4pcs-528x528",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))), 11, data); } },
{ text: "4pcs-576x576",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))), 12, data); } }
]},
{ text: "grid-9-32", items: [
{ text: "9pcs-160x160",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  5, data); } },
{ text: "9pcs-192x192",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  6, data); } },
{ text: "9pcs-224x224",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  7, data); } },
{ text: "9pcs-256x256",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  8, data); } },
{ text: "9pcs-288x288",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  9, data); } },
{ text: "9pcs-320x320",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))), 10, data); } },
{ text: "9pcs-352x352",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))), 11, data); } },
{ text: "9pcs-384x384",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))), 12, data); } }
]},
{ text: "grid-16-24", items: [
{ text: "16pcs-120x120",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  5, data); } },
{ text: "16pcs-144x144",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  6, data); } },
{ text: "16pcs-168x168",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  7, data); } },
{ text: "16pcs-192x192",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  8, data); } },
{ text: "16pcs-216x216",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  9, data); } },
{ text: "16pcs-240x240",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))), 10, data); } },
{ text: "16pcs-264x264",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))), 11, data); } },
{ text: "16pcs-288x288",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))), 12, data); } }
]},
{ text: "grid-36-16", items: [
{ text: "36pcs-80x80  ",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  5, data); } },
{ text: "36pcs-96x96  ",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  6, data); } },
{ text: "36pcs-112x112",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  7, data); } },
{ text: "36pcs-128x128",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  8, data); } },
{ text: "36pcs-144x144",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  9, data); } },
{ text: "36pcs-160x160",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))), 10, data); } },
{ text: "36pcs-176x176",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))), 11, data); } },
{ text: "36pcs-192x192",              action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))), 12, data); } }
]}
]},




{ text: "10x-upscale", items: [
{ note: "rectangle" },
{ text: "1pc-100x180-10x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  1, data); } },
{ text: "4pcs-50x90-10x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  1, data); } },
{ text: "16pcs-25x45-10x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  1, data); } },
{ text: "8pcs-100x45-10x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  1, data); } },
{ text: "18pcs-50x20-10x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  1, data); } },
{ note: "square-100" },
{ text: "1pc-100x100-10x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  1, data); } },
{ text: "4pcs-50x50-10x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  1, data); } },
{ text: "16pcs-25x25-10x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  1, data); } },
{ text: "25pcs-20x20-10x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  1, data); } },
{ note: "square-96" },
{ text: "1pc-96x96-10x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  1, data); } },
{ text: "4pcs-48x48-10x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  1, data); } },
{ text: "9pcs-32x32-10x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  1, data); } },
{ text: "16pcs-24x24-10x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  1, data); } },
{ text: "36pcs-16x16-10x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  1, data); } },
]},
{ text: "8x-upscale", items: [
{ note: "rectangle" },
{ text: "1pc-200x360-8x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  2, data); } },
{ text: "4pcs-100x180-8x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  2, data); } },
{ text: "16pcs-50x90-8x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  2, data); } },
{ text: "8pcs-200x90-8x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  2, data); } },
{ text: "18pcs-100x40-8x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  2, data); } },
{ note: "square-100" },
{ text: "1pc-200x200-8x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  2, data); } },
{ text: "4pcs-100x100-8x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  2, data); } },
{ text: "16pcs-50x50-8x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  2, data); } },
{ text: "25pcs-40x40-8x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  2, data); } },
{ note: "square-96" },
{ text: "1pc-192x192-8x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  2, data); } },
{ text: "4pcs-96x96-8x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  2, data); } },
{ text: "9pcs-64x64-8x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  2, data); } },
{ text: "16pcs-48x48-8x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  2, data); } },
{ text: "36pcs-32x32-8x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  2, data); } },
]},
{ text: "6x-upscale", items: [
{ note: "rectangle" },
{ text: "1pc-300x540-6x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  3, data); } },
{ text: "4pcs-150x270-6x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  3, data); } },
{ text: "16pcs-75x135-6x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  3, data); } },
{ text: "8pcs-300x135-6x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  3, data); } },
{ text: "18pcs-150x60-6x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  3, data); } },
{ note: "square-100" },
{ text: "1pc-300x300-6x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  3, data); } },
{ text: "4pcs-150x150-6x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  3, data); } },
{ text: "16pcs-75x75-6x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  3, data); } },
{ text: "25pcs-60x60-6x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  3, data); } },
{ note: "square-96" },
{ text: "1pc-288x288-6x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  3, data); } },
{ text: "4pcs-144x144-6x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  3, data); } },
{ text: "9pcs-96x96-6x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  3, data); } },
{ text: "16pcs-72x72-6x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  3, data); } },
{ text: "36pcs-48x48-6x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  3, data); } },
]},
{ text: "5x-upscale", items: [
{ note: "rectangle" },
{ text: "1pc-400x720-5x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h180w100'))),  4, data); } },
{ text: "4pcs-200x360-5x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h90w50w50h90w50w50'))),  4, data); } },
{ text: "16pcs-100x180-5x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25'))),  4, data); } },
{ text: "8pcs-400x180-5x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h45w100h45w100h45w100h45w100'))),  4, data); } },
{ text: "18pcs-200x80-5x-upscale", action: (data) => { return shapeTemplate(cropObject(100, 180, makeObject(clean('h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50'))),  4, data); } },
{ note: "square-100" },
{ text: "1pc-400x400-5x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean('h100w100'))),  4, data); } },
{ text: "4pcs-200x200-5x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid50))),  4, data); } },
{ text: "16pcs-100x100-5x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid25))),  4, data); } },
{ text: "25pcs-80x80-5x-upscale", action: (data) => { return sq100(cropObject(100, 100, makeObject(clean(grid20))),  4, data); } },
{ note: "square-96" },
{ text: "1pc-384x384-5x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean('h96w96'))),  4, data); } },
{ text: "4pcs-192x192-5x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid48))),  4, data); } },
{ text: "9pcs-128x128-5x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid32))),  4, data); } },
{ text: "16pcs-96x96-5x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid24))),  4, data); } },
{ text: "36pcs-64x64-5x-upscale", action: (data) => { return sq96(cropObject(100, 100, makeObject(clean(grid16))),  4, data); } },
]},



]},









{ text: "READY", items: [

{ text: "1x-scale", items: [
{ note: "rectangle" },
{ text: "rectangle-100x180", items: [
{ text: "1pc-500x900",               action: (data) => { return saveRectangle(100, 180, 4,   "h900w500", 5, data); } },
{ text: "1pc-600x1080",              action: (data) => { return saveRectangle(100, 180, 4,  "h1080w600", 6, data); } },
{ text: "1pc-700x1260",              action: (data) => { return saveRectangle(100, 180, 4,  "h1260w700", 7, data); } },
{ text: "1pc-800x1440",              action: (data) => { return saveRectangle(100, 180, 4,  "h1440w800", 8, data); } },
{ text: "1pc-900x1620",              action: (data) => { return saveRectangle(100, 180, 4,  "h1620w900", 9, data); } },
{ text: "1pc-1000x1800",             action: (data) => { return saveRectangle(100, 180, 4, "h1800w1000",10, data); } },
{ text: "1pc-1100x1980",             action: (data) => { return saveRectangle(100, 180, 4, "h1980w1100",11, data); } },
{ text: "1pc-1200x2160",             action: (data) => { return saveRectangle(100, 180, 4, "h2160w1200",12, data); } }
]},
{ text: "v-grid-4-50x90", items: [
{ text: "4pcs-250x450",               action: (data) => { return saveRectangle(50, 90, 4, "h450w250w250h450w250w250"      , 5, data); } },
{ text: "4pcs-300x540",               action: (data) => { return saveRectangle(50, 90, 4, "h540w300w300h540w300w300"      , 6, data); } },
{ text: "4pcs-350x630",               action: (data) => { return saveRectangle(50, 90, 4, "h630w350w350h630w350w350"      , 7, data); } },
{ text: "4pcs-400x720",               action: (data) => { return saveRectangle(50, 90, 4, "h720w400w400h720w400w400"      , 8, data); } },
{ text: "4pcs-450x810",               action: (data) => { return saveRectangle(50, 90, 4, "h810w450w450h810w450w450"      , 9, data); } },
{ text: "4pcs-500x900",               action: (data) => { return saveRectangle(50, 90, 4, "h900w500w500h900w500w500"      ,10, data); } },
{ text: "4pcs-550x990",               action: (data) => { return saveRectangle(50, 90, 4, "h990w550w550h990w550w550"      ,11, data); } },
{ text: "4pcs-600x1080",              action: (data) => { return saveRectangle(50, 90, 4, "h1080w600w600h1080w600w600"    ,12, data); } }
]},
{ text: "v-grid-16-25x45", items: [
{ text: "16pcs-125x225",             action: (data) => { return saveRectangle(25, 45, 4, "h225w125w125w125w125h225w125w125w125w125h225w125w125w125w125h225w125w125w125w125", 5, data); } },
{ text: "16pcs-150x270",             action: (data) => { return saveRectangle(25, 45, 4, "h270w150w150w150w150h270w150w150w150w150h270w150w150w150w150h270w150w150w150w150", 6, data); } },
{ text: "16pcs-175x315",             action: (data) => { return saveRectangle(25, 45, 4, "h315w175w175w175w175h315w175w175w175w175h315w175w175w175w175h315w175w175w175w175", 7, data); } },
{ text: "16pcs-200x360",             action: (data) => { return saveRectangle(25, 45, 4, "h360w200w200w200w200h360w200w200w200w200h360w200w200w200w200h360w200w200w200w200", 8, data); } },
{ text: "16pcs-225x405",             action: (data) => { return saveRectangle(25, 45, 4, "h405w225w225w225w225h405w225w225w225w225h405w225w225w225w225h405w225w225w225w225", 9, data); } },
{ text: "16pcs-250x450",             action: (data) => { return saveRectangle(25, 45, 4, "h450w250w250w250w250h450w250w250w250w250h450w250w250w250w250h450w250w250w250w250",10, data); } },
{ text: "16pcs-275x495",             action: (data) => { return saveRectangle(25, 45, 4, "h495w275w275w275w275h495w275w275w275w275h495w275w275w275w275h495w275w275w275w275",11, data); } },
{ text: "16pcs-300x540",             action: (data) => { return saveRectangle(25, 45, 4, "h540w300w300w300w300h540w300w300w300w300h540w300w300w300w300h540w300w300w300w300",12, data); } }
]},
{ text: "h-grid-8-100x45", items: [
{ text: "8pcs-500x225",                action: (data) => { return saveRectangle(100, 45, 4, "h225w500h225w500h225w500h225w500"    , 5, data); } },
{ text: "8pcs-600x270",                action: (data) => { return saveRectangle(100, 45, 4, "h270w600h270w600h270w600h270w600"    , 6, data); } },
{ text: "8pcs-700x315",                action: (data) => { return saveRectangle(100, 45, 4, "h315w700h315w700h315w700h315w700"    , 7, data); } },
{ text: "8pcs-800x360",                action: (data) => { return saveRectangle(100, 45, 4, "h360w800h360w800h360w800h360w800"    , 8, data); } },
{ text: "8pcs-900x405",                action: (data) => { return saveRectangle(100, 45, 4, "h405w900h405w900h405w900h405w900"    , 9, data); } },
{ text: "8pcs-1000x450",               action: (data) => { return saveRectangle(100, 45, 4, "h450w1000h450w1000h450w1000h450w1000",10, data); } },
{ text: "8pcs-1100x495",               action: (data) => { return saveRectangle(100, 45, 4, "h495w1100h495w1100h495w1100h495w1100",11, data); } },
{ text: "8pcs-1200x540",               action: (data) => { return saveRectangle(100, 45, 4, "h540w1200h540w1200h540w1200h540w1200",12, data); } }
]},
{ text: "h-grid-18-50x20", items: [
{ text: "18pcs-250x100",               action: (data) => { return saveRectangle(50, 20, 4, "h100w250w250h100w250w250h100w250w250h100w250w250h100w250w250h100w250w250h100w250w250h100w250w250h100w250w250"                  , 5, data); } },
{ text: "18pcs-300x120",               action: (data) => { return saveRectangle(50, 20, 4, "h120w300w300h120w300w300h120w300w300h120w300w300h120w300w300h120w300w300h120w300w300h120w300w300h120w300w300"                  , 6, data); } },
{ text: "18pcs-350x140",               action: (data) => { return saveRectangle(50, 20, 4, "h140w350w350h140w350w350h140w350w350h140w350w350h140w350w350h140w350w350h140w350w350h140w350w350h140w350w350"                  , 7, data); } },
{ text: "18pcs-400x160",               action: (data) => { return saveRectangle(50, 20, 4, "h160w400w400h160w400w400h160w400w400h160w400w400h160w400w400h160w400w400h160w400w400h160w400w400h160w400w400"                  , 8, data); } },
{ text: "18pcs-450x180",               action: (data) => { return saveRectangle(50, 20, 4, "h180w450w450h180w450w450h180w450w450h180w450w450h180w450w450h180w450w450h180w450w450h180w450w450h180w450w450"                  , 9, data); } },
{ text: "18pcs-500x200",               action: (data) => { return saveRectangle(50, 20, 4, "h200w500w500h200w500w500h200w500w500h200w500w500h200w500w500h200w500w500h200w500w500h200w500w500h200w500w500"                  ,10, data); } },
{ text: "18pcs-550x220",               action: (data) => { return saveRectangle(50, 20, 4, "h220w550w550h220w550w550h220w550w550h220w550w550h220w550w550h220w550w550h220w550w550h220w550w550h220w550w550"                  ,11, data); } },
{ text: "18pcs-600x240",               action: (data) => { return saveRectangle(50, 20, 4, "h240w600w600h240w600w600h240w600w600h240w600w600h240w600w600h240w600w600h240w600w600h240w600w600h240w600w600"                  ,12, data); } }
]},

{ note: "square-100" },
{ text: "square-100", items: [
{ text: "1pc-500x500",               action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  5, data); } },
{ text: "1pc-600x600",               action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  6, data); } },
{ text: "1pc-700x700",               action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  7, data); } },
{ text: "1pc-800x800",               action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  8, data); } },
{ text: "1pc-900x900",               action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  9, data); } },
{ text: "1pc-1000x1000",             action: (data) => { return saveReady100(100, 100, 4, 'h100w100', 10, data); } },
{ text: "1pc-1100x1100",             action: (data) => { return saveReady100(100, 100, 4, 'h100w100', 11, data); } },
{ text: "1pc-1200x1200",             action: (data) => { return saveReady100(100, 100, 4, 'h100w100', 12, data); } }
]},
{ text: "grid-4-50", items: [
{ text: "4pcs-250x250  ",              action: (data) => { return saveReady100(50, 50, 4, grid50,  5, data); } },
{ text: "4pcs-300x300  ",              action: (data) => { return saveReady100(50, 50, 4, grid50,  6, data); } },
{ text: "4pcs-350x350  ",              action: (data) => { return saveReady100(50, 50, 4, grid50,  7, data); } },
{ text: "4pcs-400x400  ",              action: (data) => { return saveReady100(50, 50, 4, grid50,  8, data); } },
{ text: "4pcs-450x450  ",              action: (data) => { return saveReady100(50, 50, 4, grid50,  9, data); } },
{ text: "4pcs-500x500  ",              action: (data) => { return saveReady100(50, 50, 4, grid50, 10, data); } },
{ text: "4pcs-550x550  ",              action: (data) => { return saveReady100(50, 50, 4, grid50, 11, data); } },
{ text: "4pcs-600x600  ",              action: (data) => { return saveReady100(50, 50, 4, grid50, 12, data); } }
]},
{ text: "grid-16-25", items: [
{ text: "16pcs-125x125",              action: (data) => { return saveReady100(25, 25, 4, grid25,  5, data); } },
{ text: "16pcs-150x150",              action: (data) => { return saveReady100(25, 25, 4, grid25,  6, data); } },
{ text: "16pcs-175x175",              action: (data) => { return saveReady100(25, 25, 4, grid25,  7, data); } },
{ text: "16pcs-200x200",              action: (data) => { return saveReady100(25, 25, 4, grid25,  8, data); } },
{ text: "16pcs-225x225",              action: (data) => { return saveReady100(25, 25, 4, grid25,  9, data); } },
{ text: "16pcs-250x250",              action: (data) => { return saveReady100(25, 25, 4, grid25, 10, data); } },
{ text: "16pcs-275x275",              action: (data) => { return saveReady100(25, 25, 4, grid25, 11, data); } },
{ text: "16pcs-300x300",              action: (data) => { return saveReady100(25, 25, 4, grid25, 12, data); } }
]},
{ text: "grid-25-20", items: [
{ text: "25pcs-100x100",              action: (data) => { return saveReady100(20, 20, 4, grid20,  5, data); } },
{ text: "25pcs-120x120",              action: (data) => { return saveReady100(20, 20, 4, grid20,  6, data); } },
{ text: "25pcs-140x140",              action: (data) => { return saveReady100(20, 20, 4, grid20,  7, data); } },
{ text: "25pcs-160x160",              action: (data) => { return saveReady100(20, 20, 4, grid20,  8, data); } },
{ text: "25pcs-180x180",              action: (data) => { return saveReady100(20, 20, 4, grid20,  9, data); } },
{ text: "25pcs-200x200",              action: (data) => { return saveReady100(20, 20, 4, grid20, 10, data); } },
{ text: "25pcs-220x220",              action: (data) => { return saveReady100(20, 20, 4, grid20, 11, data); } },
{ text: "25pcs-240x240",              action: (data) => { return saveReady100(20, 20, 4, grid20, 12, data); } }
]},

{ note: "square-96" },
{ text: "square-96", items: [
{ text: "1pc-480x480  ",              action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  5, data); } },
{ text: "1pc-576x576  ",              action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  6, data); } },
{ text: "1pc-672x672  ",              action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  7, data); } },
{ text: "1pc-768x768  ",              action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  8, data); } },
{ text: "1pc-864x864  ",              action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  9, data); } },
{ text: "1pc-960x960  ",              action: (data) => { return saveReady96(96, 96, 4, 'h96w96', 10, data); } },
{ text: "1pc-1056x1056",              action: (data) => { return saveReady96(96, 96, 4, 'h96w96', 11, data); } },
{ text: "1pc-1152x1152",              action: (data) => { return saveReady96(96, 96, 4, 'h96w96', 12, data); } }
]},
{ text: "grid-4-48", items: [
{ text: "4pcs-240x240",              action: (data) => { return saveReady96(48, 48, 4, grid48,  5, data); } },
{ text: "4pcs-288x288",              action: (data) => { return saveReady96(48, 48, 4, grid48,  6, data); } },
{ text: "4pcs-336x336",              action: (data) => { return saveReady96(48, 48, 4, grid48,  7, data); } },
{ text: "4pcs-384x384",              action: (data) => { return saveReady96(48, 48, 4, grid48,  8, data); } },
{ text: "4pcs-432x432",              action: (data) => { return saveReady96(48, 48, 4, grid48,  9, data); } },
{ text: "4pcs-480x480",              action: (data) => { return saveReady96(48, 48, 4, grid48, 10, data); } },
{ text: "4pcs-528x528",              action: (data) => { return saveReady96(48, 48, 4, grid48, 11, data); } },
{ text: "4pcs-576x576",              action: (data) => { return saveReady96(48, 48, 4, grid48, 12, data); } }
]},
{ text: "grid-9-32", items: [
{ text: "9pcs-160x160",              action: (data) => { return saveReady96(32, 32, 4, grid32,  5, data); } },
{ text: "9pcs-192x192",              action: (data) => { return saveReady96(32, 32, 4, grid32,  6, data); } },
{ text: "9pcs-224x224",              action: (data) => { return saveReady96(32, 32, 4, grid32,  7, data); } },
{ text: "9pcs-256x256",              action: (data) => { return saveReady96(32, 32, 4, grid32,  8, data); } },
{ text: "9pcs-288x288",              action: (data) => { return saveReady96(32, 32, 4, grid32,  9, data); } },
{ text: "9pcs-320x320",              action: (data) => { return saveReady96(32, 32, 4, grid32, 10, data); } },
{ text: "9pcs-352x352",              action: (data) => { return saveReady96(32, 32, 4, grid32, 11, data); } },
{ text: "9pcs-384x384",              action: (data) => { return saveReady96(32, 32, 4, grid32, 12, data); } }
]},
{ text: "grid-16-24", items: [
{ text: "16pcs-120x120",              action: (data) => { return saveReady96(24, 24, 4, grid24,  5, data); } },
{ text: "16pcs-144x144",              action: (data) => { return saveReady96(24, 24, 4, grid24,  6, data); } },
{ text: "16pcs-168x168",              action: (data) => { return saveReady96(24, 24, 4, grid24,  7, data); } },
{ text: "16pcs-192x192",              action: (data) => { return saveReady96(24, 24, 4, grid24,  8, data); } },
{ text: "16pcs-216x216",              action: (data) => { return saveReady96(24, 24, 4, grid24,  9, data); } },
{ text: "16pcs-240x240",              action: (data) => { return saveReady96(24, 24, 4, grid24, 10, data); } },
{ text: "16pcs-264x264",              action: (data) => { return saveReady96(24, 24, 4, grid24, 11, data); } },
{ text: "16pcs-288x288",              action: (data) => { return saveReady96(24, 24, 4, grid24, 12, data); } }
]},
{ text: "grid-36-16", items: [
{ text: "36pcs-80x80  ",              action: (data) => { return saveReady96(16, 16, 4, grid16,  5, data); } },
{ text: "36pcs-96x96  ",              action: (data) => { return saveReady96(16, 16, 4, grid16,  6, data); } },
{ text: "36pcs-112x112",              action: (data) => { return saveReady96(16, 16, 4, grid16,  7, data); } },
{ text: "36pcs-128x128",              action: (data) => { return saveReady96(16, 16, 4, grid16,  8, data); } },
{ text: "36pcs-144x144",              action: (data) => { return saveReady96(16, 16, 4, grid16,  9, data); } },
{ text: "36pcs-160x160",              action: (data) => { return saveReady96(16, 16, 4, grid16, 10, data); } },
{ text: "36pcs-176x176",              action: (data) => { return saveReady96(16, 16, 4, grid16, 11, data); } },
{ text: "36pcs-192x192",              action: (data) => { return saveReady96(16, 16, 4, grid16, 12, data); } }
]}
]},






{ text: "10x-upscale", items: [
{ note: "rectangle" },
{ text: "1pc-100x180-10x-upscale", action: (data) => { return saveRectangle(100, 180, 4,   "h180w100", 1, data); } },
{ text: "4pcs-50x90-10x-upscale", action: (data) => { return saveRectangle(50, 90, 4, "h90w50w50h90w50w50"            , 1, data); } },
{ text: "16pcs-25x45-10x-upscale", action: (data) => { return saveRectangle(25, 45, 4, "h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25h45w25w25w25w25"                    , 1, data); } },
{ text: "8pcs-100x45-10x-upscale", action: (data) => { return saveRectangle(100, 45, 4, "h45w100h45w100h45w100h45w100"        , 1, data); } },
{ text: "18pcs-50x20-10x-upscale", action: (data) => { return saveRectangle(50, 20, 4, "h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50h20w50w50"                                             , 1, data); } },
{ note: "square-100" },
{ text: "1pc-100x100-10x-upscale", action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  1, data); } },
{ text: "4pcs-50x50-10x-upscale", action: (data) => { return saveReady100(50, 50, 4, grid50,  1, data); } },
{ text: "16pcs-25x25-10x-upscale", action: (data) => { return saveReady100(25, 25, 4, grid25,  1, data); } },
{ text: "25pcs-20x20-10x-upscale", action: (data) => { return saveReady100(20, 20, 4, grid20,  1, data); } },
{ note: "square-96" },
{ text: "1pc-96x96-10x-upscale", action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  1, data); } },
{ text: "4pcs-48x48-10x-upscale", action: (data) => { return saveReady96(48, 48, 4, grid48,  1, data); } },
{ text: "9pcs-32x32-10x-upscale", action: (data) => { return saveReady96(32, 32, 4, grid32,  1, data); } },
{ text: "16pcs-24x24-10x-upscale", action: (data) => { return saveReady96(24, 24, 4, grid24,  1, data); } },
{ text: "36pcs-16x16-10x-upscale", action: (data) => { return saveReady96(16, 16, 4, grid16,  1, data); } },
]},
{ text: "8x-upscale", items: [
{ note: "rectangle" },
{ text: "1pc-200x360-8x-upscale", action: (data) => { return saveRectangle(100, 180, 4,   "h360w200", 2, data); } },
{ text: "4pcs-100x180-8x-upscale", action: (data) => { return saveRectangle(50, 90, 4, "h180w100w100h180w100w100"      , 2, data); } },
{ text: "16pcs-50x90-8x-upscale", action: (data) => { return saveRectangle(25, 45, 4, "h90w50w50w50w50h90w50w50w50w50h90w50w50w50w50h90w50w50w50w50"                    , 2, data); } },
{ text: "8pcs-200x90-8x-upscale", action: (data) => { return saveRectangle(100, 45, 4, "h90w200h90w200h90w200h90w200"        , 2, data); } },
{ text: "18pcs-100x40-8x-upscale", action: (data) => { return saveRectangle(50, 20, 4, "h40w100w100h40w100w100h40w100w100h40w100w100h40w100w100h40w100w100h40w100w100h40w100w100h40w100w100"                           , 2, data); } },
{ note: "square-100" },
{ text: "1pc-200x200-8x-upscale", action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  2, data); } },
{ text: "4pcs-100x100-8x-upscale", action: (data) => { return saveReady100(50, 50, 4, grid50,  2, data); } },
{ text: "16pcs-50x50-8x-upscale", action: (data) => { return saveReady100(25, 25, 4, grid25,  2, data); } },
{ text: "25pcs-40x40-8x-upscale", action: (data) => { return saveReady100(20, 20, 4, grid20,  2, data); } },
{ note: "square-96" },
{ text: "1pc-192x192-8x-upscale", action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  2, data); } },
{ text: "4pcs-96x96-8x-upscale", action: (data) => { return saveReady96(48, 48, 4, grid48,  2, data); } },
{ text: "9pcs-64x64-8x-upscale", action: (data) => { return saveReady96(32, 32, 4, grid32,  2, data); } },
{ text: "16pcs-48x48-8x-upscale", action: (data) => { return saveReady96(24, 24, 4, grid24,  2, data); } },
{ text: "36pcs-32x32-8x-upscale", action: (data) => { return saveReady96(16, 16, 4, grid16,  2, data); } },
]},
{ text: "6x-upscale", items: [
{ note: "rectangle" },
{ text: "1pc-300x540-6x-upscale", action: (data) => { return saveRectangle(100, 180, 4,   "h540w300", 3, data); } },
{ text: "4pcs-150x270-6x-upscale", action: (data) => { return saveRectangle(50, 90, 4, "h270w150w150h270w150w150"      , 3, data); } },
{ text: "16pcs-75x135-6x-upscale", action: (data) => { return saveRectangle(25, 45, 4, "h135w75w75w75w75h135w75w75w75w75h135w75w75w75w75h135w75w75w75w75"                , 3, data); } },
{ text: "8pcs-300x135-6x-upscale", action: (data) => { return saveRectangle(100, 45, 4, "h135w300h135w300h135w300h135w300"    , 3, data); } },
{ text: "18pcs-150x60-6x-upscale", action: (data) => { return saveRectangle(50, 20, 4, "h60w150w150h60w150w150h60w150w150h60w150w150h60w150w150h60w150w150h60w150w150h60w150w150h60w150w150"                           , 3, data); } },
{ note: "square-100" },
{ text: "1pc-300x300-6x-upscale", action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  3, data); } },
{ text: "4pcs-150x150-6x-upscale", action: (data) => { return saveReady100(50, 50, 4, grid50,  3, data); } },
{ text: "16pcs-75x75-6x-upscale", action: (data) => { return saveReady100(25, 25, 4, grid25,  3, data); } },
{ text: "25pcs-60x60-6x-upscale", action: (data) => { return saveReady100(20, 20, 4, grid20,  3, data); } },
{ note: "square-96" },
{ text: "1pc-288x288-6x-upscale", action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  3, data); } },
{ text: "4pcs-144x144-6x-upscale", action: (data) => { return saveReady96(48, 48, 4, grid48,  3, data); } },
{ text: "9pcs-96x96-6x-upscale", action: (data) => { return saveReady96(32, 32, 4, grid32,  3, data); } },
{ text: "16pcs-72x72-6x-upscale", action: (data) => { return saveReady96(24, 24, 4, grid24,  3, data); } },
{ text: "36pcs-48x48-6x-upscale", action: (data) => { return saveReady96(16, 16, 4, grid16,  3, data); } },
]},
{ text: "5x-upscale", items: [
{ note: "rectangle" },
{ text: "1pc-400x720-5x-upscale", action: (data) => { return saveRectangle(100, 180, 4,   "h720w400", 4, data); } },
{ text: "4pcs-200x360-5x-upscale", action: (data) => { return saveRectangle(50, 90, 4, "h360w200w200h360w200w200"      , 4, data); } },
{ text: "16pcs-100x180-5x-upscale", action: (data) => { return saveRectangle(25, 45, 4, "h180w100w100w100w100h180w100w100w100w100h180w100w100w100w100h180w100w100w100w100", 4, data); } },
{ text: "8pcs-400x180-5x-upscale", action: (data) => { return saveRectangle(100, 45, 4, "h180w400h180w400h180w400h180w400"    , 4, data); } },
{ text: "18pcs-200x80-5x-upscale", action: (data) => { return saveRectangle(50, 20, 4, "h80w200w200h80w200w200h80w200w200h80w200w200h80w200w200h80w200w200h80w200w200h80w200w200h80w200w200"                           , 4, data); } },
{ note: "square-100" },
{ text: "1pc-400x400-5x-upscale", action: (data) => { return saveReady100(100, 100, 4, 'h100w100',  4, data); } },
{ text: "4pcs-200x200-5x-upscale", action: (data) => { return saveReady100(50, 50, 4, grid50,  4, data); } },
{ text: "16pcs-100x100-5x-upscale", action: (data) => { return saveReady100(25, 25, 4, grid25,  4, data); } },
{ text: "25pcs-80x80-5x-upscale", action: (data) => { return saveReady100(20, 20, 4, grid20,  4, data); } },
{ note: "square-96" },
{ text: "1pc-384x384-5x-upscale", action: (data) => { return saveReady96(96, 96, 4, 'h96w96',  4, data); } },
{ text: "4pcs-192x192-5x-upscale", action: (data) => { return saveReady96(48, 48, 4, grid48,  4, data); } },
{ text: "9pcs-128x128-5x-upscale", action: (data) => { return saveReady96(32, 32, 4, grid32,  4, data); } },
{ text: "16pcs-96x96-5x-upscale", action: (data) => { return saveReady96(24, 24, 4, grid24,  4, data); } },
{ text: "36pcs-64x64-5x-upscale", action: (data) => { return saveReady96(16, 16, 4, grid16,  4, data); } },
]}



]},

{ text: "Sprite Window", action: () => { clipArtSetup(); } },

{ note: "Arrange your buttons first, then use the sprite-window to roll them out into the scene." }


















]
},


/******************************/


{ text: "Level", items: [
{ text: "Next Level", shortcut: "Shift+>", action: () => { layerRight(); lastKey = ">"; } },
{ text: "Previous Level", shortcut: "Shift+<", action: () => { layerLeft(); lastKey = "<"; } },
{ text: "Select Level", items: [
{ text: "Levels 1-10", items: [
{ text: "Goto Level 1" , shortcut: "1", action: () => { changeLayer("b_layer1" ); lastKey = "1"; } },
{ text: "Goto Level 2" , shortcut: "2", action: () => { changeLayer("c_layer2" ); lastKey = "2"; } },
{ text: "Goto Level 3" , shortcut: "3", action: () => { changeLayer("d_layer3" ); lastKey = "3"; } },
{ text: "Goto Level 4" , shortcut: "4", action: () => { changeLayer("e_layer4" ); lastKey = "4"; } },
{ text: "Goto Level 5" , shortcut: "5", action: () => { changeLayer("f_layer5" ); lastKey = "5"; } },
{ text: "Goto Level 6" , shortcut: "6", action: () => { changeLayer("g_layer6" ); lastKey = "6"; } },
{ text: "Goto Level 7" , shortcut: "7", action: () => { changeLayer("h_layer7" ); lastKey = "7"; } },
{ text: "Goto Level 8" , shortcut: "8", action: () => { changeLayer("i_layer8" ); lastKey = "8"; } },
{ text: "Goto Level 9" , shortcut: "9", action: () => { changeLayer("j_layer9" ); lastKey = "9"; } },
{ text: "Goto Level 10", shortcut: "0", action: () => { changeLayer("k_layer10"); lastKey = "0"; } }
]},
{ text: "Levels 11-20", items: [
{ text: "Goto Level 11", shortcut: "!", action: () => { changeLayer("l_layer11"); lastKey = "!"; } },
{ text: "Goto Level 12", shortcut: "@", action: () => { changeLayer("m_layer12"); lastKey = "@"; } },
{ text: "Goto Level 13", shortcut: "#", action: () => { changeLayer("n_layer13"); lastKey = "#"; } },
{ text: "Goto Level 14", shortcut: "$", action: () => { changeLayer("o_layer14"); lastKey = "$"; } },
{ text: "Goto Level 15", shortcut: "%", action: () => { changeLayer("p_layer15"); lastKey = "%"; } },
{ text: "Goto Level 16", shortcut: "^", action: () => { changeLayer("q_layer16"); lastKey = "^"; } },
{ text: "Goto Level 17", shortcut: "&", action: () => { changeLayer("r_layer17"); lastKey = "&"; } },
{ text: "Goto Level 18", shortcut: "*", action: () => { changeLayer("s_layer18"); lastKey = "*"; } },
{ text: "Goto Level 19", shortcut: "(", action: () => { changeLayer("t_layer19"); lastKey = "("; } },
{ text: "Goto Level 20", shortcut: ")", action: () => { changeLayer("u_layer20"); lastKey = ")"; } }
]},
]},

{ text: "Link Level", items: [
{text: "Levels 1-10", items: [
{ text: "Link Level 1" , action: () => { linkButton( "Goto Level 1" , "try { !!utilityLayer0; changeLayer('b_layer1' );  } catch { window.location='{{lvl1}}' ;  }"); } },
{ text: "Link Level 2" , action: () => { linkButton( "Goto Level 2" , "try { !!utilityLayer0; changeLayer('c_layer2' );  } catch { window.location='{{lvl2}}' ;  }"); } },
{ text: "Link Level 3" , action: () => { linkButton( "Goto Level 3" , "try { !!utilityLayer0; changeLayer('d_layer3' );  } catch { window.location='{{lvl3}}' ;  }"); } },
{ text: "Link Level 4" , action: () => { linkButton( "Goto Level 4" , "try { !!utilityLayer0; changeLayer('e_layer4' );  } catch { window.location='{{lvl4}}' ;  }"); } },
{ text: "Link Level 5" , action: () => { linkButton( "Goto Level 5" , "try { !!utilityLayer0; changeLayer('f_layer5' );  } catch { window.location='{{lvl5}}' ;  }"); } },
{ text: "Link Level 6" , action: () => { linkButton( "Goto Level 6" , "try { !!utilityLayer0; changeLayer('g_layer6' );  } catch { window.location='{{lvl6}}' ;  }"); } },
{ text: "Link Level 7" , action: () => { linkButton( "Goto Level 7" , "try { !!utilityLayer0; changeLayer('h_layer7' );  } catch { window.location='{{lvl7}}' ;  }"); } },
{ text: "Link Level 8" , action: () => { linkButton( "Goto Level 8" , "try { !!utilityLayer0; changeLayer('i_layer8' );  } catch { window.location='{{lvl8}}' ;  }"); } },
{ text: "Link Level 9" , action: () => { linkButton( "Goto Level 9" , "try { !!utilityLayer0; changeLayer('j_layer9' );  } catch { window.location='{{lvl9}}' ;  }"); } },
{ text: "Link Level 10", action: () => { linkButton( "Goto Level 10", "try { !!utilityLayer0; changeLayer('k_layer10');  } catch { window.location='{{lvl10}}';  }"); } }
]},
{ text: "Levels 11-20", items: [
{ text: "Link Level 11", action: () => { linkButton( "Goto Level 11", "try { !!utilityLayer0; changeLayer('l_layer11');  } catch { window.location='{{lvl11}}';  }"); } },
{ text: "Link Level 12", action: () => { linkButton( "Goto Level 12", "try { !!utilityLayer0; changeLayer('m_layer12');  } catch { window.location='{{lvl12}}';  }"); } },
{ text: "Link Level 13", action: () => { linkButton( "Goto Level 13", "try { !!utilityLayer0; changeLayer('n_layer13');  } catch { window.location='{{lvl13}}';  }"); } },
{ text: "Link Level 14", action: () => { linkButton( "Goto Level 14", "try { !!utilityLayer0; changeLayer('o_layer14');  } catch { window.location='{{lvl14}}';  }"); } },
{ text: "Link Level 15", action: () => { linkButton( "Goto Level 15", "try { !!utilityLayer0; changeLayer('p_layer15');  } catch { window.location='{{lvl15}}';  }"); } },
{ text: "Link Level 16", action: () => { linkButton( "Goto Level 16", "try { !!utilityLayer0; changeLayer('q_layer16');  } catch { window.location='{{lvl16}}';  }"); } },
{ text: "Link Level 17", action: () => { linkButton( "Goto Level 17", "try { !!utilityLayer0; changeLayer('r_layer17');  } catch { window.location='{{lvl17}}';  }"); } },
{ text: "Link Level 18", action: () => { linkButton( "Goto Level 18", "try { !!utilityLayer0; changeLayer('s_layer18');  } catch { window.location='{{lvl18}}';  }"); } },
{ text: "Link Level 19", action: () => { linkButton( "Goto Level 19", "try { !!utilityLayer0; changeLayer('t_layer19');  } catch { window.location='{{lvl19}}';  }"); } },
{ text: "Link Level 20", action: () => { linkButton( "Goto Level 20", "try { !!utilityLayer0; changeLayer('u_layer20');  } catch { window.location='{{lvl20}}';  }"); } }
]}
]}

]},


/******************************/


{ text: "pageSetup", items: [



{ text: "Background Image", items: [
{ text: "Load", shortcut: "", action: () => { uploadBackgroundImage(); } },
{ text: "Clear", shortcut: "", action: () => { clearBackgroundImage(); } }
]},



{ text: "Favicon/Icon", items: [
{ text: "Load", shortcut: "", action: () => { uploadFavicon(); } },
{ text: "Set Default", shortcut: "", action: () => { resetFavicon(); } }
]},



{ text: "Load OG/Link Image", shortcut: "", action: () => { uploadCustomOGImage(); } },
{ text: "Download 1200x630 OG/Blank", shortcut: "", action: () => { downloadBlankOgTemplate(); } },
{ note: "Background and link images are custom per level. Edit later if you save with '.zip'" }

]},


/******************************/


{ text: "styleEffects", items: [

{ text: "Blur", items: [
{ text: "Clear", action: () => { clearAllBlur(); } },
{ text: "All", items: [
{ text: "1px", action: () => { blurAll( 1); } },
{ text: "2px", action: () => { blurAll( 2); } },
{ text: "4px", action: () => { blurAll( 4); } },
{ text: "6px", action: () => { blurAll( 6); } },
{ text: "8px", action: () => { blurAll( 8); } },
{ text:"10px", action: () => { blurAll(10); } }
]},
{ text: "Top Down", items: [
{ text: "1px", action: () => { aclinationBlur( 1); } },
{ text: "2px", action: () => { aclinationBlur( 2); } },
{ text: "4px", action: () => { aclinationBlur( 4); } },
{ text: "6px", action: () => { aclinationBlur( 6); } },
{ text: "8px", action: () => { aclinationBlur( 8); } },
{ text:"10px", action: () => { aclinationBlur(10); } },
]},
{ text: "Bottom Up", items: [
{ text: "1px", action: () => { declinationBlur( 1); } },
{ text: "2px", action: () => { declinationBlur( 2); } },
{ text: "4px", action: () => { declinationBlur( 4); } },
{ text: "6px", action: () => { declinationBlur( 6); } },
{ text: "8px", action: () => { declinationBlur( 8); } },
{ text:"10px", action: () => { declinationBlur(10); } }
]},
{ text: "Left to Right", items: [
{ text: "1px", action: () => { leftRightBlur( 1); } },
{ text: "2px", action: () => { leftRightBlur( 2); } },
{ text: "4px", action: () => { leftRightBlur( 4); } },
{ text: "6px", action: () => { leftRightBlur( 6); } },
{ text: "8px", action: () => { leftRightBlur( 8); } },
{ text:"10px", action: () => { leftRightBlur(10); } }
]},
{ text: "Right to Left", items: [
{ text: "1px", action: () => { rightLeftBlur( 1); } },
{ text: "2px", action: () => { rightLeftBlur( 2); } },
{ text: "4px", action: () => { rightLeftBlur( 4); } },
{ text: "6px", action: () => { rightLeftBlur( 6); } },
{ text: "8px", action: () => { rightLeftBlur( 8); } },
{ text:"10px", action: () => { rightLeftBlur(10); } },
]},
]},

{ text: "Brightness", items: [
{ text: "Clear", action: () => { clearAllBrightness(); } },
{ text: "All", items: [
{ text:"0.0", action: () => { brightnessAll(0.0); } },
{ text:"0.1", action: () => { brightnessAll(0.1); } },
{ text:"0.2", action: () => { brightnessAll(0.2); } },
{ text:"0.3", action: () => { brightnessAll(0.3); } },
{ text:"0.4", action: () => { brightnessAll(0.4); } },
{ text:"0.5", action: () => { brightnessAll(0.5); } },
]},
{ text: "Top Down", items: [
{ text:"0.0", action: () => { aclinationBrightness(0.0); } },
{ text:"0.1", action: () => { aclinationBrightness(0.1); } },
{ text:"0.2", action: () => { aclinationBrightness(0.2); } },
{ text:"0.3", action: () => { aclinationBrightness(0.3); } },
{ text:"0.4", action: () => { aclinationBrightness(0.4); } },
{ text:"0.5", action: () => { aclinationBrightness(0.5); } },
]},
{ text: "Bottom Up", items: [
{ text:"0.0", action: () => { declinationBrightness(0.0); } },
{ text:"0.1", action: () => { declinationBrightness(0.1); } },
{ text:"0.2", action: () => { declinationBrightness(0.2); } },
{ text:"0.3", action: () => { declinationBrightness(0.3); } },
{ text:"0.4", action: () => { declinationBrightness(0.4); } },
{ text:"0.5", action: () => { declinationBrightness(0.5); } }
]},
{ text: "Left to Right", items: [
{ text:"0.0", action: () => { leftRightBrightness(0.0); } },
{ text:"0.1", action: () => { leftRightBrightness(0.1); } },
{ text:"0.2", action: () => { leftRightBrightness(0.2); } },
{ text:"0.3", action: () => { leftRightBrightness(0.3); } },
{ text:"0.4", action: () => { leftRightBrightness(0.4); } },
{ text:"0.5", action: () => { leftRightBrightness(0.5); } }
]},
{ text: "Right to Left", items: [
{ text:"0.0", action: () => { rightLeftBrightness(0.0); } },
{ text:"0.1", action: () => { rightLeftBrightness(0.1); } },
{ text:"0.2", action: () => { rightLeftBrightness(0.2); } },
{ text:"0.3", action: () => { rightLeftBrightness(0.3); } },
{ text:"0.4", action: () => { rightLeftBrightness(0.4); } },
{ text:"0.5", action: () => { rightLeftBrightness(0.5); } },
]},
]},

{ text: "Contrast", items: [
{ text: "Clear", action: () => { clearAllContrast(); } },
{ text: "All", items: [
{ text:"0.0", action: () => { contrastAll(0.0); } },
{ text:"0.1", action: () => { contrastAll(0.1); } },
{ text:"0.2", action: () => { contrastAll(0.2); } },
{ text:"0.3", action: () => { contrastAll(0.3); } },
{ text:"0.4", action: () => { contrastAll(0.4); } },
{ text:"0.5", action: () => { contrastAll(0.5); } },
]},
{ text: "Top Down", items: [
{ text:"0.0", action: () => { aclinationContrast(0.0); } },
{ text:"0.1", action: () => { aclinationContrast(0.1); } },
{ text:"0.2", action: () => { aclinationContrast(0.2); } },
{ text:"0.3", action: () => { aclinationContrast(0.3); } },
{ text:"0.4", action: () => { aclinationContrast(0.4); } },
{ text:"0.5", action: () => { aclinationContrast(0.5); } },
]},
{ text: "Bottom Up", items: [
{ text:"0.0", action: () => { declinationContrast(0.0); } },
{ text:"0.1", action: () => { declinationContrast(0.1); } },
{ text:"0.2", action: () => { declinationContrast(0.2); } },
{ text:"0.3", action: () => { declinationContrast(0.3); } },
{ text:"0.4", action: () => { declinationContrast(0.4); } },
{ text:"0.5", action: () => { declinationContrast(0.5); } }
]},
{ text: "Left to Right", items: [
{ text:"0.0", action: () => { leftRightContrast(0.0); } },
{ text:"0.1", action: () => { leftRightContrast(0.1); } },
{ text:"0.2", action: () => { leftRightContrast(0.2); } },
{ text:"0.3", action: () => { leftRightContrast(0.3); } },
{ text:"0.4", action: () => { leftRightContrast(0.4); } },
{ text:"0.5", action: () => { leftRightContrast(0.5); } }
]},
{ text: "Right to Left", items: [
{ text:"0.0", action: () => { rightLeftContrast(0.0); } },
{ text:"0.1", action: () => { rightLeftContrast(0.1); } },
{ text:"0.2", action: () => { rightLeftContrast(0.2); } },
{ text:"0.3", action: () => { rightLeftContrast(0.3); } },
{ text:"0.4", action: () => { rightLeftContrast(0.4); } },
{ text:"0.5", action: () => { rightLeftContrast(0.5); } },
]},
]},




]},


/******************************/


{ text: "Animation", items: [

{ text: "Insert Frame", shortcut: "INS", action: () => { document.getElementById("stateIns").click(); } },
{ text: "Make Animation Block", shortcut: "shift+INS", action: () => { document.getElementById("dumpAccumulator").click(); } },
{ text: "Open Test Window", shortcut: "shift+ENTER", action: () => { deMinimis(false,'','',true); } },
{ note: "First make the changes to the filter, position, size, rotation, etc, then insert the frame. When you are finished make the animation block. Use 'active edit' to change it later. Click the code in the test window to copy it. Paste the code into your button 'click' code." }

]},


/******************************/


{ text: "Live View",
items: [
{ text: "Enter Live View", shortcut: "ENTER", action: (e) => { hotDog = true; spaceViewOn([e,32,32,,,]); removePointerEventsNone(); } },
{ text: "Exit Live View",
shortcut: "ESC",
action: (e) => {
hdubDemo.style.opacity = 0;
Picture.style.display = 'none';
if (ui.folder52.ref.style.display == "none" || ui.tab5Wrapper.ref.style.display == "none") {
hdubDemo.style.opacity = 0;
}
if (mode == 0) {
curFocus = 0;
modeRouter(e, 1);
}
hotDog = false;
spaceViewOff([e, 32, 32, e.shiftKey, e.ctrlKey, e.altKey]);
restorePointerEventsNone();
helpMenuOverlay.style.display = "none";
F.focus();
if (activeStateEdit == true) {
}
activeStateEdit = false;
document.getElementById("activeStateEdit").style.outline = "";
document.getElementById("activeStateEdit").style.backgroundColor = "transparent";
}
},
{ note: "Use the spacebar to quickly flip in and out of the live view. Enter and Esc are used together." }
]
},


/******************************/


{ text: "About", items: [
{ text: "Open the Keymap",
shortcut: "F1",
action: () => {
openKeymap();
}
},
{ text: "Download - HDUB Pixel Art Edition",
shortcut: "Ctrl+S",
action: (e) => {
e.preventDefault();
document.getElementById("levelBar").style.display = "none";
animatorBar.style.display = "none";
localStorage.setItem("levelBar", document.getElementById("levelBar").style.display);
if (document.querySelector('script[src^="bundle.js"]')) {
const link = document.createElement('a');
link.href = './hdubPixelArtEdition.zip';
link.download = 'hdubPixelArtEdition.zip';
link.click();
} else {
document.body.style.cursor = 'wait';
const doctype = "<!DOCTYPE html>\n";
let htmlSource = doctype + document.documentElement.outerHTML;
htmlSource = htmlSource.replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').replace(/\n\s+/g, '\n');
const encoder = new TextEncoder();
const fileBytes = encoder.encode(htmlSource);
fflate.zip({ "hdubPixelArtEdition.html": [fileBytes, { level: 6 }] }, (err, data) => {
document.body.style.cursor = 'default';
if (err) return console.error("Zipping failed:", err);
const blob = new Blob([data], { type: 'application/zip' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'hdubPixelArtEdition.zip';
link.click();
setTimeout(() => URL.revokeObjectURL(url), 2000);
});
} } },
{ note: "Download this entire program. It's only one file, so that makes it incredibly portable. It doesn't need anything special, only the browser. It never needs updating, and does not contact anything externally to operate. You don't even need an internet connection to use it." }
]
},


/******************************/


];
