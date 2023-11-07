import { HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from '../user/user.service';
import { BcryptService } from './bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { CartService } from '../cart/cart.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly cartService: CartService,
    private jwtService: JwtService,
  ) { }

  async login(LoginUserDto: LoginUserDto) {

    //verifico las credenciales
    const user = await this.userService.findOneByEmail(LoginUserDto.email);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    const isPasswordValid = await this.bcryptService.verificarContrasena(LoginUserDto.password, user.password);
    if (!isPasswordValid) {
      throw new Error("Contraseña incorrecta");
    }
    //genero el token
    const payload = { userId: user.id, email: user.email };

    //lo devuelvo
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }

  async register(registerUserDto: RegisterUserDto) {

    console.log("dto_ register:", registerUserDto)
    //verifico que no exista el usuario
    const user = await this.userService.findOneByEmail(registerUserDto.email);
    if (user) {
      throw new Error("Usuario ya existe");
    }
    //encrypt password
    const password = await this.bcryptService.encriptarContrasena(registerUserDto.password);

    //create cart
    const cart = await this.cartService.create();

    //create user
    await this.userService.create({
      email: registerUserDto.email,
      password: password,
      firstName: registerUserDto.firstName,
      lastName: registerUserDto.lastName,
      cartId: cart.id
    })

    return HttpStatus.CREATED;
  }
}
