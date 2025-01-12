import React from 'react';
import Layout from '../../components/Layout/index';
import { useBasketContext } from '../../context/BasketContext';
import styles from '../../styles/Basket.module.css';

const Basket = () => {
  const { basket, removeFromBasket } = useBasketContext();

  const total = basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <Layout title="Basket | E-commerce App">
      <div className={styles.container}>
        <h1>Your Basket</h1>
        {basket.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <>
            <ul className={styles.basketList}>
              {basket.map((item) => (
                <li key={item.id} className={styles.basketItem}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.itemDetails}>
                    <h3>{item.title}</h3>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromBasket(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className={styles.total}>
              <h2>Total: ${total.toFixed(2)}</h2>
              <button className={styles.checkoutButton}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Basket;

