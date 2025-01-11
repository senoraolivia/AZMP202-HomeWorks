import { Outlet, NavLink } from 'react-router-dom';
import styles from "../ClientLayout/ClientLayout.module.scss"
export default function AdminLayout() {
  return (
    <div className="">
      <nav className="bg-gray">
        <ul className="">
          <li><NavLink to="/admin" end className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Dashboard</NavLink></li>
          <li><NavLink to="/admin/users" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Users</NavLink></li>
          <li><NavLink to="/admin/products" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Products</NavLink></li>
          <li><NavLink to="/admin/users/add" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Add User</NavLink></li>
          <li><NavLink to="/admin/products/add" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Add Product</NavLink></li>
        </ul>
      </nav>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

