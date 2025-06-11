import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartButton = () => {
  const { cartItems, toggleCart } = useContext(CartContext);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <button 
      onClick={toggleCart}
      className="relative p-3 text-gray-700 hover:text-blue-600 transition-all duration-300 group rounded-xl hover:bg-blue-50"
      aria-label="Carrito de compras"
    >
      {/* Efecto de fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100"></div>
      
      {/* Icono del carrito mejorado */}
      <svg className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      
      {/* Badge de cantidad mejorado */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[20px] h-5 text-xs font-bold leading-none text-white transform bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg animate-bounce">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
      
      {/* Efecto de pulso cuando hay items */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
      )}
    </button>
  );
};

export default CartButton;

