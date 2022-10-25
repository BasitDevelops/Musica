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
        <g clip-path="url(#clip0_107_495)">
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