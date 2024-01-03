import { ADD_TO_CART } from "../../Constants"
export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}
export const RemoveToCart = (data) => {
    return {
        type: "Remove_TO_CART",
        data: data
    }
}