import { Cart } from "src/entities";

export class CreateCartProductDto {
    productId: string;
    amount: number;
    Cart: Cart
}
