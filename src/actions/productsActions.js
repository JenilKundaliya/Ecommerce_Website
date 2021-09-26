import axios from 'axios'
import * as actiontypes from '../constants/productConstants'
export const listProducts = () => async(dispatch)=>{
    dispatch({
        type:actiontypes.GET_PRODUCTS_REQUEST
    })
    try{
const {data} = await axios.get('/api/products/')
dispatch({
    type:actiontypes.GET_PRODUCTS_SUCCESS,
    payload:data 
})
}catch(err){
dispatch({
    type:actiontypes.GET_PRODUCTS_FAIL,payload:err.message
})
    }
}

export const detailsProduct = (productID)=> async(dispatch)=>{
    dispatch({
        type:actiontypes.GET_PRODUCT_DETAIL_REQUEST,
        payload:productID
    })
    try{
        const {data} = await axios.get(`/api/products/${productID}`)
        dispatch({
            type:actiontypes.GET_PRODUCT_DETAIL_SUCCESS,payload:data
        })
    }
    catch(err){
        dispatch({
            type:actiontypes.GET_PRODUCT_DETAIL_FAIL,payload:err.message
        })
    }

}