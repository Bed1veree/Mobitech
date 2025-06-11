import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ProductShowcase = () => {
  const { addToCart } = useContext(CartContext);
  
  const products = [
    {
      id: 'iphone-16-pro-max',
      name: 'iPhone 16 Pro Max',
      tagline: 'Tecnología avanzada con el nuevo chip A18 Pro y cámara revolucionaria.',
      price: 6999000,
      image: 'https://i.postimg.cc/dVsqvnZs/image.png',
      isNew: true,
      isPro: true,
      colors: ['#555', '#000', '#e3d0c0'],
      selectedColor: { name: 'Negro', hex: '#000' },
      selectedStorage: 256,
      storage: '256 GB',
      envioGratis: true,
      quantity: 1
    },
    {
      id: 'iphone-16',
      name: 'iPhone 16',
      tagline: 'El nuevo estándar en rendimiento con chip A18 y Dynamic Island.',
      price: 5499000,
      image: 'https://i.postimg.cc/44hFQCZT/image.png',
      isNew: true,
      isPro: false,
      colors: ['#1F2020', '#F5F5F0', '#5c5c5c'],
      selectedColor: { name: 'Negro', hex: '#1F2020' },
      selectedStorage: 128,
      storage: '128 GB',
      envioGratis: true,
      quantity: 1
    },
    {
      id: 'iphone-16-e',
      name: 'iPhone 16 e',
      tagline: 'Diseño elegante con toda la potencia que necesitas en tu día a día.',
      price: 4999000,
      image: 'https://i.postimg.cc/sDY6bpv6/image.png',
      isNew: true,
      isPro: false,
      colors: ['#1F2020', '#F5F5F0', '#5c5c5c'],
      selectedColor: { name: 'Negro', hex: '#1F2020' },
      selectedStorage: 128,
      storage: '128 GB',
      envioGratis: true,
      quantity: 1
    },
    {
      id: 'iphone-15-pro-max',
      name: 'iPhone 15 Pro Max',
      tagline: 'El iPhone más avanzado con cámara ProRAW de 48MP y chip A17 Pro.',
      price: 6199000,
      image: 'https://i.postimg.cc/9XTbvrYS/image.png',
      isNew: false,
      isPro: true,
      colors: ['#555', '#000', '#e3d0c0'],
      selectedColor: { name: 'Titanio', hex: '#555' },
      selectedStorage: 128,
      storage: '128 GB',
      envioGratis: true,
      quantity: 1
    },
    {
      id: 'iphone-15-pro',
      name: 'iPhone 15 Pro',
      tagline: 'Potencia profesional con titanio resistente y el revolucionario botón de acción.',
      price: 5199000,
      image: '/images/products/iphone/iphone-15-pro.png',
      isNew: false,
      isPro: true,
      colors: ['#555', '#000', '#e3d0c0'],
      selectedColor: { name: 'Titanio', hex: '#555' },
      selectedStorage: 128,
      storage: '128 GB',
      envioGratis: true,
      quantity: 1
    },
    {
      id: 'iphone-14-pro-max',
      name: 'iPhone 14 Pro Max',
      tagline: 'El iPhone más avanzado con la tecnología Dynamic Island.',
      price: 5299000,
      image: 'https://i.postimg.cc/tJ2YL3SW/image.png',
      isNew: false,
      isPro: true,
      colors: ['#635C6C', '#F5F5F0', '#F4E8CE'],
      selectedColor: { name: 'Morado', hex: '#635C6C' },
      selectedStorage: 128,
      storage: '128 GB',
      envioGratis: true,
      quantity: 1
    },
    {
      id: 'iphone-14-pro',
      name: 'iPhone 14 Pro',
      tagline: 'Potencia y rendimiento profesional con pantalla siempre activa.',
      price: 4999000,
      image: 'https://i.postimg.cc/j2VcF5KY/image.png',
      isNew: false,
      isPro: true,
      colors: ['#635C6C', '#F5F5F0', '#F4E8CE'],
      selectedColor: { name: 'Morado', hex: '#635C6C' },
      selectedStorage: 128,
      storage: '128 GB',
      envioGratis: true,
      quantity: 1
    },
    {
      id: 'iphone-15',
      name: 'iPhone 15',
      tagline: 'Una nueva era para el iPhone con Dynamic Island y cámara de 48MP.',
      price: 4199000,
      image: 'https://i.postimg.cc/Zn2hB00X/image.png',
      isNew: false,
      isPro: false,
      colors: ['#a4c3d2', '#e5e5e0', '#9c8c7c'],
      selectedColor: { name: 'Azul', hex: '#a4c3d2' },
      selectedStorage: 128,
      storage: '128 GB',
      envioGratis: true,
      quantity: 1
    }
  ];

  // Función para añadir al carrito
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1
    });
  };

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold mb-4">Encuentra tu iPhone</h2>
          <p className="text-gray-600 text-lg">Descubre todos nuestros modelos y encuentra el iPhone perfecto para ti</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 group border border-gray-100 hover:shadow-md">
              <div className="relative">
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                    NUEVO
                  </span>
                )}
                {product.isPro && (
                  <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                    PRO
                  </span>
                )}
                <div className="h-64 flex items-center justify-center p-6 bg-white pointer-events-none">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full object-contain transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-1">APPLE</div>
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.tagline}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-xl">$ {product.price.toLocaleString()}</div>
                  {product.envioGratis && <div className="text-green-600 text-sm">Envío gratis</div>}
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  {product.colors.map((color) => (
                    <div 
                      key={`${product.id}-${color}`}
                      className="w-6 h-6 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                  <span className="text-gray-500 text-sm ml-2">+1</span>
                </div>
                
                <div className="text-gray-500 text-sm mb-6">{product.storage}</div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Carrito
                  </button>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/iphone" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            Ver todos los modelos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
