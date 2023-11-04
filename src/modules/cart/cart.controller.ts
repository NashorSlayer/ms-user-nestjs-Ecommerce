import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CartMsg } from 'src/utils/constants';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @MessagePattern(CartMsg.CREATE)
  async create(@Payload() createCartDto: CreateCartDto) {
    return await this.cartService.create(createCartDto);
  }

  @MessagePattern(CartMsg.FIND_ALL)
  async findAll() {
    return await this.cartService.findAll();
  }

  @MessagePattern(CartMsg.FIND_ONE)
  async findOne(@Payload() id: string) {
    return await this.cartService.findOne(id);
  }

  @MessagePattern(CartMsg.UPDATE)
  async update(@Payload() id: string, updateCartDto: UpdateCartDto) {
    return await this.cartService.update(id, updateCartDto);
  }

  @MessagePattern(CartMsg.DELETE_PRODUCT)
  async removeProductsFromCart(@Payload() id: string, productId: string) {
    return await this.cartService.removeProductsFromCart(id, productId);
  }

  @MessagePattern(CartMsg.DELETE)
  async remove(@Payload() id: string) {
    return await this.cartService.remove(id);
  }
}
