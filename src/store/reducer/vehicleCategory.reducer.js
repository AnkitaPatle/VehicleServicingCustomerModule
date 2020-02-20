import {ADDCATEGORY ,GETALL_CATEGORY} from '../actions/vehicleCategory.action'

const initialState = {
    addcategorydata: "",
    getallcatdata: ""
};

const vehicleCat =function(state=initialState ,action){
    console.log("payload" + action.payload);
    switch (action.type) {
        case ADDCATEGORY :{
            return {
                ...state,
                addcategorydata:action.payload
            }
        }
        case GETALL_CATEGORY : {
            return{
                ...state,
                getallcatdata:action.payload

            }
        }

        default: {
            return state;
        }
    }
};

export default vehicleCat;