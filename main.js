noseX=0;
noseY=0;

Webcam.set({
    width: 300,
    height:300,
    image_format: "png",
    png_quality:90
})

Webcam.attach(camera);
camera = document.getElementById("camera");
function preload() {
       clown_nose = loadImage('Bigote.png');
    
    }
    
    function setup() {
      canvas = createCanvas(300, 300);
      canvas.center();
      video = createCapture(VIDEO);
      video.size(300, 300);
      video.hide();
      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded() {
      console.log('PoseNet está inicializado');
    }
    
    function gotPoses(results)
    {
      if(results.length > 0)
      {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
      }
    }
    
    function draw() {
      image(video, 0, 0, 300, 300);
      image(clown_nose, noseX, noseY, 30, 30);
    }
    
    function take_snapshot(){    
      save('myFilterImage.png');
    }


