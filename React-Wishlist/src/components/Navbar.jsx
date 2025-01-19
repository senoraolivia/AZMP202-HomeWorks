import React from "react"
import { Link } from "react-router-dom"
import styles from "./index.module.scss"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header>
      <div className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Change Theme
        </button>
      </div>
    </header>
  )
}

export default Navbar

