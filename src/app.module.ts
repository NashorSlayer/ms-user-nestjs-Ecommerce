import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { ShoppingHistoryModule } from './modules/shopping-history/shopping-history.module';
import { CartModule } from './modules/cart/cart.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        UserModule,
        AuthModule,
        CartModule,
        ShoppingHistoryModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule { }
