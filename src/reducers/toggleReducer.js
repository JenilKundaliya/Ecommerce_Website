const isToggle = false;

const toggleReducer = (state = isToggle,action) =>{
    switch(action.type){
        case "SET_TOGGLE" : return {isToggle:true}
        case "DELETE_TOGGLE" : return {isToggle : false}
        default : return state;
    }
}

export default toggleReducer;