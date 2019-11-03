// allow .env file
import { config } from 'dotenv';
config();

// allow Express' way of debugging
import Debug from 'debug';
const debug = Debug('nest-app:main');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// allow import {} from '@src/'
import 'module-alias/register';

async function bootstrap() {
  debug('bootstraping...');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
