import { Controller } from '@nestjs/common';
import { HistoricalService } from './historical.service';
import { HistoricalMsg } from 'src/utils/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('historical')
export class HistoricalController {
  constructor(private readonly historicalService: HistoricalService) { }

  @MessagePattern(HistoricalMsg.CREATE)
  create() {
    return this.historicalService.create();
  }

  @MessagePattern(HistoricalMsg.FIND_ALL)
  findAll() {
    return this.historicalService.findAll();
  }

  @MessagePattern(HistoricalMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.historicalService.findOne(id);
  }

  @MessagePattern(HistoricalMsg.DELETE)
  remove(@Payload() id: string) {
    return this.historicalService.remove(id);
  }
}
