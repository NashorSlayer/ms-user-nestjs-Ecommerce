import { Module } from '@nestjs/common';
import { CartProductsService } from './cart_products.service';
import { CartProductsController } from './cart_products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [CartProductsController],
  providers: [CartProductsService, PrismaService],
  exports: [CartProductsService]
})
export class CartProductsModule { }
