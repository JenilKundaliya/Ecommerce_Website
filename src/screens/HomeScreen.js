import React, { useEffect } from 'react'
import Product from '../components/Product'
import './HomeScreen.css'
import LoadingBox from '../components/LoadingBox'
import ErrorBox from '../components/ErrorBox'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productsActions'
function HomeScreen() {
    const dispatch = useDispatch()
const productList = useSelector((state)=>state.productList)
const {loading,error,products} = productList;

useEffect(()=>{
dispatch(listProducts())
    

},[])
    return (
        <div className="homescreen">
        {loading?(<LoadingBox />)
            :error?(<ErrorBox />)
            :(
        
        <div>
           <h1 className="homescreen__title">Latest Products</h1> 
           <div className="homescreen__products">
            {products.map((product)=>{
                return <Product key={product.id} product={product} />
            })}
        

           </div>
            </div> 
            )}
        </div>
    )
}

export default HomeScreen
