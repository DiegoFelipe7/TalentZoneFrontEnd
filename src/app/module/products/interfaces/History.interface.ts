export interface Ihistory {

    id?: string,
    date?: Date,
    idType: string,
    identification: string,
    clientName: string,
    products: Iproducts[]
}


export interface Iproducts {
    id: string,
    name: string
    quantity: number
}