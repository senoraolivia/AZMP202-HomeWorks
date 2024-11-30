import { BASE_URL } from "./constants.js";

let products = []; 

const fetchProducts = async () => {
  try {
    const response = await fetch('db.json'); 
    const data = await response.json();
    products = data.products; 
    renderProducts(products); 
  } catch (error) {
    console.error("ERROR", error);
  }
};

const renderProducts = (productsToShow) => {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = ''; 

  productsToShow.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.id = `product-${product.id}`;

    productCard.innerHTML = `
      <img class="image" src="${product.image}" alt="${product.name}">
      <p class="productName">${product.name}</p>
      <p class="productDesc">${product.description}</p>
      <p class="productPrice">Price: $${product.price}</p>
    `;

    productContainer.appendChild(productCard);
  });
};

const handleSearch = (event) => {
  const query = event.target.value.toLowerCase(); 
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );

  const sortedProducts = [
    ...filteredProducts,
    ...products.filter(product => !filteredProducts.includes(product))
  ];


  renderProducts(sortedProducts);
};

const searchInput = document.querySelector('input[type="search"]');
searchInput.addEventListener('input', handleSearch);

fetchProducts();
