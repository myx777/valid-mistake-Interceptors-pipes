import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './app.validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // подключил pipe  в global
  app.useGlobalPipes(new ValidationPipe);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
