import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { TasksModule } from './tasks/tasks.module';

import { RegisterPageModule } from './register-page/register-page.module';
import { LoginPageController } from './login-page/login-page.controller';
import { LoginPageService } from './login-page/login-page.service';
import { LoginPageModule } from './login-page/login-page.module';

@Module({
  imports: [ProfilesModule, TasksModule, RegisterPageModule, LoginPageModule],
  controllers: [AppController, LoginPageController],
  providers: [AppService, LoginPageService],
})
export class AppModule {}
