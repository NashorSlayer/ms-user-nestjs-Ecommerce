import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { BcryptService } from './bcrypt.service';
import { JwtModule } from '@nestjs/jwt';
import { CartModule } from '../cart/cart.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { HistoricalModule } from '../historical/historical.module';
import { HistoricalService } from '../historical/historical.service';

@Module({
  imports: [
    UserModule,
    CartModule,
    HistoricalModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, BcryptService, HistoricalService],
})
export class AuthModule { }
