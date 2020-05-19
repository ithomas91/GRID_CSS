function openAuthPage() {
    document.location.href = 'userAuth.html';
}

function backToHome(){
    document.location.href = 'index.html';
}
const video = document.getElementById('video')

function startVideo(){
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}
/*startVideo()*/