import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMsg } from 'src/utils/constants';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern(UserMsg.CREATE)
  async create(@Payload() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @MessagePattern(UserMsg.FIND_ALL)
  async findAll() {
    return await this.userService.findAll();
  }

  @MessagePattern(UserMsg.FIND_ONE)
  async findOne(@Payload() id: string) {
    return await this.userService.findOne(id);
  }

  @MessagePattern(UserMsg.UPDATE)
  async update(@Payload() id: string, updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @MessagePattern(UserMsg.DELETE)
  async remove(@Payload() id: string) {
    return await this.userService.remove(id);
  }
}
