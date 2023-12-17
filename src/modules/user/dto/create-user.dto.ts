import { Cart, Historical } from "src/entities"

export class CreateUserDto {
    email: string
    password: string
    lastName: string
    firstName: string
    Cart: Cart
    Historical: Historical
}
