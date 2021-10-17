import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  create(createLessonDto: CreateLessonDto) {
    return 'This action adds a new lesson';
  }

  findAll() {
    return `This action returns all lesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }
}
