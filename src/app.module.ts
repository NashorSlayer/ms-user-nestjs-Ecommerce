import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule, BuyModule, CartModule, ShoppingHistoryModule, UserModule } from './modules';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaModule } from './prisma/prisma.module';

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
        ShoppingHistoryModule,
        BuyModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule { }
