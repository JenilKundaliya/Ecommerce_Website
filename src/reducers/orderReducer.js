import * as actiontypes from '../constants/orderConstants'
export const orderReducer = (state={success:false,loading:true},action)=>{
    switch(action.type){
        case actiontypes.CREATE_ORDER_REQUEST:
            return{loading:true}

        case actiontypes.CREATE_ORDER_SUCCESS:
            return{loading:false,success:true,order:action.payload}
            case actiontypes.CREATE_ORDER_FAIL:
                return{loading:false,error:action.payload}
                default:
                    return state;
    }
}

export const orderDetailsReducer = (state={loading:true,order:{},detailsFound:false},action)=>{
switch(action.type){
    case actiontypes.ORDER_DETAILS_REQUEST:
        return {loading:true}
        case actiontypes.ORDER_DETAILS_SUCCESS:
            return {loading:false, detailsFound:true,order:action.payload}
            case actiontypes.ORDER_DETAILS_FAIL:
                return {loading:false,error:action.payload}
                default :
                return state;
}
}
export const orderMineListReducer = (state = {order:[],loading:true},action)=>{
    switch(action.type){
        case actiontypes.MINE_ORDERS_REQUEST:
            return {loading:true}
            case actiontypes.MINE_ORDERS_SUCCESS:
                return {loading:false,order:action.payload}
                case actiontypes.MINE_ORDERS_FAIL:
                    return {loading:false,error:action.payload}
                    default:
                        return state;
    }
}