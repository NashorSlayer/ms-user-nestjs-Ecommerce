import { Controller, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthMsg } from 'src/utils/constants';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern(AuthMsg.LOGIN)
  async login(@Payload() LoginUserDto: LoginUserDto) {
    return await this.authService.login(LoginUserDto);
  }

  @MessagePattern(AuthMsg.REGISTER)
  async register(@Payload() RegisterUserDto: RegisterUserDto) {
    return await this.authService.register(RegisterUserDto);
  }

  // @MessagePattern(AuthMsg.PROFILE)
  // async profile(@Payload() idUser: string) {
  //   return await this.authService.getProfile(idUser)
  // }

}
