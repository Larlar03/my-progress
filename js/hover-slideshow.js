//Pick the slideshow section
const slideshow = document.querySelector('div.slideshow');

//Pick all images in slideshow
const images = slideshow.querySelectorAll('img');

//Add mousemove event listener to slideshow
slideshow.addEventListener("mousemove", function(event) {
    //Work out how far the mouse is across the whole width of ///the slideshow
    const x = event.offsetX;
    const width = this.offsetWidth;

    //Make it into a percentage
    const percentage = x / width;
    //Work out which whole number should show
    const imageNumber = Math.floor(percentage * images.length);

    //For each image make the zindex 0
    images.forEach(image => {
        image.style.zIndex = 0;
    })

    //On each image number images[%oftheslideshow] make the
    //z-index 1
    images[imageNumber].style.zIndex = 1;
})