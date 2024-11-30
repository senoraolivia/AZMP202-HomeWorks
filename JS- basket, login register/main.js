import {  carsData} from "./carData.js";
const carGrid = document.getElementById("car-grid");
const basketTableBody = document.getElementById("basket-table-body");
const basketContainer = document.getElementById("basket");
const navBasketButton = document.getElementById("nav-basket");
const backButton = document.getElementById("back");
const basketCount = document.querySelector(".basket-count");
const searchInput = document.querySelector(".search-input"); 

let basket = [];


function getCurrentUser() {
  return localStorage.getItem("currentUser");
}


function loadBasket() {
  const currentUser = getCurrentUser();
  if (currentUser) {
  
    basket = JSON.parse(localStorage.getItem(`${currentUser}-basket`)) || [];
    updateBasketCount();
  }
}


function saveBasketToLocalStorage() {
  const currentUser = getCurrentUser();
  if (currentUser) {

    localStorage.setItem(`${currentUser}-basket`, JSON.stringify(basket));
  }
}


function populateCarGrid() {
  carGrid.innerHTML = "";
  carsData.forEach((car, index) => {
    const carCard = document.createElement("div");
    carCard.classList.add("card");

    carCard.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <div class="info">
        <h3>${car.name}</h3>
        <div class="details">
          <p>Type: ${car.type}</p>
          <p>Fuel: ${car.fuel}</p>
          <p>Transmission: ${car.transmission}</p>
          <p>Passengers: ${car.passengers}</p>
        </div>
        <div class="price">$${car.price.toFixed(2)} / day</div>
        <button class="add-to-basket">Add to Basket</button>
      </div>
    `;
    carGrid.appendChild(carCard);

   
    carCard.querySelector(".add-to-basket").addEventListener("click", () => {
      basket.push(car);
      updateBasketCount();
      saveBasketToLocalStorage();

     
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${car.name} added to basket!`,
        showConfirmButton: false,
        timer: 1500,
      });
    });

  
    carCard.dataset.index = index;
    carCard.dataset.name = car.name.toLowerCase();
  });
}


populateCarGrid();

navBasketButton.addEventListener("click", () => {
  populateBasketTable();
  carGrid.parentElement.classList.add("hidden");
  basketContainer.classList.remove("hidden");
});


backButton.addEventListener("click", () => {
  basketContainer.classList.add("hidden");
  carGrid.parentElement.classList.remove("hidden");
});

function populateBasketTable() {
  basketTableBody.innerHTML = ""; 
  basket.forEach((car, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${car.name}</td>
      <td>${car.type}</td>
      <td>${car.fuel}</td>
      <td>${car.passengers}</td>
      <td>$${car.price.toFixed(2)}</td>
      <td><button class="delete-button" data-index="${index}">Delete</button></td>
    `;
    basketTableBody.appendChild(row);

  
    row.querySelector(".delete-button").addEventListener("click", (e) => {
      const carIndex = e.target.dataset.index;
      basket.splice(carIndex, 1); 
      updateBasketCount(); 
      saveBasketToLocalStorage();
      populateBasketTable(); 
    });
  });
}


function updateBasketCount() {
  basketCount.textContent = basket.length;
}


searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();

  const carCards = Array.from(carGrid.children);

  const matchingCards = carCards.filter((card) =>
    card.dataset.name.includes(searchValue)
  );
  const nonMatchingCards = carCards.filter(
    (card) => !card.dataset.name.includes(searchValue)
  );

  matchingCards.forEach((card) => {
    card.style.order = 0; 
    card.style.visibility = "visible";
    card.style.position = "relative"; 
  });

  nonMatchingCards.forEach((card) => {
    card.style.visibility = "hidden";
    card.style.position = "absolute";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  loadBasket(); 
  updateBasketCount();
});
