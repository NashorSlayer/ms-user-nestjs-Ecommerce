import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { historicals } from '@prisma/client';

@Injectable()
export class HistoricalService {

  constructor(
    private prismaService: PrismaService,
  ) { }

  async create(): Promise<historicals> {
    return await this.prismaService.historicals.create({
      data: {}
    });
  }

  async findAll(): Promise<historicals[]> {
    return await this.prismaService.historicals.findMany();
  }

  async findOne(id: string): Promise<historicals> {
    return await this.prismaService.historicals.findUnique({
      where: { id: id },
    });
  }

  async remove(id: string): Promise<historicals> {
    return await this.prismaService.historicals.delete({
      where: { id: id },
    });
  }
}
