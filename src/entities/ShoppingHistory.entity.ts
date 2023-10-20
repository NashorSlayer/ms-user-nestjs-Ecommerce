import { User } from "./user.entity"


export class ShoppingHistory {
    id: string
    productId: string
    amount: number
    image: string
    User: User
}