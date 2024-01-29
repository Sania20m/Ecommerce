import React from 'react'
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Products from './Component/Products/Products';
import Container from 'react-bootstrap/Container';
import Cart from './Component/Products/Cart';




function App() {

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

    }

  ]


  return (
    <div className="App">
      <Navbar className="justify-content-center" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Products></Products>
      <Cart></Cart>
     </div>
  )
}

export default App;
