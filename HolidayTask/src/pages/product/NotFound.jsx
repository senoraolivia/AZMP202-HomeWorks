import React from 'react';
// import index from '../components/Layout/index';
// import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <Layout title="404 Not Found | E-commerce App">
      <div className={styles.container}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </Layout>
  );
};

export default NotFound;

