import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly ProfilesService: ProfilesService) {}
  @Get()
  findAllProfile() {
    return this.ProfilesService.findAll();
  }

  @Get(':id')
  findOneProfile() {
    return this.ProfilesService.findOneProfile();
  }

  @Post()
  CreateNewProfile(@Body() CreateUserDto: CreateUserDto) {
    return CreateUserDto;
  }

  @Put(':id')
  UpdateProfile(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return {
      id: +id,
      ...UpdateUserDto,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  DeleteProfile() {}
}
