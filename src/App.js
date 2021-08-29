import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, SingleProduct, Products, Cart, Checkout, PrivateRoute, Error, About } from './pages'

function App() {
    return (
        <Router>
            <Navbar/>
            <Sidebar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/about">
                    <About/>
                </Route>

                <Route exact path="/cart">
                    <Cart/>
                </Route>

                <Route exact path="/products">
                    <Products/>
                </Route>

                <Route exact path="/products/:id" children={<SingleProduct/>}>
                    <Home/>
                </Route>

                <Route exact path="/checkout">
                    <Checkout/>
                </Route>

                <Router path="*">
                    <Error/>
                </Router>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App