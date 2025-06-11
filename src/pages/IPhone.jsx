import React from 'react';
import ProductGrid from '../components/products/ProductGrid';

// Datos de ejemplo para iPhone
const iPhoneProducts = [
  {
    id: 'iphone-16-pro-max',
    brand: 'Apple',
    name: 'iPhone 16 Pro Max',
    description: 'Tecnología avanzada con el nuevo chip A18 Pro y cámara revolucionaria.',
    price: 6999000,
    image: 'https://i.postimg.cc/dVsqvnZs/image.png',
    colors: [
      { name: 'Titanio Natural', hex: '#E3D0C0', bgColor: 'gray-100' },
      { name: 'Titanio Negro', hex: '#1F2020', bgColor: 'gray-100' },
      { name: 'Titanio Blanco', hex: '#F5F5F0', bgColor: 'gray-100' }
    ],
    storage: [256, 512, 1024],
    isNew: true,
    isPro: true
  },
  {
    id: 'iphone-16',
    brand: 'Apple',
    name: 'iPhone 16',
    description: 'El nuevo estándar en rendimiento con chip A18 y Dynamic Island.',
    price: 5499000,
    image: 'https://i.postimg.cc/44hFQCZT/image.png',
    colors: [
      { name: 'Negro', hex: '#1F2020', bgColor: 'gray-100' },
      { name: 'Blanco', hex: '#F5F5F0', bgColor: 'gray-100' },
      { name: 'Gris', hex: '#5c5c5c', bgColor: 'gray-100' }
    ],
    storage: [128, 256, 512],
    isNew: true,
    isPro: false
  },
  {
    id: 'iphone-16-e',
    brand: 'Apple',
    name: 'iPhone 16 e',
    description: 'Diseño elegante con toda la potencia que necesitas en tu día a día.',
    price: 4999000,
    image: 'https://i.postimg.cc/sDY6bpv6/image.png',
    colors: [
      { name: 'Negro', hex: '#1F2020', bgColor: 'gray-100' },
      { name: 'Blanco', hex: '#F5F5F0', bgColor: 'gray-100' },
      { name: 'Gris', hex: '#5c5c5c', bgColor: 'gray-100' }
    ],
    storage: [128, 256],
    isNew: true,
    isPro: false
  },
  {
    id: 'iphone-15-pro-max',
    brand: 'Apple',
    name: 'iPhone 15 Pro Max',
    description: 'El iPhone más avanzado con cámara ProRAW de 48MP y chip A17 Pro.',
    price: 6199000,
    image: 'https://i.postimg.cc/9XTbvrYS/image.png',
    colors: [
      { name: 'Titanio Natural', hex: '#E3D0C0', bgColor: 'orange-50' },
      { name: 'Titanio Negro', hex: '#1F2020', bgColor: 'orange-50' },
      { name: 'Titanio Blanco', hex: '#F5F5F0', bgColor: 'orange-50' }
    ],
    storage: [128, 256, 512, 1024],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-15-pro',
    brand: 'Apple',
    name: 'iPhone 15 Pro',
    description: 'Potencia profesional con titanio resistente y el revolucionario botón de acción.',
    price: 5199000,
    image: '/images/products/iphone/iphone-15-pro.png',
    colors: [
      { name: 'Titanio Azul', hex: '#394F64', bgColor: 'green-50' },
      { name: 'Titanio Negro', hex: '#1F2020', bgColor: 'green-50' },
      { name: 'Titanio Natural', hex: '#E3D0C0', bgColor: 'green-50' }
    ],
    storage: [128, 256, 512, 1024],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-15',
    brand: 'Apple',
    name: 'iPhone 15',
    description: 'Una nueva era para el iPhone con Dynamic Island y cámara de 48MP.',
    price: 4199000,
    image: 'https://i.postimg.cc/Zn2hB00X/image.png',
    colors: [
      { name: 'Azul', hex: '#7BA1B6', bgColor: 'blue-50' },
      { name: 'Rosa', hex: '#F9D1CF', bgColor: 'blue-50' },
      { name: 'Amarillo', hex: '#F3E3B6', bgColor: 'blue-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: false
  },
  {
    id: 'iphone-15-plus',
    brand: 'Apple',
    name: 'iPhone 15 Plus',
    description: 'Pantalla grande, batería enorme y potente cámara de 48MP.',
    price: 4699000,
    image: 'https://i.postimg.cc/Kcqch8cP/image.png',
    colors: [
      { name: 'Verde', hex: '#AEC2B1', bgColor: 'red-50' },
      { name: 'Rosa', hex: '#F9D1CF', bgColor: 'red-50' },
      { name: 'Amarillo', hex: '#F3E3B6', bgColor: 'red-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: false
  },
  {
    id: 'iphone-14-pro-max',
    brand: 'Apple',
    name: 'iPhone 14 Pro Max',
    description: 'El iPhone más avanzado con la tecnología Dynamic Island.',
    price: 5299000,
    image: 'https://i.postimg.cc/tJ2YL3SW/image.png',
    colors: [
      { name: 'Morado Oscuro', hex: '#635C6C', bgColor: 'green-50' },
      { name: 'Plata', hex: '#F5F5F0', bgColor: 'green-50' },
      { name: 'Oro', hex: '#F4E8CE', bgColor: 'green-50' }
    ],
    storage: [128, 256, 512, 1024],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-14-pro',
    brand: 'Apple',
    name: 'iPhone 14 Pro',
    description: 'Potencia y rendimiento profesional con pantalla siempre activa.',
    price: 4999000,
    image: 'https://i.postimg.cc/j2VcF5KY/image.png',
    colors: [
      { name: 'Morado Oscuro', hex: '#635C6C', bgColor: 'green-50' },
      { name: 'Plata', hex: '#F5F5F0', bgColor: 'green-50' },
      { name: 'Oro', hex: '#F4E8CE', bgColor: 'green-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-14-plus',
    brand: 'Apple',
    name: 'iPhone 14 Plus',
    description: 'Pantalla grande de 6.7 pulgadas y batería que dura todo el día.',
    price: 4299000,
    image: 'https://i.postimg.cc/J75YDTnM/image.png',
    colors: [
      { name: 'Azul', hex: '#7D9AAB', bgColor: 'blue-50' },
      { name: 'Morado', hex: '#E5DDEA', bgColor: 'blue-50' },
      { name: 'Rojo', hex: '#FA2D2D', bgColor: 'blue-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: false
  },
  {
    id: 'iphone-14',
    brand: 'Apple',
    name: 'iPhone 14',
    description: 'Un salto adelante en batería y fotografía con modo Acción.',
    price: 3799000,
    image: 'https://u.cubeupload.com/Bed1vere/image.png',
    colors: [
      { name: 'Azul', hex: '#7D9AAB', bgColor: 'blue-50' },
      { name: 'Morado', hex: '#E5DDEA', bgColor: 'blue-50' },
      { name: 'Rojo', hex: '#FA2D2D', bgColor: 'blue-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: false
  },
  {
    id: 'iphone-13-pro-max',
    brand: 'Apple',
    name: 'iPhone 13 Pro Max',
    description: 'El iPhone más potente con la mejor duración de batería jamás vista.',
    price: 4199000,
    image: 'https://u.cubeupload.com/Bed1vere/image.png',
    colors: [
      { name: 'Grafito', hex: '#4E4E4E', bgColor: 'gray-50' },
      { name: 'Sierra Blue', hex: '#A0C0D6', bgColor: 'gray-50' },
      { name: 'Oro', hex: '#F4E8CE', bgColor: 'gray-50' }
    ],
    storage: [128, 256, 512, 1024],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-13-pro',
    brand: 'Apple',
    name: 'iPhone 13 Pro',
    description: 'Sistema Pro de cámaras con modo macro y ProMotion.',
    price: 3899000,
    image: 'https://i.postimg.cc/3RCjX3HD/iphone-13-pro.png',
    colors: [
      { name: 'Grafito', hex: '#4E4E4E', bgColor: 'gray-50' },
      { name: 'Sierra Blue', hex: '#A0C0D6', bgColor: 'gray-50' },
      { name: 'Oro', hex: '#F4E8CE', bgColor: 'gray-50' }
    ],
    storage: [128, 256, 512, 1024],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-13',
    brand: 'Apple',
    name: 'iPhone 13',
    description: 'Una experiencia cinematográfica en tu bolsillo.',
    price: 3299000,
    image: 'https://i.postimg.cc/VvpNF8PK/iphone-13.png',
    colors: [
      { name: 'Rosa', hex: '#FEE0DC', bgColor: 'pink-50' },
      { name: 'Azul', hex: '#437691', bgColor: 'pink-50' },
      { name: 'Medianoche', hex: '#1C212E', bgColor: 'pink-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: false
  },
  {
    id: 'iphone-13-mini',
    brand: 'Apple',
    name: 'iPhone 13 mini',
    description: 'Nuestro iPhone más compacto con un rendimiento extraordinario.',
    price: 2999000,
    image: 'https://i.postimg.cc/TPLPSZVj/iphone-13-mini.png',
    colors: [
      { name: 'Rosa', hex: '#FEE0DC', bgColor: 'pink-50' },
      { name: 'Azul', hex: '#437691', bgColor: 'pink-50' },
      { name: 'Medianoche', hex: '#1C212E', bgColor: 'pink-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: false
  },
  {
    id: 'iphone-12-pro-max',
    brand: 'Apple',
    name: 'iPhone 12 Pro Max',
    description: 'Fotografía profesional con sensor más grande y zoom óptico 5x.',
    price: 3599000,
    image: 'https://i.postimg.cc/vBRKzYc4/iphone-12-pro-max.png',
    colors: [
      { name: 'Grafito', hex: '#4E4E4E', bgColor: 'gray-50' },
      { name: 'Azul Pacífico', hex: '#005483', bgColor: 'gray-50' },
      { name: 'Oro', hex: '#F4E8CE', bgColor: 'gray-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-12-pro',
    brand: 'Apple',
    name: 'iPhone 12 Pro',
    description: 'Potencia Pro en un tamaño perfecto con Ceramic Shield.',
    price: 3299000,
    image: 'https://i.postimg.cc/CLgN1ZV9/iphone-12-pro.png',
    colors: [
      { name: 'Grafito', hex: '#4E4E4E', bgColor: 'gray-50' },
      { name: 'Azul Pacífico', hex: '#005483', bgColor: 'gray-50' },
      { name: 'Oro', hex: '#F4E8CE', bgColor: 'gray-50' }
    ],
    storage: [128, 256, 512],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-12',
    brand: 'Apple',
    name: 'iPhone 12',
    description: 'Superrápido con 5G y chip A14 Bionic.',
    price: 2899000,
    image: 'https://i.postimg.cc/kgFbg5kK/iphone-12.png',
    colors: [
      { name: 'Azul', hex: '#134C7E', bgColor: 'blue-50' },
      { name: 'Verde', hex: '#DAEBD7', bgColor: 'blue-50' },
      { name: 'Rojo', hex: '#FA2D2D', bgColor: 'blue-50' }
    ],
    storage: [64, 128, 256],
    isNew: false,
    isPro: false
  },
  {
    id: 'iphone-12-mini',
    brand: 'Apple',
    name: 'iPhone 12 mini',
    description: 'El iPhone 5G más pequeño, fino y ligero del mundo.',
    price: 2599000,
    image: 'https://i.postimg.cc/L4jXzrVZ/iphone-12-mini.png',
    colors: [
      { name: 'Azul', hex: '#134C7E', bgColor: 'blue-50' },
      { name: 'Verde', hex: '#DAEBD7', bgColor: 'blue-50' },
      { name: 'Rojo', hex: '#FA2D2D', bgColor: 'blue-50' }
    ],
    storage: [64, 128, 256],
    isNew: false,
    isPro: false
  },
  {
    id: 'iphone-11-pro-max',
    brand: 'Apple',
    name: 'iPhone 11 Pro Max',
    description: 'Triple cámara y la mejor duración de batería en un iPhone.',
    price: 2999000,
    image: 'https://i.postimg.cc/3xH24Hbz/iphone-11-pro-max.png',
    colors: [
      { name: 'Verde Noche', hex: '#4E5851', bgColor: 'gray-50' },
      { name: 'Gris Espacial', hex: '#333333', bgColor: 'gray-50' },
      { name: 'Plata', hex: '#F5F5F0', bgColor: 'gray-50' }
    ],
    storage: [64, 256, 512],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-11-pro',
    brand: 'Apple',
    name: 'iPhone 11 Pro',
    description: 'Triple sistema de cámaras Pro con vidrio mate texturizado.',
    price: 2799000,
    image: 'https://i.postimg.cc/fR7Qqy8q/iphone-11-pro.png',
    colors: [
      { name: 'Verde Noche', hex: '#4E5851', bgColor: 'gray-50' },
      { name: 'Gris Espacial', hex: '#333333', bgColor: 'gray-50' },
      { name: 'Plata', hex: '#F5F5F0', bgColor: 'gray-50' }
    ],
    storage: [64, 256, 512],
    isNew: false,
    isPro: true
  },
  {
    id: 'iphone-11',
    brand: 'Apple',
    name: 'iPhone 11',
    description: 'Sistema de cámara dual con modo Noche y video 4K.',
    price: 2399000,
    image: 'https://i.postimg.cc/Xv3rL5sX/iphone-11.png',
    colors: [
      { name: 'Morado', hex: '#D1CDDB', bgColor: 'purple-50' },
      { name: 'Amarillo', hex: '#FFE680', bgColor: 'purple-50' },
      { name: 'Verde', hex: '#AEC2B1', bgColor: 'purple-50' }
    ],
    storage: [64, 128, 256],
    isNew: false,
    isPro: false
  }
];

function IPhone() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <ProductGrid products={iPhoneProducts} category="iPhone" />
        </div>
      </section>
    </main>
  );
}

export default IPhone;
