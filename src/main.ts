import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['*'],
    origin: `${process.env.ALLOW_ORIGIN}`,
    credentials: true,
  });
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
