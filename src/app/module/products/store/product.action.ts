
import { createAction, props } from "@ngrx/store";
import { Iproducts } from "../interfaces/Product.interface";
import { Iresponse } from "../interfaces/Response.interface";

export const GETALLPRODUCTS = createAction("[PRODUCTS] GETALLPRODUCTS")
export const GETALLPRODUCTSUCCEUL = createAction("[PRODUCTS] GETALLPRODUCTSUCCEUL", props<{ products: Iproducts[] }>())
export const GETALLPRODUCTFAILED = createAction("[PRODUCTS] GETALLPRODUCTFAILED", props<{ products: Iproducts[] }>())


export const REMOVEPRODUCT = createAction("[PRODUCT] REMOVEPRODUCT", props<{ id: string }>())
export const REMOVEPRODUCTSUCEFULL = createAction("[PRODUCT] REMOVEPRODUCTSUCEFULL", props<{ id: string }>())
export const REMOVEPRODUCTFAILED = createAction("[PRODUCT] REMOVEPRODUCTFAILED", props<{ message: Iresponse }>())


export const SAVEPRODUCT = createAction("[PRODUCT] SAVEPRODUCT", props<{ product: Iproducts }>())
export const SAVEPRODUCTSUCEFULL = createAction("[PRODUCT] SAVEPRODUCTSUCEFULL", props<{ product: Iproducts }>())
export const SAVEPRODUCTFAILED = createAction("[PRODUCT] SAVEPRODUCTFAILED", props<{ message: Iresponse }>())


export const UPDATEPRODUCT = createAction("[PRODUCT] UPDATEPRODUCT", props<{ product: Iproducts, id: string }>())
export const UPDATEPRODUCTSUCEFULL = createAction("[PRODUCT] UPDATEPRODUCTSUCEFULL", props<{ product: Iproducts }>())
export const UPDATEPRODUCTFAILED = createAction("[PRODUCT] UPDATEPRODUCTFAILED", props<{ message: Iresponse }>())