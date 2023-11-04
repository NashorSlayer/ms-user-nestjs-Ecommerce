import { User } from "./user.entity"

export class Buys {
    id: string
    productId: string
    amount: number
    quantity: number
    date: Date
    User: User
}