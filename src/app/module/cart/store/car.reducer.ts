import { createReducer, on } from "@ngrx/store";
import { InitialStateCart } from "../interfaces/InitialStateCart";
import { CartAction } from ".";

export const intialStateCart: InitialStateCart = {
    loading: false,
    buy: [],
    products: [],
    producstCart: []
}


export const CartReducer = createReducer(intialStateCart,
    on(CartAction.GETALLCART, (state) => {
        return { ...state, loading: true }
    }),
    on(CartAction.GETALLCARTSUCCEFUL, (state, action) => {
        return { ...state, loading: true, products: action.product }
    }),

    on(CartAction.GETALLCARTFAILED, (state, action) => {
        return { ...state, loading: false, products: [] }
    }),
    on(CartAction.GETALLPRODUCTSUCCEFUL, (state, action) => {
        return { ...state, producstCart: action.product }
    })






)