export class CreateBuyDto {
    productId: string;
    amount: number; // tota price of the buy
    quantity: number; // quantity of products
    date: Date;
    cartId: string
}


