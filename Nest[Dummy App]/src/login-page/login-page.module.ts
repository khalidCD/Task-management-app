import { Module } from '@nestjs/common';
import { LoginPageController } from './login-page.controller';
import { LoginPageService } from './login-page.service';
import { RegisterPageModule } from 'src/register-page/register-page.module';

@Module({
  imports: [RegisterPageModule],
  controllers: [LoginPageController],
  providers: [LoginPageService],
})
export class LoginPageModule {}
