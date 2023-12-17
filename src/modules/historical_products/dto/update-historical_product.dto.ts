import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoricalProductDto } from './create-historical_product.dto';

export class UpdateHistoricalProductDto extends PartialType(CreateHistoricalProductDto) {
    date: Date;

}
