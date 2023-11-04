import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(createCartDto: CreateCartDto) {
    return await this.prisma.cart.create({
      data: {
        productId: createCartDto.productId,
        amount: createCartDto.amount
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

  async update(id: string, updateCartDto: UpdateCartDto) {
    return await this.prisma.cart.update({
      where: { id: id },
      data: {
        amount: updateCartDto.amount
      }
    });
  }

  async removeProductsFromCart(id: string, productId: string) {
    return await this.prisma.cart.delete({
      where: { id: id, productId: productId },
    });
  }

  async remove(id: string) {
    return await this.prisma.cart.delete({
      where: { id: id },
    });
  }
}
