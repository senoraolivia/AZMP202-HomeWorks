import React from 'react';
// import Link from 'next/link';
import { useBasketContext } from '../../context/BasketContext';
import { useFavoritesContext } from '../../context/FavoritesContext';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const { basket } = useBasketContext();
  const { favorites } = useFavoritesContext();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/favorites">Favorites ({favorites.length})</Link></li>
          <li><Link href="/basket">Basket ({basket.length})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

