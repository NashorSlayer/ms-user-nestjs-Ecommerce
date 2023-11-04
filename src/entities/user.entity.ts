import { Buys } from "./buys.entity"
import { Cart } from "./cart.entity"

export class User {
    email: string
    address: string
    password: string
    lastName: string
    firstName: string
    image: string
    Cart: Cart
    Buys: Buys[]
}