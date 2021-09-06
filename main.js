function preload(){

}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('MustacheImage,png');
}
function modelLoaded(){
    console.log("Posenet Initialzed");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        placement=results[0].pose.nose.x+20;
        console.log("mustache x = "+placement);
        console.log("mustache y = "+results[0].pose.nose.y);
    }
}

