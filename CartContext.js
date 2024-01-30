import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  cartItems: [],
};

// Action types
const ADD_TO_CART = 'ADD_TO_CART';

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update the quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If the item doesn't exist, add it to the cart
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    default:
      return state;
  }
};

// Create the context
const CartContext = createContext();

// Create the context provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  return (
    <CartContext.Provider value={{ cartState: state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
