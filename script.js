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
const shuffleBtn = currentSongBar.querySelector('.shuffle-btn');
const repeatBtn = currentSongBar.querySelector('.repeat-btn');
let currentSongImg = currentSongBar.children[0].children[0].children[0];
let currentSongTitle = currentSongBar.children[0].children[1].children[0];
let currentSongArtist = currentSongBar.children[0].children[1].children[1];
let currentSongAudio = currentSongBar.children[0].children[2];
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

localStorage.setItem('topChartsTracks', JSON.stringify(topChartsTracks));

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
    <i class="fa-solid fa-heart heart-icon">#</i>
    </div>
    <audio src="${track.src}" id="card-audio" preload="metadata"></audio>   
</div>
<span>${track.id}</span>`
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
        cardIndex = Number(card.parentElement.nextElementSibling.textContent) - 1;
        songFlag = false;
        popularSongFlag = false;

        audio.currentTime = 0;

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

        currentSongAudio.play();

        playOrPauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>';

        seek(currentSongAudio);
    })
})
//

//

//

let likeIcons = document.querySelectorAll('.heart-icon');

let likeIconIndex = 1;

likeIcons.forEach(function (likeIcon) {
    let myCollectionBg = likeIcon.parentElement.previousElementSibling.children[0].children[0].src;
    let myCollectionName = likeIcon.parentElement.previousElementSibling.children[1].children[0].textContent;
    let myCollectionArtist = likeIcon.parentElement.previousElementSibling.children[1].children[1].textContent;
    let myCollectionAudio = likeIcon.parentElement.nextElementSibling.src;

    let likeIconFlag = false;
    let key = localStorage.getItem(JSON.stringify(myCollectionName.trim()));

    if (key) {
        likeIcon.style.color = 'red';
        likeIconFlag = true;
    }

    likeIcon.addEventListener('click', function () {  
        let myCollectionId = likeIconIndex;

        let myCollectionInfo = {
            id: myCollectionId,
            backgroundImg: myCollectionBg,
            name: myCollectionName,
            artist: myCollectionArtist,
            src: myCollectionAudio
        }

        if (!likeIconFlag) {
            likeIconIndex++;
            likeIcon.style.color = 'red';
            localStorage.setItem(JSON.stringify(myCollectionName.trim()), JSON.stringify(myCollectionInfo))
            likeIconFlag = true;
        } else {
            likeIconIndex--
            likeIcon.style.color = '#efeee040';
            localStorage.removeItem(JSON.stringify(myCollectionInfo.name.trim()))
            likeIconFlag = false;
        }
    })
})

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
    <span>${track.id}</span>
    </div>`
})

let newReleasesSongs = document.querySelectorAll('.song');

newReleasesSongs.forEach(function (song) {
    let audio = song.querySelector('audio');
    song.addEventListener('click', function () {
        songFlag = true;
        songIndex = Number(song.children[3].textContent) - 1;
        cardFlag = false;
        popularSongFlag = false;
        audio.currentTime = 0;

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

        currentSongAudio.play()

        playOrPauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>';

        seek(currentSongAudio);
    })
})

//

//

//

