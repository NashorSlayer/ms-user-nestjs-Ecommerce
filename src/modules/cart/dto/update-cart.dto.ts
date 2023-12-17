import { PartialType } from '@nestjs/mapped-types';
import { Cart } from 'src/entities';

export class UpdateCart extends PartialType(Cart) {
    isEmpty: boolean;
}