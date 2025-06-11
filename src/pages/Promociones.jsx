import React from 'react';
import ProductSlider from '../components/products/ProductSlider';

function Promociones() {
  return (
    <main>
      {/* Promociones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          
          <ProductSlider category="promociones" isPromo={true} />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">Financiamiento 0% interés</h2>
              <p className="mb-6 text-white font-medium">Compra ahora y paga hasta en 24 meses sin intereses con tarjetas seleccionadas.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sin cuota de manejo
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Aprobación inmediata
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Válido para todos los productos
                </li>
              </ul>
              <a href="#" className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300">Ver detalles</a>
            </div>
            
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">Programa de renovación</h2>
              <p className="mb-6 text-white font-medium">Entrega tu dispositivo antiguo y obtén un descuento en tu nueva compra.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Valoración justa de tu dispositivo
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Descuentos de hasta el 30%
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Proceso rápido y sencillo
                </li>
              </ul>
              <a href="#" className="inline-block bg-white text-orange-600 font-medium px-6 py-3 rounded-lg hover:bg-orange-50 transition duration-300">Ver detalles</a>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Ofertas por tiempo limitado</h2>
            <p className="text-gray-700 mb-6 text-center">
              No te pierdas estas promociones exclusivas disponibles por tiempo limitado. ¡Aprovecha ahora!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-center mb-4">
                  <span className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full text-sm">-15%</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-gray-900">AirPods Pro</h3>
                <p className="text-gray-800 text-center mb-4">Descuento especial en AirPods Pro con cancelación de ruido.</p>
                <div className="text-center">
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Ver oferta →</a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-center mb-4">
                  <span className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full text-sm">-20%</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-gray-900">Apple Watch SE</h3>
                <p className="text-gray-800 text-center mb-4">Llévate un Apple Watch SE con un 20% de descuento.</p>
                <div className="text-center">
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Ver oferta →</a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-center mb-4">
                  <span className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full text-sm">2x1</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-gray-900">Fundas iPhone</h3>
                <p className="text-gray-800 text-center mb-4">Lleva dos fundas originales por el precio de una.</p>
                <div className="text-center">
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Ver oferta →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Promociones;
