import { Injectable } from '@nestjs/common';
import { User } from './entity/Register.entity';
import { UserRegisterDto } from './dto/user-register.dto';

@Injectable()
export class RegisterPageService {
  public Users: User[] = [];

  createUser(UserDetails: UserRegisterDto) {
    const NewUser = {
      ...UserDetails,
    };
    this.Users.push(NewUser);
    return NewUser;
  }
  getAllUser() {
    return this.Users;
  }
}
