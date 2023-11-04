import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from '../auth/bcrypt.service';


@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService,
    private bcrypt: BcryptService,
  ) { }

  async create(createUserDto: CreateUserDto) {

    // encrypt password
    const password = await this.bcrypt.encriptarContrasena(createUserDto.password);

    // create user
    return await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: password,
        address: createUserDto.address,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        image: createUserDto.image,
        cartId: createUserDto.cartId
      }
    });
  }

  //search all users
  async findAll() {
    return await this.prisma.user.findMany();
  }

  //search by id
  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: { id: id }
    });
  }

  //search user by email
  async findOneByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email: email }
    });
  }

  //update user
  async update(id: string, updateUserDto: UpdateUserDto) {

    // encrypt password
    const password = await this.bcrypt.encriptarContrasena(updateUserDto.password);

    return await this.prisma.user.update({
      where: { id: id },
      data: {
        email: updateUserDto.email,
        firstName: updateUserDto.firstName,
        password: password,
        lastName: updateUserDto.lastName,
        address: updateUserDto.address,
        image: updateUserDto.image
      }
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: { id: id }
    });
  }
}
