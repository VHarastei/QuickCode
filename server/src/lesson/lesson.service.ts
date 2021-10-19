import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  create(createLessonDto: CreateLessonDto): string {
    return 'This action adds a new lesson';
  }

  async findAll(): Promise<Lesson[]> {
    const data = await this.lessonRepository.find();
    if (!data) {
      throw new NotFoundException('Lesson not found');
    }
    return data;
  }

  async findOne(id: string) {
    const data = await this.lessonRepository
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.section', 'section')
      .leftJoinAndSelect('lesson.attempts', 'attempts')
      .where('lesson.id = :id', { id })
      .getOne();

    if (!data) {
      throw new NotFoundException('Lesson not found');
    }
    return data;
  }
}
