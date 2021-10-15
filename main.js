song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
scoreRightWrist = 0;

function preload(){
song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
console.log('poseNet is Initialized');
}

function draw() {
image(video, 0, 0, 600, 400);
fill("#0000FF");
stroke("#0000FF");
circle(rightWristX,rightWristY,20);
if(scoreleftWrist > 0.2);
{
circle(leftWristX,leftWristY,20);
InNumberleftWristX = Number(leftWristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "volume = " + volume;
song.setVolume(volume);
}
}

function play(){
song.play();  
song.rate(1);
}
function gotPoses(results)
{
if(results.length >0)
console.log(results);
scoreleftWrist = results[0].pose.KeyPoints[9].score;
scoreRightWrist = results[0].pose.KeyPoints[10].score;
console.log("scoreRightWrist" + scoreRightWrist + "scoreleftWrist = " + scoreleftWrist);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWrist = " + leftWristX +" leftWristY = "+ leftWristY);
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWrist = " + rightWristX +" rightWristY = "+ rightWristY);
}
if(scoreRightWrist >0.2)
{
if(rightWristY >0 && rightWristY <= 100)
{
document.getElementById("speed").innerHTML = "Speed = 0.5x";
song.rate(0.5);
}
else if(rightWristY >100 && rightWristY <=200)
{
document.getElementById("speed").innerHTML = "Speed = 1x";
song.rate(1); 
}
else if(rightWristY >200 && rightWristY <=300)
{
document.getElementById("speed").innerHTML = "Speed = 1.5x";
song.rate(1.5);
}
else if(rightWristY >300 && rightWristY <=400)
{
document.getElementById("speed").innerHTML = "Speed = 2x";
song.rate(2);
}
else if(rightWristY >400 && rightWristY <=500)
document.getElementById("speed").innerHTML = "Speed = 2.5x";
song.rate(2.5);
}