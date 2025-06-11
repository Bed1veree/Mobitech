import React from 'react';

const FeatureSection = () => {
  // Características destacadas
  const features = [
    {
      id: 'garantia',
      image: 'https://i.postimg.cc/QC8jnPz1/garantia.png',
      title: 'Garantía Oficial',
      description: 'Todos nuestros productos cuentan con garantía oficial de Apple en Colombia.'
    },
    {
      id: 'envio',
      image: 'https://i.postimg.cc/Dy2Z1LS4/envio.png',
      title: 'Envío Rápido',
      description: 'Recibe tu pedido en 24-48 horas en las principales ciudades del país.'
    },
    {
      id: 'pago',
      image: 'https://i.postimg.cc/gkq33TkF/pagos.png',
      title: 'Pago Seguro',
      description: 'Múltiples opciones de pago seguro: tarjetas, PSE, efectivo y más.'
    },
    {
      id: 'soporte',
      image: 'https://i.postimg.cc/mDQVzvB5/soporte.png',
      title: 'Soporte Técnico',
      description: 'Servicio técnico especializado para todos tus dispositivos Apple.'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 py-2">¿Por qué elegirnos?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-black/10">
            <div className="h-20 mb-6 flex items-center justify-center">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="h-16 object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-wide">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
