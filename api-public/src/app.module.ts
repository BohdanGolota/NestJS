import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NewsController } from './news/news.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NEWS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://guest:guest@rabbitmq:5672`],
          queue: 'news_queue',
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  controllers: [NewsController],
})
export class AppModule {}
