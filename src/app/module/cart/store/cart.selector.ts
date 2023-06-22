import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { InitialStateCart } from "../interfaces/InitialStateCart";

export const SelectorCart = (state: AppState) => state.cart;
export const SelectorLoading = createSelector(SelectorCart, (state: InitialStateCart) => state.loading);
export const SelectorProducts = createSelector(SelectorCart, (state: InitialStateCart) => state.products);
export const SelectorProductsPayment = createSelector(SelectorCart, (state: InitialStateCart) => state.producstCart);