import { Module } from '@nestjs/common';
import { ShoppingHistoryService } from './shopping-history.service';
import { ShoppingHistoryController } from './shopping-history.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [ShoppingHistoryController],
  providers: [ShoppingHistoryService, PrismaService],
  exports: [ShoppingHistoryService]
})
export class ShoppingHistoryModule { }
