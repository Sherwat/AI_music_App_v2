song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";
song6 = "";

function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
    song3 = loadSound("music3.mp3");
    song4 = loadSound("music4.mp3");
    song5 = loadSound("music5.mp3");
    song6 = loadSound("music6.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song3.play();
}