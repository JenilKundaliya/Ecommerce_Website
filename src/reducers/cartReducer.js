import * as actiontypes from '../constants/cartConstants'



export const cartReducer = (state = {cartItems:[],paymentMethod:'PayPal'},action)=>{
    switch(action.type){
        case actiontypes.ADD_TO_CART :
            const item = action.payload;
            const existitem = state.cartItems.find((x)=> x.product === item.product);
            if(existitem){
                console.log('hii')
                return{
                    ...state,
                    cartItems:state.cartItems.map((x)=> x.product === existitem.product ? item : x)
                }
            }
            else{
                return{
                   ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
            case actiontypes.REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems:state.cartItems.filter((x)=> x.product !== action.payload)
                }

                case 'CART_SAVE_SHIPPING_ADDRESS':
                    return{
                        ...state,shippingAddress:action.payload
                    }
                    case 'CART_SAVE_PAYMENT_METHOD':
                        return{
                            ...state,
                            paymentMethod:action.payload
                        }



        default:
            return state;    
    }
}


