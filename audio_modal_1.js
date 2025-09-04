// Get the modal
var Amodal = document.getElementById("MyAudio");

// Get the button that opens the modal
var Abtn = document.getElementById("MyAudioBtn");

// Get the <span> element that closes the modal
var Aspan = document.getElementsByClassName("AudioClose")[0];

// When the user clicks the button, open the modal
Abtn.onclick = function() {
  Amodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
Aspan.onclick = function() {
  Amodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Amodal) {
    Amodal.style.display = "none";
  }
};
// test image for web notifications
var iconImage = null;

AP.init({
  container: "#player", //a string containing one CSS selector
  volume: 0.7,
  autoPlay: false,
  notification: false,
  playList: [
    {
      icon: iconImage,
      title: "M14-Korean",
      file:
        "https://cdn.glitch.com/cb8cb838-9f19-470f-9aca-6e773483a84f%2Fm14.mp3?v=1623281866008"
    },
    {
      icon: iconImage,
      title: "M14-English",
      file:
        "https://cdn.glitch.com/cb8cb838-9f19-470f-9aca-6e773483a84f%2Fm14-english.mp3?v=1623281865584"
    }
  ]
});
