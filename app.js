window.onload = function() {
    document.getElementById("my_audio").play();
}
const logo=document.querySelectorAll("#logo path");

for (let i=0; i<logo.length; i++)
{
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}



function setHalfVolume() { 
    var myAudio = document.getElementById("my_audio");
    myAudio.volume = 0.2;
}

navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        
    var x = document.getElementById("my_audio"); 
    x.play();
 
     // stop microphone stream acquired by getUserMedia
     stream.getTracks().forEach(function (track) { track.stop(); });
 });