//// OnClick functions /////
function openFaceRecognition(){
    document.location.href = 'faceRecognition.html';
}

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