async function fetchApi() {
    const response = await fetch('https://musica-api.up.railway.app/new');
    const data = await response.json();

    const popularInYourAreaContainer = document.querySelector('.popular .songs-container');

    data.forEach(function (track) {
        popularInYourAreaContainer.innerHTML += `<div class="song">
        <img src="${track.cover}" alt="">
        <div class="song-info">
            <p class="song-title">
                ${track.title}
            </p>
            <p class="artist">
                ${track.artist}
            </p>
        </div>
        <audio src="${track.audio}" id=""></audio>
        <span>${track.id}</span>
    </div>`
    })

    let popularSongs = popularInYourAreaContainer.querySelectorAll('.song');

    popularSongs.forEach(function name(popularSong) {
        let audio = popularSong.querySelector('audio');
        popularSong.addEventListener('click', function () {
            popularSongFlag = true;
            popularSongIndex = Number(popularSong.children[3].textContent.slice(4)) - 1;
            cardFlag = false;
            songFlag = false;
            audio.currentTime = 0;

            document.addEventListener('play', function (e) {
                let audios = document.querySelectorAll('audio');
                audios.forEach(function (audio) {
                    if (audio != e.target) {
                        audio.pause();
                    }
                })
            }, true)

            currentSongBar.classList.add('display-current-song');

            let songImg = popularSong.children[0].src
            let songTitle = popularSong.children[1].children[0].textContent;
            let songArtist = popularSong.children[1].children[1].textContent;

            currentSongImg.src = songImg;
            currentSongTitle.textContent = songTitle;
            currentSongArtist.textContent = songArtist;
            currentSongAudio.src = audio.src;

            currentSongAudio.play()

            playOrPauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>';

            seek(currentSongAudio);
        })
    })

    nextBtn.addEventListener('click', function () {
        if (popularSongFlag) {
            if (shuffleBtnFlag) {
                popularSongIndex = Math.floor(Math.random() * topChartsCards.length);
            }

            if (popularSongIndex == popularSongs.length - 1) {
                popularSongIndex = -1;
            }

            popularSongIndex++;
            let nextAudio = popularSongs[popularSongIndex].children[2];
            nextAudio.currentTime = 0;

            let nextSongImg = popularSongs[popularSongIndex].children[0].src;
            let nextSongTitle = popularSongs[popularSongIndex].children[1].children[0].textContent;
            let nextSongArtist = popularSongs[popularSongIndex].children[1].children[1].textContent;

            currentSongImg.src = nextSongImg;
            currentSongTitle.textContent = nextSongTitle;
            currentSongArtist.textContent = nextSongArtist;
            currentSongAudio.src = nextAudio.src;

            currentSongAudio.play()

            seek(currentSongAudio);
        }
    })

    prevBtn.addEventListener('click', function () {
        if (popularSongFlag) {
            if (shuffleBtnFlag) {
                popularSongIndex = Math.floor(Math.random() * topChartsCards.length);
            }

            if (popularSongIndex < 1) {
                popularSongIndex = popularSongs.length;
            }

            popularSongIndex--;
            let nextAudio = popularSongs[popularSongIndex].children[2];
            nextAudio.currentTime = 0;

            let nextSongImg = popularSongs[popularSongIndex].children[0].src;
            let nextSongTitle = popularSongs[popularSongIndex].children[1].children[0].textContent;
            let nextSongArtist = popularSongs[popularSongIndex].children[1].children[1].textContent;

            currentSongImg.src = nextSongImg;
            currentSongTitle.textContent = nextSongTitle;
            currentSongArtist.textContent = nextSongArtist;
            currentSongAudio.src = nextAudio.src;

            currentSongAudio.play()

            seek(currentSongAudio);
        }
    })
}

fetchApi();

//

//

//

playOrPauseBtn.addEventListener('click', function () {
    if (currentSongAudio.paused) {
        currentSongAudio.play();
        playOrPauseBtn.innerHTML = `<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>`
        seek(currentSongAudio);
    } else {
        currentSongAudio.pause();
        playOrPauseBtn.innerHTML = `<i class="fa-solid fa-circle-play fa-2xl"></i>`
    }
})

//

//

//

nextBtn.addEventListener('click', function () {
    if (cardFlag) {
        if (shuffleBtnFlag) {
            cardIndex = Math.floor(Math.random() * topChartsCards.length);
        }

        if (cardIndex == topChartsCards.length - 1) {
            cardIndex = -1;
        }

        cardIndex++;
        let nextAudio = topChartsCards[cardIndex].nextElementSibling.nextElementSibling;
        nextAudio.currentTime = 0;

        let nextSongImg = topChartsCards[cardIndex].children[0].children[0].src;
        let nextSongTitle = topChartsCards[cardIndex].children[1].children[0].textContent;
        let nextSongArtist = topChartsCards[cardIndex].children[1].children[1].textContent;

        currentSongImg.src = nextSongImg;
        currentSongTitle.textContent = nextSongTitle;
        currentSongArtist.textContent = nextSongArtist;
        currentSongAudio.src = nextAudio.src;

        currentSongAudio.play()

        seek(currentSongAudio);
    } else if (songFlag) {
        if (shuffleBtnFlag) {
            songIndex = Math.floor(Math.random() * topChartsCards.length);
        }

        if (songIndex == newReleasesSongs.length - 1) {
            songIndex = -1;
        }

        songIndex++;
        let nextAudio = newReleasesSongs[songIndex].children[2];
        nextAudio.currentTime = 0;

        let nextSongImg = newReleasesSongs[songIndex].children[0].src;
        let nextSongTitle = newReleasesSongs[songIndex].children[1].children[0].textContent;
        let nextSongArtist = newReleasesSongs[songIndex].children[1].children[1].textContent;

        currentSongImg.src = nextSongImg;
        currentSongTitle.textContent = nextSongTitle;
        currentSongArtist.textContent = nextSongArtist;
        currentSongAudio.src = nextAudio.src;

        currentSongAudio.play()

        seek(currentSongAudio);
    }
    playOrPauseBtn.innerHTML = `<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>`
})

