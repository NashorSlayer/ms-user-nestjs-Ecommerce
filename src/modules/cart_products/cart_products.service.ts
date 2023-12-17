import { Injectable } from '@nestjs/common';
import { UpdateCartProductDto } from './dto/update-cart_product.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCartProductDto } from './dto/create-cart_product.dto';
import { Cart_products } from 'src/entities';

@Injectable()
export class CartProductsService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(createCartProductDto: CreateCartProductDto): Promise<Cart_products> {
    try {
      return await this.prisma.cart_products.create({
        data: {
          amount: createCartProductDto.amount,
          Cart: {
            connect: {
              id: createCartProductDto.Cart.id
            }
          },
          productId: createCartProductDto.productId
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  findAll(): Promise<Cart_products[]> {
    return this.prisma.cart_products.findMany(
      {
        include: {
          Cart: true
        }
      }
    );
  }

  async findOne(id: string): Promise<Cart_products> {
    return await this.prisma.cart_products.findUnique({
      where: { id: id }
    });
  }

  async getCartByProducts(cartId: string): Promise<Cart_products[]> {
    return await this.prisma.cart_products.findMany({
      where: { cartId: cartId }
    });
  }

  async update(id: string, updateCartProductDto: UpdateCartProductDto): Promise<Cart_products> {
    return await this.prisma.cart_products.update({
      where: { id: id },
      data: {
        amount: updateCartProductDto.amount
      }
    });
  }

  async remove(id: string): Promise<Cart_products> {
    return await this.prisma.cart_products.delete({
      where: { id: id },
      include: { Cart: true }
    });
  }
}
