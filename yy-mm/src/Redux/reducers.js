import { FIND_PRODUCT, REDUCE_PRODUCT ,ADD_CART} from "./actionTypes";
import classGuitar from "../pictures/giturs/classGuitar.jpg"
import electricGuitar from "../pictures/giturs/electricGuitar.jpg"
import acousticGuitar from "../pictures/giturs/acousticGuitar.jpg"
import grandPiano from "../pictures/pianoes/grandPiano.jpg"
import electricPiano from "../pictures/pianoes/electricPiano.jpeg"
import wallPiano from "../pictures/pianoes/wallPiano.jpg"
import classHarp from "../pictures/harps/classHarp.png"
import electricHarp from "../pictures/harps/electricHarp.jpg"
import miniHarp from '../pictures/harps/miniHarp.jpg'
import brukViolin from "../pictures/violins/brukViolin.jpg"
import classicViolin from "../pictures/violins/classicViolin.jpg"
import electricViolin from "../pictures/violins/electricViolin.png"



const initialState = {
    inventory : [{name:"גיטרה קלאסית",price:500, src:classGuitar,description:"לחיעבכי",amount:5},
        {name:"גיטרה חשמלית",price:500,src:electricGuitar,description:"לחיעבכי",amount:0},
        {name:"גיטרה אקוסטית",price:500,src:acousticGuitar,description:"לחיעבכי",amount:5},
        {name:"פסנתר כנף",price:500,src:grandPiano,description:"לחיעבכי",amount:5},
        {name:"פסנתר קיר",price:555,src:wallPiano,description:"לחיעבכי",amount:5},
        {name:"פסנתר חשמלי",price:555,src:electricPiano,description:"לחיעבכי",amount:5},
        {name:"כינור אלקטרוני",price:555,src:electricViolin,description:"לחיעבכי",amount:5},
        {name:"כינור ברוק",price:555,src:brukViolin,description:"לחיעבכי",amount:5},
        {name:"כינור קלאסי",price:555,src:classicViolin,description:"לחיעבכי",amount:5},
        {name:"נבל חשמלי",price:555,src:electricHarp,description:"לחיעבכי",amount:5},
        {name:"נבל מיני",price:555,src:miniHarp,description:"לחיעבכי",amount:5},
        {name:"נבל קלאסי",price:555,src:classHarp,description:"לחיעבכי",amount:5}
            ],
        
    cart: [],
};

export const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FIND_PRODUCT:
        //     return state;
        case REDUCE_PRODUCT:
            return state;
        case ADD_CART:
            // return {...state, cart:state.cart.push(action.payload.product)}
            return {
                ...state,
                cart: [...state.cart, action.payload] }
        default:
            return state;
    }
   
}

