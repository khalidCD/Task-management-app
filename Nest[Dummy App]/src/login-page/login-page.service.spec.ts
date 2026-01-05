import { Test, TestingModule } from '@nestjs/testing';
import { LoginPageService } from './login-page.service';
import { RegisterPageService } from 'src/register-page/register-page.service';

describe('LoginPageService', () => {
  let service: LoginPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginPageService, RegisterPageService],
    }).compile();

    service = module.get<LoginPageService>(LoginPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
