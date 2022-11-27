var Speech = window.webkitSpeechRecognition;
var Recognition = new Speech();
var camera = document.getElementById("camera");

function Start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        console.log("taking selfie");
        speak();
    }
    
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking Your First Selfie in Five Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snap("img1");
        speak_data = "Taking Your Second Selfie in next Five Seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
    
    
    setTimeout(function(){
        take_snap("img2");
        speak_data = "Taking Your Third Selfie in next Five Seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    
    
    setTimeout(function(){
        take_snap("img3");
    }, 15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality: 90
});

function take_snap(imgid){
    Webcam.snap(function(data_uri){
        document.getElementById(imgid).src = data_uri;
    })
}

function save () {
    link = document.getElementById("link");
    link.href = document.getElementById("selfie").src;
    link.click();
    
}
