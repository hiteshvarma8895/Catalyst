import {  ADDITEMTOCART, COLOR, MATERIAL, REMOVEITEMFROMCART } from "./Type"

const initialState={
    filters:{
        materials:[],
        colors:[]
    },
    cart:[]
}

 const ShoppingReducer=(state=initialState,action)=>{
    switch(action.type){
        case MATERIAL:
            return{
                ...state,
            filters:{...state.filters,
            materials:action.data}
        };

        case COLOR:
            return{
                ...state,
            filters:{...state.filters,
            colors:action.data}
        };
        
        case ADDITEMTOCART:
            return{
                ...state,
            cart:[...state.cart,action.data]
        };
        case REMOVEITEMFROMCART:
            return{
                ...state,
            cart:action.data
        };
    }
}

export default ShoppingReducer;

