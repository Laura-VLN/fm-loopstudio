var width = window.innerWidth;
var version;
var mobileSources = [];
var desktopSources = [
    "images/desktop/image-deep-earth.jpg", 
    "images/desktop/image-night-arcade.jpg",
    "images/desktop/image-soccer-team.jpg",
    "images/desktop/image-grid.jpg",
    "images/desktop/image-from-above.jpg",
    "images/desktop/image-pocket-borealis.jpg",
    "images/desktop/image-curiosity.jpg",
    "images/desktop/image-fisheye.jpg"
];

function displayWindowSize() {
    width = window.innerWidth;
};

function displayImg() {
    desktopSources.forEach(element => {
        if (width < 375) {
            array = element.split("/");
            array[1] = "mobile";
            element = array.join("/");
            mobileSources.push(element);
        }
    });
    
    if (width > 375) {
        for (let i = 1; i < 9; i++) {
            document.getElementById("card-"+i).src = desktopSources[i-1];
        }
    } else {
        for (let i = 1; i < 9; i++) {
            document.getElementById("card-"+i).src = mobileSources[i-1];
        }
    }
};

window.addEventListener('load', () => {
    displayWindowSize();
    displayImg();
});

window.addEventListener('resize', () => {
    displayWindowSize();
    displayImg();
});