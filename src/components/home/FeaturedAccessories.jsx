import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedAccessories = () => {
  const accessories = [
    {
      id: 'airpods-pro-2',
      name: 'AirPods Pro 2',
      description: 'Cancelación de ruido adaptativa, modo de sonido ambiente y audio espacial personalizado.',
      price: '$ 1.199.000',
      image: 'https://i.postimg.cc/bJfgJPzL/image.png'
    },
    {
      id: 'magic-mouse',
      name: 'Magic Mouse',
      description: 'Mouse inalámbrico con superficie Multi-Touch.',
      price: '$ 449.900',
      image: 'https://i.postimg.cc/BZYF73dy/image.png'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 font-medium mb-4">PERSONALIZA TU EXPERIENCIA</h3>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Accesorios destacados</h2>
          <p className="text-gray-600 text-lg">Complementos indispensables para tus dispositivos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-64 flex items-center justify-center p-6 bg-gray-50">
                <img 
                  src={accessory.image} 
                  alt={accessory.name} 
                  className="h-full object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">{accessory.name}</h3>
                <p className="text-gray-600 mb-4">{accessory.description}</p>
                <div className="font-bold text-xl mb-6 text-gray-900">{accessory.price}</div>
                
                <div className="flex flex-col space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-300">
                    Comprar
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 rounded-lg transition-all duration-300">
                    Más información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/accesorios" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            Ver todos los accesorios
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAccessories;
