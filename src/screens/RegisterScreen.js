import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import { register } from '../actions/userActions';
import '../screens/SignInScreen.css'
export const RegisterScreen = (props) => {
    const dispatch = useDispatch();

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
  
    const [password,setPassword] = useState('')
    const userRegister = useSelector(state=>state.userRegister);
    const {loading,error,userInfo} = userRegister;
    const submitHandler = (e)=>{
e.preventDefault();
dispatch(register(name,email,password))

}
useEffect(()=>{
    if(userInfo){

        props.history.push('/')
    }
   console.log(userInfo)
},[userInfo,props.history])
   
    
    return (
        
        <div className="signin__screen">
            
            <div className="signin__heading">
                <h1>Register</h1>
            </div>
            
            <form className="form" onSubmit={submitHandler}>
               
                <div className="formele">
                    <label htmlFor="name">Name</label>
               <input type="text" id="name" placeholder="Enter You Name " required onChange={e => setName(e.target.value)}></input>
                </div>
                <div className="formele">
                    <label htmlFor="email">Email Address</label>
               <input type="email" id="email" placeholder="Enter You Email " required onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="formele">
                    <label htmlFor="password">Password</label>
               <input type="password" id="password" placeholder="Enter You Password " required onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="formbtn">
                    <label />
                    <button className="primary" type="submit">Register</button>
                </div>
                <div className="newcustomer">
                    <label />
                    <div>
                        Already Have an account?
                        <Link to='/signin'>Sign in to Your Account</Link>
                    </div>
                </div>

            </form>
        </div>
        
    )
}
