import {vehicleCategory,getallCategory} from "../../services/service";


export const ADDCATEGORY = "CATEGORY;";
export const GETALL_CATEGORY= "GETALL_CATEGORY";


export function addVehicleCategory(category){

    return dispatch =>
        vehicleCategory(category).then((response) => { console.log("In action ", response)
            if (response) {
                return dispatch({
                    type: ADDCATEGORY,
                    payload: response
                });
            }
        });

}

export function getVehicleCategory(){
    return dispatch =>
        getallCategory().then((response) =>{
            if(response){
                return dispatch({
                    type:GETALL_CATEGORY,
                    payload:response
                })
            };
        });
}