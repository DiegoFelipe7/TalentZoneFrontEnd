import { Iproducts } from "../../products/interfaces/Product.interface";
import { Ibuy } from "./buy.interface";

export interface InitialStateCart {
    loading: boolean,
    buy: Ibuy[]
    products: Iproducts[]
    producstCart: Iproducts[]
}