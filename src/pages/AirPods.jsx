import React from 'react';
import ProductGrid from '../components/products/ProductGrid';

function AirPods() {
  return (
    <main>
      {/* AirPods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          
          <ProductGrid products={[
            {
              id: 'airpods-pro-2',
              brand: 'Apple',
              name: 'AirPods Pro (2ª generación)',
              description: 'Cancelación activa de ruido, audio espacial y resistencia al agua.',
              price: 1299000,
              image: 'https://i.postimg.cc/bJfgJPzL/image.png',
              colors: [
                { name: 'Blanco', hex: '#FFFFFF', bgColor: 'white' }
              ],
              storage: [1],
              isNew: true,
              isPro: true
            },
            {
              id: 'airpods-3',
              brand: 'Apple',
              name: 'AirPods (3ª generación)',
              description: 'Diseño elegante, audio espacial y resistencia al sudor.',
              price: 999000,
              image: 'https://i.postimg.cc/zBkCGR2X/image.png',
              colors: [
                { name: 'Blanco', hex: '#FFFFFF', bgColor: 'white' }
              ],
              storage: [1],
              isNew: false,
              isPro: false
            },
            {
              id: 'airpods-2',
              brand: 'Apple',
              name: 'AirPods (2ª generación)',
              description: 'Configuración sencilla, conexión instantánea y batería duradera.',
              price: 799000,
              image: 'https://i.postimg.cc/NGp8hmrd/image.jpg',
              colors: [
                { name: 'Blanco', hex: '#FFFFFF', bgColor: 'white' }
              ],
              storage: [1],
              isNew: false,
              isPro: false
            },
            {
              id: 'airpods-max',
              brand: 'Apple',
              name: 'AirPods Max',
              description: 'Cancelación activa de ruido, audio espacial y diseño premium over-ear.',
              price: 2999000,
              image: 'https://i.postimg.cc/N0qm8xWj/image.png',
              colors: [
                { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' },
                { name: 'Gris Espacial', hex: '#86868B', bgColor: 'white' },
                { name: 'Verde', hex: '#AEC2B1', bgColor: 'white' },
                { name: 'Azul', hex: '#7D9AAB', bgColor: 'white' },
                { name: 'Rosa', hex: '#F9D1CF', bgColor: 'white' }
              ],
              storage: [1],
              isNew: false,
              isPro: true
            }
          ]} category="AirPods" />
          
          <div className="mt-16 bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">¿Por qué elegir AirPods?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Calidad de sonido excepcional</h3>
                  <p className="mt-2 text-gray-800">Audio espacial con seguimiento dinámico de la cabeza para una experiencia inmersiva.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Cancelación activa de ruido</h3>
                  <p className="mt-2 text-gray-800">Aíslate del mundo exterior o manténte conectado con el modo de transparencia.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Conexión instantánea</h3>
                  <p className="mt-2 text-gray-800">Emparejamiento automático con todos tus dispositivos Apple.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Batería de larga duración</h3>
                  <p className="mt-2 text-gray-800">Hasta 6 horas de escucha con una sola carga y más de 30 horas con el estuche.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AirPods;
