import { ADDITEMTOCART, COLOR, MATERIAL, REMOVEITEMFROMCART } from "./Type"


export const MaterialAction=(data)=>{
    return{
        type:MATERIAL,
        data:data
    }
}
export const ColorAction=(data)=>{
    return{
        type:COLOR,
        data:data
    }
}
export const AddItemAction=(data)=>{
    return{
        type:ADDITEMTOCART,
        data:data
    }
}
export const RemoveItemAction=(data)=>{
    return{
        type:REMOVEITEMFROMCART,
        data:data
    }
}