import { Outlet, NavLink } from 'react-router-dom';
import styles from "../ClientLayout/ClientLayout.module.scss"
export default function ClientLayout() {
  return (
    <div className={styles.div}>
      <nav className={styles.nav}>
        <ul className={styles.ul} >
          <li className={styles.li}><NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Blog</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Login</NavLink></li>
          <li><NavLink to="/register" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Register</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

