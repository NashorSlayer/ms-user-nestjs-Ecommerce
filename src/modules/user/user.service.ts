import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { BcryptService } from '../auth/bcrypt.service';
import { User } from '../../entities';


@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {


    const newUser = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        Cart: {
          connect: { id: createUserDto.cartId }
        }
      }
    });

    return await this.findOne(newUser.id);

  }

  //search all users
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { Cart: true } });
  }

  //search by id
  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id: id },
      include: { Cart: true }
    });
  }

  //search user by email
  async findOneByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { email: email },
      include: { Cart: true }
    });
  }

  //update user
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {

    return await this.prisma.user.update({
      where: { id: id },
      include: { Cart: true },
      data: {
        email: updateUserDto.email,
        firstName: updateUserDto.firstName,
        password: updateUserDto.password,
        lastName: updateUserDto.lastName,
        address: updateUserDto.address,
        image: updateUserDto.image
      }
    });
  }

  async remove(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: { id: id },
      include: { Cart: true }
    });
  }
}
