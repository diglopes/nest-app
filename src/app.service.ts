import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Hello World!',
      env: {
        PORT: process.env.PORT,
        DATABASE: process.env.DATABASE,
      }
    }
  }
}
