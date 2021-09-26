// import toggleReducer from './toggleReducer'
import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { orderDetailsReducer, orderMineListReducer, orderReducer } from './orderReducer'
import {productlistReducer,  productDetailsReducer}  from './productReducer'
import { userRegisterReducer, userSignInReducer } from './userReducer'

const rootReducer = combineReducers({
    cart:cartReducer,
    productList:productlistReducer,
    productDetails:productDetailsReducer,
    userSignIn:userSignInReducer,
    userRegister:userRegisterReducer,
    orderCreate:orderReducer,
    orderDetails:orderDetailsReducer,
    orderMineList:orderMineListReducer
   
})


export default rootReducer