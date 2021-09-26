import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getMyOrders } from '../actions/orderActions';
import './MyOrdersScreen.css'
function MyOrdersScreen(props) {
    const dispatch = useDispatch()
    const orders = useSelector(state=>state.orderMineList)
    const {order,loading} = orders;
    useEffect(()=>{
    dispatch(getMyOrders())
    },[dispatch])
    return (
        <div>
            {loading? <h1>Loading</h1>
            : (
                
                    <table id="orders" className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>DATE</th>
                          <th>TOTAL</th>
                          <th>PAID</th>
                          <th>DELIVERED</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.map((order) => (
                          <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>{order.totalPrice.toFixed(2)}</td>
                            <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                            <td>
                              {order.isDelivered
                                ? order.deliveredAt.substring(0, 10)
                                : 'No'}
                            </td>
                            <td>
                              <button
                                type="button"
                                className="small"
                                onClick={() => {
                                  props.history.push(`/order/${order._id}`);
                                }}
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  
            )
            }
          
            
        </div>
    )
}

export default MyOrdersScreen
