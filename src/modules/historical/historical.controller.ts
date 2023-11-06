import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoricalService } from './historical.service';

@Controller('historical')
export class HistoricalController {
  constructor(private readonly historicalService: HistoricalService) { }

  @Post()
  create(@Body() createHistoricalDto: string) {
    return this.historicalService.create(createHistoricalDto);
  }

  @Get()
  findAll() {
    return this.historicalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoricalDto: string) {
    return this.historicalService.update(+id, updateHistoricalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicalService.remove(+id);
  }
}
