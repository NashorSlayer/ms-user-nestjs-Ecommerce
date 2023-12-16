import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '../../entities';


@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {


    const newUser = await this.prisma.users.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        Cart: {
          connect: { id: createUserDto.Cart.id }
        },
        Historical: {
          connect: { id: createUserDto.Historical.id }
        }
      }
    });

    return await this.findOne(newUser.id);

  }

  async findAll(): Promise<User[]> {
    return this.prisma.users.findMany(
      {
        include: {
          Cart: true,
          Historical: true
        }
      }
    );
  }

  async findOne(id: string): Promise<User> {
    return await this.prisma.users.findUnique({
      where: { id: id },
      include: { Cart: true, Historical: true }
    });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.prisma.users.findUnique({
      where: { email: email },
      include: {
        Cart: true,
        Historical: true
      }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {

    return await this.prisma.users.update({
      where: { id: id },
      include: {
        Cart: true,
        Historical: true
      },
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
    return await this.prisma.users.delete({
      where: { id: id },
      include: {
        Cart: true,
        Historical: true
      }
    });
  }
}
