song1="";
song2="";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
function setup()
{
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}
function modelLoded()
{
    console.log('modelLoaded');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}
function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound('music2.mp3')
}
function draw()
{
    image(video,0,0,400,300);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}