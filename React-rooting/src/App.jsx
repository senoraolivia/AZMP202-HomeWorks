import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

export default root
