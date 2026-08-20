import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { BlogModule } from './blog/blog.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [TodoModule, BlogModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
