const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3001;

app.use(express.json());

const products = [
  {
    id: "1",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
  },
  {
    id: "2",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
  },
  {
    id: "3",
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member.",
    category: "men's clothing",
  },
];

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// GET all products
app.get("/api/products", (req, res) => {
  if (products.length > 0) {
    res.status(200).send({
      data: products,
      message: "success",
      error: null,
    });
  } else {
    res.status(204).send({
      data: [],
      message: "data is empty!",
    });
  }
});

// GET product by ID
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);
  if (product) {
    res.status(200).send({
      data: product,
      message: "success",
    });
  } else {
    res.status(404).send({
      message: "not found!",
    });
  }
});

// DELETE 
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const idx = products.findIndex((p) => p.id === id);

  if (idx === -1) {
    res.status(404).send({
      message: "no such product to delete!",
    });
  } else {
    const deleted = products.splice(idx, 1);
    res.status(200).send({
      deletedProduct: deleted,
      products: products,
      message: "successfully deleted!",
    });
  }
});

// POST 
app.post("/api/products", (req, res) => {
  const { title, price, description, category } = req.body.title
    ? req.body
    : req.query;

  const newProduct = {
    id: uuidv4(),
    title,
    price: parseFloat(price),
    description,
    category,
  };

  products.push(newProduct);
  res.status(201).send({
    message: "successfully posted product!",
    newProduct,
  });
});


// PUT (update)
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, category, description, price } = req.body;

  const idx = products.findIndex((p) => p.id === id);

  if (idx !== -1) {
    const updatedProduct = {
      id,
      title,
      category,
      description,
      price,
    };
    products[idx] = updatedProduct;

    res.status(200).send({
      message: "successfully updated!",
      updatedProduct,
    });
  } else {
    res.status(404).send({ message: "not found" });
  }
});

// PATCH by ID
app.patch("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, category, description, price } = req.body;

  const idx = products.findIndex((p) => p.id === id);

  if (idx !== -1) {
    if (title !== undefined) products[idx].title = title;
    if (category !== undefined) products[idx].category = category;
    if (description !== undefined) products[idx].description = description;
    if (price !== undefined) products[idx].price = price;

    res.status(200).send({
      message: "successfully updated!",
      updatedProduct: products[idx],
      products,
    });
  } else {
    res.status(404).send({ message: "not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
