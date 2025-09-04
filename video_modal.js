// Get the modal
var Vmodal = document.getElementById("MyVideo");

// Get the button that opens the modal
var Vbtn = document.getElementById("MyVideoBtn");

// Get the <span> element that closes the modal
var Vspan = document.getElementsByClassName("VideoClose")[0];

// When the user clicks the button, open the modal
Vbtn.onclick = function() {
  Vmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
Vspan.onclick = function() {
  Vmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Vmodal) {
    Vmodal.style.display = "none";
  }
};
