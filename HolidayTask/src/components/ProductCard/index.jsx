import React from 'react';
// import Link from 'next/link';
import { useBasketContext } from '../../context/BasketContext';
import { useFavoritesContext } from '../../context/FavoritesContext';
import styles from '../../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToBasket, removeFromBasket, isInBasket } = useBasketContext();
  const { addToFavorites, removeFromFavorites, isInFavorites } = useFavoritesContext();

  const handleBasketClick = () => {
    if (isInBasket(product.id)) {
      removeFromBasket(product.id);
    } else {
      addToBasket(product);
    }
  };

  const handleFavoriteClick = () => {
    if (isInFavorites(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className={styles.actions}>
        <button onClick={handleBasketClick}>
          {isInBasket(product.id) ? 'Remove from Basket' : 'Add to Basket'}
        </button>
        <button onClick={handleFavoriteClick}>
          {isInFavorites(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <Link href={`/product/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;

