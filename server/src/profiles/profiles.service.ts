import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Khalid',
      description: 'Backend developer learning NestJS',
    },
    {
      id: randomUUID(),
      name: 'Rahul',
      description: 'Frontend developer working with React',
    },
    {
      id: randomUUID(),
      name: 'Mahanth',
      description: 'Automation tester exploring backend concepts',
    },
    {
      id: randomUUID(),
      name: 'Tharun',
      description: 'Student learning full stack development',
    },
  ];
  private profile = {
    id: randomUUID(),
    name: 'siva',
    description: 'He is purshuing B.Tech{IT}',
  };
  findAll() {
    return this.profiles;
  }

  findOneProfile() {
    return this.profile;
  }
}
