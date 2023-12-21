import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from 'src/entities';


@Injectable()
export class UserService {
  bcryptService: any;

  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {


    const response = await this.prisma.users.create({
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
      },
      include: {
        Cart: true,
        Historical: true
      }
    });
    if (!response.Cart) {
      console.log("No se creo el carrito");
      return;
    }
    if (!response.Historical) {
      console.log("No se creo el historial");
      return;
    }

    return response;
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
      include:
      {
        Cart: true,
        Historical: true
      }
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
        address: updateUserDto.address,
        image: updateUserDto.image
      }
    });
  }

  async remove(id: string): Promise<User> {

    const user = this.findOne(id);
    if (!user) {
      console.log("No se encontro el usuario");
      return;
    }

    await this.prisma.users.delete({
      where: { id: id },
      include: {
        Cart: true,
        Historical: true,
      },
    });

    await this.prisma.carts.delete({
      where: { id: (await user).Cart.id },
    });

    await this.prisma.historicals.delete({
      where: { id: (await user).Historical.id },
    });

    return user;

  }
}
