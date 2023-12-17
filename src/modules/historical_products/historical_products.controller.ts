import { Controller } from '@nestjs/common';
import { HistoricalProductsService } from './historical_products.service';
import { CreateHistoricalProductDto } from './dto/create-historical_product.dto';
import { UpdateHistoricalProductDto } from './dto/update-historical_product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Historical_productMsg } from 'src/utils/constants';

@Controller('historical-products')
export class HistoricalProductsController {

  constructor(private readonly historicalProductsService: HistoricalProductsService) { }

  @MessagePattern(Historical_productMsg.CREATE)
  async create(createCartProductDto: CreateHistoricalProductDto) {
    return await this.historicalProductsService.create(createCartProductDto);
  }

  @MessagePattern(Historical_productMsg.FIND_ALL)
  findAll() {
    return this.historicalProductsService.findAll();
  }

  @MessagePattern(Historical_productMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.historicalProductsService.findOne(id);
  }

  @MessagePattern(Historical_productMsg.UPDATE)
  update(@Payload() id: string, updateCartProductDto: UpdateHistoricalProductDto) {
    return this.historicalProductsService.update(id, updateCartProductDto);
  }

  @MessagePattern(Historical_productMsg.DELETE)
  remove(@Payload() id: string) {
    return this.historicalProductsService.remove(id);
  }
}
