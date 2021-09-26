import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import {Switch,Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen'
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Navbar from './components/Navbar';
// import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';
import SignInScreen from './screens/SignInScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { ShippingScreen } from './screens/ShippingScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import MyOrdersScreen from './screens/MyOrdersScreen';

function App() {
const [sideToggle,setSideToggle] = useState(false)

    return (
        <Router>
        <div>
            
            <Navbar click={()=>setSideToggle(!sideToggle)} />
            {/* <BackDrop hide={()=>setSideToggle(false)}/> */}
            <SideDrawer show={sideToggle} />
            
            <main>
                
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/products/:id" component={ProductScreen} />
                    <Route exact path="/cart/:id?" component={CartScreen} />
                    <Route exact path="/signin" component={SignInScreen} />
                    <Route exact path="/register" component={RegisterScreen} />
                    <Route exact path="/shipping" component={ShippingScreen} />
                    <Route exact path="/payment" component={PaymentMethodScreen} />
                    <Route exact path="/placeorder" component={PlaceOrderScreen} />
                    <Route exact path="/order/:id" component={OrderScreen} />
                    <Route exact path="/myorders" component={MyOrdersScreen} />
                   
                </Switch>
            </main>
                
      
        </div>
        </Router>
    )
}

export default App
