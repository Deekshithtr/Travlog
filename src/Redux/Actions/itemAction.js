import {GET_ITEMS} from './itemType';
import {SPECIFIC_ITEM} from './itemType';
import {ITEM_DETAILS} from './itemType';
export const GetItems=()=>{
    return { 
        type:GET_ITEMS
    }
 }
 export const specificItem=(id)=>{
     return{
        type:SPECIFIC_ITEM,
        payload:id
     }
 }

 export const itemDetails=(_id)=>{
return{
    type:ITEM_DETAILS,
    payload:_id
}
}