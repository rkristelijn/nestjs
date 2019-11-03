import Debug from 'debug';
const debug = Debug('nest-app:app.controller');

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    debug('GET getHello');
    return this.appService.getHello();
  }
}
