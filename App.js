import React from 'react'
import './App.css';
import Products from './Products/Products';
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import About from './Products/About';



function App() {



  return (
   <Router>
      <div className="App">
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Products />} />
          <Route path="/" end>
          
          </Route>
        </Routes>
      </div>
    </Router>

    
  
  )
}

export default App;
