img = "";
status = "";

function preload(){
    img=loadImage('dog_cat.jpg')
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  
  function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
  }
  
  
function draw(){
    image(img,0,0,640,420);
    fill("Red");
    text("dog",45,75);
    noFill();
    stroke("white");
    rect(30,60,420,340);

    fill("Red");
    text("Cat", 520, 105);
    noFill();
    stroke("white");
    rect(300, 90, 270, 320 );

    fill("Red");
    text("Bowl", 300, 315);
    noFill();
    stroke("white");
    rect(275, 300, 125, 250);
} 