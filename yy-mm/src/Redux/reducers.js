import { FIND_PRODUCT, REDUCE_PRODUCT } from "./actionTypes";
import fff from "../Pictures/fff.JPG"



const initialState = {
    inventory : [{name:"גיטרה קלאסית",price:500, img:fff},{name:"גיטרה חשמלית",price:500,img:fff},{name:"גיטרה אקוסטית",price:500,img:fff},
                // {name:"פסנתר כנף"},{name:"פסנתר קיר"},{name:"פסנתר קלאס"},
                // {name:"כינור אלקטרוני"},{name:"כינור ברוק"},{name:"כינור קלאס"},
                // {name:""},{name:""},{name:""}
            ],
};

export const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCT:
            return state;
        case REDUCE_PRODUCT:
            return state;
        default:
            return state;
    }
}

