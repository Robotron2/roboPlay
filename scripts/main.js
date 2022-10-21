// Get all required DOM Elements and assign each to a variable

let nowPlaying = document.querySelector(".now-playing");
let trackArt = document.querySelector(".track-art");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");

let playpauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let seekSlider = document.querySelector(".seek-slider");
let volumeSlider = document.querySelector(".volume-slider");
let currTime = document.querySelector(".current-time");
let totalDuration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");

// Create and audio element using the createElement method
let currTrack = document.createElement("audio");

// Javascript variables for additional logic

let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

// Create a test music list then you can create a separate file for that later

const musicList = [
	{
		img: "images/ratherbe.jpg",
		name: "Strongest",
		artist: "Ina Woldsen ft Alan Walker",
		music: "music/Strongest.mp3",
	},
	{
		img: "images/stay.png",
		name: "Stay",
		artist: "The Kid LAROI, Justin Bieber",
		music: "music/stay.mp3",
	},
	{
		img: "images/fallingdown.jpg",
		name: "Falling Down",
		artist: "Wid Cards",
		music: "music/fallingdown.mp3",
	},
	{
		img: "images/faded.png",
		name: "Faded",
		artist: "Alan Walker",
		music: "music/Faded.mp3",
	},
	{
		img: "images/ratherbe.jpg",
		name: "Rather Be",
		artist: "Clean Bandit",
		music: "music/Rather Be.mp3",
	},
];

// Function that plays the song at the current music index
loadTrack(trackIndex);

const loadTrack = (trackIndex) => {
	clearInterval(updateTimer);
	reset();

	currTrack.src = musicList[trackIndex].music;
	currTrack.load();

	trackArt.style.backgroundImage = `url( ${musicList[trackIndex]}.img )`;
	trackName.textContent = musicList[trackIndex].name;
	trackArtist.textContent = musicList[trackIndex].artist;
	nowPlaying.textContent = `Playing music  ${trackIndex + 1}   of  ${musicList.length}`;

	updateTimer = setInterval(setUpdate, 1000);

	currTrack.addEventListener("ended", nextTrack);

	// randomBgColor();
};

// Reset function
const reset = () => {
	currTime.textContent = "00:00";
	totalDuration.textContent = "00:00";
	seekSlider.value = 0;
};

const randomTrack = () => {
	isRandom ? pauseRandom() : playRandom();
};
const playRandom = () => {
	isRandom = true;
	randomIcon.classList.add("randomActive");
};
