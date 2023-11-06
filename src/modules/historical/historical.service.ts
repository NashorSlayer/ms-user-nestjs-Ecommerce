import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoricalService {
  create(createHistoricalDto: string) {
    return 'This action adds a new historical';
  }

  findAll() {
    return `This action returns all historical`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historical`;
  }

  update(id: number, updateHistoricalDto: string) {
    return `This action updates a #${id} historical`;
  }

  remove(id: number) {
    return `This action removes a #${id} historical`;
  }
}
