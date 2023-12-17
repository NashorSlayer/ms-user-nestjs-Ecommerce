import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class HistoricalService {

  constructor(
    private prismaService: PrismaService,
  ) { }

  async create() {
    return await this.prismaService.historicals.create({});
  }

  async findAll() {
    return await this.prismaService.historicals.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.historicals.findUnique({
      where: { id: id },
    });
  }

  async remove(id: string) {
    return await this.prismaService.historicals.delete({
      where: { id: id },
    });
  }
}
