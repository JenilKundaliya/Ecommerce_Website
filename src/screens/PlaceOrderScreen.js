import React, { useEffect } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import {useDispatch, useSelector} from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import { createOrder, detailsOrder } from '../actions/orderActions'
function PlaceOrderScreen(props) {
     const cart = useSelector(state=>state.cart)
     const dispatch = useDispatch()
const orderCreate = useSelector(state=>state.orderCreate)
const {loading,success,error,order} = orderCreate;
const toPrice = (num)=> Number(num.toFixed(2)); //5.1245 => "5.12" => 5.12
cart.itemsPrice = toPrice(cart.cartItems.reduce((a,c)=> a + c.qty*c.price,0)
)
cart.shippingPrice = cart.itemsPrice > 100? toPrice(0) : toPrice(10);
cart.totalPrice = cart.itemsPrice + cart.shippingPrice  
console.log(`success ${success}`)


const orderDetails = useSelector(state=>state.orderDetails)
const {detailsFound} = orderDetails

const placeOrderHandler = ()=>{
    console.log(`clickec ${success}`)
dispatch(createOrder({...cart,orderItems:cart.cartItems}))

}
const detailsOrderHandler = ()=>{

    // dispatch(detailsOrder(order._id))

}
useEffect(()=>{
if(success){
    props.history.push(`/order/${order._id}`)
}
})



    return (
        <div>
            {
                success?<h1>Order Created Successfully</h1>:<CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            }
            
            <div className="productscreen">
                <div className="productscreen__left">
                    <ul>
                        <li>
                            <div className="leftcard">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:</strong>{cart.shippingAddress.fullName} <br />
                                    <strong>Address:</strong>{cart.shippingAddress.address},
                                     {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="leftcard">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Payment:</strong>{cart.paymentMethod} 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="leftcard">
                                <h2>Order Items</h2>
                                <p>
                                    
                                    {
                                        cart.cartItems.map((item)=>{
                                          return (
                                          <div className="cartitem">
                                          <div className="cartitem__image">
                                              <img alt="product" src="data:image/jpeg;base64,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"></img>
                              
                                          </div>
                                          <Link to={`/products/${item.product}`} className="cartitem__name">
                                              <p>{item.name}</p>
                                          </Link>
                                          
                                          <p className="cartitem__select">{item.qty} x {item.price} = {item.qty * item.price}</p>
                                          
                                          
                                      </div>)
                                        })
                                    }
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="productscreen__right">
                    <ul>
                        <li>
                            <div>Items Price</div>
                            <div>{cart.itemsPrice}</div>
                        </li>
                        <li>
                            <div>Shipping Price</div>
                            <div>{cart.shippingPrice}</div>
                        </li>
                        <li>
                            <div>Total:</div>
                            <div>{cart.totalPrice}</div>
                            
                        </li>
                        <li>
                            {
                                success?
                                <button onClick={detailsOrderHandler}>Details Order</button>
                                :<button onClick={placeOrderHandler}>Place Order</button>
                            }
                            
                            
                        </li>
                    </ul>
                </div>



            </div>
        </div>
    )
}

export default PlaceOrderScreen
