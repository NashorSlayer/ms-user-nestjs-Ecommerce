import { Injectable } from '@nestjs/common';
import { CreateHistoricalProductDto } from './dto/create-historical_product.dto';
import { UpdateHistoricalProductDto } from './dto/update-historical_product.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class HistoricalProductsService {

  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async create(createHistoricalProductDto: CreateHistoricalProductDto) {

    const date = new Date();

    return await this.prismaService.historical_products.create({
      data: {
        orderBuyId: createHistoricalProductDto.orderBuyId,
        date: date,
        Historical: {
          connect: {
            id: createHistoricalProductDto.historicalId
          }
        }
      }
    });
  }

  findAll() {
    return this.prismaService.historical_products.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.historical_products.findUnique({
      where: { id: id },
      include: {
        Historical: true
      }
    });
  }

  async update(id: string, updateHistoricalProductDto: UpdateHistoricalProductDto) {
    return await this.prismaService.historical_products.update({
      where: { id: id },
      data: {
        date: updateHistoricalProductDto.date,
      }
    });
  }

  async remove(id: string) {
    return await this.prismaService.historical_products.delete({
      where: { id: id },
      include: {
        Historical: true
      }
    });
  }
}
