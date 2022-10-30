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
    // console.log(navHeight);
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

// async function fetchApi() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '53b6f38843msh9380b7f1e5cfa2bp1121dbjsn98d5b38c6203',
//             'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//         }
//     };

//     const response = await fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5', options);
//     const data = await response.json();
//     const tracks = data.tracks;
//     const topCharts = document.getElementById('top-charts');

//     tracks.forEach(track => {
//         console.log(track);
//         let tracksrc = track.src;
//         let trackCoverArt = track.images.coverart;
//         let trackName = track.title;
//         let trackArtist = track.subtitle;
//         console.log(tracksrc);

//         topCharts.innerHTML += `<div class="card" id="top-charts-card">
//         <div class="first-container">
//             <div class="img-container">
//                 <img src="${trackCoverArt}" alt="">
//             </div>
//             <div class="card-info">
//                 <p class="card-title">
//                     ${trackName}
//                 </p>
//                 <p class="artist">
//                     ${trackArtist}
//                 </p>
//                 <p class="card-duration">
//                     ???
//                 </p>
//             </div>
//         </div>
//         <div class="heart-icon-container">
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" clip-rule="evenodd"
//                     d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
//                     stroke="#FACD66" stroke-width="0.5625" stroke-linecap="round"
//                     stroke-linejoin="round" />
//                 <path opacity="0.4" d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
//                     stroke="#FACD66" stroke-width="0.5625" stroke-linecap="round"
//                     stroke-linejoin="round" />
//             </svg>
//         </div>
//     </div>`

//         let topChartsCards = document.querySelectorAll('#top-charts-card');

//         topChartsCards.forEach(function (card) {
//             card.addEventListener('click', function (e) {
//                 console.log(e.currentTarget);
//             })
//         })
//     });

// }
// fetchApi();

let currentSongBar = document.getElementById('current-song');
// console.log(currentSongBar);
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

