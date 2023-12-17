import { Injectable } from '@nestjs/common';
import { Cart } from '../../entities';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCart } from './dto/update-cart.dto';

@Injectable()
export class CartService {

  constructor(
    private prisma: PrismaService
  ) { }
  async create(): Promise<Cart> {
    return await this.prisma.carts.create({})
  }

  async findAll(): Promise<Cart[]> {
    return await this.prisma.carts.findMany();
  }

  async findOne(id: string): Promise<Cart> {
    return await this.prisma.carts.findFirst({
      where: { id: id }
    })
  }

  async update(id: string, updateCartDto: UpdateCart): Promise<Cart> {
    return await this.prisma.carts.update({
      where: { id: id },
      data: { isEmpty: updateCartDto.isEmpty }
    })
  }

  async remove(id: string): Promise<Cart> {
    return await this.prisma.carts.delete({
      where: { id: id },
    });
  }
}
