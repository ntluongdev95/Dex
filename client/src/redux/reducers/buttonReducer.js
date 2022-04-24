import { CLOSE_MODAL, OPEN_MODAL } from "../constants";
  
const initialState={
    isOpen:false
}

export const buttonReducer =(state=initialState,action)=>{
     switch(action.type){
         case OPEN_MODAL:
             return{
                isOpen :true
             }
        case CLOSE_MODAL:
            return{
                isOpen:false
            }
        default:
            return state
     }
}