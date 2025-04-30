import { REDUCE_PRODUCT } from "./actionTypes";
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



const inventoryInitialState = {
    inventory: [{ name: "גיטרה קלאסית", price: 430, src: classGuitar, description: "לחיעבכי", amount: 5 },
    { name: "גיטרה חשמלית", price: 5430, src: electricGuitar, description: "לחיעבכי", amount: 0 },
    { name: "גיטרה אקוסטית", price: 1785, src: acousticGuitar, description: "לחיעבכי", amount: 5 },
    { name: "פסנתר כנף", price: 32900, src: grandPiano, description: "לחיעבכי", amount: 5 },
    { name: "פסנתר קיר", price: 21900, src: wallPiano, description: "לחיעבכי", amount: 5 },
    { name: "פסנתר חשמלי", price: 4500, src: electricPiano, description: "לחיעבכי", amount: 5 },
    { name: "כינור אלקטרוני", price: 8390, src: electricViolin, description: "לחיעבכי", amount: 5 },
    { name: "כינור ברוק", price: 2199, src: brukViolin, description: "לחיעבכי", amount: 5 },
    { name: "כינור קלאסי", price: 569, src: classicViolin, description: "לחיעבכי", amount: 5 },
    { name: "נבל חשמלי", price: 12000, src: electricHarp, description: "לחיעבכי", amount: 5 },
    { name: "נבל מיני", price: 690, src: miniHarp, description: "לחיעבכי", amount: 5 },
    { name: "נבל קלאסי", price: 999, src: classHarp, description: "לחיעבכי", amount: 5 }
    ],

};



export const inventoryReducer = (state = inventoryInitialState, action) => {
    switch (action.type) {
        // case FIND_PRODUCT:
        //     return state;
        case REDUCE_PRODUCT:
            return state;

        default:
            return state;
    }

}

