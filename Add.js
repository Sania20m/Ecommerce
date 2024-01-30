// AddToCart.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from '../Component/CartContext';

const AddToCart = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCartClick = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="add-to-cart">
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <Button variant="primary" onClick={handleAddToCartClick}>
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
