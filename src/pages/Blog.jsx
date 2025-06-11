import React from 'react';

function Blog() {
  return (
    <main>
      {/* Blog */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nuestro Blog</h1>
            <p className="text-lg text-gray-800">Mantente al día con las últimas noticias, consejos y análisis del mundo Apple.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img src="/images/blog/ios-18.jpg" alt="iOS 18" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Noticias</span>
                  <span className="text-gray-500 text-sm ml-auto">Mayo 20, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Descubre las novedades de iOS 18</h3>
                <p className="text-gray-800 mb-4">Apple Intelligence llega a iOS 18 con funciones revolucionarias que transformarán la forma en que usas tu iPhone.</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img src="/images/blog/iphone-vs-samsung.jpg" alt="iPhone vs Samsung" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Comparativas</span>
                  <span className="text-gray-500 text-sm ml-auto">Mayo 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">iPhone 16 Pro vs Samsung Galaxy S25</h3>
                <p className="text-gray-800 mb-4">¿Cuál es el mejor smartphone premium del mercado? Analizamos a fondo las diferencias entre estos dos titanes.</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img src="/images/blog/macbook-tips.jpg" alt="MacBook Tips" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Consejos</span>
                  <span className="text-gray-500 text-sm ml-auto">Mayo 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cómo sacar el máximo partido a tu MacBook</h3>
                <p className="text-gray-800 mb-4">Trucos y consejos para optimizar el rendimiento y la duración de la batería de tu MacBook.</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img src="/images/blog/apple-vision-pro.jpg" alt="Apple Vision Pro" className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Análisis</span>
                  <span className="text-gray-500 text-sm ml-auto">Mayo 5, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Apple Vision Pro: El futuro de la computación espacial</h3>
                <p className="text-gray-800 mb-4">Analizamos en profundidad el revolucionario dispositivo de realidad mixta de Apple y sus aplicaciones prácticas.</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img src="/images/blog/apple-intelligence.jpg" alt="Apple Intelligence" className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Tecnología</span>
                  <span className="text-gray-500 text-sm ml-auto">Mayo 1, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Apple Intelligence: La IA que respeta tu privacidad</h3>
                <p className="text-gray-800 mb-4">Exploramos cómo Apple ha logrado implementar funciones avanzadas de IA manteniendo la privacidad como prioridad.</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Suscríbete a nuestro newsletter</h2>
            <p className="text-gray-800 mb-6 text-center">
              Recibe las últimas noticias, ofertas exclusivas y consejos directamente en tu bandeja de entrada.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
