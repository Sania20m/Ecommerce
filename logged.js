// PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Assuming you have an AuthContext for managing authentication state

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authToken } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        authToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
--------------------------------------------------------------------------------------------
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProductsPage from './ProductsPage';
import PrivateRoute from './PrivateRoute';
import AuthContextProvider from './AuthContext'; // Assuming you have an AuthContextProvider

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/products" component={ProductsPage} />
          {/* Add other routes here */}
        </Switch>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
