import { Injectable } from '@nestjs/common';
import { CreateHistoricalProductDto } from './dto/create-historical_product.dto';
import { UpdateHistoricalProductDto } from './dto/update-historical_product.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Historical_products } from 'src/entities';

@Injectable()
export class HistoricalProductsService {

  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async create(createHistoricalProductDto: CreateHistoricalProductDto): Promise<Historical_products> {

    const date = new Date();

    const response = await this.prismaService.historical_products.create({
      data: {
        order_buy_id: createHistoricalProductDto.order_buy_id,
        date: date,
        Historical: {
          connect: {
            id: createHistoricalProductDto.historical_id
          }
        }
      },
      include: {
        Historical: true
      }
    });
    if (!response.Historical) {
      console.log("No se creo el historial");
      return;
    }

    return response;

  }

  findAll(): Promise<Historical_products[]> {
    return this.prismaService.historical_products.findMany({
      include: {
        Historical: true
      }
    });
  }

  async findOne(id: string): Promise<Historical_products> {
    console.log(id);
    return await this.prismaService.historical_products.findUnique({
      where: { id: id },
      include: {
        Historical: true
      }
    });

  }

  async update(id: string, updateHistoricalProductDto: UpdateHistoricalProductDto): Promise<Historical_products> {
    return await this.prismaService.historical_products.update({
      where: { id: id },
      data: {
        date: updateHistoricalProductDto.date,
      },
      include: {
        Historical: true
      }
    });
  }

  async remove(id: string): Promise<Historical_products> {
    return await this.prismaService.historical_products.delete({
      where: { id: id },
      include: {
        Historical: true
      }
    });
  }
}
