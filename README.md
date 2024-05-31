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
