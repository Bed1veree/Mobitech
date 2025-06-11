import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductSlider = ({ category, isPromo = false }) => {
  const { addToCart } = useContext(CartContext);
  // Datos de ejemplo para productos según la categoría
  const getProductsByCategory = () => {
    switch(category) {
      case 'iphone':
        return [
          {
            id: 'iphone-16-pro-max',
            name: 'iPhone 16 Pro Max',
            image: 'https://i.postimg.cc/dVsqvnZs/image.png',
            price: 6999000,
            isNew: true
          },
          {
            id: 'iphone-15-pro-max',
            name: 'iPhone 15 Pro Max',
            image: '/images/products/iphone-15-pro-max.png',
            price: 6199000,
            isNew: false
          }
          // Puedes agregar más productos aquí asegurándote de que los IDs y rutas coincidan con productData
        ];
      case 'ipad':
        return [
          {
            id: 'ipad-pro',
            name: 'iPad Pro',
            image: '/images/products/ipad-pro.jpg',
            price: 4999000,
            isNew: true
          },
          {
            id: 'ipad-air',
            name: 'iPad Air',
            image: '/images/products/ipad-air.jpg',
            price: 3499000,
            isNew: false
          }
          // Puedes agregar más productos aquí asegurándote de que los IDs y rutas coincidan con productData
        ];
      case 'mac':
        return [
          {
            id: 'macbook-pro-16',
            name: 'MacBook Pro 16"',
            image: '/images/products/macbook-pro-16.jpg',
            price: 9999000,
            isNew: true
          },
          {
            id: 'macbook-pro-14',
            name: 'MacBook Pro 14"',
            image: '/images/products/macbook-pro-14.jpg',
            price: '$7.999.000 COP',
            isNew: true
          },
          {
            id: 'macbook-air-15',
            name: 'MacBook Air 15"',
            image: '/images/products/macbook-air-15.jpg',
            price: '$5.999.000 COP'
          },
          {
            id: 'macbook-air-13',
            name: 'MacBook Air 13"',
            image: '/images/products/macbook-air-13.jpg',
            price: 4999000
          },
          {
            id: 'imac-24',
            name: 'iMac 24"',
            image: '/images/products/imac-24.jpg',
            price: 6499000
          }
        ];
      case 'watch':
        return [
          {
            id: 'apple-watch-ultra-2',
            name: 'Apple Watch Ultra 2',
            image: '/images/products/apple-watch-ultra-2.jpg',
            price: 4299000,
            isNew: true
          },
          {
            id: 'apple-watch-series-9',
            name: 'Apple Watch Series 9',
            image: '/images/products/apple-watch-series-9.jpg',
            price: 5499000,
            isNew: true
          },
          {
            id: 'apple-watch-se-2',
            name: 'Apple Watch SE',
            image: '/images/products/apple-watch-se-2.jpg',
            price: 1699000,
          }
        ];
      case 'airpods':
        return [
          {
            id: 'airpods-pro-2',
            name: 'AirPods Pro (2ª generación)',
            image: '/images/products/airpods-pro-2.jpg',
            price: '$1.299.000 COP',
            isNew: true
          },
          {
            id: 'airpods-3',
            name: 'AirPods (3ª generación)',
            image: 'https://i.postimg.cc/zBkCGR2X/image.png',
            price: '$999.000 COP'
          },
          {
            id: 'airpods-2',
            name: 'AirPods (2ª generación)',
            image: '/images/products/airpods-2.jpg',
            price: '$799.000 COP'
          },
          {
            id: 'airpods-max',
            name: 'AirPods Max',
            image: '/images/products/airpods-max.jpg',
            price: '$2.999.000 COP'
          }
        ];

      case 'accesorios':
        return [
          {
            id: 'magsafe-charger',
            name: 'Cargador MagSafe',
            image: '/images/products/magsafe-charger.jpg',
            price: '$299.000 COP'
          },
          {
            id: 'airtag',
            name: 'AirTag',
            image: '/images/products/airtag.jpg',
            price: '$149.000 COP'
          },
          {
            id: 'magic-mouse',
            name: 'Magic Mouse',
            image: '/images/products/magic-mouse.jpg',
            price: '$399.000 COP'
          },
          {
            id: 'magic-keyboard',
            name: 'Magic Keyboard',
            image: '/images/products/magic-keyboard.jpg',
            price: '$499.000 COP'
          }
        ];
      case 'promociones':
        return [
          {
            id: 'iphone-13-promo',
            name: 'iPhone 13',
            image: 'https://i.postimg.cc/BbrnWm58/image.png',
            price: '$2.999.000 COP',
            originalPrice: '$3.299.000 COP',
            discount: '$300.000',
            specialOffer: true
          },
          {
            id: 'macbook-air-m1-promo',
            name: 'MacBook Air M1',
            image: 'https://i.postimg.cc/Dz0kgqsR/image.png',
            price: '$3.399.000 COP',
            originalPrice: '$3.999.000 COP',
            discount: '$600.000',
            specialOffer: true
          },
          {
            id: 'apple-watch-se-2-promo',
            name: 'Apple Watch SE',
            image: 'https://i.postimg.cc/X7ssgt87/image.png',
            price: '$1.469.000 COP',
            originalPrice: '$1.699.000 COP',
            discount: '$230.000',
            specialOffer: true
          },
          {
            id: 'airpods-3-promo',
            name: 'AirPods (3ª generación)',
            image: 'https://i.postimg.cc/bJfgJPzL/image.png',
            price: '$799.000 COP',
            originalPrice: '$999.000 COP',
            discount: '$200.000',
            specialOffer: true
          }
        ];
      default:
        return [];
    }
  };

  const products = getProductsByCategory();

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-6 min-w-max px-2">
        {products.map((product) => (
          <div 
            key={product.id}
            className="w-64 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="block" tabIndex={0} aria-label={`Ver detalles de ${product.name}`}>  
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  loading="lazy"
                  tabIndex={0}
                  role="img"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NUEVO
                  </div>
                )}
                {product.specialOffer && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    OFERTA
                  </div>
                )}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
              
              <div className="flex items-center">
                {product.originalPrice ? (
                  <div className="flex flex-col">
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                    <span className="text-red-600 font-bold">{product.price}</span>
                  </div>
                ) : (
                  <span className="font-bold">{product.price}</span>
                )}
                {product.discount && (
                  <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                    Ahorra {product.discount}
                  </span>
                )}
              </div>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const button = e.currentTarget;
                  button.classList.add('scale-95');
                  setTimeout(() => button.classList.remove('scale-95'), 150);
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: parseInt((product.price || '').toString().replace(/\D/g, '')),
                    image: product.image,
                    selectedColor: { name: 'Predeterminado', hex: '#CCCCCC', bgColor: 'white' },
                    selectedStorage: 128,
                    quantity: 1
                  });
                }}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Agregar ${product.name} al carrito`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Agregar al carrito</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
