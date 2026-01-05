import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { LoginPageService } from './login-page.service';
import { loginUserDto } from './dto/login.dto';
import { LoginPipe } from './pipes/login.pipe';
@Controller('login-page')
export class LoginPageController {
  constructor(private readonly loginPageService: LoginPageService) {}

  @Post()
  @UsePipes(LoginPipe)
  sendLoginUser(@Body() loginData: loginUserDto) {
    return this.loginPageService.checkUser(loginData);
  }
}
