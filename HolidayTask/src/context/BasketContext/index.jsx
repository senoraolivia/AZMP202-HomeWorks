import React, { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) setBasket(JSON.parse(savedBasket));
  }, []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (product) => {
    setBasket((prev) => [...prev, product]);
  };

  const removeFromBasket = (productId) => {
    setBasket((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInBasket = (productId) => {
    return basket.some((item) => item.id === productId);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        isInBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasketContext must be used within a BasketProvider');
  }
  return context;
};

