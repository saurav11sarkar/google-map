import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug'],
  });
  await app.listen(process.env.PORT ?? 5000, () => {
    console.log(
      `Listening on port http://localhost:${process.env.PORT ?? 5000}`,
    );
  });
}
bootstrap().catch(console.error);
