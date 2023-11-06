import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule, CartModule, UserModule } from './modules';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaModule } from './prisma/prisma.module';
import { HistoricalModule } from './modules/historical/historical.module';
import { CartProductsModule } from './modules/cart_products/cart_products.module';
import { HistoricalProductsModule } from './modules/historical_products/historical_products.module';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'USER_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.RABBITMQ_URL],
                    queue: process.env.RMQ_QUEUE,
                    queueOptions: {
                        durable: false
                    },
                },
            }
        ]),

        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        PrismaModule,
        UserModule,
        AuthModule,
        CartModule,
        HistoricalModule,
        HistoricalProductsModule,
        CartProductsModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule { }
