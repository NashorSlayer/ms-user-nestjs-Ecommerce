import { Injectable } from '@nestjs/common';
import { Cart } from '../../entities';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {

  constructor(
    private prisma: PrismaService
  ) { }
  async create(): Promise<Cart> {
    return await this.prisma.cart.create({
      data: {
      }
    })
  }

  async findAll(): Promise<Cart[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<Cart> {
    return await this.prisma.cart.findFirst({
      where: { id: id }
    })
  }

  async remove(id: string): Promise<Cart> {
    return await this.prisma.cart.delete({
      where: { id: id },
    });
  }
}
