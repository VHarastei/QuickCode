import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { Lesson } from './entities/lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
