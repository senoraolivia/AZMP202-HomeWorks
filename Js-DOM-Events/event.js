let products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
            "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing.",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
];

function displayProducts(products) {
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
        <h3 title="${title}">${shortTitle}</h3>
        <p>${shortDescription}</p>
        <p>Price: $${price}</p>
        <div class="card-buttons">
            <button id="details-btn" onclick="showDetails('${image}', '${title}', '${description}')">Details</button>
            <button id="delete-btn" onclick="deleteCard(this)">Delete</button>
        </div>
    `;

    document.getElementById("cardsContainer").appendChild(card);
}

document.getElementById("cardForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    addCard(title, price, description, image);
    this.reset();
});

function showDetails(image, title, description,price) {
    document.getElementById("modalImage").src = image;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalPrice").innerText=price;

    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
});

function deleteCard(button) {
    if (confirm("Are you sure?")) {
        button.closest(".card").remove();
    }
}

function showDetails(image, title, description, price) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");

    modalImage.src = image;
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalPrice.innerText = `Price: $${price}`; 

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
});
function showDetails(image, title, description, price) {
    const modal = document.getElementById("modal");
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("modal-backdrop");
    document.body.appendChild(modalBackdrop);

    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");

    modalImage.src = image;
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalPrice.innerText = `Price: ${price}`;

    modal.style.display = "flex";
    modalBackdrop.style.display = "block";
    document.body.classList.add("modal-open");
}

document.querySelector(".close").addEventListener("click", function() {
    const modal = document.getElementById("modal");
    const modalBackdrop = document.querySelector(".modal-backdrop");

    modal.style.display = "none";
    if (modalBackdrop) {
        modalBackdrop.style.display = "none";
        document.body.removeChild(modalBackdrop);
    }
    document.body.classList.remove("modal-open");
});

displayProducts(products);
