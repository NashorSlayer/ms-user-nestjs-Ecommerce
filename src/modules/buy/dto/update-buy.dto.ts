import { PartialType } from '@nestjs/mapped-types';
import { CreateBuyDto } from './create-buy.dto';

export class UpdateBuyDto extends PartialType(CreateBuyDto) {
    productId: string;
    amount: number; // tota price of the buy
    quantity: number; // quantity of products
    date: Date;
    userId: string;
}
