import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      rating: 5,
      comment: "El iPhone 16 Pro Max superó todas mis expectativas. La calidad de la cámara es increíble.",
      product: "iPhone 16 Pro Max",
      verified: true
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Excelente servicio y productos originales. Mi Apple Watch Ultra 2 llegó perfectamente.",
      product: "Apple Watch Ultra 2",
      verified: true
    },
    {
      id: 3,
      name: "Ana Martínez",
      rating: 5,
      comment: "La mejor tienda de Apple en línea. Entrega rápida y atención al cliente excepcional.",
      product: "iPhone 15 Pro",
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-base sm:text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Miles de clientes satisfechos confían en nosotros para sus productos Apple
          </p>
        </div>

        {/* Grid responsive: 1 columna en móvil, 2 en tablet, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start sm:items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3 sm:ml-4 flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center flex-wrap gap-2">
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                    {testimonial.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        Verificado
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                "{testimonial.comment}"
              </p>
              
              <div className="text-xs sm:text-sm text-gray-500">
                Producto: <span className="font-medium text-gray-700">{testimonial.product}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas responsive */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 text-gray-600">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">4.9</div>
              <div className="text-xs sm:text-sm text-gray-500">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">15,000+</div>
              <div className="text-xs sm:text-sm text-gray-500">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">99%</div>
              <div className="text-xs sm:text-sm text-gray-500">Recomendarían</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

