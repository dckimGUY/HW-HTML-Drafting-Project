/* ARE YOU SURE YOU WANT TO TAKE ADVANTAGE OF THE WHITESPACE LIKE THAT? YES... */
                       ui.folder41button.click =
             function() { folder4Selector(1);

if (event.altKey) {
console.log(`%c


HDUB syntax:
How does it work?

`, 'color: #DEFF1C; font-size: 32px; font-family: dckimPixelMono; text-shadow: 0px 1px 0px lime, 1px 0px 0px magenta, 1px 1px 0px magenta;');

console.log(`
Good question. This is the sort of thing that has a lot of interesting potential uses. Mostly, you will need to just try some things out and see if you can find a benefit from it.

    The button that says 'save' will save an image file which will have a special file name containing the HDUB syntax that tells the HTML Drafting program what rectangles are supposed to be made. When we take that image file and then drag it back into the HTML Drafting Program, it comes back, and brings us directly into the HDUB tab again, ready to decide what to do next. The rectangle information is saved only as 'shape-keys'. We don't need to decide what the rectangles will be used for. This way we have a 'universal-tool'.

    We could assign meaning to the rectangles by using additional syntax to assign values to each rectangle, for example HTML tag names. Then we could import the rectangular shapes immediately as chosen HTML elements. This would be easy to do, but would complicate the syntax and most likely would no longer fit in this format because of file name length restrictions (operating system dependent). We would no longer be able to take advantage of the visual image representation which is happening in most file explorer programs.

    The 'enter' button will take the 'hw' instruction list and then put those rectangles into the HTML Drafting Program as new parts.

    The '*sheet' button will save an image file that will be scaled. Use the scale slider to set the scale for the image. The actual pixel dimensions of the template image will be changed. Our next step is to either prepare that image, or drag the same image file back into the program (anywhere). Then we will be automatically brought to the *sheets tab. That tab has it's own information page when you use "alt + click". There you will find instructions for making the sheets.

    Also note that the full size of the sheet (100 wide x 180 tall), in ratio, is a pretty good fit for a mobile phone screen (or you pick some numbers that work). Of course, that is for portrait orientation and for landscape (sideways mode) you might need to pick different numbers.

    These numbers work pretty good when you are using some 'metric system' settings for the grid layouts... look in the system settings tab for that. Then you can have all of the movements in base ten, with base ten parts. (or choose other numbers that work for you which are not base ten)

    The numbers also convert very well from base ten when you want to use the 'vw 100' tab. That tab has buttons which will save the web page and convert all of the rectangle sizings and locations from 'px' to 'vw'. This is done by scaling them using a factorization.

`);
}








};
                       ui.folder42button.click =
             function() { folder4Selector(2);
if (event.altKey) {
console.log(`%c


vw 100
Information Page:

`, 'color: #DEFF1C; font-size: 32px; font-family: dckimPixelMono; text-shadow: 0px 1px 0px lime, 1px 0px 0px magenta, 1px 1px 0px magenta;');

console.log(`

    If you are not familiar with this, 'vw' is a unit of measure which corresponds to the 'viewport width'.

    100vw corresponds to 100% of the width of the screen, or browser window. If this much math is already giving you a headache, don't worry about it. This tab is supposed to be helpful, not teach anyone anything. All you really need to know is that the HTML Drafting Program uses 'px' basically all of the time, but, when we save the webpage, 'pixels' aren't always the best. If we want everything to line up on the screen the same way, and not end up too small or too big, then just try using some of the buttons you find in this tab.

    Here is the main example that should make it full clear:

    If you are using the 'save vw 1000' button, then 1000 pixels on the HTML Drafting Program will fit exactly into the screen width in the file that you save. When you try to zoom the screen, it doesn't change. This is because we have used 'vw'.

    The calculation to get the 'good vw numbers' is done automatically, and we can choose from the various 'goal numbers' which are given in the list.

    Long story short: Instead of giving a sliding scale or a direct numerical entry, I thought that it was better to just give a broad selection of 'good numbers' that accomodate different use cases spanning various widths. If this is too restrictive for you, and you require total accuracy for some reason, you can use this function in the console (right here presumably). Then you can specify the exact conversion ratio.

    This is the function call with the argument which would be used to convert from 1000px to 100vw:

    vw100(1/10);

    That should work for whatever number you need to do, for example: Maybe you want to convert 1536px into 100vw?

    vw100(1/15.36);

    I guess I'm just being weird about it, but, metric seems to give good numbers after the conversion. I would recommend using metric for the program settings, and then using 'save vw 1000' for that reason.

    Additional information and motivation:

    What seems like a restriction in the number of 'save settings' is actually a blessing in disguise. Choosing explicit numbers is time consuming and doesn't usually improve the outgoing result. There are some good settings there. Now, I would like to draw your attention to the similar situations that are happening in both the HDUB tab and the *sheets tab. The pixelation upscaling factors that are available with the scale factors of 1, 2, 3, or 4 will multiply the options available from these eight 'vw conversion' options. If you think about it, and did the math (I haven't bothered), you will see that it is clear that the upscaling will look different, and be a different pixel size depending on the 'vw conversion option'. So, we have the 4 different upscaling options for the button sheets and image sheets, then we can multiply that by the 8 different 'vw conversion' options. That gives 32 potential choices which will effect the visual pixel upscale size (I guess I did the math now).

    You can clearly see that there are plenty of options, and a lot left to the user (that's you).

    Personally, I wouldn't worry too much about picking any fancy numbers, and I would suggest just using 1000 every time. Aside from that, if you are working with pixelated graphics, make sure you are working in a single pixelation scale across all of it. This will make it look more uniform. Also, probably set the program up so that the movements, on the mouse and keyboard, are in increments that match your pixel upscaling. That way all of your pixels will become aligned across all of your images. That way the page looks more 'uniform' and it never looks 'half-way' on a pixel when it's all supposed to look pixelated.

    If you just use the 'sys.theme' tab and pick 'e4', you have this automatically. It should match perfectly if you use '1' as the scale factor for your images (slider all the way to the left). Also, you can avoid resizing the images by using the 'z' key on your keyboard, or clicking the 'z' button in the 'sys.theme' tab. That will put you into 'z-index' mode which does not allow resizing. So, there is a double use for 'z-index' mode!

    Other than that, my advice is that you just 'look at it', zoom in and then set the mouse increment visually to the pixel size (or double it).
`);
}

};
                 function folder4Selector(folderNumber) { for (let j = 1; j < 3; j++) {
 document.getElementById("folder4" + j).style.display = "none"; }
 document.getElementById("folder4" + folderNumber).style.display = "block";
    localStorage.setItem("folder4", folderNumber); } for (let j = 1; j < 3; j++) {
 document.getElementById("folder4" + j).style.display = "none"; }
if (localStorage.getItem("folder4")) {
 document.getElementById("folder4" + localStorage.getItem("folder4")).style.display = "block"; } else {
                       ui.folder41.ref.style.display = "block"; }
