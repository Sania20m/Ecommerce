// import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import FigureCaption from 'react-bootstrap/FigureCaption';
// // import Img from '../../Img/Img';
// import { useState } from 'react';
// import AddToCartButton from './Add';

// const productsArr = [
//   {
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//   },
//   {
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//   },
//   {
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//   },
//   {
//     title: 'Blue Color',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//   },
// ];

// const Products = () => {
   
//         const [cart, setCart] = useState([]);
      
//         const handleAddToCart = (product) => {
//           setCart([...cart, product]);
//         };
//   return (
//     <div>
//       <Container fluid>
//         <Row>
//           <Col>
//             <Card style={{ height: '250px' }} className='bg-secondary text-white'>
//               <Card.Body src='holder.js/100px1280'>
//                 <Card.Title>
//                   <h1>The Generics</h1>
//                 </Card.Title>
//               </Card.Body>
//             </Card>

//           </Col>
//         </Row>
//       </Container>
// <hr></hr>
//       <Container>
//         <Row>
//           {productsArr.map((product, index) => (
//             <Col key={index} xs={6} md={4}>
//               <img style={{ width: '250px', height: '364px' }} src={product.imageUrl} alt={product.title} />
//               <FigureCaption>
//                 Nulla vitae elit libero, a pharetra augue mollis interdum.
//               </FigureCaption>
//              <AddToCartButton product={product} onAddToCart={handleAddToCart}/>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Products;


import {React,useState} from 'react';
import AddToCart from './Add';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Cart from './Cart';
import { useCart } from '../Component/CartContext';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const Products = () => {
  
  const { cartState } = useCart();
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          </Container>
          
        <Nav>
          <button className="cart-icon" onClick={handleToggleCart}>
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png"
              alt="Cart"
            />
              {cartState.cartItems.length > 0 && (
              <span className="cart-item-count">{cartState.cartItems.length}</span>
            )}
          </button>
        </Nav>
      </Navbar>

      <Container className="mt-4">
        <h1>Products</h1>
        {/* Product display code here */}
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index} md={3} sm={6} xs={12}>
              <div className="product-card">
                <img src={product.imageUrl} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <AddToCart product={product} />
                
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Cart component */}
      <Cart showCart={showCart} onHide={() => setShowCart(false)} />
    </div>
  );
};


export default Products;
