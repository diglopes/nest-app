import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    Logger.log('Sending a hello world message');

    return {
      message: 'Hello World!',
      version: 2,
      env: {
        PORT: process.env.PORT,
        DATABASE: process.env.DATABASE,
      }
    }
  }
}
