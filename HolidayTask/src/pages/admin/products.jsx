import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/index';
// import styles from '../../styles/AdminProducts.module.css';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/products/${id}`, { method: 'DELETE' });
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <Layout title="Manage Products | E-commerce App">
      <div className={styles.container}>
        <h1>Manage Products</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AdminProducts;

