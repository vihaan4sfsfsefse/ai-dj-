
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide(); 
}
function draw() {
    image(video,0,0,600,500);
}
var sound = "";
 
function preload() {
    sound = loadSound("music.mp3");
}
 
function play() {
    sound.play();
}
