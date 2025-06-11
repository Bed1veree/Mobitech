import React from 'react';
import ProductGrid from '../components/products/ProductGrid';

function Accesorios() {
  return (
    <main>
      {/* Accesorios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          
          <ProductGrid products={[
            {
              id: 'magsafe-charger',
              brand: 'Apple',
              name: 'Cargador MagSafe',
              description: 'Carga rápida inalámbrica con alineación magnética perfecta.',
              price: 299000,
              image: 'https://i.postimg.cc/FRhS8HFt/image.png',
              colors: [
                { name: 'Blanco', hex: '#FFFFFF', bgColor: 'white' }
              ],
              storage: [1],
              isNew: false,
              isPro: false
            },
            {
              id: 'airtag',
              brand: 'Apple',
              name: 'AirTag',
              description: 'Localiza tus objetos personales con precisión usando la red Encontrar.',
              price: 149000,
              image: 'https://i.postimg.cc/3NcDkjX7/image.png',
              colors: [
                { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' }
              ],
              storage: [1],
              isNew: false,
              isPro: false
            },
            {
              id: 'magic-mouse',
              brand: 'Apple',
              name: 'Magic Mouse',
              description: 'Ratón inalámbrico recargable con superficie Multi-Touch.',
              price: 399000,
              image: 'https://i.postimg.cc/BZYF73dy/image.png',
              colors: [
                { name: 'Blanco', hex: '#FFFFFF', bgColor: 'white' },
                { name: 'Negro', hex: '#1D1D1F', bgColor: 'white' }
              ],
              storage: [1],
              isNew: false,
              isPro: false
            },
            {
              id: 'magic-keyboard',
              brand: 'Apple',
              name: 'Magic Keyboard',
              description: 'Teclado inalámbrico con diseño compacto y batería recargable.',
              price: 499000,
              image: 'https://i.postimg.cc/FsYL2qvK/image.png',
              colors: [
                { name: 'Blanco', hex: '#FFFFFF', bgColor: 'white' },
                { name: 'Negro', hex: '#1D1D1F', bgColor: 'white' }
              ],
              storage: [1],
              isNew: false,
              isPro: false
            }
          ]} category="Accesorios" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fundas y Protectores</h3>
              <p className="text-gray-800">Protege tu dispositivo con estilo usando nuestras fundas de alta calidad.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cargadores y Cables</h3>
              <p className="text-gray-800">Mantén tus dispositivos con energía usando accesorios de carga originales.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Teclados y Ratones</h3>
              <p className="text-gray-800">Mejora tu productividad con accesorios de entrada diseñados para Mac.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Accesorios Originales Apple</h2>
            <p className="text-gray-800 mb-6 text-center font-medium">
              Todos nuestros accesorios son originales y cuentan con garantía oficial de Apple. Diseñados específicamente para funcionar a la perfección con tus dispositivos, asegurando la mejor experiencia de usuario y protegiendo la integridad de tus equipos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Garantía de calidad</h3>
                  <p className="mt-2 text-gray-800">Todos los accesorios cuentan con la misma calidad y atención al detalle que los dispositivos Apple.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Rendimiento óptimo</h3>
                  <p className="mt-2 text-gray-800">Diseñados para funcionar perfectamente con tus dispositivos Apple, maximizando su potencial.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accesorios;
