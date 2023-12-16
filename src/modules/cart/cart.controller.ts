import { Controller } from '@nestjs/common';
import { CartService } from './cart.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CartMsg } from 'src/utils/constants';
import { UpdateCart } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @MessagePattern(CartMsg.CREATE)
  async create() {
    return await this.cartService.create();
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
  async update(@Payload() id: string, updateCartDto: UpdateCart) {
    return await this.cartService.update(id, updateCartDto);
  }

  @MessagePattern(CartMsg.DELETE)
  async remove(@Payload() id: string) {
    return await this.cartService.remove(id);
  }
}
