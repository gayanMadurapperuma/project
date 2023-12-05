import { Injectable, Headers } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(@Headers() headers): string {
    const customHeaderValue =
      headers['Validation-Token'] || headers['validation-token'];
    if (customHeaderValue) {
      return 'Hello World!';
    } else {
      throw new Error('Custom header not found');
    }
  }
}
