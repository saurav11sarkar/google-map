import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug'],
  });
  app.enableCors({ origin: '*', credentials: true });
  app.setGlobalPrefix('api/v1', {
    exclude: ['/'],
  });
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 5000, () => {
    console.log(
      `Listening on port http://localhost:${process.env.PORT ?? 5000}`,
    );
  });
}
bootstrap().catch(console.error);
