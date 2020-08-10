import {GET_ITEMS,SPECIFIC_ITEM,ITEM_DETAILS} from '../Actions/itemType';
import {cardData} from '../../constants/db';

const initialState=cardData;
const itemReducer=(state=initialState ,action)=>{
    switch(action.type){
        case GET_ITEMS : return initialState;
        case SPECIFIC_ITEM: return initialState.filter(card=>card.id===action.payload);
        case ITEM_DETAILS:return state[0].places.filter(card=>card._id===action.payload);
        default:return [{
            url:"https://vistapointe.net/images/mount-fuji-5.jpg",
            location:"Mount Fuji",
            country:"Japan",
            heading:"japanese food",
            rating:5,
            direction:"5.5km",
            weather:"16&#176;C"
          }];
    }
}
export default itemReducer;