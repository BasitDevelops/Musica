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
        toggleBtn.innerHTML = '<i class="fa-solid fa-equals"></i>'
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
if (window.location.href == 'http://127.0.0.1:5500/index.html' || window.location.href == 'https://basitdevelops.github.io/Musica/index.html' || window.location.href == 'https://basitdevelops.github.io/Musica/') {
    let homeLinkIcon = sideMenu.children[0].children[0].children[0].children[0];
    let homeLinkText = sideMenu.children[0].children[0].children[0].children[1];
    homeLinkIcon.classList.add('active-link-icon')
    homeLinkText.classList.add('active-link-text')
} else if (window.location.href == 'http://127.0.0.1:5500/collection.html' || window.location.href == 'https://basitdevelops.github.io/Musica/collection.html') {
    let collectionLinkIcon = sideMenu.children[0].children[1].children[0].children[0];
    let collectionLinkText = sideMenu.children[0].children[1].children[0].children[1];
    collectionLinkIcon.classList.add('active-link-icon')
    collectionLinkText.classList.add('active-link-text')
} else if (window.location.href == 'http://127.0.0.1:5500/album.html' || window.location.href == 'https://basitdevelops.github.io/Musica/album.html') {
    let albumLinkIcon = sideMenu.children[0].children[2].children[0].children[0];
    let albumLinkText = sideMenu.children[0].children[2].children[0].children[1];
    albumLinkIcon.classList.add('active-link-icon')
    albumLinkText.classList.add('active-link-text')
}

//

//

//
const currentSongBar = document.querySelector('.current-song');
const playOrPauseBtn = currentSongBar.querySelector('.playorpause-btn');
const nextBtn = currentSongBar.querySelector('.next-btn');
const prevBtn = currentSongBar.querySelector('.prev-btn');
let currentSongImg = currentSongBar.children[0].children[0].children[0];
let currentSongTitle = currentSongBar.children[0].children[1].children[0];
let currentSongArtist = currentSongBar.children[0].children[1].children[1];

//

//

//
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

const topChartsContainer = document.querySelector('.cards-container');

topChartsTracks.forEach(function (track) {
    topChartsContainer.innerHTML += `<div class="card">
    <div class="first-container">
    <div class="img-container">
            <img src="${track.coverArt}" alt="">
        </div>
        <div class="card-info">
            <p class="card-title">
            ${track.name}
            </p>
            <p class="artist">
            ${track.artist}
            </p>
            <p class="card-duration">
            
            </p>
        </div>
    </div>
    <div class="heart-icon-container">
    <i class="fa-solid fa-heart heart-icon"></i>
    </div>
    <audio src="${track.src}" id="card-audio" preload="metadata"></audio>
</div>`
})

let topChartsCards = document.querySelectorAll('.card .first-container');

topChartsCards.forEach(function (card) {
    let audio = card.nextElementSibling.nextElementSibling;
    audio.addEventListener('loadedmetadata', function () {
        let cardDuration = document.querySelector('.card-duration');
        let audioDuration = (audio.duration / 60).toFixed(2);
        cardDuration.innerHTML = audioDuration;
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

        let cardImg = card.children[0].children[0].src;
        let cardTitle = card.children[1].children[0].textContent;
        let cardArtist = card.children[1].children[1].textContent;

        currentSongImg.src = cardImg;
        currentSongTitle.textContent = cardTitle;
        currentSongArtist.textContent = cardArtist;
        currentSongAudio.src = audio.src;

        playOrPauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>';
    })
})
//

//

//

let likeIcons = document.querySelectorAll('.heart-icon');

likeIcons.forEach(function (likeIcon) {
    let likeIconFlag = false;
    likeIcon.addEventListener('click', function () {
        let myCollectionBg = likeIcon.parentElement.previousElementSibling.children[0].children[0].src;
        let myCollectionName = likeIcon.parentElement.previousElementSibling.children[1].children[0].textContent;
        let myCollectionArtist = likeIcon.parentElement.previousElementSibling.children[1].children[1].textContent;

        let myCollectionInfo = {
            backgroundImg: myCollectionBg,
            name: myCollectionName,
            artist: myCollectionArtist
        }

        if (!likeIconFlag) {
            likeIcon.style.color = 'red';
            myCollection.push(myCollectionInfo);
            likeIconFlag = true;
        } else {
            likeIcon.style.color = '#efeee040';
            myCollection.splice(myCollectionInfo, 1);
            likeIconFlag = false;
        }
    })
})

