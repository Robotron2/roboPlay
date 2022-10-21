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
