import { Module } from '@nestjs/common';
import { RegisterPageController } from './register-page.controller';
import { RegisterPageService } from './register-page.service';

@Module({
  controllers: [RegisterPageController],
  providers: [RegisterPageService],
  exports: [RegisterPageService],
})
export class RegisterPageModule {}
