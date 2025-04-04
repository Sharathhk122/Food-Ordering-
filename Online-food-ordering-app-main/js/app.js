const restaurantsElem = document.querySelector('.restaurants');
const inputBox = document.getElementById('search');
const sortDropdown = document.getElementById('sortby');
const showFav = document.querySelector(".show-fav");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

let hotelLists =[
  {
    "name": "Subway(MCF)",
    "id": 20423,
    "location": "udyog vihar",
    "rating": 4.2,
    "eta": 25,
    "tags": ["American", "Fast Food"],
    "img": "./images/1.png"
  },
  {
    "name": "Prince Ki Rasoi",
    "id": 27213,
    "location": "Ramada Hotel, Huda City",
    "rating": 3.8,
    "eta": 30,
    "tags": ["North Indian", "Chinese", "Mughlai", "Fast Food"],
    "img": "./images/2.jpg"
  },
  {
    "name": "Aggarwal Sweets & Restaurant",
    "id": 52778,
    "location": "Near Jain Dharamshala, Huda City",
    "rating": 3.4,
    "eta": 25,
    "tags": ["North Indian", "Chinese", "Sweets"],
    "img": "./images/3.jpg"
  },
  {
    "name": "Rasoi",
    "id": 13018,
    "location": "Near Hanuman Mandir, Sector-14",
    "rating": 3.9,
    "eta": 50,
    "tags": ["Indian", "Chinese", "North Indian"],
    "img": "./images/4.jpg"
  },
  {
    "name": "Fork with Sticks",
    "id": 1015,
    "location": "DLF Phase 4, New DLF Phase 4",
    "rating": 4.0,
    "eta": 44,
    "tags": ["Chinese", "Fast Food"],
    "img": "./images/5.jpg"
  },
  {
    "name": "South Store",
    "id": 23893,
    "location": "sector 14 Market, Sector-14",
    "rating": 4.1,
    "eta": 53,
    "tags": ["American", "South Indian"],
    "img": "./images/6.jpg"
  },
  {
    "name": "Chinese Corner",
    "id": 30361,
    "location": "Sushant Lok, DLF Phase 4",
    "rating": 4.1,
    "eta": 47,
    "tags": ["Chinese", "Thai"],
    "img": "./images/7.jpg"
  },
  {
    "name": "Sandburg Shakes",
    "id": 63660,
    "location": "Sushant Lok, New DLF Phase 4",
    "rating": 4.4,
    "eta": 51,
    "tags": ["Cafe", "Italian", "Healthy Food"],
    "img": "./images/8.jpg"
  },
  {
    "name": "Royal Spice",
    "id": 29123,
    "location": "Near Unitech Cyber Park, sohna road",
    "rating": 4.1,
    "eta": 31,
    "tags": ["Indian", "Chinese", "Continental", "Snacks"],
    "img": "./images/9.jpg"
  },
  {
    "name": "Madurai Meenakshi Bhawan",
    "id": 26761,
    "location": "Sector 14 Market, Sector-14",
    "rating": 4.2,
    "eta": 25,
    "tags": ["American", "South Indian"],
    "img": "./images/10.jpg"
  },
  {
    "name": "Koolchas",
    "id": 68159,
    "location": "Dlf Phase 1, DLF Phase 4",
    "rating": 4.3,
    "eta": 53,
    "tags": ["North Indian", "Fast Food"],
    "img": "./images/11.jpg"
  },
  {
    "name": "Punjabi Chaap Corner",
    "id": 49213,
    "location": "Sector 14, Sector-14",
    "rating": 3.8,
    "eta": 52,
    "tags": ["North Indian", "Fast Food"],
    "img": "./images/12.jpg"
  },
  {
    "name": "Burger BC",
    "id": 21340,
    "location": "Near Gold Souk Mall, DLF Phase 4",
    "rating": 4.1,
    "eta": 57,
    "tags": ["Fast Food","Continental"],
    "img": "./images/13.jpg"
  },
  {
    "name": "Mucchad's SamosaZz & More",
    "id": 17281,
    "location": "Maruti Vihar, DLF Phase 4",
    "rating": 4.1,
    "eta": 43,
    "tags": ["Mughlai", "North Indian", "Street Food", "Fast Food"],
    "img": "./images/14.jpg"
  },
  {
    "name": "The Burger Homes",
    "id": 63913,
    "location": "Huda City, Huda City",
    "rating": 3.9,
    "eta": 45,
    "tags": ["North Indian", "Fast Food"],
    "img": "./images/15.jpg"
  },
  {
    "name": "STANLEY KA DIBBA",
    "id": 51766,
    "location": "Chakkarpur, DLF Phase 4",
    "rating": 3.7,
    "eta": 41,
    "tags": ["American", "Thalis", "Indian", "Fast Food"],
    "img": "./images/16.jpg"
  }

];

const getHotelCard = hotel => {
    return `
        <div class='hotel-card'>
            <div class='hotel-image'><img src="${hotel.img}" /></div>
            <div class="hotel-description">
                <div class="hotel-name">${hotel.name}</div>
                <div class="hotel-tags">${hotel.tags.join(', ')}</div>
                <div><span class="fa fa-star checked">${hotel.rating}</span>
                <span class="hotel-eta">${hotel.eta} Mins</span></div>
            </div>
        </div>
    `;
};

const generateRestaurantList = data => data.map(getHotelCard).join('');

const displayAllHotels = () => {
    restaurantsElem.innerHTML = generateRestaurantList(hotelLists);
};

displayAllHotels();

const searchResult = () => {
    let filteredList = hotelLists.filter(hotel =>
        hotel.tags.join(', ').toLowerCase().includes(inputBox.value.toLowerCase()) ||
        hotel.name.toLowerCase().includes(inputBox.value.toLowerCase())
    );
    restaurantsElem.innerHTML = filteredList.length ? generateRestaurantList(filteredList) : "No Results Found !!";
};

let debounce = (fn, delay) => {
    let timeout;
    return () => {
       clearTimeout(timeout);
       timeout = setTimeout(fn, delay);
    };
};

let search = debounce(searchResult, 400);
document.addEventListener('input', search);

const sortby = e => {
    if (e.target.value === 'rating') {
        hotelLists.sort((a, b) => b.rating - a.rating);
    } else if (e.target.value === 'eta') {
        hotelLists.sort((a, b) => a.eta - b.eta);
    }
    displayAllHotels();
};

function fav() {
    showFav.innerHTML = "You do not have any Favourites";
    console.log("No favourites found.");
}

/* 🚀 Login & Signup Modal Functions */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

/* Close modal when clicking outside the box */
window.onclick = function(event) {
    if (event.target === loginModal) {
        closeModal('loginModal');
    }
    if (event.target === signupModal) {
        closeModal('signupModal');
    }
};
