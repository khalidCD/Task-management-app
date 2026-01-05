import { PipeTransform, BadRequestException } from '@nestjs/common';
import { UserRegisterDto } from '../dto/user-register.dto';
export class LoginPipe implements PipeTransform {
  transform(value: UserRegisterDto) {
    const { username, password, email } = value;

    if (!username) {
      throw new BadRequestException('Username is required');
    }

    if (typeof username !== 'string') {
      throw new BadRequestException('Username must be a string');
    }

    if (username.trim().length === 0) {
      throw new BadRequestException('Username cannot be empty');
    }

    if (!password) {
      throw new BadRequestException('Password is required');
    }

    const regex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    if (!regex.test(password)) {
      throw new BadRequestException(
        'Password must contain letters, numbers and minimum 6 characters',
      );
    }
    const emailregex = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;

    if (!emailregex.test(email)) {
      throw new BadRequestException('email must conation letters and "@"');
    }
    return value;
  }
}
