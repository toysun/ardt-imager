var video = document.getElementById('vid');
var playbtn = document.querySelector("#myFooter");
  
   video.onended = function() { 
 //       document.getElementById('mybutton').click();
  //      playbtn.setAttribute('visible', 'true');
        video.pause();

    };