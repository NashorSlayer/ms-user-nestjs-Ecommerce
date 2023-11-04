import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuyService } from './buy.service';
import { CreateBuyDto } from './dto/create-buy.dto';
import { UpdateBuyDto } from './dto/update-buy.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BuystMsg } from 'src/utils/constants';

@Controller('buy')
export class BuyController {
  constructor(private readonly buyService: BuyService) { }

  @MessagePattern(BuystMsg.CREATE)
  async create(@Payload() createBuyDto: CreateBuyDto) {
    return await this.buyService.create(createBuyDto);
  }

  @MessagePattern(BuystMsg.FIND_ALL)
  async findAll() {
    return await this.buyService.findAll();
  }

  @MessagePattern(BuystMsg.FIND_ONE)
  async findOne(@Payload() id: string) {
    return await this.buyService.findOne(id);
  }

  @MessagePattern(BuystMsg.UPDATE)
  async update(@Payload() id: string, updateBuyDto: UpdateBuyDto) {
    return await this.buyService.update(id, updateBuyDto);
  }

  @MessagePattern(BuystMsg.DELETE)
  async remove(@Payload() id: string) {
    return await this.buyService.remove(id);
  }
}
