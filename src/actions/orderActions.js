import * as actiontypes from '../constants/orderConstants'
import axios from 'axios'

export const createOrder = (order)=>async(dispatch,getState)=>{
dispatch({type:actiontypes.CREATE_ORDER_REQUEST,payload:order})
try{
    const {userSignIn:{userInfo}} = getState()
 
const {data} = await axios.post('https://ecommercewebsitemernstack.herokuapp.com/api/orders',order,{
    headers:{
        'Authorization':`Bearer ${userInfo.token}`
    }
})
dispatch({type:actiontypes.CREATE_ORDER_SUCCESS,payload:data.createdOrder})
console.log('order created  ')
localStorage.removeItem('cartItems')
    
}
catch(err){
dispatch({type:actiontypes.CREATE_ORDER_FAIL,payload:err.message})
}
}



export const detailsOrder = (orderId)=>async(dispatch,getState)=>{
    console.log('Into the details order sections')
    dispatch({type:actiontypes.ORDER_DETAILS_REQUEST,payload:orderId})
    try{
const {userSignIn:{userInfo}} = getState();
const {data} = await axios.get(`/api/orders/${orderId}`)
dispatch({type:actiontypes.ORDER_DETAILS_SUCCESS,payload:data})
console.log('order details found')
    }
    catch(err){
dispatch({type:actiontypes.ORDER_DETAILS_FAIL,payload:err.message})
    }
}

export const getMyOrders = ()=>async(dispatch,getState)=>{
    dispatch({type:actiontypes.MINE_ORDERS_REQUEST});
    try{
        const {userSignIn:{userInfo}} = getState();
        const {data} = await axios.get('https://ecommercewebsitemernstack.herokuapp.com/api/mine',userInfo)
        dispatch({type:actiontypes.MINE_ORDERS_SUCCESS,payload:data})
        

    }
    catch(err){
dispatch({type:actiontypes.MINE_ORDERS_FAIL,payload:err.message})
    }
}