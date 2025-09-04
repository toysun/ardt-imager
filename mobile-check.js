var mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
        navigator.userAgent.toLowerCase()
      );
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      var Browser = navigator.userAgent.toLowerCase();
      if (mobile) {
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          if (Browser.indexOf("safari") > 90) {
            if (Browser.indexOf("naver") !== -1) {
    //          alert(Browser.indexOf("safari"));
    //          alert(Browser.indexOf("naver"));
         //     location.href = "https://www.ardocent.com/ardocent/not-allowed-wonderticket/";
            }
            if (self.name != "reload") {
              self.name = "reload";
              self.location.reload(true);
              
            } else self.name = "";
          } else {
            alert(Browser.indexOf("safari"));
            location.href = "https://www.ardocent.com/ardocent/not-allowed-wonderticket/";
          }
        } 
        
        else if (Browser.indexOf("chrome") < 90) {
          if (self.name != "reload") {
            self.name = "reload";
            self.location.reload(true);
          } else self.name = "";
        } else {
          alert(Browser.indexOf("safari"));
          location.href =
            "intent://ardocent.com/aframe/wonder/index.html#Intent;scheme=https;package=com.android.chrome;end";
        }
      } 
      else window.location.replace("https://www.ardocent.com/ardocent/not-allowed-wonderticket/");