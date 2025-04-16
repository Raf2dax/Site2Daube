document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const trackTitle = document.getElementById("trackTitle");
    const volumeSlider = document.getElementById("volumeSlider");

    // Musiques
    const tracks = [
        { title: "TREINAMENTO DE FORCA", src: "../media/audio/Treinamentodeforca.mp3" },
        { title: "SLIDE DA TREME MELODICA ", src: "../media/audio/slidedatreme.mp3" },
        { title: "HIIT", src: "../media/audio/hiit.mp3" },
    ];

    let currentTrack = 0;

    // load musique
    function loadTrack(index) {
        audioPlayer.src = tracks[index].src;
        trackTitle.textContent = tracks[index].title;
        audioPlayer.load();
    }

    // pause/play
    playPauseBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    // next
    nextBtn.addEventListener("click", function () {
        currentTrack = (currentTrack + 1) % tracks.length; // loop
        loadTrack(currentTrack);
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    });

    //précédente
    prevBtn.addEventListener("click", function () {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length; // reversed loop
        loadTrack(currentTrack);
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    });

    // volume
    volumeSlider.addEventListener("input", function () {
        audioPlayer.volume = volumeSlider.value;
    });

    // Load first track
    loadTrack(currentTrack);

    // if musique = end -> next musique 
    audioPlayer.addEventListener("ended", function () {
        nextBtn.click();
    });
});