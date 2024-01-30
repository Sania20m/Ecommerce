import React from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';
import { useCart } from '../Component/CartContext';

const Cart = ({ showCart, onHide }) => {
  const { cartState } = useCart();

  return (
    <Modal show={showCart} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartState.cartItems && cartState.cartItems.length > 0 ? (
          <ListGroup>
            {cartState.cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                {item.title} - Quantity: {item.quantity}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
