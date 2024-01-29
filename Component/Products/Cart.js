import React, { useState } from 'react';

const Cart = () => {
  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  const [cart, setCart] = useState(cartElements);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'fixed', top: 10, right: 10 }}>
        <button onClick={() => setIsCartOpen(!isCartOpen)}>Cart Icon</button>
      </div>
      {isCartOpen && (
        <div
          className="cart-popup"
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            backgroundColor: '#fff',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            zIndex: 1,
          }}
        >
          {cart.map((item, index) => (
            <div key={index} className="cart-item" style={{ marginBottom: '10px' }}>
              <img src={item.imageUrl} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
