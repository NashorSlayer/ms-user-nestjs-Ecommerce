import { Cart, ShoppingHistory } from "@prisma/client"

export class CreateUserDto {
    email: string
    address: string
    password: string
    lastName: string
    firstName: string
    image: string
    ShoppingHistory: ShoppingHistory[]
    Cart: Cart
}
