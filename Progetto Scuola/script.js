let currentAudio = null; // Variable to store the currently playing audio
let audioPlayerVisible = false; // To track audio player visibility

function playAudio(id) {
    // Pause the currently playing audio if there is one
    if (currentAudio && currentAudio.id !== id) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio
        document.getElementById("play-icon").style.display = "block"; // Show play icon
        document.getElementById("pause-icon").style.display = "none"; // Hide pause icon
    }

    currentAudio = document.getElementById(id);
    currentAudio.play();

    // Show the audio player with a fade effect
    showAudioPlayer();
    document.getElementById("play-icon").style.display = "none"; // Hide play icon
    document.getElementById("pause-icon").style.display = "block"; // Show pause icon
}

function togglePlay() {
    if (currentAudio) {
        if (currentAudio.paused) {
            currentAudio.play();
            document.getElementById("play-icon").style.display = "none"; // Hide play icon
            document.getElementById("pause-icon").style.display = "block"; // Show pause icon
        } else {
            currentAudio.pause();
            document.getElementById("play-icon").style.display = "block"; // Show play icon
            document.getElementById("pause-icon").style.display = "none"; // Hide pause icon
        }
    }
}

function showAudioPlayer() {
    const player = document.getElementById("audio-player");
    player.classList.add("show");
    audioPlayerVisible = true;
}

function closePlayer() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio
    }
    const player = document.getElementById("audio-player");
    player.classList.remove("show");
    audioPlayerVisible = false;
    document.getElementById("play-icon").style.display = "block"; // Show play icon
    document.getElementById("pause-icon").style.display = "none"; // Hide pause icon
}

function rewindAudio() {
    if (currentAudio) {
        currentAudio.currentTime -= 10; // Rewind 10 seconds
    }
}

function fastForwardAudio() {
    if (currentAudio) {
        currentAudio.currentTime += 10; // Fast forward 10 seconds
    }
}

function changePlaybackSpeed() {
    const speed = document.getElementById("audio-speed").value;
    if (currentAudio) {
        currentAudio.playbackRate = speed; // Change playback speed
    }
}
