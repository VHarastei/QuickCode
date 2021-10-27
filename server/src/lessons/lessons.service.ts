import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson, LessonDocument } from './schemas/lesson.schema';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name)
    private readonly sectionModel: Model<LessonDocument>,
  ) {}

  async create(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const createdLesson = await this.sectionModel.create(createLessonDto);
    return createdLesson;
  }

  async findAll(): Promise<Lesson[]> {
    return this.sectionModel.find().exec();
  }
}
