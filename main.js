objects = [];
status = "";



function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectando objetos";
    video.hide();
}

function modelLoaded() {
    console.log("¡Modelo cargado!")
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
if(status != undefined) {
objectDetector.detect(video, gotResults);

for(i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "Status - Objeto Detectado";
fill('red');
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " "+ percent+ "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke('red');
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
if(objects[i].label == document.getElementById("objName").label) {

} else {

}
}
}
}

function start() {
    
}