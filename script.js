// get next button element 
const nextEl = document.querySelector(".next");

// get the previous button element 
const prevEl = document.querySelector(".prev");

// get next image 
const imageContainerEl = document.querySelector(".image-container");

// get images 
const imgsEl = document.querySelectorAll("img");

// Check how many images are showing up in console.
// console.log(imgsEl)

let currentImg = 1;

// Resets the timer whenever it's resetted or clicked on.
let timeout;

// Allows to use the Next Button 
nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

// Allows to use the previous button 
prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

updateImg()

// update image function 
function updateImg() {
    // when going more then the number of images lotted. 
    // using the next button 
    // Can add as many images in HTML cause it's based on .length, so code will still work.
    if (currentImg > imgsEl.length) {
        currentImg = 1;
    // using the previous button 
    } else if (currentImg < 1) {
        currentImg = imgsEl.length;
    }

    // change the style of the imageContainerEl 
    imageContainerEl.style.transform = `translateX(-${(currentImg -1) * 500}px)`;

    // Create a Timer 
    timeout = setTimeout(() => {
        currentImg++
        updateImg()
        // set timer for 3 seconds = 3000 
    }, 3000)
}