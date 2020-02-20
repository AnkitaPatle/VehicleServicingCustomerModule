import axios from 'axios';
import ACTION_TYPES from '../signup/Signup.ActionType';


const apiUrl = 'api/';

const SignupAction = entity => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.REGISTER_SUCCESS,
        payload: axios.post(apiUrl, entity)
    });
    return result;
};


export default SignupAction;