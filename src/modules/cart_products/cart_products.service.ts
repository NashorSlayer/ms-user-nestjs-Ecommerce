import { Injectable } from '@nestjs/common';
import { UpdateCartProductDto } from './dto/update-cart_product.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CartProductsService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  create() {
    return "";

  }

  findAll() {
    return `This action returns all cartProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartProduct`;
  }

  update(id: number, updateCartProductDto: UpdateCartProductDto) {
    return `This action updates a #${id} cartProduct`;
  }

  remove(id: string) {
    return `This action removes a #${id} cartProduct`;
  }
}
