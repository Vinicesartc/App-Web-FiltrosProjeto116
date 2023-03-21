narizY = 0
narizX = 0

function preload()
{
  bigode = loadImage("https://i.postimg.cc/fRvws7FY/f932a333154f1d6bff554c1010466f00-hipster-bigode-5-by-vexels-1.png");
}

function setup()
{
  canvas = createCanvas(480, 480);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(480, 480);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function takeSnapshot()
{
  save("SuaFoto")
}

function draw()
{
  image(video, 0, 0, 480, 480);
  image(bigode, narizX, narizY, 110, 70);
}

function modelLoaded()
{
  console.log("PoseNet inicializado");
}

function gotPoses(results)
{
  if(results.length > 0){
    console.log(results)
    console.log("narizX" + results[0].pose.nose.x)
    console.log("narizY" + results[0].pose.nose.y)
    narizX = (results[0].pose.nose.x) -50;
    narizY = (results[0].pose.nose.y) -11;
  }
}