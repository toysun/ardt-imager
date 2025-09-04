/*global THREE*/
/*global AFRAME*/

function getVector(camera,targetObject) {  
  var entityPosition = new THREE.Vector3();
  targetObject.object3D.getWorldPosition(entityPosition);
  
  var cameraPosition = new THREE.Vector3();
  camera.object3D.getWorldPosition(cameraPosition);
  
  //Based on:  https://github.com/supermedium/superframe/blob/master/components/look-at/index.js
  var vector = new THREE.Vector3(entityPosition.x, entityPosition.y, entityPosition.z); 
  vector.subVectors(cameraPosition, vector).add(cameraPosition);
  return vector;
}

function centerCamera(camera,vector) {
  //Based on: https://codepen.io/wosevision/pen/JWRMyK
  camera.object3D.lookAt(vector);
  camera.object3D.updateMatrix();    

  //Based on: https://stackoverflow.com/questions/36809207/aframe-threejs-camera-manual-rotation
  var rotation = camera.getAttribute('rotation');
  camera.components['look-controls'].pitchObject.rotation.x = THREE.Math.degToRad(rotation.x);
  camera.components['look-controls'].yawObject.rotation.y = THREE.Math.degToRad(rotation.y);
}

function lookGreenBox() {
  var cameraEl = document.getElementById('cam');
  cameraEl.setAttribute("look-controls", {enabled: false});
  let pointTarget = getVector(cameraEl, document.getElementById('object2'));
  centerCamera(cameraEl,pointTarget);  
  cameraEl.setAttribute("look-controls", {enabled: true});
}

function moveCamera () {
    
  var step = 1;
  var timer = undefined;

  //Based on: https://stackoverflow.com/questions/39579380/a-frame-js-camera-rotation-with-look-controls/39579425#39579425
  var cameraEl = document.getElementById('cam');
  cameraEl.setAttribute("look-controls", {enabled: false});

  var timer = setInterval(function (){

    if(step > 5) {
      
      clearInterval(timer);
      cameraEl.setAttribute('look-controls', {enabled: true});
      console.log('Finish!!');

    } else {

      let entity = document.getElementById('object' + step);
      
      let pointTarget = getVector(cameraEl, entity);
      centerCamera(cameraEl,pointTarget);      
      step = step + 1;        
    }      

  },2000);
    
    
}


