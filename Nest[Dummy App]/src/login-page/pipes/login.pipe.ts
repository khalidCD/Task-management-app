import { PipeTransform, BadRequestException } from '@nestjs/common';
import { loginUserDto } from '../dto/login.dto';

export class LoginPipe implements PipeTransform {
  transform(value: loginUserDto) {
    const { username, password } = value;

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

    if (typeof password !== 'string') {
      throw new BadRequestException('Password must be a string');
    }

    const regex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    if (!regex.test(password)) {
      throw new BadRequestException(
        'Password must contain letters, numbers and minimum 6 characters',
      );
    }

    return value;
  }
}
