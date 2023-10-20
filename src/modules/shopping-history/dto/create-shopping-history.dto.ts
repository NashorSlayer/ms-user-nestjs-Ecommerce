import { User } from "@prisma/client"

export class CreateShoppingHistoryDto {
    id: String
    user: User
    userId: string
    productId: string
    createdAt: string
}
