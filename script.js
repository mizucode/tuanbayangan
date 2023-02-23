const accordionHeaders = document.querySelectorAll(".accordion-header");
const musicPlayer = document.querySelector(".music-player");
const audio = musicPlayer.querySelector("audio");
const playPauseBtn = musicPlayer.querySelector(".play-pause-btn");
const stopBtn = musicPlayer.querySelector(".stop-btn");
const volumeSlider = musicPlayer.querySelector(".volume-slider");
const quoteElem = document.getElementById("quote");
let lastQuoteIndex;
const apiUrl = "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts";
const apiHeaders = {
    "X-RapidAPI-Key": "a88865da07mshcfff269fba5f402p1770e5jsne9e062881b07",
    "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com"
};

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

async function getRandomQuote() {
    try {
        const response = await Promise.race([
            fetch(apiUrl, { headers: apiHeaders }),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Network timeout")), 5000))
        ]);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0 && data[0].fact) {
            return data[0].fact;
        } else {
            throw new Error("Invalid response from API");
        }
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch random quote");
    }
}

let canClick = true;
async function displayRandomQuote() {
    if (!canClick) {
        return;
    }
    canClick = false;
    try {
        const randomQuote = await getRandomQuote();
        console.log(randomQuote);
        quoteElem.textContent = randomQuote;
    } catch (error) {
        console.error(error);
    }
    setTimeout(() => {
        canClick = true;
    }, 50);
}

quoteElem.addEventListener("click", displayRandomQuote);
