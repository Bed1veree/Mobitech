// Estructura de datos de productos con IDs exactos

const products = {
  iphone: [
    {
      id: 'iphone-16-pro-max',
      category: 'iphone',
      brand: 'Apple',
      name: 'iPhone 16 Pro Max',
      description: 'Tecnología avanzada. Diseño innovador. Rendimiento extraordinario.',
      price: 6999000,
      image: 'https://i.postimg.cc/dVsqvnZs/image.png',
      stock: 8,
      isNew: true,
      isPro: true,
      envioGratis: true,
      garantia: true,
      colors: [
        { name: 'Titanio Natural', hex: '#D6CEC3' },
        { name: 'Negro', hex: '#000000' },
        { name: 'Blanco', hex: '#F7F7F7' },
        { name: 'Gris', hex: '#676660' }
      ],
      storage: [256, 512, 1024],
      features: [
        'Pantalla Super Retina XDR de 6.9 pulgadas',
        'Chip A18 Pro con CPU de 8 núcleos',
        'Sistema de cámara Pro avanzado: Principal de 48MP, Ultra gran angular mejorado, Teleobjetivo con zoom óptico 5x',
        'Grabación de video en 8K a 60 fps',
        'Autonomía de hasta 32 horas de reproducción de video',
        'Nuevo modo Acción Espacial'
      ],
      specs: {
        Pantalla: 'Super Retina XDR de 6.9 pulgadas',
        Resolución: '2796 × 1290 píxeles a 460 ppi',
        Chip: 'A18 Pro con Neural Engine',
        Cámara: 'Sistema de cámara Pro de 48MP',
        Frontal: 'Cámara TrueDepth de 12MP',
        Video: '8K a 60 fps',
        Batería: 'Hasta 32 horas de reproducción de video',
        Resistencia: 'IP68 (6 metros hasta 30 minutos)',
        Conectividad: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC'
      }
    },
    {
      id: 'iphone-16',  // ID exacto para la URL iphone-16
      category: 'iphone',
      brand: 'Apple',
      name: 'iPhone 16',
      description: 'El iPhone más accesible con toda la potencia que necesitas.',
      price: 4999000,
      image: 'https://i.postimg.cc/Kz1Hzg8z/iphone15.jpg',
      stock: 15,
      isNew: true,
      isPro: false,
      envioGratis: true,
      garantia: true,
      colors: [
        { name: 'Negro', hex: '#1F2120' },
        { name: 'Azul', hex: '#AFC8D0' },
        { name: 'Verde', hex: '#D0E0D3' }
      ],
      storage: [128, 256],
      features: [
        'Pantalla Super Retina XDR de 6.1 pulgadas',
        'Chip A17 con CPU de 6 núcleos',
        'Sistema de cámara dual de 48MP',
        'Grabación de video en 4K a 60 fps',
        'Autonomía de hasta 20 horas de reproducción de video'
      ],
      specs: {
        Pantalla: 'Super Retina XDR de 6.1 pulgadas',
        Resolución: '2556 × 1179 píxeles a 460 ppi',
        Chip: 'A17 con Neural Engine',
        Cámara: 'Sistema de cámara dual de 48MP',
        Frontal: 'Cámara TrueDepth de 12MP',
        Video: '4K a 60 fps',
        Batería: 'Hasta 20 horas de reproducción de video',
        Resistencia: 'IP68 (6 metros hasta 30 minutos)',
        Conectividad: '5G, Wi-Fi 6, Bluetooth 5.3, NFC'
      }
    },
    {
      id: 'iphone-15-pro',
      category: 'iphone',
      brand: 'Apple',
      name: 'iPhone 15 Pro',
      description: 'El iPhone 15 Pro, potencia profesional en la palma de tu mano.',
      price: 6199000,
      image: '/images/products/iphone-15-pro-max.png',
      stock: 10,
      isNew: true,
      isPro: true,
      envioGratis: true,
      garantia: true,
      colors: [
        { name: 'Negro', hex: '#000000' },
        { name: 'Blanco', hex: '#F7F7F7' }
      ],
      storage: [128, 256, 512],
      features: [
        'Pantalla Super Retina XDR de 6.1 pulgadas',
        'Chip A17 Pro',
        'Sistema de cámara Pro de 48MP',
        'Video 4K a 60 fps'
      ],
      specs: {
        Pantalla: 'Super Retina XDR de 6.1 pulgadas',
        Resolución: '2556 × 1179 píxeles a 460 ppi',
        Chip: 'A17 Pro con Neural Engine',
        Cámara: 'Sistema de cámara Pro de 48MP',
        Frontal: 'Cámara TrueDepth de 12MP',
        Video: '4K a 60 fps',
        Batería: 'Hasta 23 horas de reproducción de video',
        Resistencia: 'IP68 (6 metros hasta 30 minutos)',
        Conectividad: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC'
      }
    },
    {
      id: 'iphone-16-e',
      category: 'iphone',
      brand: 'Apple',
      name: 'iPhone 16e',
      description: 'El iPhone más accesible con toda la potencia que necesitas.',
      price: 4999000,
      image: 'https://i.postimg.cc/Kz1Hzg8z/iphone15.jpg',
      stock: 15,
      isNew: true,
      isPro: false,
      envioGratis: true,
      garantia: true,
      colors: [
        { name: 'Negro', hex: '#1F2120' },
        { name: 'Azul', hex: '#AFC8D0' },
        { name: 'Verde', hex: '#D0E0D3' }
      ],
      storage: [128, 256],
      features: [
        'Pantalla Super Retina XDR de 6.1 pulgadas',
        'Chip A17 con CPU de 6 núcleos',
        'Sistema de cámara dual de 48MP',
        'Grabación de video en 4K a 60 fps',
        'Autonomía de hasta 20 horas de reproducción de video'
      ],
      specs: {
        Pantalla: 'Super Retina XDR de 6.1 pulgadas',
        Resolución: '2556 × 1179 píxeles a 460 ppi',
        Chip: 'A17 con Neural Engine',
        Cámara: 'Sistema de cámara dual de 48MP',
        Frontal: 'Cámara TrueDepth de 12MP',
        Video: '4K a 60 fps',
        Batería: 'Hasta 20 horas de reproducción de video',
        Resistencia: 'IP68 (6 metros hasta 30 minutos)',
        Conectividad: '5G, Wi-Fi 6, Bluetooth 5.3, NFC'
      }
    }
  ],
  mac: [
    {
      id: 'macbook-pro-16',
      category: 'mac',
      brand: 'Apple',
      name: 'MacBook Pro 16"',
      description: 'Potencia y rendimiento extraordinarios para profesionales.',
      price: 12999000,
      image: 'https://i.postimg.cc/L8zxQBhS/macbookpro16.jpg',
      stock: 5,
      isNew: true,
      isPro: true,
      envioGratis: true,
      garantia: true,
      colors: [
        { name: 'Gris espacial', hex: '#2E3641' },
        { name: 'Plata', hex: '#E3E4E5' }
      ],
      storage: [512, 1024, 2048, 4096],
      features: [
        'Chip M3 Pro o M3 Max',
        'Pantalla Liquid Retina XDR de 16 pulgadas',
        'Hasta 36 núcleos de GPU',
        'Hasta 96 GB de memoria unificada',
        'Hasta 22 horas de autonomía'
      ],
      specs: {
        Pantalla: 'Liquid Retina XDR de 16 pulgadas',
        Resolución: '3456 x 2234 píxeles a 254 ppi',
        Chip: 'M3 Pro o M3 Max',
        Memoria: 'Hasta 96 GB de memoria unificada',
        Almacenamiento: 'Hasta 8 TB de SSD',
        Batería: 'Hasta 22 horas de reproducción de video'
      }
    }
  ],
  accesorios: [],
  promociones: [
    {
      id: 'iphone-13-promo',
      category: 'promociones',
      brand: 'Apple',
      name: 'iPhone 13 (Promoción)',
      description: 'Promoción especial por tiempo limitado.',
      price: 2999000,
      originalPrice: 3299000,
      image: 'https://i.postimg.cc/BbrnWm58/image.png',
      stock: 7,
      isNew: false,
      envioGratis: true,
      garantia: true,
      features: ['Pantalla Super Retina XDR', 'Chip A15 Bionic'],
      specs: {
        Pantalla: 'Super Retina XDR',
        Chip: 'A15 Bionic'
      },
      specialOffer: true
    }
  ],
  blog: [
    {
      id: 'blog-beneficios-apple',
      category: 'blog',
      title: 'Beneficios de comprar productos Apple originales',
      summary: 'Descubre por qué elegir productos originales marca la diferencia.',
      image: '/images/blog/beneficios-apple.jpg',
      content: 'Comprar productos Apple originales garantiza calidad, soporte y acceso a todas las funciones del ecosistema Apple.',
      date: '2025-06-06'
    }
  ],
  servicios: [
    {
      id: 'financiamiento-apple',
      category: 'servicios',
      name: 'Financiamiento Apple',
      description: 'Compra tus productos Apple y págalo en cuotas.',
      image: '/images/services/financiamiento.jpg',
      details: 'Hasta 24 cuotas sin interés con bancos aliados.',
      beneficios: ['Sin cuota inicial', 'Aprobación inmediata']
    }
  ],
  beneficios: [
    {
      id: 'beneficio-envio-gratis',
      category: 'beneficios',
      name: 'Envío gratis',
      description: 'Recibe tus productos Apple sin costo de envío en compras seleccionadas.',
      image: '/images/benefits/envio-gratis.jpg',
      detalles: 'Disponible para compras superiores a $1.000.000 COP.'
    }
  ],
  ipad: [
    {
      id: 'ipad-pro-13',
      category: 'ipad',
      brand: 'Apple',
      name: 'iPad Pro 13"',
      description: 'El iPad más potente con pantalla Liquid Retina XDR.',
      price: 7999000,
      image: 'https://i.postimg.cc/L8QSdSsT/ipadpro13.jpg',
      stock: 10,
      isNew: true,
      isPro: true,
      envioGratis: true,
      garantia: true,
      colors: [
        { name: 'Gris espacial', hex: '#2E3641' },
        { name: 'Plata', hex: '#E3E4E5' }
      ],
      storage: [256, 512, 1024, 2048],
      features: [
        'Chip M2 con CPU de 8 núcleos',
        'Pantalla Liquid Retina XDR de 13 pulgadas',
        'Cámara gran angular de 12 MP',
        'Face ID para autenticación segura',
        'Compatible con Apple Pencil y Magic Keyboard'
      ],
      specs: {
        Pantalla: 'Liquid Retina XDR de 13 pulgadas',
        Resolución: '2732 x 2048 píxeles a 264 ppi',
        Chip: 'M2 con CPU de 8 núcleos',
        Cámara: 'Gran angular de 12 MP',
        Frontal: 'Ultra gran angular de 12 MP',
        Batería: 'Hasta 10 horas de navegación web'
      }
    }
  ],
  watch: [
    {
      id: 'apple-watch-series-9',
      category: 'watch',
      brand: 'Apple',
      name: 'Apple Watch Series 9',
      description: 'Más potente e inteligente que nunca.',
      price: 2499000,
      image: 'https://i.postimg.cc/L8K7MZpT/watchseries9.jpg',
      stock: 15,
      isNew: true,
      isPro: false,
      envioGratis: true,
      garantia: true,
      colors: [
        { name: 'Medianoche', hex: '#1D1D1F' },
        { name: 'Estelar', hex: '#F0E8DD' },
        { name: 'Rojo', hex: '#A12226' },
        { name: 'Azul', hex: '#215E7C' }
      ],
      sizes: [41, 45], 
      features: [
        'Pantalla Retina siempre activa',
        'Chip S9 con CPU de doble núcleo',
        'Sensor de temperatura',
        'Detección de caídas y accidentes',
        'Resistente al agua hasta 50 metros'
      ],
      specs: {
        Pantalla: 'Retina LTPO OLED siempre activa',
        Chip: 'S9 con CPU de doble núcleo',
        Sensores: 'Oxígeno en sangre, ECG, temperatura',
        Batería: 'Hasta 18 horas de uso normal',
        Resistencia: 'Resistente al agua hasta 50 metros'
      }
    }
  ],
  airpods: [
    {
      id: 'airpods-pro-2',
      category: 'airpods',
      brand: 'Apple',
      name: 'AirPods Pro 2',
      description: 'Cancelación de ruido adaptativa y audio espacial personalizado.',
      price: 1299000,
      image: 'https://i.postimg.cc/L8B2Jd7S/airpodspro2.jpg',
      stock: 20,
      isNew: true,
      isPro: true,
      envioGratis: true,
      garantia: true,
      features: [
        'Cancelación activa de ruido',
        'Modo de transparencia adaptativa',
        'Audio espacial personalizado',
        'Resistentes al sudor y al agua',
        'Hasta 6 horas de escucha con una sola carga'
      ],
      specs: {
        Chip: 'H2 de Apple',
        Audio: 'Audio espacial personalizado con seguimiento dinámico de la cabeza',
        Batería: 'Hasta 6 horas de escucha con una sola carga',
        Carga: 'Estuche de carga con conector USB-C',
        Resistencia: 'Resistentes al sudor y al agua (IPX4)'
      }
    }
  ]
};

export default products;
