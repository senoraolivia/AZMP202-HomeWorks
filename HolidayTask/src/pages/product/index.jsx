import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/index"; 
import ProductCard from '../../components/ProductCard/index';
import styles from '../../styles/Home.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.price <= priceFilter &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [priceFilter, searchTerm, products]);

  return (
    <Layout title="Home | E-commerce App">
      <div className={styles.container}>
        <h1>Our Products</h1>
        <div className={styles.filters}>
          <input
            type="range"
            min="0"
            max="100"
            value={priceFilter}
            onChange={(e) => setPriceFilter(Number(e.target.value))}
          />
          <span>Max Price: ${priceFilter}</span>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

