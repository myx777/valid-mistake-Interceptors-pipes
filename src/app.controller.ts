import { Controller, Get, HttpException, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './http.exception.filter';

@UseFilters(HttpExceptionFilter)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // для тестирования
    // throw new HttpException('Oops', 404);

    return this.appService.getHello();
  }
}
