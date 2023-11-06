import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { BcryptService } from './bcrypt.service';
import { JwtModule } from '@nestjs/jwt';
import { CartModule } from '../cart/cart.module';
import { CartService } from '../cart/cart.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    UserModule,
    CartModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, BcryptService],
})
export class AuthModule { }
