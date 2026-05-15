import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// DTOs Fix: Added '!' to remove red dots/initialization errors
export class CreateTodoDto {
  title!: string; 
  description!: string;
}

export class UpdateTodoDto {
  title?: string;
  description?: string;
}

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  // 1. Create Todo
  async create(createTodoDto: CreateTodoDto) {
    return await this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        description: createTodoDto.description,
      },
    });
  }

  // 2. Get All Todos
  async findAll() {
    return await this.prisma.todo.findMany({
      orderBy: {
        id: 'asc', // Taake list sequence mein rahe
      },
    });
  }

  // 3. Find One (Helper)
  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: { id: Number(id) },
    });
    
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  // 4. Update Todo
  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.findOne(id); // Pehle check karein ke record hai
    
    return await this.prisma.todo.update({
      where: { id: Number(id) },
      data: {
        title: updateTodoDto.title,
        description: updateTodoDto.description,
      },
    });
  }

  // 5. Delete Todo
  async remove(id: number) {
    await this.findOne(id);
    
    await this.prisma.todo.delete({
      where: { id: Number(id) },
    });
    
    return { message: 'Todo deleted successfully' };
  }
}