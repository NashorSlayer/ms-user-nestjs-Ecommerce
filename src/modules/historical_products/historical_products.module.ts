import { Module } from '@nestjs/common';
import { HistoricalProductsService } from './historical_products.service';
import { HistoricalProductsController } from './historical_products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [HistoricalProductsController],
  providers: [HistoricalProductsService, PrismaService],
  exports: [HistoricalProductsService]
})
export class HistoricalProductsModule { }
