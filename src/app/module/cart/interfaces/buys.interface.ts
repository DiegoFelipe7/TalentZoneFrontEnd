import { Iproducts } from "../../products/interfaces/Product.interface";

export interface Ibuys {
    idType: string,
    identification: string,
    clientName: string,
    products: Iproducts[]
}