prevBtn.addEventListener('click', function () {
    if (cardFlag) {
        if (shuffleBtnFlag) {
            cardIndex = Math.floor(Math.random() * topChartsCards.length);
        }

        if (cardIndex < 1) {
            cardIndex = topChartsCards.length;
        }

        cardIndex--;
        let prevAudio = topChartsCards[cardIndex].nextElementSibling.nextElementSibling;
        prevAudio.currentTime = 0;

        let prevSongImg = topChartsCards[cardIndex].children[0].children[0].src;
        let prevSongTitle = topChartsCards[cardIndex].children[1].children[0].textContent;
        let prevSongArtist = topChartsCards[cardIndex].children[1].children[1].textContent;

        currentSongImg.src = prevSongImg;
        currentSongTitle.textContent = prevSongTitle;
        currentSongArtist.textContent = prevSongArtist;
        currentSongAudio.src = prevAudio.src;

        currentSongAudio.play();

        seek(currentSongAudio);
    } else if (songFlag) {
        if (shuffleBtnFlag) {
            songIndex = Math.floor(Math.random() * topChartsCards.length);
        }

        if (songIndex < 1) {
            songIndex = topChartsCards.length;
        }

        songIndex--;
        let prevAudio = newReleasesSongs[songIndex].children[2];
        prevAudio.currentTime = 0;

        let prevSongImg = newReleasesSongs[songIndex].children[0].src;
        let prevSongTitle = newReleasesSongs[songIndex].children[1].children[0].textContent;
        let prevSongArtist = newReleasesSongs[songIndex].children[1].children[1].textContent;

        currentSongImg.src = prevSongImg;
        currentSongTitle.textContent = prevSongTitle;
        currentSongArtist.textContent = prevSongArtist;
        currentSongAudio.src = prevAudio.src;

        currentSongAudio.play()

        seek(currentSongAudio);
    }
    playOrPauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause fa-2xl fa-beat"></i>';
})
//

//

//
let shuffleBtnFlag = false;

shuffleBtn.addEventListener('click', () => {
    let shuffleBtnIcon = shuffleBtn.children[0];
    if (!shuffleBtnFlag) {
        shuffleBtnIcon.style.color = '#FACD66';
        shuffleBtnFlag = true;
    } else {
        shuffleBtnIcon.style.color = '#FFFFFF';
        shuffleBtnFlag = false;
    }
})

//

let repeatBtnFlag = false;

repeatBtn.addEventListener('click', () => {
    let repeatBtnIcon = repeatBtn.children[0];
    if (!repeatBtnFlag) {
        repeatBtnIcon.style.color = '#FACD66';
        repeatBtnFlag = true;
    } else {
        repeatBtnIcon.style.color = '#FFFFFF';
        repeatBtnFlag = false;
    }
})
//

//

//

const progressBar = currentSongBar.querySelector('.progress-bar').children[0];

function seek(currentSongAudio) {
    currentSongAudio.addEventListener('timeupdate', function () {
        progress = parseInt((currentSongAudio.currentTime / currentSongAudio.duration) * 100);
        progressBar.value = progress;
        if (repeatBtnFlag) {
            if (currentSongAudio.currentTime == currentSongAudio.duration) {
                currentSongAudio.currentTime = 0;
                currentSongAudio.play();
            }
        }
        if (currentSongAudio.currentTime == currentSongAudio.duration) {
            playOrPauseBtn.innerHTML = '<i class="fa-solid fa-circle-play fa-2xl"></i>';
        }
    })

    progressBar.addEventListener('change', function () {
        currentSongAudio.currentTime = progressBar.value * currentSongAudio.duration / 100;
    })
}
//

//

//








