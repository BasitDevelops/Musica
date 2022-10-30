const navBar = document.querySelector('#navbar');
const toggleBtn = document.querySelector('.toggle-btn-container');
const sideMenu = document.querySelector('.side-menu');
const searchBtn = document.querySelector('.search-icon-container');
const searchBar = document.querySelector('.search-bar');

let sideMenuFlag = false;
let searchBarFlag = false;
let navHeight = `${navBar.getBoundingClientRect().height}px`
const body = document.body;

toggleBtn.addEventListener('click', function () {
    if (!sideMenuFlag) {
        sideMenuFlag = true;
        sideMenu.style.top = navHeight;
        sideMenu.classList.add('display-side-menu');
        toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        body.style.overflowY = 'hidden';
    } else {
        sideMenuFlag = false;
        sideMenu.classList.remove('display-side-menu');
        toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="src(#clip0_107_495)">
        <path d="M4 8H20" stroke="#EFEEE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 16H20" stroke="#EFEEE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_107_495">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `
        body.style.overflowY = 'scroll';
    }
})

searchBtn.addEventListener('click', function () {
    if (!searchBarFlag) {
        searchBarFlag = true;
        searchBar.style.top = navHeight;
        searchBar.classList.add('display-search-bar');
        body.style.overflowY = 'hidden';
    } else {
        searchBarFlag = false;
        searchBar.classList.remove('display-search-bar');
        body.style.overflowY = 'scroll';
    }
})

//

//

//
const currentSongBar = document.querySelector('#current-song');
const currentSongPlayOrPauseBtn = currentSongBar.querySelector('.playandpause-btn');
const nextBtn = currentSongBar.querySelector('.next-btn');
const prevBtn = currentSongBar.querySelector('.prev-btn');
let currentSongImg = currentSongBar.children[0].children[0].children[0];
let currentSongTitle = currentSongBar.children[0].children[1].children[0];
let currentSongArtist = currentSongBar.children[0].children[1].children[1];

const topChartsTracks = [
    {
        id: 1,
        src: './songs/50 Cent - In Da Club.mp3',
        coverArt: './images/50 cent in da club.jpg',
        name: 'In Da Club',
        artist: '50 Cent'
    },
    {
        id: 2,
        src: './songs/Ed Sheeran - Shape of You.mp3',
        coverArt: './images/ed sheeran shape of you.jpg',
        name: 'Shape of You',
        artist: 'Ed Sheeran'
    },
    {
        id: 3,
        src: './songs/Katy Perry - Dark Horse ft. Juicy J.mp3',
        coverArt: './images/katy perry dark horse.jpg',
        name: 'Dark Horse',
        artist: 'Katy Perry ft. Juicy J'
    },
    {
        id: 4,
        src: './songs/Kaya Stewart - If Things Go South.mp3',
        coverArt: './images/kaya stewart if things go south.jpg',
        name: 'If Things Go South',
        artist: 'Kaya Stewart'
    },
    {
        id: 5,
        src: './songs/Mark Ronson - Uptown Funk ft. Bruno Mars.mp3',
        coverArt: './images/mark ronson uptown funk.jpg',
        name: 'Uptown Funk',
        artist: 'Mark Ronson ft. Bruno Mars'
    }
]

const topChartsContainer = document.getElementById('top-charts');

topChartsTracks.forEach(function (track) {
    topChartsContainer.innerHTML += `<div class="card" id="top-charts-card">
    <div class="first-container">
    <div class="img-container">
            <img src="${track.coverArt}" alt="" id="card-img">
        </div>
        <div class="card-info">
            <p class="card-title" id="card-title">
            ${track.name}
            </p>
            <p class="artist" id="card-artist">
            ${track.artist}
            </p>
            <p class="card-duration" id="card-duration">
                
            </p>
        </div>
    </div>
    <div class="heart-icon-container">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                stroke="#FACD66" stroke-width="0.5625" stroke-linecap="round"
                stroke-linejoin="round" />
            <path opacity="0.4" d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                stroke="#FACD66" stroke-width="0.5625" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
    <audio src="${track.src}" id="card-audio" preload="metadata"></audio>
</div>`
})

let topChartsCards = document.querySelectorAll('#top-charts-card');

topChartsCards.forEach(function (card) {
    let audio = card.querySelector('audio');
    audio.addEventListener('loadedmetadata', function () {
        let cardDuration = document.getElementById('card-duration');
        let audioDuration = (audio.duration / 60).toFixed(2);
        cardDuration.innerHTML = audioDuration;
        console.log(audioDuration);
        //FIX
    })

    card.addEventListener('click', function () {
        cardFlag = true;
        songFlag = false;

        audio.currentTime = 0;
        audio.play();

        document.addEventListener('play', function (e) {
            let audios = document.querySelectorAll('audio');
            audios.forEach(function (audio) {
                if (audio != e.target) {
                    audio.pause();
                }
            })
        }, true)

        currentSongBar.classList.add('display-current-song');

        let cardImg = card.children[0].children[0].children[0].src;
        let cardTitle = card.children[0].children[1].children[0].textContent;
        let cardArtist = card.children[0].children[1].children[1].textContent;

        currentSongImg.src = cardImg;
        currentSongTitle.textContent = cardTitle;
        currentSongArtist.textContent = cardArtist;
        currentSongAudio.src = audio.src;

        currentSongPlayOrPauseBtn.innerHTML = '#';
    })
})

let currentSongAudio = currentSongBar.children[0].children[2];

currentSongPlayOrPauseBtn.addEventListener('click', function () {
    if (currentSongAudio.paused) {
        currentSongAudio.play();
    } else {
        currentSongAudio.pause();
    }
    //FIX
})

songIndex = 0;

nextBtn.addEventListener('click', function () {
    if (cardFlag) {
        songIndex++;
        let nextAudio = topChartsCards[songIndex].children[2];
        nextAudio.play();

        let nextSongImg = topChartsCards[songIndex].children[0].children[0].children[0].src;
        let nextSongTitle = topChartsCards[songIndex].children[0].children[1].children[0].textContent;
        let nextSongArtist = topChartsCards[songIndex].children[0].children[1].children[1].textContent;

        currentSongImg.src = nextSongImg;
        currentSongTitle.textContent = nextSongTitle;
        currentSongArtist.textContent = nextSongArtist;

        if (songIndex == topChartsCards.length - 1) {
            songIndex = -1;
        }
    } else if (songFlag) {
        songIndex++;
        let nextAudio = newReleasesSongs[songIndex].children[2];
        nextAudio.play();

        let nextSongImg = newReleasesSongs[songIndex].children[0].src;
        let nextSongTitle = newReleasesSongs[songIndex].children[1].children[0].textContent;
        let nextSongArtist = newReleasesSongs[songIndex].children[1].children[1].textContent;

        currentSongImg.src = nextSongImg;
        currentSongTitle.textContent = nextSongTitle;
        currentSongArtist.textContent = nextSongArtist;

        if (songIndex == newReleasesSongs.length - 1) {
            songIndex = -1;
        }
    }
    //FIX
})

prevBtn.addEventListener('click', function () {
    if (cardFlag) {
        songIndex--;
        let prevAudio = topChartsCards[songIndex].children[2];
        prevAudio.play();

        let prevSongImg = topChartsCards[songIndex].children[0].children[0].children[0].src;
        let prevSongTitle = topChartsCards[songIndex].children[0].children[1].children[0].textContent;
        let prevSongArtist = topChartsCards[songIndex].children[0].children[1].children[1].textContent;

        currentSongImg.src = prevSongImg;
        currentSongTitle.textContent = prevSongTitle;
        currentSongArtist.textContent = prevSongArtist;

    } else if (songFlag) {
        songIndex--;
        let prevAudio = newReleasesSongs[songIndex].children[2];
        prevAudio.play();

        let prevSongImg = newReleasesSongs[songIndex].children[0].src;
        let prevSongTitle = newReleasesSongs[songIndex].children[1].children[0].textContent;
        let prevSongArtist = newReleasesSongs[songIndex].children[1].children[1].textContent;

        currentSongImg.src = prevSongImg;
        currentSongTitle.textContent = prevSongTitle;
        currentSongArtist.textContent = prevSongArtist;
    }
    //FIX
})

const newReleasesTracks = [
    {
        id: 1,
        src: './songs/Organic Soup (feat. Frank Leone).mp3',
        coverArt: './images/casini organic soup.jpg',
        name: 'Organic Soup',
        artist: 'Casini feat. Frank Leone'
    },
    {
        id: 2,
        src: './songs/Rema, Selena Gomez - Calm Down.mp3',
        coverArt: './images/rema calm down.jpg',
        name: 'Calm Down',
        artist: 'Rema, Selena Gomez'
    },
    {
        id: 3,
        src: './songs/Shot Back.mp3',
        coverArt: './images/young deion shot back.jpg',
        name: 'Shot Back',
        artist: 'Young Deion'
    },
    {
        id: 4,
        src: './songs/Tems - The Key.mp3',
        coverArt: './images/tems key.jpg',
        name: 'The Key',
        artist: 'Tems'
    },
    {
        id: 5,
        src: './songs/Wiz Khalifa - See You Again ft. Charlie Puth.mp3',
        coverArt: './images/wiz khalifa see you again.jpg',
        name: 'See You Again',
        artist: 'Wiz Khalifa ft. Charlie Puth'
    }
]

const newReleasesContainer = document.getElementById('new-releases');

newReleasesTracks.forEach(function (track) {
    newReleasesContainer.innerHTML += `<div class="song" id="new-releases-song">
    <img src="${track.coverArt}" alt="">
    <div class="song-info">
        <p class="song-title">
            ${track.name}
        </p>
        <p class="artist">
            ${track.artist}
        </p>
    </div>
    <audio src="${track.src}" id=""></audio>
    </div>`
})

let newReleasesSongs = document.querySelectorAll('#new-releases-song');

newReleasesSongs.forEach(function (song) {
    let audio = song.querySelector('audio');

    song.addEventListener('click', function () {
        songFlag = true;
        cardFlag = false;

        audio.currentTime = 0;
        audio.play();

        document.addEventListener('play', function (e) {
            let audios = document.querySelectorAll('audio');
            audios.forEach(function (audio) {
                if (audio != e.target) {
                    audio.pause();
                }
            })
        }, true)

        currentSongBar.classList.add('display-current-song');

        let songImg = song.children[0].src
        let songTitle = song.children[1].children[0].textContent;
        let songArtist = song.children[1].children[1].textContent;

        currentSongImg.src = songImg;
        currentSongTitle.textContent = songTitle;
        currentSongArtist.textContent = songArtist;

        currentSongPlayOrPauseBtn.innerHTML = '#';
    })
})





