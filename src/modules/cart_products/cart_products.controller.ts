import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartProductsService } from './cart_products.service';
import { CreateCartProductDto } from './dto/create-cart_product.dto';
import { UpdateCartProductDto } from './dto/update-cart_product.dto';
import { MessagePattern } from '@nestjs/microservices';
import { CartMsg } from 'src/utils/constants';

@Controller('cart-products')
export class CartProductsController {
  constructor(private readonly cartProductsService: CartProductsService) { }

  @MessagePattern(CartMsg.CREATE)
  async create() {
    return await this.cartProductsService.create();
  }

  @MessagePattern(CartMsg.FIND_ALL)
  findAll() {
    return this.cartProductsService.findAll();
  }

  @MessagePattern(CartMsg.FIND_ONE)
  findOne(@Param('id') id: string) {
    return this.cartProductsService.findOne(+id);
  }

  @MessagePattern(CartMsg.DELETE)
  remove(@Param('id') id: string) {
    return this.cartProductsService.remove(id);
  }
}
