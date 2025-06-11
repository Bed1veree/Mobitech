import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/FooterFixed';
import Home from './pages/Home';
import IPhone from './pages/IPhone';
import IPad from './pages/IPad';
import Mac from './pages/Mac';
import Watch from './pages/Watch';
import AirPods from './pages/AirPods';
import Accesorios from './pages/Accesorios';
import Promociones from './pages/Promociones';
import Blog from './pages/Blog';
import ServiciosTiendas from './pages/ServiciosTiendas';
import Beneficios from './pages/Beneficios';
import ProductDetailPage from './pages/ProductDetailPage';
import Checkout from './pages/Checkout';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import WhatsAppContact from './components/contact/WhatsAppContact';
import CartProvider from './context/CartContext';
import CartDrawer from './components/cart/CartDrawer';
import ScrollToTop from './components/utils/ScrollToTop';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="App pt-16">
          <Header />
          <CartDrawer />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iphone" element={<IPhone />} />
            <Route path="/ipad" element={<IPad />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/airpods" element={<AirPods />} />
            <Route path="/accesorios" element={<Accesorios />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/servicios-tiendas" element={<ServiciosTiendas />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/product/:category/:productId" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          </Routes>
          
          <WhatsAppContact />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
