import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCart } from './dto/update-cart.dto';
import { carts } from '@prisma/client';

@Injectable()
export class CartService {

  constructor(
    private prisma: PrismaService
  ) { }
  async create(): Promise<carts> {
    return await this.prisma.carts.create({
      data: {}
    })
  }

  async findAll(): Promise<carts[]> {
    return await this.prisma.carts.findMany();
  }

  async findOne(id: string): Promise<carts> {
    return await this.prisma.carts.findFirst({
      where: { id: id }
    })
  }

  async update(id: string, updateCartDto: UpdateCart): Promise<carts> {
    return await this.prisma.carts.update({
      where: { id: id },
      data: { isEmpty: updateCartDto.isEmpty }
    })
  }

  async remove(id: string): Promise<carts> {
    return await this.prisma.carts.delete({
      where: { id: id },
    });
  }
}
