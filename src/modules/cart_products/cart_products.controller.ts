import { Controller, Param } from '@nestjs/common';
import { CartProductsService } from './cart_products.service';
import { CreateCartProductDto } from './dto/create-cart_product.dto';
import { UpdateCartProductDto } from './dto/update-cart_product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Cart_productMsg } from 'src/utils/constants';

@Controller('cart-products')
export class CartProductsController {
  constructor(private readonly cartProductsService: CartProductsService) { }

  @MessagePattern(Cart_productMsg.CREATE)
  async create(createCartProductDto: CreateCartProductDto) {
    return await this.cartProductsService.create(createCartProductDto);
  }

  @MessagePattern(Cart_productMsg.FIND_ALL)
  findAll() {
    return this.cartProductsService.findAll();
  }

  @MessagePattern(Cart_productMsg.GETPRODUCTSBYCART)
  getCartByProducts(@Param('cart_id') cartid: string) {
    return this.cartProductsService.getCartByProducts(cartid);
  }

  @MessagePattern(Cart_productMsg.FIND_ONE)
  findOne(@Param('id') id: string) {
    return this.cartProductsService.findOne(id);
  }

  @MessagePattern(Cart_productMsg.UPDATE)
  update(@Payload() id: string, updateCartProductDto: UpdateCartProductDto) {
    return this.cartProductsService.update(id, updateCartProductDto);
  }

  @MessagePattern(Cart_productMsg.DELETE)
  remove(@Param('id') id: string) {
    return this.cartProductsService.remove(id);
  }
}
