Peter_pan_song = "";
Harry_potter_theme_song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function setup()
{
    canvas = createCanvas(500,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(result);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function draw()
{
    image(video,0,0,500,600);
}

function preload()
{
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}