import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  // Datos de categorías
  const categories = [
    {
      id: 'iphone',
      name: 'iPhone',
      image: 'https://i.postimg.cc/dVsqvnZs/image.png',
      link: '/iphone'
    },
    {
      id: 'ipad',
      name: 'iPad',
      image: 'https://i.postimg.cc/FzfM4mGp/image.png',
      link: '/ipad'
    },
    {
      id: 'mac',
      name: 'Mac',
      image: 'https://i.postimg.cc/wB4H8Wg6/image.png',
      link: '/mac'
    },
    {
      id: 'watch',
      name: 'Watch',
      image: 'https://i.postimg.cc/yYVqSx1n/image.png',
      link: '/watch'
    },
    {
      id: 'airpods',
      name: 'AirPods',
      image: 'https://i.postimg.cc/bJfgJPzL/image.png',
      link: '/airpods'
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Grid responsive: 2 columnas en móvil, 3 en tablet, 5 en desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={category.link}
            className="group block"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col min-h-[180px] sm:min-h-[200px]">
              {/* Contenedor de imagen responsive */}
              <div className="h-32 sm:h-40 flex items-center justify-center overflow-hidden bg-white flex-grow p-3 sm:p-4">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="h-full w-full object-contain transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Texto de categoría */}
              <div className="p-3 sm:p-4 text-center bg-white">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg tracking-wide leading-tight">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;

