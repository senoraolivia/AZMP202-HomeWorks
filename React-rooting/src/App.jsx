import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientLayout from './layouts/ClientLayout/index';
import AdminLayout from './layouts/AdminLayout/index';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Blog from './pages/Blog/index';
import BlogDetail from './pages/BlogDetail/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Dashboard from './pages/Admin/Dashboard';
import Users from './pages/Admin/Users';
import Products from './pages/Admin/Products';
import AddUser from './pages/Admin/AddUser';
import EditUser from './pages/Admin/EditUser';
import EditProduct from './pages/Admin/EditProduct';
import AddProduct from './pages/Admin/AddProduct';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="products/add" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

