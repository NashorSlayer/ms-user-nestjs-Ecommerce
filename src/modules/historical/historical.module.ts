import { Module } from '@nestjs/common';
import { HistoricalService } from './historical.service';
import { HistoricalController } from './historical.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [HistoricalController],
  providers: [HistoricalService, PrismaService],
  exports: [HistoricalService]
})
export class HistoricalModule { }
