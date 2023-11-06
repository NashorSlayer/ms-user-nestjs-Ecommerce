import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {

  constructor(
    private prisma: PrismaService
  ) { }
  async create() {
    return await this.prisma.cart.create({
      data: {
      }
    })
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.cart.findFirst({
      where: { id: id }
    })
  }

  async remove(id: string) {
    return await this.prisma.cart.delete({
      where: { id: id },
    });
  }
}
