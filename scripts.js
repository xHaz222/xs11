// JavaScript to control the music player
const songs = [
  "https://www.youtube.com/watch?v=ssVCtZBQyus",
  "https://youtu.be/mm29aBe71SI?si=3P_AcZ0jZb7mcRs2",
  "https://youtu.be/nP8ZVJxiJlU?si=mDvCgd-e93pcWumS",
  "https://youtu.be/6SHIrbtXY1U?si=UEzcSUUzHNjFI7KU",
  "https://youtu.be/dTbONq0zxRA?si=j7FKiWa9Ts-hQ2Do",
  "https://youtu.be/XQ0D_QD_DhM?si=jwr_mIG-zZwSPk-S"
];
let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();
audio.src = songs[currentSongIndex];
audio.loop = true; // Loop the song

// Play/Pause functionality
const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "❚❚";
  }
  isPlaying = !isPlaying;
});

// Next Song functionality
const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audio.src = songs[currentSongIndex];
  audio.play();
  playBtn.textContent = "❚❚";
  isPlaying = true;
});

// Previous Song functionality
const prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audio.src = songs[currentSongIndex];
  audio.play();
  playBtn.textContent = "❚❚";
  isPlaying = true;
});

// Volume control functionality
const volumeControl = document.getElementById("volume");
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});
