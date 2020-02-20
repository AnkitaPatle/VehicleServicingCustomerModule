import ACTION_TYPES from '../signup/Signup.ActionType';
import { REQUEST, SUCCESS } from '../../shared/action-type.util';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {    
    case REQUEST(ACTION_TYPES.REGISTER_REQUEST):    
      return {
        ...state,
        
        
      };      
    case SUCCESS(ACTION_TYPES.REGISTER_SUCCESS):    
      return {
        ...state,
        
      };
    case SUCCESS(ACTION_TYPES.REGISTER_FAILURE):
      return {
        ...state,
        
      };
    
    default:
      return state;
  }
};