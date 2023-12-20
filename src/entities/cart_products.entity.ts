import { Cart } from "./cart.entity";

export class Cart_products {
    id: string;
    Cart: Cart;
    product_id: string;
    amount: number;
}