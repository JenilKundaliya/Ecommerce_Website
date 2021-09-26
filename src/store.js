import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers/rootReducer'
const middleware = [thunk];
const intialState = {

userSignIn:{
    userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
}
    ,cart:{
        cartItems: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems'))
        :[],
        shippingAddress:localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress'))
        :{},
        paymentMethod:'PayPal'
        
    }
};
const store = createStore(
    rootReducer,
    intialState,    
    composeWithDevTools(applyMiddleware(...middleware))
   
)

export default store;