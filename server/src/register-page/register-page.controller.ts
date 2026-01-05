import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserRegisterDto } from './dto/user-register.dto';
import { RegisterPageService } from './register-page.service';
@Controller('register-page')
export class RegisterPageController {
  constructor(private readonly RegisterPageService: RegisterPageService) {}
  @Get()
  findAllUser() {
    return this.RegisterPageService.getAllUser();
  }
  @Post('register')
  login(@Body() UserDetails: UserRegisterDto) {
    return this.RegisterPageService.createUser(UserDetails);
  }
}
