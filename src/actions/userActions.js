import axios from "axios"
import * as actiontypes from '../constants/userConstants'

export const signIn = (email,password)=> async(dispatch)=>{
dispatch({
    type:actiontypes.USER_SIGNIN_REQUEST, payload:{email,password}
})
try{
const {data} = await axios.post('/api/users/signin',{email,password})
dispatch({
    type:actiontypes.USER_SIGNIN_SUCCESS, payload:data
})
localStorage.setItem('userInfo',JSON.stringify(data))
}
catch(err){
dispatch({
    type:actiontypes.USER_SIGNIN_FAIL, payload:err.message
})
}
}

export const register = (name,email,password)=>async(dispatch)=>{
    dispatch({
        type:actiontypes.USER_REGISTER_REQUEST,payload:{name,email,password}
    })
    try{
const {data} = await axios.post('/api/users/register',{name,email,password})
dispatch({
type:actiontypes.USER_REGISTER_SUCCESS,payload:data
})

    }
    catch(err){
        dispatch({
            type:actiontypes.USER_REGISTER_FAIL, payload:err.message
        })
    }
}

export const signOut = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: actiontypes.USER_SIGNOUT });
    document.location.href = '/signin';
  };