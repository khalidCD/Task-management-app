import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  UsePipes,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { TaskPipe } from './pipes/task.pipe';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guard/jwt-auth.guard';

@UseGuards(JwtGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @UsePipes(TaskPipe)
  @Post()
  create(@Body() CreateTask: CreateTaskDto) {
    return this.tasksService.createTask(CreateTask);
  }

  @Get()
  findAll() {
    return this.tasksService.getAllTasks();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.deleteTask(String(id));
  }
}
