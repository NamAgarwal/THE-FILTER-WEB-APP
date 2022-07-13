noseX = "";
noseY = "";

function preload(){
    mustache = loadImage('https://i.postimg.cc/1R0n8c0z/mustache.png');
}

function setup() {
    canvas = createCanvas(370, 370);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(370, 370)
    video.hide();

   posenet =  ml5.poseNet(video, modeLoaded);
    posenet.on('pose' ,gotPoses);
}
function modeLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
    image(video, 0, 0, 370, 370);
    image(mustache, noseX, noseY, 65, 40);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 30;
        noseY = results[0].pose.nose.y;
    }
}

function take_snapshot(){
    save('filter.png');
}