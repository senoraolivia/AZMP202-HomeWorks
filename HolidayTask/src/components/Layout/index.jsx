import React from 'react';
// import Head from 'next/head';
import Header from '../Header/index';
import Footer from '../Footer/index';

const Layout = ({ children, title = 'E-commerce App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="E-commerce application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