topChartsTracks.forEach(function (track) {
    // console.log(track);
    const topCharts = document.getElementById('top-charts');
    // console.log(topCharts);
    topCharts.innerHTML += `<div class="card" id="top-charts-card">
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
    ???
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
    <audio src="${track.src}"></audio>
    </div>`


    let topChartsCards = document.querySelectorAll('#top-charts-card');

    topChartsCards.forEach(function (card) {
        let audio = card.childNodes[5];
        card.addEventListener('click', function () {
            let cardChildrenImg = card.children[0].children[0].children[0].src;
            let cardChildrenSongName = card.children[0].children[1].children[0].textContent;
            let cardChildrenSongArtist = card.children[0].children[1].children[1].textContent;
            audio.currentTime = 0;
            audio.play();

            // Get all <audio> elements.
            const audios = document.querySelectorAll('audio');

            // Pause all <audio> elements except for the one that started playing.
            function pauseOtherAudios({ target }) {
                for (const audio of audios) {
                    if (audio !== target) {
                        audio.pause();
                    }
                }
            }

            // Listen for the 'play' event on all the <audio> elements.
            for (const audio of audios) {
                audio.addEventListener('play', pauseOtherAudios);
            }

            currentSongBar.innerHTML = `<div class="song-info">
                <div class="img-container">
                    <img src="${cardChildrenImg}" alt="">
                </div>
                <div class="second-container">
                    <p class="song-name">${cardChildrenSongName}</p>
                    <p class="artist">${cardChildrenSongArtist}</p>
                </div>
            </div>
            <div class="controls">
                <div class="control-btns">
                    <button class="shuffle-btn"><svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5 12.7593C14.5 12.746 14.4933 12.7327 14.4933 12.7193C14.4867 12.666 14.48 12.6127 14.46 12.566C14.4333 12.506 14.4 12.4593 14.36 12.4127C14.36 12.4127 14.36 12.406 14.3533 12.406C14.3067 12.3593 14.2533 12.326 14.1933 12.2993C14.1333 12.2727 14.0667 12.2593 14 12.2593L10.8867 12.2727C10.8867 12.2727 10.8867 12.2727 10.88 12.2727C10.48 12.2727 10.0933 12.086 9.85333 11.766L9.04 10.7193C8.87333 10.4993 8.56 10.4593 8.34 10.6327C8.12 10.806 8.08 11.1127 8.25333 11.3327L9.06666 12.3793C9.5 12.9393 10.18 13.2727 10.8867 13.2727H10.8933L12.7933 13.266L12.32 13.7393C12.1267 13.9327 12.1267 14.2527 12.32 14.446C12.42 14.546 12.5467 14.5927 12.6733 14.5927C12.8 14.5927 12.9267 14.546 13.0267 14.446L14.36 13.1127C14.4067 13.066 14.44 13.0127 14.4667 12.9527C14.4867 12.886 14.5 12.8193 14.5 12.7593Z"
                                fill="white" />
                            <path
                                d="M5.61333 5.23266C5.18 4.63266 4.48667 4.27933 3.74667 4.27933C3.74 4.27933 3.74 4.27933 3.73333 4.27933L2 4.28599C1.72667 4.28599 1.5 4.51266 1.5 4.78599C1.5 5.05933 1.72667 5.28599 2 5.28599L3.74 5.27933H3.74667C4.16667 5.27933 4.56 5.47933 4.8 5.81933L5.52 6.81933C5.62 6.95266 5.77333 7.02599 5.92667 7.02599C6.02667 7.02599 6.13333 6.99266 6.22 6.93266C6.44667 6.76599 6.49333 6.45266 6.33333 6.23266L5.61333 5.23266Z"
                                fill="white" />
                            <path
                                d="M14.4933 4.82597C14.4933 4.81263 14.5 4.7993 14.5 4.79263C14.5 4.72597 14.4867 4.6593 14.46 4.5993C14.4333 4.5393 14.4 4.48597 14.3533 4.4393L13.02 3.10597C12.8267 2.91263 12.5067 2.91263 12.3133 3.10597C12.12 3.2993 12.12 3.6193 12.3133 3.81263L12.7867 4.28597L10.9667 4.2793C10.96 4.2793 10.96 4.2793 10.9533 4.2793C10.1867 4.2793 9.46667 4.6593 9.04 5.30597L4.78 11.6926C4.54 12.0526 4.13333 12.2726 3.7 12.2726H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0326 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85263C10.1267 5.49263 10.5333 5.27263 10.9667 5.27263H10.9733L14 5.28597C14.0667 5.28597 14.1267 5.27263 14.1933 5.24597C14.2533 5.2193 14.3067 5.18597 14.3533 5.1393C14.3533 5.1393 14.3533 5.13263 14.36 5.13263C14.4 5.08597 14.44 5.0393 14.46 4.9793C14.48 4.93263 14.4867 4.8793 14.4933 4.82597Z"
                                fill="white" />
                        </svg>
                    </button>
                    <button class="prev-btn"><svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4933 5.58597V11.966C13.4933 13.2726 12.0733 14.0926 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59263 4.27334 7.9593 5.40667 7.30597L8.17334 5.70597L10.94 4.11263C12.0733 3.4593 13.4933 4.27263 13.4933 5.58597Z"
                                fill="white" />
                            <path
                                d="M2.50668 13.3926C2.23335 13.3926 2.00668 13.166 2.00668 12.8926V4.65265C2.00668 4.37932 2.23335 4.15265 2.50668 4.15265C2.78002 4.15265 3.00668 4.37932 3.00668 4.65265V12.8926C3.00668 13.166 2.78002 13.3926 2.50668 13.3926Z"
                                fill="white" />
                        </svg>
                    </button>
                    <button class="playandpause-btn">#
                    </button>
                    <button class="next-btn"><svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.50667 5.58597V11.966C2.50667 13.2726 3.92667 14.0926 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59263 11.7267 7.9593 10.5933 7.30597L7.82667 5.70597L5.06 4.11263C3.92667 3.4593 2.50667 4.27263 2.50667 5.58597Z"
                                fill="white" />
                            <path
                                d="M13.4933 13.3926C13.22 13.3926 12.9933 13.166 12.9933 12.8926V4.65265C12.9933 4.37932 13.22 4.15265 13.4933 4.15265C13.7667 4.15265 13.9933 4.37932 13.9933 4.65265V12.8926C13.9933 13.166 13.7733 13.3926 13.4933 13.3926Z"
                                fill="white" />
                        </svg>
                    </button>
                    <button class="repeat-btn">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94596 0.833328 8.65929C0.833328 5.98596 2.99999 3.81263 5.66666 3.81263L9.71333 3.82596L8.98666 3.13263C8.78666 2.93929 8.77999 2.62596 8.97333 2.42596C9.16666 2.22596 9.48 2.21929 9.68 2.41263L11.3067 3.97263C11.4533 4.11263 11.5 4.33263 11.4267 4.51929C11.3533 4.70596 11.1667 4.83263 10.96 4.83263L5.66666 4.81929C3.55333 4.81929 1.83333 6.54596 1.83333 8.66596C1.83333 9.68596 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z"
                                fill="white" />
                            <path
                                d="M6.66666 15.2726C6.53999 15.2726 6.41999 15.226 6.31999 15.1326L4.69333 13.5726C4.54666 13.4326 4.49999 13.2126 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.8793C14.1733 7.8593 13.7733 6.89263 13.0467 6.16597C12.8533 5.97263 12.8533 5.65263 13.0467 5.4593C13.24 5.26597 13.56 5.26597 13.7533 5.4593C14.6667 6.3793 15.1733 7.59263 15.1733 8.8793C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.01999 14.406C7.21999 14.5993 7.22666 14.9126 7.03333 15.1126C6.92666 15.2193 6.79999 15.2726 6.66666 15.2726Z"
                                fill="white" />
                            <path
                                d="M8.16667 11.0526C7.89334 11.0526 7.66667 10.826 7.66667 10.5526V8.29264L7.54 8.43264C7.35334 8.63931 7.04 8.65264 6.83334 8.47264C6.62667 8.29264 6.61334 7.97264 6.79334 7.76597L7.79334 6.65264C7.93334 6.49931 8.15334 6.44597 8.34667 6.51931C8.54 6.59931 8.66667 6.77931 8.66667 6.99264V10.5593C8.66667 10.8326 8.44 11.0526 8.16667 11.0526Z"
                                fill="white" />
                        </svg>

                    </button>
                </div>
                <div class="duration-bar">
                    <svg width="749" height="4" viewBox="0 0 749 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="749" height="4" rx="2" fill="white" fill-opacity="0.04" />
                    </svg>

                </div>
            </div>
            <div class="volume">
                <div class="volume-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 12.5625C13.38 12.5625 13.2675 12.525 13.1625 12.45C12.915 12.2625 12.8625 11.91 13.05 11.6625C14.2275 10.095 14.2275 7.90499 13.05 6.33749C12.8625 6.08999 12.915 5.73749 13.1625 5.54999C13.41 5.36249 13.7625 5.41499 13.95 5.66249C15.42 7.62749 15.42 10.3725 13.95 12.3375C13.8375 12.4875 13.6725 12.5625 13.5 12.5625Z"
                            fill="#EFEEE0" />
                        <path
                            d="M14.8725 14.4375C14.7525 14.4375 14.64 14.4 14.535 14.325C14.2875 14.1375 14.235 13.785 14.4225 13.5375C16.425 10.8675 16.425 7.13249 14.4225 4.46249C14.235 4.21499 14.2875 3.86249 14.535 3.67499C14.7825 3.48749 15.135 3.53999 15.3225 3.78749C17.625 6.85499 17.625 11.145 15.3225 14.2125C15.2175 14.3625 15.045 14.4375 14.8725 14.4375Z"
                            fill="#EFEEE0" />
                        <path
                            d="M10.515 2.83501C9.675 2.37001 8.6025 2.49001 7.5075 3.17251L5.3175 4.54501C5.1675 4.63501 4.995 4.68751 4.8225 4.68751H4.125H3.75C1.935 4.68751 0.9375 5.68501 0.9375 7.50001V10.5C0.9375 12.315 1.935 13.3125 3.75 13.3125H4.125H4.8225C4.995 13.3125 5.1675 13.365 5.3175 13.455L7.5075 14.8275C8.1675 15.24 8.8125 15.4425 9.4125 15.4425C9.8025 15.4425 10.1775 15.3525 10.515 15.165C11.3475 14.7 11.8125 13.7325 11.8125 12.4425V5.55751C11.8125 4.26751 11.3475 3.30001 10.515 2.83501Z"
                            fill="#EFEEE0" />
                    </svg>
                </div>
                <div class="volume-bar">
                    <svg width="160" height="3" viewBox="0 0 160 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="160" height="3" rx="1.5" fill="white" fill-opacity="0.1" />
                    </svg>
                </div>

            </div>`;

            const playOrPauseBtn = document.querySelector('.playandpause-btn')
            let audioFlag = false;
            playOrPauseBtn.addEventListener('click', function () {
                if (!audioFlag) {
                    audio.play();
                    audioFlag = true;
                    playOrPauseBtn.innerHTML = '#';
                } else {
                    audio.pause()
                    audioFlag = false;
                    playOrPauseBtn.innerHTML = `<svg width="61" height="62" viewBox="0 0 61 62" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_19_109)">
                            <rect x="18" y="18" width="25" height="25.5453" rx="12.5" fill="#FACD66"
                                shape-rendering="crispEdges" />
                            <path
                                d="M26.3333 30.7726V28.9536C26.3333 26.6192 27.9856 25.6643 30.0017 26.8315L31.5781 27.7409L33.1546 28.6504C35.1707 29.8176 35.1707 31.7276 33.1546 32.8948L31.5781 33.8043L30.0017 34.7138C27.9856 35.881 26.3333 34.926 26.3333 32.5917V30.7726Z"
                                fill="#EFEEE0" />
                        </g>
                        <defs>
                            <filter id="filter0_d_19_109" x="0" y="0" width="61" height="61.5453"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="9" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_109" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_109"
                                result="shape" />
                                </filter>
                                </defs>
                    </svg>
                    </button>
                    `;
                }
            })


            const nextBtn = document.querySelector('.next-btn');

            let songIndex = 0

            nextBtn.addEventListener('click', function () {
                songIndex++
                nextSong = topChartsCards[songIndex].children[2];
                nextSong.currentTime = 0;
                nextSong.play()
                console.log(songIndex);
                
                let nextSongImg = topChartsCards[songIndex].children[0].children[0].children[0].src
                let nextSongName = topChartsCards[songIndex].children[0].children[1].children[0].textContent
                let nextSongArtist = topChartsCards[songIndex].children[0].children[1].children[1].textContent
                console.log(nextSongName);
            //     currentSongBar.innerHTML = `<div class="song-info">
            //     <div class="img-container">
            //         <img src="${nextSongImg}" alt="">
            //     </div>
            //     <div class="second-container">
            //         <p class="song-name">${nextSongName}</p>
            //         <p class="artist">${nextSongArtist}</p>
            //     </div>
            // </div>
            // <div class="controls">
            //     <div class="control-btns">
            //         <button class="shuffle-btn"><svg width="16" height="17" viewBox="0 0 16 17" fill="none"
            //                 xmlns="http://www.w3.org/2000/svg">
            //                 <path
            //                     d="M14.5 12.7593C14.5 12.746 14.4933 12.7327 14.4933 12.7193C14.4867 12.666 14.48 12.6127 14.46 12.566C14.4333 12.506 14.4 12.4593 14.36 12.4127C14.36 12.4127 14.36 12.406 14.3533 12.406C14.3067 12.3593 14.2533 12.326 14.1933 12.2993C14.1333 12.2727 14.0667 12.2593 14 12.2593L10.8867 12.2727C10.8867 12.2727 10.8867 12.2727 10.88 12.2727C10.48 12.2727 10.0933 12.086 9.85333 11.766L9.04 10.7193C8.87333 10.4993 8.56 10.4593 8.34 10.6327C8.12 10.806 8.08 11.1127 8.25333 11.3327L9.06666 12.3793C9.5 12.9393 10.18 13.2727 10.8867 13.2727H10.8933L12.7933 13.266L12.32 13.7393C12.1267 13.9327 12.1267 14.2527 12.32 14.446C12.42 14.546 12.5467 14.5927 12.6733 14.5927C12.8 14.5927 12.9267 14.546 13.0267 14.446L14.36 13.1127C14.4067 13.066 14.44 13.0127 14.4667 12.9527C14.4867 12.886 14.5 12.8193 14.5 12.7593Z"
            //                     fill="white" />
            //                 <path
            //                     d="M5.61333 5.23266C5.18 4.63266 4.48667 4.27933 3.74667 4.27933C3.74 4.27933 3.74 4.27933 3.73333 4.27933L2 4.28599C1.72667 4.28599 1.5 4.51266 1.5 4.78599C1.5 5.05933 1.72667 5.28599 2 5.28599L3.74 5.27933H3.74667C4.16667 5.27933 4.56 5.47933 4.8 5.81933L5.52 6.81933C5.62 6.95266 5.77333 7.02599 5.92667 7.02599C6.02667 7.02599 6.13333 6.99266 6.22 6.93266C6.44667 6.76599 6.49333 6.45266 6.33333 6.23266L5.61333 5.23266Z"
            //                     fill="white" />
            //                 <path
            //                     d="M14.4933 4.82597C14.4933 4.81263 14.5 4.7993 14.5 4.79263C14.5 4.72597 14.4867 4.6593 14.46 4.5993C14.4333 4.5393 14.4 4.48597 14.3533 4.4393L13.02 3.10597C12.8267 2.91263 12.5067 2.91263 12.3133 3.10597C12.12 3.2993 12.12 3.6193 12.3133 3.81263L12.7867 4.28597L10.9667 4.2793C10.96 4.2793 10.96 4.2793 10.9533 4.2793C10.1867 4.2793 9.46667 4.6593 9.04 5.30597L4.78 11.6926C4.54 12.0526 4.13333 12.2726 3.7 12.2726H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0326 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85263C10.1267 5.49263 10.5333 5.27263 10.9667 5.27263H10.9733L14 5.28597C14.0667 5.28597 14.1267 5.27263 14.1933 5.24597C14.2533 5.2193 14.3067 5.18597 14.3533 5.1393C14.3533 5.1393 14.3533 5.13263 14.36 5.13263C14.4 5.08597 14.44 5.0393 14.46 4.9793C14.48 4.93263 14.4867 4.8793 14.4933 4.82597Z"
            //                     fill="white" />
            //             </svg>
            //         </button>
            //         <button class="prev-btn"><svg width="16" height="17" viewBox="0 0 16 17" fill="none"
            //                 xmlns="http://www.w3.org/2000/svg">
            //                 <path
            //                     d="M13.4933 5.58597V11.966C13.4933 13.2726 12.0733 14.0926 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59263 4.27334 7.9593 5.40667 7.30597L8.17334 5.70597L10.94 4.11263C12.0733 3.4593 13.4933 4.27263 13.4933 5.58597Z"
            //                     fill="white" />
            //                 <path
            //                     d="M2.50668 13.3926C2.23335 13.3926 2.00668 13.166 2.00668 12.8926V4.65265C2.00668 4.37932 2.23335 4.15265 2.50668 4.15265C2.78002 4.15265 3.00668 4.37932 3.00668 4.65265V12.8926C3.00668 13.166 2.78002 13.3926 2.50668 13.3926Z"
            //                     fill="white" />
            //             </svg>
            //         </button>
            //         <button class="playandpause-btn">#
            //         </button>
            //         <button class="next-btn"><svg width="16" height="17" viewBox="0 0 16 17" fill="none"
            //                 xmlns="http://www.w3.org/2000/svg">
            //                 <path
            //                     d="M2.50667 5.58597V11.966C2.50667 13.2726 3.92667 14.0926 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59263 11.7267 7.9593 10.5933 7.30597L7.82667 5.70597L5.06 4.11263C3.92667 3.4593 2.50667 4.27263 2.50667 5.58597Z"
            //                     fill="white" />
            //                 <path
            //                     d="M13.4933 13.3926C13.22 13.3926 12.9933 13.166 12.9933 12.8926V4.65265C12.9933 4.37932 13.22 4.15265 13.4933 4.15265C13.7667 4.15265 13.9933 4.37932 13.9933 4.65265V12.8926C13.9933 13.166 13.7733 13.3926 13.4933 13.3926Z"
            //                     fill="white" />
            //             </svg>
            //         </button>
            //         <button class="repeat-btn">
            //             <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            //                 <path
            //                     d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94596 0.833328 8.65929C0.833328 5.98596 2.99999 3.81263 5.66666 3.81263L9.71333 3.82596L8.98666 3.13263C8.78666 2.93929 8.77999 2.62596 8.97333 2.42596C9.16666 2.22596 9.48 2.21929 9.68 2.41263L11.3067 3.97263C11.4533 4.11263 11.5 4.33263 11.4267 4.51929C11.3533 4.70596 11.1667 4.83263 10.96 4.83263L5.66666 4.81929C3.55333 4.81929 1.83333 6.54596 1.83333 8.66596C1.83333 9.68596 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z"
            //                     fill="white" />
            //                 <path
            //                     d="M6.66666 15.2726C6.53999 15.2726 6.41999 15.226 6.31999 15.1326L4.69333 13.5726C4.54666 13.4326 4.49999 13.2126 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.8793C14.1733 7.8593 13.7733 6.89263 13.0467 6.16597C12.8533 5.97263 12.8533 5.65263 13.0467 5.4593C13.24 5.26597 13.56 5.26597 13.7533 5.4593C14.6667 6.3793 15.1733 7.59263 15.1733 8.8793C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.01999 14.406C7.21999 14.5993 7.22666 14.9126 7.03333 15.1126C6.92666 15.2193 6.79999 15.2726 6.66666 15.2726Z"
            //                     fill="white" />
            //                 <path
            //                     d="M8.16667 11.0526C7.89334 11.0526 7.66667 10.826 7.66667 10.5526V8.29264L7.54 8.43264C7.35334 8.63931 7.04 8.65264 6.83334 8.47264C6.62667 8.29264 6.61334 7.97264 6.79334 7.76597L7.79334 6.65264C7.93334 6.49931 8.15334 6.44597 8.34667 6.51931C8.54 6.59931 8.66667 6.77931 8.66667 6.99264V10.5593C8.66667 10.8326 8.44 11.0526 8.16667 11.0526Z"
            //                     fill="white" />
            //             </svg>

            //         </button>
            //     </div>
            //     <div class="duration-bar">
            //         <svg width="749" height="4" viewBox="0 0 749 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <rect width="749" height="4" rx="2" fill="white" fill-opacity="0.04" />
            //         </svg>

            //     </div>
            // </div>
            // <div class="volume">
            //     <div class="volume-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
            //             xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M13.5 12.5625C13.38 12.5625 13.2675 12.525 13.1625 12.45C12.915 12.2625 12.8625 11.91 13.05 11.6625C14.2275 10.095 14.2275 7.90499 13.05 6.33749C12.8625 6.08999 12.915 5.73749 13.1625 5.54999C13.41 5.36249 13.7625 5.41499 13.95 5.66249C15.42 7.62749 15.42 10.3725 13.95 12.3375C13.8375 12.4875 13.6725 12.5625 13.5 12.5625Z"
            //                 fill="#EFEEE0" />
            //             <path
            //                 d="M14.8725 14.4375C14.7525 14.4375 14.64 14.4 14.535 14.325C14.2875 14.1375 14.235 13.785 14.4225 13.5375C16.425 10.8675 16.425 7.13249 14.4225 4.46249C14.235 4.21499 14.2875 3.86249 14.535 3.67499C14.7825 3.48749 15.135 3.53999 15.3225 3.78749C17.625 6.85499 17.625 11.145 15.3225 14.2125C15.2175 14.3625 15.045 14.4375 14.8725 14.4375Z"
            //                 fill="#EFEEE0" />
            //             <path
            //                 d="M10.515 2.83501C9.675 2.37001 8.6025 2.49001 7.5075 3.17251L5.3175 4.54501C5.1675 4.63501 4.995 4.68751 4.8225 4.68751H4.125H3.75C1.935 4.68751 0.9375 5.68501 0.9375 7.50001V10.5C0.9375 12.315 1.935 13.3125 3.75 13.3125H4.125H4.8225C4.995 13.3125 5.1675 13.365 5.3175 13.455L7.5075 14.8275C8.1675 15.24 8.8125 15.4425 9.4125 15.4425C9.8025 15.4425 10.1775 15.3525 10.515 15.165C11.3475 14.7 11.8125 13.7325 11.8125 12.4425V5.55751C11.8125 4.26751 11.3475 3.30001 10.515 2.83501Z"
            //                 fill="#EFEEE0" />
            //         </svg>
            //     </div>
            //     <div class="volume-bar">
            //         <svg width="160" height="3" viewBox="0 0 160 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <rect width="160" height="3" rx="1.5" fill="white" fill-opacity="0.1" />
            //         </svg>
            //     </div>

            // </div>`
                
                if (songIndex == topChartsCards.length - 1) {
                    songIndex = 0;
                }

            })



        })
    })


})
