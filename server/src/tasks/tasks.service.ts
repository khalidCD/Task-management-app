import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { randomUUID } from 'crypto';
import { Task } from './entity/task.entity';
import { faker } from '@faker-js/faker';
@Injectable()
export class TasksService {
  private tasks: Task[] = Array.from({ length: 4 }, () => {
    return {
      id: randomUUID(),
      title: faker.company.name() || 'book shop',
      description: faker.book.title() || 'Buy books',
    };
  });

  createTask(CreateTask: CreateTaskDto) {
    const newTask = {
      id: randomUUID(),
      ...CreateTask,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks() {
    return this.tasks;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return { message: 'Task deleted' };
  }
}
