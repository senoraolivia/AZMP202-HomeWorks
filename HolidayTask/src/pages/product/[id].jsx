import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useBasketContext } from '../../context/BasketContext';
import { useFavoritesContext } from '../../context/FavoritesContext';
import styles from '../../styles/ProductDetail.module.css';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const { addToBasket, isInBasket } = useBasketContext();
  const { addToFavorites, isInFavorites } = useFavoritesContext();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={`${product.title} | E-commerce App`}>
      <div className={styles.container}>
        <img src={product.image} alt={product.title} />
        <div className={styles.details}>
          <h1>{product.title}</h1>
          <p>Rating: {product.rating} ({product.reviews} reviews)</p>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <div className={styles.actions}>
            <button onClick={() => addToBasket(product)}>
              {isInBasket(product.id) ? 'Remove from Basket' : 'Add to Basket'}
            </button>
            <button onClick={() => addToFavorites(product)}>
              {isInFavorites(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

