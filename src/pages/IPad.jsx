import React from 'react';
import ProductGrid from '../components/products/ProductGrid';

function IPad() {
  return (
    <main>
      {/* iPad */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          
          <ProductGrid products={[
            {
              id: 'ipad-pro',
              brand: 'Apple',
              name: 'iPad Pro',
              description: 'El iPad más potente con chip M2 y pantalla Liquid Retina XDR.',
              price: 4999000,
              image: 'https://i.postimg.cc/FzfM4mGp/image.png',
              colors: [
                { name: 'Gris Espacial', hex: '#86868B', bgColor: 'white' },
                { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' }
              ],
              storage: [128, 256, 512, 1024],
              isNew: true,
              isPro: true
            },
            {
              id: 'ipad-air',
              brand: 'Apple',
              name: 'iPad Air',
              description: 'Potencia y versatilidad en un diseño ultradelgado.',
              price: 3499000,
              image: 'https://i.postimg.cc/KcwX5kvH/image.png',
              colors: [
                { name: 'Gris Espacial', hex: '#86868B', bgColor: 'white' },
                { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' },
                { name: 'Azul', hex: '#7D9AAB', bgColor: 'white' },
                { name: 'Rosa', hex: '#F9D1CF', bgColor: 'white' }
              ],
              storage: [64, 256],
              isNew: false,
              isPro: false
            },
            {
              id: 'ipad-10',
              brand: 'Apple',
              name: 'iPad 10ª generación',
              description: 'El iPad esencial con pantalla edge-to-edge y chip A14 Bionic.',
              price: 2299000,
              image: 'https://i.postimg.cc/x8b4Z5TF/image.png',
              colors: [
                { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' },
                { name: 'Azul', hex: '#7D9AAB', bgColor: 'white' },
                { name: 'Rosa', hex: '#F9D1CF', bgColor: 'white' },
                { name: 'Amarillo', hex: '#F3E3B6', bgColor: 'white' }
              ],
              storage: [64, 256],
              isNew: false,
              isPro: false
            },
            {
              id: 'ipad-mini',
              brand: 'Apple',
              name: 'iPad mini',
              description: 'Potencia y versatilidad en el iPad más portable.',
              price: 2799000,
              image: 'https://i.postimg.cc/CxNSJh2n/image.png',
              colors: [
                { name: 'Gris Espacial', hex: '#86868B', bgColor: 'white' },
                { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' },
                { name: 'Rosa', hex: '#F9D1CF', bgColor: 'white' },
                { name: 'Morado', hex: '#635C6C', bgColor: 'white' }
              ],
              storage: [64, 256],
              isNew: false,
              isPro: false
            }
          ]} category="iPad" />
          
          <div className="mt-16 bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">¿Por qué elegir iPad?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Creatividad sin límites</h3>
                  <p className="mt-2 text-gray-800">Ideal para dibujar, tomar notas y expresar tu creatividad con Apple Pencil.</p>
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
                  <p className="mt-2 text-gray-800">Hasta 10 horas de autonomía para trabajar y disfrutar todo el día.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Pantalla espectacular</h3>
                  <p className="mt-2 text-gray-800">Tecnología Retina y ProMotion para una experiencia visual inmersiva.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Versatilidad total</h3>
                  <p className="mt-2 text-gray-800">Conviértelo en un ordenador portátil con el Magic Keyboard y el trackpad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default IPad;
