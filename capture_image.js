
    var Cmodal = document.getElementById("MyCapture");

     window.onload = function() {
       document
          .querySelector(".CaptureButton")
          .addEventListener("click", function() {

	let aScene = document
		.querySelector("a-scene")
		.components.screenshot.getCanvas("perspective");
	let frame = captureVideoFrame("video", "png");
	aScene = resizeCanvas(aScene, frame.width, frame.height);
	frame = frame.dataUri;

	mergeImages([frame, aScene]).then(b64 => {
  	  var modalImg = document.getElementById("img01");
	  var captionText = document.getElementById("caption");
	  Cmodal.style.display = "block";
	  modalImg.src = b64;

	  var Cspan = document.getElementsByClassName("CaptureClose")[0];

	   Cspan.onclick = function() { 
	   Cmodal.style.display = "none";
	   }
	});
	});
     }

function resizeCanvas(origCanvas, width, height) {
	let resizedCanvas = document.createElement("canvas");
	let resizedContext = resizedCanvas.getContext("2d");

	resizedCanvas.height = height;
	resizedCanvas.width = width;

	resizedContext.drawImage(origCanvas, 0, 0, width, height);
	return resizedCanvas.toDataURL();
}

function captureVideoFrame(video, format, width, height) {
        if (typeof video === 'string') {
            video = document.querySelector(video);
        }

        format = format || 'jpeg';

        if (!video || (format !== 'png' && format !== 'jpeg')) {
            return false;
        }

        var canvas = document.createElement("CANVAS");

        canvas.width = width || video.videoWidth;
        canvas.height = height || video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        var dataUri = canvas.toDataURL('image/' + format);
        var data = dataUri.split(',')[1];
        var mimeType = dataUri.split(';')[0].slice(5)

        var bytes = window.atob(data);
        var buf = new ArrayBuffer(bytes.length);
        var arr = new Uint8Array(buf);

        for (var i = 0; i < bytes.length; i++) {
            arr[i] = bytes.charCodeAt(i);
        }

        var blob = new Blob([ arr ], { type: mimeType });
        return { blob: blob, dataUri: dataUri, format: format, width: canvas.width, height: canvas.height };
    };
