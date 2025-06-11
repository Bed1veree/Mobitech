import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import PriceFilter from '../filters/PriceFilter';

const SortFilter = ({ onSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('featured');

  const options = [
    { id: 'featured', label: 'Destacados' },
    { id: 'price-asc', label: 'Precio: menor a mayor' },
    { id: 'price-desc', label: 'Precio: mayor a menor' },
    { id: 'newest', label: 'Más recientes' }
  ];

  const handleSelect = (option) => {
    setSelected(option.id);
    onSort(option.id);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        className="inline-flex items-center px-3 sm:px-4 py-2 border border-blue-600 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300 min-h-[44px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
        <span className="hidden sm:inline">{options.find(o => o.id === selected).label}</span>
        <span className="sm:hidden">Ordenar</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 sm:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {options.map(option => (
              <button 
                key={option.id}
                className={`block px-4 py-2 text-sm w-full text-left ${selected === option.id ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-50`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProductGrid = ({ products, category }) => {
  const { addToCart } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [priceFilters, setPriceFilters] = useState([]);

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
    applyFiltersAndSort(priceFilters, sortOption);
  };

  const handlePriceFilter = (selectedPrices) => {
    setPriceFilters(selectedPrices);
    applyFiltersAndSort(selectedPrices, sortBy);
  };

  const applyFiltersAndSort = (prices, sort) => {
    let result = [...products];
    
    // Apply price filters if any
    if (prices.length > 0) {
      result = result.filter(product => {
        return prices.some(range => 
          product.price >= range[0] && product.price < range[1]
        );
      });
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'newest') return b.isNew ? 1 : -1;
      // Default: featured
      return 0;
    });
    
    setFilteredProducts(result);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 sm:mb-6">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              {category}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium mt-1 sm:mt-2">
              {filteredProducts.length} productos encontrados
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <PriceFilter onApplyFilters={handlePriceFilter} />
            <SortFilter onSort={handleSort} />
          </div>
        </div>
      </div>
      
      {/* Grid responsive: 1 columna en móvil, 2 en tablet, 3 en desktop, 4 en pantallas grandes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative border border-gray-100 pointer-events-none"
          >
            {product.isNew && (
              <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-600 text-white text-xs font-black px-2 sm:px-3 py-1 rounded-full z-10 shadow-sm">
                NUEVO
              </span>
            )}
            {product.isPro && (
              <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black text-white text-xs font-black px-2 sm:px-3 py-1 rounded-full z-10 shadow-sm">
                PRO
              </span>
            )}
            
            {/* Imagen del producto */}
            <div className="p-4 sm:p-6 flex justify-center items-center h-40 sm:h-48 bg-white">
              <img 
                src={product.image || '/images/products/placeholder.svg'} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/products/placeholder.svg';
                }}
              />
            </div>
            
            {/* Información del producto */}
            <div className="p-4 sm:p-6 bg-white">
              <div className="uppercase text-gray-500 text-xs sm:text-sm font-medium mb-1">
                {product.brand}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-black leading-tight">
                {product.name}
              </h3>
              <p className="text-gray-800 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                {product.description}
              </p>
              
              {/* Precio y envío */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3 sm:mb-4">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  $ {product.price.toLocaleString()}
                </div>
                <div className="text-green-600 text-xs sm:text-sm font-medium px-2 py-1 rounded-full bg-green-50 self-start sm:self-auto">
                  Envío gratis
                </div>
              </div>
              
              {/* Colores y almacenamiento */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-2">
                    {product.colors.slice(0, 4).map((color) => (
                      <div
                        key={color.name}
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-transparent`}
                        style={{ backgroundColor: color.hex }}
                        aria-label={`Color ${color.name}`}
                      />
                    ))}
                    {product.colors.length > 4 && (
                      <span className="text-xs text-gray-600 font-medium">+{product.colors.length - 4}</span>
                    )}
                  </div>
                  
                  <div className="text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 px-2 sm:px-3 py-1 rounded-full">
                    {product.storage[0]} GB
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 p-4 sm:p-6 pt-0 pointer-events-auto">
              <button
                onClick={() => addToCart({
                  ...product,
                  selectedColor: product.colors[0],
                  selectedStorage: product.storage[0],
                  quantity: 1
                })}
                className="bg-blue-600 text-white rounded-full py-3 sm:py-3 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-[1.02] text-sm sm:text-base font-medium min-h-[44px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="hidden sm:inline">Carrito</span>
                <span className="sm:hidden">+</span>
              </button>
              <button
                onClick={() => {
                  // Añadir al carrito y luego abrir el carrito
                  addToCart({
                    ...product,
                    selectedColor: product.colors[0],
                    selectedStorage: product.storage[0],
                    quantity: 1
                  });
                  // Disparar evento para abrir carrito
                  document.dispatchEvent(new CustomEvent('open-cart'));
                }}
                className="bg-black text-white rounded-full py-3 sm:py-3 flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-[1.02] text-sm sm:text-base font-medium min-h-[44px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

