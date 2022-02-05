function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
song1="";
song2="";
function setup(){
    canvas=createCanvas(550,650);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
  image(video,0,0,550,650);
}
function play(){
    song.play();
}
function pause(){
    song.pause();
}
