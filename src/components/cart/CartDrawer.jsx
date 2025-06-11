import React, { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    isCartOpen, 
    toggleCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity
  } = useContext(CartContext);
  
  const navigate = useNavigate();
  const scrollPositionRef = useRef(0);

  // Calcular el total
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  useEffect(() => {
    // Agregar clase al body para ocultar el ícono de WhatsApp cuando el carrito está abierto
    if (isCartOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }
  }, [isCartOpen]);

  const handleCheckout = () => {
    toggleCart(); // Cerrar el carrito
    navigate('/checkout'); // Navegar a la página de checkout
  };

  // Efecto mejorado para manejar el scroll sin causar redirección
  useEffect(() => {
    if (isCartOpen) {
      // Guardar la posición actual del scroll
      scrollPositionRef.current = window.pageYOffset;
      
      // Bloquear scroll del body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
    } else {
      // Restaurar scroll cuando el carrito se cierre
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restaurar la posición del scroll sin causar redirección
      window.scrollTo(0, scrollPositionRef.current);
    }
    
    // Limpiar efecto al desmontar
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isCartOpen]);
  
  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay mejorado con gradiente sutil */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/30 via-black/40 to-black/50 backdrop-blur-md z-50 transition-all duration-500 ease-out"
        onClick={(e) => {
          e.stopPropagation();
          toggleCart();
        }}
        aria-label="Cerrar carrito"
      />
      
      {/* Drawer con diseño completamente renovado */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] max-w-md bg-white z-50 shadow-2xl transform transition-all duration-500 ease-out overflow-hidden animate-slide-in-right">
        <div className="flex flex-col h-full bg-gradient-to-b from-white via-gray-50/30 to-white">
          
          {/* Header rediseñado con gradiente y mejor tipografía */}
          <div className="relative py-6 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 backdrop-blur-sm"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Tu carrito</h2>
                  {cartItems.length > 0 && (
                    <p className="text-blue-100 text-sm">
                      {cartItems.reduce((total, item) => total + item.quantity, 0)} {cartItems.reduce((total, item) => total + item.quantity, 0) === 1 ? 'producto' : 'productos'}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCart();
                }}
                className="text-white/80 hover:text-white transition-all duration-200 p-2 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                aria-label="Cerrar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Content con diseño mejorado */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                {/* Ilustración mejorada del carrito vacío */}
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center shadow-inner">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                      <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  {/* Elementos decorativos */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Tu carrito está vacío</h3>
                <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
                  Añade productos para comenzar tu compra y disfrutar de la mejor tecnología Apple
                </p>
                
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCart();
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3"
                >
                  <span className="font-semibold">Continuar comprando</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex space-x-4">
                      {/* Imagen del producto mejorada */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-inner">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                      
                      {/* Información del producto */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-sm font-semibold text-gray-800 truncate pr-2">{item.name}</h4>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item);
                            }}
                            className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1 rounded-lg hover:bg-red-50"
                            aria-label="Eliminar"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Detalles del producto */}
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                            {item.selectedStorage}
                          </span>
                          <div className="flex items-center space-x-1">
                            <div 
                              className="w-3 h-3 rounded-full border border-gray-300" 
                              style={{ backgroundColor: item.selectedColor.hex }}
                            ></div>
                            <span className="text-xs text-gray-500">{item.selectedColor.name}</span>
                          </div>
                        </div>
                        
                        {/* Controles de cantidad y precio */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center bg-gray-50 rounded-xl p-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item, Math.max(1, item.quantity - 1));
                              }}
                              className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-white"
                              aria-label="Disminuir cantidad"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                              </svg>
                            </button>
                            <span className="mx-3 text-sm font-semibold text-gray-800 min-w-[20px] text-center">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item, item.quantity + 1);
                              }}
                              className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-white"
                              aria-label="Aumentar cantidad"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
                              </svg>
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-800">
                              $ {(item.price * item.quantity).toLocaleString()}
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-xs text-gray-500">
                                $ {item.price.toLocaleString()} c/u
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer rediseñado con gradiente y mejor diseño */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6">
              {/* Resumen de precios */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} productos)</span>
                  <span className="font-medium">$ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Envío</span>
                  <span className="text-green-600 font-medium">Gratis</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-gray-800">$ {subtotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Botón de checkout mejorado */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCheckout();
                }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                aria-label="Ir a pagar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Proceder al pago</span>
              </button>
              
              {/* Mensaje de seguridad */}
              <div className="flex items-center justify-center space-x-2 mt-4 text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Compra 100% segura y protegida</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Estilos CSS mejorados para animaciones */}
      <style jsx>{`
        @keyframes slide-in-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        
        /* Scrollbar personalizado */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </>
  );
};

export default CartDrawer;

