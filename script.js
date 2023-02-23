const accordionHeaders = document.querySelectorAll(".accordion-header");
const musicPlayer = document.querySelector(".music-player");
const audio = musicPlayer.querySelector("audio");
const playPauseBtn = musicPlayer.querySelector(".play-pause-btn");
const stopBtn = musicPlayer.querySelector(".stop-btn");
const volumeSlider = musicPlayer.querySelector(".volume-slider");
const quoteElem = document.getElementById("quote");
let lastQuoteIndex;
const quotes = [
    "Hard work betrays none, but dreams betray many. - Hachiman Hikigaya,",
    "A person's past can't be changed. But their future is still up for grabs. - Sinon",
    "People's true abilities are hidden. You have to see through their outer shell to find them. - Ayanokouji",
];

function toggleAccordion(accordionHeader) {
    accordionHeader.classList.toggle("active");
    const accordionContent = accordionHeader.nextElementSibling;
    accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
}

for (const accordionHeader of accordionHeaders) {
    accordionHeader.addEventListener("click", () => {
        toggleAccordion(accordionHeader);
    });
}

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

function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    lastQuoteIndex = randomIndex;
    return quotes[randomIndex];
}

function displayRandomQuote() {
    quoteElem.textContent = getRandomQuote();
}

displayRandomQuote();