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

const myCollectionContainer = document.querySelector('#my-collection');

const getTopChartsTracks = JSON.parse(localStorage.getItem('topChartsTracks'));

const likedCardsTracks = [];

getTopChartsTracks.forEach(function (track) {
    let likedCards = JSON.parse(localStorage.getItem(JSON.stringify(track.name)));
    if (likedCards == null) {
        likedCards = '';
    }
    likedCardsTracks.push(likedCards);
})

likedCardsTracks.forEach(function (likedTrack) {
    console.log(likedTrack);
    myCollectionContainer.innerHTML += `<div class="card" id="liked-card">
    <p class="card-title">${likedTrack.name}</p>
    <p class="artist">${likedTrack.artist}</p>
    <div class="other">
        <p class="like-count">2.3m likes</p>
        <button class="play-btn">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M40 20.0096C40 31.0275 31.0232 40 20 40C8.97683 40 0 31.0275 0 20.0096C0 8.9725 8.97683 0 20 0C31.0232 0 40 8.9725 40 20.0096Z" fill="#FACD66"/>
                <path d="M28 20.0097C28 20.5152 27.8409 21.0226 27.5227 21.4289C27.4631 21.5086 27.1847 21.8372 26.9659 22.051L26.8466 22.1677C25.1761 23.9388 21.0199 26.6022 18.9119 27.4557C18.9119 27.4751 17.6591 27.9825 17.0625 28H16.983C16.0682 28 15.2131 27.4965 14.7756 26.68C14.5369 26.2309 14.3182 24.9283 14.2983 24.9108C14.1193 23.7424 14 21.9538 14 19.9903C14 17.9315 14.1193 16.0632 14.3381 14.9162C14.3381 14.8967 14.5568 13.8469 14.696 13.497C14.9148 12.9934 15.3125 12.5638 15.8097 12.2916C16.2074 12.0991 16.625 12 17.0625 12C17.5199 12.0214 18.375 12.3111 18.7131 12.4471C20.9403 13.3026 25.196 16.1021 26.8267 17.8129C27.1051 18.0851 27.4034 18.4175 27.483 18.4933C27.821 18.921 28 19.4459 28 20.0097Z" fill="#FACD66"/>
            </svg>
        </button>
    </div>
    <span class="bg-img">${likedTrack.backgroundImg}</span>
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

})