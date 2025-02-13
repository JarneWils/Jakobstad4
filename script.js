// SCREEN SAVER

const saver = document.querySelector('#screensaver');
const video = document.querySelector('#video');
video.play();

// AANTAL SECONDEN VOOR SCEEN SAVER
const timeOutCount = 1;

document.addEventListener("mousemove", () => {
    saver.style.display = "none";
});

let inactivityTimer;

function startInactivityTimer() {
    clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(() => {
        saver.style.display = "block";
    }, timeOutCount * 1000);
}

document.addEventListener("mousemove", startInactivityTimer);

startInactivityTimer();


// FULL SCREEN

document.addEventListener("keydown", (event) => {
    if (event.key === "f") {  // Zorg ervoor dat 'f' ook werkt, niet enkel 'F'
        toggleFullScreen();
    }
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen().catch(err => {
            console.log(`Error attempting to exit full-screen mode: ${err.message}`);
        });
    }
}


// CENTRAAL STATION VIDEO

const centraalStation = document.querySelector('#centraal-station');
const centraalVideoContainer = document.querySelector('#centraal-video-container');
const centraalVideo = document.querySelector('#centraal-video')

centraalStation.addEventListener('click', () => {
    centraalVideoContainer.style.display = 'block';
    centraalVideo.play()
    saver.style.opacity = 0;
});
centraalVideo.addEventListener('ended', () => {
    centraalVideoContainer.style.display = 'none';
    setTimeout(() =>{
        saver.style.opacity = 1;
    }, timeOutCount * 1000);
});


// MUSEUM VIDEO

const museum = document.querySelector('#museum');
const museumVideoContainer = document.querySelector('#museum-video-container');
const museumVideo = document.querySelector('#museum-video')

museum.addEventListener('click', () => {
    museumVideoContainer.style.display = 'block';
    museumVideo.play()
    saver.style.opacity = 0;
});
museumVideo.addEventListener('ended', () => {
    museumVideoContainer.style.display = 'none';
    setTimeout(() =>{
        saver.style.opacity = 1;
    }, timeOutCount * 1000);
});


// WOLF VIDEO

const wolf = document.querySelector('#wolf');
const wolfVideoContainer = document.querySelector('#wolf-video-container');
const wolfVideo = document.querySelector('#wolf-video')

wolf.addEventListener('click', () => {
    wolfVideoContainer.style.display = 'block';
    saver.style.opacity = 0;
    wolfVideo.play()
});
wolfVideo.addEventListener('ended', () => {
    wolfVideoContainer.style.display = 'none';
    setTimeout(() =>{
        saver.style.opacity = 1;
    }, timeOutCount * 1000);
});


// FRITUUR VIDEO

const frituur = document.querySelector('#frituur');
const frituurVideoContainer = document.querySelector('#frituur-video-container');
const frituurVideo = document.querySelector('#frituur-video')

frituur.addEventListener('click', () => {
    frituurVideoContainer.style.display = 'block';
    saver.style.opacity = 0;
    frituurVideo.play()
});
frituurVideo.addEventListener('ended', () => {
    frituurVideoContainer.style.display = 'none';
    setTimeout(() =>{
        saver.style.opacity = 1;
    }, timeOutCount * 1000);
});