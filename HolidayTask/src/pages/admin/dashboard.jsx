import React from 'react';
import Layout from '../../components/Layout/index';
// import Link from 'next/link';
// import styles from '../../styles/AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <Layout title="Admin Dashboard | E-commerce App">
      <div className={styles.container}>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li><Link href="/admin/products">Manage Products</Link></li>
            <li><Link href="/admin/add-product">Add New Product</Link></li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

