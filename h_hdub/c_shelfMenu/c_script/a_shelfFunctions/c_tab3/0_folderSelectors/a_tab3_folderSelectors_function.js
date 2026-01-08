/* ARE YOU SURE YOU WANT TO TAKE ADVANTAGE OF THE WHITESPACE LIKE THAT? YES... */
                       ui.folder31button.click =
             function() { folder3Selector(1); };
                       ui.folder32button.click =
             function() { folder3Selector(2);
if (event.altKey) {
console.log(`%c


*sheets and HDUB syntax

`, 'color: #DEFF1C; font-size: 32px; font-family: dckimPixelMono; text-shadow: 0px 1px 0px lime, 1px 0px 0px magenta, 1px 1px 0px magenta;');

console.log(`

These are designed to be used together. So, I wrote this explanation as a starting point.

To get the buttons / images sheets working, follow these steps:


1. Write an HDUB syntax that you like. It's easy. The format "h20w20" will give a square. You can use this syntax to write all sorts of interesting 'shape-keys' that will make it easy and fast to get rectangles into the program. Here is another example that gets five rectangles on the first line, and then starts another row which has 3 rectangles: "h20w10w20w30w40h40w20w20w60".

2. Click the *sheet button in the HDUB tab. It will save a file with the syntax in the filename, and a template image which you drew.
    a. If you are making buttons, probably best to use that first image sheet to draw the base images. That way you can copy the whole thing, and make the minimal changes to the images for the purpose of the other button states. For example, hover and active might have only small differences from the base image.
    b. If you are using the system to get many images into the program quickly, maybe you can just go to the next step to get the final template out.

3. Find the same template that was saved when you used *sheet in the HDUB tab and drag it back onto the program screen. The *sheet tab should open automatically.

4. Click on the desired end product. It will then be saved.

5. Now make the final changes to the drawings in your favourite art program.

6. Then next time that you drag that finished file back onto the HTML Drafting Program, all of the buttons should appear, even if there were 50 of them. These will all be working buttons, using the images that you draw on the sheets. For example, the first button will use the first image as it's base. It will then use the first image in the duplicated image, and so on. I hope that makes sense to you. Just imagine that those duplicate images are stacked on top of each other.


Additional notes:

    The length of the filename that your system allows might ruin your HDUB syntax when you save the file. Just be aware of this, and don't make the squares in the picture too small or make too many (same difference).

    There is a sliding scale at the bottom of the HDUB tab. It is used to control the scale of the template that is produced. There are some special values that have been built in so that it is easy to make low resolution buttons with pixel-perfect rendering. This is good when you want to make buttons which have a small file size. Then you can fit more buttons into your web program/site, and the website will load more quickly. Also, pixel art is very trendy.

    Those numbers are as follows:

    1, 2, 3, 4

    These are treated specially and give different results than the other scale factors that can be chosen (the others give exactly the scale that is chosen).

This little code snippet gives the upscaling:

switch (inputScale) {
case 1: scale = 10; break; // Pixels become the biggest
case 2: scale =  8; break; //              less big
case 3: scale =  6; break; //         even less big
case 4: scale =  5; break; //            not so big
}

Example: 2 gives a sheet that is 200 wide and 360 tall. Then it gets scaled up to 1px = 8px later. The image stays at the same small size, and only the box is made 8x larger.


`);
}

};
                 function folder3Selector(folderNumber) { for (let j = 1; j < 3; j++) {
 document.getElementById("folder3" + j).style.display = "none"; }
 document.getElementById("folder3" + folderNumber).style.display = "block";
    localStorage.setItem("folder3", folderNumber); } for (let j = 1; j < 3; j++) {
 document.getElementById("folder3" + j).style.display = "none"; }
if (localStorage.getItem("folder3")) {
 document.getElementById("folder3" + localStorage.getItem("folder3")).style.display = "block"; } else {
                       ui.folder31.ref.style.display = "block"; }
