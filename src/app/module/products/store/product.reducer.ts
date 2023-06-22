import { createReducer, on } from "@ngrx/store"
import { InitialStateProducst } from "../interfaces/InitialStateProduct"
import { ProductAction } from "."

export const InitialState: InitialStateProducst = {
    loading: false,
    products: []
}


export const ProductReducer = createReducer(InitialState,
    on(ProductAction.GETALLPRODUCTS, (state) => {
        return { ...state, loading: false }
    }),

    on(ProductAction.GETALLPRODUCTSUCCEUL, (state, action) => {
        return { ...state, loading: false, products: action.products }
    }),

    on(ProductAction.REMOVEPRODUCTSUCEFULL, (state, action) => {
        return { ...state, products: state.products.filter(ele => ele.id != action.id) }
    }),
    on(ProductAction.SAVEPRODUCTSUCEFULL, (state, action) => {
        return { ...state, products: [...state.products, action.product] }
    }),
    on(ProductAction.UPDATEPRODUCTSUCEFULL, (state, action) => {
        return { ...state, products: state.products.map((ele) => ele.id === action.product.id ? action.product : ele) }
    })

)