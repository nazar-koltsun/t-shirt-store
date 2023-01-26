import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";

const App = () => {
  const isLocalhost = window.location.href.indexOf('localhost') > 0;
  const baseUrl = isLocalhost ? '' : '/t-shirt-store';

  return (
    <Router>
      <Switch>
        <Route path={`${baseUrl}/`} component={HomeScreen} exact />
        <Route path={`${baseUrl}/products/:id`} component={SingleProduct} />
        <Route path={`${baseUrl}/login`} component={Login} />
        <Route path={`${baseUrl}/register`} component={Register} />
        <Route path={`${baseUrl}/profile`} component={ProfileScreen} />
        <Route path={`${baseUrl}/cart:id?`} component={CartScreen} />
        <Route path={`${baseUrl}/shipping`} component={ShippingScreen} />
        <Route path={`${baseUrl}/payment`} component={PaymentScreen} />
        <Route path={`${baseUrl}/placeorder`} component={PlaceOrderScreen} />
        <Route path={`${baseUrl}/order`} component={OrderScreen} />
        <Route path={`${baseUrl}/*`} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
