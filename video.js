
const video = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeElem = document.getElementById('currentTime');
const totalTimeElem = document.getElementById('totalTime');
const volumeControl = document.getElementById('volumeControl');


playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});


video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    updateCurrentTime();
});


progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * video.duration;
    video.currentTime = seekTime;
});


video.addEventListener('loadedmetadata', () => {
    totalTimeElem.textContent = formatTime(video.duration);
});

function updateCurrentTime() {
    currentTimeElem.textContent = formatTime(video.currentTime);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}


volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});
