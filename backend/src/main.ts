import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. CORS enable karein (Warna frontend block ho jayega)
  app.enableCors();

  // 2. Port 3001 rakhein (Kyunke 3000 par Frontend chal raha hai)
  await app.listen(3001);
  
  console.log('Backend running on: http://localhost:3001');
}
bootstrap();