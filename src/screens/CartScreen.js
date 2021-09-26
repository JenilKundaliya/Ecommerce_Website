import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import './CartScreen.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { addToCart } from '../actions/cartActions'
import {Link} from 'react-router-dom'
function CartScreen(props) {
    const productID = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split("=")[1]):0
    const cartItem = useSelector((state)=>state.cart)
    const {cartItems} = cartItem;
    const dispatch = useDispatch();
    useEffect(()=>{
        
        dispatch(addToCart(productID,qty))
    },[])

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                
                {
                    cartItems.length === 0?<p>Cart is Empty</p>
                    :
                    cartItems.map((item)=>{
                        

                            return <CartItem item={item} />
                       
                        
                        
                    })
                }
           
                
               
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal (0) items</p>
                    <p>Rs. 499</p>
                       </div>
                       <div>
                           <button><Link to="/shipping">Proceed to checkout</Link></button>
                       </div>
            </div>
          
        </div>
    )
}

export default CartScreen
