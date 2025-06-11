import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product, category }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  // Usamos el primer color y almacenamiento por defecto sin permitir cambios
  const selectedColor = product.colors[0];
  const selectedStorage = product.storage[0];

  // Función para mapear los colores de fondo permitidos por Tailwind
  const getBgColorClass = (color) => {
    // Puedes ajustar este mapeo según los colores que uses en Tailwind
    const colorMap = {
      'white': 'bg-white',
      'black': 'bg-black',
      'gray': 'bg-gray-200',
      'blue': 'bg-blue-200',
      'red': 'bg-red-200',
      'yellow': 'bg-yellow-200',
      'green': 'bg-green-200',
      // Agrega más colores según tus necesidades
    };
    return colorMap[color.bgColor] || 'bg-white';
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedColor,
      selectedStorage,
      quantity: 1
    };
    addToCart(productToAdd);
  };

  const handleBuyNow = () => {
    const productToAdd = {
      ...product,
      selectedColor,
      selectedStorage,
      quantity: 1
    };
    addToCart(productToAdd);
    navigate('/checkout');
  };

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative border border-gray-100`}>
      <div className="block pointer-events-none">
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            NUEVO
          </span>
        )}
        {product.isPro && (
          <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            PRO
          </span>
        )}
        <div className={`p-6 flex justify-center items-center h-64 bg-${selectedColor.bgColor} select-none`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
      <div className="p-6 bg-white">
        <div className="uppercase text-gray-500 text-sm font-medium mb-1">
          {product.brand}
        </div>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 h-12">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold text-gray-900">
            $ {product.price.toLocaleString()}
          </div>
          <div className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
            Envío gratis
          </div>
        </div>
        <div className="mb-5">
          <div className="flex space-x-3 mb-3">
            {product.colors.map((color) => (
              <div
                key={color.name}
                className={`w-6 h-6 rounded-full border-2 ${selectedColor.name === color.name ? 'border-blue-600' : 'border-transparent'}`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Color ${color.name}`}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
          <div className="text-right text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1 rounded-full inline-block ml-auto">
            {selectedStorage} GB
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 p-6 pt-0">
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white rounded-full py-3 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-[1.02]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Carrito
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-black text-white rounded-full py-3 flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-[1.02]"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
