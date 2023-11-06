import { Injectable } from '@nestjs/common';
import { CreateHistoricalProductDto } from './dto/create-historical_product.dto';
import { UpdateHistoricalProductDto } from './dto/update-historical_product.dto';

@Injectable()
export class HistoricalProductsService {
  create(createHistoricalProductDto: CreateHistoricalProductDto) {
    return 'This action adds a new historicalProduct';
  }

  findAll() {
    return `This action returns all historicalProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historicalProduct`;
  }

  update(id: number, updateHistoricalProductDto: UpdateHistoricalProductDto) {
    return `This action updates a #${id} historicalProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} historicalProduct`;
  }
}
