import React, { useRef, useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
  const { addToCart } = useContext(CartContext);
  
  // Agregar estilos CSS para ocultar la barra de desplazamiento
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const trendingProducts = [
    {
      id: 'iphone-16-pro-max',
      name: 'iPhone 16 Pro Max',
      price: 6999000,
      image: 'https://i.postimg.cc/dVsqvnZs/image.png',
      isTop: true,
      isPro: true,
      selectedColor: { name: 'Negro', hex: '#000000' },
      selectedStorage: 256,
      quantity: 1
    },
    {
      id: 'iphone-16',
      name: 'iPhone 16',
      price: 5499000,
      image: 'https://i.postimg.cc/44hFQCZT/image.png',
      isTop: true,
      isPro: false,
      selectedColor: { name: 'Negro', hex: '#1F2020' },
      selectedStorage: 128,
      quantity: 1
    },
    {
      id: 'iphone-16-e',
      name: 'iPhone 16 E',
      price: 4999000,
      image: 'https://i.postimg.cc/sDY6bpv6/image.png',
      isTop: true,
      isPro: false,
      selectedColor: { name: 'Negro', hex: '#1F2020' },
      selectedStorage: 128,
      quantity: 1
    },
    {
      id: 'iphone-15-pro-max',
      name: 'iPhone 15 Pro Max',
      price: 6199000,
      image: 'https://i.postimg.cc/9XTbvrYS/image.png',
      isTop: false,
      isPro: true,
      selectedColor: { name: 'Titanio', hex: '#555555' },
      selectedStorage: 128,
      quantity: 1
    },
    {
      id: 'iphone-15-pro',
      name: 'iPhone 15 Pro',
      price: 5199000,
      image: '/images/products/iphone/iphone-15-pro.png',
      isTop: false,
      isPro: true,
      selectedColor: { name: 'Titanio', hex: '#555555' },
      selectedStorage: 128,
      quantity: 1
    },
    {
      id: 'iphone-14-pro-max',
      name: 'iPhone 14 Pro Max',
      price: 5299000,
      image: 'https://i.postimg.cc/tJ2YL3SW/image.png',
      isTop: false,
      isPro: true,
      selectedColor: { name: 'Morado', hex: '#635C6C' },
      selectedStorage: 128,
      quantity: 1
    },
    {
      id: 'iphone-14-pro',
      name: 'iPhone 14 Pro',
      price: 4999000,
      image: 'https://i.postimg.cc/j2VcF5KY/image.png',
      isTop: false,
      isPro: true,
      selectedColor: { name: 'Morado', hex: '#635C6C' },
      selectedStorage: 128,
      quantity: 1
    },
    {
      id: 'iphone-15-plus',
      name: 'iPhone 15 Plus',
      price: 4699000,
      image: 'https://i.postimg.cc/Kcqch8cP/image.png',
      isTop: false,
      isPro: false,
      selectedColor: { name: 'Azul', hex: '#a4c3d2' },
      selectedStorage: 128,
      quantity: 1
    }
  ];

  const carouselRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('right');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Función para realizar el scroll automático
  const autoScroll = () => {
    if (carouselRef.current && !isScrolling && !isDragging) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      
      // Calcular nueva posición
      let newScrollLeft;
      if (scrollDirection === 'right') {
        newScrollLeft = scrollLeft + 1;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          setScrollDirection('left');
        }
      } else {
        newScrollLeft = scrollLeft - 1;
        if (scrollLeft <= 10) {
          setScrollDirection('right');
        }
      }
      
      carouselRef.current.scrollLeft = newScrollLeft;
    }
  };

  // Configurar el intervalo para el auto-scroll
  useEffect(() => {
    const scrollInterval = setInterval(autoScroll, 20); // Velocidad del scroll
    
    return () => clearInterval(scrollInterval);
  }, [scrollDirection, isScrolling, isDragging]);

  // Manejar eventos de mouse para pausar el scroll
  const handleMouseEnter = () => setIsScrolling(true);
  const handleMouseLeave = () => {
    setIsScrolling(false);
    setIsDragging(false);
  };
  
  // Funciones para el arrastre manual del carrusel
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidad
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  
  // Funciones para eventos táctiles
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  // Función para añadir al carrito
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1
    });
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">TENDENCIA</span>
          <h2 className="text-4xl font-bold mt-6 mb-4 text-gray-900" id="trending-title">Los más vendidos</h2>
          <p className="text-gray-600 text-lg">Descubre nuestros dispositivos más populares y mejor valorados</p>
        </div>
        
        <div className="relative">

          
          <section 
            className="flex overflow-x-auto hide-scrollbar pb-6 pt-2 px-2 -mx-2 cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            aria-labelledby="trending-title"
          >
            {trendingProducts.map((product) => (
              <div 
                key={product.id} 
                className="relative bg-gray-50 rounded-xl overflow-hidden group border border-gray-100 hover:shadow-sm transition-all duration-300 flex-shrink-0 mx-3"
                style={{ width: '280px' }}>
                {product.isTop && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Top
                  </div>
                )}
                {product.isPro && (
                  <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                    PRO
                  </div>
                )}
                <Link to={`/product/iphone/${product.id}`} className="block">
                  <div className="h-48 flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full object-contain transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Apple</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-gray-900">$ {product.price.toLocaleString()}</div>
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95"
                      onClick={() => handleAddToCart(product)}
                      aria-label="Añadir al carrito"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
