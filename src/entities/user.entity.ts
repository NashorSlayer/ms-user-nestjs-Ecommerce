import { Cart } from "./cart.entity"
import { ShoppingHistory } from "./shoppingHistory.entity"

export class User {
    email: string
    address: string
    password: string
    lastName: string
    firstName: string
    image: string
    ShoppingHistory: ShoppingHistory[]
    Cart: Cart
}