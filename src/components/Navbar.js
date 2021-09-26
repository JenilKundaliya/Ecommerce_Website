import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { signOut } from '../actions/userActions'
import './Navbar.css'
// import { sideToggle } from '../actions/toggle'
function Navbar({click}) {
const {userInfo} = useSelector(state=>state.userSignIn)
const dispatch =  useDispatch();
const signOutHandler = ()=>{
 dispatch(signOut());
}

  return (
    
    <div className="navbar">
      {/* logo */}

      <div className="logo"><h3><Link to="/">Ecommerce</Link></h3></div>
      {/* links */}
      <div className="linksdiv">
        <ul className="links">
          <li className="cart__link">
              <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                 <span>
                Cart
                  <span className="cartlogo__badge"></span>
                </span> 
              </Link>
          </li>
          {
            userInfo? (<li className="linkchild">
          
          <Link to="/signin" className="signoutbtn" onClick={signOutHandler}>Sign Out</Link>
          
          
              
          </li>
            ):''
          }
           {
            userInfo? (<li className="linkchild">
          
          <Link to="/myorders" className="minebtn">Order History</Link>
          
          
              
          </li>
            ):''
          }
           
          
          <li className="linkchild">
            {
              userInfo ? <Link to="/">
                {userInfo.name}
              </Link>:
<Link to="/signin">Sign In</Link>
            }
              
          </li>
    
        </ul>
      </div> 
      <div className="hamburgermenu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* hamburger menu */}
    </div>
  )
}

export default Navbar
