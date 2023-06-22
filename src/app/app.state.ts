import { ActionReducerMap } from "@ngrx/store";
import { InitialStateCart } from "./module/cart/interfaces/InitialStateCart";
import { CartReducer } from "./module/cart/store/car.reducer";
import { InitialStateProducst } from "./module/products/interfaces/InitialStateProduct";
import { ProductReducer } from "./module/products/store/product.reducer";

export interface AppState {
    cart: InitialStateCart,
    products: InitialStateProducst
}

export const APP_REDUCER: ActionReducerMap<AppState> = {
    cart: CartReducer,
    products: ProductReducer
}