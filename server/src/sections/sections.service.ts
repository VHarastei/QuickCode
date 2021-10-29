import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attempt, AttemptDocument } from 'src/attempts/schemas/attempt.schema';
import { Lesson } from 'src/lessons/schemas/lesson.schema';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section, SectionDocument } from './schemas/section.schema';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(Section.name)
    private readonly sectionModel: Model<SectionDocument>,
    @InjectModel(Attempt.name)
    private readonly attemptModel: Model<AttemptDocument>,
  ) {}

  async create(createSectionDto: CreateSectionDto): Promise<Section> {
    const createdSection = await this.sectionModel.create(createSectionDto);
    return createdSection;
  }

  async findAll(): Promise<Section[]> {
    return this.sectionModel.find().select('-lessons');
  }

  async findOne(id: string): Promise<any> {
    const section = await this.sectionModel
      .findById(id)
      .populate('lessons', { section: false, attempts: false });

    if (!section) {
      throw new NotFoundException('Section not found');
    }

    await Promise.all(
      section.lessons.map(
        async (
          lesson: Lesson & {
            _id: any;
          },
          index,
        ) => {
          const attempts = await this.attemptModel.find({
            lesson: lesson._id,
          });

          let avgAccuracy = 0;
          attempts.forEach((item) => {
            avgAccuracy += item.accuracy / attempts.length;
          });
          section.lessons[index].avgAccuracy = +avgAccuracy.toFixed(2);
        },
      ),
    );

    return section;
  }
}
