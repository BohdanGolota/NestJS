import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Автоматично видаляє зайві поля з об'єкта
      forbidNonWhitelisted: true, // Генерує помилку, якщо є зайві поля
      transform: true, // Автоматично перетворює типи (наприклад, string -> number)
    }),
  );
  await app.listen(3000);
}
bootstrap();
