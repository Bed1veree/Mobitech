import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart) && parsedCart.length > 0) {
          setCartItems(parsedCart);
          console.log('Carrito cargado desde localStorage:', parsedCart);
        }
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('Carrito guardado en localStorage:', cartItems);
    } else if (cartItems.length === 0) {
      // Si el carrito está vacío pero no debido a un clear intencional, verificar localStorage
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          if (Array.isArray(parsedCart) && parsedCart.length > 0) {
            setCartItems(parsedCart);
            console.log('Restaurado carrito desde localStorage:', parsedCart);
            return; // Evitar el bucle infinito
          }
        } catch (e) {
          console.error('Error al procesar el carrito desde localStorage:', e);
          // Continuar con el carrito vacío
        }
      }
      // Si llegamos aquí, el carrito está realmente vacío
      localStorage.removeItem('cart');
    }
  }, [cartItems]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito (mismo id, color y almacenamiento)
    const existingItemIndex = cartItems.findIndex(
      item => 
        item.id === product.id && 
        item.selectedColor.name === product.selectedColor.name &&
        item.selectedStorage === product.selectedStorage
    );

    if (existingItemIndex !== -1) {
      // Si ya existe, actualizar la cantidad
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += product.quantity;
      setCartItems(updatedItems);
    } else {
      // Si no existe, añadir nuevo item
      setCartItems([...cartItems, product]);
    }

    // Abrir el carrito automáticamente al añadir un producto
    setIsCartOpen(true);
  };

  const removeFromCart = (product) => {
    console.log('Eliminando producto:', product);
    
    // Crear una copia completa del array actual
    const currentCart = [...cartItems];
    
    // Encontrar el índice del producto a eliminar
    const indexToRemove = currentCart.findIndex(
      item => 
        item.id === product.id && 
        item.selectedColor.name === product.selectedColor.name &&
        item.selectedStorage === product.selectedStorage
    );
    
    // Si se encuentra el producto, eliminarlo del array
    if (indexToRemove !== -1) {
      currentCart.splice(indexToRemove, 1);
      console.log('Producto encontrado y eliminado');
    } else {
      console.log('Producto no encontrado en el carrito');
    }
    
    console.log('Carrito actualizado:', currentCart);
    
    // Actualizar el estado con la nueva copia del carrito
    setCartItems(currentCart);
    
    // Actualizar también en localStorage
    if (currentCart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(currentCart));
    } else {
      localStorage.removeItem('cart');
    }

    // Asegurarse de que el estado del carrito no cause redirección
  };

  const updateQuantity = (product, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedItems = cartItems.map(item => {
      if (
        item.id === product.id && 
        item.selectedColor.name === product.selectedColor.name &&
        item.selectedStorage === product.selectedStorage
      ) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const clearCart = () => {
    console.log('Vaciando carrito');
    setCartItems([]);
    // Asegurarse de eliminar del localStorage también
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCart,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
