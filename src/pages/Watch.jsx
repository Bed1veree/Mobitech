import React from 'react';
import ProductGrid from '../components/products/ProductGrid';

function Watch() {
  return (
    <main>
      {/* Watch */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          
          <ProductGrid products={[
            {
              id: 'apple-watch-ultra-2',
              brand: 'Apple',
              name: 'Apple Watch Ultra 2',
              description: 'El Apple Watch más resistente y versátil para deportistas y aventureros.',
              price: 4299000,
              image: 'https://i.postimg.cc/yYVqSx1n/image.png',
              colors: [
                { name: 'Titanio Natural', hex: '#E3D0C0', bgColor: 'white' }
              ],
              storage: [32],
              isNew: true,
              isPro: true
            },
            {
              id: 'apple-watch-series-9',
              name: 'Apple Watch Series 9',
              brand: 'Apple',
              description: 'Potente, intuitivo y diseñado para mejorar tu salud y bienestar.',
              price: 2499000,
              image: 'https://i.postimg.cc/SRqgZh3j/image.png',
              colors: [
                { name: 'Aluminio Plata', hex: '#E3E4E5', bgColor: 'white' },
                { name: 'Aluminio Negro', hex: '#1D1D1F', bgColor: 'white' },
                { name: 'Aluminio Oro', hex: '#F4E8CE', bgColor: 'white' },
                { name: 'Aluminio Rojo', hex: '#BA0C2F', bgColor: 'white' }
              ],
              storage: [32],
              isNew: true,
              isPro: false
            },
            {
              id: 'apple-watch-se-2',
              name: 'Apple Watch SE',
              brand: 'Apple',
              description: 'Esencial e inteligente. Todas las funciones clave a un precio más accesible.',
              price: 1699000,
              image: 'https://i.postimg.cc/X7ssgt87/image.png',
              colors: [
                { name: 'Aluminio Plata', hex: '#E3E4E5', bgColor: 'white' },
                { name: 'Aluminio Negro', hex: '#1D1D1F', bgColor: 'white' },
                { name: 'Aluminio Oro', hex: '#F4E8CE', bgColor: 'white' }
              ],
              storage: [32],
              isNew: false,
              isPro: false
            }
          ]} category="Apple Watch" />
          
          <div className="mt-16 bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">¿Por qué elegir Apple Watch?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Monitoreo de salud</h3>
                  <p className="mt-2 text-gray-800">Seguimiento avanzado de frecuencia cardíaca, ECG, oxígeno en sangre y más.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Rendimiento deportivo</h3>
                  <p className="mt-2 text-gray-800">Métricas avanzadas para correr, nadar, ciclismo y muchos otros deportes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Siempre conectado</h3>
                  <p className="mt-2 text-gray-800">Recibe notificaciones, llamadas y mensajes sin necesidad de sacar tu iPhone.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Diseño personalizable</h3>
                  <p className="mt-2 text-gray-800">Múltiples opciones de correas y esferas para adaptarse a tu estilo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Watch;
