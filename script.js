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
    console.log(navHeight);
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
            console.log(audio);
            audio.play()
            if (audio.play) {
                audio.pause()
            } 
        })
    })
})

// console.log(topChartsTracks);


