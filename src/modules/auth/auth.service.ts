import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CartService } from '../cart/cart.service';
import { BcryptService } from './bcrypt.service';
import { User } from 'src/entities';
import { HistoricalService } from '../historical/historical.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,

    private readonly cartService: CartService,
    private readonly historicalService: HistoricalService,
    private jwtService: JwtService,
    private bcryptService: BcryptService
  ) { }

  async login(LoginUserDto: LoginUserDto): Promise<any> {

    //verifico las credenciales
    const user = await this.userService.findOneByEmail(LoginUserDto.email);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const isPasswordValid = await this.bcryptService.compare(LoginUserDto.password, user.password);
    if (!isPasswordValid) {
      throw new Error("Contraseña incorrecta");
    }

    //genero el token
    const payload = { user: user };

    //lo devuelvo
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });

    return { user: user, access_token: token };
  }

  async register(registerUserDto: RegisterUserDto): Promise<any> {

    //verifico que no exista el usuario
    const user = await this.userService.findOneByEmail(registerUserDto.email);
    if (user) {
      throw new Error("Usuario ya existe");
    }

    //encrypt password
    const password = await this.bcryptService.hash(registerUserDto.password, 10);

    //create cart
    const cart = await this.cartService.create();
    const historical = await this.historicalService.create();


    return await this.userService.create({
      email: registerUserDto.email,
      password: password,
      firstName: registerUserDto.firstName,
      lastName: registerUserDto.lastName,
      Historical: {
        id: historical.id
      },
      Cart: {
        id: cart.id
      },
    });
  }

  // //@UseGuards(Auht)
  // async getProfile(idUser: string): Promise<User> {
  //   const user = await this.userService.findOne(idUser)
  //   return user
  // }
}
