import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './SignInScreen.css'

import { useSelector,useDispatch} from 'react-redux';
import { signIn } from '../actions/userActions';
import CheckoutSteps from '../components/CheckoutSteps';

function SignInScreen(props) {
    const dispatch = useDispatch();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {userInfo} = useSelector(state=>state.userSignIn);
    const submitHandler = (e)=>{
e.preventDefault();
dispatch(signIn(email,password))

}
useEffect(()=>{
    if(userInfo){

        props.history.push('/')
    }
   console.log(userInfo)
},[userInfo,props.history])
   
    
    return (
        
        <div className="signin__screen">
            <CheckoutSteps step1></CheckoutSteps>
            <div className="signin__heading">
                <h1>Sign In</h1>
            </div>
            
            <form className="form" onSubmit={submitHandler}>
               
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
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div className="newcustomer">
                    <label />
                    <div>
                        New Customer?
                        <Link to='/register'>Create Your Account</Link>
                    </div>
                </div>

            </form>
        </div>
        
    )
}

export default SignInScreen
