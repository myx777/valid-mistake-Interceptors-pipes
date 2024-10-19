import { Body, Controller, Get, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidationPipe } from './app.validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Pipe для валидации параметров запроса
  @Get(':id')
  async findUser(@Param('id', ValidationPipe) id: string) {
    return {id};
  }

  // Pipe для валидации query-параметров
  @Get()
  async filterUser(@Query('filter', ValidationPipe) filter: string) {
    return {filter}
  }

  // Pipe для валидации данных в теле запроса
  @Post()
  async createUser(@Body() body: any) {
    return body;
  }
}
