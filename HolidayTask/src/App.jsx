import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext/index';
import { FavoritesProvider } from './context/FavoritesContext/index';
import Home from './pages/product/basket';
import Basket from './pages/product/favorites';
import Favorites from './pages/product/index';
// import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './pages/admin/add-product';
import AdminProducts from './pages/admin/dashboard';
import AddProduct from './pages/admin/products';
import NotFound from "./pages/product/NotFound";

function App() {
  return (
    <BasketProvider>
      <FavoritesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </BasketProvider>
  );
}

export default App;

