import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import CartButton from './CartButton';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Determinar si el usuario ha scrolleado más allá de 20px
      setScrolled(currentScrollPos > 20);
      
      // Determinar si el header debe estar visible
      // Visible si está scrolleando hacia arriba o está en la parte superior
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(isVisible);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Función para manejar la búsqueda
  const handleSearch = (searchTerm) => {
    console.log('Buscando:', searchTerm);
    // Aquí iría la lógica de búsqueda real
  };

  // Cerrar menú móvil al hacer clic en un enlace
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'
      } ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } text-gray-900`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ProyectoAndres
            </span>
          </Link>
          
          {/* Buscador Desktop */}
          <div className="hidden lg:block flex-grow max-w-xl mx-8">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {/* Iconos de navegación */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Botón de usuario - oculto en móvil muy pequeño */}
            <button className="hidden sm:block relative p-2 text-gray-700 hover:text-blue-600 transition-colors group min-h-[44px] min-w-[44px]">
              <div className="absolute -inset-1 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            {/* Carrito */}
            <CartButton />
            
            {/* Botón de menú móvil */}
            <button 
              className="lg:hidden relative p-2 text-gray-700 hover:text-blue-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú de navegación"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Buscador móvil/tablet */}
        <div className="lg:hidden py-3 border-t border-gray-100">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {/* Menú de navegación Desktop */}
        <nav className="hidden lg:flex items-center justify-center py-2 border-t border-gray-100">
          <Link to="/mac" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">Mac</Link>
          <Link to="/ipad" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">iPad</Link>
          <Link to="/iphone" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">iPhone</Link>
          <Link to="/watch" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">Watch</Link>
          <Link to="/airpods" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">AirPods</Link>
          <Link to="/accesorios" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">Accesorios</Link>
          <Link to="/promociones" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">Promociones</Link>
          <Link to="/blog" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">Blog</Link>
          <Link to="/servicios-tiendas" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">Servicios</Link>
          <Link to="/beneficios" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50">Beneficios</Link>
        </nav>
      </div>
      
      {/* Menú móvil/tablet desplegable */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      } bg-white border-t border-gray-100 shadow-lg`}>
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <Link 
              to="/mac" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              Mac
            </Link>
            <Link 
              to="/ipad" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              iPad
            </Link>
            <Link 
              to="/iphone" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              iPhone
            </Link>
            <Link 
              to="/watch" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              Watch
            </Link>
            <Link 
              to="/airpods" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              AirPods
            </Link>
            <Link 
              to="/accesorios" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              Accesorios
            </Link>
            <Link 
              to="/promociones" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              Promociones
            </Link>
            <Link 
              to="/blog" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link 
              to="/servicios-tiendas" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              Servicios
            </Link>
            <Link 
              to="/beneficios" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              Beneficios
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

