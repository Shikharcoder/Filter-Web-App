function preload() {

}

function setup() {
    canvas = createCanvas(700, 400);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 700, 400);
}