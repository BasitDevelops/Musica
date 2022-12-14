const navBar = document.querySelector('#navbar');
const toggleBtn = document.querySelector('.toggle-btn-container');
const sideMenu = document.querySelector('.side-menu');
const searchBtn = document.querySelector('.search-icon-container');
const searchBar = document.querySelector('.search-bar');
let sideMenuFlag = false;
let searchBarFlag = false;
let navHeight = `${navBar.getBoundingClientRect().height}px`
const body = document.body;
//
toggleBtn.addEventListener('click', function () {
    if (!sideMenuFlag) {
        sideMenuFlag = true;
        sideMenu.style.top = navHeight;
        sideMenu.style.height = '100vh';
        sideMenu.classList.add('display-side-menu');
        toggleBtn.innerHTML = '<i class="fa-solid fa-xmark lg"></i>';
        body.style.overflowY = 'hidden';
        body.style.height = '100vh';
    } else {
        sideMenuFlag = false;
        sideMenu.classList.remove('display-side-menu');
        toggleBtn.innerHTML = '<i class="fa-solid fa-equals lg"></i>';
        body.style.overflowY = 'scroll';
        body.style.height = '';
    }
})
searchBtn.addEventListener('click', function () {
    if (!searchBarFlag) {
        searchBarFlag = true;
        searchBar.style.top = navHeight;
        searchBar.classList.add('display-search-bar');
    } else {
        searchBarFlag = false;
        searchBar.classList.remove('display-search-bar');
    }
})
//
if (window.location.href == 'http://127.0.0.1:5500/collection.html' || window.location.href == 'https://basitdevelops.github.io/Musica/collection.html') {
    let collectionLinkIcon = sideMenu.children[0].children[1].children[0].children[0];
    let collectionLinkText = sideMenu.children[0].children[1].children[0].children[1];
    collectionLinkIcon.classList.add('active-link-icon')
    collectionLinkText.classList.add('active-link-text')
}
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
const myCollectionContainer = document.querySelector('#my-collection');
const getAllPlaylists = JSON.parse(localStorage.getItem('allPlaylists'));
const likedPlaylistsCards = [];
//
getAllPlaylists.forEach(function (playlist) {
    let likedPlaylists = JSON.parse(localStorage.getItem(JSON.stringify(playlist.cover)));
    if (likedPlaylists == null) {
        likedPlaylists = '';
    }
    likedPlaylistsCards.push(likedPlaylists);
})
likedPlaylistsCards.forEach(function (likedPlaylist) {
    myCollectionContainer.innerHTML += `<div class="card" id="liked-card">
    <p class="card-title">${likedPlaylist.name}</p>
    <span class="artist">${likedPlaylist.info}</span>
    <div class="other">
        <p class="like-count">2.3m likes</p>
        <button class="play-btn">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M40 20.0096C40 31.0275 31.0232 40 20 40C8.97683 40 0 31.0275 0 20.0096C0 8.9725 8.97683 0 20 0C31.0232 0 40 8.9725 40 20.0096Z" fill="#FACD66"/>
                <path d="M28 20.0097C28 20.5152 27.8409 21.0226 27.5227 21.4289C27.4631 21.5086 27.1847 21.8372 26.9659 22.051L26.8466 22.1677C25.1761 23.9388 21.0199 26.6022 18.9119 27.4557C18.9119 27.4751 17.6591 27.9825 17.0625 28H16.983C16.0682 28 15.2131 27.4965 14.7756 26.68C14.5369 26.2309 14.3182 24.9283 14.2983 24.9108C14.1193 23.7424 14 21.9538 14 19.9903C14 17.9315 14.1193 16.0632 14.3381 14.9162C14.3381 14.8967 14.5568 13.8469 14.696 13.497C14.9148 12.9934 15.3125 12.5638 15.8097 12.2916C16.2074 12.0991 16.625 12 17.0625 12C17.5199 12.0214 18.375 12.3111 18.7131 12.4471C20.9403 13.3026 25.196 16.1021 26.8267 17.8129C27.1051 18.0851 27.4034 18.4175 27.483 18.4933C27.821 18.921 28 19.4459 28 20.0097Z" fill="#FACD66"/>
            </svg>
        </button>
    </div>
    <span class="bg-img">${likedPlaylist.backgroundImg}</span>
</div>`
})
let likedCards = document.querySelectorAll('#liked-card');
likedCards.forEach(function (card) {
    let backgroundImg = card.querySelector('.bg-img').textContent;
    card.style.backgroundImage = `url(${backgroundImg})`;
    let cardTitle = card.querySelector('.card-title');
    if (cardTitle.textContent == 'undefined') {
        card.style.display = 'none';
    }
    let playBtns = card.querySelectorAll('.play-btn');
    playBtns.forEach(function (playBtn) {
        let playlistCover = backgroundImg;
        let playlistTitle = cardTitle.textContent;
        let playlistInfo = card.querySelector('.artist').textContent;
        let playlistFiles = JSON.parse(localStorage.getItem(JSON.stringify(playlistTitle.trim())));
        playlistFlag = false;
        playBtn.addEventListener('click', function () {
            playlistFlag = true;
            let element = document.createElement('div');
            element.className = 'playlist-songs';
            element.innerHTML += `
            <div class="first-container">
                <div class="img-container">
                    <img src="${playlistCover}" alt="">
                </div>
                <div class="info">
                    <h3>${playlistTitle}</h3>
                    <p>
                    ${playlistInfo}
                    </p>
                    <p class="songs-count">${playlistFiles.length} songs</p>
                    <div class="btns-container">
                        <button class="play-all-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.00001 0.333313C10.6744 0.333313 13.6667 3.32415 13.6667 7.00384C13.6667 10.6758 10.6744 13.6666 7.00001 13.6666C3.32562 13.6666 0.333344 10.6758 0.333344 7.00384C0.333344 3.32415 3.32562 0.333313 7.00001 0.333313ZM6.24068 4.35325C6.09911 4.35325 5.96397 4.38541 5.83527 4.44973C5.6744 4.53978 5.5457 4.68128 5.47491 4.84851C5.42987 4.96428 5.35908 5.3116 5.35908 5.31804C5.2883 5.69752 5.24969 6.31498 5.24969 6.99676C5.24969 7.64703 5.2883 8.23812 5.34621 8.62403C5.35265 8.63047 5.42343 9.0614 5.50065 9.20934C5.64222 9.47948 5.91893 9.64671 6.21494 9.64671H6.24068C6.43373 9.64028 6.83913 9.47305 6.83913 9.46661C7.52125 9.18361 8.86616 8.30244 9.4067 7.71714L9.44531 7.67854C9.5161 7.60779 9.60619 7.49845 9.62549 7.47272C9.72845 7.33765 9.77993 7.17042 9.77993 7.00384C9.77993 6.81667 9.72202 6.64301 9.61262 6.50151C9.58688 6.47578 9.49036 6.36644 9.40027 6.27639C8.8726 5.71038 7.4955 4.78419 6.77478 4.50119C6.66539 4.45681 6.38868 4.35968 6.24068 4.35325Z"
                                    fill="#FACD66" />
                            </svg>
                            <p>Play all</p>
                        </button>
                        <button class="add-to-collection-btn"><svg width="16" height="16" viewBox="0 0 16 16"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.8067 10.0067C12.08 9.96002 11.3333 10.2267 10.78 10.78C9.74 11.82 9.74 13.5067 10.78 14.5534C11.1333 14.9067 11.5667 15.14 12.0267 15.2534C12.28 15.32 12.5467 15.34 12.8133 15.3267C13.4467 15.3 14.0667 15.0467 14.5533 14.56C15.24 13.8734 15.4733 12.9067 15.2533 12.0334C15.1467 11.5734 14.9067 11.14 14.5533 10.7867C14.0733 10.3 13.4467 10.04 12.8067 10.0067ZM14.16 12.6534C14.16 12.7934 14.1067 12.9134 14.0133 13.0067C13.92 13.1 13.8 13.1534 13.66 13.1534H13.1667V13.6734C13.1667 13.8134 13.1133 13.9334 13.02 14.0267C12.9267 14.12 12.8067 14.1734 12.6667 14.1734C12.3933 14.1734 12.1667 13.9467 12.1667 13.6734V13.1534H11.6667C11.3933 13.1534 11.1667 12.9267 11.1667 12.6534C11.1667 12.38 11.3933 12.1534 11.6667 12.1534H12.1667V11.68C12.1667 11.4067 12.3933 11.18 12.6667 11.18C12.94 11.18 13.1667 11.4067 13.1667 11.68V12.1534H13.66C13.94 12.1534 14.16 12.38 14.16 12.6534Z"
                                    fill="#FACD66" />
                                <path
                                    d="M8.15334 8.04669C7.88 8.04669 7.66 8.26669 7.66 8.54003C7.66 8.81336 7.88 9.03336 8.15334 9.03336C8.42667 9.03336 8.64667 8.81336 8.64667 8.54003C8.64667 8.26669 8.42667 8.04669 8.15334 8.04669Z"
                                    fill="#FACD66" />
                                <path
                                    d="M4.50667 8.70673C4.23334 8.70673 4.01334 8.92673 4.01334 9.20006C4.01334 9.47339 4.23334 9.69339 4.50667 9.69339C4.78 9.69339 5 9.47339 5 9.20006C5 8.92673 4.78 8.70673 4.50667 8.70673Z"
                                    fill="#FACD66" />
                                <path
                                    d="M10.7933 1.33331H5.20668C5.02001 1.33331 4.84001 1.33998 4.66668 1.36665C2.56668 1.55998 1.33334 2.96665 1.33334 5.20665V10.7933C1.33334 13.0333 2.56668 14.44 4.66668 14.6333C4.84001 14.66 5.02001 14.6666 5.20668 14.6666H9.00001C9.26001 14.6666 9.42668 14.3733 9.32668 14.1333C9.13334 13.6733 9.00001 13.14 9.00001 12.6666C9.00001 10.6466 10.6467 8.99998 12.6667 8.99998C13.1733 8.99998 13.6667 9.09998 14.12 9.29998C14.3667 9.40665 14.6667 9.23998 14.6667 8.97331V5.20665C14.6667 2.77998 13.22 1.33331 10.7933 1.33331ZM9.65334 5.36665V8.53998C9.65334 8.54665 9.64668 8.55331 9.64668 8.56665C9.63334 9.37998 8.97334 10.04 8.15334 10.04C7.32668 10.04 6.66001 9.36665 6.66001 8.54665C6.66001 7.71998 7.33334 7.05331 8.15334 7.05331C8.32668 7.05331 8.49334 7.08665 8.65334 7.14665V6.01998L6.00668 6.73998V9.20665C6.00668 9.21331 6.00001 9.21998 6.00001 9.22665C5.98668 10.04 5.32668 10.6933 4.50668 10.6933C3.68001 10.6933 3.01334 10.02 3.01334 9.19998C3.01334 8.37998 3.68668 7.70665 4.50668 7.70665C4.68001 7.70665 4.84668 7.73998 5.00001 7.79998V6.35998V5.19331C5.00001 4.57331 5.38668 4.07331 5.98001 3.91331L7.96668 3.36665C8.58668 3.19998 8.96668 3.36665 9.18001 3.52665C9.48668 3.75998 9.64001 4.13998 9.64001 4.64665V5.36665H9.65334Z"
                                    fill="#FACD66" />
                            </svg>
                            <p>Add to collection</p>
                        </button>
                        <button class="like-btn">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.51987 0.666973C4.93987 0.679746 5.34654 0.75308 5.74054 0.88708H5.77987C5.80654 0.899746 5.82654 0.913746 5.83987 0.926413C5.9872 0.973746 6.12654 1.02708 6.25987 1.10041L6.5132 1.21375C6.6132 1.26708 6.7332 1.36641 6.79987 1.40708C6.86654 1.44641 6.93987 1.48708 6.99987 1.53308C7.74054 0.96708 8.63987 0.660413 9.56654 0.666973C9.9872 0.666973 10.4072 0.726413 10.8065 0.860413C13.2672 1.66041 14.1539 4.36041 13.4132 6.72041C12.9932 7.92641 12.3065 9.02708 11.4072 9.92641C10.1199 11.1731 8.7072 12.2797 7.18654 13.2331L7.01987 13.3337L6.84654 13.2264C5.32054 12.2797 3.89987 11.1731 2.60054 9.91975C1.7072 9.02041 1.01987 7.92641 0.593202 6.72041C-0.160131 4.36041 0.726535 1.66041 3.21387 0.846413C3.4072 0.779746 3.60654 0.73308 3.80654 0.70708H3.88654C4.07387 0.679746 4.25987 0.666973 4.44654 0.666973H4.51987ZM10.4599 2.77375C10.1865 2.67975 9.88654 2.82708 9.78654 3.10708C9.6932 3.38708 9.83987 3.69375 10.1199 3.79308C10.5472 3.95308 10.8332 4.37375 10.8332 4.83975V4.86041C10.8205 5.01308 10.8665 5.16041 10.9599 5.27375C11.0532 5.38708 11.1932 5.45308 11.3399 5.46708C11.6132 5.45975 11.8465 5.24041 11.8665 4.95975V4.88041C11.8865 3.94641 11.3205 3.10041 10.4599 2.77375Z"
                                    fill="#E5524A" />
                            </svg>
                            <p>Like</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="songs-container">
            </div>
            <i class="fa-solid fa-xmark fa-2x close-playlist"></i>`
            card.parentElement.appendChild(element)
            element.style.backgroundImage = `url(${playlistCover})`;
            let songsContainer = card.parentElement.querySelector('.songs-container');
            //
            let x = window.matchMedia("(max-width: 960px)")
            if (x.matches) {
                window.scrollY = '0'
            }
            body.style.overflowY = 'hidden';
            body.style.height = '100vh';
            element.style.top = `${window.scrollY}px`;
            let closePlaylistIcon = element.querySelector('.close-playlist');
            closePlaylistIcon.addEventListener('click', function () {
                if (playlistFlag) {
                    card.parentElement.removeChild(element)
                    playlistFlag = false;
                    body.style.overflowY = 'scroll';
                    body.style.height = '';
                }
            })
            //
            const addToCollectionBtn = element.querySelector('.add-to-collection-btn');
            let song = addToCollectionBtn.parentElement.parentElement.parentElement.parentElement;
            let playlistBg = song.children[0].children[0].children[0].src;
            let playlistName = song.children[0].children[1].children[0].textContent;
            let playlistDetails = song.children[0].children[01].children[1].textContent;
            let key = localStorage.getItem(JSON.stringify(playlistBg.trim()));
            if (key) {
                addToCollectionBtn.children[1].textContent = 'Remove from collection';
            } else {
                addToCollectionBtn.children[1].textContent = 'Add to collection';
            }
            addToCollectionBtn.addEventListener('click', function () {
                let playlist = {
                    backgroundImg: playlistBg,
                    name: playlistName,
                    info: playlistDetails
                }
                if (!key) {
                    addToCollectionBtn.children[1].textContent = 'Remove from collection';
                    alert('This playlist has been added to your collection');
                    localStorage.setItem(JSON.stringify(playlistBg.trim()), JSON.stringify(playlist));
                    key = true;
                } else {
                    addToCollectionBtn.children[1].textContent = 'Add to collection';
                    alert('This playlist has been removed from your collection');
                    localStorage.removeItem(JSON.stringify(playlistBg.trim()));
                    key = false;
                    location.reload();
                }
            })
            //
            playlistFiles.forEach(function (file) {
                songsContainer.innerHTML += `
                <div class="song">
                    <div class="img-container">
                        <img src="${file.cover}" alt="">
                    </div>
                    <div class="like-icon-container">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="adjust">
                        <div class="song-info-container">
                            <p class="song-name-and-artist">${file.title}</p>
                            <p class="album-name">${file.artist}</p>
                        </div>
                        <div class="other-container">
                            <p class="song-duration">${file.duration}</p>
                            <div class="option-icon-container">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                    <audio src="${file.audio}"></audio>
                    <span>${file.id}</span>
                </div>`
            })
            //
            let songs = card.parentElement.querySelectorAll('.song');
            songs.forEach(function (song) {
                let audio = song.querySelector('audio')
                song.addEventListener('click', function () {
                    cardFlag = true;
                    let id = song.children[4].textContent;
                    cardIndex = Number(id.substring(id.length, id.length - 1))
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
                    let songImg = song.children[0].children[0].src;
                    let songTitle = song.children[2].children[0].children[0].textContent;
                    let songArtist = song.children[2].children[0].children[1].textContent;
                    currentSongImg.src = songImg;
                    currentSongTitle.textContent = songTitle;
                    currentSongArtist.textContent = songArtist;
                    currentSongAudio.src = audio.src;
                    currentSongAudio.play();
                    playOrPauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause fa-2xl fa-beat" style="--fa-animation-duration: 2s;"></i>';
                    seek(currentSongAudio);
                })
            })
            nextBtn.addEventListener('click', function () {
                if (cardFlag) {
                    if (shuffleBtnFlag) {
                        cardIndex = Math.floor(Math.random() * songs.length);
                    }
                    if (cardIndex == songs.length - 1) {
                        cardIndex = -1;
                    }
                    cardIndex++;
                    let nextAudio = songs[cardIndex].children[3];
                    nextAudio.currentTime = 0;
                    let nextSongImg = songs[cardIndex].children[0].children[0].src;
                    let nextSongTitle = songs[cardIndex].children[2].children[0].children[0].textContent;
                    let nextSongArtist = songs[cardIndex].children[2].children[0].children[1].textContent;
                    currentSongImg.src = nextSongImg;
                    currentSongTitle.textContent = nextSongTitle;
                    currentSongArtist.textContent = nextSongArtist;
                    currentSongAudio.src = nextAudio.src;
                    currentSongAudio.play();
                    seek(currentSongAudio);
                }
            })

            prevBtn.addEventListener('click', function () {
                if (cardFlag) {
                    if (shuffleBtnFlag) {
                        cardIndex = Math.floor(Math.random() * songs.length);
                    }
                    if (cardIndex < 1) {
                        cardIndex = songs.length;
                    }
                    cardIndex--;
                    let nextAudio = songs[cardIndex].children[2];
                    nextAudio.currentTime = 0;
                    let nextSongImg = songs[cardIndex].children[0].children[0].src;
                    let nextSongTitle = songs[cardIndex].children[2].children[0].children[0].textContent;
                    let nextSongArtist = songs[cardIndex].children[2].children[0].children[1].textContent;
                    currentSongImg.src = nextSongImg;
                    currentSongTitle.textContent = nextSongTitle;
                    currentSongArtist.textContent = nextSongArtist;
                    currentSongAudio.src = nextAudio.src;
                    currentSongAudio.play();
                    seek(currentSongAudio);
                }
            })
        })
    })
})
//
playOrPauseBtn.addEventListener('click', function () {
    if (currentSongAudio.paused) {
        currentSongAudio.play();
        playOrPauseBtn.innerHTML = `<i class="fa-solid fa-circle-pause fa-2xl fa-beat" style="--fa-animation-duration: 2s;"></i>`
        seek(currentSongAudio);
    } else {
        currentSongAudio.pause();
        playOrPauseBtn.innerHTML = `<i class="fa-solid fa-circle-play fa-2xl"></i>`
    }
})
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
const volumeBar = currentSongBar.querySelector('.volume-bar').children[0];
let volumeIcon = currentSongBar.querySelector('.volume-icon');
volumeBar.addEventListener('change', function () {
    currentSongAudio.volume = volumeBar.value / 100;
    if (currentSongAudio.volume == 0) {
        volumeIcon.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else if (currentSongAudio.volume <= 0.5) {
        volumeIcon.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
    } else {
        volumeIcon.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
})