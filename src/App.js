import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Products,
  SingleProduct,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/products">
          <Products />
        </Route>

        <Route exact path="/products/:id" children={<SingleProduct />}></Route>

        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>

        <Route path="*">
          <Redirect from="*" to="/404" />
          <Error />
        </Route>

        <Route path="/404">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
