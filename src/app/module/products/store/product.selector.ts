import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { InitialStateProducst } from "../interfaces/InitialStateProduct";

export const SelectorProducts = (state: AppState) => state.products;

export const SelecProduct = createSelector(SelectorProducts, (state: InitialStateProducst) => state.products)