function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7sgsZlD2z/model.json ', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}