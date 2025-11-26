// api/src/main.ts
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow your frontend (Vercel domain) to call this API
  app.enableCors({
    origin: '*', // for MVP; later lock this to your Vercel domain
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Block API running on port ${port}`);
}

bootstrap();