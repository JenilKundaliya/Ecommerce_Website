import React from 'react'
import './SideDrawer.css'
import {Link} from 'react-router-dom'
function SideDrawer({show}){
    const sideDrawerClass = ["sidedrawer"]
    if(show){
sideDrawerClass.push("show")
    }
    return (
        <div className={sideDrawerClass.join(" ")} onClick={()=>{console.log("clicked")}}>
            
        <ul className="sidedrawer__links">
          <li className="linkchild">
              <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                 <span onClick={()=>console.log("clicked")}>
                Cart
                  <span className="sidedrawer__badge"></span>
                </span> 
              </Link>
          </li>
          <li className="linkchild">
              <Link to="/">
                 
                  Shop
                  
              </Link>
          </li>
        
        </ul>
      </div> 
       
    )
}

export default SideDrawer
