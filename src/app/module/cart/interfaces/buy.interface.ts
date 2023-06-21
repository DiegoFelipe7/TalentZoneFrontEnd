
export interface Ibuy {
    idType: string,
    identification: string,
    clientName: string,
    products: Iproduct[]
}


export interface Iproduct {
    id: string,
    quantity: number
}