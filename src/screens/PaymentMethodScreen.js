import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

function PaymentMethodScreen(props) {
    const dispatch = useDispatch()
    const [paymentMethod,setPaymentMethod] = useState('PayPal')
    const cart = useSelector(state=>state.cart)
    const {shippingAddress} = cart;
    console.log(shippingAddress)
    if(!shippingAddress.address){
        props.history.push('/shipping')
    }
    const submitHandler = (e)=>{

        e.preventDefault();
        console.log(paymentMethod)
        dispatch(savePaymentMethod(paymentMethod))
props.history.push('/placeorder')

    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment</h1>
                </div>
                <div className="formel">
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required checked onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                        <label for="paypal">PayPal</label>
                    </div>
                </div>
                <div className="formel">
                    <div>
                        <input type="radio" id="stripe" value="Stripe" name="paymentMethod" required onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                        <label for="stripe">Stripe</label>
                    </div>
                </div>
                <div className="formbtn">
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}

export default PaymentMethodScreen
