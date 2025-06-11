import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './HeroBanner.css'; // Importar el archivo CSS para estilos específicos

const sliderImages = [
  {
    src: 'https://i.postimg.cc/dVsqvnZs/image.png',
    alt: 'iPhone 16 Pro Max',
    title: 'iPhone 16 Pro Max',
    price: 6999000,
    description: 'Revoluciona tu día. Titanio. Poder. Precisión.',
    link: '/iphone/16-pro-max',
    buy: '/iphone',
    tags: ['A18 Pro', 'Titanio', 'iOS 18', '48MP', 'Acción Espacial']
  },
  {
    src: 'https://i.postimg.cc/yYVqSx1n/image.png',
    alt: 'Apple Watch Ultra 2',
    title: 'Apple Watch Ultra 2',
    price: 3799000,
    description: 'Supera tus límites. Conquista lo imposible.',
    link: '/watch/ultra-2',
    buy: '/watch',
    tags: ['Titanio', 'GPS + Celular', 'Resistente al agua', 'Batería 36h']
  },
  {
    src: 'https://i.postimg.cc/9XTbvrYS/image.png',
    alt: 'iPhone 15 Pro Max',
    title: 'iPhone 15 Pro Max',
    price: 6199000,
    description: 'Potencia que inspira. Diseño que enamora.',
    link: '/iphone/15-pro-max',
    buy: '/iphone',
    tags: ['A17 Pro', 'Titanio', 'iOS 17', '48MP']
  },
  {
    src: 'https://i.postimg.cc/sDY6bpv6/image.png',
    alt: 'iPhone 16 E',
    title: 'iPhone 16 E',
    price: 3999000,
    description: 'Innovación para todos. Experiencia extraordinaria.',
    link: '/iphone/16e',
    buy: '/iphone',
    tags: ['A17', 'Pantalla Retina', 'iOS 17', 'Batería 20h']
  },
  {
    src: 'https://i.postimg.cc/Kcqch8cP/image.png',
    alt: 'iPhone 15 Plus',
    title: 'iPhone 15 Plus',
    price: 4299000,
    description: 'Más grande. Más brillante. Más tuyo.',
    link: '/iphone/15-plus',
    buy: '/iphone',
    tags: ['6.7"', 'iOS 17', 'Colores', 'Gran batería']
  }
];

const HeroBanner = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % sliderImages.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getProductForCart = (slide) => {
    return {
      id: slide.title.toLowerCase().replace(/ /g, '-'),
      name: slide.title,
      image: slide.src,
      price: slide.price,
      selectedColor: { name: 'Único', hex: '#000' },
      selectedStorage: 'default',
      quantity: 1,
    };
  };

  const handleBuyNow = () => {
    const product = getProductForCart(sliderImages[currentImage]);
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="hero-banner-container text-white overflow-hidden relative">
      <div className="hero-background-overlay"></div>
      
      {/* Contenedor principal responsive */}
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Contenido de texto */}
            <div className="w-full lg:w-1/2 text-center lg:text-left z-20 order-2 lg:order-1">
              <div className={`mb-3 sm:mb-4 transition-all duration-700 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="bg-blue-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-md animate-pulse">
                  NUEVO
                </span>
              </div>
              
              <div className={`transition-all duration-700 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white hero-title leading-tight">
                  {sliderImages[currentImage].title}
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 hero-description">
                  {sliderImages[currentImage].description}
                </p>
                
                {/* Botón de compra responsive */}
                <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                  <button
                    onClick={handleBuyNow}
                    className="hero-buy-button bg-white hover:bg-gray-100 text-black font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base min-h-[48px] min-w-[120px]"
                    type="button"
                  >
                    Comprar
                  </button>
                </div>
                
                {/* Tags responsive */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {sliderImages[currentImage].tags && sliderImages[currentImage].tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-800 bg-opacity-70 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Imagen del producto */}
            <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center">
                <img
                  src={sliderImages[currentImage].src}
                  alt={sliderImages[currentImage].alt}
                  className={`w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-contain z-10 transition-all duration-700 transform ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicadores de slider (opcional para móvil) */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImage ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

