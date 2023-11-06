import { Injectable } from '@nestjs/common';
import { UpdateCartProductDto } from './dto/update-cart_product.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCartProductDto } from './dto/create-cart_product.dto';

@Injectable()
export class CartProductsService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(createCartProductDto: CreateCartProductDto) {
    return await this.prisma.cart_products.create({
      data: {
        amount: createCartProductDto.amount,
        Cart: {
          connect: {
            id: createCartProductDto.cartId
          }
        },
        productId: createCartProductDto.productId
      }
    });
  }

  findAll() {
    return this.prisma.cart_products.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.cart_products.findUnique({
      where: { id: id }
    });
  }

  async update(id: string, updateCartProductDto: UpdateCartProductDto) {
    return await this.prisma.cart_products.update({
      where: { id: id },
      data: {
        amount: updateCartProductDto.amount,
      }
    });
  }

  async remove(id: string) {
    return await this.prisma.cart_products.delete({
      where: { id: id }
    });
  }
}
