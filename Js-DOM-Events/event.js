import { products } from "./data.js"; 

const originalProducts = [...products]; 

function displayProducts(products) {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""; 
    products.forEach(product => {
        addCard(product.title, product.price, product.description, product.image);
    });
}

function addCard(title, price, description, image) {
    const card = document.createElement("div");
    card.classList.add("card");

    const shortTitle = title.length > 20 ? title.substring(0, 20) + "..." : title;
    const shortDescription = description.length > 50 ? description.substring(0, 50) + "..." : description;

    card.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${shortTitle}</h3>
        <p>${shortDescription}</p>
        <div class="card-buttons">
            <button id="details-btn" class="details-btn">Details</button>
            <button id="delete-btn" class="delete-btn">Delete</button>
        </div>
    `;

    card.querySelector(".details-btn").addEventListener("click", () => openModal(title, description, price, image));
    card.querySelector(".delete-btn").addEventListener("click", () => deleteCard(card));

    document.getElementById("cardsContainer").appendChild(card);
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    displayProducts(filteredProducts);
});

let sortMode = "ASC"; 
const sortButton = document.getElementById("sortButton");

sortButton.addEventListener("click", function() {
    if (sortMode === "ASC") {
        products.sort((a, b) => a.price - b.price);
        sortMode = "DESC";
        this.textContent = "Sort (DESC)";
    } else if (sortMode === "DESC") {
        products.sort((a, b) => b.price - a.price);
        sortMode = "Original";
        this.textContent = "Sort (Original)";
    } else if (sortMode === "Original") {
        displayProducts(originalProducts); 
        sortMode = "ASC";
        this.textContent = "Sort (ASC)";
    }
    if (sortMode !== "Original") displayProducts(products);
});

function deleteCard(card) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            card.remove(); 
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}

const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModal = document.querySelector(".close");

function openModal(title, description, price, image) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalPrice").textContent = `$${price}`;
    document.getElementById("modalImage").src = image;

    modal.style.display = "block";
    modalBackdrop.style.display = "block";
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", () => {
    modal.style.display = "none";
    modalBackdrop.style.display = "none";
});

const addButton = document.querySelector("form button[type='submit']");
addButton.addEventListener("click", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    if (!title || !price || !description || !image) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else {
        const newProduct = {
            title,
            price,
            description,
            image
        };
        products.push(newProduct);
        addCard(title, price, description, image); 
        document.getElementById("cardForm").reset(); 
    }
});

displayProducts(products);
