import { BadRequestException, PipeTransform } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-tasks.dto';

export class TaskPipe implements PipeTransform {
  transform(value: CreateTaskDto) {
    const { title, description } = value;

    if (!title || !description) {
      throw new BadRequestException('fill all needed details');
    }
    if (typeof title == 'number' || description == 'number') {
      throw new BadRequestException('Title & description must be string');
    }
    return value;
  }
}
