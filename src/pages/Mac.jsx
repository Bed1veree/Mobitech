import React from 'react';
import ProductGrid from '../components/products/ProductGrid';

// Datos de ejemplo para Mac
const macProducts = [
  {
    id: 'macbook-pro-m3-16',
    brand: 'Apple',
    name: 'MacBook Pro M3 16"',
    description: 'Potencia extraordinaria con el chip M3 Pro o M3 Max para los flujos de trabajo más exigentes.',
    price: 8999000,
    image: 'https://i.postimg.cc/wB4H8Wg6/image.png',
    colors: [
      { name: 'Gris Espacial', hex: '#86868B', bgColor: 'white' },
      { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' }
    ],
    storage: [512, 1024, 2048, 4096],
    isNew: false,
    isPro: true
  },
  {
    id: 'macbook-pro-m3-14',
    brand: 'Apple',
    name: 'MacBook Pro M3 14"',
    description: 'El portátil profesional para cuando tu creatividad no puede esperar.',
    price: 6999000,
    image: 'https://i.postimg.cc/wB4H8Wg6/image.png',
    colors: [
      { name: 'Gris Espacial', hex: '#86868B', bgColor: 'white' },
      { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' }
    ],
    storage: [512, 1024, 2048],
    isNew: false,
    isPro: true
  },
  {
    id: 'macbook-air-m2-15',
    brand: 'Apple',
    name: 'MacBook Air M2 15"',
    description: 'La perfecta combinación de potencia y portabilidad con una pantalla más grande.',
    price: 5999000,
    image: 'https://i.postimg.cc/Dz0kgqsR/image.png',
    colors: [
      { name: 'Medianoche', hex: '#1D1D1F', bgColor: 'white' },
      { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' },
      { name: 'Gris Espacial', hex: '#86868B', bgColor: 'white' },
      { name: 'Azul Estelar', hex: '#7D9AAB', bgColor: 'white' }
    ],
    storage: [256, 512, 1024],
    isNew: false,
    isPro: false
  },
  {
    id: 'macbook-air-m2-13',
    brand: 'Apple',
    name: 'MacBook Air M2 13"',
    description: 'Increíblemente delgado, con potencia y batería para todo el día.',
    price: 4999000,
    image: 'https://i.postimg.cc/Dz0kgqsR/image.png',
    colors: [
      { name: 'Medianoche', hex: '#1D1D1F', bgColor: 'white' },
      { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' },
      { name: 'Gris Espacial', hex: '#86868B', bgColor: 'white' },
      { name: 'Azul Estelar', hex: '#7D9AAB', bgColor: 'white' }
    ],
    storage: [256, 512, 1024],
    isNew: false,
    isPro: false
  },
  {
    id: 'imac-m3-24',
    brand: 'Apple',
    name: 'iMac M3 24"',
    description: 'Potente, colorido y extremadamente delgado. Todo en uno.',
    price: 5999000,
    image: 'https://i.postimg.cc/0QJggPVf/image.png',
    colors: [
      { name: 'Azul', hex: '#7D9AAB', bgColor: 'white' },
      { name: 'Verde', hex: '#AEC2B1', bgColor: 'white' },
      { name: 'Rosa', hex: '#F9D1CF', bgColor: 'white' },
      { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' }
    ],
    storage: [256, 512, 1024],
    isNew: false,
    isPro: false
  },
  {
    id: 'mac-mini-m2',
    brand: 'Apple',
    name: 'Mac mini M2',
    description: 'Más potencia en menos espacio. Ahora con M2 o M2 Pro.',
    price: 2999000,
    image: 'https://i.postimg.cc/QCL2hwPr/image.png',
    colors: [
      { name: 'Plata', hex: '#E3E4E5', bgColor: 'white' }
    ],
    storage: [256, 512, 1024],
    isNew: false,
    isPro: false
  }
];

function Mac() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <ProductGrid products={macProducts} category="Mac" />
        </div>
      </section>
    </main>
  );
}

export default Mac;
