import { Module } from '@nestjs/common';
import { LoginPageController } from './login-page.controller';
import { LoginPageService } from './login-page.service';
import { RegisterPageModule } from 'src/register-page/register-page.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    RegisterPageModule,
    JwtModule.register({
      secret: 'secretkey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [LoginPageController],
  providers: [LoginPageService],
})
export class LoginPageModule {}
