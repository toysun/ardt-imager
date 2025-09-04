window.addEventListener("load", () => {
       
        const text = document.getElementById("text");
        
        var DestPos = [37.5721, 126.9761];
        
        if (navigator.geolocation) {

         navigator.geolocation.watchPosition(
            function (position) {
                         
              var real_nearCity = real_nearestCity(position.coords.latitude, position.coords.longitude, DestPos[0], DestPos[1]);
              
            },
            function(error) {
                text.innerText = displayError(error);
            },
            { 
              timeout: 2000, 
              maximumAge: 3000 
            }
        );
    }
  });
       
  
  
  function displayError(error) {
    var errorTypes = {
        0: "알 수 없는 오류",
        1: "사용자가 권한 거부",
        2: "위치를 찾을 수 없음",
        3: "요청 응답 시간 초과"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    return errorMessage;
}

// 호도각(degress)각도에서 라디안(radians) 값으로 변환
function degreesToRadians(degress) {
	  radians = (degress * Math.PI)/180;
    return radians;
}

// 구면 코사인 법칙(Spherical Law of Cosine) 으로 두 위도/경도 지점의 거리를 구함
function computeDistance(latitude1, longitude1, latitude2, longitude2) {
  
    var startLatRads = degreesToRadians(latitude1);
    var startLongRads = degreesToRadians(longitude1);
    var destLatRads = degreesToRadians(latitude2);
    var destLongRads = degreesToRadians(longitude2);

    var Radius = 6371; //지구의 반경(km)
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                   Math.cos(startLatRads) * Math.cos(destLatRads) *
                   Math.cos(startLongRads - destLongRads)) * Radius;
   
    var distance1 = distance * 1000;
    return distance1;	// 반환 거리 단위 (km)
}

        
    function real_nearestCity(latitude, longitude, DestLat, DestLong) {

      var real_mindif = 99999;
      var real_closest = 0;

      text.innerText = "";
  
     

          // 사용자의 위치와 지점 사이의 거리를 얻습니다.
          var real_distance = computeDistance(latitude, longitude, DestLat, DestLong);

          text.innerText += "남은거리 :  " + Math.round(real_distance) +' 미터';

          // 가장 짧은 거리값
          if (real_distance < real_mindif) {
          //    real_closest = index;
              real_mindif = real_distance;		// 가장 가까운 거리
          }
	    

	//    text.innerText += "남은거리 :  "+ Math.round(real_mindif) +' 미터';

	    return ;
}

//getLocation();       
        
       