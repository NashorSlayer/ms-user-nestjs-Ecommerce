import { Buys } from "./buys.entity"

export class Cart {
    id: string
    productId: string
    amount: number
    image: string
    Buys: Buys[]
}