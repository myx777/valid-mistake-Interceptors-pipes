import { Body, Controller, Get, Param, Post, Query, UseInterceptors, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';

import { JoiValidationPipe } from './app.joi.validation.pipe';
import { RegisterDto } from './registerDto';
import { registerSchema } from './register.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UsePipes(new JoiValidationPipe(registerSchema))
  @Post('/register')
  async createUser(@Body() body: RegisterDto) {
    return body;
  }
}
