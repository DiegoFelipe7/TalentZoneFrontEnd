export interface Iproducts {
    id?: string,
    name: string,
    inInventory: number,
    enabled: Boolean,
    min: number,
    max: number,
    quantity?: number
}