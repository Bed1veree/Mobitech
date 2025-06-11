import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Colombia',
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvc: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Calcular el total
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  // Calcular impuestos (19%)
  const taxes = Math.round(subtotal * 0.19);
  
  // Calcular total
  const total = subtotal + taxes;

  // Verificar si hay elementos en el carrito o en localStorage
  useEffect(() => {
    // Solo redirigir si el carrito está vacío después de comprobar el localStorage
    // y ha pasado un tiempo prudente para cargar datos
    const timer = setTimeout(() => {
      const savedCart = localStorage.getItem('cart');
      const hasItemsInStorage = savedCart && JSON.parse(savedCart).length > 0;
      
      if (cartItems.length === 0 && !orderComplete && !hasItemsInStorage) {
        navigate('/');
      }
    }, 1000); // Esperar 1 segundo para dar tiempo a cargar desde localStorage
    
    return () => clearTimeout(timer);
  }, [cartItems, navigate, orderComplete]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error cuando el usuario comienza a corregir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validaciones básicas
    if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido';
    if (!formData.lastName.trim()) newErrors.lastName = 'El apellido es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.address.trim()) newErrors.address = 'La dirección es requerida';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es requerida';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'El código postal es requerido';
    
    // Validaciones de tarjeta solo si el método de pago es tarjeta de crédito
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'El número de tarjeta es requerido';
      if (!formData.cardName.trim()) newErrors.cardName = 'El nombre en la tarjeta es requerido';
      if (!formData.cardExpiry.trim()) newErrors.cardExpiry = 'La fecha de expiración es requerida';
      if (!formData.cardCvc.trim()) newErrors.cardCvc = 'El código de seguridad es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulación de procesamiento de pago
      setTimeout(() => {
        // Generar número de orden aleatorio
        const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
        setOrderNumber(randomOrderNumber);
        setOrderComplete(true);
        clearCart();
        setIsSubmitting(false);
      }, 2000);
    }
  };

  if (orderComplete) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-black">¡Pedido completado!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Gracias por tu compra. Tu número de pedido es: <span className="font-bold">{orderNumber}</span>
            </p>
            <p className="text-gray-600 mb-8">
              Hemos enviado un correo electrónico de confirmación a <span className="font-medium">{formData.email}</span>.
              Recibirás actualizaciones sobre el estado de tu pedido.
            </p>
            <div className="mt-8">
              <Link 
                to="/"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Volver a la tienda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Finalizar compra</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Formulario de checkout */}
            <div className="lg:w-2/3 space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-medium text-gray-800">Información de contacto</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-700">Nombre</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-700">Apellido</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-medium text-gray-800">Dirección de envío</h2>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium mb-2 text-gray-700">Dirección</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-700">Ciudad</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium mb-2 text-gray-700">Código postal</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-2 text-gray-700">País</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-medium text-gray-800">Método de pago</h2>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="credit"
                          name="paymentMethod"
                          value="credit"
                          checked={formData.paymentMethod === 'credit'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="credit" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                          <span className="mr-2">Tarjeta de crédito</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="debit"
                          name="paymentMethod"
                          value="debit"
                          checked={formData.paymentMethod === 'debit'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="debit" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                          <span className="mr-2">Tarjeta de débito</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="paypal"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="paypal" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                          <span className="mr-2">PayPal</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.384a.64.64 0 0 1 .632-.537h6.012c2.658 0 4.53.625 5.398 1.81.79 1.082.979 2.357.552 3.874-.019.066-.038.15-.057.232l-.496 2.035a5.187 5.187 0 0 1-1.836 2.98c-1.07.81-2.433 1.22-4.056 1.22h-1.17a.642.642 0 0 0-.633.538l-.969 4.265a.641.641 0 0 1-.632.537h-.62z" />
                            <path d="M18.466 8.03c.426-1.756.193-3.13-.706-4.27-.996-1.264-2.676-1.898-5.03-1.898H6.717a1.28 1.28 0 0 0-1.264 1.075L2.204 20.48a.769.769 0 0 0 .76.892h4.6l1.158-5.152-.036.177a1.28 1.28 0 0 1 1.264-1.075h2.636c5.16 0 9.2-2.34 10.376-9.109.035-.202.064-.397.088-.583a6.335 6.335 0 0 0-.584-2.6z" />
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {(formData.paymentMethod === 'credit' || formData.paymentMethod === 'debit') && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium mb-2 text-gray-700">Número de tarjeta</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'}`}
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                          </div>
                        </div>
                        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="cardName" className="block text-sm font-medium mb-2 text-gray-700">Nombre en la tarjeta</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="Nombre en la tarjeta"
                            className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.cardName ? 'border-red-500' : 'border-gray-300'}`}
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        </div>
                        {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium mb-2 text-gray-700">Fecha de expiración (MM/AA)</label>
                          <div className="relative">
                            <input
                              type="text"
                              id="cardExpiry"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleChange}
                              placeholder="MM/AA"
                              className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.cardExpiry ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          {errors.cardExpiry && <p className="text-red-500 text-xs mt-1">{errors.cardExpiry}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="cardCvc" className="block text-sm font-medium mb-2 text-gray-700">Código de seguridad (CVC)</label>
                          <div className="relative">
                            <input
                              type="text"
                              id="cardCvc"
                              name="cardCvc"
                              value={formData.cardCvc}
                              onChange={handleChange}
                              placeholder="CVC"
                              className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.cardCvc ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                          </div>
                          {errors.cardCvc && <p className="text-red-500 text-xs mt-1">{errors.cardCvc}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 ${
                      isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                    } text-white rounded-lg transition-colors flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </>
                    ) : (
                      <>
                        Completar pedido
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Resumen del pedido - VERSIÓN MEJORADA */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 sticky top-24 overflow-hidden">
                {/* Encabezado del resumen */}
                <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">Resumen del pedido</h2>
                    <div className="ml-auto bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}
                    </div>
                  </div>
                </div>
                
                {/* Lista de productos */}
                <div className="max-h-80 overflow-y-auto p-4 space-y-3 bg-white">
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                      <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                        Continuar comprando
                      </Link>
                    </div>
                  ) : (
                    <ul className="divide-y divide-gray-100">
                      {cartItems.map((item) => (
                        <li 
                          key={`${item.id}-${item.selectedColor.name}-${item.selectedStorage}`} 
                          className="py-3 group hover:bg-blue-50 rounded-lg transition-colors duration-150 px-2"
                        >
                          <div className="flex">
                            <div className="w-20 h-20 rounded-lg flex items-center justify-center overflow-hidden mr-4 bg-gray-50 border border-gray-100 p-1">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <div className="flex-1 relative">
                              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                                {item.name}
                              </h3>
                              <div className="flex space-x-2 mt-1">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  {item.selectedColor.name}
                                </span>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  {item.selectedStorage} GB
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="text-sm text-gray-500 flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                  </svg>
                                  {item.quantity}
                                </span>
                                <span className="text-sm font-medium text-blue-700">
                                  $ {(item.price * item.quantity).toLocaleString()}
                                </span>
                              </div>
                              <button 
                                type="button"
                                onClick={() => removeFromCart(item)}
                                className="absolute top-0 right-0 text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-white"
                                aria-label="Eliminar producto"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Resumen de costos */}
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <span>Subtotal</span>
                      </div>
                      <span className="font-medium">$ {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Envío</span>
                      </div>
                      <span className="text-green-600 font-medium">Gratis</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                        </svg>
                        <span>Impuestos (19%)</span>
                      </div>
                      <span className="font-medium">$ {taxes.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-blue-700">$ {total.toLocaleString()}</span>
                      <p className="text-xs text-gray-500 mt-1">Impuestos incluidos</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center text-sm text-green-600 bg-green-50 py-2 px-3 rounded-lg">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Envío gratis en todos los pedidos
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Pago seguro garantizado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
