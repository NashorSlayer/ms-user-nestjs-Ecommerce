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
    const response = await this.prisma.cart_products.create({
      data: {
        amount: createCartProductDto.amount,
        Cart: {
          connect: {
            id: createCartProductDto.cart_id
          }
        },
        product_id: createCartProductDto.product_id
      },
      include: {
        Cart: true
      }
    });
    if (!response.Cart) {
      console.log("no se creo el carrito");
      return;
    }
    return response;
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
      where: { id: id },
      include: {
        Cart: true
      }
    });
  }

  async getCartByProducts(cartId: string): Promise<Cart_products[]> {
    return await this.prisma.cart_products.findMany({
      where: { cart_id: cartId },
      include: {
        Cart: true
      }
    });
  }

  async update(id: string, updateCartProductDto: UpdateCartProductDto): Promise<Cart_products> {

    return await this.prisma.cart_products.update({
      where: { id: id },
      data: {
        amount: updateCartProductDto.amount
      },
      include: {
        Cart: true
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
