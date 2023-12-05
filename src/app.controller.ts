import { Controller, Get, Post, Headers, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/test')
  async postHello(
    @Headers() headers: any,
    @Res() res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    try {
      console.log(headers);
      const customHeaderValue = headers['validation-token'];
      await this.appService.postHello(headers);
      res.setHeader('Validation-Token', customHeaderValue);
      return res.status(200).send('Hello World!');
    } catch (error) {
      throw new Error(error);
    }
  }
}
