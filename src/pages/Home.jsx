import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import TestimonialSection from '../components/home/TestimonialSection';
import ProductShowcase from '../components/home/ProductShowcase';
import TrendingProducts from '../components/home/TrendingProducts';
import CompareModels from '../components/home/CompareModels';
import FeaturedAccessories from '../components/home/FeaturedAccessories';
import CategoryGrid from '../components/home/CategoryGrid';

function Home() {
  return (
    <main className="min-h-screen text-gray-900">
      {/* Hero Banner */}
      <section id="hero">
        <HeroBanner />
      </section>
      
      {/* Testimonios */}
      <section id="testimonials">
        <TestimonialSection />
      </section>
      
      {/* Categorías */}
      <section id="categorias" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 py-2">Nuestras Categorías</h2>
          <CategoryGrid />
        </div>
      </section>
      
      {/* Encuentra tu iPhone */}
      <section id="iphone-showcase" className="text-gray-900">
        <ProductShowcase />
      </section>
      
      {/* Los más vendidos */}
      <section id="trending" className="text-gray-900">
        <TrendingProducts />
      </section>
      
      {/* Compara modelos */}
      <section id="compare" className="text-gray-900">
        <CompareModels />
      </section>
      
      {/* Accesorios destacados */}
      <section id="accessories" className="text-gray-900">
        <FeaturedAccessories />
      </section>
    </main>
  );
}

export default Home;
