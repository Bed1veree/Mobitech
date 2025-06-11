import React from 'react';

function Beneficios() {
  return (
    <main>
      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Beneficios Exclusivos</h1>
            <p className="text-lg text-gray-800">Descubre todas las ventajas de comprar en nuestra tienda oficial Apple Premium Reseller.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6 text-blue-600">💳</div>
              <div className="inline-block py-2 px-3 rounded bg-white mb-4">
                <h3 className="text-xl font-black text-black">Financiamiento 0% de interés</h3>
              </div>
              <p className="text-gray-900 font-medium">Compra tus productos Apple favoritos y págalos hasta en 24 meses sin intereses con tarjetas seleccionadas.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6 text-blue-600">🚚</div>
              <div className="inline-block py-2 px-3 rounded bg-white mb-4">
                <h3 className="text-xl font-black text-black">Envío gratuito</h3>
              </div>
              <p className="text-gray-900 font-medium">Recibe tus compras sin costo adicional en todo el territorio nacional en pedidos superiores a $500.000.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6 text-blue-600">🏆</div>
              <div className="inline-block py-2 px-3 rounded bg-white mb-4">
                <h3 className="text-xl font-black text-black">Programa de fidelidad</h3>
              </div>
              <p className="text-gray-900 font-medium">Acumula puntos con cada compra y canjéalos por descuentos exclusivos en tus próximas adquisiciones.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Garantía oficial Apple</h2>
              <p className="mb-6 text-white">Todos nuestros productos cuentan con garantía oficial de Apple, respaldada por nuestro servicio técnico autorizado.</p>
              <ul className="space-y-4">
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1 año de garantía en todos los productos
                </li>
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Posibilidad de extender la garantía con AppleCare+
                </li>
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Soporte técnico especializado
                </li>
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reparaciones con piezas originales
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Experiencia premium</h2>
              <p className="mb-6 text-white">Como Apple Premium Reseller, ofrecemos una experiencia de compra exclusiva con beneficios adicionales.</p>
              <ul className="space-y-4">
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personal altamente capacitado
                </li>
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Asesoramiento personalizado
                </li>
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Eventos exclusivos para clientes
                </li>
                <li className="flex items-center text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Acceso prioritario a nuevos lanzamientos
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black">Horario extendido</h3>
              </div>
              <p className="text-gray-800">Nuestras tiendas cuentan con horarios extendidos para tu comodidad, incluyendo fines de semana y festivos.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black">Talleres gratuitos</h3>
              </div>
              <p className="text-gray-800">Participa en nuestros talleres gratuitos para aprender a sacar el máximo partido a tus dispositivos Apple.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black">Descuentos exclusivos</h3>
              </div>
              <p className="text-gray-800">Accede a promociones y descuentos exclusivos para clientes registrados en nuestro programa de fidelidad.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Beneficios;
