// scripts.js

document.getElementById('Main Video.mp4').addEventListener('click', function () {
    var video = this;
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
