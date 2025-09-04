function check_module() {
  var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var footer_flag = document.getElementById('myFooter');

  if (mobile) {
               if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
	              	footer_flag.style.display = 'block';
               }
          }
//          else
//            window.location.replace("https://www.ardocent.com/ardocent/pad/");
   };