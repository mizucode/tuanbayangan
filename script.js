const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
    accordionHeader.addEventListener("click", () => {
        accordionHeader.classList.toggle("active");
        const accordionContent = accordionHeader.nextElementSibling;
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});

const musicPlayer = document.querySelector(".music-player");
const audio = musicPlayer.querySelector("audio");
const playPauseBtn = musicPlayer.querySelector(".play-pause-btn");
const stopBtn = musicPlayer.querySelector(".stop-btn");
const volumeSlider = musicPlayer.querySelector(".volume-slider");

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
});

stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = "Play";
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
});
