//// OnClick functions /////
function openFaceRecognition(){
    document.location.href = 'faceRecognition.html';
}

<<<<<<< HEAD
//////
navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo(){
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener('chargingchange', function(){
      updateChargeInfo();
    });
    function updateChargeInfo(){
      console.log("Battery charging? "
                  + (battery.charging ? "Yes" : "No"));
    }
  
    battery.addEventListener('levelchange', function(){
      updateLevelInfo();
    });
    function updateLevelInfo(){
      console.log("Battery level: "
                  + battery.level * 100 + "%");
    }
  
    battery.addEventListener('chargingtimechange', function(){
      updateChargingInfo();
    });
    function updateChargingInfo(){
      console.log("Battery charging time: "
                   + battery.chargingTime + " seconds");
    }
  
    battery.addEventListener('dischargingtimechange', function(){
      updateDischargingInfo();
    });
    function updateDischargingInfo(){
      console.log("Battery discharging time: "
                   + battery.dischargingTime + " seconds");
    }
  
    document.getElementById("batteryLevel").innerHTML = battery.level * 100 + "%";

  });
=======
function backToHome(){
    document.location.href = 'index.html';
}

//// Video /////////////////////

const video = document.getElementById('video')


Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ]).then(startVideo)
  

function startVideo(){
    navigator.mediaDevices.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}



>>>>>>> 7abb356fe893502e4d3e177b13c38d77805e7ec1
