import * as actiontypes from '../constants/userConstants'
export const userRegisterReducer = (state = {},action)=>{
    switch(action.type){
        case actiontypes.USER_REGISTER_REQUEST:
            return{loading:true}
            case actiontypes.USER_REGISTER_SUCCESS:
                return{loading:false,userInfo:action.payload}
                case actiontypes.USER_REGISTER_FAIL:
                    return{loading:false,error:action.payload}

                  
                    default:
                        return state;
    }
}

export const userSignInReducer = (state = {},action)=>{
    switch(action.type){
        case actiontypes.USER_SIGNIN_REQUEST:
            return{loading:true}
            case actiontypes.USER_SIGNIN_SUCCESS:
                return{loading:false,userInfo:action.payload}
                case actiontypes.USER_SIGNIN_FAIL:
                    return{loading:false,error:action.payload}

                    case actiontypes.USER_SIGNOUT:
                        return {}
                    default:
                        return state;
    }
}


