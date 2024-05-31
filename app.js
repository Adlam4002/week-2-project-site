console.log("Hello world!");

// # array of images, but each image will be an object so it can have multiple properties
let pictures = [
  {
    src: "https://images.unsplash.com/photo-1532884928231-ef40895eb654?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The sun shining through a thing clearing in a bamboo forest.",
    id: "picture1",
  },
  {
    src: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: `Sakura blossom over a deep canal, the canal has lots of people and glowing lanterns along it\'s edge. `,
    id: "picture2",
  },
  {
    src: "https://images.unsplash.com/photo-1557772328-e7a1a09bcec2?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A small Japanese temple containing a large bell. It's situated within a peaceful, lightly forested area. ",
    id: "picture3",
  },
  {
    src: "https://images.unsplash.com/photo-1562403928-e44693bee01b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A large stone Torii. It is midway up a long set of stone stairs leading up into the forest. ",
    id: "picture4",
  },
  {
    src: "https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "An image of Shibuya, Japan. It's nighttime, the street is lit up by many neon signs, there's a huge crowd of people going about their business.",
    id: "picture5",
  },
];
// to make a carousel need to make golbal variable to store the current img index for the big img
// let=currentIndex = 0;

let thumbNailContainer = document.querySelector("#thumbnail-box");
console.log(thumbNailContainer);
let mainPicture = document.querySelector("#large-picture");
console.log(mainPicture);

// # dom elements
// # select the thubnail container to display the little images
// # select the main screen to display them at full size
// # make a function to actually make the dom elements for the thumbnail display
// # need to make a loop to create the images
// # a documnet.method to create an element (img)
// # assign a value to the img attributes
// # (optional, assign a class name to the img element (.className property))
// # append the new elements to the dom useing a document method (appendChild)
// add an evenListener fro each img so i dont have to manually make one for each img
//pictures.addEventListerner("click", function(){})
// function makeThumb(pictures)

pictures.forEach((picture) => {
  let img = document.createElement("img");
  img.src = picture.src;
  img.alt = picture.alt;
  img.id = picture.id;
  thumbNailContainer.appendChild(img);
});

// problem --> the images appear one after another (innerHTML ="")
