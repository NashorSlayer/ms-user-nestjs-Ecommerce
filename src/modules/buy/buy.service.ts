import { Injectable } from '@nestjs/common';
import { CreateBuyDto } from './dto/create-buy.dto';
import { UpdateBuyDto } from './dto/update-buy.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BuyService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(createBuyDto: CreateBuyDto) {
    return await this.prisma.buys.create({
      data: {
        productId: createBuyDto.productId,
        quantity: createBuyDto.quantity,
        amount: createBuyDto.amount,
        date: createBuyDto.date,
        cartId: createBuyDto.cartId
      }
    });
  }

  async findAll() {
    return await this.prisma.buys.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.buys.findUnique({
      where: { id: id }
    });
  }

  async update(id: string, updateBuyDto: UpdateBuyDto) {
    return await this.prisma.buys.update({
      where: { id: id },
      data: {
        quantity: updateBuyDto.quantity,
        amount: updateBuyDto.amount,
      }
    });
  }

  remove(id: string) {
    return `This action removes a #${id} buy`;
  }
}