const myCollection = [];

// const myCollectionContainer = document.querySelector('#my-collection');

// console.log(myCollectionContainer);

//

//

//
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

const newReleasesContainer = document.querySelector('.songs-container');

newReleasesTracks.forEach(function (track) {
    newReleasesContainer.innerHTML += `<div class="song">
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

let newReleasesSongs = document.querySelectorAll('.song');

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
        currentSongAudio.src = audio.src;

        playOrPauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>';
    })
})

//

//

//
let currentSongAudio = currentSongBar.children[0].children[2];

playOrPauseBtn.addEventListener('click', function () {
    if (currentSongAudio.paused) {
        currentSongAudio.play();
        playOrPauseBtn.innerHTML = `<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>`
    } else {
        currentSongAudio.pause();
        playOrPauseBtn.innerHTML = `<i class="fa-solid fa-circle-play fa-2xl"></i>`
    }
    //FIX
})

songIndex = 0;

nextBtn.addEventListener('click', function () {
    if (cardFlag) {
        songIndex++;
        let nextAudio = topChartsCards[songIndex].nextElementSibling.nextElementSibling;
        nextAudio.play();

        let nextSongImg = topChartsCards[songIndex].children[0].children[0].src;
        let nextSongTitle = topChartsCards[songIndex].children[1].children[0].textContent;
        let nextSongArtist = topChartsCards[songIndex].children[1].children[1].textContent;

        currentSongImg.src = nextSongImg;
        currentSongTitle.textContent = nextSongTitle;
        currentSongArtist.textContent = nextSongArtist;
        currentSongAudio.src = nextAudio.src;

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
        currentSongAudio.src = nextAudio.src;

        if (songIndex == newReleasesSongs.length - 1) {
            songIndex = -1;
        }
    }
    playOrPauseBtn.innerHTML = `<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>`
    //FIX
})

prevBtn.addEventListener('click', function () {
    if (cardFlag) {
        if (songIndex < 1) {
            songIndex = topChartsCards.length;
        }

        songIndex--;
        let prevAudio = topChartsCards[songIndex].nextElementSibling.nextElementSibling;
        prevAudio.play();

        let prevSongImg = topChartsCards[songIndex].children[0].children[0].src;
        let prevSongTitle = topChartsCards[songIndex].children[1].children[0].textContent;
        let prevSongArtist = topChartsCards[songIndex].children[1].children[1].textContent;

        currentSongImg.src = prevSongImg;
        currentSongTitle.textContent = prevSongTitle;
        currentSongArtist.textContent = prevSongArtist;
        currentSongAudio.src = prevAudio.src;

    } else if (songFlag) {
        if (songIndex < 1) {
            songIndex = topChartsCards.length;
        }

        songIndex--;
        let prevAudio = newReleasesSongs[songIndex].children[2];
        prevAudio.play();

        let prevSongImg = newReleasesSongs[songIndex].children[0].src;
        let prevSongTitle = newReleasesSongs[songIndex].children[1].children[0].textContent;
        let prevSongArtist = newReleasesSongs[songIndex].children[1].children[1].textContent;

        currentSongImg.src = prevSongImg;
        currentSongTitle.textContent = prevSongTitle;
        currentSongArtist.textContent = prevSongArtist;
        currentSongAudio.src = prevAudio.src;
    }
    //FIX
})
//

//

//

const progressBar = currentSongBar.querySelector('.progress-bar').children[0];

currentSongAudio.addEventListener('timeupdate', function () {
    progress = parseInt((currentSongAudio.currentTime / currentSongAudio.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', function () {
    console.log(currentSongAudio);
    currentSongAudio.currentTime = progressBar.value * currentSongAudio.duration / 100;
})

