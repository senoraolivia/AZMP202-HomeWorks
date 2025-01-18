import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/ClientLayout'
import Home from './pages/Client/Home'
import Favorites from './pages/Client/Favorites'
import Basket from './pages/Client/Basket'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import AddProduct from './pages/admin/AddProduct'
import TableProducts from './pages/admin/TableProducts'
import NotFound from './pages/admin/404NotFound'
import Contacts from './pages/Client/Contact'
import Details from './pages/Client/Details'
import { useEffect, useState } from 'react'
import Loader from './components/Loading'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <> 
     {isLoading ? (
        <Loader /> 
      ) : (
      <>
 <Routes>
  <Route path = "/" element = {<ClientLayout />}>
<Route index element = {<Home />}/>
<Route path = "/Favorite" element = {<Favorites />}/>
<Route path = "/Basket" element = {<Basket />}/>
<Route path = "/contacts" element = {<Contacts />}/>
<Route path="/details/:id" element={<Details />}/>
  </Route>

  <Route path = "/admin" element = {<AdminLayout />}>
<Route index element = {<Dashboard />}/>
<Route path = "Addproduct" element = {<AddProduct />}/>
<Route path = "TableProducts" element = {<TableProducts />}/>
  </Route>
  <Route path="*" element={<NotFound />} />
 </Routes>
    </>
      )}
    </>
      
  )
}

export default App