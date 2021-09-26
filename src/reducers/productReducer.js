import * as actiontypes from '../constants/productConstants'
export const productlistReducer = (state = {products:[]},action)=>{
    switch(action.type){
        case actiontypes.GET_PRODUCTS_REQUEST:
            return { loading:true}
        case actiontypes.GET_PRODUCTS_SUCCESS:
            return {loading:false,products:action.payload };
        case actiontypes.GET_PRODUCTS_FAIL:
            return {loading:false,error:action.payload};
            default:
                return state;
    }
}
export const productDetailsReducer = (state={productDetail:{}},action)=>{
    switch(action.type){
        case actiontypes.GET_PRODUCT_DETAIL_REQUEST:
            return {loading:true}
            case actiontypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {loading:false,productDetail:action.payload}
            case actiontypes.GET_PRODUCT_DETAIL_FAIL:
            return {loading:false,error:action.payload}
                default :
                return state;
    }
}

