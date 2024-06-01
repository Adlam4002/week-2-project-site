# week-2-project-site

An image gallery
#Reflections
Requirements
One page, with a set of thumbnail images, and a larger image
Styled appropriately with CSS, and make use of media queries.
Use client-side JavaScript to display the larger image when a thumbnail is selected
Use client-side JavaScript to navigate between images using the keyboard (tab, enter)
Planning
🎯 Plan out the UI and consider the elements you'll need to include to support the stories. Will thumbnails take up space at the top, side or bottom of the page? Will they float over the image?

Building
🎯 Display the thumbnail images. Will you use a grid, or a list? Will you use CSS Grid or Flexbox?

🎯 Display the larger image. Will you use an overlay of some kind, or a section on the same page? How would it work on smaller screens?

🎯 Handle user interaction. Will you use event listeners on the thumbnails, or on the container? How will you know which thumbnail was selected?

# Reflections

I have created an image gallery that can be navigated through by clicking on the thumbnail versions of the images, clicking the arrow buttons, using the left and right arrow, and using tab to focus the images or buttons and pressing enter. The gallery has different layouts depending on screen size: on a large screen the thumbnails are along the bottom and are flanked by the buttons, but on a narrow screen the buttons are on the bottom and the thumbnails are shifted to the top to avoid crowding. I added alt values to the images so a screen reader can describe them all, I also added aria tags to the buttons so that visually impaired users can still use them.

I really struggled to try and automatically attach event listeners to the items within the array, so in the end I manually added even listers to the elements JS was creating. I then added tabindex into the forEach loop I made so that the thumbnails could be accessed without a mouse. Finally, I added another event listener that listened for the enter key being pressed while it was focused. Which would then change the main images source to match the focused thumbnail.
By the look of my JS I have been inefficient and would like to look into ways to get the same results with fewer lines of code.

After some testing I realise that instead of making individual eventListeners I could have added this to the for each loop I created for the array:

img.addEventListener("click", () => {
mainImage.src = picture.src;
});
img.addEventListener("keypress", () => {
if (event.key === "Enter") {
mainImage.src = picture.src;
}
});

which makes them for me and would reduce the amount of code I needed to write. What I wrote was 30 lines of code and could be replaced by the 8 lines above with the same functionality. It's just more efficient.

I would like to have the mainPicure's source be set to pictures[i].src and then have my buttons just increase the index number by one for forwards and down for backwards. The way I did it was if its [1] then make it [2] etc.

Since my last reflection I figured out how to get the .src to change by cycling through my array with button presses:

let i = 0;
but1.addEventListener("click", () => {
i = (i - 1 + pictures.length) % pictures.length;
mainImage.src = pictures[i].src;
});
but2.addEventListener("click", () => {
i = (i + 1) % pictures.length;
mainImage.src = pictures[i].src;
});

I have tested this and it worked. This method is only 9 lines of code, the method I used at first was (lines 137 to 164) 27 lines. I could also change my arrowkeys to use the same thing so realisically i could have done the same thing with 18 lines rather than the 54 that I used. I could have been more efficient. I left the code as what I used initially as I did this extra work as a part of reflection on what I could have done better.

Taking into account both the new methods I figured out and tested I could have used 26 lines to do what I did in 84 lines. I hope I'll be able to utilise this in my future work.
