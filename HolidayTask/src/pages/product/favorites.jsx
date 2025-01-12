import React from 'react';
import Layout from "../../components/Layout/index"; 
import { useFavoritesContext } from '../../context/FavoritesContext/index';
import { useBasketContext } from '../../context/BasketContext/index';
import styles from '../../styles/Favorites.module.css';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavoritesContext();
  const { addToBasket } = useBasketContext();

  return (
    <Layout title="Favorites | E-commerce App">
      <div className={styles.container}>
        <h1>Your Favorites</h1>
        {favorites.length === 0 ? (
          <p>You haven't added any favorites yet.</p>
        ) : (
          <ul className={styles.favoritesList}>
            {favorites.map((item) => (
              <li key={item.id} className={styles.favoriteItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className={styles.actions}>
                  <button onClick={() => addToBasket(item)}>Add to Basket</button>
                  <button onClick={() => removeFromFavorites(item.id)}>Remove from Favorites</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;

