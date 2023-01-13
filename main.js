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

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
if(status != "") {
objectDetector.detect(video, gotResults);

for(i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "Status - Objeto Detectado";
fill('red');
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " "+ percent+ "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke('red');
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
if(objects[i].label == objName) {
    video.stop();
    objectDetector.detect(gotResults);
    document.getElementById("objs").innerHTML = "Se encontro "+ objName;
    synth = window.speechSynthesis;
    utterThis = SpeechSynthesisUtterance(objName + " encontrado.");
    synth.speak(utterThis);
    } else {
    document.getElementById("objs").innerHTML = objName + " no fue encontrado";
    }
}
}
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
    objName = document.getElementById("objName").value;
}