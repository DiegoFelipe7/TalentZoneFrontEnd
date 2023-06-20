import { Iproducts } from "../../products/interfaces/Product.interface";

export interface Icart {
    product: Iproducts
    quantity: number,
}