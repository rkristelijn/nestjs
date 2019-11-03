import Debug from 'debug';
const debug = Debug('nest-app:app.service');

import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class AppService
  implements OnApplicationBootstrap, OnApplicationShutdown {
  onApplicationBootstrap() {
    const { PROTOCOL, HOST, PORT } = process.env;
    debug(`Initialization... ${PROTOCOL}://${HOST}:${PORT}`);
  }

  onApplicationShutdown(signal?: string) {
    debug(`Cleanup...`);
  }

  getHello(): string {
    debug('getHello');
    return 'Hello World!';
  }
}
