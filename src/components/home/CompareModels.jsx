import React from 'react';

const CompareModels = () => {
  const models = [
    {
      id: 'iphone-16-pro-max',
      name: 'iPhone 16 Pro Max',
      image: 'https://i.postimg.cc/dVsqvnZs/image.png',
      price: '$ 6.999.000',
      screen: '6.1 pulgadas',
      chip: 'A17 Pro',
      camera: '48MP',
      battery: 'Hasta 28 horas de video',
      isPro: true
    },
    {
      id: 'iphone-15-pro-max',
      name: 'iPhone 15 Pro Max',
      image: 'https://i.postimg.cc/9XTbvrYS/image.png',
      price: '$ 6.199.000',
      screen: '6.7 pulgadas',
      chip: 'A17 Pro',
      camera: '48MP',
      battery: 'Hasta 25 horas de video',
      isPro: true
    },
    {
      id: 'iphone-15-pro',
      name: 'iPhone 15 Pro',
      image: '/images/products/iphone/iphone-15-pro.png',
      price: '$ 5.199.000',
      screen: '6.1 pulgadas',
      chip: 'A17 Pro',
      camera: '48MP',
      battery: 'Hasta 26 horas de video',
      isPro: true
    },
    {
      id: 'iphone-15-plus',
      name: 'iPhone 15 Plus',
      image: 'https://i.postimg.cc/Kcqch8cP/image.png',
      price: '$ 4.699.000',
      screen: '6.7 pulgadas',
      chip: 'A16 Bionic',
      camera: '48MP',
      battery: 'Hasta 28 horas de video',
      isPro: false
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 font-medium mb-4">ENCUENTRA TU IPHONE IDEAL</h3>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Compara modelos</h2>
          <p className="text-gray-600 text-lg">Selecciona el iPhone perfecto para ti</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {models.map((model) => (
            <div key={model.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="h-full object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{model.name}</h3>
                    <div className="font-bold text-xl mt-1 text-gray-900">{model.price}</div>
                  </div>
                  {model.isPro && (
                    <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-md">
                      PRO
                    </span>
                  )}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Pantalla</div>
                      <div className="font-medium text-gray-900">{model.screen}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Chip</div>
                      <div className="font-medium text-gray-900">{model.chip}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Cámara</div>
                      <div className="font-medium text-gray-900">{model.camera}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Batería</div>
                      <div className="font-medium text-gray-900">{model.battery}</div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-300">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareModels;
