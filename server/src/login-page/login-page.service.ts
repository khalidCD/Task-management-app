import { Injectable } from '@nestjs/common';
import { RegisterPageService } from 'src/register-page/register-page.service';
import { loginUser } from './entity/login.user.entity';

@Injectable()
export class LoginPageService {
  constructor(private registerService: RegisterPageService) {}
  checkUser(loginData: loginUser) {
    const users = this.registerService.getAllUser();
    const existingUser = users.find((u) => u.username === loginData.username);
    if (!existingUser) {
      return { message: 'User not found' };
    }
    if (existingUser.password !== loginData.password) {
      return { message: 'Incorrect password' };
    }
    return {
      message: 'Login successful',
    };
  }
}
