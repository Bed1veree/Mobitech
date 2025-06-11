import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Datos de ejemplo para la previsualización
const mockProducts = [
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    image: '/images/products/iphone-13-pro.jpg',
    price: 999000,
    category: 'iphone'
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    image: '/images/products/iphone-13.jpg',
    price: 799000,
    category: 'iphone'
  },
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    image: '/images/products/macbook-pro-14.jpg',
    price: 1999000,
    category: 'mac'
  },
  {
    id: 'ipad-pro',
    name: 'iPad Pro',
    image: '/images/products/ipad-pro.jpg',
    price: 899000,
    category: 'ipad'
  },
  {
    id: 'airpods-pro',
    name: 'AirPods Pro',
    image: '/images/products/airpods-pro.jpg',
    price: 249000,
    category: 'airpods'
  },
  {
    id: 'apple-watch-series-7',
    name: 'Apple Watch Series 7',
    image: '/images/products/apple-watch-7.jpg',
    price: 399000,
    category: 'watch'
  }
];

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  
  // Efecto para manejar clics fuera del componente de búsqueda
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Efecto para cargar búsquedas recientes desde localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches).slice(0, 3));
      } catch (error) {
        console.error('Error al cargar búsquedas recientes:', error);
      }
    }
  }, []);
  
  // Función para guardar búsquedas recientes
  const saveRecentSearch = (term) => {
    const updatedSearches = [term, ...recentSearches.filter(s => s !== term)].slice(0, 3);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };
  
  // Función para realizar la búsqueda completa
  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchTerm.trim()) {
        setIsSearching(true);
        saveRecentSearch(searchTerm);
        onSearch && onSearch(searchTerm);
        setShowResults(false);
      }
    }
  };
  
  // Función para buscar en tiempo real mientras el usuario escribe
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 1) {
      // Simulación de búsqueda en tiempo real
      const results = mockProducts.filter(product => 
        product.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 4); // Limitar a 4 resultados para la previsualización
      
      setSearchResults(results);
      setShowResults(true);
      setIsSearching(false);
    } else {
      setShowResults(value.trim().length > 0);
      setSearchResults([]);
    }
  };
  
  // Función para manejar el clic en un resultado
  const handleResultClick = (productId, category) => {
    setShowResults(false);
    saveRecentSearch(searchTerm);
  };
  
  // Función para usar una búsqueda reciente
  const useRecentSearch = (term) => {
    setSearchTerm(term);
    setIsSearching(true);
    onSearch && onSearch(term);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-xl search-container">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full py-2.5 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm transition-all duration-200"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
          onFocus={() => setShowResults(searchTerm.trim().length > 0)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {searchTerm && (
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => {
              setSearchTerm('');
              setShowResults(false);
            }}
            aria-label="Limpiar búsqueda"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Previsualización de resultados */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl z-50 border border-gray-100 overflow-hidden">
          {searchResults.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              <div className="p-3 border-b border-gray-100">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Resultados</h3>
              </div>
              
              <div className="divide-y divide-gray-100">
                {searchResults.map((product) => (
                  <Link 
                    key={product.id}
                    to={`/product/${product.category}/${product.id}`}
                    className="flex items-center p-3 hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => handleResultClick(product.id, product.category)}
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/100?text=Producto';
                        }}
                      />
                    </div>
                    <div className="ml-3 flex-grow">
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-blue-600">$ {product.price.toLocaleString()} CLP</p>
                    </div>
                    <div className="ml-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="p-3 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={handleSearch}
                  className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver todos los resultados para "{searchTerm}"
                </button>
              </div>
            </div>
          ) : searchTerm.trim().length > 0 ? (
            <div className="p-4">
              <p className="text-gray-500 text-center">No se encontraron productos para "{searchTerm}"</p>
            </div>
          ) : recentSearches.length > 0 ? (
            <div>
              <div className="p-3 border-b border-gray-100">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Búsquedas recientes</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {recentSearches.map((term, index) => (
                  <button
                    key={index}
                    className="flex items-center w-full p-3 hover:bg-gray-50 transition-colors duration-150 text-left"
                    onClick={() => useRecentSearch(term)}
                  >
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{term}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
      
      {/* Indicador de búsqueda en progreso */}
      {isSearching && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4 flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-600 mr-2"></div>
            <span>Buscando "{searchTerm}"...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
