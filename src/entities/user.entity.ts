import { Cart, Historical } from "."

export class User {
    email: string
    address: string
    password: string
    lastName: string
    firstName: string
    image: string

    Cart: Cart
    Historical: Historical
}