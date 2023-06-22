import { createAction, props } from '@ngrx/store';
import { Iproducts } from '../../products/interfaces/Product.interface';
import { Ibuy } from '../interfaces/buy.interface';


export const GETALLCART = createAction('[CART] GETALLCART')
export const GETALLCARTSUCCEFUL = createAction('[CART] GETALLCARTSUCCEFUL', props<{ product: Iproducts[] }>())
export const GETALLCARTFAILED = createAction('[CART] GETALLCARTFAILED')

export const SAVEBUYS = createAction('[BUY] SAVEBUYS', props<{ buys: Ibuy }>())
export const SAVEBUYSSUCCEFUL = createAction('[BUY] SAVEBUYSSUCCEFUL', props<{ buys: Ibuy }>())
export const SAVEBUYFAILED = createAction('[BUY] SAVEBUYFAILDER', props<{ buys: Ibuy }>())


export const GETALLPRODUCT = createAction('[PRODUCT] GETALLPRODUCT')
export const GETALLPRODUCTSUCCEFUL = createAction('[PRODUCT] GETALLPRODUCTSUCCEFUL', props<{ product: Iproducts[] }>())
export const GETALLPRODUCTFAILED = createAction('[PRODUCT] GETALLPRODUCTFAILED')
