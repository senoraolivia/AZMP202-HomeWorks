let products = []; 


const fetchProducts = async () => {
  try {
    const response = await fetch('./db.json'); 
    const data = await response.json();
    products = data.products; 
    renderProducts(products); 
  } catch (error) {
    console.error("Məhsulları çəkmək mümkün olmadı:", error);
  }
};


const renderProducts = (productsToShow) => {
  const productTableBody = document.querySelector('#productTable tbody');
  if (!productTableBody) {
    console.error("#productTable tapılmadı!");
    return;
  }

  productTableBody.innerHTML = '';

  productsToShow.forEach((product, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td>$${product.price}</td>
      <td>
        <button class="btn btn-primary btn-sm edit-btn" data-id="${product.id}">Edit</button>
        <button class="btn btn-danger btn-sm delete-btn" data-id="${product.id}">Delete</button>
      </td>
    `;

    productTableBody.appendChild(row);
  });

  attachActionListeners(); 
};

const attachActionListeners = () => {

  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('data-id');
      editProduct(productId);
    });
  });


  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('data-id');
      deleteProduct(productId);
    });
  });
};


const editProduct = (id) => {
  const product = products.find(p => p.id == id);
  if (product) {
    const newName = prompt("Yeni adı daxil edin:", product.name);
    if (newName) {
      product.name = newName; 
      renderProducts(products); 
    }
  }
};


const deleteProduct = (id) => {
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
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

      
      products = products.filter(product => product.id != id);
      renderProducts(products); 
    }
  });
};


const handleSearch = (event) => {
  const query = event.target.value.toLowerCase(); 
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  renderProducts(filteredProducts);
};


const attachSearchListener = () => {
  const searchInput = document.querySelector('input[type="search"]');
  if (!searchInput) {
    console.error("Axtarış inputu tapılmadı!");
    return;
  }
  searchInput.addEventListener('input', handleSearch);
};


const init = () => {
  fetchProducts();
  attachSearchListener();
};

init();
