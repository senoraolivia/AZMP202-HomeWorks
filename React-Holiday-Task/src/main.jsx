
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { BasketProvider } from './components/Context/BasketContext.jsx';
import { FavoritesProvider } from './components/Context/FavContext.jsx';


createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
 <BasketProvider>
     <BrowserRouter>
      <App />
    </BrowserRouter>   
  </BasketProvider>    
  </FavoritesProvider>
 
   
);