import React from 'react';

function ServiciosTiendas() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">A tu servicio</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">Servicios y Tiendas</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Descubre nuestras tiendas físicas y los servicios exclusivos que diseñamos para ti.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 max-w-4xl mx-auto">
            {/* Columna de Tiendas */}
            <div className="border-t-2 border-gray-900 pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-8">Nuestras Tiendas</h2>
              <ul className="space-y-8">
                <li className="border-b border-gray-200 pb-6">
                  <p className="font-medium text-gray-900">Calle 82 # 11-75, Local 3-87</p>
                  <p className="text-gray-500 mb-4">Bogotá</p>
                  <div className="text-gray-600">
                    <p className="mb-2">Lunes a Sábado: 10:00 AM - 8:00 PM</p>
                    <p className="mb-2">Domingos: 11:00 AM - 7:00 PM</p>
                    <p>Teléfono: (601) 123-4567</p>
                  </div>
                </li>
                <li className="border-b border-gray-200 pb-6">
                  <p className="font-medium text-gray-900">Av. Carrera 45 # 85-03, Local 1-110</p>
                  <p className="text-gray-500 mb-4">Bogotá</p>
                  <div className="text-gray-600">
                    <p className="mb-2">Lunes a Sábado: 10:00 AM - 9:00 PM</p>
                    <p className="mb-2">Domingos: 11:00 AM - 7:00 PM</p>
                    <p>Teléfono: (601) 987-6543</p>
                  </div>
                </li>
                <li>
                  <p className="font-medium text-gray-900">Carrera 25A # 1A Sur-45, Local 1039</p>
                  <p className="text-gray-500 mb-4">Medellín</p>
                  <div className="text-gray-600">
                    <p className="mb-2">Lunes a Sábado: 10:00 AM - 8:00 PM</p>
                    <p className="mb-2">Domingos: 11:00 AM - 7:00 PM</p>
                    <p>Teléfono: (604) 456-7890</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Columna de Servicios */}
            <div className="border-t-2 border-gray-900 pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-8">Nuestros Servicios</h2>
              <ul className="space-y-8">
                <li className="border-b border-gray-200 pb-6">
                  <p className="font-medium text-gray-900">Servicio Técnico</p>
                  <p className="text-gray-600 mt-4">Reparaciones y diagnósticos realizados por técnicos certificados por Apple. Garantía en todas nuestras reparaciones.</p>
                </li>
                
                <li className="border-b border-gray-200 pb-6">
                  <p className="font-medium text-gray-900">Financiación</p>
                  <p className="text-gray-600 mt-4">Opciones de pago a plazos con nuestros bancos aliados. Hasta 24 meses sin intereses con tarjetas seleccionadas.</p>
                </li>
                
                <li className="border-b border-gray-200 pb-6">
                  <p className="font-medium text-gray-900">Talleres y Eventos</p>
                  <p className="text-gray-600 mt-4">Talleres gratuitos para aprender a sacar el máximo partido a tus dispositivos Apple. Eventos exclusivos para clientes.</p>
                </li>
                
                <li>
                  <p className="font-medium text-gray-900">Programa de Fidelidad</p>
                  <p className="text-gray-600 mt-4">Acumula puntos con cada compra y canjéalos por descuentos en tus próximas adquisiciones.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-20 border-t-2 border-gray-900 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-8">Nuestra ubicación principal</h2>
            <p className="text-gray-600 mb-8">
              Visítanos en nuestra tienda insignia en el Centro Comercial San Andresito del Sur
            </p>
            
            <div className="w-full h-96 overflow-hidden border border-gray-200 mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9385101966234!2d-74.13143072412186!3d4.6066559430621275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9983ed1d9adf%3A0xae348ca8ca3b3be3!2sCentro%20Comercial%20San%20Andresito%20del%20Sur!5e0!3m2!1ses-419!2sco!4v1716651472098!5m2!1ses-419!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación del Centro Comercial San Andresito del Sur"
              ></iframe>
            </div>
            
            <div className="flex justify-center mb-8">
              <a 
                href="https://maps.google.com/?q=Centro+Comercial+San+Andresito+Del+Sur,+Bogotá" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-blue-600 bg-blue-600 text-white font-medium px-8 py-3 rounded-full inline-flex items-center hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Cómo llegar
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default ServiciosTiendas;
