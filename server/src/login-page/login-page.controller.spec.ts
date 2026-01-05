import { Test, TestingModule } from '@nestjs/testing';
import { LoginPageController } from './login-page.controller';
import { LoginPageService } from './login-page.service';
import { RegisterPageService } from 'src/register-page/register-page.service';

describe('LoginPageController', () => {
  let controller: LoginPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginPageController],
      providers: [LoginPageService, RegisterPageService],
    }).compile();

    controller = module.get<LoginPageController>(LoginPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
