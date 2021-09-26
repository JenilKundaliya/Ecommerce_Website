import * as actiontypes from '../constants/cartConstants'
import axios from 'axios'


export const addToCart = (productID,qty)=> async(dispatch,getState)=>{
    const {data} = await axios.get(`https://ecommercewebsitemernstack.herokuapp.com/api/products/${productID}`)
dispatch({
    type:actiontypes.ADD_TO_CART,
    payload:{
        name:data.title,
        price:data.price,
        countInStock:data.countInStock,
        product:data._id,
        qty
    }
});
localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (productID)=>async(dispatch,getState)=>{
    dispatch({
        type:actiontypes.REMOVE_FROM_CART,
        payload:productID
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data)=>async(dispatch)=>{
    dispatch({
        type:'CART_SAVE_SHIPPING_ADDRESS', payload:data
    })
    localStorage.setItem('shippingAddress',JSON.stringify(data))
}

export const savePaymentMethod = (data)=>async(dispatch)=>{
    dispatch({
        type:'CART_SAVE_PAYMENT_METHOD',payload:data
    })
}