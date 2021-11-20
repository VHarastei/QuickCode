import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section, SectionDocument } from 'src/sections/schemas/section.schema';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson, LessonDocument } from './schemas/lesson.schema';
import { lessonsSeed } from './schemas/lesson.seed';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name)
    private readonly lessonModel: Model<LessonDocument>,
    @InjectModel(Section.name)
    private readonly sectionModel: Model<SectionDocument>,
  ) {}

  async create(createLessonDto: CreateLessonDto): Promise<any> {
    // const createdLesson = await this.lessonModel.create(createLessonDto);
    // await this.sectionModel.findByIdAndUpdate(
    //   createLessonDto.section,
    //   { $push: { lessons: createdLesson._id } },
    //   { new: true, useFindAndModify: false },
    // );

    // return createdLesson;

    return Promise.all(
      lessonsSeed.map(async (lesson) => {
        const createdLesson = await this.lessonModel.create(lesson);

        await this.sectionModel.findByIdAndUpdate(
          lesson.section,
          { $push: { lessons: createdLesson._id } },
          { new: true, useFindAndModify: false },
        );
      }),
    );
  }

  async findAll(): Promise<Lesson[]> {
    return this.lessonModel.find().exec();
  }

  async findOne(id: string): Promise<Lesson> {
    return this.lessonModel.findById(id).populate('section').exec();
  }

  async findRandom(sectionId: string): Promise<any> {
    const section = await this.sectionModel
      .findById(sectionId)
      .populate('lessons');

    const count = section.lessons.length;
    if (count) {
      const lesson = section.lessons[Math.floor(Math.random() * count)];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return { lessonId: lesson._id };
    } else {
      return { lessonId: null };
    }
  }
}
