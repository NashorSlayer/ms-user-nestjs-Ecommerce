import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoricalProductsService } from './historical_products.service';
import { CreateHistoricalProductDto } from './dto/create-historical_product.dto';
import { UpdateHistoricalProductDto } from './dto/update-historical_product.dto';

@Controller('historical-products')
export class HistoricalProductsController {
  constructor(private readonly historicalProductsService: HistoricalProductsService) {}

  @Post()
  create(@Body() createHistoricalProductDto: CreateHistoricalProductDto) {
    return this.historicalProductsService.create(createHistoricalProductDto);
  }

  @Get()
  findAll() {
    return this.historicalProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicalProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoricalProductDto: UpdateHistoricalProductDto) {
    return this.historicalProductsService.update(+id, updateHistoricalProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicalProductsService.remove(+id);
  }
}
